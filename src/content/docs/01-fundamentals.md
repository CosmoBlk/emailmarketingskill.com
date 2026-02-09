---
title: "The Fundamentals"
description: "Core email marketing metrics, key benchmarks, and the foundational concepts every email marketer needs."
sidebar:
  order: 1
  label: "1. The Fundamentals"
---

Eighty-nine percent of marketers still use email as their primary channel for lead generation. Fifty-one percent of consumers say it's their preferred way to hear from brands. These numbers haven't budged much in a decade.

Social platforms rise and fall. Algorithm changes wipe out organic reach overnight. TikTok might get banned in certain markets. But email keeps working, quietly and reliably, because the fundamental mechanism (one person sending a message to another person who asked to receive it) is as close to a perfect marketing channel as exists.

### Why Email Still Wins

Email is owned media. You don't rent access to your audience from Meta or Google. You don't get throttled by an algorithm change. Your subscriber list is yours.

Chad White (Head of Research at Oracle Digital Experience Agency and author of *Email Marketing Rules*) has argued for years that the real power of email goes beyond ROI. Reach, personalisation, measurability, and ownership in a single channel. Nothing else comes close.

Organic reach on Facebook is somewhere around 5% for brand pages. Instagram isn't much better. Meanwhile, the average email open rate across industries sits at around 21%, with click-through rates of 2-3%. Those numbers might not sound spectacular until you realise they're being delivered to people who specifically asked to hear from you. Dela Quist (founder of Alchemy Worx and EEC 2022 Thought Leader of the Year) puts it simply: email is the only digital marketing channel where the user has actively said "yes, I want to hear from you."

| Channel | ROI |
|---|---|
| Email marketing | 3,600% ($36 per $1) |
| Newsletter email | 122% |
| Social media | 28% |
| Paid search | 25% |

the gap between email and everything else isn't close. That newsletter figure of 122% is specifically for newsletter-as-a-business models where the newsletter itself is the product. The 3,600% figure covers email marketing broadly, including ecommerce flows, transactional emails, and promotional campaigns.

What does that 3,600% actually mean in practice? If you spend $500 per month on your ESP, list management tools, and the time to write and send emails, you should be generating $18,000 per month in email-attributed revenue. For a well-optimised ecommerce store, email typically drives 25-35% of total revenue. Top performers hit 40% or more. If your store does $100,000 per month and email is contributing less than $25,000 of that, there's significant upside available.

Multi-channel subscribers drive 50% higher purchase rates and lifetime value versus single-channel subscribers. Email and social media aren't competitors. Email converts the audience that social media builds.

### The Email Marketing Stack

Before you send a single email, you need to understand the components.

**Email Service Provider (ESP).** This is your sending platform. Mailchimp, Klaviyo, Brevo, Kit, ActiveCampaign, HubSpot, or any of dozens of others. Your ESP handles delivery, list management, automation, and analytics. The right choice depends on your size, segment, and technical needs. Chapter 12 covers this in detail.

**Authentication.** SPF, DKIM, and DMARC records prove to inbox providers that you're legitimate. Without these, your emails land in spam. This isn't optional anymore. Since February 2024, Google and Yahoo enforce bulk sender rules requiring proper authentication, spam complaints under 0.3%, and bounce rates under 2%. If your database is over 5,000 profiles, set up a branded sending domain with DMARC. This is what Klaviyo recommends for all their customers of that size, and it's sound advice regardless of your ESP.

**List management.** Your subscriber database. How you collect, segment, clean, and maintain it determines everything downstream. A clean list of 5,000 engaged subscribers will outperform a messy list of 50,000 every time. I've watched this play out across thousands of SmartrMail customers. The brands that obsess over list quality always outperform the ones chasing list size.

**Content and design.** The actual emails you send. Templates, copy, images, CTAs. Most emails are now read on phones (over 60% on mobile devices), so mobile-first design is essential. Chapter 6 covers the technical side in depth.

**Automation.** The flows that run without you. Welcome series, abandoned cart reminders, post-purchase follow-ups, win-back campaigns. These automated flows generate 30x more revenue per recipient than one-off campaign sends. If you take one thing from this guide, make it this: set up your automated flows before spending another minute on campaign strategy.

**Analytics.** The feedback loop. Open rates, click-through rates, conversion rates, revenue per email, list growth rate. If you're not measuring, you're guessing. Twenty-one percent of marketers don't measure their email ROI at all. They're flying blind. Don't be one of them.

Each of these six components connects to the others. Your ESP delivers based on your authentication. Your authentication protects your sender reputation. Your list quality determines your engagement metrics. Your engagement metrics affect your deliverability. Your deliverability determines whether anyone sees your content. And your analytics tell you whether the whole thing is working. Pull one piece out and the system breaks down.

A common question I get asked is about cost. What should you be spending on your email marketing stack? For most small businesses, a free or entry-level ESP tier ($0-50 per month), a validation service run quarterly ($20-50 per quarter), and your time are the only costs. As you scale, budget for a paid ESP tier with advanced automation ($50-500 per month depending on list size), a dedicated deliverability monitoring tool, and potentially a design tool for templates. The ROI of 3,600% means even relatively expensive setups pay for themselves many times over. The most expensive mistake is not investing in email at all.

### Metrics That Actually Matter

Open rates have gotten complicated since Apple's Mail Privacy Protection launched in September 2021. They're less reliable as a primary metric now. But they're not dead. Let me explain the nuance.

#### Apple Mail Privacy Protection (MPP)

Apple MPP pre-fetches email content, including tracking pixels, for anyone using Apple Mail on iPhone, iPad, or Mac. This means those opens get counted even when the person never actually looked at the email. The impact is significant: roughly 50-60% of all email opens happen on Apple Mail clients. That's a lot of phantom opens inflating your numbers.

What this means in practice:

- Your absolute open rates are inflated. If you're seeing 45% open rates and you were seeing 30% before MPP, the true number probably hasn't changed much.
- Open rates are still useful for relative comparison. If Subject Line A gets a 32% open rate and Subject Line B gets a 28% open rate in the same A/B test, the winner is still the winner. MPP bot opens affect both versions equally.
- Engagement segmentation based on opens is unreliable. If you're defining 'engaged' as 'opened in the last 30 days', you're including a lot of people who never actually read your email. Shift to click-based engagement definitions instead.
- Send-time optimisation based on opens is compromised. The 'optimal send time' your ESP calculates may be based on when bots pre-fetch, not when humans read.

The adaptation strategy is straightforward: treat open rates as directional (useful for comparing two things against each other) but not absolute (don't trust the raw number). Shift your primary metrics to click-through rate, click-to-open rate, and conversion rate. These can't be faked by bots.

Several experienced marketers now advise ignoring open rates entirely and focusing on clicks and conversions. I wouldn't go quite that far. Open rates are still valuable for A/B testing (comparing Subject Line A versus Subject Line B on the same audience, where MPP bots inflate both equally) and for tracking relative trends over time. But they should no longer be your primary engagement metric or the basis for segmentation decisions.

If you're currently defining 'engaged subscribers' as 'opened in the last 30 days', you need to change that to 'clicked in the last 30 days' or 'clicked in the last 60 days'. This single change will make your engagement segments more accurate and your engagement-based sending more effective.

#### The metrics worth caring about

**Click-through rate (CTR).** The percentage of delivered emails that get a click. Industry average is around 2.3%. If you're above 4%, you're doing well. This tells you whether your content is compelling enough to drive action. Post-MPP, this is the metric that should be your north star.

**Click-to-open rate (CTOR).** Clicks divided by opens. This isolates content quality from subject line quality. Average is around 10.5%. Above 20% is strong.

**Conversion rate.** The percentage of recipients who complete your desired action: purchase, signup, download. This is the metric that pays the bills.

**Revenue per email (RPE) or Revenue per recipient (RPR).** How much money each email generates. Klaviyo's data shows the top 10% of senders generate $0.97 RPR, while average performers are far lower. Abandoned cart flows lead at $3.07 RPR for the top 10%. The gap between average and top performers is enormous, and it's almost entirely explained by segmentation, automation, and content quality, not the platform.

**List growth rate.** Net new subscribers minus unsubscribes and bounces over time. A healthy list grows at 3-5% per month.

**Unsubscribe rate.** Keep this under 0.3%. Higher signals your content isn't matching subscriber expectations. But I'd add a caveat here: some unsubscribes are healthy. People who unsubscribe are leaving cleanly, which is better than them marking you as spam. Worry about spam complaints more than unsubscribes.

**Bounce rate.** Keep under 2%. Hard bounces (invalid addresses) hurt your sender reputation. Clean your list regularly. More on this in Chapter 2.

**Spam complaint rate.** Under 0.1% is the target. Google will throttle you above 0.3%. Yahoo sets their threshold at the same level. This is the metric that can genuinely destroy your email programme overnight. A single bad send with a complaint rate above 0.3% can trigger throttling that takes weeks to recover from.

Here's a benchmark table to reference:

| Metric | Good | Strong | Red Flag |
|---|---|---|---|
| Click-through rate | 2-3% | 4%+ | Below 1% |
| Click-to-open rate | 10-15% | 20%+ | Below 5% |
| Unsubscribe rate | Under 0.2% | Under 0.1% | Above 0.5% |
| Bounce rate | Under 2% | Under 1% | Above 3% |
| Spam complaint rate | Under 0.1% | Under 0.05% | Above 0.3% |
| List growth rate | 3-5%/month | 5%+/month | Negative |
| Delivery rate | 95%+ | 98%+ | Below 85% |
| Inbox placement | 85-94% | 94%+ | Below 70% |

Compare against your own historical performance, not industry averages. Industry averages include terrible senders who drag them down. A steady improvement from 18% to 22% in your own metrics is more meaningful than comparing to an average of 21%.

### The Halo Effect

Here's something that doesn't get talked about enough. Effective email marketing produces a revenue 'halo effect', leading to higher average daily revenue on days emails are sent, even among customers who don't open the emails.

Read that again. Even people who don't open your email are more likely to buy on the day you send it. The brand reminder in the inbox, subject line, and preview text drives awareness that translates to purchases through other channels, direct site visits, search, even physical stores.

This is why pure last-click attribution dramatically undervalues email. If you're only counting revenue from people who clicked a link in your email and then purchased, you're missing a significant chunk of email's true contribution. Ryan Phelan (Managing Director of RPEOrigin and Chairman Emeritus of the Email Experience Council) has long argued that email attribution should focus on incrementality. Control groups, where you randomly withhold emails from a subset of subscribers and compare their behaviour to the emailed group, reveal the true incremental value of email.

How to run a control group test: before your next campaign, randomly select 5-10% of your target segment and exclude them from the send. After 7 days, compare the purchase rate and revenue of the emailed group versus the holdout group. The difference is the true incremental value of that email. Most brands are surprised by the results. The incremental lift from email is usually positive (proving email works) but smaller than their ESP's attribution dashboard suggests (proving the attribution is inflated). Both pieces of information are useful for making better decisions about investment and strategy.

### Tags vs Segments vs Lists

This is one of the most common points of confusion for beginners, and getting it wrong costs money.

**Lists** are static groups of subscribers. In most modern ESPs, you should have one master list and use tags and segments to organise within it. Multiple separate lists create duplicate subscribers (you end up paying for the same person twice), inconsistent data, and missed automations. There are exceptions, for instance some brands maintain separate lists for fundamentally different audiences like customers vs partners. But for most businesses, one list is the right approach.

**Tags** are labels you apply to individual subscribers. Think of them as sticky notes. 'Purchased-product-A', 'attended-webinar-2024', 'VIP', 'interested-in-sustainability'. Tags are applied manually or through automation. They describe attributes and facts about a person.

**Segments** are dynamic groups based on rules and conditions. 'Everyone tagged VIP who clicked an email in the last 30 days' is a segment. Segments update automatically as people meet or stop meeting the criteria. Someone who was in your 'engaged' segment last month but hasn't clicked in 45 days automatically falls out.

The rule of thumb: use tags to store information about a subscriber, use segments to target sends.

Start with these segments at minimum, even if your list is small:

- New subscribers (joined in the last 30 days)
- Engaged subscribers (clicked in the last 30-60 days)
- Customers vs non-customers
- Lapsed (no engagement in 90+ days)

Even just separating 'has purchased' from 'hasn't purchased' and sending different content to each group will meaningfully improve your results.

Here's a practical example. Say you run an online skincare brand. A non-customer who signed up via your blog popup needs education: what makes your products different, how your formulations work, who they're designed for. A customer who bought your moisturiser two weeks ago needs care instructions, a complementary product suggestion (your serum), and eventually a replenishment reminder. Sending the same 'New Arrivals' blast to both groups ignores everything you know about them. The non-customer might convert on a bestseller recommendation. The customer might convert on a 'people who bought your moisturiser also love this serum' recommendation. Same brand, same product line, fundamentally different emails.

### Gmail Tabs: Primary vs Promotions

This comes up constantly in every email marketing forum I've seen. Marketers believe landing in the Promotions tab equals failure. The reality is more nuanced.

Gmail categorises emails into Primary, Promotions, Social, Updates, and Forums tabs. Marketing emails overwhelmingly land in Promotions. This is not spam. Gmail is categorising you correctly as a commercial sender, which is actually a sign of good deliverability. The Promotions tab is where legitimate marketing belongs.

Several marketers have shared test results showing that Promotions tab emails actually had higher conversion rates than Primary tab emails, because people checking Promotions are in a buying mindset. The total opens are lower, but the intent is higher.

That said, if you want to increase your chances of landing in Primary:

- **Reply engagement is the strongest signal.** Ask subscribers to reply to your emails, especially early ones. When someone replies, Gmail learns this is a wanted sender. future emails are more likely to land in Primary for that user.
- **Ask new subscribers to drag your email to Primary.** Include this instruction in your welcome email. Some brands also ask subscribers to star their first email or add the sender to contacts.
- **Text-only or text-heavy emails** are more likely to hit Primary than heavily designed HTML emails with lots of images. Gmail's classifier uses content patterns to categorise, and HTML-heavy emails with tracking pixels scream 'marketing'.
- **Send from a personal name.** 'George from Acme' is more likely to hit Primary than 'Acme Marketing Team'.

But honestly? Don't obsess over this. Build great content, encourage replies, and focus on metrics that matter. Many highly successful ecommerce brands operate entirely from the Promotions tab and generate millions in email revenue. The Promotions tab panic is, in my experience, one of the biggest wastes of energy in email marketing.

One thing that is worth tracking: if you notice a sudden shift in tab placement across many subscribers simultaneously, that's usually a signal of a broader reputation change, not a tab algorithm update. Check Google Postmaster Tools (it's free) to see if your domain reputation has shifted from High to Medium or Low.

### How Email Clients and Providers Think About You

Understanding how Gmail, Yahoo, Outlook, and Apple Mail evaluate your emails helps you make better decisions about everything from list management to content design.

Inbox providers look at three main categories of signals:

**Sender reputation signals.** Your domain reputation, IP reputation, authentication status (SPF, DKIM, DMARC), complaint history, and bounce history. These are the foundational signals. No amount of content optimisation overcomes a poor sender reputation.

**Engagement signals.** Do people open your emails? Click links? Reply? Forward to friends? Move you out of spam? Or do they delete without opening? Mark as spam? Ignore you consistently? These behavioural signals are increasingly important. Gmail in particular uses individual recipient engagement to make placement decisions. If one subscriber always opens your emails, they'll see you in a better placement than a subscriber who never does. This is why sending to unengaged subscribers actively hurts your placement with engaged ones. The unengaged responses pull down your aggregate reputation score.

**Content signals.** The actual content of your email: text-to-image ratio, link quality (are you linking to known spammy domains?), presence of known spam phrases, and HTML quality. Content signals matter less than reputation and engagement, but they can tip a borderline decision one way or the other. The community consensus from experienced deliverability professionals is that modern spam filters barely look at content anymore. The old advice about avoiding the word 'free' in subject lines is outdated. What matters is whether you're sending to people who want your email, from properly authenticated infrastructure, with a clean sending history.

The practical implication: focus your efforts in that order. Fix authentication first. Clean your list second. Improve your content third. Most deliverability problems are list quality problems in disguise, as Troy Ericson (founder of EmailDeliverability.com, known as "The Email Paramedic") consistently emphasises.

### Common Mistakes That Kill Campaigns

I've watched these mistakes play out across thousands of brands. They're predictable, preventable, and expensive.

**Buying email lists.** Just don't. Purchased lists have terrible engagement, high bounce rates (20-40% vs under 2% for organic lists), and will destroy your sender reputation. They're also full of spam traps. I've seen agencies spend 3-6 months rehabilitating clients who purchased lists. New domain, new IP, rebuilt list from scratch. The shortcut ends up being the longest path.

**Sending to everyone all the time.** Segmented campaigns generate 780% more revenue than non-segmented ones. Blasting your entire list with every email is the fastest way to train inbox providers that you're irrelevant. Yet it's still the default behaviour for most brands. The community consensus from forums and practitioners is clear: most brands send too few emails to their engaged subscribers and too many emails to their unengaged ones.

**Ignoring mobile.** If your email looks broken on a phone, 52% of people won't engage with it. Some will delete it within 3 seconds. Over 60% of emails are opened on mobile devices. Design for mobile first, then adapt for desktop.

**No authentication.** Without SPF, DKIM, and DMARC, you're essentially sending emails without an ID. The average global inbox placement rate is only 84.8%, meaning roughly 15% of all marketing emails never reach the inbox. Proper authentication can lift delivery rates by 5-10%.

**Treating email as a broadcast channel.** Email works best as a conversation. 'George from Acme' gets 5-15% higher open rates than 'Acme' alone. Use a real name, allow replies, and write like you're talking to one person. Joanna Wiebe (founder of Copyhackers, who coined the term 'conversion copywriting') teaches that before writing any email, you should have a specific person in mind. The email should read like a message written for that one person.

Too many brands plan their email calendar around 'what do we want to say this week?' when the question should be 'what does this subscriber need to hear right now?' Kath Pay (founder of Holistic Email Marketing, 26+ years in the industry) has shared case studies where brands shifting from broadcast to lifecycle-triggered emails saw 20-40% lifts in email-attributed revenue without sending more emails.

**Not testing.** Only one in seven A/B tests produces a statistically significant winner. That means six out of seven are inconclusive. Don't let that discourage you. The ones that do win compound over every future send. The incremental cost of testing is almost zero, but most brands still don't do it. Chapter 8 covers the testing framework.

**Sending cold emails from your marketing domain.** This deserves its own callout because it's devastatingly common and devastatingly destructive. Cold outreach and email marketing require completely separate infrastructure. Different domains, different IPs, different ESPs. If you send cold emails from your main domain using your marketing ESP, two things can happen: your ESP bans your account (most ESPs prohibit cold email in their terms of service), and your domain gets blacklisted, killing deliverability for all your marketing emails too. Chapter 14 covers cold email infrastructure properly. For now, just know: never mix the two.

**Obsessing over vanity metrics.** List size is a vanity metric. Open rates (post-MPP) are partially vanity. Total emails sent is vanity. The metrics that matter are click-through rate, conversion rate, revenue per recipient, and spam complaint rate. I've seen brands with 5,000 subscribers outperform brands with 50,000 subscribers because the smaller list was engaged and well-segmented. Focus on quality metrics, not quantity metrics.

**Choosing a platform for months instead of sending emails.** This shows up constantly in community forums. Someone asks which ESP to use, gets seventeen different answers, spends three months evaluating platforms, and hasn't sent a single email. Just start sending. A Mailchimp user with five automated flows will outperform a Klaviyo user sending only campaigns. You can always migrate later. You can't get back the months you spent not building subscriber relationships.

**Neglecting the 'from' name.** Forty-five percent of email recipients open emails based on who they think it's from. That's nearly as many as the 64% who open based on the subject line. Yet most brands set their 'from' name once and never think about it again. Test your 'from' name. 'George from Acme' typically outperforms 'Acme' by 5-15% in open rates. Use a real person's name, not a department. And stay consistent. Changing your 'from' name confuses subscribers and can trigger spam filters.

---

