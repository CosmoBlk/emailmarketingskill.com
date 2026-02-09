---
title: "Testing and Optimisation"
description: "A/B testing frameworks, statistical significance, multivariate testing, and systematic optimisation strategies."
sidebar:
  order: 8
  label: "8. Testing & Optimisation"
---

The difference between a good email programme and a great one is rarely a single big idea. It's hundreds of small improvements, compounding over months and years. Testing is how you find those improvements. Optimisation is how you bank them.

### What to Test

Not everything is worth testing. Focus your testing effort on changes that will have the biggest impact on your key metrics and, ideally, that will compound across future sends.

**Subject lines** are the most commonly tested element, and for good reason. But test one variable at a time. Don't test a short subject line with an emoji against a long one without. You won't know which variable caused the difference. Test length in one experiment. Personalisation in another. Question vs statement in another. Emoji vs no emoji in another.

**Send time** is underrated as a test variable. The same email sent at 6am vs 2pm can show dramatically different results. Send Time Optimisation (STO) platforms automate this at the individual level, but even a simple test of morning vs afternoon for your audience can reveal significant opportunities.

**CTAs** are high-impact test candidates. Button vs text link, button colour, button copy, and button position all affect click-through rates. A CTA test that produces a 10% improvement benefits every email that uses that CTA format going forward.

**Content and layout** testing reveals whether your audience prefers long-form or short-form emails, image-heavy or text-heavy layouts, and one topic or multiple topics per send.

**Sender name** is one of the highest-value tests you can run. Because the sender name appears on every email you send, even a small improvement in open rate from a sender name change compounds across all future sends. Test personal name vs brand name vs "person at brand" format.

**The 'ugly email' test.** Take your beautifully designed HTML template and test it against a plain-text version with no images, no styling, just words. I've seen multiple case studies where the plain-text version wins in B2B contexts, sometimes significantly. It's humbling, but it's data.

**Removing the hero image.** Several case studies have shown that removing the large hero image from the top of an email improves click-through rates. The email loads faster, looks more personal, and the CTA moves above the fold. it's worth testing for your audience.

**Preheader text vs no preheader text.** This is one of the lowest-risk, highest-reward tests you can run. If you're not currently using intentional preview text, test adding it. The data consistently shows a lift, and the implementation takes about 30 seconds.

**Email length.** Test a 100-word email against a 400-word email with the same offer and CTA. You may find that shorter emails produce higher click rates (less to read before the CTA) or that longer emails produce higher conversion rates (more context builds more desire). The answer depends on your audience, your offer, and the complexity of what you're selling. Simple products tend to benefit from shorter copy. Complex, high-consideration purchases tend to benefit from more detail.

**Testing priority framework:** Rank potential tests by two factors: expected impact (how much could this improve results?) and compounding effect (how many future sends will benefit?). Tests with both high impact and high compounding should always be prioritised. Sender name, CTA format, and email template structure top that list. Subject line tests have high impact but low compounding since each subject line is unique.

### Statistical Significance

Most marketers run A/B tests incorrectly. They check results after a few hours, see that one version is "winning," and declare a winner based on incomplete data. This leads to implementing changes that were actually just random noise.

**Only about 1 in 7 A/B tests produces a statistically significant winner.** That means 6 out of 7 tests end in a draw where neither version is meaningfully better. This is normal. It means most of your current practices are already pretty good, and big wins are found at the margins.

**Sample size guidelines:**

For small lists (under 5,000 subscribers), test 20 to 30% of your list. You need a larger sample proportion because the total numbers are small.

For medium lists (5,000 to 50,000), test 15 to 25%.

For large lists (50,000+), test 10 to 20%. You can use a smaller proportion because the absolute numbers are large enough for significance.

**Wait times for reliable results:**

For open rate tests, 2 hours of data predicts the winner with 80%+ accuracy. Most opens happen within the first 2 hours of delivery.

For revenue-based tests, let the test run for a full day to achieve 90% accuracy. Revenue takes longer to materialise as subscribers click through, browse, and eventually purchase.

**Always send both test versions at the same time on the same day.** Sending version A on Tuesday and version B on Wednesday doesn't test your variable. It tests the day of the week.

**Use a significance calculator.** Don't eyeball it. Tools like VWO's A/B test significance calculator, Evan Miller's calculator, or your ESP's built-in significance indicator will tell you whether your result is statistically reliable. Most calculators use a 95% confidence level, meaning there's only a 5% chance the observed difference is due to random chance. Don't declare a winner below 95% confidence.

**Bayesian vs frequentist testing.** Some platforms (including Klaviyo and Optimizely) use Bayesian statistics rather than traditional frequentist methods. Bayesian testing gives you a probability that one version is better than the other (e.g., "Version A has a 92% probability of being the winner"), which many people find more intuitive than p-values and confidence intervals. Either approach is valid. What matters is that you use one of them rather than guessing.

### A/B Test Surprises

Some of the most instructive test results are the ones nobody expected.

The Obama campaign's "Hey" subject line raising $2.5 million more than its nearest competitor remains the most cited example. The campaign's email team was shocked. They assumed casual, personal subject lines wouldn't work for political fundraising. They were wrong.

Negative subject lines can outperform positive ones. "Don't make this mistake with your email" can beat "How to improve your email." Loss aversion at work.

Dell tested a GIF vs a static image in a product email. The animated GIF showing the product in use generated 109% more revenue than the static image. The lesson: showing a product in action, even in a simple animation, helps the buyer visualise ownership.

Removing hero images from emails has improved open-to-click rates in multiple documented case studies. The large hero image that feels essential to the design team can actually be a barrier to engagement.

Adding preview text consistently produces roughly 5% higher open rates. It's one of the simplest, most reliable improvements you can make.

Perhaps the most counterintuitive finding: reducing email frequency sometimes increases total revenue. How? By improving inbox placement. When you send less frequently but to more engaged recipients, inbox providers reward you with better placement, and the emails you do send perform significantly better. More isn't always more.

**Multivariate testing vs A/B testing.** A/B testing compares two versions with one variable changed. Multivariate testing changes multiple variables simultaneously and measures how different combinations perform. Multivariate is appealing because it's faster in theory, testing many things at once. In practice, it requires much larger sample sizes to reach significance because you're splitting traffic across many more variants. For most email lists under 100,000, stick to A/B testing. Multivariate testing becomes practical only at significant scale.

### Continuous Improvement

Testing without a system is just random experimentation. You need a process.

**Jeanne Jennings' systematic approach** is the one I'd recommend: analyse your current performance to identify the weakest link, form a hypothesis about what might improve it, test that hypothesis with a proper A/B test, apply the winning variant, and repeat. The key word is systematic. Each test builds on the learnings of the previous one.

**Build a testing calendar.** Gavin Laugenie advocates for quarterly testing plans tied to business questions. Don't test for the sake of testing. Start with a question: "Is our sender name costing us opens?" or "Would a shorter email increase clicks?" Then design a test to answer it. Document results in a shared location so institutional knowledge accumulates.

**Beware over-testing.** If you're running multiple tests simultaneously, or changing too many variables at once, you'll struggle to attribute results and you risk fatiguing your list. One well-designed test per send is enough.

**The compounding effect of optimisation is where the real value lives.** a 2% improvement in your welcome series open rate might seem trivial. But that improvement affects every single new subscriber from now until you change it again. Over thousands of subscribers and months of sending, a 2% improvement in a foundational flow translates to meaningful revenue.

**Prioritise testing your automated flows over campaigns.** Campaign tests improve a single send. Flow tests improve every send through that flow from now on. If you have limited testing capacity, focus it on your welcome series, your abandoned cart sequence, and your post-purchase follow-up. These are your highest-volume, highest-value flows, and improvements compound indefinitely.

**Document everything in a testing log.** At minimum, record: what you tested, the hypothesis, sample sizes for each variant, results with confidence level, the date, and what you decided to implement. Over time, this log becomes one of the most valuable assets in your email programme. It prevents you from re-testing things you've already tested, and it reveals patterns across tests that individual results might miss.

### Send Time Optimisation

Send Time Optimisation (STO) uses data about each subscriber's past engagement to predict the optimal time to deliver each email. Instead of blasting your entire list at 10am on Tuesday, STO queues each email for the moment that specific subscriber is most likely to engage.

**How it works:** The platform tracks when each subscriber has historically opened and clicked emails. It builds a per-subscriber model of engagement patterns (morning person, lunchtime checker, late-night browser) and queues delivery accordingly. For new subscribers with insufficient engagement data, the platform typically falls back to audience-level averages until enough individual data accumulates.

**Platform comparison:**

| Platform | Feature | Method |
|---|---|---|
| Klaviyo | Smart Send Time | ML per individual |
| Seventh Sense | AI Send Time | Deep per-contact analysis |
| ActiveCampaign | Predictive Sending | Per-contact patterns |
| Mailchimp | STO | Audience-level (not individual) |
| Brevo | STO | Per-contact prediction |

Here's more context on each:

Klaviyo's Smart Send Time uses machine learning to predict optimal delivery at the individual subscriber level. It's available on most plans and works well for ecommerce.

Seventh Sense offers the deepest per-contact analysis and integrates with HubSpot and Marketo. It's the most sophisticated option for B2B and enterprise.

ActiveCampaign's Predictive Sending builds per-contact patterns and optimises delivery timing. Good option for small to mid-size B2B.

Mailchimp's Send Time Optimisation works at the audience level, not individual level. It finds the best time for your audience as a whole, which is less precise but still better than guessing.

Brevo's STO offers per-contact prediction and is included in their marketing platform.

**Results:** STO typically delivers a 5 to 15% improvement in open rates. That's a substantial lift for a feature that requires zero additional work after setup.

**When STO doesn't help:**

Time-sensitive content. If your email is about a flash sale ending in 4 hours, you can't drip it out over 24 hours. Some messages need to arrive at a specific time.

Small lists under 1,000. The models need enough data to find patterns. With very small lists, the predictions aren't reliable enough to outperform informed guessing.

Transactional emails. Order confirmations, password resets, and shipping notifications should arrive immediately. Delaying them for "optimal engagement time" would frustrate customers.

**General timing findings from broad data:**

Emails sent between 4am and 6am tend to produce the highest open rates, because they're sitting at the top of the inbox when the subscriber wakes up and checks their phone. This doesn't mean 4am is the right send time for your audience, but it explains why early morning sends often outperform midday ones.

Tuesday and Thursday tend to be the best-performing days for B2B email. Monday inboxes are crowded from the weekend. Friday attention has already shifted to the weekend. Midweek hits the sweet spot.

For B2C and ecommerce, weekends can actually outperform weekdays for certain verticals (fashion, food, entertainment) because subscribers have more leisure browsing time.

But here's the real takeaway: these are generalisations. Your audience is specific. STO tools exist because the "best" send time varies not just by audience, but by individual. Use the general findings as a starting point, then let the data and the algorithms refine from there.

**Time zone handling is the often-forgotten cousin of send time optimisation.** If your audience spans multiple time zones (and if you have any international subscribers, it does), sending at 10am in your time zone means some subscribers receive it at 3am. Most ESPs offer time zone-based sending that delivers at the same local time for each subscriber. It's not as precise as full STO, but it's a significant step up from blasting everything at once. For globally distributed audiences, time zone sending is table stakes before you even consider STO.

### Building a Testing Culture

The most successful email programmes I've worked with share a common trait: they treat every send as a learning opportunity, not just a broadcast. They ask "what did we learn?" as often as "how did it perform?"

This means documenting test results where the team can find them. It means celebrating negative results (learning that something doesn't work is valuable). It means allocating time and sends specifically for testing rather than filling every slot with revenue-focused campaigns.

Dedicate at least 20% of your campaign sends to testing something. Not every test will produce a winner. But over the course of a year, the wins that do emerge will compound into a programme that performs meaningfully better than where you started.

**Share test results across teams.** Your email testing insights don't exist in a vacuum. A subject line test that reveals your audience responds better to negative framing has implications for your ad copy, your landing page headlines, and your product messaging. A CTA test that shows first-person copy outperforms second-person applies everywhere you're writing calls to action. email testing is often the fastest, cheapest way to learn about your audience's preferences because the feedback loop is so tight.

**When a test fails to produce a winner.** Inconclusive results are still results. They tell you that the variable you tested doesn't matter much to your audience, which frees you to stop worrying about it and focus your optimisation energy elsewhere. If you tested button colour and found no significant difference between red and green, you now know that button colour isn't a lever for you. Move on to something that is.

Testing isn't a phase. It's a practice.
