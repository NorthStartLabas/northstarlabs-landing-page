/* empty css                                 */
import { e as createComponent, f as createAstro, r as renderTemplate, k as renderSlot, l as renderHead, h as addAttribute, m as maybeRenderHead, n as renderScript, o as renderComponent } from '../chunks/astro/server_CEAm6CJL.mjs';
import 'piccolore';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "NorthStar Labs - Softwareproducten voor bedrijven die vooruit willen",
    description = "NorthStar Labs bouwt B2B softwareproducten die concrete bedrijfsproblemen oplossen. Praktische SaaS-oplossingen zonder ruis."
  } = Astro2.props;
  const plausibleDomain = "northstarlabs.nl";
  return renderTemplate(_a || (_a = __template(['<html lang="nl"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"', "><!-- SEO Meta Tags --><title>", '</title><meta name="description"', '><!-- Open Graph / Social Media --><meta property="og:type" content="website"><meta property="og:title"', '><meta property="og:description"', '><meta property="og:site_name" content="NorthStar Labs"><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><!-- Fonts --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet"><!-- Plausible Analytics --><script defer', ' src="https://plausible.io/js/script.js"></script><!-- Global Styles --><link rel="stylesheet" href="/src/styles/global.css">', "</head> <body> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(plausibleDomain, "data-domain"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "/Users/liviubuterez/Desktop/northstarlabs/src/layouts/Layout.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full sticky top-0 bg-white/80 backdrop-blur-md z-50 border-b border-black/5"> <div class="max-w-7xl mx-auto px-6 lg:px-8 py-5"> <div class="flex items-center justify-between"> <a href="/" class="text-xl font-bold tracking-tight hover:opacity-60 transition-all duration-300">
NorthStar Labs
</a> <nav> <a href="#contact" class="text-sm font-medium text-black/70 hover:text-black transition-colors duration-200">
Contact
</a> </nav> </div> </div> </header>`;
}, "/Users/liviubuterez/Desktop/northstarlabs/src/components/Header.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full min-h-screen flex items-center relative overflow-hidden bg-[#fafafa] snap-start snap-always"> <!-- Background blobs - deliberately placed to frame content --> <div class="absolute inset-0 -z-10 overflow-hidden"> <!-- Large blob top-left - frames left side of content --> <div class="absolute -top-32 -left-32 w-[700px] h-[700px] bg-black/[0.08] rounded-full blur-3xl"></div> <!-- Medium blob bottom-right - frames right side of content --> <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-black/[0.07] rounded-full blur-3xl translate-x-1/4 translate-y-1/4"></div> <!-- Small accent blob mid-right - adds depth --> <div class="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-black/[0.06] rounded-full blur-3xl"></div> </div> <div class="max-w-5xl mx-auto px-6 lg:px-8 py-24 relative z-10"> <div class="fade-in"> <h1 class="mb-10 leading-[0.88] text-black font-bold text-6xl md:text-7xl lg:text-8xl">
Software&shy;producten voor bedrijven die vooruit willen,<br> <span class="text-gradient">zonder ruis.</span> </h1> <div class="text-xl md:text-2xl text-black/70 max-w-3xl leading-relaxed mb-12 space-y-2"> <p>
NorthStar Labs is een productgedreven bedrijf dat B2B-software ontwikkelt.
</p> <p>
Met één doel: <span class="text-black font-medium">meetbare bedrijfsresultaten leveren</span> door slimme, goed ontworpen systemen.
</p> </div> <div class="flex flex-col items-start gap-2"> <a href="#contact" class="px-8 py-5 bg-black text-white text-lg font-medium rounded-full hover:bg-black/80 transition-all duration-300 hover:scale-105 hover:shadow-xl">
Start een gesprek
</a> <p class="text-xs text-black/40 ml-2">
Vrijblijvend en zonder verplichtingen
</p> </div> </div> </div> <div class="absolute bottom-0 left-0 right-0 h-px bg-black/5"></div> </section>`;
}, "/Users/liviubuterez/Desktop/northstarlabs/src/components/Hero.astro", void 0);

const $$Astro = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Section;
  const { id, background = "white" } = Astro2.props;
  const bgClass = background === "light" ? "bg-black/[0.02]" : "bg-white";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${addAttribute(`w-full min-h-screen flex items-center ${bgClass} relative snap-start snap-always`, "class")}> <div class="max-w-5xl mx-auto px-6 lg:px-8 w-full py-24 md:py-32"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/liviubuterez/Desktop/northstarlabs/src/components/Section.astro", void 0);

const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="w-full max-w-3xl mx-auto"> <h3 class="mb-4">Contactformulier</h3> <p class="text-black/60 mb-12 text-lg">Laat hieronder je gegevens achter en we nemen zo snel mogelijk contact met je op.</p> <form id="contact-form" class="space-y-6"> <div class="grid md:grid-cols-2 gap-6"> <div class="group"> <label for="name" class="block text-sm font-medium mb-3 text-black/80">
Naam *
</label> <input type="text" id="name" name="name" required class="w-full px-5 py-4 border border-black/10 rounded-xl focus:border-black focus:outline-none focus:ring-2 focus:ring-black/5 transition-all duration-200 bg-white hover:border-black/20" placeholder="Je volledige naam"> </div> <div class="group"> <label for="email" class="block text-sm font-medium mb-3 text-black/80">
E-mail *
</label> <input type="email" id="email" name="email" required class="w-full px-5 py-4 border border-black/10 rounded-xl focus:border-black focus:outline-none focus:ring-2 focus:ring-black/5 transition-all duration-200 bg-white hover:border-black/20" placeholder="je@email.com"> </div> </div> <div class="group"> <label for="company" class="block text-sm font-medium mb-3 text-black/80">
Bedrijf
</label> <input type="text" id="company" name="company" class="w-full px-5 py-4 border border-black/10 rounded-xl focus:border-black focus:outline-none focus:ring-2 focus:ring-black/5 transition-all duration-200 bg-white hover:border-black/20" placeholder="Je bedrijfsnaam (optioneel)"> </div> <div class="group"> <label for="message" class="block text-sm font-medium mb-3 text-black/80">
Bericht *
</label> <textarea id="message" name="message" required rows="6" class="w-full px-5 py-4 border border-black/10 rounded-xl focus:border-black focus:outline-none focus:ring-2 focus:ring-black/5 transition-all duration-200 bg-white resize-none hover:border-black/20" placeholder="Vertel ons over je project of vraag..."></textarea> </div> <div id="form-message" class="hidden text-sm rounded-xl" role="alert"></div> <button type="submit" class="px-8 py-5 bg-black text-white text-lg font-medium rounded-full hover:bg-black/80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 hover:shadow-xl">
Versturen
</button> </form> </div> ${renderScript($$result, "/Users/liviubuterez/Desktop/northstarlabs/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/liviubuterez/Desktop/northstarlabs/src/components/ContactForm.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="w-full border-t border-black/5 bg-black/[0.02] snap-start"> <div class="max-w-7xl mx-auto px-6 lg:px-8 py-16"> <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8"> <div> <div class="text-2xl font-bold mb-3">NorthStar Labs</div> <p class="text-sm text-black/60">
© ${(/* @__PURE__ */ new Date()).getFullYear()} NorthStar Labs — Nederland
</p> </div> <div class="flex flex-col items-start md:items-end gap-3"> <a href="mailto:liviu@northstarlabs.nl" class="text-black/80 hover:text-black transition-colors font-medium group flex items-center gap-2">
liviu@northstarlabs.nl
<svg class="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> </footer>`;
}, "/Users/liviubuterez/Desktop/northstarlabs/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, {})} ${maybeRenderHead()}<main class="snap-y snap-mandatory"> <!-- Hero Section --> ${renderComponent($$result2, "Hero", $$Hero, {})} <!-- Wat we doen --> ${renderComponent($$result2, "Section", $$Section, { "background": "light" }, { "default": ($$result3) => renderTemplate` <div> <h2 class="mb-12 uppercase tracking-wider text-black/50 text-sm font-semibold">Wat we doen</h2> <div class="space-y-8 text-lg"> <p class="text-xl md:text-2xl leading-relaxed text-black/80">
We bouwen en lanceren softwareproducten die bedrijven helpen efficiënter te werken, 
            betere beslissingen te nemen en processen te vereenvoudigen.
</p> <p class="text-2xl md:text-3xl font-medium leading-tight text-black/90 max-w-3xl">
Geen hype. Geen overbodige complexiteit.<br>Wel software die daadwerkelijk gebruikt wordt.
</p> </div> <div class="mt-20 grid md:grid-cols-3 gap-8 justify-items-center md:justify-items-stretch"> <div class="group w-full"> <div class="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <h3 class="text-xl font-medium mb-3 leading-tight">
Praktische SaaS-<br>oplossingen voor B2B
</h3> <p class="text-black/60 leading-relaxed">Tools die teams direct kunnen inzetten, zonder lange implementatietrajecten.</p> </div> <div class="group w-full"> <div class="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path> </svg> </div> <h3 class="text-xl font-medium mb-3 leading-tight">
Automatisering<br>die ondersteunt
</h3> <p class="text-black/60 leading-relaxed">Technologie die mensen helpt beter werk te doen, niet vervangt.</p> </div> <div class="group w-full"> <div class="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="text-xl font-medium mb-3 leading-tight">
Betrouwbare<br>systemen
</h3> <p class="text-black/60 leading-relaxed">Software die werkt, dag in dag uit, in de dagelijkse bedrijfsvoering.</p> </div> </div> </div> ` })} <!-- Onze aanpak --> ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` <div> <h2 class="mb-12 uppercase tracking-wider text-black/50 text-sm font-semibold">Onze aanpak</h2> <div class="space-y-6"> <p class="text-3xl md:text-4xl font-bold leading-tight">
Technologie is een middel, geen doel.
</p> <p class="text-xl text-black/70 leading-relaxed">
Elk product begint bij een concreet probleem in de praktijk.
            Pas daarna kiezen we de juiste technische oplossing — soms met AI, vaak zonder.
</p> </div> <div class="mt-16 space-y-6"> <p class="text-lg font-semibold mb-8">We ontwerpen software die:</p> <div class="grid md:grid-cols-3 gap-6 justify-items-center md:justify-items-stretch"> <div class="bg-white border border-black/10 rounded-2xl p-8 hover:border-black/30 hover:shadow-lg transition-all duration-300 w-full"> <div class="mb-4"> <svg class="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path> </svg> </div> <h3 class="font-semibold mb-3 text-lg">Begrijpelijk</h3> <p class="text-black/60 leading-relaxed">Voor niet-technische gebruikers direct te gebruiken.</p> </div> <div class="bg-white border border-black/10 rounded-2xl p-8 hover:border-black/30 hover:shadow-lg transition-all duration-300 w-full"> <div class="mb-4"> <svg class="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path> </svg> </div> <h3 class="font-semibold mb-3 text-lg">Schaalbaar</h3> <p class="text-black/60 leading-relaxed">Groeit mee met je bedrijf en ambities.</p> </div> <div class="bg-white border border-black/10 rounded-2xl p-8 hover:border-black/30 hover:shadow-lg transition-all duration-300 w-full"> <div class="mb-4"> <svg class="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path> </svg> </div> <h3 class="font-semibold mb-3 text-lg">Waardevol</h3> <p class="text-black/60 leading-relaxed">Levert langetermijnwaarde, niet alleen een demo.</p> </div> </div> </div> </div> ` })} <!-- Maatwerk & samenwerking --> ${renderComponent($$result2, "Section", $$Section, { "background": "light" }, { "default": ($$result3) => renderTemplate` <div> <h2 class="mb-12 uppercase tracking-wider text-black/50 text-sm font-semibold">Maatwerk & samenwerking</h2> <p class="text-xl md:text-2xl text-black/80 leading-relaxed mb-12">
Naast eigen producten werken we selectief samen met bedrijven en founders aan maatwerkoplossingen.
</p> <div class="bg-white border border-black/10 rounded-3xl p-10 md:p-12"> <p class="text-lg font-semibold mb-8">Dit is geschikt wanneer:</p> <div class="space-y-6"> <div class="flex items-start gap-4 group"> <div class="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-black group-hover:text-white transition-colors"> <span class="text-sm font-bold">1</span> </div> <p class="text-lg text-black/80">Een standaardoplossing niet volstaat voor je specifieke uitdaging</p> </div> <div class="flex items-start gap-4 group"> <div class="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-black group-hover:text-white transition-colors"> <span class="text-sm font-bold">2</span> </div> <p class="text-lg text-black/80">Processen te specifiek zijn voor bestaande tools</p> </div> <div class="flex items-start gap-4 group"> <div class="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-1 group-hover:bg-black group-hover:text-white transition-colors"> <span class="text-sm font-bold">3</span> </div> <p class="text-lg text-black/80">Er behoefte is aan een robuust, schaalbaar systeem op maat</p> </div> </div> <div class="mt-10 pt-8 border-t border-black/10"> <p class="text-sm text-black/50 italic">
Samenwerking is altijd resultaatgericht en helder afgebakend.
</p> </div> </div> </div> ` })} <!-- Over NorthStar Labs --> ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` <div> <h2 class="mb-12 uppercase tracking-wider text-black/50 text-sm font-semibold">Over NorthStar Labs</h2> <p class="text-xl md:text-2xl text-black/80 leading-relaxed mb-16">
NorthStar Labs is gevestigd in Nederland en opereert als zelfstandig productbedrijf.
</p> <div class="bg-black text-white rounded-3xl p-10 md:p-12"> <p class="text-2xl font-semibold mb-10">We werken bewust kleinschalig</p> <div class="grid md:grid-cols-3 gap-8 justify-items-center md:justify-items-stretch"> <div class="w-full"> <div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5"> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="font-semibold mb-2 text-lg">Korte lijnen</h3> <p class="text-white/80">Direct contact, snelle communicatie.</p> </div> <div class="w-full"> <div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5"> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path> </svg> </div> <h3 class="font-semibold mb-2 text-lg">Hoge kwaliteit</h3> <p class="text-white/80">Technische excellentie staat voorop.</p> </div> <div class="w-full"> <div class="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center mb-5"> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path> </svg> </div> <h3 class="font-semibold mb-2 text-lg">Snelle beslissingen</h3> <p class="text-white/80">Geen bureaucratie, wel voortgang.</p> </div> </div> </div> </div> ` })} <!-- Contact --> ${renderComponent($$result2, "Section", $$Section, { "id": "contact", "background": "light" }, { "default": ($$result3) => renderTemplate` <div> <div class="text-center mb-16"> <h2 class="mb-6">Laten we in contact komen</h2> <p class="text-xl md:text-2xl text-black/70 max-w-2xl mx-auto">
Benieuwd of we iets voor elkaar kunnen betekenen?
</p> </div> <div class="grid md:grid-cols-2 gap-12 mb-16 justify-items-center md:justify-items-stretch"> <div class="bg-white border border-black/10 rounded-3xl p-8 w-full"> <div class="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-5"> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> </div> <h3 class="text-xl font-semibold mb-3">E-mail</h3> <a href="mailto:liviu@northstarlabs.nl" class="text-lg text-black/80 hover:text-black transition-colors inline-flex items-center gap-2 group">
liviu@northstarlabs.nl
<svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> <p class="text-sm text-black/50 mt-4">
Reactie binnen één werkdag
</p> </div> <div class="bg-white border border-black/10 rounded-3xl p-8 w-full"> <div class="w-10 h-10 bg-black rounded-xl flex items-center justify-center mb-5"> <svg class="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"> <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> </div> <h3 class="text-xl font-semibold mb-3">Locatie</h3> <p class="text-lg text-black/80">
Nederland
</p> <p class="text-sm text-black/50 mt-4">
Remote samenwerking mogelijk
</p> </div> </div> <div class="bg-white rounded-3xl border border-black/10 p-8 md:p-12"> ${renderComponent($$result3, "ContactForm", $$ContactForm, {})} </div> </div> ` })} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "/Users/liviubuterez/Desktop/northstarlabs/src/pages/index.astro", void 0);

const $$file = "/Users/liviubuterez/Desktop/northstarlabs/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
