---
title: "The Email Marketing Bible"
description: "A comprehensive, data-backed guide to email marketing by George Hartley. 908 sources. 4,798 insights. Everything that actually works."
sidebar:
  order: 0
  label: "Introduction"
---

# The Email Marketing Bible

*By George Hartley | February 2026*

For every dollar you spend on email marketing, you get thirty-six back. That's not a typo. No other channel comes close. Not social, not paid search, not influencer marketing. Email has been declared dead roughly once a year since 2005 and it keeps quietly outperforming everything else.

I built SmartrMail (email marketing SaaS for ecommerce, 28,000 customers) and spent years watching what actually works across thousands of brands. I've seen patterns repeat across industries: the same mistakes destroying the same campaigns, the same strategies quietly generating the same outsized returns. This guide is the result of crawling 908 sources, extracting 4,798 insights, and distilling them into something you can actually use. Every claim is backed by data, every recommendation tested by practitioners.

This is v0.4 — the first public release. I've added a cold email chapter, a thorough section on spam traps, a full chapter on AI and email, company case studies throughout, and a sending identity guide. The fundamentals haven't changed, but the industry has shifted enough that every chapter needed updating.

---

## How to Use This Guide

This guide works in two ways.

**As a reference.** Jump to whatever section you need. Each chapter stands alone. If you're fixing deliverability, go to Chapter 7. If you're building your first welcome series, go to Chapter 4. The industry playbooks in Chapter 11 have segment-specific tactics whether you're running a DTC brand, a SaaS company, a newsletter, or a nonprofit.

**As a Claude Code skill.** Install the companion skill file and Claude becomes your email marketing co-pilot. It can analyse your current setup, identify gaps, draft copy, build automation flows, and pull benchmarks for your industry. The skill file lives at [github.com/CosmoBlk/email-marketing-bible](https://github.com/CosmoBlk/email-marketing-bible).

Here's how to install it:

```bash
git clone https://github.com/CosmoBlk/email-marketing-bible.git
cp -r email-marketing-bible ~/.claude/skills/email-marketing-bible
```

Once installed, Claude can reference the full guide when helping you with email strategy, copywriting, deliverability troubleshooting, or flow design.

### Who's in here

Forty of the world's best email marketing practitioners are referenced throughout this guide. You'll find their full directory in Chapter 16. These aren't just names dropped for credibility. Each expert is cited where their specific insight or methodology is most useful.

The research behind this guide comes from 908 sources across industry reports (Litmus, Klaviyo, Campaign Monitor, HubSpot, Salesforce), practitioner blogs, academic research, platform documentation, and community discussions from Reddit, HubSpot Community, and industry forums. Where multiple sources reported conflicting numbers, I used the most commonly cited figure or the one from the most authoritative source.

### What's new in v0.4

**Cold email chapter.** Cold outreach and email marketing are fundamentally different disciplines with different infrastructure, legal requirements, and strategies. The new Chapter 13 covers cold email properly for the first time, because too many people are blowing up their marketing domain by running cold campaigns from it.

**Spam traps section.** Chapter 2 now includes a full section on pristine traps, recycled traps, typo traps, and role-based traps. This came directly from community research showing it's one of the most frequently asked and least understood topics.

**AI and email chapter.** The new Chapter 14 covers where AI genuinely helps (subject line generation, first drafts, segmentation analysis) and where it falls short (brand voice, emotional resonance, strategic thinking).

**Company case studies.** Chapter 15 examines ten companies that turned email into a genuine competitive advantage, with real numbers attached.

**Sending identity guide.** A new section on setting up your sending infrastructure properly: subdomains, domain separation, dedicated vs shared IPs, and the authentication stack. This was one of the most requested topics from community research.

**Engagement-based sending.** A full framework for tiered sending based on subscriber engagement, which is one of the easiest optimisations most brands can make.

**Tags vs segments vs lists.** A new section addressing one of the most common points of confusion for beginners.

**RFM implementation guide.** A practical walkthrough of Recency, Frequency, Monetary scoring that you can implement this week, not someday.

Whether you're reading this guide cover to cover or jumping to a specific chapter, the goal is the same: give you enough data, context, and practical guidance to make better decisions about your email marketing. Not theory. Not abstract principles. Specific things you can implement this week that will move your numbers.

The research crawler application is open source at [github.com/CosmoBlk/emb-research](https://github.com/CosmoBlk/emb-research).

---

