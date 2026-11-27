/* Shared, runs once per visit: the music player, the lightbox, and page switching
   that swaps content in place so the music keeps playing between pages. */
(() => {
  if (window.__siteInit) return;
  window.__siteInit = true;
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- music: opt-in, nothing loads from Spotify until clicked ---------- */
  const plId = (String(S.LISTENING_PLAYLIST || "").match(/playlist\/([A-Za-z0-9]+)/) || [])[1];
  const L = S.LISTENING || [];
  const trackId = u => (String(u).match(/track\/([A-Za-z0-9]+)/) || [])[1];
  if (plId || L.length) {
    const box = document.createElement("aside");
    box.className = "listen"; box.id = "listen";
    box.innerHTML = `<button class="listen-toggle" id="listen-toggle" type="button" aria-expanded="false" aria-controls="listen-panel">♪ what i'm listening to</button>
      <div class="listen-panel" id="listen-panel" hidden>
        <p class="listen-note">${plId ? "a playlist of what i'm into lately. press play to load it (from spotify)." : "click a song to play it here (loads spotify)"}</p>
        <ol class="listen-list">${plId
          ? `<li><button type="button" data-pl><b>▶ play</b><span>loads the spotify player</span></button></li>`
          : L.map((t, i) => `<li><button type="button" data-i="${i}"><b>${esc(t.title)}</b><span>${esc(t.artist)}</span></button></li>`).join("")}</ol>
        <div class="listen-player"></div>
      </div>`;
    document.body.appendChild(box);
    const tog = $("#listen-toggle", box), panel = $("#listen-panel", box), list = $(".listen-list", box), player = $(".listen-player", box);
    tog.addEventListener("click", () => { const open = panel.hidden; panel.hidden = !open; tog.setAttribute("aria-expanded", open); });
    const frame = (src, h) => `<iframe title="Spotify player" src="${src}" width="100%" height="${h}" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>`;
    list.addEventListener("click", e => {
      if (e.target.closest("[data-pl]")) {
        list.hidden = true;
        player.innerHTML = frame(`https://open.spotify.com/embed/playlist/${plId}?utm_source=generator&theme=0`, 352);
        return;
      }
      const b = e.target.closest("[data-i]"); if (!b) return;
      const id = trackId(L[b.dataset.i].spotify); if (!id) return;
      list.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
      player.innerHTML = frame(`https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0`, 80);
    });
  }

  /* ---------- lightbox (one handler for every page) ---------- */
  document.addEventListener("click", e => {
    const lb = $("#lightbox"); if (!lb) return;
    if (e.target === lb || (e.target.closest("#lightbox") && e.target.tagName === "BUTTON")) { lb.close(); return; }
    const f = e.target.closest("figure[data-full]"); if (!f) return;
    $("img", lb).src = f.dataset.full;
    $("p", lb).textContent = f.querySelector("figcaption")?.textContent || "";
    lb.showModal();
  });

  /* ---------- page switching without reloading ---------- */
  const KEEP = el => el.id === "listen" || el.classList?.contains("defs");
  const pageScripts = ["main.js", "collection.js", "encounters.js"];

  async function go(url, push) {
    let html;
    try {
      const r = await fetch(url.pathname + url.search, { credentials: "same-origin" });
      if (!r.ok) throw 0;
      html = await r.text();
    } catch (_) { location.href = url.href; return; }   // e.g. opened as a local file: normal navigation
    const doc = new DOMParser().parseFromString(html, "text/html");
    try { sessionStorage.setItem("printed", "1"); } catch (_) {}   // no replaying the print mid-visit
    document.title = doc.title;
    // swap body attributes
    [...document.body.attributes].forEach(a => document.body.removeAttribute(a.name));
    [...doc.body.attributes].forEach(a => document.body.setAttribute(a.name, a.value));
    // swap content, keeping the music player
    [...document.body.children].forEach(el => { if (!KEEP(el)) el.remove(); });
    const listen = $("#listen");
    const scripts = [];
    [...doc.body.children].forEach(el => {
      if (el.tagName === "SCRIPT") { scripts.push(el.getAttribute("src")); return; }
      if (el.classList?.contains("defs") && $(".defs")) return;
      document.body.insertBefore(document.importNode(el, true), listen || null);
    });
    if (push) history.pushState({}, "", url.href);
    // run the page's own script
    const src = scripts.find(s => pageScripts.includes((s || "").split("?")[0]));
    if (src) {
      const s = document.createElement("script");
      s.src = src + (src.includes("?") ? "&" : "?") + "v=" + Date.now();
      document.body.insertBefore(s, listen || null);
      await new Promise(res => { s.onload = s.onerror = res; });
    }
    const t = url.hash && document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (t) t.scrollIntoView(); else scrollTo(0, 0);
  }

  document.addEventListener("click", e => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest("a[href]"); if (!a || a.target === "_blank" || a.hasAttribute("download")) return;
    const url = new URL(a.href, location.href);
    if (url.origin !== location.origin) return;
    if (!/(\/|\.html)$/.test(url.pathname)) return;               // only our pages, not pdfs/images
    if (url.pathname === location.pathname && url.search === location.search) return;   // same-page anchors: default
    e.preventDefault();
    go(url, true);
  });
  addEventListener("popstate", () => go(new URL(location.href), false));
})();
