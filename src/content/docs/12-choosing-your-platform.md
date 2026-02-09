---
title: "Choosing Your Platform"
description: "How to evaluate and choose an email marketing platform. Feature comparisons, migration strategies, and what actually matters."
sidebar:
  order: 12
  label: "12. Choosing Your Platform"
---

Choosing an email platform is one of those decisions that feels reversible but rarely is. The switching costs are real. Not just in dollars, but in time, rebuilt automations, re-warmed domains, and the inevitable dip in deliverability during migration. I've watched companies spend six months recovering from a poorly planned platform switch.

the good news is that the market in 2026 offers genuine choice across every price point and use case. The bad news is that the abundance of options makes the decision harder, not easier. There are over 400 email marketing tools on the market today. Most of them are mediocre. About 15 are genuinely worth your attention, and the right one for you depends entirely on your business model, technical capabilities, and growth trajectory.

### How to Choose

Five factors should drive your platform decision. I'd rank them in this order.

**Deliverability** comes first because nothing else matters if your emails don't reach inboxes. Ask the platform for their aggregate deliverability data. Ask to speak with customers in your industry. Check third-party deliverability monitoring reports from companies like EmailToolTester or InboxReady. Some platforms invest heavily in deliverability infrastructure and sender reputation management. Others treat it as an afterthought.

The difference between a platform with 95% inbox placement and one with 85% inbox placement might not sound dramatic. But on a list of 50,000 subscribers, that's 5,000 people who simply never see your email. Over a year of weekly sends, that's 260,000 missed impressions. At a $0.50 revenue per email, that's $130,000 in lost revenue. Deliverability is not a technical detail. It's a revenue line.

**Automation capabilities** come second. The gap between a platform with basic autoresponders and one with full behavioural automation is enormous. You need event-triggered flows, conditional branching, time delays, A/B splits within flows, and the ability to build complex multi-step sequences without engineering help. If your automations can't respond to what subscribers actually do, you're leaving money on the table.

I'd specifically test for: can you branch a flow based on whether someone clicked a specific link? Can you add a time delay that waits until a specific day of the week? Can you A/B test different paths within an automation, not just different subject lines? Can you trigger a flow from a custom event sent via API? These capabilities separate serious automation platforms from glorified autoresponders.

**Segmentation depth** determines how precisely you can target. Can you segment by purchase behaviour, email engagement, website activity, custom properties, and combinations of all four? Can you create dynamic segments that update in real-time? The difference between 'purchased in last 30 days' and 'purchased Product X in last 30 days AND opened 3+ emails AND hasn't visited the site in 7 days' is the difference between generic and genuinely useful marketing.

Test the speed of segment calculation too. Some platforms take minutes to compute a complex segment. Others do it in seconds. When you're building a last-minute campaign, that difference matters more than you'd expect.

**Integrations** matter more than most people realise during evaluation. Your email platform needs to talk to your ecommerce platform, your CRM, your analytics, your customer support tool, your payment processor, and increasingly your data warehouse. Check the native integration quality, not just whether it exists. A Shopify integration that syncs order data in real-time is fundamentally different from one that batch-syncs daily.

Pay attention to webhook support and API quality. Even if you don't need custom integrations today, you will eventually. A platform with a well-documented, responsive API and flexible webhooks gives you room to grow. A platform with a limited API constrains your future options.

**Pricing model** is where things get interesting. Most platforms charge based on subscriber count, which creates a perverse incentive to keep unengaged subscribers on your list. Some charge by email volume instead, which is better because it encourages you to clean your list (fewer subscribers, same cost) and rewards you for list hygiene. Braze uses value-based pricing anchored to revenue, which means higher absolute cost but typically stronger ROI because the pricing structure aligns the platform's incentives with your business outcomes. At the enterprise level, you might pay $50,000 to $200,000 per year for Braze, but if you're generating $10M+ through email, that cost is a rounding error.

Watch out for hidden costs. Some platforms charge extra for SMS, for additional users, for priority support, for advanced reporting, or for removing their branding from your emails. The advertised price is often the starting price, not the real price. Calculate the total cost at your expected usage level, including all the features you actually need.

Make a shortlist of three platforms, running real campaigns through free trials or demos, and making your decision based on actual experience rather than feature comparison spreadsheets. The platform that feels right when you're building your third automation is usually the right choice.

### Platform Comparison

Here's an expanded comparison of the major platforms worth considering in 2026.

| Platform | Best For | Starting Price | Key Strength |
|---|---|---|---|
| Mailchimp | Small businesses | Free (500 contacts) | Ease of use, AI features |
| Klaviyo | Ecommerce (Shopify) | Free (250 contacts) | Deep ecommerce data, flows |
| Constant Contact | Small biz, nonprofits | $12/mo (500 contacts) | 300+ integrations |
| Brevo | Multi-channel | Free (300 emails/day) | All-in-one (email + SMS + chat) |
| Braze | Enterprise | Custom pricing | Real-time stream processing |
| Loops | SaaS, PLG companies | Free (1,000 contacts) | Product email focus |
| Resend | Developers | Free (3,000 emails/mo) | React Email, dev-first |
| HubSpot | B2B, inbound | Free (2,000 emails/mo) | CRM integration, full suite |
| ActiveCampaign | Automation-heavy | $15/mo | 135+ triggers and actions |
| Kit (ConvertKit) | Creators | Free (10,000 subscribers) | Creator-focused, simplicity |
| Postmark | Transactional | Free (100 emails/mo) | 99%+ delivery, sub-1s median |
| Bento | Dev-first, AI | $30/mo | Tanuki AI agent, MCP server |
| beehiiv | Newsletters | Free (2,500 subscribers) | Growth tools, ad network |
| Sendlane | Ecommerce | Custom pricing | Deep ecommerce, SMS |
| Omnisend | Ecommerce | Free (250 contacts) | Email + SMS + push combined |

That's fifteen platforms, and I could list another fifteen. The market is that crowded. A few things worth noting.

Mailchimp's free tier dropped from 2,000 to 500 contacts, pushing many small businesses toward Kit or Brevo. Kit's free tier at 10,000 subscribers is the most generous in the market. beehiiv has emerged as the newsletter platform of choice since 2022, because Tyler Denk built it to solve the problems he encountered growing Morning Brew.

### Platform Performance Data

**Klaviyo's** top 10% of users convert at 0.44% (5.5x the average of 0.08%). Automations generate 30x more revenue per recipient than campaigns. If you're spending 80% of your effort on campaigns and 20% on automations, flip it. The gap between average users and top performers is entirely about how they use the tools: tighter segmentation, more granular triggers, better copy, more testing.

**HubSpot** reports 129% more leads and 36% more closed deals after one year of use. CRM-integrated email outperforms standalone email, especially in B2B. The flywheel effect (email feeds CRM, CRM makes email smarter) is HubSpot's real value proposition.

**Brevo's** pricing model charges by email volume rather than subscriber count. You can have 100,000 subscribers and only pay for what you send. This rewards list hygiene rather than penalising list growth.

**Loops** thinks in product events and user journeys, not campaigns and audiences. Purpose-built for SaaS onboarding and product email. **Resend** treats email as a first-class engineering concern with React Email components. **Postmark** delivers transactional emails in under one second. They deliberately don't offer bulk marketing sends because it would compromise their transactional deliverability.

### Budget ESP Comparison for Small Businesses

If you're just starting out or running a small operation, the free tiers are genuinely useful. Don't spend money you don't need to spend.

**Under 500 subscribers:** Mailchimp Free, Kit Free, Brevo Free, and MailerLite Free all work. At this stage, the platform barely matters. Pick whichever one feels most intuitive to you and start sending. You can always switch later when the stakes are higher. The important thing at this stage is to start building the habit of regular email communication, not to optimise your tech stack.

**500 to 5,000 subscribers:** Brevo at around $25 per month, MailerLite at $10 per month, and Kit's free tier (which covers up to 10,000 subscribers) are your best value options. Kit's free tier is remarkable at this level, giving you the core functionality of a platform that creators pay $49 per month for, with the tradeoff being limited automation features.

MailerLite deserves special mention in this tier. At $10 per month for up to 500 subscribers (and $17 per month for up to 1,000), it offers a clean interface, decent automation capabilities, and good deliverability at one of the lowest price points in the market. It's the platform I'd recommend for anyone who doesn't fall neatly into the 'creator' or 'ecommerce' categories.

**5,000 to 25,000 subscribers:** Now the decision matters more. Klaviyo at $60 to $150 per month is the clear choice for ecommerce because the revenue attribution alone pays for itself. ActiveCampaign at $49 per month gives you the most sophisticated automation at this price point, with 135+ triggers and actions that let you build genuinely complex behavioural flows. Kit at $49 per month is ideal if you're a creator or educator.

here's the most important thing: don't choose based on your current list size. Choose based on where you'll be in 12 months. Migrating at 500 subscribers is trivial. Migrating at 25,000 with 15 active automations, a year of engagement data, and a warmed sending domain is a genuine project. Think ahead. The platform that's perfect for your first 500 subscribers might be completely wrong for your first 25,000.

### When to Switch

Migration is never fun. I won't pretend otherwise. But staying on the wrong platform costs more in the long term than the pain of switching. If your platform's deliverability is declining, if you've outgrown its automation capabilities, if the pricing has become unjustifiable relative to alternatives, or if a critical integration doesn't exist, it's time to move.

Here are the specific signals that should trigger a platform evaluation:

Your deliverability has dropped below 90% inbox placement and your platform's support can't explain why. Your automation needs exceed what the platform can handle without engineering workarounds. You're paying more than $500 per month and not using half the features, meaning you're overpaying for capabilities you don't need. A competitor's platform has introduced a feature that would materially change your results (like Klaviyo's predictive analytics for ecommerce, or Bento's AI agent for automation building). Your team spends more time fighting the platform than using it productively.

Jimmy Kim, CEO of Sendlane, recommends running both platforms in parallel for two to four weeks during migration. This is excellent advice. It gives you a safety net and lets you validate that the new platform performs as expected before cutting over completely.

Jordie van Rijn, founder of Emailmonday, puts it well: don't just compare features on paper. Get demos. Test with real data. What looks good in a sales presentation doesn't always hold up when you're building your actual workflows. I'd add: talk to customers who have been on the platform for at least a year. New users love everything. Experienced users know the real limitations.

Here's a step-by-step migration process that minimises risk:

1. **Export everything.** Subscribers with all custom properties, engagement data (opens, clicks, purchases), flow structures, and templates. Export your suppression list. Export your complaint history. Don't leave historical data behind. You'll need it for segmentation on the new platform and you may need it for compliance records.

2. **Set up authentication on the new platform.** Configure SPF, DKIM, and DMARC records for your sending domain. Verify everything passes authentication checks before sending a single email. Use a tool like MXToolbox or Mail-Tester to validate your DNS records are correct. Getting this wrong means starting your new platform relationship in the spam folder.

3. **Rebuild core automations first.** Start with your welcome series, abandoned cart flow, and post-purchase sequence. These are your revenue drivers and need to be live before you migrate traffic. Don't try to rebuild every automation at once. Focus on the flows that generate 80% of your automation revenue.

4. **Send from the new platform to your most engaged segment only.** Your 60-day active openers and clickers. This builds sending reputation with ISPs who see high engagement from your new IP or sending domain. Start with your best segment because their high engagement signals to Gmail, Yahoo, and Outlook that you're a legitimate sender.

5. **Gradually migrate remaining segments over two to four weeks.** Move to 90-day actives, then 120-day, then the rest. Each wave should maintain strong engagement metrics before you expand to the next. If engagement drops significantly after adding a wave, pause and investigate before continuing.

6. **Monitor deliverability metrics closely during transition.** Watch inbox placement rates, bounce rates, complaint rates, and engagement metrics daily during migration. Any significant degradation means you need to slow down the migration pace. Use a deliverability monitoring tool like GlockApps or Everest to track inbox placement across major ISPs.

7. **Keep the old platform active for historical data and as a fallback.** Don't cancel your old account the day you switch. Keep it running for at least 30 days as insurance. If something goes wrong with the new platform, you can fall back to the old one within hours rather than days. The cost of one extra month is trivial compared to the risk of a failed migration.

The whole process typically takes four to eight weeks for a mid-sized list. For enterprise migrations with complex automation architectures, expect two to three months minimum. Budget the time accordingly and don't rush it. A botched migration can tank your deliverability for months, and recovering from a deliverability hit is far harder than preventing one.

---

