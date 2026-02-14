---
title: "Design and Technical"
description: "Email design best practices, responsive templates, dark mode, accessibility, and the technical side of email rendering."
sidebar:
  order: 6
  label: "6. Design & Technical"
---

Email design in 2026 is a strange discipline. You're designing for a medium that renders differently across dozens of email clients, on screens ranging from smartwatches to ultrawide monitors, in both light and dark mode, with technology constraints that would make a web developer weep. And yet, the emails that perform best are often the simplest.

This chapter covers the technical foundations that make your emails display correctly, load quickly, and convert reliably.

### Mobile-First Design

Over 60% of emails are now opened on mobile devices. That number has been climbing steadily for years, and it's not coming back down. More critically, 64% of mobile users will delete an email that doesn't display well on their phone. That's not "doesn't look perfect." That's "doesn't work."

Mobile-first means designing for the smallest screen first, then scaling up.

**Single-column layouts are the safest and most effective approach.** Multi-column designs that look great on desktop collapse unpredictably on mobile, often stacking in the wrong order or creating side-scrolling nightmares. A single column with properly sized text, images, and buttons works everywhere.

**Keep your email width between 600 and 640 pixels.** This is the standard that works across the widest range of email clients. Wider than 640px and you risk horizontal scrolling on smaller screens and in email clients that add sidebar panels.

**Touch-friendly buttons must be at least 44x44 pixels.** This is Apple's Human Interface Guideline for minimum tap targets, and I'd actually suggest going slightly larger, to 46x46 pixels, to account for less precise tapping. Nothing kills mobile email engagement faster than a button that's too small to tap accurately.

**Font sizes should be 13px minimum on iPhone.** Anything smaller than 13px on iOS triggers auto-zoom, which breaks your layout. Use 14-16px for body text and 20-22px for headlines. Larger is almost always better on mobile.

**Subject lines should stay under 30 characters for mobile visibility.** Most mobile email clients truncate subject lines between 30 and 40 characters depending on the device and whether preview text is shown. Front-load the important words.

**Use media queries for mobile-optimised images.** Serve smaller image files to mobile devices, both for load speed and data usage. An image that loads in 1 second on wifi might take 5 seconds on a poor mobile connection, and your reader won't wait.

**Image file size matters more than most marketers realise.** Keep individual images under 200KB and total email weight under 800KB. Compress all images before uploading. Use TinyPNG or Squoosh for lossless compression. Many ESPs will resize images on the fly, but they don't always compress them aggressively enough.

**Use web-safe fonts as your primary stack.** Custom fonts in email have inconsistent support. Arial, Helvetica, Georgia, and Verdana render reliably everywhere. You can specify a custom web font as your first choice and fall back to a web-safe font for clients that don't support it, but know that the majority of your readers will see the fallback. Design with the fallback in mind, not the custom font.

**Preview your email on actual devices, not just in your browser.** Desktop browser previews are misleading. The email that looks perfect in your Chrome preview might have overlapping text on an iPhone SE or cropped images in the Gmail app on Android. Use Litmus, Email on Acid, or at minimum send yourself a test and check it on your phone before hitting send.

**Retina and high-DPI displays require 2x images.** If your email column is 600px wide and you use a 600px-wide image, it'll look blurry on retina screens (which is most modern phones and laptops). Export images at 2x the display size (1200px for a 600px column) and set the width in HTML to the display size. The file will be larger, so compression becomes even more important.

### Email Client Compatibility

Here is the uncomfortable truth about email development: you're still building with tables. In 2026. While the web has moved on to CSS Grid and Flexbox, email remains anchored to HTML tables for layout.

Why? Because Microsoft Outlook uses Word's rendering engine (yes, the word processor) to display HTML emails. And Outlook holds enough market share, particularly in B2B, that you can't ignore it. Tables render consistently in Word's engine. Modern CSS does not.

**Use inline CSS.** Most email clients strip external stylesheets and many strip styles from the `<head>`. The only reliable way to ensure your styles apply is to inline them directly on each element. Every serious email build tool handles this automatically during export.

**Responsive design using media queries** works in most modern email clients: Apple Mail, iOS Mail, Gmail app, Outlook mobile, Yahoo. The notable exception is Gmail's desktop web client, which has historically had limited support. This is where hybrid design comes in.

**Hybrid design (also called spongy design) is your fallback.** It uses fluid tables, percentage-based widths, and conditional comments to create emails that adapt to screen size without relying on media queries. The email looks good at any width because the underlying structure is flexible by default.

**[Mark Robbins](https://www.goodemailcode.com/) has pioneered CSS-only techniques for email** that push what's possible without JavaScript (which is blocked in all email clients). His work on CSS-only interactive components, accessibility improvements, and progressive enhancement has advanced the field considerably. If you're building emails at a technical level, study his work.

**Common email client rendering differences to test for:**

Outlook desktop (2019/2021/365) uses Word's rendering engine, which means no support for CSS background images, limited padding control, and unpredictable table spacing. Use VML (Vector Markup Language) for background images in Outlook. Yes, it's archaic. Yes, it works.

Gmail web strips all styles from the `<head>` if they exceed a certain size threshold (roughly 8,192 characters). If your CSS is complex, some styles will be silently removed. Gmail also doesn't support media queries in its web client, which is why hybrid design matters.

Apple Mail is the most standards-compliant email client and supports nearly everything, including media queries, CSS animations, and `@supports`. It's the dream client to develop for, but don't let it fool you into thinking other clients will behave the same way.

Yahoo Mail and AOL have improved significantly in recent years but still have quirks around media query support and margin handling. always test.

### Email Design Tools

The tooling ecosystem for email design has matured significantly. Here's what I'd recommend in 2026, broken down by use case.

| Tool | Type | Best For | Key Feature |
|---|---|---|---|
| Beefree (BEE) | No-code builder | Marketing teams | Drag-and-drop, saved modules |
| Stripo | No-code + code | Teams needing AMP | AMP for Email, 1,400+ templates |
| Chamaileon | Collaborative | Enterprise teams | Brand governance, approval workflows |
| Litmus | Testing + building | QA-focused teams | 90+ email client previews |
| Email on Acid | Testing | Budget-conscious teams | Client rendering + spam testing |
| MJML | Code framework | Developers | Responsive email markup language |
| Maizzle | Code framework | Tailwind CSS devs | Tailwind for email, build pipeline |
| React Email | Code framework | React developers | Component-based, npm ecosystem |
| Parcel | Code IDE | Email developers | Real-time preview, CSS support hints |
| Figma to Email | Workflow | Design teams | Design in Figma, export to HTML |

Let me break these down with more context.

**No-code builders for marketing teams:**

Beefree (formerly BEE) is my top recommendation for teams that need to build emails quickly without coding. The drag-and-drop interface is genuinely good, and the saved modules feature lets you build a library of reusable components. Stripo is the best option if you need AMP for Email support or want access to a massive template library (1,400+ templates). Chamaileon is built for enterprise teams that need brand governance and approval workflows baked into the email creation process.

**Testing platforms:**

Litmus remains the gold standard, offering previews across 90+ email client and device combinations. It's not cheap, but if you're sending to a diverse audience (and you probably are), seeing how your email renders in Outlook 2019 on Windows vs Apple Mail on macOS vs Gmail on Android is essential. Email on Acid offers similar rendering previews plus spam testing at a lower price point. For teams on a budget, it's a strong alternative.

**Code frameworks for developers:**

MJML is a markup language that compiles to responsive HTML email. You write clean, semantic markup and MJML handles the ugly table-based output. It's the most popular developer framework for email. Maizzle brings Tailwind CSS to email development, with a build pipeline that handles inlining, purging unused CSS, and generating production-ready HTML. React Email lets you build email templates using React components within the npm ecosystem. If your team already thinks in components, this is a natural fit. Parcel (not the web bundler, the email IDE) provides real-time preview and CSS support hints as you code.

**Design-to-code workflows:**

Figma to Email workflows are increasingly common. Design teams create email templates in Figma using component libraries, then export to HTML either through plugins or by handing designs to developers who implement them in MJML or Maizzle.

### No-Code vs Coded Templates

This isn't an either-or decision. It's about matching the approach to the use case.

**No-code tools are 3 to 5 times faster for one-off campaigns.** When you need to build a single promotional email, a drag-and-drop builder gets you there in 30 minutes instead of 3 hours. Use Beefree, Stripo, or your ESP's built-in builder.

**Coded templates are better for recurring flows, version control, and design systems.** When you're building a welcome series that will send to thousands of subscribers for months or years, investing in a properly coded template pays for itself. Coded templates can live in version control (Git), be reviewed in pull requests, and be updated systematically across an entire flow.

**Most mature email programmes use both.** Coded templates for automated flows (welcome, abandoned cart, post-purchase) and no-code tools for one-off campaigns (product launches, seasonal promotions, announcements). This hybrid approach gives you consistency where it matters and speed where you need it.

### Email Template Design Systems

If you're sending more than a handful of email types, you need a design system. Not a template. A system.

**Brand tokens** define the constants: your primary and secondary colours, font stack, standard spacing units (8px, 16px, 24px, 32px), border radius for buttons, and any other visual constants. Document these once and reference them everywhere.

**A component library** contains the building blocks: header (logo, navigation), hero section (image, headline, CTA), text block (heading, body, link), product card (image, title, price, button), CTA button (primary, secondary, text link), and footer (social links, legal text, unsubscribe). Each component has defined responsive behaviour, dark mode treatment, and accessibility requirements.

**Layout templates** combine components into standard email types: promotional email, newsletter, transactional notification, welcome email, abandoned cart. These are your starting points, not your constraints.

**Usage guidelines** tell your team when to use what, how much copy to include, which components are required (footer, unsubscribe) versus optional, and any brand rules around imagery, tone, or CTA placement.

Building a design system takes time upfront. For a typical ecommerce brand, expect 40 to 60 hours of initial development work. But that investment pays back quickly. Once the system is in place, building a new email goes from 3 to 4 hours down to 30 to 60 minutes. And every email you send is automatically on-brand and accessible.

If you're a smaller team without the resources for a full design system, start with a single well-built master template that covers your most common email type (usually a promotional email). Build it properly once, with dark mode support, accessibility features, and mobile optimisation. Then adapt it for each send. That's not a design system, but it solves 80% of the problem.

### Accessibility

Paul Airy has been the leading voice on email accessibility for years, and his core message is worth repeating: accessible emails aren't just the right thing to do, they perform better for everyone.

An estimated 15 to 20% of people have some form of disability. That includes visual impairments, motor disabilities, cognitive differences, and situational disabilities (like reading an email one-handed while holding a baby). Designing for accessibility means designing for all of them, and in the process, you make the email better for the other 80% too.

**WCAG 2.1 requirements for email:**

Colour contrast must meet a 4.5:1 ratio for normal text and 3:1 for large text. Use a contrast checker tool. What looks fine on your high-end monitor might be illegible on a cheaper screen in bright sunlight.

All images must have descriptive alt text. Not "image1.jpg" or "banner." Describe what the image shows and what the reader needs to know. If the image is purely decorative, use an empty alt attribute (alt="") so screen readers skip it.

Maintain a logical reading order. Screen readers follow the HTML source order, not the visual layout. Make sure your content makes sense when read linearly, top to bottom.

Include a language attribute (lang="en") on your HTML element so screen readers use the correct pronunciation model.

Links should have clear purpose from their text alone. "Click here" is meaningless out of context. "Download the 2026 Email Benchmarks Report" tells the reader exactly where the link goes.

Don't rely on colour alone to convey information. If a price is shown in red to indicate a sale, also include text saying "Sale price" or use a strikethrough on the original price.

Use scalable text. Never set font sizes in pixels that can't be overridden by user preferences.

Ensure keyboard navigability. All interactive elements should be reachable and operable via keyboard.

**On layout tables, add role="presentation"** to tell screen readers that the table is used for layout, not data. Without this attribute, screen readers will try to parse your layout as a data table, creating a confusing experience.

**Touch targets of 44x44px minimum** aren't just a mobile best practice. They're an accessibility requirement. Users with motor impairments need adequate target size.

**Accessibility isn't a checklist you complete once.** It's a practice you maintain across every email. Add accessibility review to your email QA process. Before every send, check: does every image have alt text? Is the reading order logical? Do all buttons and links have sufficient size and contrast? Can you understand the email if you squint and can only read the headings and link text? If the answer to any of these is no, fix it before sending.

**Screen reader testing is the gold standard.** If you want to truly understand how accessible your emails are, test them with an actual screen reader. VoiceOver on Mac and iOS, NVDA on Windows, and TalkBack on Android are all free. Listening to your email read aloud by a screen reader will reveal issues that visual inspection never will. Aim to do this at least once per quarter on your most-used templates.

### Dark Mode

At least 33% of email recipients view emails in dark mode, and that percentage is growing. Dark mode can wreak havoc on email designs that weren't built to handle it.

Email clients handle dark mode differently. Some invert colours. Some swap backgrounds. Some do both. The result can be black text on a black background (invisible), dark blue links on a dark grey background (nearly invisible), or logos with white backgrounds that now have a jarring white rectangle around them.

**Test your emails in dark mode across Apple Mail, Gmail, and Outlook.** These three handle dark mode differently, and together they cover the majority of dark mode users.

**Use transparent PNGs for logos.** A logo with a white background on a white email looks fine. That same logo in dark mode gets a white rectangle around it. Transparent backgrounds solve this.

**Avoid pure white backgrounds.** Use off-white (#F5F5F5 or similar) for your email body background. In dark mode, pure white (#FFFFFF) can create a blinding flash. Off-white adapts more gracefully and is easier on the eyes in both modes.

**Use the CSS media query `@media (prefers-color-scheme: dark)` where supported** to provide explicit dark mode styles. This gives you control over how your email appears in dark mode rather than letting the email client guess. Support is good in Apple Mail and Outlook. Gmail ignores it and applies its own dark mode transformations.

**Practical dark mode design tips:**

Use a border or subtle shadow around images with white or light backgrounds so they don't float in dark mode. Add a thin 1px border in your brand colour around logos as a safety measure.

For text colours, avoid pure black (#000000) text in light mode. Use dark grey (#333333 or #222222) instead. In dark mode, email clients often invert pure black to pure white, which can look harsh. Slightly off-black text inverts to slightly off-white, which is easier to read.

Test your CTA buttons in both modes. A button that's highly visible on a white background might disappear on a dark background. Consider adding a border to your buttons so they remain visible regardless of the background colour.

If you're using background colours in content sections (like a highlighted tip box or a coloured banner), those colours may be changed or removed in dark mode. Always ensure your content is readable even if the background colour reverts to the email client's default dark background.

### Interactive Email

Interactive elements in email can significantly boost engagement. Click-to-open rates increase by an average of 31.7% when interactive elements are included.

But interactivity in email comes with a critical caveat: support varies wildly across email clients. Always build with progressive enhancement in mind, a concept Jason Rodriguez has championed. Your interactive element is a bonus for clients that support it. The fallback for clients that don't should still be a fully functional, good-looking email.

**CSS hover effects have broad support and deliver a 5 to 10% uplift in engagement.** Simple things like button colour changes on hover, image overlays, or underline animations. These are low-risk, high-reward additions.

**CSS-powered accordions have moderate support and can deliver 10 to 15% uplift.** They work well for content-heavy emails like newsletters or product comparisons, letting the reader expand only the sections they care about. They don't work in Gmail web or Outlook, so your fallback should show all content expanded.

**Animated GIFs have universal support and deliver 5 to 8% more engagement.** Every email client supports GIFs (with the exception of some Outlook desktop versions, which show only the first frame). they're the safest interactive element you can use. Product demonstrations, subtle animations, and visual interest all work well.

**AMP for Email offers the most powerful interactivity** with 20 to 30% engagement uplift, allowing carousels, forms, accordion menus, and even live content within the email. But support is limited to Gmail and Yahoo, it requires Google sender registration, and adoption remains low. If your audience is primarily on Gmail and you have developer resources, AMP can be powerful. For most senders, it's not worth the investment yet.

**Countdown timers** are a common interactive element for sale emails and limited-time offers. They're generated server-side as animated GIFs that display a live countdown. Services like Sendtric and Mailmodo offer free and paid countdown timer generators. They work in virtually every email client. The important caveat: only use real countdown timers for real deadlines. A timer counting down to a sale that quietly extends afterward trains subscribers to ignore your urgency.

**Embedded surveys and polls** can boost engagement significantly because they turn the email from a broadcast into a conversation. Tools like Typeform and SurveyMonkey generate embeddable one-question polls that work in most email clients. For clients that don't support the embedded version, the fallback is a link to the survey. even a single-question poll in a newsletter can increase click rates by 15 to 20%.

**The golden rule of interactive email: always build the fallback first.** Design your email as if no interactive elements will work. Then layer interactivity on top for the clients that support it. This way, every subscriber gets a functional email, and those with modern email clients get something extra.

---

