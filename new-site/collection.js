(() => {
  const S = window.SITE, key = document.body.dataset.collection, col = S.ART[key];
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  document.title = `${key} · ${S.name.print}`;
  $("[data-title]").textContent = key;
  $("[data-blurb]").innerHTML = col.blurb || "";
  $$("[data-cv]").forEach(a => (a.href = S.contact.cv));
  function $$(s) { return [...document.querySelectorAll(s)]; }

  $("[data-gallery]").innerHTML = col.pieces.length
    ? col.pieces.map(p => `<figure data-full="${esc(p.src)}"><img src="${esc(p.src)}" alt="${esc(p.title || key)}" loading="lazy">
        <figcaption><b>${esc(p.title || "untitled")}</b>${esc([p.note, p.year].filter(Boolean).join(" · "))}</figcaption></figure>`).join("")
    : `<div class="empty">nothing here yet. Put images in <code>img/art/${esc(key)}/</code> and list them under <code>ART.${esc(key)}</code> in <code>content.js</code>.</div>`;

  $("[data-pagenav]").innerHTML = [...Object.keys(S.ART), "encounters"]
    .map(k => `<a href="${k}.html"${k === key ? ' class="on" aria-current="page"' : ""}>${k}</a>`).join("");
  $("[data-year]").textContent = new Date().getFullYear();

  const lb = $("#lightbox");
  document.addEventListener("click", e => {
    const f = e.target.closest("figure[data-full]"); if (!f) return;
    $("img", lb).src = f.dataset.full;
    $("p", lb).textContent = f.querySelector("figcaption")?.textContent || "";
    lb.showModal();
  });
  lb.addEventListener("click", e => { if (e.target === lb || e.target.tagName === "BUTTON") lb.close(); });
})();
