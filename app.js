/*
  Developed by Mohammad Rameez Imdad (Rameez Scripts)
  WhatsApp: https://wa.me/923224083545 (For Custom Projects)
  YouTube: https://www.youtube.com/@rameezimdad (Subscribe for more!)
*/

const REPO = "rameezimdad/Rameez-DESIGN-MD-FILES";

// name | slug(folder) | category | one-liner
const DESIGNS = [
  // AI & LLM Platforms
  ["Claude", "claude", "AI & LLM Platforms", "Anthropic's AI assistant. Warm terracotta accent, clean editorial layout."],
  ["Cohere", "cohere", "AI & LLM Platforms", "Enterprise AI platform. Vibrant gradients, data-rich dashboard aesthetic."],
  ["ElevenLabs", "elevenlabs", "AI & LLM Platforms", "AI voice platform. Dark cinematic UI, audio-waveform aesthetics."],
  ["Minimax", "minimax", "AI & LLM Platforms", "AI model provider. Bold dark interface with neon accents."],
  ["Mistral AI", "mistral.ai", "AI & LLM Platforms", "Open-weight LLM provider. French-engineered minimalism, purple-toned."],
  ["Ollama", "ollama", "AI & LLM Platforms", "Run LLMs locally. Terminal-first, monochrome simplicity."],
  ["OpenCode AI", "opencode.ai", "AI & LLM Platforms", "AI coding platform. Developer-centric dark theme."],
  ["Replicate", "replicate", "AI & LLM Platforms", "Run ML models via API. Clean white canvas, code-forward."],
  ["Runway", "runwayml", "AI & LLM Platforms", "AI creative-tools platform. Editorial film-festival aesthetic, cinematic dark heroes."],
  ["Together AI", "together.ai", "AI & LLM Platforms", "Open-source AI infrastructure. Technical, blueprint-style design."],
  ["xAI", "x.ai", "AI & LLM Platforms", "Elon Musk's AI lab. Stark monochrome, futuristic minimalism."],

  // Developer Tools & IDEs
  ["Cursor", "cursor", "Developer Tools & IDEs", "AI-first code editor. Sleek dark interface, gradient accents."],
  ["Expo", "expo", "Developer Tools & IDEs", "React Native platform. Dark theme, tight letter-spacing, code-centric."],
  ["Lovable", "lovable", "Developer Tools & IDEs", "AI full-stack builder. Playful gradients, friendly dev aesthetic."],
  ["Raycast", "raycast", "Developer Tools & IDEs", "Productivity launcher. Sleek dark chrome, vibrant gradient accents."],
  ["Superhuman", "superhuman", "Developer Tools & IDEs", "Fast email client. Premium dark UI, keyboard-first, purple glow."],
  ["Vercel", "vercel", "Developer Tools & IDEs", "Frontend deployment platform. Black and white precision, Geist font."],
  ["Warp", "warp", "Developer Tools & IDEs", "Modern terminal. Dark IDE-like interface, block-based command UI."],

  // Backend, Database & DevOps
  ["ClickHouse", "clickhouse", "Backend, Database & DevOps", "Fast analytics database. Yellow-accented, technical documentation style."],
  ["Composio", "composio", "Backend, Database & DevOps", "Tool integration platform. Modern dark with colorful integration icons."],
  ["HashiCorp", "hashicorp", "Backend, Database & DevOps", "Infrastructure automation. Enterprise-clean, black and white."],
  ["MongoDB", "mongodb", "Backend, Database & DevOps", "Document database. Green leaf branding, developer documentation focus."],
  ["PostHog", "posthog", "Backend, Database & DevOps", "Product analytics. Playful hedgehog branding, developer-friendly dark UI."],
  ["Sanity", "sanity", "Backend, Database & DevOps", "Headless content platform. Dark editorial surface, huge display type, coral-red accent."],
  ["Sentry", "sentry", "Backend, Database & DevOps", "Error monitoring. Dark dashboard, data-dense, pink-purple accent."],
  ["Supabase", "supabase", "Backend, Database & DevOps", "Open-source Firebase alternative. Dark emerald theme, code-first."],

  // Productivity & SaaS
  ["Cal.com", "cal", "Productivity & SaaS", "Open-source scheduling. Clean neutral UI, developer-oriented simplicity."],
  ["Intercom", "intercom", "Productivity & SaaS", "Customer messaging. Friendly blue palette, conversational UI patterns."],
  ["Linear", "linear.app", "Productivity & SaaS", "Project management for engineers. Ultra-minimal, precise, purple accent."],
  ["Mintlify", "mintlify", "Productivity & SaaS", "Documentation platform. Clean, green-accented, reading-optimized."],
  ["Notion", "notion", "Productivity & SaaS", "All-in-one workspace. Warm minimalism, serif headings, soft surfaces."],
  ["Resend", "resend", "Productivity & SaaS", "Email API for developers. Minimal dark theme, monospace accents."],
  ["Zapier", "zapier", "Productivity & SaaS", "Automation platform. Warm orange, friendly illustration-driven."],

  // Design & Creative Tools
  ["Airtable", "airtable", "Design & Creative Tools", "Spreadsheet-database hybrid. Colorful, friendly, structured data aesthetic."],
  ["Clay", "clay", "Design & Creative Tools", "Creative agency. Organic shapes, soft gradients, art-directed layout."],
  ["Figma", "figma", "Design & Creative Tools", "Collaborative design tool. Vibrant multi-color, playful yet professional."],
  ["Framer", "framer", "Design & Creative Tools", "Website builder. Bold black and blue, motion-first, design-forward."],
  ["Miro", "miro", "Design & Creative Tools", "Visual collaboration. Bright yellow accent, infinite canvas aesthetic."],
  ["Webflow", "webflow", "Design & Creative Tools", "Visual web builder. Blue-accented, polished marketing site aesthetic."],

  // Fintech & Crypto
  ["Binance", "binance", "Fintech & Crypto", "Crypto exchange. Bold Binance Yellow on monochrome, trading-floor urgency."],
  ["Coinbase", "coinbase", "Fintech & Crypto", "Crypto exchange. Clean blue identity, trust-focused, institutional feel."],
  ["Kraken", "kraken", "Fintech & Crypto", "Crypto trading platform. Purple-accented dark UI, data-dense dashboards."],
  ["Mastercard", "mastercard", "Fintech & Crypto", "Global payments network. Warm cream canvas, orbital pill shapes, editorial warmth."],
  ["Revolut", "revolut", "Fintech & Crypto", "Digital banking. Sleek dark interface, gradient cards, fintech precision."],
  ["Stripe", "stripe", "Fintech & Crypto", "Payment infrastructure. Signature purple gradients, weight-300 elegance."],
  ["Wise", "wise", "Fintech & Crypto", "International money transfer. Bright green accent, friendly and clear."],

  // E-commerce & Retail
  ["Airbnb", "airbnb", "E-commerce & Retail", "Travel marketplace. Warm coral accent, photography-driven, rounded UI."],
  ["Meta", "meta", "E-commerce & Retail", "Tech retail store. Photography-first, binary light/dark surfaces, Meta Blue CTAs."],
  ["Nike", "nike", "E-commerce & Retail", "Athletic retail. Monochrome UI, massive uppercase Futura, full-bleed photography."],
  ["Shopify", "shopify", "E-commerce & Retail", "E-commerce platform. Dark-first cinematic, neon green accent, ultra-light display type."],
  ["Starbucks", "starbucks", "E-commerce & Retail", "Coffee retail flagship. Four-tier earth-green system, warm cream canvas, SoDoSans type."],

  // Media & Consumer Tech
  ["Apple", "apple", "Media & Consumer Tech", "Consumer electronics. Premium white space, SF Pro, cinematic imagery."],
  ["HP", "hp", "Media & Consumer Tech", "PC and printer maker. Pure white canvas, HP Electric Blue CTA, geometric Forma type."],
  ["IBM", "ibm", "Media & Consumer Tech", "Enterprise technology. Carbon design system, structured blue palette."],
  ["NVIDIA", "nvidia", "Media & Consumer Tech", "GPU computing. Green-black energy, technical power aesthetic."],
  ["Pinterest", "pinterest", "Media & Consumer Tech", "Visual discovery platform. Red accent, masonry grid, image-first."],
  ["PlayStation", "playstation", "Media & Consumer Tech", "Gaming console retail. Three-surface channel layout, cyan hover-scale interaction."],
  ["SpaceX", "spacex", "Media & Consumer Tech", "Space technology. Stark black and white, full-bleed imagery, futuristic."],
  ["Spotify", "spotify", "Media & Consumer Tech", "Music streaming. Vibrant green on dark, bold type, album-art-driven."],
  ["The Verge", "theverge", "Media & Consumer Tech", "Tech editorial media. Acid-mint and ultraviolet accents, Manuka display type."],
  ["Uber", "uber", "Media & Consumer Tech", "Mobility platform. Bold black and white, tight type, urban energy."],
  ["Vodafone", "vodafone", "Media & Consumer Tech", "Global telecom brand. Monumental uppercase display, Vodafone Red chapter bands."],
  ["WIRED", "wired", "Media & Consumer Tech", "Tech magazine. Paper-white broadsheet density, custom serif, ink-blue links."],

  // Automotive
  ["BMW", "bmw", "Automotive", "Luxury automotive. Dark premium surfaces, precise German engineering aesthetic."],
  ["BMW M", "bmw-m", "Automotive", "Performance automotive. Motorsport-inspired contrast, M color accents."],
  ["Bugatti", "bugatti", "Automotive", "Luxury hypercar. Cinema-black canvas, monochrome austerity, monumental display type."],
  ["Ferrari", "ferrari", "Automotive", "Luxury automotive. Chiaroscuro black-white editorial, Ferrari Red with extreme sparseness."],
  ["Lamborghini", "lamborghini", "Automotive", "Luxury automotive. True black cathedral, gold accent, LamboType custom grotesk."],
  ["Renault", "renault", "Automotive", "French automotive. Vivid aurora gradients, NouvelR typeface, zero-radius buttons."],
  ["Tesla", "tesla", "Automotive", "Electric vehicles. Radical subtraction, cinematic full-viewport photography, Universal Sans."],

  // Retro Web
  ["Dell (1996)", "dell-1996", "Retro Web", "Catalog-era enterprise web. Black page frame, flat color-block ribbon cards, GIF stickers."],
  ["Nintendo.com (2001)", "nintendo-2001", "Retro Web", "Y2K console chrome. Brushed metal panels, halftone carbon nav, pixel Mario welcome."],
];

const CATEGORIES = [];
DESIGNS.forEach(d => { if (!CATEGORIES.includes(d[2])) CATEGORIES.push(d[2]); });

const $ = sel => document.querySelector(sel);
const esc = s => s.replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const blobUrl = slug => `https://github.com/${REPO}/blob/main/design-md/${slug}/DESIGN.md`;
const rawPath = slug => `design-md/${slug}/DESIGN.md`;

let activeCat = "All";
let query = "";

/* ---------- render catalog ---------- */
function matches(d) {
  const inCat = activeCat === "All" || d[2] === activeCat;
  if (!inCat) return false;
  if (!query) return true;
  const hay = (d[0] + " " + d[2] + " " + d[3]).toLowerCase();
  return hay.includes(query);
}

function cardHtml(d) {
  const [name, slug, , desc] = d;
  return `
    <article class="card" data-slug="${slug}" data-name="${esc(name)}" tabindex="0" role="button" aria-label="Preview ${esc(name)} DESIGN.md">
      <div class="card__top">
        <span class="card__mono">${esc(name[0])}</span>
        <h3 class="card__name">${esc(name)}</h3>
      </div>
      <p class="card__desc">${esc(desc)}</p>
      <div class="card__foot">
        <span class="card__act" data-act="preview">${icon("eye")} Preview</span>
        <span class="card__act" data-act="copy">${icon("copy")} Copy</span>
      </div>
    </article>`;
}

function renderCatalog() {
  const mount = $("#catalog");
  const visible = DESIGNS.filter(matches);
  if (!visible.length) {
    mount.innerHTML = `<p class="no-results">No designs match "<strong>${esc(query)}</strong>". Try another search.</p>`;
    return;
  }
  let html = "";
  const cats = activeCat === "All" ? CATEGORIES : [activeCat];
  cats.forEach(cat => {
    const items = visible.filter(d => d[2] === cat);
    if (!items.length) return;
    html += `<div class="cat-group">
      <h2 class="cat-group__title">${esc(cat)} <span class="cat-group__count">${items.length}</span></h2>
      <div class="grid">${items.map(cardHtml).join("")}</div>
    </div>`;
  });
  mount.innerHTML = html;
}

function renderFilters() {
  const bar = $("#filters");
  const all = ["All", ...CATEGORIES];
  bar.innerHTML = all.map(c =>
    `<button class="filter${c === activeCat ? " filter--active" : ""}" data-cat="${esc(c)}">${esc(c)}</button>`
  ).join("");
}

/* ---------- icons (inline svg, single-weight) ---------- */
function icon(name) {
  const p = {
    eye: '<path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5Z"/><circle cx="8" cy="8" r="2.2"/>',
    copy: '<rect x="5" y="5" width="8" height="9" rx="1.5"/><path d="M3 11V3a1.5 1.5 0 0 1 1.5-1.5H10"/>',
    search: '<circle cx="7" cy="7" r="5"/><path d="M14 14l-3.2-3.2"/>',
    heart: '<path d="M8 14S2 10.4 2 6.2A3.2 3.2 0 0 1 8 4a3.2 3.2 0 0 1 6 2.2C14 10.4 8 14 8 14Z"/>',
    github: '<path d="M8 1a7 7 0 0 0-2.2 13.6c.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.8-.78-1.02-.78-1.02-.64-.43.05-.43.05-.43.7.05 1.07.72 1.07.72.63 1.07 1.64.76 2.04.58.06-.45.25-.76.45-.94-1.56-.18-3.2-.78-3.2-3.46 0-.76.27-1.39.72-1.88-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.92.72a6.7 6.7 0 0 1 3.5 0c1.33-.91 1.92-.72 1.92-.72.38.97.14 1.69.07 1.87.45.49.72 1.12.72 1.88 0 2.69-1.64 3.28-3.2 3.45.25.22.48.66.48 1.33v1.97c0 .19.13.4.49.34A7 7 0 0 0 8 1Z"/>',
  }[name] || "";
  return `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${p}</svg>`;
}

/* ---------- copy DESIGN.md ---------- */
async function copyDesign(slug, name) {
  try {
    const res = await fetch(rawPath(slug));
    if (!res.ok) throw new Error("fetch failed");
    const text = await res.text();
    await navigator.clipboard.writeText(text);
    toast(`Copied ${name} DESIGN.md`);
  } catch (e) {
    toast("Copy failed — opening on GitHub", true);
    window.open(blobUrl(slug), "_blank", "noopener");
  }
}

/* ---------- modal preview ---------- */
function stripFrontmatter(md) {
  if (md.startsWith("---")) {
    const end = md.indexOf("\n---", 3);
    if (end !== -1) return md.slice(md.indexOf("\n", end + 1) + 1).trimStart();
  }
  return md;
}

async function openModal(slug, name) {
  const modal = $("#modal");
  $("#modalTitle").textContent = name;
  $("#modalBody").innerHTML = `<p class="modal__loading">Loading DESIGN.md…</p>`;
  $("#modalGithub").href = blobUrl(slug);
  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  modal.dataset.slug = slug;
  modal.dataset.name = name;
  try {
    const res = await fetch(rawPath(slug));
    if (!res.ok) throw new Error("fetch failed");
    let md = stripFrontmatter(await res.text());
    const html = window.marked ? window.marked.parse(md) : `<pre>${esc(md)}</pre>`;
    $("#modalBody").innerHTML = `<div class="md-body">${html}</div>`;
    $("#modal").scrollTop = 0;
  } catch (e) {
    $("#modalBody").innerHTML = `<p class="modal__loading">Couldn't load the file here. <a href="${blobUrl(slug)}" target="_blank" rel="noopener" style="color:var(--blue)">Open ${esc(name)} on GitHub →</a></p>`;
  }
}

function closeModal() {
  $("#modal").classList.remove("open");
  document.body.style.overflow = "";
}

/* ---------- toast ---------- */
let toastTimer;
function toast(msg, isError) {
  const t = $("#toast");
  t.innerHTML = `${isError ? "" : '<span class="ok">' + icon("heart") + "</span>"}${esc(msg)}`;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}

/* ---------- events ---------- */
function bind() {
  // scroll nav toggle
  const nav = $("#nav");
  const onScroll = () => nav.classList.toggle("nav--solid", window.scrollY > 60);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // mobile burger
  $("#burger").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
  $("#navLinks").addEventListener("click", e => { if (e.target.closest("a")) $("#navLinks").classList.remove("open"); });

  // search
  $("#search").addEventListener("input", e => { query = e.target.value.trim().toLowerCase(); renderCatalog(); });

  // filters
  $("#filters").addEventListener("click", e => {
    const b = e.target.closest(".filter");
    if (!b) return;
    activeCat = b.dataset.cat;
    renderFilters();
    renderCatalog();
    $("#collection").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  // card actions (delegated)
  $("#catalog").addEventListener("click", e => {
    const card = e.target.closest(".card");
    if (!card) return;
    const { slug, name } = card.dataset;
    const act = e.target.closest("[data-act]");
    if (act && act.dataset.act === "copy") { copyDesign(slug, name); return; }
    openModal(slug, name);
  });
  $("#catalog").addEventListener("keydown", e => {
    if (e.key !== "Enter" && e.key !== " ") return;
    const card = e.target.closest(".card");
    if (!card) return;
    e.preventDefault();
    openModal(card.dataset.slug, card.dataset.name);
  });

  // modal
  $("#modalClose").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", e => { if (e.target.id === "modal") closeModal(); });
  $("#modalCopy").addEventListener("click", () => {
    const m = $("#modal");
    copyDesign(m.dataset.slug, m.dataset.name);
  });
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
}

/* ---------- init ---------- */
document.addEventListener("DOMContentLoaded", () => {
  $("#statDesigns").textContent = DESIGNS.length;
  $("#statCats").textContent = CATEGORIES.length;
  $("#heroCount").textContent = DESIGNS.length;
  renderFilters();
  renderCatalog();
  bind();
});
