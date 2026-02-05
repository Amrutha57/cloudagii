export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CloudAGI",
  "url": "https://cloudagidemo1.vercel.app",
  "logo": "https://cloudagidemo1.vercel.app/logo.png",
  "description": "CloudAGI delivers custom AI agent solutions and agentic workflows for small and medium businesses. Expert AI consultancy with proven ROI.",
  "sameAs": [
    "https://twitter.com/cloudagi",
    "https://linkedin.com/company/cloudagi"
  ],
  "contact": {
    "@type": "ContactPoint",
    "contactType": "Customer Service",
    "url": "https://cloudagidemo1.vercel.app/contact",
    "email": "contact@cloudagidemo1.vercel.app"
  }
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "CloudAGI",
  "image": "https://cloudagidemo1.vercel.app/logo.png",
  "description": "AI agent consultancy and agentic solution provider for SMBs",
  "url": "https://cloudagidemo1.vercel.app",
  "telephone": "+1-xxx-xxx-xxxx",
  "email": "contact@cloudagidemo1.vercel.app",
  "areaServed": "US",
  "serviceType": "AI Consultancy"
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AI Agent Consultancy & Implementation",
  "description": "Custom AI agent solutions, agentic workflow design, and intelligent automation for business growth",
  "provider": {
    "@type": "Organization",
    "name": "CloudAGI",
    "url": "https://cloudagidemo1.vercel.app"
  },
  "areaServed": "US",
  "availableLanguage": "en"
};

export const FAQSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are AI agents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI agents are autonomous software systems that use artificial intelligence to understand tasks, make decisions, and take actions. Unlike traditional software that requires explicit programming for each scenario, AI agents learn and adapt from data, enabling them to solve complex business problems with minimal human intervention."
      }
    },
    {
      "@type": "Question",
      "name": "How can AI agents improve my business?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "AI agents can automate repetitive tasks, improve decision-making, reduce operational costs, and scale your business without proportional cost increases. They excel at tasks like customer service, lead qualification, data analysis, process automation, and strategic decision support."
      }
    },
    {
      "@type": "Question",
      "name": "What is agentic AI?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Agentic AI refers to AI systems that operate autonomously with a goal in mind. Rather than following rigid instructions, agentic AI systems can plan, reason, adapt, and execute complex multi-step tasks to achieve specified objectives, making them ideal for dynamic business environments."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to implement AI agents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CloudAGI offers implementations ranging from 2-4 weeks for discovery and strategy to 4-12 weeks for custom tool development. Timeline depends on complexity, existing systems, and specific business requirements."
      }
    },
    {
      "@type": "Question",
      "name": "What ROI can I expect from AI agents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ROI varies by use case. Common returns include 30-50% reduction in processing time, 40-60% cost savings on manual work, improved accuracy, and faster decision-making. CloudAGI provides ROI projections during the discovery phase."
      }
    }
  ]
};

export const articleSchema = (title: string, description: string, datePublished: string, dateModified: string, author: string = "CloudAGI Team") => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": title,
  "description": description,
  "image": "https://cloudagidemo1.vercel.app/og-image.png",
  "datePublished": datePublished,
  "dateModified": dateModified,
  "author": {
    "@type": "Organization",
    "name": author,
    "url": "https://cloudagidemo1.vercel.app"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CloudAGI",
    "logo": {
      "@type": "ImageObject",
      "url": "https://cloudagidemo1.vercel.app/logo.png"
    }
  }
});

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
