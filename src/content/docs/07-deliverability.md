---
title: "Deliverability"
description: "SPF, DKIM, DMARC, IP warming, sender reputation, and everything you need to land in the inbox instead of spam."
sidebar:
  order: 7
  label: "7. Deliverability"
---

You can write the most compelling email in the world, segment your list perfectly, and design a flawless template. None of it matters if your email lands in spam.

Deliverability is the foundation that everything else sits on. And in 2026, it's more complex, more engagement-driven, and more consequential than ever before. This chapter is the most detailed in the book because deliverability problems are the silent killer of email programmes. You often don't know you have a problem until revenue has already dropped.

### Authentication: The Non-Negotiable Setup

Email authentication is table stakes. Without proper authentication, inbox providers have no way to verify that you are who you claim to be, and they will treat your emails accordingly.

There are three core authentication protocols. All three are required.

**SPF: Sender Policy Framework**

SPF tells receiving mail servers which servers are authorised to send email on behalf of your domain. It works by publishing a DNS TXT record that lists your authorised sending IPs and includes statements for your ESP.

The critical technical detail most people miss: **SPF has a 10 DNS lookup limit.** Every `include:` statement counts as a lookup, and each of those includes can contain nested lookups of their own. If you're using multiple ESPs (your marketing platform, your transactional email service, your CRM, your helpdesk), you can easily exceed this limit. When you do, SPF fails entirely.

Use `ip4:` directives for your own dedicated sending IPs and `include:` for ESP authorisation. For example: `v=spf1 ip4:192.0.2.1 include:_spf.google.com include:sendgrid.net -all`

**Always end your SPF record with `-all` (hard fail), not `~all` (soft fail).** Hard fail tells receiving servers to reject email from unauthorised sources. Soft fail suggests they mark it as suspicious but still deliver it. With DMARC in place (covered below), hard fail is the correct choice.

**SPF flattening** is a technique for complex setups where you're hitting the 10-lookup limit. It resolves all the include statements into their underlying IP addresses and lists them directly in your SPF record. Tools like AutoSPF and SPF Wizard can automate this, but be aware that the flattened record needs updating whenever your ESPs change their sending IPs.

**DKIM: DomainKeys Identified Mail**

DKIM adds a digital signature to every email you send. The receiving server checks this signature against a public key published in your DNS. If the signature matches, the email hasn't been tampered with in transit.

The current standard is **2048-bit RSA keys.** Some older setups still use 1024-bit, which is increasingly insufficient. Rotate your DKIM keys annually. This limits the exposure window if a key is somehow compromised.

The `d=` signing domain must align with your From address domain for DMARC to pass. If your From address is hello@yourbrand.com, your DKIM signature should use d=yourbrand.com (or a subdomain of it, under relaxed alignment).

Use `c=relaxed/relaxed` for your canonicalisation settings. This allows minor, harmless modifications during mail transport (like whitespace changes) without breaking the signature.

**DMARC: Domain-based Message Authentication, Reporting, and Conformance**

DMARC ties SPF and DKIM together and tells receiving servers what to do when authentication fails. It's the policy layer.

Only 34% of the largest 5,000 companies have implemented DMARC. Of those that have, 75 to 80% face challenges achieving enforcement (p=quarantine or p=reject). This means the majority of large organisations either lack DMARC entirely or have it set to monitoring mode with no enforcement.

**Implement DMARC in stages:**

Start with `p=none` (monitoring only). This sends you reports about authentication failures without affecting delivery. Leave it in monitoring mode for at least 2 to 4 weeks, analysing the reports to identify any legitimate sending sources that aren't properly authenticated.

Move to `p=quarantine` (failed emails go to spam). This is your first enforcement step. Monitor for any unexpected quarantining of legitimate emails.

Finally, move to `p=reject` (failed emails are outright rejected). This is full enforcement and your end goal.

**DMARC alignment can be relaxed or strict.** Relaxed alignment requires that the organisational domain matches. So mail.yourbrand.com and yourbrand.com would both pass. Strict alignment requires an exact domain match. Most setups need relaxed alignment for multi-ESP compatibility, and that's where you should start unless you have a specific reason for strict alignment.

Matthew Vernhout has been one of the strongest advocates for DMARC adoption, and his guidance on phased implementation is worth following.

**BIMI: Brand Indicators for Message Identification**

BIMI is the newest authentication standard, and it's the one your marketing team will actually get excited about. BIMI displays your brand logo directly in the inbox next to your sender name. It's visual brand recognition at the point of open.

Requirements: BIMI requires DMARC enforcement (p=quarantine or p=reject), so you can't shortcut to it. You'll also need a Verified Mark Certificate (VMC), which costs roughly $1,500 per year from DigiCert or Entrust.

BIMI is currently supported by Gmail, Yahoo, and Apple Mail, which covers a substantial portion of consumer inboxes. The DNS record format is: `default._bimi.yourdomain.com` with a TXT record pointing to your logo SVG and VMC certificate.

Implement BIMI once you have DMARC at enforcement. The investment is relatively small for the brand recognition benefit, especially for consumer-facing brands competing in crowded inboxes.

**ARC: Authenticated Received Chain**

ARC preserves authentication results when emails pass through intermediary servers, like mailing lists or forwarding services. Without ARC, forwarded emails often fail DMARC because the intermediary server isn't in the original sender's SPF record.

ARC is handled at the mail server level and isn't something most marketers need to configure directly. But if you're seeing DMARC failures from forwarded emails, ARC support on your sending infrastructure is the solution.

**MTA-STS: MTA Strict Transport Security**

MTA-STS forces TLS encryption for email in transit, preventing downgrade attacks where a bad actor forces an unencrypted connection to intercept email content. Implementation requires a DNS record and a hosted policy file. It's a security enhancement worth implementing, particularly if you send sensitive information via email (order confirmations, account details, financial data).

**The authentication implementation sequence matters.** If you're setting up authentication from scratch, follow this order: SPF first (it's the simplest, one DNS record), then DKIM (slightly more complex, your ESP will provide the records), then DMARC at p=none (start monitoring), then advance DMARC to enforcement over 4 to 8 weeks. BIMI comes last, only after DMARC is at p=quarantine or p=reject.

**For multi-ESP setups, authentication gets complicated fast.** If you're using Klaviyo for marketing, SendGrid for transactional, Intercom for product emails, and Google Workspace for internal email, all four need to be covered by your SPF record and all four need DKIM configured with proper domain alignment. This is where the SPF 10-lookup limit becomes a real problem, and where SPF flattening or restructuring your setup becomes necessary.

Audit your full authentication setup quarterly. ESPs change their sending infrastructure, domains expire, and new sending sources get added without updating DNS. A quick check of your SPF, DKIM, and DMARC records takes 15 minutes and can prevent deliverability problems before they start. Use dmarcian.com or postmarkapp.com/dmarc for easy DMARC monitoring and reporting.

### Sender Reputation

Your sender reputation determines whether inbox providers trust you enough to put your emails in the inbox. In 2026, the rules have shifted.

**Domain reputation now matters more than IP reputation for Gmail.** Google retired its legacy IP/Domain Reputation dashboards in September 2025, replacing them with Compliance Status and Spam Rate dashboards. This signals a broader move toward domain-level evaluation. Your domain's reputation follows you regardless of which IPs you send from.

Gmail uses approximately a 120-day reputation window. That means a serious reputation hit takes up to 4 months to fully recover from. Prevention is far less painful than cure.

**Key metrics inbox providers track:**

Bounce rates should stay below 1%. Spam complaints should stay below 0.1% (that's 1 complaint per 1,000 emails). Engagement rates (opens, clicks, replies) factor heavily into Gmail's filtering decisions. Sending patterns matter. A sudden spike from 10,000 to 100,000 emails looks like a spammer who just bought a list. Ramp up gradually.

**Use a dedicated IP when sending over 1 million emails per month.** Below that volume, shared IPs from reputable ESPs are fine and often preferable, because the ESP's overall reputation benefits your sending. Above that volume, a dedicated IP gives you full control over (and full responsibility for) your reputation.

**Troy Ericson's "Email Paramedic" approach** to reputation recovery follows a clear sequence: fix authentication first, then clean the list, then rebuild engagement with the healthiest segments. Trying to fix engagement before authentication is like mopping the floor while the pipe is still leaking.

**List hygiene and its effect on reputation:** Remove hard bounces immediately (your ESP should do this automatically). Suppress or remove subscribers who haven't engaged in 12 months. Run your list through a verification service (ZeroBounce, NeverBounce, BriteVerify) at least twice a year to catch addresses that have become invalid, converted to spam traps, or been recycled. Pristine spam traps (addresses that were never used by a real person, planted by ISPs to catch spammers) are the most damaging. They signal that you're using a purchased or scraped list. Recycled spam traps (old valid addresses that were abandoned and then repurposed) are less damaging individually but signal that you're not maintaining list hygiene.

**Engagement-based suppression is the most underused reputation tool.** Most marketers know they should remove hard bounces. Fewer realise that continuing to send to genuinely disengaged subscribers is actively harming their reputation. If someone hasn't opened or clicked any of your emails in 6 months, they're hurting your engagement rates, which hurts your Gmail reputation, which hurts your inbox placement for everyone. I'd suggest a quarterly review where you either re-engage or suppress subscribers who've been inactive for 120+ days.

### Inbox Placement vs Delivery Rate

These are two different metrics, and confusing them is a common and costly mistake.

**Delivery rate** measures the percentage of emails accepted by the receiving mail server. A 95%+ delivery rate is good. But "accepted by the server" doesn't mean "placed in the inbox." It means the server didn't outright reject it.

**Inbox placement rate** measures the percentage of delivered emails that actually land in the inbox rather than spam, junk, or the Promotions tab. An inbox placement rate of 85 to 94% is considered good.

You can have a 98% delivery rate and a 50% inbox placement rate. In that scenario, half your emails are technically "delivered" but sitting in spam where no one will ever see them.

Monitor both. Your ESP reports delivery rate. For inbox placement, you need tools like GlockApps, Validity's Everest, or seed testing via mail-tester.com.

**The Promotions tab factor.** For Gmail users, the Promotions tab is a grey area between inbox and spam. Your email is technically "delivered to the inbox," but it's in a tab most users check less frequently (or never). Whether you count Promotions tab placement as successful inbox placement depends on your business. For ecommerce brands, the Promotions tab can actually work in your favour since users browse it when they're in a shopping mindset. For B2B and relationship-driven businesses, Primary tab placement matters significantly more. Google's filtering is based heavily on engagement patterns, so consistently high engagement is your best path to the Primary tab.

### Gmail's Engagement-Based Filtering

Gmail's filtering system is the most sophisticated of any inbox provider, and understanding how it works is essential for any serious email marketer.

**Gmail seeds your initial send to a sample of recipients.** When you send a campaign, Gmail doesn't deliver all of your emails simultaneously. It sends a batch to a subset of recipients first and observes what happens.

**Gmail watches engagement signals on this initial batch.** Opens, clicks, replies, moving the email from Promotions to Primary, deleting without opening, and, most critically, marking as spam. Based on these engagement signals, Gmail makes filtering decisions for the remaining delivery.

**This is why sending to your most engaged subscribers first matters.** If your initial batch goes to disengaged subscribers who delete without opening or mark as spam, Gmail concludes that your email isn't wanted and filters the rest more aggressively. If your initial batch goes to engaged subscribers who open and click, Gmail concludes that your email is valuable and delivers the rest more favourably.

**Implement engagement-based tiering for your sends:**

Tier 1: Subscribers who clicked an email in the last 30 days. Send to this group first.
Tier 2: Subscribers who opened (but didn't click) in the last 30 days. Send 1 to 2 hours after Tier 1.
Tier 3: Subscribers who opened in the last 60 days. Send 2 to 3 hours after Tier 1.
Tier 4: Subscribers who opened in the last 90 days. Send 3 to 4 hours after Tier 1.
Tier 5: Subscribers with no engagement in 365+ days. Consider a dedicated re-engagement sequence rather than including in regular campaigns.

Not every ESP supports staggered sending by engagement tier. Klaviyo's Smart Sending and some enterprise platforms do. If yours doesn't, at minimum send campaigns only to subscribers who've engaged in the last 90 to 120 days and handle older subscribers separately.

### Warming Up Domains and IPs

When you set up a new sending domain or dedicated IP, inbox providers have no reputation data for it. you're starting from zero. Warming is the process of gradually building a positive reputation by starting small and scaling up.

**Start with your most engaged subscribers.** Your first sends should go to people who opened or clicked an email from you in the last 7 days. These subscribers are most likely to engage positively, sending the right signals to inbox providers.

**Follow a structured warming schedule:**

| Phase | Daily Volume |
|---|---|
| Days 1-3 | 50-100 |
| Days 4-7 | 200-500 |
| Week 2 | 500-1,000 |
| Week 3 | 1,000-5,000 |
| Week 4 | 5,000-10,000 |
| Week 5+ | Scale to full volume |

**Ramp up by 20 to 50% per day or week,** depending on how the warming is going. If you see bounce rates climb above 2% or spam complaints above 0.1%, slow down. If engagement is strong, push the pace.

**Monitor bounce rates, spam complaints, and inbox placement throughout the warming period.** Use Google Postmaster Tools (requires DNS verification and a minimum of 200 to 500 messages per day to generate data) to track your Gmail reputation specifically.

**Your welcome sequence is a natural warming mechanism.** New subscribers are highly engaged (they just signed up), so welcome emails naturally generate positive signals. If you're setting up a new domain, launching with a strong welcome flow and a growing list is an ideal way to warm organically.

**Common warming mistakes:**

Sending to your full list on day one. This is the most common and most damaging mistake. Inbox providers see a new domain suddenly sending 50,000 emails and immediately flag it.

Using a purchased or rented list for warming. The entire point of warming is to build positive engagement signals. Purchased lists have terrible engagement rates and often contain spam traps. You're poisoning your reputation from the start.

Ignoring negative signals during warming. If your bounce rate spikes on day 4, don't push ahead to the day 5 volume. Pause, investigate, clean, and restart. warming is not a rigid schedule. It's a feedback loop.

Warming only with transactional emails. Transactional emails (order confirmations, shipping notifications) get high engagement, which makes them tempting for warming. But inbox providers treat transactional and marketing emails differently. Warm with the type of email you'll actually be sending at scale.

**Warming a new IP vs warming a new domain:** The process is similar, but domain warming is more forgiving because domain reputation is shared across IPs. If you're moving ESPs (and therefore IPs) but keeping your domain, your existing domain reputation carries over. You'll still want to ramp up gradually, but the warming period is typically shorter because you're not starting from zero.

### Dealing with Spam Filters

In 2026, content-based spam filtering is far less important than reputation-based filtering. Modern spam filters use machine learning models that consider the full picture: sender reputation, recipient engagement history, message fingerprint similarity to known spam, and overall sending patterns.

That said, content still matters at the margins, and there are specific triggers you should be aware of.

**High-impact content triggers:**

URL reputation is the single most important content factor. If your email contains a link to a domain that's been associated with spam, phishing, or malware, your email is going to have problems regardless of your sender reputation. Audit every link in your emails.

URL shorteners (bit.ly, tinyurl, etc.) are penalised because spammers use them to hide malicious destinations. Always use full, direct URLs. If you need tracking, use your ESP's built-in link tracking, which uses your own domain.

Image-only emails (no text, just images) are flagged because they're a classic spam tactic to evade text-based content filters. Always include a meaningful amount of text alongside your images.

Mismatched link text and URLs (where the visible text says one URL but the link goes somewhere else) are a phishing indicator. If your link text says "www.yoursite.com" but the href goes to a tracking redirect, some filters will flag it. Use descriptive link text rather than raw URLs.

**Medium-impact triggers:**

All caps, excessive punctuation (!!!), and spam-associated phrases (when combined with poor reputation) can contribute to filtering. These matter most for senders who already have borderline reputation.

**Low-impact triggers (commonly overstated):**

Individual 'spam words' like "free," "discount," or "limited time" have negligible impact when you have good sender reputation. This is one of the most persistent myths in email marketing. In the early days of spam filtering, keyword-based filters were common and these words did matter. Modern ML-based filters are far more sophisticated. A well-reputed sender using the word "free" in a relevant context will not be filtered for it.

**The List-Unsubscribe header** is worth calling out specifically. Gmail and Yahoo both require a functioning List-Unsubscribe header (including one-click unsubscribe via List-Unsubscribe-Post) for bulk senders. This was part of the requirements both providers rolled out in early 2024 for senders of 5,000+ messages per day. If you're not including this header, your emails are at higher risk of filtering. Most major ESPs add this automatically, but verify it's present by checking your email headers.

**The text-to-image ratio myth deserves clarification.** You'll find old advice saying you need a 60:40 or 80:20 text-to-image ratio. There's no specific ratio that spam filters enforce. What matters is that your email contains meaningful text content. An email that's 100% images with no text is a problem. An email that's 70% images with well-written text in between is usually fine, provided your reputation is healthy.

### Sending Identity and Infrastructure

How you structure your sending identity affects both deliverability and subscriber perception.

**Separate marketing from transactional email.** Use different subdomains: mail.yourbrand.com for marketing, transact.yourbrand.com for transactional (order confirmations, password resets, shipping notifications). This way, if your marketing reputation takes a hit, your critical transactional emails are insulated.

However, don't bother separating if you're sending fewer than 40,000 to 50,000 emails per month. At lower volumes, the operational overhead of managing two sending setups isn't justified by the marginal protection.

**From name has a significant impact on open rates.** Personal names get 3.81% more opens than brand names on average.

"George from SmartrMail" tends to outperform "SmartrMail" which tends to outperform "SmartrMail Team." The most effective format depends on context:

Personal name (just "George") works best for creator businesses, personal brands, and newsletters where the individual is the brand.

Brand name works best for established, widely recognisable brands where the individual behind the email doesn't matter to the subscriber.

"Person at Brand" format often works best for mid-size brands and SaaS, where subscribers benefit from both the personal connection and the brand context.

**Consistency in your From name matters more than which format you choose.** Don't change your From name constantly. Subscribers learn to recognise your sender name, and changing it means they have to re-learn who you are. Every change carries a risk of lower opens as subscribers fail to recognise you.

Testing your sender name is one of the highest-value tests you can run because the results compound across every email you send.

**Always set a monitored reply-to address.** Replies are positive engagement signals for inbox providers. When a subscriber replies to your email, it tells Gmail, Outlook, and others that there's a real human relationship here. no-reply@ addresses kill this signal entirely.

**Why no-reply@ is actively harmful:** It's a negative signal for ISP filtering algorithms. It eliminates reply engagement, one of your strongest deliverability signals. It frustrates customers who want to respond. And it violates the fundamental spirit of email as a two-way communication medium.

**Set up a branded sending domain instead of using your ESP's default.** When you send through your ESP's shared domain, you're sharing reputation with every other sender on that domain. You have no control over their practices, and their mistakes affect your deliverability. You also can't enforce DMARC on a domain you don't own, and your emails lack brand recognition in the sender details.

Set up a branded sending domain once your database exceeds 5,000 profiles. Below that, the shared domain is acceptable. Above it, the investment in a branded domain pays for itself in improved deliverability and brand recognition.

**The reply-to strategy in practice:** Set your reply-to to an email address that's actively monitored. This can be a shared inbox (support@yourbrand.com), a personal address (george@yourbrand.com), or a dedicated address (hello@yourbrand.com). The key is that someone reads and responds to replies. When subscribers hit reply and get a bounce-back or silence, you lose the engagement signal and the trust.

Some marketers go further and actively encourage replies. "Hit reply and tell me your biggest challenge with email marketing" in a welcome email serves double duty: it collects valuable customer insight and it generates positive engagement signals that improve your deliverability. I know several newsletter operators who attribute their consistently strong inbox placement partly to the volume of replies they receive.

**Subdomain strategy for larger organisations:**

For brands sending at significant scale (100,000+ per month), use a more detailed subdomain structure:

- mail.yourbrand.com for marketing campaigns
- news.yourbrand.com for newsletters
- transact.yourbrand.com for transactional emails
- auto.yourbrand.com for automated flows (welcome, abandoned cart)

each subdomain builds its own reputation, so a problem with your marketing campaigns doesn't bleed into your transactional or automated sending. This level of separation is overkill for most small and mid-size businesses, but essential for larger operations.

### Feedback Loops

Feedback loops (FBLs) are mechanisms that inbox providers use to notify you when a recipient marks your email as spam.

**Yahoo/AOL FBL** sends you ARF (Abuse Reporting Format) reports whenever a recipient clicks "Report Spam" on your email. Register for this at the Yahoo/AOL sender hub.

**Microsoft JMRP (Junk Mail Reporting Programme)** provides the same for Outlook.com, Hotmail, and other Microsoft consumer email addresses.

**Gmail does not offer a traditional FBL.** Instead, Gmail uses the Feedback-ID header (which your ESP typically sets automatically) combined with aggregate spam rate data in Google Postmaster Tools. You won't get individual complaint reports from Gmail, only aggregate percentages.

**The critical process: immediately suppress any email address that generates a spam complaint.** Don't wait. Don't send them one more email. Don't add them to a "re-engagement" sequence. Remove them from all future sends. Continuing to email someone who has reported you as spam is the fastest way to damage your reputation.

### ISP Throttling

When you send too much email too fast to a single inbox provider, they may throttle your delivery. Understanding the response codes is essential.

**4xx response codes are temporary rejections.** They mean "slow down, try again later." Common 4xx codes include 421 (too many connections), 450 (mailbox unavailable, try later), and 452 (too many recipients). The correct response is to implement exponential backoff: wait, then retry, doubling the wait time with each retry.

**5xx response codes are permanent rejections.** They mean "stop, this isn't going to work." Common 5xx codes include 550 (mailbox doesn't exist), 551 (user not local), 552 (message too large), and 553 (invalid address). The correct response is to remove the address or fix the underlying issue.

**Don't open more than 10 to 20 simultaneous connections to a single ISP.** Opening too many connections looks like a spam attack and will trigger throttling or blocking.

Most modern ESPs handle throttling automatically, adjusting sending speed based on ISP responses. But if you're managing your own mail infrastructure, or if you're troubleshooting deliverability issues, understanding these response codes matters.

**Common ISP-specific throttling patterns:**

Gmail tends to throttle with 421 errors during warming periods and will defer delivery for hours or even days if it detects a pattern it doesn't like. The fix is always the same: slow down and improve engagement quality.

Microsoft (Outlook.com, Hotmail) uses a tiered throttling system. You might send successfully to most recipients but see blocks for a subset. Microsoft also uses its own Smart Network Data Services portal where you can check your sending IP's reputation and apply for mitigation if you've been blocked.

Yahoo/AOL tend to be more aggressive about rate limiting during warming. They're also more sensitive to burst sending (sending a large volume in a very short window). Spread your sends over a longer period when targeting Yahoo/AOL-heavy segments.

### Domain Reputation Monitoring Tools

You can't fix what you can't see. Here are the tools worth using for monitoring your sending reputation.

**Google Postmaster Tools** is free and essential. It requires DNS verification to set up and needs a minimum of 200 to 500 messages per day to Gmail recipients to generate usable data. It shows your domain reputation status, spam rate, authentication success rates, and encryption percentage.

**Microsoft SNDS (Smart Network Data Services)** provides IP-level reputation data for Outlook.com and related Microsoft email properties. Less granular than Google Postmaster but important if you have significant Outlook audience.

**Cisco Talos Intelligence** checks your IP and domain reputation against Cisco's threat database. Cisco powers filtering for a large number of corporate email gateways.

**Barracuda Reputation System** shows your status on Barracuda's widely-used spam filter. Many businesses use Barracuda appliances or cloud services for email security.

**MXToolbox** checks your domain against over 100 blocklists simultaneously. It's the quickest way to identify if you've been listed on any major blocklist.

**Sender Score by Validity** assigns your sending IP a score from 0 to 100. Above 80 is good. Below 70 indicates problems. It's a useful at-a-glance metric, though it's IP-based rather than domain-based.

### Step-by-Step Deliverability Diagnosis Framework

When your emails stop reaching the inbox, work through this framework systematically. Skipping steps almost always leads to wasted effort.

**Step 1: Identify the symptom.** What exactly is happening? Lower inbox placement? Higher bounce rates? Throttling from specific providers? Is the problem affecting all inbox providers or just one (usually Gmail)?  Getting specific about the symptom directs your investigation.

**Step 2: Check authentication.** Are SPF, DKIM, and DMARC all passing? Check your recent DMARC reports. Verify with an authentication testing tool (mail-tester.com, MXToolbox). Also check your PTR (reverse DNS) record, which validates that your sending IP resolves back to your domain. Authentication failures are the most common and most easily fixable cause of deliverability problems.

**Step 3: Check blocklists.** Search your sending IPs and domain across major blocklists: Spamhaus (the most influential), Barracuda, SpamCop, and SURBL (which checks URLs within emails, not just sender IPs). If you're listed, you need to fix the root cause before requesting delisting.

**Step 4: Check reputation.** Use Google Postmaster Tools, Microsoft SNDS, Cisco Talos, and Sender Score to assess your current reputation. If reputation has dropped, identify when it started declining and correlate with your sending activity.

**Step 5: Analyse bounce logs.** Export your bounce data and categorise by type (hard bounce, soft bounce, block) and by ISP. Patterns will emerge. If all your bounces are from Gmail, that's a Gmail-specific problem. If they're across all providers, the issue is more fundamental.

**Step 6: Review sending patterns.** Did you recently spike volume? Send to an old, un-engaged segment? Change your email template significantly? Import a new list? Any of these can trigger filtering.

**Step 7: Check content.** Is there a bad URL in your emails? A link to a domain with poor reputation? URL shorteners? An image-only email? A missing List-Unsubscribe header? Content issues are less common than reputation issues in 2026, but they still matter at the margins.

**Step 8: Test and validate.** Use seed list testing (GlockApps, InboxReady) to measure actual inbox placement across providers. Use mail-tester.com to score your email and identify specific issues. These tools tell you where you're landing and why.

**Step 9: Remediate.** Fix the root cause before doing anything else. If you're on a blocklist because of a spam trap hit, clean your list before requesting delisting. If your reputation dropped because of a high-volume send to disengaged subscribers, restrict your sending to engaged subscribers before trying to rebuild.

**Step 10: Monitor recovery.** Reputation recovery takes time. Expect 2 to 4 weeks for noticeable improvement in most cases. Full Gmail reputation recovery can take up to 120 days due to their extended reputation window. Be patient, continue sending to engaged subscribers, and track your Postmaster Tools data weekly.

**When to call in a specialist.** If you've worked through this entire framework and your deliverability hasn't improved after 4 weeks, it may be time to engage a deliverability consultant. Specialists like Troy Ericson, Laura Atkins (Word to the Wise), and the teams at Validity and Kickbox have deep relationships with ISPs and can escalate issues that self-service approaches can't resolve. deliverability consulting typically runs $2,000 to $10,000 depending on the complexity of the issue, but the revenue impact of poor deliverability usually dwarfs that cost.

**Proactive deliverability monitoring should be part of your weekly routine.** Set aside 15 minutes every Monday to check: Google Postmaster Tools spam rate and compliance status, bounce rates from your last week of sends, any new blocklist appearances via MXToolbox, and your overall engagement trends (open rate, click rate, unsubscribe rate). Catching a problem in week one, before it becomes a crisis, is far easier than trying to recover after a month of declining reputation.

---

