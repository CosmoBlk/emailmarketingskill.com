// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://emailmarketingskill.com',
  output: 'static',
  adapter: vercel(),
  integrations: [
    starlight({
      title: 'Email Marketing Bible',
      description: 'The most comprehensive email marketing knowledge base for Claude Code.',
      favicon: '/favicon.svg',
      social: [
        { icon: 'github', label: 'GitHub', href: 'https://github.com/CosmoBlk/email-marketing-bible' },
        { icon: 'x.com', label: 'Twitter', href: 'https://x.com/GTHartley' },
      ],
      customCss: ['./src/styles/custom.css'],
      components: {
        Hero: './src/components/Hero.astro',
        Footer: './src/components/Footer.astro',
      },
      sidebar: [
        {
          label: 'The Guide',
          items: [
            { label: 'Introduction', slug: 'introduction' },
            { label: '1. The Fundamentals', slug: '01-fundamentals' },
            { label: '2. Building Your List', slug: '02-building-your-list' },
            { label: '3. Segmentation & Personalisation', slug: '03-segmentation-and-personalisation' },
            { label: '4. The Emails That Make Money', slug: '04-the-emails-that-make-money' },
            { label: '5. Copywriting That Converts', slug: '05-copywriting-that-converts' },
            { label: '6. Design & Technical', slug: '06-design-and-technical' },
            { label: '7. Deliverability', slug: '07-deliverability' },
            { label: '8. Testing & Optimisation', slug: '08-testing-and-optimisation' },
            { label: '9. Analytics & Measurement', slug: '09-analytics-and-measurement' },
            { label: '10. Compliance & Privacy', slug: '10-compliance-and-privacy' },
            { label: '11. Industry Playbooks', slug: '11-industry-playbooks' },
            { label: '12. Choosing Your Platform', slug: '12-choosing-your-platform' },
            { label: '13. Cold Email & B2B Outbound', slug: '13-cold-email-and-b2b-outbound' },
            { label: '14. AI & the Future of Email', slug: '14-ai-and-the-future-of-email' },
            { label: '15. Company Case Studies', slug: '15-company-case-studies' },
            { label: '16. Expert Directory', slug: '16-expert-directory' },
          ],
        },
        {
          label: 'Appendices',
          items: [
            { label: 'A. Benchmarks by Industry', slug: 'appendix-a-benchmarks' },
            { label: 'B. Email Frequency Guide', slug: 'appendix-b-frequency-guide' },
            { label: 'C. Email Marketing Calendar', slug: 'appendix-c-calendar' },
            { label: 'D. Methodology & Sources', slug: 'appendix-d-methodology' },
          ],
        },
      ],
      head: [
        { tag: 'meta', attrs: { property: 'og:image', content: '/og-image.png' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true } },
        { tag: 'link', attrs: { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;700&display=swap', rel: 'stylesheet' } },
      ],
    }),
  ],
});
