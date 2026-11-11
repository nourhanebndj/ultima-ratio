/* Ultima Ratio — éléments communs (en-tête, pied de page, réseaux, checklists) */

/* ============================================================
   CONTACT ET RÉSEAUX — c'est le seul endroit à modifier
   pour changer un lien ou en ajouter un.
   ============================================================ */
const SOCIALS = [
  { id: "whatsapp", name: "WhatsApp", handle: "Écris-nous directement", url: "https://wa.me/213542308922" },
  { id: "facebook", name: "Facebook", handle: "Ultima Ratio", url: "https://www.facebook.com/profile.php?id=61588312723399" },
  { id: "phone",    name: "Téléphone", handle: "+213 542 30 89 22", url: "tel:+213542308922" }
];

const ICONS = {
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1z"/><path d="M9 8.5c0 3.5 3 6.500 6.500 6.500l1-1.800-2.200-1-1 .9c-1-.5-1.900-1.400-2.400-2.400l.9-1-1-2.200z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9.5"/><path d="M13 21v-8h2.6l.4-3h-3V8.4c0-.9.4-1.400 1.500-1.400H16V4.300c-.5-.1-1.300-.2-2.200-.2-2.200 0-3.800 1.400-3.800 3.900V10H7.500v3H10v8"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 3.500h3.500l1.500 4.500-2 1.500a12 12 0 0 0 6.500 6.500l1.500-2 4.500 1.500V19a2 2 0 0 1-2 2A16.500 16.500 0 0 1 3 5.500a2 2 0 0 1 2-2z"/></svg>'
};

const LOGO = '<img src="assets/img/logo.jpg" alt="Logo Ultima Ratio" width="46" height="46">';

const PAGES = [
  { href: "index.html", label: "Accueil" },
  { href: "campus-france.html", label: "Campus France" },
  { href: "paris-saclay.html", label: "Paris-Saclay" },
  { href: "entretien.html", label: "Entretiens" },
  { href: "index.html#reseaux", label: "Contact" }
];

function store(key, value) {
  try {
    if (value === undefined) return JSON.parse(localStorage.getItem(key) || "null");
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) { /* stockage indisponible : on continue sans mémoire */ }
  return null;
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const current = location.pathname.split("/").pop() || "index.html";
  const links = PAGES.map(p => {
    const active = p.href === current ? ' class="active" aria-current="page"' : "";
    return `<a href="${p.href}"${active}>${p.label}</a>`;
  }).join("");
  el.className = "site-header";
  el.innerHTML = `<div class="wrap">
    <a class="brand" href="index.html">${LOGO}<span>Ultima <em>Ratio</em></span></a>
    <button class="nav-toggle" aria-label="Ouvrir le menu" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="nav" aria-label="Navigation principale">${links}</nav>
  </div>`;
  const btn = el.querySelector(".nav-toggle"), nav = el.querySelector(".nav");
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", e => { if (e.target.tagName === "A") nav.classList.remove("open"); });
}

function socialAttrs(s) {
  if (!s.url || s.url === "#") return 'href="#reseaux"';
  return s.url.startsWith("tel:") ? `href="${s.url}"` : `href="${s.url}" target="_blank" rel="noopener"`;
}

function renderSocials() {
  const box = document.getElementById("socials");
  if (!box) return;
  box.innerHTML = SOCIALS.map(s =>
    `<a class="social" ${socialAttrs(s)}>${ICONS[s.id]}<span><strong>${s.name}</strong><small>${s.handle}</small></span></a>`
  ).join("");
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `<div class="wrap">
    <div class="cols">
      <div>
        <a class="brand" href="index.html">${LOGO}<span>Ultima <em>Ratio</em></span></a>
        <p><strong>Votre projet, notre engagement.</strong> Des guides clairs et gratuits pour réussir ta candidature en France : Campus France, Université Paris-Saclay et préparation aux entretiens.</p>
        <div class="foot-social">${SOCIALS.map(s => `<a ${socialAttrs(s)} aria-label="${s.name}">${ICONS[s.id]}</a>`).join("")}</div>
      </div>
      <div>
        <h4>Guides</h4>
        <ul>
          <li><a href="campus-france.html">Démarches Campus France</a></li>
          <li><a href="paris-saclay.html">Candidater à Paris-Saclay</a></li>
          <li><a href="entretien.html">Questions d'entretien</a></li>
        </ul>
      </div>
      <div>
        <h4>Sites officiels</h4>
        <ul>
          <li><a href="https://www.campusfrance.org/fr" target="_blank" rel="noopener">campusfrance.org</a></li>
          <li><a href="https://pastel.diplomatie.gouv.fr/etudesenfrance/" target="_blank" rel="noopener">Études en France</a></li>
          <li><a href="https://www.universite-paris-saclay.fr/" target="_blank" rel="noopener">universite-paris-saclay.fr</a></li>
          <li><a href="https://france-visas.gouv.fr/" target="_blank" rel="noopener">france-visas.gouv.fr</a></li>
        </ul>
      </div>
    </div>
    <p class="legal">© ${new Date().getFullYear()} Ultima Ratio. Site d'information indépendant, sans lien avec Campus France, l'Université Paris-Saclay ou les autorités consulaires. Les procédures, dates et montants évoluent chaque année : vérifie toujours sur les sites officiels avant d'agir.</p>
  </div>`;
}

/* Checklists mémorisées dans le navigateur */
function initChecklists() {
  document.querySelectorAll(".checklist[data-key]").forEach(list => {
    const key = "ur-check-" + list.dataset.key;
    const saved = store(key) || {};
    const boxes = [...list.querySelectorAll("input[type=checkbox]")];
    const bar = document.querySelector(`[data-progress="${list.dataset.key}"]`);
    const update = () => {
      const done = boxes.filter(b => b.checked).length;
      if (bar) {
        bar.querySelector("i").style.width = (done / boxes.length * 100) + "%";
        const label = bar.nextElementSibling;
        if (label) label.textContent = `${done} / ${boxes.length} éléments prêts`;
      }
    };
    boxes.forEach((b, i) => {
      b.checked = !!saved[i];
      b.addEventListener("change", () => { saved[i] = b.checked; store(key, saved); update(); });
    });
    update();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderSocials();
  renderFooter();
  initChecklists();
});
