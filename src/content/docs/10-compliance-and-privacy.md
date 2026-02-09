---
title: "Compliance and Privacy"
description: "CAN-SPAM, GDPR, CASL, and global email regulations. What you need to know to stay compliant."
sidebar:
  order: 10
  label: "10. Compliance & Privacy"
---

Email compliance is one of those topics people ignore until it costs them money. And it can cost a lot of money.

The regulatory environment for email marketing varies dramatically by country. What's perfectly legal in the US would draw massive fines in Canada or Australia. If you're sending internationally, which most businesses are, you need to understand the rules in every jurisdiction where your subscribers live.

This isn't just about avoiding fines, either. Compliance builds trust. And in an era when consumers are more privacy-aware than ever, trust translates directly into engagement and revenue.

This chapter covers the major regulations, the practical steps to stay compliant, and the emerging technical requirements that affect every sender.

### GDPR (EU)

The General Data Protection Regulation remains the strictest and most influential email privacy law globally. If you have EU subscribers, GDPR applies to you, regardless of where your business is based.

Consent under GDPR must be freely given, specific, informed, and unambiguous. That's a high bar. Pre-checked boxes don't count. Bundled consent ('sign up and agree to marketing') doesn't count unless the marketing consent is separate from the service signup. Silence doesn't count. Inactivity doesn't count.

You need to tell people exactly what they're signing up for. 'Subscribe to our newsletter' is acceptable. 'By creating an account you agree to receive promotional communications' buried in paragraph 47 of your terms of service is not.

The right to be forgotten means you must delete someone's data 'without undue delay' when they request it. In practice, that means within 30 days. This includes all personal data across all your systems, not just your ESP. CRM data, purchase history tied to their email, analytics data, everything. Build a documented process for handling these requests before you receive one, because you will receive them.

Data protection by design and default means you should build your systems with privacy in mind from the start, not bolt it on afterward. Collect only what you need. Store it securely. Delete it when it's no longer necessary.

For consent records, maintain documentation for 3-7 years after your last send to that subscriber. Record when they consented, how they consented, what they consented to, and what information was presented to them at the time. If a regulator asks, you need to prove consent was valid. Screenshots of your signup forms at the time of consent, timestamped and archived, are your best defence.

Refresh consent every 2 years. Send a re-permission campaign to subscribers you haven't heard from in 24 months. Those who re-confirm are genuinely interested. Those who don't should be removed. it's better to have a smaller, compliant list than a large, legally questionable one.

GDPR fines can reach 4% of annual global turnover or EUR 20 million, whichever is higher. Major fines have been issued across industries. This isn't theoretical risk.

### CAN-SPAM (US)

CAN-SPAM is the most permissive major email regulation. It's also the most misunderstood.

The key rules are straightforward. Don't use misleading headers, from names, or subject lines. Your 'From' name should accurately represent who's sending the email. Your subject line shouldn't be deceptive about the email's content. 'Re: Your order' when there was no order is a violation.

Every commercial email must include a physical mailing address. A PO Box or virtual office address is acceptable. You don't need to publish your home address. Services like Earth Class Mail or iPostal1 offer virtual business addresses that satisfy this requirement for under $15 per month.

You must honour opt-out requests within 10 business days. Your unsubscribe mechanism must continue to work for at least 30 days after the email is sent. Don't make people log in to unsubscribe. Don't charge a fee. Don't require them to provide any information beyond their email address. Don't make them click through five pages to complete the process.

Here's the part most people get wrong: CAN-SPAM technically allows you to email anyone who hasn't opted out. You don't need prior consent. But 'legally allowed' and 'good idea' are different things. Emailing people who haven't asked to hear from you destroys your sender reputation, generates complaints, and tanks deliverability. Just because you can doesn't mean you should.

Violations carry penalties of up to $51,744 per email. That's per individual email, not per campaign. A campaign to 10,000 people could theoretically result in over $500 million in fines. It rarely reaches that level, but the FTC has pursued cases resulting in millions in penalties.

Washington state has an additional layer: $500 per recipient for misleading subject lines. If you're emailing Washington residents (and you probably are), your subject lines need to be accurate.

### CASL (Canada)

Canada's Anti-Spam Legislation is significantly stricter than CAN-SPAM. If you have Canadian subscribers, pay close attention.

CASL requires either express or implied consent before sending commercial electronic messages. Express consent means someone actively agreed to receive your emails. Implied consent is narrower than it sounds.

Implied consent exists in two situations. First, if you have an existing business relationship (someone purchased from you, entered a contract, or made an inquiry), you can email them. But implied consent from a purchase expires 2 years after the transaction. Implied consent from an inquiry expires 6 months after the inquiry. After those windows close, you need express consent or you stop sending.

This means you need a system to track consent expiry dates. If someone purchased from you on March 15, 2024, your implied consent expires on March 15, 2026. You should be running a consent renewal campaign well before that date, converting implied consent to express consent while you still have the right to email them.

The penalties are severe. Up to $10 million CAD per violation for businesses. CASL also includes a private right of action, meaning individuals can sue you directly. The practical impact is that companies with significant Canadian audiences often default to express opt-in for all Canadian contacts, because the risk of getting implied consent wrong is too high.

### CCPA (California)

The California Consumer Privacy Act isn't an email-specific law, but it affects email marketers who hold data on California residents.

You must provide a notice at collection that lists the categories of personal information you collect and the purposes for collection. This applies to your signup forms and privacy policy.

California residents have the right to know what personal information you've collected, the right to delete it, and the right to opt out of the sale of their personal information. If you sell or share subscriber data with third parties (for advertising, data enrichment, or list rental), you need a 'Do Not Sell My Personal Information' mechanism.

Penalties are $2,500 per unintentional violation and $7,500 per intentional violation. The California Attorney General and the California Privacy Protection Agency both have enforcement authority.

The CPRA (California Privacy Rights Act) expanded on CCPA, adding the right to correct inaccurate information and creating a new category of 'sensitive personal information' with additional protections. If you collect precise geolocation, racial or ethnic origin, health data, or similar sensitive categories in your email marketing (through surveys, preference centres, or purchase data), CPRA's additional requirements apply.

### Australian Spam Act

Given that I'm writing this from an Australian perspective, this one deserves particular attention.

The Spam Act 2003 requires three things for every commercial electronic message: consent, sender identification, and a functional unsubscribe.

Consent can be express (someone opted in) or inferred (there's an existing business relationship). But unlike CAN-SPAM, you cannot email someone who hasn't opted in or who doesn't have an existing relationship with your business. Cold email to purchased lists is illegal in Australia. Full stop.

Every commercial email must clearly identify who sent it and include accurate contact details. And every email must include an unsubscribe mechanism that works and is honoured within 5 business days.

The penalties are substantial. The Australian Communications and Media Authority (ACMA) can impose fines of up to $2.22 million AUD per day for serious breaches. They've pursued cases against both Australian businesses and international companies sending to Australian recipients. ACMA has been increasingly active in enforcement, and they coordinate with international regulators.

For Australian businesses sending internationally, you still need to comply with the Spam Act for all messages sent from Australia, regardless of where the recipient is located. And if you're an international business sending to Australian recipients, the Spam Act applies to you.

### Cold Email Compliance

Cold email compliance is a patchwork of different rules depending on where your recipients are. Get this wrong and you're exposed to significant legal risk.

**United States (CAN-SPAM):** The most permissive jurisdiction for B2B cold email. No prior consent is needed. You must include a clear opt-out mechanism, your physical address, and accurate sender information. This is why most cold email tools and strategies originate from US-based companies. The US is the only major market where B2B cold email is explicitly legal without prior consent.

**United Kingdom (PECR):** B2B cold email is permitted under the 'soft opt-in' principle. You can email someone at their business address if the message is relevant to their professional role. You must include a clear opt-out in every message. B2C cold email requires prior consent. Post-Brexit, the UK has its own data protection regime (UK GDPR) which mirrors EU GDPR closely but is enforced by the ICO.

**European Union (ePrivacy Directive):** This varies by country because each EU member state implemented the directive differently. Germany is the strictest, requiring opt-in consent for virtually all commercial email including B2B. France, Italy, and the Netherlands are more permissive for B2B under legitimate interest provisions. Most EU countries allow B2B cold email with a clear opt-out and a legitimate business reason. The upcoming ePrivacy Regulation (which has been in development for years) may harmonise these rules across the EU.

**Canada (CASL):** Consent is required. You can use implied consent from an existing business relationship, but cold outreach to people you've never interacted with requires express consent first. Some practitioners argue that a published business email creates implied consent, but this hasn't been clearly tested in enforcement. I wouldn't rely on that argument.

**Australia (Spam Act):** Consent is required. No cold email without a prior relationship. This is the most restrictive major jurisdiction for cold outreach.

The practical takeaway: maintain separate lists by jurisdiction. Tag every subscriber with their country. Apply the rules of their jurisdiction, not yours. When in doubt, apply the stricter standard. Tools like Instantly, Lemlist, and Apollo let you filter prospects by country, which makes jurisdiction-based compliance manageable at scale.

### Practical Consent Management

Theory is one thing. Implementing compliant consent collection at scale is another.

Double opt-in remains the gold standard. Someone signs up, receives a confirmation email, and clicks a link to verify their subscription. This gives you clear, documented proof of consent and eliminates fake signups, typos, and spam traps. Yes, you'll lose 15-20% of signups who don't confirm. Those people weren't going to be engaged subscribers anyway.

Personalised consent emails see roughly 15% more opt-ins than generic ones. Including the subscriber's name, referencing what they signed up for, and explaining what they'll receive makes people more likely to click that confirmation button.

Recurring consent reminders increase consent rates by 25%. If someone hasn't confirmed after 24 hours, send a reminder. If they haven't confirmed after 72 hours, send one more. After that, let it go. Three attempts is the sweet spot. More than that starts to feel aggressive.

For organisations managing consent across multiple jurisdictions and product lines, a consent management platform (CMP) is worth the investment. Tools like OneTrust, Cookiebot, or TrustArc automate consent collection, maintain audit trails, and handle the complexity of different regulations in different markets.

Ann Handley makes the point that respecting audience data isn't just a legal obligation, it's a competitive advantage. In a world where consumers are increasingly aware of how their data is used, the brands that treat data with care earn trust. Trust earns attention. Attention earns revenue.

### One-Click Unsubscribe (RFC 8058)

This is the most significant technical compliance change in recent years.

Google and Yahoo now require List-Unsubscribe headers for bulk senders (anyone sending more than 5,000 emails per day to Gmail or Yahoo addresses). This isn't optional. If you don't include the proper headers, your emails will be increasingly filtered to spam or rejected entirely.

RFC 8058 specifies how one-click unsubscribe works. The email includes two headers: `List-Unsubscribe` (containing an HTTPS URL and/or mailto address) and `List-Unsubscribe-Post` (containing `List-Unsubscribe=One-Click`). When a recipient clicks unsubscribe in their email client, a single POST request is sent to the URL. No landing page required. No extra steps. No 'are you sure?' confirmations.

You must honour the unsubscribe within 2 days. Not 10 business days like CAN-SPAM's general requirement. Two days for one-click unsubscribe.

The good news is that most ESPs now handle this automatically. Klaviyo, Mailchimp, ActiveCampaign, Brevo, and others include the correct headers by default. If you're using a custom sending infrastructure, you'll need to implement the headers yourself. The implementation is straightforward but needs to be tested thoroughly.

If you're not sure whether your emails include the right headers, check. Send yourself a test email, view the raw message source, and look for `List-Unsubscribe` and `List-Unsubscribe-Post` headers. If they're missing, talk to your ESP or your development team.

One important nuance: the one-click unsubscribe should unsubscribe from the specific mailing list, not necessarily from all your communications. If someone unsubscribes from your promotional emails via one-click, they should still receive their transactional emails (order confirmations, receipts, shipping updates). Configure your unsubscribe endpoint to handle this distinction properly.

### Privacy and Data Handling

Beyond compliance with specific regulations, there's a broader principle: collect only what you need and protect what you collect.

Data minimisation isn't just a GDPR requirement. it's good practice. Every piece of data you collect is a piece of data you need to store securely, maintain accurately, and delete when appropriate. If you're collecting a subscriber's date of birth, gender, location, and company size, ask yourself whether you actually use all of that data in your email personalisation. If the answer is no, stop collecting it. Every field on your signup form reduces conversion rate, and every unused data point increases your liability.

Cookie consent interacts with email tracking in ways most marketers don't consider. When a subscriber clicks through your email to your website, your site drops cookies for analytics and retargeting. If that subscriber is in the EU and hasn't consented to cookies on your site, you might be compliant on the email side but non-compliant on the web side. Make sure your cookie consent banner handles email click-through traffic properly.

Apple's Mail Privacy Protection (MPP) has fundamentally changed open tracking. MPP pre-fetches email content (including tracking pixels) when the email is delivered, regardless of whether the recipient actually opens it. For Apple Mail users, your open rates are artificially inflated. Depending on your audience, 40-60% of your list might be Apple Mail users.

This doesn't mean open rates are useless. It means they're less reliable than they were. Use click-through rate and conversion rate as your primary engagement metrics. Use open rate as a directional indicator, not a precise measurement. If your open rate drops 15 points overnight, something is probably wrong. But don't optimise for small open rate variations when a large portion of those opens are machine-generated.

The privacy trend is moving in one direction: more protection, less tracking. The EU's ePrivacy Regulation, when it finally arrives, will likely tighten rules further. Other jurisdictions are following Europe's lead. Build your email programme around first-party data (what subscribers tell you and what they do on your properties) rather than third-party tracking. The programmes that adapt to this reality will outperform those that fight it.

---

