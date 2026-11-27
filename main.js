(() => {
  const S = window.SITE, body = document.body;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  /* ---------- fill content ---------- */
  const nameHTML = `<span>${esc(S.name.print)}</span>`;
  $$(".sheet .nm").forEach(n => (n.innerHTML = nameHTML));
  // warm speckles, final print only
  { let sd = 5; const r = () => (sd = (sd * 16807) % 2147483647) / 2147483647; let d = "";
    for (let i = 0; i < 70; i++) { const cx = 560 + (r() - .5) * 900 * r(), cy = 420 + (r() - .5) * 760 * r();
      d += `<circle cx="${cx.toFixed(0)}" cy="${cy.toFixed(0)}" r="${(1.6 + r() * 2.4).toFixed(1)}" fill="#e2875a" opacity="${(.35 + r() * .5).toFixed(2)}"/>`; }
    $(".rinse .speck").innerHTML = `<svg viewBox="0 0 1600 840" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">${d}</svg>`; }
  $("[data-about]").innerHTML = S.about;
  $("[data-year]").textContent = new Date().getFullYear();
  $$("[data-cv]").forEach(a => (a.href = S.contact.cv));

  const c = S.contact;
  const others = [
    c.linkedin && `<a href="${esc(c.linkedin)}" target="_blank" rel="noopener">LinkedIn</a>`,
    c.github && `<a href="${esc(c.github)}" target="_blank" rel="noopener">GitHub</a>`
  ].filter(Boolean);
  $("[data-contact]").innerHTML = [
    others.length && `Other websites you can find me on: ${others.join(", ")}`,
    c.cv && `For more details, you can find my CV <a href="${esc(c.cv)}" target="_blank" rel="noopener">here</a>.`
  ].filter(Boolean).join("<br><br>");

  $("[data-research]").innerHTML = S.research.map((r, i) => {
    const tag = r.link ? "a" : "div";
    const href = r.link ? ` href="${esc(r.link)}" target="_blank" rel="noopener"` : "";
    return `<${tag} class="print"${href}>
      <span class="n">plate ${String(i + 1).padStart(2, "0")}</span>${r.link ? '<span class="go">↗</span>' : ""}
      <h4>${esc(r.title)}</h4><p>${esc(r.blurb)}</p>
      <div class="tags">${(r.tags || []).map(t => `<span>${esc(t)}</span>`).join("")}</div>
    </${tag}>`;
  }).join("");


  const empty = (what, dir) =>
    `<div class="empty">no ${what} yet. Drop images in <code>${dir}</code> and list them in <code>content.js</code>.</div>`;

  $("[data-art]").innerHTML = Object.entries(S.ART).map(([key, col], i) => {
    const all = col.sections ? col.sections.flatMap(x => x.pieces) : col.pieces;
    const cover = all.find(p => p.src);
    const n = all.length;
    return `<a class="print plate-link" href="${key}.html">
      ${cover ? `<span class="cover" style="background-image:url('${esc(cover.src)}')"></span>` : ""}
      <span class="n">collection ${String(i + 1).padStart(2, "0")}</span><span class="go">→</span>
      <h4>${esc(key)}</h4>
      <div class="tags"><span>${n ? n + (n === 1 ? " piece" : " pieces") : "coming soon"}</span></div>
    </a>`;
  }).join("") + (() => {
    const it = S.ENCOUNTERS.items, cover = it[0];
    return `<a class="print plate-link" href="encounters.html">
      ${cover ? `<span class="cover" style="background-image:url('${esc(cover.src)}')"></span>` : ""}
      <span class="n">collection ${String(Object.keys(S.ART).length + 1).padStart(2, "0")}</span><span class="go">→</span>
      <h4>encounters</h4>
      <div class="tags"><span>${it.length ? it.length + " seen" : "coming soon"}</span></div>
    </a>`;
  })();
  const photos = $("[data-photos]");
  photos.innerHTML = S.PHOTOS.map(g => `<div class="photo-group">
      ${g.title ? `<p class="camera">${esc(g.title)}</p>` : ""}
      <div class="masonry">${g.photos.map(p => `<figure data-full="${esc(p.src)}"><img src="${esc(p.src)}" alt="${esc(p.caption || "photograph")}" loading="lazy">
        ${p.caption ? `<figcaption>${esc(p.caption)}</figcaption>` : ""}</figure>`).join("")}</div>
    </div>`).join("");

  $("[data-misc]").innerHTML = S.MISC.map(m =>
    `<div class="item"><b>${esc(m.title)}</b>${m.link ? `<a href="${esc(m.link)}" target="_blank" rel="noopener">${esc(m.text)}</a>` : esc(m.text)}</div>`).join("");

  /* opt-in listening list: no Spotify request until a song is clicked */
  const L = S.LISTENING || [];
  const trackId = u => (String(u).match(/track\/([A-Za-z0-9]+)/) || [])[1];
  if (L.length) {
    const box = $("#listen"), tog = $("#listen-toggle"), panel = $("#listen-panel"), player = $("[data-player]");
    box.hidden = false;
    $("[data-listening]").innerHTML = L.map((t, i) =>
      `<li><button type="button" data-i="${i}"><b>${esc(t.title)}</b><span>${esc(t.artist || "")}</span></button></li>`).join("");
    tog.addEventListener("click", () => {
      const open = panel.hidden; panel.hidden = !open; tog.setAttribute("aria-expanded", open);
    });
    $("[data-listening]").addEventListener("click", e => {
      const b = e.target.closest("button[data-i]"); if (!b) return;
      const id = trackId(L[b.dataset.i].spotify); if (!id) return;
      $$(".listen-list button").forEach(x => x.classList.toggle("on", x === b));
      player.innerHTML = `<iframe title="Spotify player" src="https://open.spotify.com/embed/track/${id}?utm_source=generator&theme=0" width="100%" height="80" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    });
  }

  /* photo tone toggle */
  $("#tone").addEventListener("click", e => {
    const on = photos.classList.toggle("cyan-on"); photos.querySelectorAll(".masonry").forEach(m => m.classList.toggle("cyan-on", on));
    e.currentTarget.setAttribute("aria-pressed", on);
  });

  /* lightbox */
  const lb = $("#lightbox");
  document.addEventListener("click", e => {
    const f = e.target.closest("figure[data-full]");
    if (!f) return;
    $("img", lb).src = f.dataset.full;
    $("p", lb).textContent = f.querySelector("figcaption")?.textContent || "";
    lb.showModal();
  });
  lb.addEventListener("click", e => { if (e.target === lb || e.target.tagName === "BUTTON") lb.close(); });


  /* ---------- the print sequence ---------- */
  const STAGES = ["coat", "expose", "lift", "rinse", "dry"];
  const AT = { coat: 80, expose: 1300, lift: 3700, rinse: 4500, dry: 6500 };
  let timers = [];

  const mark = () => {};
  const setStage = s => {
    const idx = STAGES.indexOf(s);
    STAGES.forEach((x, i) => body.classList.toggle("s-" + x, i <= idx));
    body.dataset.stage = s; mark(s);
  };
  const finish = () => { timers.forEach(clearTimeout); timers = []; setStage("dry"); remember(); };
  const remember = () => { try { sessionStorage.setItem("printed", "1"); } catch (_) {} };
  const seen = () => { try { return sessionStorage.getItem("printed") === "1"; } catch (_) { return false; } };

  function play() {
    timers.forEach(clearTimeout); timers = [];
    STAGES.forEach(x => body.classList.remove("s-" + x));
    void body.offsetWidth; // restart transitions
    STAGES.forEach(s => timers.push(setTimeout(() => { setStage(s); if (s === "dry") remember(); }, AT[s])));
  }

  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const deepLink = location.hash && location.hash !== "#top";
  if (reduced || seen() || deepLink) { body.classList.add("instant"); setStage("dry"); requestAnimationFrame(() => requestAnimationFrame(() => body.classList.remove("instant"))); } else play();

  $("#skip").addEventListener("click", finish);
  $("#sheet").addEventListener("click", () => { if (!body.classList.contains("s-dry")) finish(); });
  addEventListener("keydown", e => { if (!body.classList.contains("s-dry") && (e.key === "Escape" || e.key === "Enter")) finish(); });
  $$(".top a, .skip-link").forEach(a => a.addEventListener("click", finish));
  $("#replay").addEventListener("click", () => { scrollTo({ top: 0, behavior: "smooth" }); setTimeout(play, 450); });
})();
