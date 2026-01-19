(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/hooks/use-scroll.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useScroll",
    ()=>useScroll
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function useScroll(threshold) {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const onScroll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useScroll.useCallback[onScroll]": ()=>{
            setScrolled(window.scrollY > threshold);
        }
    }["useScroll.useCallback[onScroll]"], [
        threshold
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useScroll.useEffect": ()=>{
            window.addEventListener("scroll", onScroll);
            // eslint-disable-next-line react-hooks/set-state-in-effect
            onScroll();
            return ({
                "useScroll.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["useScroll.useEffect"];
        }
    }["useScroll.useEffect"], [
        onScroll
    ]);
    return scrolled;
}
_s(useScroll, "AKpJPI46/QCV6k3LGYkcyEl+saI=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/logo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Logo",
    ()=>Logo,
    "LogoIcon",
    ()=>LogoIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const LogoIcon = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "currentColor",
        viewBox: "0 0 24 24",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 15.03125 23.851562 C 14.117188 23.609375 13.417969 23 13 22.101562 C 12.808594 21.691406 12.808594 21.613281 12.808594 18.375 C 12.808594 15.066406 12.808594 15.066406 13.097656 14.484375 C 13.429688 13.8125 13.898438 13.351562 14.585938 13.027344 C 15.074219 12.800781 15.074219 12.800781 18.386719 12.800781 C 21.699219 12.800781 21.699219 12.800781 22.28125 13.089844 C 22.953125 13.421875 23.414062 13.890625 23.738281 14.578125 C 23.964844 15.066406 23.964844 15.066406 23.988281 18.140625 C 24.015625 20.769531 24 21.285156 23.875 21.710938 C 23.5625 22.789062 22.769531 23.582031 21.699219 23.863281 C 20.964844 24.042969 15.746094 24.042969 15.03125 23.851562 Z M 21.679688 22.390625 C 21.863281 22.304688 22.117188 22.085938 22.246094 21.917969 C 22.480469 21.613281 22.480469 21.613281 22.480469 18.375 C 22.480469 15.136719 22.480469 15.136719 22.238281 14.824219 C 21.757812 14.1875 21.792969 14.195312 18.386719 14.195312 C 15.667969 14.195312 15.308594 14.214844 15.066406 14.34375 C 14.691406 14.542969 14.359375 14.960938 14.246094 15.355469 C 14.144531 15.753906 14.132812 20.847656 14.246094 21.328125 C 14.386719 21.9375 14.847656 22.398438 15.441406 22.519531 C 15.625 22.554688 17.027344 22.582031 18.5625 22.574219 C 21.105469 22.554688 21.375 22.539062 21.679688 22.390625 Z M 21.679688 22.390625 ",
                opacity: "50%"
            }, void 0, false, {
                fileName: "[project]/components/logo.tsx",
                lineNumber: 5,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 2.859375 23.085938 C 2.089844 22.84375 1.324219 22.15625 0.976562 21.398438 C 0.792969 20.996094 0.785156 20.882812 0.785156 17.636719 C 0.785156 14.28125 0.785156 14.28125 1.019531 13.785156 C 1.296875 13.1875 1.855469 12.609375 2.441406 12.324219 C 2.875 12.105469 2.875 12.105469 6.195312 12.078125 C 9.4375 12.054688 9.523438 12.0625 10.03125 12.246094 C 10.71875 12.507812 11.441406 13.21875 11.730469 13.933594 C 11.9375 14.457031 11.9375 14.472656 11.9375 17.636719 C 11.9375 21.136719 11.9375 21.128906 11.371094 21.953125 C 11.03125 22.433594 10.550781 22.800781 9.925781 23.035156 C 9.480469 23.199219 9.261719 23.207031 6.335938 23.199219 C 4.035156 23.199219 3.128906 23.164062 2.859375 23.085938 Z M 2.859375 23.085938 "
            }, void 0, false, {
                fileName: "[project]/components/logo.tsx",
                lineNumber: 9,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 13.898438 11.695312 C 13.226562 11.4375 12.503906 10.703125 12.25 10.023438 C 12.070312 9.519531 12.058594 9.433594 12.085938 6.195312 C 12.113281 2.929688 12.113281 2.867188 12.3125 2.476562 C 12.636719 1.824219 13.070312 1.386719 13.707031 1.074219 C 14.289062 0.785156 14.289062 0.785156 17.644531 0.785156 C 20.90625 0.785156 21.007812 0.792969 21.410156 0.976562 C 21.984375 1.238281 22.65625 1.890625 22.933594 2.476562 C 23.179688 2.964844 23.179688 2.964844 23.179688 6.316406 C 23.179688 9.667969 23.179688 9.667969 22.890625 10.25 C 22.578125 10.886719 22.140625 11.324219 21.488281 11.644531 C 21.097656 11.84375 21.042969 11.84375 17.734375 11.863281 C 14.492188 11.878906 14.359375 11.878906 13.898438 11.695312 Z M 13.898438 11.695312 "
            }, void 0, false, {
                fileName: "[project]/components/logo.tsx",
                lineNumber: 10,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M 2.214844 11.078125 C 1.324219 10.824219 0.609375 10.207031 0.199219 9.3125 C 0 8.894531 0 8.832031 0 5.574219 C 0 2.265625 0 2.265625 0.234375 1.769531 C 0.53125 1.132812 1.132812 0.535156 1.769531 0.238281 C 2.265625 0.00390625 2.265625 0.00390625 5.578125 0.00390625 C 8.886719 0.00390625 8.886719 0.00390625 9.386719 0.238281 C 10.019531 0.535156 10.621094 1.132812 10.917969 1.769531 C 11.152344 2.265625 11.152344 2.265625 11.152344 5.574219 C 11.152344 8.882812 11.152344 8.882812 10.925781 9.371094 C 10.605469 10.058594 10.144531 10.53125 9.472656 10.859375 C 8.886719 11.148438 8.886719 11.148438 5.75 11.164062 C 3.441406 11.183594 2.507812 11.15625 2.214844 11.078125 Z M 8.898438 9.605469 C 9.238281 9.425781 9.613281 8.988281 9.699219 8.683594 C 9.734375 8.554688 9.757812 7.117188 9.757812 5.488281 C 9.757812 2.179688 9.769531 2.207031 9.132812 1.726562 C 8.820312 1.484375 8.820312 1.484375 5.804688 1.457031 C 4.148438 1.4375 2.65625 1.457031 2.5 1.484375 C 2.34375 1.507812 2.066406 1.683594 1.882812 1.855469 C 1.375 2.335938 1.34375 2.632812 1.421875 5.976562 C 1.480469 8.816406 1.480469 8.816406 1.726562 9.128906 C 2.214844 9.773438 2.316406 9.789062 5.75 9.773438 C 8.285156 9.753906 8.660156 9.738281 8.898438 9.605469 Z M 8.898438 9.605469 "
            }, void 0, false, {
                fileName: "[project]/components/logo.tsx",
                lineNumber: 11,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo.tsx",
        lineNumber: 4,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0));
_c = LogoIcon;
const Logo = (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        fill: "currentColor",
        viewBox: "0 0 90 24",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "a",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M12.785 12.781h11.172V24H12.785Zm0 0"
                        }, void 0, false, {
                            fileName: "[project]/components/logo.tsx",
                            lineNumber: 24,
                            columnNumber: 5
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/logo.tsx",
                        lineNumber: 23,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("clipPath", {
                        id: "b",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M.008 0h11.148v11.2H.008Zm0 0"
                        }, void 0, false, {
                            fileName: "[project]/components/logo.tsx",
                            lineNumber: 27,
                            columnNumber: 5
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/components/logo.tsx",
                        lineNumber: 26,
                        columnNumber: 4
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/components/logo.tsx",
                lineNumber: 22,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#a)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M15.008 23.855c-.91-.242-1.61-.851-2.028-1.75-.19-.41-.19-.488-.19-3.73 0-3.309 0-3.309.288-3.89a3 3 0 0 1 1.485-1.458c.488-.226.488-.226 3.792-.226 3.31 0 3.31 0 3.887.289.672.332 1.133.8 1.453 1.488.227.488.227.488.25 3.563.028 2.632.012 3.148-.113 3.574-.309 1.078-1.102 1.87-2.168 2.152-.734.18-5.941.18-6.656-.012m6.637-1.46c.18-.086.433-.305.562-.473.234-.305.234-.305.234-3.547 0-3.238 0-3.238-.242-3.55-.476-.637-.441-.63-3.844-.63-2.71 0-3.07.02-3.312.149-.375.199-.707.617-.82 1.011-.098.399-.11 5.497 0 5.977.14.61.601 1.07 1.195 1.191.184.036 1.582.063 3.113.055 2.54-.02 2.809-.035 3.114-.183m0 0",
                    opacity: "50%"
                }, void 0, false, {
                    fileName: "[project]/components/logo.tsx",
                    lineNumber: 31,
                    columnNumber: 4
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/logo.tsx",
                lineNumber: 30,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2.86 23.09c-.766-.242-1.532-.93-1.88-1.688-.183-.402-.187-.515-.187-3.765 0-3.356 0-3.356.23-3.852.278-.598.836-1.176 1.422-1.46.43-.22.43-.22 3.746-.247 3.235-.023 3.32-.015 3.829.168.683.262 1.406.973 1.695 1.688.207.523.207.539.207 3.703 0 3.504 0 3.496-.567 4.32-.34.48-.82.848-1.44 1.082-.446.164-.665.172-3.583.164-2.297 0-3.203-.035-3.473-.113M13.879 11.695c-.672-.258-1.395-.992-1.645-1.672-.18-.503-.191-.59-.164-3.832.028-3.265.028-3.328.223-3.718.324-.653.758-1.09 1.395-1.403.578-.289.578-.289 3.93-.289 3.253 0 3.355.008 3.757.192.57.261 1.242.914 1.52 1.5.246.488.246.488.246 3.84 0 3.355 0 3.355-.29 3.937a2.9 2.9 0 0 1-1.398 1.395c-.39.199-.445.199-3.746.218-3.238.016-3.371.016-3.828-.168m0 0"
            }, void 0, false, {
                fileName: "[project]/components/logo.tsx",
                lineNumber: 36,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                clipPath: "url(#b)",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M2.219 11.078c-.89-.254-1.602-.871-2.012-1.765-.2-.418-.2-.481-.2-3.743 0-3.308 0-3.308.235-3.804A3.34 3.34 0 0 1 1.773.234C2.27 0 2.27 0 5.574 0c3.301 0 3.301 0 3.801.234.633.297 1.23.895 1.527 1.532.235.496.235.496.235 3.804 0 3.313 0 3.313-.227 3.801-.32.688-.777 1.16-1.45 1.488-.585.29-.585.29-3.714.305-2.305.02-3.234-.008-3.527-.086m6.668-1.473c.34-.18.715-.617.8-.921.036-.13.06-1.567.06-3.2 0-3.308.01-3.28-.626-3.761-.312-.243-.312-.243-3.32-.27-1.653-.02-3.145 0-3.297.027-.156.024-.434.2-.617.372-.508.48-.54.777-.461 4.12.058 2.844.058 2.844.304 3.157.489.644.59.66 4.016.644 2.531-.02 2.902-.035 3.14-.168m0 0"
                }, void 0, false, {
                    fileName: "[project]/components/logo.tsx",
                    lineNumber: 38,
                    columnNumber: 4
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/components/logo.tsx",
                lineNumber: 37,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m33.688 17.254-1.622-2.125 3.325-2.57a1.6 1.6 0 0 0-.696-.434 3 3 0 0 0-.957-.145q-.626.001-1.148.266a2.75 2.75 0 0 0-.903.707q-.379.445-.59 1.047c-.14.402-.206.84-.206 1.313q0 .655.246 1.257c.164.403.394.758.68 1.063q.432.46 1.019.734a3 3 0 0 0 1.27.278c.84 0 1.57-.243 2.199-.723q.942-.72 1.152-2.008l3.375.367a7.6 7.6 0 0 1-.879 2.387q-.614 1.053-1.504 1.797-.891.75-2.027 1.14a7.5 7.5 0 0 1-2.445.395 6.6 6.6 0 0 1-2.606-.512 6.1 6.1 0 0 1-2.039-1.402 6.3 6.3 0 0 1-1.32-2.11q-.474-1.223-.473-2.663-.001-1.44.473-2.676a6.2 6.2 0 0 1 1.332-2.125 6.2 6.2 0 0 1 2.043-1.387q1.177-.499 2.59-.5 2.195 0 3.777.973c1.059.644 1.855 1.582 2.398 2.804ZM47.973 6.684H46.69q-.601 0-.968.277-.366.277-.368.98v1h2.618v3.25h-2.618v9.493h-3.347V8.864c0-1.962.418-3.372 1.254-4.239q1.26-1.296 3.48-1.297h1.23ZM54.723 6.684H53.44q-.601 0-.968.277-.366.277-.368.98v1h2.618v3.25h-2.618v9.493h-3.347V8.864c0-1.962.418-3.372 1.258-4.239q1.255-1.296 3.476-1.297h1.23ZM61.21 17.254l-1.62-2.125 3.324-2.57a1.6 1.6 0 0 0-.695-.434 3 3 0 0 0-.953-.145q-.632.001-1.153.266-.52.26-.902.707-.38.445-.59 1.047-.206.603-.207 1.313 0 .655.246 1.257.252.605.68 1.063.433.46 1.023.734.586.277 1.266.278c.84 0 1.57-.243 2.2-.723q.94-.72 1.151-2.008l3.375.367a7.6 7.6 0 0 1-.878 2.387q-.614 1.053-1.504 1.797-.891.75-2.028 1.14A7.5 7.5 0 0 1 61.5 22a6.6 6.6 0 0 1-2.605-.512 6.1 6.1 0 0 1-2.04-1.402 6.3 6.3 0 0 1-1.32-2.11q-.473-1.223-.472-2.663-.001-1.44.472-2.676a6.2 6.2 0 0 1 1.332-2.125 6.2 6.2 0 0 1 2.043-1.387q1.178-.499 2.59-.5 2.199 0 3.781.973c1.055.644 1.852 1.582 2.395 2.804ZM76.805 12.348h-.758q-1.413 0-2.121.855c-.469.567-.703 1.29-.703 2.16v6.32h-3.559V8.942h3.164v2.41h.05c.317-.855.75-1.5 1.31-1.925q.838-.645 1.964-.645h.653ZM89.992 3.328v12.063c0 .89-.152 1.742-.457 2.543a6.6 6.6 0 0 1-1.285 2.113 6 6 0 0 1-1.988 1.43q-1.161.522-2.551.523a5.9 5.9 0 0 1-2.496-.523 6.1 6.1 0 0 1-1.965-1.43 6.8 6.8 0 0 1-1.293-2.125 7.3 7.3 0 0 1-.473-2.637q0-1.335.461-2.555a6.5 6.5 0 0 1 1.282-2.125 6.3 6.3 0 0 1 1.921-1.44 5.4 5.4 0 0 1 2.407-.54q.527 0 1.007.117.487.122 1.008.25v3.54a5 5 0 0 0-.851-.286 4 4 0 0 0-.953-.105q-1.285 0-2.106.879-.825.876-.824 2.293 0 1.417.809 2.296a2.65 2.65 0 0 0 2.015.875q1.359-.001 2.172-.875.811-.881.813-2.218V3.328Zm0 0"
            }, void 0, false, {
                fileName: "[project]/components/logo.tsx",
                lineNumber: 40,
                columnNumber: 3
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/components/logo.tsx",
        lineNumber: 16,
        columnNumber: 2
    }, ("TURBOPACK compile-time value", void 0));
_c1 = Logo;
var _c, _c1;
__turbopack_context__.k.register(_c, "LogoIcon");
__turbopack_context__.k.register(_c1, "Logo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/components/button.tsx",
        lineNumber: 42,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/hooks/use-media-query.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useMediaQuery",
    ()=>useMediaQuery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
function getDevice() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return window.matchMedia("(min-width: 1024px)").matches ? "desktop" : window.matchMedia("(min-width: 640px)").matches ? "tablet" : "mobile";
}
function getDimensions() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return {
        width: window.innerWidth,
        height: window.innerHeight
    };
}
function useMediaQuery() {
    _s();
    const [device, setDevice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getDevice());
    const [dimensions, setDimensions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(getDimensions());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useMediaQuery.useEffect": ()=>{
            const checkDevice = {
                "useMediaQuery.useEffect.checkDevice": ()=>{
                    setDevice(getDevice());
                    setDimensions(getDimensions());
                }
            }["useMediaQuery.useEffect.checkDevice"];
            // Initial detection
            checkDevice();
            // Listener for windows resize
            window.addEventListener("resize", checkDevice);
            // Cleanup listener
            return ({
                "useMediaQuery.useEffect": ()=>{
                    window.removeEventListener("resize", checkDevice);
                }
            })["useMediaQuery.useEffect"];
        }
    }["useMediaQuery.useEffect"], []);
    return {
        device,
        width: dimensions?.width,
        height: dimensions?.height,
        isMobile: device === "mobile",
        isTablet: device === "tablet",
        isDesktop: device === "desktop"
    };
}
_s(useMediaQuery, "uiyBIcGlPCaO2lD21p50wxlqkoE=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/mobile-nav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileNav",
    ()=>MobileNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-media-query.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as MenuIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
function MobileNav() {
    _s();
    const [open, setOpen] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const { isMobile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"])();
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MobileNav.useEffect": ()=>{
            setMounted(true);
        }
    }["MobileNav.useEffect"], []);
    // 🚫 Disable body scroll when open
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useEffect({
        "MobileNav.useEffect": ()=>{
            if (open && isMobile) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
            // Cleanup on unmount too
            return ({
                "MobileNav.useEffect": ()=>{
                    document.body.style.overflow = "";
                }
            })["MobileNav.useEffect"];
        }
    }["MobileNav.useEffect"], [
        open,
        isMobile
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                "aria-controls": "mobile-menu",
                "aria-expanded": open,
                "aria-label": "Toggle menu",
                className: "md:hidden",
                onClick: ()=>setOpen(!open),
                size: "icon",
                variant: "outline",
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                    className: "size-4.5"
                }, void 0, false, {
                    fileName: "[project]/components/mobile-nav.tsx",
                    lineNumber: 48,
                    columnNumber: 6
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MenuIcon$3e$__["MenuIcon"], {
                    className: "size-4.5"
                }, void 0, false, {
                    fileName: "[project]/components/mobile-nav.tsx",
                    lineNumber: 50,
                    columnNumber: 6
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/mobile-nav.tsx",
                lineNumber: 38,
                columnNumber: 4
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50", "fixed top-14 right-0 bottom-0 left-0 z-40 flex flex-col overflow-hidden border-t md:hidden"),
                id: "mobile-menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in", "size-full p-4"),
                    "data-slot": open ? "open" : "closed",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-y-2",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navLinks"].map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                            variant: "ghost",
                                            className: "justify-start"
                                        }),
                                        href: link.href,
                                        onClick: ()=>setOpen(false),
                                        children: link.label
                                    }, link.label, false, {
                                        fileName: "[project]/components/mobile-nav.tsx",
                                        lineNumber: 71,
                                        columnNumber: 10
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
                                    className: "flex items-center justify-start px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200",
                                    children: mounted ? theme === "dark" ? "🌙 Dark Mode" : "☀️ Light Mode" : "☀️ Light Mode"
                                }, void 0, false, {
                                    fileName: "[project]/components/mobile-nav.tsx",
                                    lineNumber: 84,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/mobile-nav.tsx",
                            lineNumber: 69,
                            columnNumber: 8
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-12 flex flex-col gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full",
                                    variant: "outline",
                                    children: "Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/components/mobile-nav.tsx",
                                    lineNumber: 93,
                                    columnNumber: 9
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "w-full",
                                    children: "Get Started"
                                }, void 0, false, {
                                    fileName: "[project]/components/mobile-nav.tsx",
                                    lineNumber: 96,
                                    columnNumber: 9
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/mobile-nav.tsx",
                            lineNumber: 92,
                            columnNumber: 8
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/mobile-nav.tsx",
                    lineNumber: 62,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/mobile-nav.tsx",
                lineNumber: 55,
                columnNumber: 6
            }, this), document.body)
        ]
    }, void 0, true);
}
_s(MobileNav, "JhfTpymOeJZ07vcxzlDAaC8bQA0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$media$2d$query$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMediaQuery"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = MobileNav;
var _c;
__turbopack_context__.k.register(_c, "MobileNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header,
    "navLinks",
    ()=>navLinks
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/use-scroll.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/logo.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mobile$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/mobile-nav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const navLinks = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Blogs",
        href: "/blog"
    },
    {
        label: "Contact",
        href: "/contact"
    }
];
function Header() {
    _s();
    const scrolled = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])(10);
    const { theme, setTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setMounted(true);
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("sticky top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out", {
            "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow": scrolled
        }),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out", {
                "md:px-2": scrolled
            }),
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: "rounded-md p-2 hover:bg-accent",
                    href: "/",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$logo$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Logo"], {
                        className: "h-4.5"
                    }, void 0, false, {
                        fileName: "[project]/components/navbar.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/navbar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hidden items-center gap-2 md:flex",
                    children: [
                        navLinks.map((link, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: link.href,
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buttonVariants"])({
                                    variant: "ghost"
                                }),
                                children: link.label
                            }, i, false, {
                                fileName: "[project]/components/navbar.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: ()=>setTheme(theme === "dark" ? "light" : "dark"),
                            className: "w-10 h-10 rounded-lg flex items-center justify-center text-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors duration-200",
                            "aria-label": "Toggle theme",
                            children: mounted ? theme === "dark" ? "🌙" : "☀️" : "☀️"
                        }, void 0, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            children: "Sign In"
                        }, void 0, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            children: "Get Started"
                        }, void 0, false, {
                            fileName: "[project]/components/navbar.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/navbar.tsx",
                    lineNumber: 53,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$mobile$2d$nav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MobileNav"], {}, void 0, false, {
                    fileName: "[project]/components/navbar.tsx",
                    lineNumber: 78,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/navbar.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/navbar.tsx",
        lineNumber: 30,
        columnNumber: 5
    }, this);
}
_s(Header, "5bTScmTbU6JZIh3xn4U1kiOVbjM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$use$2d$scroll$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Providers.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-themes/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Providers({ children }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Providers.useEffect": ()=>{
            setMounted(true);
        }
    }["Providers.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$themes$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
        attribute: "class",
        defaultTheme: "light",
        enableSystem: false,
        storageKey: "cloudagi-theme",
        forcedTheme: !mounted ? undefined : undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/Providers.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_s(Providers, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = Providers;
var _c;
__turbopack_context__.k.register(_c, "Providers");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7f108611._.js.map