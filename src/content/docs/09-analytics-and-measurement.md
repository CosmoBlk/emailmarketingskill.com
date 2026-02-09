---
title: "Analytics and Measurement"
description: "Which metrics matter, how to build dashboards, attribution models, and measuring email's true impact on revenue."
sidebar:
  order: 9
  label: "9. Analytics & Measurement"
---

Most email marketers check their open rate after a send, feel good or bad about it, and move on. That's not analytics. That's reading a scoreboard without understanding the game.

Real measurement means connecting email activity to business outcomes. It means knowing which campaigns actually generate revenue, which segments are growing or decaying, and where your programme sits relative to what's actually achievable, not just what your ESP dashboard tells you.

This chapter covers the metrics that matter, the attribution models that reveal truth (and lies), and the analytical frameworks that separate serious email programmes from ones running on vibes.

### KPIs by Campaign Type

Not every email should be measured the same way. A welcome series and a re-engagement campaign have completely different jobs, so they need completely different scorecards.

Here's how I'd structure your measurement framework:

| Campaign Type | Primary KPI | Target |
|---|---|---|
| Welcome series | Conversion rate, RPR | 2.5x baseline |
| Abandoned cart | Recovery rate, RPR | $3+ RPR (top 10%) |
| Promotional | Revenue, CTR | 2-5% CTR |
| Nurture | Engagement, Lead-to-customer | >20% open, >12% CTOR (B2B) |
| Transactional | Delivery rate, Speed | 99%+, <60s |
| Re-engagement | Reactivation rate | 5-10% |
| Cold email | Positive reply rate | 3-5% positive replies |
| Newsletter | Open rate, CTR, Growth rate | >40% open, >5% CTR |

A few things worth noting about this table.

RPR (revenue per recipient) is the single most important metric for any revenue-generating email. It normalises for list size and gives you a true picture of campaign efficiency. An email to 10,000 people generating $5,000 has an RPR of $0.50. Compare that to another email to 50,000 people generating $8,000, which only hits $0.16 RPR. The smaller, more targeted send was three times more efficient.

For cold email, ignore open rates entirely. They're unreliable (especially with privacy changes) and they don't tell you anything actionable. Positive reply rate is what matters. A 3-5% positive reply rate means your targeting, subject line, and offer are all working together. Below 1% and something fundamental is broken. Track your bounce rate and spam complaint rate closely too, because cold email deliverability degrades fast if you're hitting bad addresses.

For newsletters, growth rate matters more than most people realise. A newsletter with 40% open rates but flat subscriber growth is a shrinking asset. You want to track net growth (new subscribers minus unsubscribes minus bounces) as a percentage of total list size. Healthy newsletters grow at 5-10% per month in early stages, settling to 2-5% monthly once you pass 10,000 subscribers.

CTOR (click-to-open rate) is more useful than raw CTR for nurture campaigns because it isolates the quality of your email content from your deliverability and subject line performance. If your open rate is strong but CTOR is weak, the problem is inside the email. If both are weak, start with deliverability.

One more metric that rarely gets the attention it deserves: revenue per email sent. Not per campaign, per individual email. This catches the diminishing returns problem that comes from over-sending. If you're sending three campaigns per week and your revenue per email sent has been declining for three months, you're fatiguing your list. Send less, earn more per send. I've seen brands cut their send frequency by 30% and see total revenue stay flat or even increase because engagement per email went up.

### Attribution Models

Attribution is where email marketing gets political. Every channel wants credit for the sale, and the model you choose determines who wins.

Here's the honest breakdown of each model.

**Last-click attribution** is the default in most analytics platforms. It gives 100% of the credit to the last touchpoint before purchase. Simple, but deeply misleading for email. If someone sees your Instagram ad, clicks your email two days later, and then Googles your brand name to buy, the Google search gets all the credit. Email gets nothing. This model consistently undervalues email and inflates the apparent value of brand search.

**First-click attribution** gives all credit to the first touchpoint. Good for understanding which channels drive awareness, but it completely ignores everything that happened between discovery and purchase. A six-month nurture sequence? Invisible.

**Linear attribution** splits credit equally across every touchpoint. Fair in principle, but it treats a random impression the same as the email that triggered the purchase decision. Not how buying actually works.

**U-shaped (position-based) attribution** gives 40% to the first touch, 40% to the last touch, and splits the remaining 20% across everything in between. This is a solid starting point for most businesses because it recognises that the discovery moment and the conversion moment matter most, while still giving some credit to the nurture in between.

**Time-decay attribution** gives more credit to touchpoints closer to the conversion. A 7-day half-life is common, meaning a touchpoint 7 days before purchase gets half the credit of one on the day of purchase. This model works best for businesses with longer sales cycles (B2B, high-consideration purchases) where recent touches genuinely do more of the heavy lifting.

**Data-driven attribution** uses machine learning to determine the actual impact of each touchpoint based on your specific data. Google Analytics 4 offers this. It's the most accurate model available, but it needs significant conversion volume to work properly. If you're running fewer than 300-400 conversions per month, the model won't have enough data to be reliable. For most small and mid-size businesses, U-shaped or time-decay is a better practical choice.

Ryan Phelan makes an important point about all of these models: focus on incrementality over click attribution. It doesn't matter which click gets credit. What matters is whether the email actually caused behaviour that wouldn't have happened otherwise. Every attribution model is a story about what happened. Incrementality testing tells you what actually happened.

**Control groups** are the simplest way to test this. Randomly withhold emails from a small subset of your audience (5-10%) and compare their purchase behaviour to the group that received the email. The difference tells you the true incremental impact of that email.

Multi-channel subscribers are worth paying attention to here. People who engage with your brand across email, social, and your website drive roughly 50% higher purchase rates and lifetime value than single-channel subscribers. Email often plays the connecting role between those channels, but last-click attribution rarely shows it. the subscriber who opens your email, doesn't click, but then visits your site directly two hours later is a common pattern that's invisible in most attribution models.

### The Halo Effect

Email produces a measurable revenue halo on send days, even among people who never opened the email. I covered this in Chapter 1 because it's fundamental to understanding email's value. For attribution purposes, here's the practical measurement: pull your daily revenue for the last 90 days, tag each day as 'send' or 'non-send', control for day of week, and compare. The gap is your halo effect. Send days typically show 15-30% higher overall site revenue.

If your CFO questions email's ROI based on last-click numbers, show them the send-day revenue halo. Back it up with incrementality data and you've made a case that's difficult to argue against.

### Incrementality Testing

Incrementality testing is the gold standard for understanding what email actually contributes to your business. It's simpler than most people think.

Here's how to run one.

Randomly suppress 5-10% of a segment from a campaign. Don't tell them about the sale. Don't send the abandoned cart reminder. Don't send the re-engagement email. Just leave them out. The 'randomly' part is critical. You need a true random holdout, not a segment you chose because they were less engaged anyway.

Then compare the purchase rate of the suppressed group to the emailed group over the same period. The difference between those two numbers is your true incremental email revenue. Everything else, the purchases that would have happened anyway, is organic demand that email is taking credit for.

some marketers resist this because it means deliberately not emailing potential buyers. But the insight you gain is worth far more than the small revenue you forgo from a 5-10% holdout group. Think of it as an investment in understanding your programme's real value.

Here's what the test typically reveals. For abandoned cart emails, you'll often find that 30-50% of 'recovered' carts would have converted anyway. The customer was always going to come back. The email accelerated their timeline but didn't change the outcome. For promotional campaigns, incrementality is usually lower than you expect. For welcome series and post-purchase flows, incrementality tends to be higher because you're shaping early behaviour.

Run incrementality tests monthly or quarterly to maintain ongoing measurement. Revenue attribution shifts over time as your programme evolves, your list composition changes, and customer behaviour shifts seasonally.

For a well-optimised ecommerce store, expect email to drive 25-40% of total revenue. But run the incrementality test before you believe your ESP's dashboard. Most ESPs use generous attribution windows (sometimes 5 days post-click, sometimes even post-open) that inflate their numbers. The true incremental contribution is almost always lower than the ESP reports but still impressively high compared to other channels.

### Cohort Analysis for Email

Cohort analysis answers a question that aggregate metrics hide: are things getting better or worse over time?

Instead of looking at your overall open rate, break your subscribers into cohorts by signup month or week. Then track each cohort's engagement curve over time.

The pattern you're looking for is whether newer cohorts are more or less engaged than older ones at the same point in their lifecycle. If subscribers who joined in January have a 45% open rate in their first month but subscribers who joined in June only hit 35%, something changed. Your acquisition source might have shifted. Your welcome series might have degraded. Your content might be attracting a different audience.

Cohort analysis also reveals the 'engagement cliff', the point at which subscribers typically stop engaging. For most email programmes, there's a sharp drop somewhere between month 2 and month 4. Knowing exactly when this happens lets you time your re-engagement campaigns precisely, catching people right before they fall off rather than months after they've already gone.

Track these metrics by cohort:

- Open rate trajectory (month 1, 2, 3, etc.)
- Click rate trajectory
- Purchase rate (for ecommerce)
- Unsubscribe rate by month
- Time to first purchase from signup

If you're running a newsletter, cohort analysis tells you whether your content quality is improving or declining. the readers who joined six months ago are voting with their attention, and their engagement curve compared to newer cohorts tells the truth.

A practical example: you notice that cohorts from Q1 this year have a steeper engagement decline than cohorts from Q1 last year. They start at similar open rates but drop off faster. This could mean your content has become less compelling after the first few emails, or that your welcome series is setting expectations your regular content doesn't meet. Either way, without cohort analysis, this trend would be invisible in your aggregate numbers.

Build your cohort analysis in a spreadsheet if your ESP doesn't offer it natively. Export subscriber data with signup dates, then calculate engagement metrics for each monthly cohort at 30, 60, 90, 120, and 180 days post-signup. Plot the curves. The visual tells the story faster than any table.

### Subscriber Lifetime Value

Most email marketers can tell you their open rate to two decimal places but can't tell you what a subscriber is worth. That's a problem, because without that number, every decision about acquisition spending, content investment, and list management is a guess.

Subscriber lifetime value (LTV) is calculated simply: average revenue per subscriber per month multiplied by average active months.

If your average subscriber generates $2.50 per month in revenue (through purchases, ad revenue, or other monetisation) and stays active for 14 months, their LTV is $35. Now you know what you can afford to spend acquiring a new subscriber.

Segment LTV by acquisition source. Subscribers from organic search might have an LTV of $42 while subscribers from paid social might be $18. This changes how you allocate acquisition budget dramatically. Not all subscribers are equal, and your acquisition strategy should reflect that. I've seen businesses reallocate 40% of their acquisition budget after doing this analysis for the first time, because they discovered their cheapest subscribers were also their least valuable.

The LTV to CAC (customer acquisition cost) ratio should be greater than 3:1 for sustainable growth. Anything below that means you're spending too much to acquire subscribers relative to what they're worth. Above 5:1 and you're probably under-investing in growth, leaving money on the table.

For newsletter businesses specifically, here's what subscriber acquisition typically costs:

- Referral programmes (SparkLoop): $1-3 per subscriber
- Social media ads: $2-5 per subscriber
- Cross-promotion with other newsletters: $3-8 per subscriber
- Cold advertising (display, programmatic): $5-15+ per subscriber

The economics change based on your monetisation model. A newsletter earning $40 CPM on advertising can afford to pay more per subscriber than one earning $20 CPM. Work the maths backward from your revenue per subscriber to set your maximum acquisition cost.

Don't forget to factor in the revenue timeline. A subscriber acquired today might not generate their first dollar for 30-60 days. If your cash position is tight, cheaper acquisition sources with faster payback periods might be more important than overall LTV maximisation.

### Email Revenue Tracking

Getting accurate revenue numbers from email requires work. Here's the practical setup.

Use UTM parameters on every link in every email: `utm_source=klaviyo`, `utm_medium=email`, `utm_campaign=[campaign_name]`. Be consistent with naming conventions. If your welcome series is called 'welcome-series' in one email and 'Welcome_Series' in another, your analytics will treat them as separate campaigns. Document your UTM naming convention and share it with everyone who creates emails.

Add `utm_content` for individual link tracking within emails. Use it to identify which button or link was clicked: `utm_content=hero-cta` versus `utm_content=footer-link`. This level of detail tells you which parts of your email design are actually driving conversions.

Your ESP-attributed revenue will always be higher than your Google Analytics-attributed revenue. ESPs use generous attribution windows, sometimes crediting a purchase to email if someone opened the email within the last 5 days and then purchased, even if they came back through a completely different channel. GA uses last-click by default, so if someone clicked your email but then Googled your brand to complete the purchase, GA credits Google.

True email revenue sits somewhere between these two numbers. Use ESP attribution for campaign-level comparison (which emails perform best relative to each other) and GA attribution for channel-level budgeting (how much total revenue does email generate compared to paid search, social, etc.).

For well-optimised ecommerce programmes, email should drive 25-40% of total revenue. If you're below 20%, your programme has significant room for improvement. If you're above 40%, check your attribution, you might be over-counting. Programmes above 50% are almost certainly over-attributing unless they have a very small paid media spend.

Set up a simple revenue dashboard that shows:

- Total email-attributed revenue (ESP and GA side by side)
- Revenue per recipient by campaign type
- Revenue per subscriber per month (trending over time)
- Percentage of total revenue from email (trending over time)
- Revenue per email sent (to catch diminishing returns from over-sending)

Review this weekly. Trends matter more than individual data points. A single bad send doesn't mean much. A three-month decline in RPR means something fundamental needs to change.

---

