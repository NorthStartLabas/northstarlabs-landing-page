import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const POST: APIRoute = async ({ request }) => {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Naam, e-mail en bericht zijn verplicht.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Ongeldig e-mailadres.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Check if Resend API key is configured
    const resendApiKey = import.meta.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'E-mailservice is niet geconfigureerd. Neem direct contact op via liviu@northstarlabs.nl' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Initialize Resend
    const resend = new Resend(resendApiKey);

    // Send email
    const { data, error } = await resend.emails.send({
      from: 'NorthStar Labs <contact@updates.northstarlabs.nl>',
      to: 'liviu@northstarlabs.nl',
      replyTo: email,
      subject: `Nieuw contactformulier: ${name}`,
      html: `
        <h2>Nieuw bericht via contactformulier</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${company ? `<p><strong>Bedrijf:</strong> ${company}</p>` : ''}
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Er is een fout opgetreden bij het verzenden van het bericht.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ 
        message: 'Bericht succesvol verzonden! We nemen zo snel mogelijk contact met je op.',
        id: data?.id 
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Er is een onverwachte fout opgetreden.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
