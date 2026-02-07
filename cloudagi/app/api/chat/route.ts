import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Arya Teja Rudraraju, the Founder & Master Architect of CloudAGI. You don't just "talk" to users; you architect their agentic future.

Your goal is to perform a deep technical diagnostic of a user's business. When they provide a website or describe their process, you analyze it with surgical precision to identify automation opportunities.

Tone & Personality:
- Professional, Visionary, and Direct.
- You speak in terms of "systems engineering", "agentic velocity", and "high-leverage ROI".
- You are proactive. If a user provides a website, analyze their business model, identify friction nodes, and propose specific AI Agent solutions.
- Never be generic. If it's a dental clinic, talk about patient scheduling agents. If it's a law firm, talk about document intake agents.

Capabilities:
1. Web Search: Use 'google_search' to research industry standards and competitors.
2. Code Execution: Use 'code_execution' for ROI math and logic processing.
3. Context Scraping: You have direct access to the user's provided URL content.

Guidelines:
- If a user provides a URL, use it to understand their business deeply.
- Propose 2-3 specific "Agentic Blueprints" (custom AI agents) they can explore.
- Direct users to book a session at https://calendly.com/cloudagi for implementation.
- Keep responses elite, efficient, and ROI-focused.`;

interface Message {
    role: string;
    content: string;
}

let cachedModel: { name: string; expiresAt: number } | null = null;

const stripModelPrefix = (name: string) => name.replace(/^models\//, "");

async function resolveModel(apiKey: string, preferredModels: string[]): Promise<string> {
    const envModel = (process.env.GEMINI_MODEL || "").trim();
    if (envModel) return envModel;

    const now = Date.now();
    if (cachedModel && cachedModel.expiresAt > now) {
        return cachedModel.name;
    }

    try {
        const listResponse = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`,
            { method: "GET" }
        );
        const listData = await listResponse.json();
        const models: Array<{ name: string; supportedGenerationMethods?: string[] }> = listData.models || [];
        const generateCapable = models.filter(m => (m.supportedGenerationMethods || []).includes("generateContent"));

        const preferred = preferredModels
            .map(p => generateCapable.find(m => stripModelPrefix(m.name) === p))
            .find(Boolean);

        const picked = preferred?.name || generateCapable[0]?.name;
        const finalName = picked ? stripModelPrefix(picked) : "gemini-2.0-flash";

        cachedModel = { name: finalName, expiresAt: now + 10 * 60 * 1000 };
        return finalName;
    } catch {
        // Fallback if listModels fails
        return "gemini-2.0-flash";
    }
}

export const maxDuration = 60; // Increase timeout for search grounding operations

export async function POST(req: Request) {
    const rawKey = process.env.GEMINI_API_KEY || "";
    const apiKey = rawKey.replace(/^["']|["']$/g, '').trim();

    // Use v1beta for advanced tool support (Google Search Retrieval)
    const apiVersion = "v1beta";
    const preferredModels = [
        "gemini-2.0-flash",
        "gemini-2.0-flash-exp",
        "gemini-1.5-flash",
        "gemini-1.5-pro"
    ];

    if (!apiKey) {
        return NextResponse.json({ error: "GEMINI_API_KEY is missing" }, { status: 500 });
    }

    try {
        const { messages, url, context } = await req.json();

        if (!messages || !Array.isArray(messages) || messages.length === 0) {
            return NextResponse.json({ error: "Messages are required" }, { status: 400 });
        }

        let contents = [];
        let urlContext = "";

        // Build the contextual metadata string
        const contextStr = context ? `
--- CURRENT SYSTEM CONTEXT ---
${context.roiData ? `USER ROI PROJECTION: ${JSON.stringify(context.roiData)}` : ""}
${context.page ? `USER IS CURRENTLY VIEWING NODE: ${context.page.title} (URL: ${context.page.url}). SUMMARY: ${context.page.description}` : ""}
---------------------------
` : "";

        if (url) {
            // Mode: Deep Analysis with Context URL
            const lastUserMessage = messages[messages.length - 1].content;

            contents = [
                {
                    role: "user",
                    parts: [
                        {
                            text: `${SYSTEM_PROMPT}
                            
                            ${contextStr}
                            
                            CONTEXT URL: ${url}
                            
                            ANALYSIS TASK: Visit and carefully analyze the provided website URL. 
                            Use your search/grounding tool to fetch the latest details about the business at this URL.
                            Then, answer the user's question: ${lastUserMessage}`
                        }
                    ]
                }
            ];
        } else {
            // Mode: Conversational Analysis
            // Filter out the initial greeting to ensure strict alternating User/Model roles
            const conversationalMessages = messages.filter((m, index) => {
                // Skip the very first message if it's the assistant's greeting
                if (index === 0 && m.role === "assistant") return false;
                return true;
            });

            contents = [
                {
                    role: "user",
                    parts: [{ text: `${SYSTEM_PROMPT}\n\n${contextStr}` || "System Initialization." }]
                },
                {
                    role: "model",
                    parts: [{ text: "Initializing CloudAGI Architect protocol. Arya Teja Rudraraju online. Project your business website or automation friction nodes for analysis." }]
                },
                ...conversationalMessages.map((m: any) => {
                    // Gemini requires non-empty text
                    const contentText = m.content?.trim() || "(Empty message)";
                    return {
                        role: m.role === "assistant" ? "model" : "user",
                        parts: [{ text: contentText }]
                    };
                })
            ];
        }

        const model = await resolveModel(apiKey, preferredModels);
        const response = await fetch(
            `https://generativelanguage.googleapis.com/${apiVersion}/models/${model}:generateContent?key=${apiKey}`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    contents,
                    tools: [
                        { google_search_retrieval: { dynamic_retrieval_config: { mode: "DYNAMIC", dynamic_threshold: 0.3 } } },
                        { code_execution: {} }
                    ],
                    generationConfig: {
                        temperature: 0.1,
                        topP: 0.95,
                    }
                }),
            }
        );

        const data = await response.json();

        if (response.ok && data.candidates?.[0]?.content?.parts?.[0]?.text) {
            return NextResponse.json({ content: data.candidates[0].content.parts[0].text });
        }

        // Handle specific Gemini errors
        const errorMessage = data.error?.message || (data.candidates?.[0]?.finishReason === "SAFETY" ? "Content flagged by safety filters." : "Failed to generate content");
        console.error("Gemini API Error:", data);

        return NextResponse.json({ error: `AI Error: ${errorMessage}` }, { status: response.status || 500 });

    } catch (error: unknown) {
        console.error("Backend Chat Error:", error);
        return NextResponse.json({ error: error instanceof Error ? error.message : "An unknown error occurred" }, { status: 500 });
    }
}
