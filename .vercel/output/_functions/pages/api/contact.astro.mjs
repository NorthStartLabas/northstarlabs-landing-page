import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, company, message } = body;
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Naam, e-mail en bericht zijn verplicht." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Ongeldig e-mailadres." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }
    const resendApiKey = "re_haUmYNpD_mvQnEE4pds3P3SwUvAzfMC6r";
    if (!resendApiKey) ;
    const resend = new Resend(resendApiKey);
    const { data, error } = await resend.emails.send({
      from: "NorthStar Labs <contact@updates.northstarlabs.nl>",
      // Replace with your verified domain
      to: "liviu@northstarlabs.nl",
      replyTo: email,
      subject: `Nieuw contactformulier: ${name}`,
      html: `
        <h2>Nieuw bericht via contactformulier</h2>
        <p><strong>Naam:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        ${company ? `<p><strong>Bedrijf:</strong> ${company}</p>` : ""}
        <p><strong>Bericht:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `
    });
    if (error) {
      console.error("Resend error:", error);
      return new Response(
        JSON.stringify({ error: "Er is een fout opgetreden bij het verzenden van het bericht." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
    return new Response(
      JSON.stringify({
        message: "Bericht succesvol verzonden! We nemen zo snel mogelijk contact met je op.",
        id: data?.id
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(
      JSON.stringify({ error: "Er is een onverwachte fout opgetreden." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
