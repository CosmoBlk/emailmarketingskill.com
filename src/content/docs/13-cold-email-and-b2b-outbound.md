---
title: "Cold Email and B2B Outbound"
description: "Cold email infrastructure, domain separation, sequencing, and the rules for B2B outbound that won't destroy your sender reputation."
sidebar:
  order: 13
  label: "13. Cold Email & B2B Outbound"
---

This chapter didn't exist in v3 of this guide. That was an oversight. Cold email is one of the most powerful and most abused channels in B2B sales, and the gap between how it's done well and how it's done badly is enormous. I'd estimate that 90% of cold email is terrible, which is actually good news. If you do it properly, you'll stand out simply by being competent.

Let me be upfront about my position. Cold email, done ethically and well, is a legitimate sales channel that creates real value for both sender and recipient. Cold email done badly is spam, regardless of what the sender calls it. The distinction matters, and this chapter will be specific about where the line sits.

### When Cold Email Is Appropriate

Cold email is appropriate for B2B sales outreach to business contacts at their work email address. Full stop. It's for reaching a VP of Marketing at a SaaS company because your product genuinely solves a problem they have. It's for connecting with a Head of Operations at a logistics company because you've identified an inefficiency your service addresses.

It is not appropriate for consumer marketing to personal email addresses. It is not appropriate for mass outreach to purchased lists. It is not appropriate when your product has no genuine connection to the recipient's role or company. And it is never appropriate to use as a substitute for building a proper opt-in marketing list.

The difference between cold email and spam is not a legal technicality. It's a practical one.

Cold email is targeted to a specific person because of their role and their company's situation. It's personalised to show you've done research. It offers genuine value, not just a pitch. It respects opt-outs immediately. And it's sent in reasonable volume to a curated list.

Spam is everything else. Blasted to thousands. Generic. Self-serving. Sent from dodgy domains. Ignoring unsubscribes. Volume-driven.

I'd offer this test: if you'd be embarrassed seeing your email screenshot on LinkedIn with the caption 'Got this today', rewrite it. Your market is finite. The Head of Marketing at Company X who sees your lazy template today is the same person you'll try to sell to next quarter. First impressions in cold email are usually the only impression you get.

### Infrastructure Setup

This is where most people make their most expensive mistake. They send cold email from their primary domain.

Never send cold email from your primary domain. Not ever. Not even 'just a few'. Not even 'just to test'. If your cold emails generate spam complaints, and some will regardless of quality, those complaints damage the reputation of your primary domain. That means your marketing emails, your transactional emails, your invoices, and your team's regular business correspondence all suffer. I've seen companies lose inbox placement for their entire organisation because someone on the sales team decided to blast 500 cold emails from the company domain.

Here's the infrastructure you need:

**Buy three to five separate domains** for cold outreach. Use variations of your brand name: getbrandname.com, trybrandname.com, brandnamehq.com. Keep them clearly related to your company (you're not hiding, you're protecting your primary domain reputation) but distinct enough that reputation issues on one don't cascade to the others. Budget $10 to $15 per domain per year. It's the cheapest insurance you'll ever buy.

**Set up Google Workspace or Microsoft 365 on each domain.** Sending through Gmail or Outlook infrastructure gives you better baseline deliverability than sending through a dedicated email server. Google Workspace runs about $7 per user per month. Create two to three mailboxes per domain. That gives you six to fifteen sending inboxes to rotate through.

**Configure SPF, DKIM, and DMARC on every domain.** This is non-negotiable. Without proper authentication, your emails will land in spam before you send a single outreach message. If you don't know how to set these up, your cold email tool's documentation will walk you through it step by step. It takes about 30 minutes per domain and involves adding DNS records through your domain registrar.

**Warm each inbox for two to four weeks before sending.** Use a warmup service (most cold email tools include this) that gradually increases sending volume while generating positive engagement signals. The warmup service sends emails between your inbox and other inboxes in its network, with automatic opens and replies, simulating the behaviour of a legitimate sender. The inbox needs to build a reputation as a legitimate sender before you put outreach through it.

**Limit volume to 10 to 30 emails per inbox per day.** Some practitioners push to 50, but stay conservative, especially in the first few months. Higher volume per inbox increases the risk of triggering spam filters. Distribute volume across multiple inboxes. If you have ten inboxes sending 20 emails each, that's 200 emails per day with much lower risk per inbox than sending 200 from a single inbox.

**Use a dedicated cold email tool.** Do not use your marketing ESP for cold outreach. Mailchimp, Klaviyo, ActiveCampaign, and similar platforms are designed for permission-based marketing. They will shut down your account for cold outreach because it threatens the deliverability reputation of their shared sending infrastructure. I've seen this happen dozens of times. The account gets suspended, your marketing emails stop, and you lose access to your subscriber data until you sort it out with their compliance team. Use a purpose-built cold email tool instead.

### The Cold Email Tooling Market

The cold email tool market has matured significantly since 2023. Here's what's worth considering in 2026.

| Tool | Best For | Key Feature | Starting Price |
|---|---|---|---|
| Apollo.io | All-in-one prospecting + outreach | 275M+ contact database | Free tier, paid from ~$49/mo |
| Instantly.ai | Scale, unlimited accounts | Largest warmup network | From ~$30/mo |
| Lemlist | Personalisation quality | Custom images, LinkedIn multi-channel | From ~$39/mo per user |
| Smartlead.ai | Agency white-label | Unlimited accounts, sub-accounts | From ~$39/mo |
| Woodpecker | Deliverability-focused | Bounce shield, recovery | From ~$29/mo |
| Saleshandy | Budget unlimited sending | Unlimited accounts, verification | From ~$36/mo |
| Clay | Data enrichment | 75+ data sources, AI personalisation | From ~$149/mo |

Apollo deserves special mention because it combines the prospecting database with the sending tool. For teams that don't already have a data source, Apollo's 275M+ contact database eliminates the need for a separate data provider. You can search by company size, industry, technology used, funding stage, job title, and dozens of other filters to build targeted prospect lists. The tradeoff is that everyone else has access to the same database, so the leads aren't exclusive. But for getting started with cold email, Apollo's all-in-one approach removes a lot of friction.

Instantly.ai has become the go-to for teams that prioritise scale and deliverability. Their warmup network is the largest in the market, which means your inboxes build reputation faster. The unlimited mailbox feature means you can connect as many sending inboxes as you want without per-inbox charges, making it easy to distribute volume across many inboxes for better deliverability.

Lemlist differentiates on personalisation quality. Custom images with the prospect's name, logo, or LinkedIn photo embedded in the email. LinkedIn connection requests and profile visits as part of a multi-channel sequence. Per-user pricing makes it more expensive for larger teams, but the personalisation features justify the cost for teams where reply quality matters more than reply volume.

Clay sits in a different category entirely. It's primarily a data enrichment tool that pulls from 75+ data sources and uses AI to generate personalised outreach. It's become the backbone of sophisticated cold email operations where personalisation quality is the priority. At $149 per month it's not cheap, but for teams sending lower-volume, higher-quality outreach, the reply rate improvement typically justifies the cost. I'll cover the Clay workflow in detail in the personalisation section.

### Writing Cold Emails That Get Replies

Optimal length: 50 to 125 words. This is not a suggestion. Data across millions of cold emails consistently shows that emails over 200 words see significantly lower reply rates. Your cold email is not the place to explain your entire value proposition. It's the place to earn a conversation.

Think about your own inbox behaviour. When you see a long email from someone you don't know, do you read it carefully? Or do you skim the first few lines and decide whether to engage or delete? Your prospects do the same thing. Brevity shows respect for their time and confidence in your value proposition.

the structure that works is remarkably simple:

**Personalised opening line (one sentence).** This shows you've done actual research on this specific person or company. Not 'I came across your profile' (that's filler, not personalisation). Not 'I noticed you're in the [industry] space' (that's a LinkedIn search filter, not research). Something like: 'Saw your team just launched the new pricing page with usage-based tiers' or 'Your recent post about cutting CAC by 30% caught my attention.' This line does the heaviest lifting in the entire email. It tells the recipient this isn't a mass blast.

**Problem or observation (one to two sentences).** Connect your opening to a challenge they likely face. 'Most SaaS companies I talk to at your stage are struggling to convert free-to-paid above 3%' or 'Companies scaling from 50 to 200 employees usually find their onboarding process breaks around the 100-person mark.' This should feel like an insight, not a setup for a pitch. You're demonstrating that you understand their world.

**Value proposition (one sentence, focused on outcome).** Not what your product does, but what it achieves. 'We helped [similar company] increase free-to-paid conversion by 40% in 90 days' not 'Our platform uses AI-powered analytics to optimise conversion funnels.' Outcomes are concrete and interesting. Features are abstract and boring. Always lead with the outcome.

**Single low-friction CTA.** This is where most cold emails fail. Interest-based CTAs outperform meeting requests by two to three times. 'Worth exploring?' gets significantly more replies than 'Can we schedule a 30-minute call this week?' The psychology is straightforward. 'Worth exploring' costs the recipient nothing. 'Schedule a 30-minute call' costs them their most precious resource. Get the reply first. Book the meeting second.

Other rules that matter:

Don't start with 'My name is [name] and I work at [company].' Nobody cares yet. You earn the right to introduce yourself after you've demonstrated relevance. Your email signature already tells them who you are.

No attachments in the first email. Attachments trigger spam filters and increase suspicion. Save the case study PDF for after they reply.

Zero or minimal links in email one. Every link is a signal to spam filters. Every tracking link is an additional signal. Your first email should be pure text with the goal of getting a reply, not a click. If you absolutely must include a link, make it one, and make it your company's homepage, not a tracking URL.

Plain text only. No HTML templates. No images. No logos. No fancy formatting. No colour. No bold. Plain text emails from a personal inbox feel like a real person reaching out. HTML templates feel like marketing. You're not marketing. You're starting a conversation.

**The Case Study Close**, popularised by Alex Berman, is one of the most effective cold email frameworks: brief compliment about the company, a sentence about a result you achieved for a similar company, and 'Would it make sense to explore this for [their company]?' It works because it combines social proof with a soft CTA. The compliment shows you know who they are. The case study shows you can deliver results. The question gives them an easy way to say yes.

Here's what a strong cold email actually looks like in practice:

Subject: [Company]'s onboarding flow

Hi [Name],

Noticed you recently launched the interactive product tour on your trial signup. Smart move, especially for your developer audience.

Most dev tools I work with at your growth stage see 70%+ of free trial users drop off before they hit the 'aha moment'. The gap between signup and activation is usually the biggest single revenue leak.

We helped [similar company] increase trial-to-paid conversion by 35% in 60 days by restructuring their onboarding email sequence around usage triggers rather than time delays.

Worth a conversation?

[Your name]

That's 89 words. Personalised opening. Clear problem. Specific result. Soft CTA. No links, no attachments, no HTML.

### Personalisation at Scale

Not all personalisation is equal. Here's the hierarchy of effectiveness:

**Level 1: Hyper-personalised.** Five or more minutes of research per email. Unique content referencing specific company initiatives, recent content they've published, mutual connections, or recent funding announcements. Reply rates of 15 to 25%. This is not scalable beyond 20 to 30 emails per day, but for enterprise deals worth $50K+, it's the only approach that makes sense. At $100K+ deal values, spending 10 minutes per email is a no-brainer from an ROI perspective.

**Level 2: Semi-personalised.** Custom first line based on light research (one to two minutes per prospect), with a templated middle and close. Reply rates of 8 to 15%. Sustainable at 50 to 100 emails per day. This is the sweet spot for most B2B teams. The personalised first line signals research. The templated middle delivers a proven value proposition. The templated close uses a tested CTA.

**Level 3: Segmented.** Same template per segment (industry, company size, role) with merge fields for name and company. Reply rates of 3 to 8%. Scalable to hundreds per day. Acceptable for lower-value products or when testing new markets. The segmentation does the personalisation work, not the individual email. A template written specifically for 'Series A SaaS companies with 50-100 employees' feels more relevant than a generic template, even without individual personalisation.

**Level 4: Pure mail merge.** Only name and company inserted into a generic template. Reply rates of 1 to 3%. This approach is effectively dead for serious outreach. Recipients can spot a mail merge from the first sentence, and it signals that you couldn't be bothered to learn anything about them. Every week I receive five or six emails that are clearly mail-merged with nothing beyond my name and company. They all get deleted.

**The Clay workflow** has become the gold standard for teams operating at Level 2. Here's how it works in practice:

1. Build your prospect list from multiple data sources (LinkedIn Sales Navigator, Apollo, company websites, job boards, funding announcements). Filter aggressively. A smaller, better-targeted list outperforms a larger, loosely-targeted one every time.

2. Enrich each prospect with Clay, pulling company news, recent LinkedIn posts, job postings, tech stack data, funding history, G2 reviews, and other signals. Clay connects to 75+ data sources and normalises the data into a single enriched profile per prospect.

3. Use AI within Clay to generate a personalised first line for each prospect based on the enriched data. The AI reads the prospect's recent activity and writes a custom opening line that references something specific and recent. The quality isn't as good as a skilled human researcher, but it's significantly better than generic merge fields.

4. Export the enriched list to your cold email tool (Instantly, Lemlist, Smartlead) with the personalised first lines included as merge fields. Your email template references {{personalized_first_line}} and each prospect gets a unique opening.

The result is Level 2 personalisation quality at Level 3 scale. A team of two can send 200+ semi-personalised emails per day with this workflow. Before Clay existed, achieving this required a team of SDRs doing manual research.

### Follow-Up Sequences

The data on follow-ups is unambiguous. 80% of sales require five or more follow-ups, yet 44% of salespeople give up after a single email. The gap between those two numbers represents enormous missed revenue.

I'd recommend three to five emails total (initial plus two to four follow-ups). More than five emails per prospect starts to feel aggressive, and the diminishing returns become steep. Here's the structure:

| Email | Timing | Purpose |
|---|---|---|
| 1 | Day 1 | Initial outreach |
| 2 | Day 3-4 | Add new value or a different angle |
| 3 | Day 7-10 | Social proof or different use case |
| 4 | Day 14-17 | Breakup or last touch |

Each follow-up must add new value. 'Just checking in' and 'Bumping this to the top of your inbox' are the two worst follow-up openings in existence. They communicate that you have nothing new to say and that your time is less valuable than the recipient's.

Instead, each follow-up should introduce a new piece of information. Email 2 might share a relevant case study or data point. Email 3 might reference a recent industry trend or competitor development that connects to your value proposition. Each email should stand on its own as something worth reading, not just a reminder that you exist.

The breakup email (Email 4) deserves special attention because it consistently generates two to three times the reply rate of mid-sequence emails. Loss aversion is the driver. 'I'll assume this isn't a priority right now and won't reach out again' triggers the fear of missing out on something potentially valuable. It sounds counterintuitive, but telling someone you're going away makes them more likely to respond.

A good breakup email looks like this: 'Hi [Name], I've reached out a few times about [topic] but haven't heard back. Totally understand if the timing isn't right. I won't send any more emails on this, but if [problem you solve] becomes a priority, happy to pick the conversation back up. Best, [Your name].' That's 49 words. Clean, respectful, and effective.

Keep follow-ups shorter than your original email. If your first email is 100 words, your follow-ups should be 50 to 75. Email 4 can be two to three sentences. Brevity in follow-ups signals confidence and respect for the recipient's time.

### Benchmarks

Setting realistic expectations prevents discouragement and helps you spot problems early.

**Average reply rate across all cold email:** 1 to 5%. This includes everything from well-crafted outreach to spray-and-pray garbage, so the average is dragged down significantly by bad practitioners.

**Good:** 5 to 10%. You're doing the fundamentals right. Decent targeting, reasonable personalisation, solid infrastructure.

**Excellent:** 10 to 20%. Strong personalisation, tight targeting, and a compelling value proposition. Most successful B2B sales teams operate in this range.

**Top tier:** 20 to 30% or higher. Hyper-personalised outreach to a perfectly matched audience with a genuinely compelling offer. Not sustainable at scale, but achievable for specific campaigns targeting your ideal customer profile.

**Positive reply rate** (replies that express interest rather than 'remove me' or 'not interested') typically runs 30 to 50% of total replies. So if you're getting a 10% total reply rate, expect 3 to 5% to be genuinely interested. The other 5 to 7% will be polite declines, out-of-office replies, and requests to be removed.

**Best days to send:** Tuesday, Wednesday, and Thursday. Best times: 8am to 10am in the recipient's timezone. Monday mornings are cluttered with weekend email backlog. Friday afternoons are mentally checked out. Some practitioners report good results with Sunday evening sends (the email is at the top of the inbox Monday morning), but I'd test this carefully before making it a regular practice.

**Cold email versus LinkedIn outreach:** LinkedIn gets a higher per-touch response rate because the platform inherently creates a sense of connection. Your name, your photo, your mutual connections are all visible. But email is far more scalable. The winning approach is multichannel, combining both email and LinkedIn touches. Multichannel sequences outperform either channel alone by two to three times. A typical multichannel sequence might look like: LinkedIn connection request (Day 1), Email 1 (Day 2), LinkedIn message (Day 5), Email 2 (Day 7), Email 3 with breakup (Day 14).

### Common Mistakes

I see these consistently across companies getting poor results from cold outreach.

1. **Sending from their primary domain.** This is the most expensive mistake because it damages everything, not just cold email. Your marketing emails, transactional emails, and team correspondence all suffer. Recovery takes weeks to months.

2. **Skipping warmup.** Sending 50 cold emails from a fresh inbox on day one virtually guarantees spam folder placement. The two to four week warmup period is not optional. Treat it as a prerequisite, not a suggestion.

3. **Prioritising volume over quality.** Sending 500 generic emails per day will produce worse results than sending 50 well-targeted ones. And it'll burn your domains faster. More importantly, it teaches you nothing. Fifty personalised emails with a 10% reply rate gives you five conversations and real market feedback. Five hundred generic emails with a 1% reply rate gives you five conversations and no insight into what resonates.

4. **No list hygiene.** Verify every email address before sending. A bounce rate above 3% signals poor list quality to ISPs and damages your sending reputation. Use a verification service like ZeroBounce, NeverBounce, or the built-in verification in your cold email tool. Verification costs less than $5 per 1,000 emails. The cost of not verifying is domain reputation damage that takes weeks to repair.

5. **Ignoring bounce and complaint rates.** If your bounce rate exceeds 5% or your complaint rate exceeds 0.1%, stop sending immediately and fix the underlying issue. These are the metrics that ISPs use to decide whether to send your future emails to spam.

6. **One-size-fits-all messaging.** The same email to a startup CTO and an enterprise VP of Engineering will resonate with neither. Segment your messaging by company size, industry, and role at minimum. A startup CTO cares about speed and cost. An enterprise VP cares about security, compliance, and integration with existing systems. Same product, completely different conversations.

7. **'Just checking in' follow-ups.** Every follow-up must add new value or a new angle. If you have nothing new to say, you don't have a follow-up, you have a nuisance.

8. **Sending on Monday morning or Friday afternoon.** Your email competes with weekend backlog on Monday and gets buried before weekend shutdown on Friday.

9. **Posing as the CEO when you're a junior SDR.** If the prospect replies and gets a meeting with someone different from who emailed them, you've started the relationship with deception. Send from your real name and title.

10. **Using HTML templates for cold outreach.** Rich HTML emails scream 'marketing automation' and trigger spam filters. Plain text from a personal inbox is the format that works.

### The Ethics Line

Cold email exists in a grey area that many practitioners prefer not to examine closely. I think the line is clear.

**Cold email (ethical):** Targeted to a specific person because of their role and company situation. Personalised to demonstrate research. Offers genuine value beyond 'buy our thing'. Respects opt-outs immediately and completely. Sent in reasonable volume (tens per day, not hundreds). Transparent about who you are and why you're reaching out. Would pass the LinkedIn screenshot test.

**Spam:** Sent to anyone with an email address regardless of relevance. Offers no value to the recipient. Template-driven with maybe a name merge field. Ignores or delays opt-outs. Sent in high volume with no regard for quality. Misleading about sender identity or intention. Would embarrass you if made public.

The brand reputation cost of bad cold email is underappreciated. Recipients screenshot terrible cold emails and post them on LinkedIn. They tag the company. They share it with their network. A single viral bad example can damage your brand with thousands of potential buyers. Your total addressable market is finite. Treat every cold email as if the recipient will show it to their entire network, because sometimes they will.

there's also a practical ethics angle that cold email practitioners rarely discuss. Every bad cold email makes it harder for everyone else. When recipients get ten terrible cold emails per day, they start ignoring all cold emails, including yours. The spam senders are degrading the channel for everyone. By sending genuinely good, personalised, value-adding cold email, you're not just doing better work. You're contributing to a channel that works for everyone.

---

