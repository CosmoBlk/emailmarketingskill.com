import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { email } = await request.json();

    if (!email || !email.includes('@')) {
      return new Response(JSON.stringify({ error: 'Invalid email' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const apiKey = import.meta.env.RESEND_API_KEY;

    if (!apiKey || apiKey === 'PLACEHOLDER') {
      // Dev mode — log and succeed
      console.log(`[DEV] Would subscribe: ${email}`);
      return new Response(JSON.stringify({ success: true, dev: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const resend = new Resend(apiKey);

    // Add to Resend audience
    const audienceId = import.meta.env.RESEND_AUDIENCE_ID;
    if (audienceId) {
      await resend.contacts.create({
        email,
        audienceId,
      });
    }

    // Send the PDF download email
    await resend.emails.send({
      from: import.meta.env.RESEND_FROM_EMAIL || 'Email Marketing Bible <emb@emailmarketingskill.com>',
      to: email,
      subject: 'Your Email Marketing Bible PDF',
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 600px; margin: 0 auto; padding: 2rem;">
          <h1 style="font-size: 1.5rem; color: #1a1a1a;">Here's your Email Marketing Bible</h1>
          <p style="color: #333; line-height: 1.6;">
            Thanks for downloading the Email Marketing Bible. Here's the full 55,000-word guide:
          </p>
          <p style="margin: 2rem 0;">
            <a href="https://emailmarketingskill.com/emb-v0.4.pdf"
               style="display: inline-block; padding: 0.75rem 2rem; background: #ff6b1a; color: #fff; text-decoration: none; border-radius: 4px; font-weight: 600;">
              Download PDF
            </a>
          </p>
          <p style="color: #333; line-height: 1.6;">
            You can also <a href="https://emailmarketingskill.com/introduction/" style="color: #ff6b1a;">read it online</a>
            or <a href="https://github.com/CosmoBlk/email-marketing-bible" style="color: #ff6b1a;">install the Claude Code skill</a>.
          </p>
          <p style="color: #666; font-size: 0.85rem; margin-top: 2rem;">
            We'll let you know when new chapters or major updates are published. No spam.
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 2rem 0;" />
          <p style="color: #999; font-size: 0.75rem;">
            Built by George Hartley. Made with 🧡 in Melbourne.
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Subscribe error:', error);
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
