import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/.next/', '/admin/'],
      },
      // OpenAI GPT Crawler
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      // Anthropic Claude Crawler
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      // Common Crawl (used by many AI models)
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      // Google Bard/Gemini
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      // Cohere AI
      {
        userAgent: 'cohere-ai',
        allow: '/',
      },
    ],
    sitemap: 'https://cloudagidemo1.vercel.app/sitemap.xml',
  }
}