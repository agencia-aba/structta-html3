// ============================================================
// STRUCTTA — Header & Footer Components
// Altere aqui para refletir em todas as páginas
// ============================================================

const WHATSAPP_NUMBER = "5511963275113";
const WHATSAPP_MSG = encodeURIComponent("Olá Structta! Vim pelo site e gostaria de solicitar um orçamento.");
const MAPS_LINK = "https://maps.google.com/?q=R.+Hilda+de+Abreu+Cavanha,+31+Itapevi+SP";
const INSTAGRAM = "https://www.instagram.com/structtaesquadrias/";

function getWhatsAppLink(msg = WHATSAPP_MSG) {
  return `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${msg}`;
}

function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes("projetos")) return "projetos";
  if (path.includes("sobre")) return "sobre";
  if (path.includes("parceiros")) return "parceiros";
  if (path.includes("privacidade")) return "privacidade";
  return "inicio";
}

const SVG_WA = `<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

const SVG_IG = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`;

const SVG_PIN = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;

const SVG_PHONE = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`;

function renderHeader() {
  const current = getCurrentPage();
  const nav = [
    { href: "index.html", label: "Início", key: "inicio" },
    { href: "projetos.html", label: "Projetos", key: "projetos" },
    { href: "sobre.html", label: "Sobre", key: "sobre" },
    { href: "parceiros.html", label: "Parceiros", key: "parceiros" },
  ];
  const navItems = nav.map(item =>
    `<li><a href="${item.href}" class="nav-link ${current === item.key ? "active" : ""}">${item.label}</a></li>`
  ).join("");

  return `
  <header class="site-header" id="site-header" role="banner">
    <div class="header-inner">
      <a href="index.html" class="logo-link" aria-label="Structta — Página inicial">
        <img src="images/logo-site.png" alt="Structta Esquadrias de Alumínio" class="logo-img" width="160" height="44" loading="eager" fetchpriority="high" />
      </a>
      <nav class="main-nav" id="main-nav" aria-label="Navegação principal">
        <ul class="nav-list">${navItems}</ul>
      </nav>
      <div class="header-actions">
        <a href="${getWhatsAppLink()}" target="_blank" rel="noopener noreferrer" class="btn-orcamento" aria-label="Solicitar orçamento via WhatsApp">
          <span class="btn-icon">${SVG_WA}</span>
          <span class="btn-orcamento-txt">Solicitar Orçamento</span>
        </a>
        <button class="menu-toggle" id="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="main-nav">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>`;
}

function renderFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer" role="contentinfo" itemscope itemtype="https://schema.org/LocalBusiness">
    <meta itemprop="name" content="Structta Esquadrias de Alumínio" />
    <meta itemprop="telephone" content="+55-11-96327-5113" />

    <!-- Divisor dourado topo -->
    <div class="footer-divider"></div>

    <div class="footer-main">
      <div class="footer-main-inner">

        <!-- Brand -->
        <div class="footer-brand">
          <a href="index.html" aria-label="Structta — Página inicial">
            <img src="images/logo-site.png" alt="Structta Esquadrias de Alumínio" class="footer-logo" width="150" height="40" loading="lazy" />
          </a>
          <p class="footer-tagline" itemprop="description">
            Esquadrias de alumínio e vidro sob medida para projetos de alto padrão em São Paulo e região.
          </p>
          <div class="footer-badges">
            <span class="footer-badge">22+ Anos</span>
            <span class="footer-badge">60K m²</span>
            <span class="footer-badge">Alto Padrão</span>
          </div>
          <div class="footer-social">
            <a href="${INSTAGRAM}" target="_blank" rel="noopener noreferrer" aria-label="Structta no Instagram" class="footer-social-link">${SVG_IG} Instagram</a>
          </div>
        </div>

        <!-- Nav -->
        <div class="footer-col">
          <h3 class="footer-heading">Navegação</h3>
          <nav aria-label="Links do rodapé">
            <ul class="footer-link-list">
              <li><a href="index.html">Início</a></li>
              <li><a href="projetos.html">Projetos</a></li>
              <li><a href="sobre.html">A Empresa</a></li>
              <li><a href="parceiros.html">Parceiros</a></li>
              <li><a href="privacidade.html">Política de Privacidade</a></li>
            </ul>
          </nav>
        </div>

        <!-- Contato -->
        <div class="footer-col">
          <h3 class="footer-heading">Contato</h3>
          <address class="footer-address" itemprop="address" itemscope itemtype="https://schema.org/PostalAddress">
            <ul class="footer-contact-list">
              <li>
                ${SVG_PHONE}
                <a href="${getWhatsAppLink()}" target="_blank" rel="noopener noreferrer" itemprop="telephone">(11) 96327-5113</a>
              </li>
              <li class="footer-address-item">
                ${SVG_PIN}
                <a href="${MAPS_LINK}" target="_blank" rel="noopener noreferrer">
                  <span itemprop="streetAddress">R. Hilda de Abreu Cavanha, 31</span><br>
                  Jd. Vale do Sol II<br>
                  <span itemprop="addressLocality">Itapevi</span> — <span itemprop="addressRegion">SP</span>
                </a>
              </li>
            </ul>
          </address>
        </div>

        <!-- CTA -->
        <div class="footer-col footer-cta-col">
          <h3 class="footer-heading">Solicite um Orçamento</h3>
          <p class="footer-cta-text">Atendemos Alphaville, Tamboré, Aldeia da Serra, Granja Viana e toda a Grande São Paulo.</p>
          <a href="${getWhatsAppLink()}" target="_blank" rel="noopener noreferrer" class="footer-cta-btn">
            ${SVG_WA}
            Falar no WhatsApp
          </a>
        </div>

      </div>
    </div>

    <!-- Footer bottom -->
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <p class="footer-copy">&copy; ${year} Structta Esquadrias de Alumínio. Todos os direitos reservados.</p>
        <a href="privacidade.html" class="footer-privacy-link">Política de Privacidade</a>
        <a href="https://agenciaaba.com.br" target="_blank" rel="noopener noreferrer" class="footer-agency-link">
          Desenvolvido por <strong>Agência Aba</strong>
        </a>
      </div>
    </div>

    <!-- Mobile WA Bar — só visível no mobile -->
    <div class="mobile-wa-bar">
      <a href="${getWhatsAppLink()}" target="_blank" rel="noopener noreferrer" aria-label="Solicitar orçamento via WhatsApp">
        ${SVG_WA}
        <span>Solicitar Orçamento</span>
      </a>
    </div>
  </footer>`;
}

function renderCookieBanner() {
  try { if (localStorage.getItem("structta_cookies")) return; } catch(e) {}
  const banner = document.createElement("div");
  banner.className = "cookie-banner";
  banner.setAttribute("role", "dialog");
  banner.setAttribute("aria-label", "Aviso de uso de cookies");
  banner.innerHTML = `
    <div class="cookie-inner">
      <p class="cookie-text">
        Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa
        <a href="privacidade.html">Política de Privacidade</a>.
      </p>
      <div class="cookie-actions">
        <button class="cookie-recusar" id="cookie-recusar">Somente essenciais</button>
        <button class="cookie-aceitar" id="cookie-aceitar">Aceitar todos</button>
      </div>
    </div>`;
  document.body.appendChild(banner);
  requestAnimationFrame(() => requestAnimationFrame(() => banner.classList.add("visible")));

  function dismiss(val) {
    try { localStorage.setItem("structta_cookies", val); } catch(e) {}
    banner.classList.remove("visible");
    setTimeout(() => banner.remove(), 500);
  }
  banner.querySelector("#cookie-aceitar").addEventListener("click", () => dismiss("all"));
  banner.querySelector("#cookie-recusar").addEventListener("click", () => dismiss("essential"));
}

function initComponents() {
  const hPH = document.getElementById("header-placeholder");
  if (hPH) hPH.outerHTML = renderHeader();

  const fPH = document.getElementById("footer-placeholder");
  if (fPH) fPH.outerHTML = renderFooter();

  setTimeout(() => {
    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("main-nav");
    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        toggle.classList.toggle("active", open);
        toggle.setAttribute("aria-expanded", String(open));
      });
      document.addEventListener("click", e => {
        if (!e.target.closest(".site-header")) {
          nav.classList.remove("open");
          toggle.classList.remove("active");
          toggle.setAttribute("aria-expanded", "false");
        }
      });
    }
    const header = document.getElementById("site-header");
    if (header) {
      const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 60);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }
  }, 0);

  renderCookieBanner();
}

document.addEventListener("DOMContentLoaded", initComponents);
