/* PEPTO CONFIG - Edit these values */
const CONFIG = {
  name: "PEPTO",
  ticker: "$PEPTO",
  // mintAddress removed as requested - add back if you need to display it again
  // mintAddress: "Ak9VSiYdt6959zRAPEZxWqfv5owTDReSDFdU6dktpump",
  pumpfunUrl: "https://pump.fun/coin/Ak9VSiYdt6959zRAPEZxWqfv5owTDReSDFdU6dktpump",
  xUrl: "https://x.com/PEPTODANGEN",
};

(function () {
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // Apply CONFIG to DOM
  function initConfig() {
    const pumpUrl = CONFIG.pumpfunUrl && CONFIG.pumpfunUrl.trim() !== "" ? CONFIG.pumpfunUrl : "#";
    const xUrl = CONFIG.xUrl && CONFIG.xUrl.trim() !== "" ? CONFIG.xUrl : "#";

    // Buy buttons
    const buyIds = ["#heroBuyBtn", "#navBuyBtn", "#mobileBuyBtn", "#tokenBuyBtn", "#pumpCard"];
    buyIds.forEach(id => {
      const el = $(id);
      if (el) el.href = pumpUrl;
    });

    // Community cards + footer (X only - Telegram removed)
    const xCard = $("#xCard"), footerX = $("#footerX");
    if (xCard) xCard.href = xUrl;
    if (footerX) footerX.href = xUrl;

    const footerPump = $("#footerPump");
    if (footerPump) footerPump.href = pumpUrl;

    // OG url
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.content = window.location.href;
  }

  // Copy mint address
  function initCopy() {
    const btn = $("#copyBtn");
    const mintEl = $("#mintAddress");
    const feedback = $("#copyFeedback");
    const copyText = $("#copyText");
    const toast = $("#toast");
    if (!btn || !mintEl) return;

    function showToast(msg) {
      if (!toast) return;
      toast.textContent = msg;
      toast.classList.add("show");
      clearTimeout(showToast._t);
      showToast._t = setTimeout(() => toast.classList.remove("show"), 2200);
    }

    async function copy() {
      const text = (CONFIG.mintAddress && CONFIG.mintAddress.trim()) || mintEl.textContent.trim();
      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(text);
        } else {
          const ta = document.createElement("textarea");
          ta.value = text;
          ta.style.position = "fixed";
          ta.style.opacity = "0";
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          ta.remove();
        }
        if (copyText) copyText.textContent = "COPIED!";
        if (feedback) feedback.textContent = "✓ Copied to clipboard";
        showToast("Mint address copied ✓");
        setTimeout(() => {
          if (copyText) copyText.textContent = "COPY";
          if (feedback) feedback.textContent = "";
        }, 2000);
      } catch (e) {
        if (feedback) feedback.textContent = "Copy failed — select and copy manually";
        showToast("Copy failed — please copy manually");
      }
    }

    btn.addEventListener("click", copy);
  }

  // Mobile menu
  function initMobile() {
    const ham = $("#hamburger");
    const menu = $("#mobileMenu");
    if (!ham || !menu) return;

    function toggle(open) {
      const isOpen = open !== undefined ? open : !menu.classList.contains("open");
      menu.classList.toggle("open", isOpen);
      ham.setAttribute("aria-expanded", String(isOpen));
      menu.setAttribute("aria-hidden", String(!isOpen));
    }

    ham.addEventListener("click", () => toggle());
    menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => toggle(false)));

    // close on outside click
    document.addEventListener("click", (e) => {
      if (!menu.classList.contains("open")) return;
      if (menu.contains(e.target) || ham.contains(e.target)) return;
      toggle(false);
    });
  }

  // Smooth scroll (enhanced)
  function initScroll() {
    $$('a[href^="#"]').forEach(a => {
      a.addEventListener("click", (e) => {
        const href = a.getAttribute("href");
        if (!href || href === "#") return;
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
        history.pushState(null, "", href);
      });
    });
  }

  // Image error handling already inline, but also ensure fallback observer
  function initImageCheck() {
    const img = $("#peptoImage");
    const fallback = $("#memeFallback");
    if (!img || !fallback) return;
    // If image loads but is broken (naturalWidth 0 after load)
    img.addEventListener("error", () => {
      img.style.display = "none";
      fallback.style.display = "flex";
    });
    // Check after timeout if image didn't load
    setTimeout(() => {
      if (img.naturalWidth === 0 && img.complete) {
        img.style.display = "none";
        fallback.style.display = "flex";
      }
    }, 1200);
  }

  // Dev placeholder (mint removed)
  function checkMintPlaceholder() {
    // mint address display removed as requested
  }

  document.addEventListener("DOMContentLoaded", () => {
    initConfig();
    initCopy();
    initMobile();
    initScroll();
    initImageCheck();
    checkMintPlaceholder();
  });

  // Expose for debugging
  window.PEPTO_CONFIG = CONFIG;
})();
