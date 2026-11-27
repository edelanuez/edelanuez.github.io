(() => {
  const S = window.SITE, key = document.body.dataset.collection, col = S.ART[key];
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  document.title = `${key} · ${S.name.print}`;
  $("[data-title]").textContent = key;
  $("[data-blurb]").innerHTML = col.blurb || "";
  $$("[data-cv]").forEach(a => (a.href = S.contact.cv));
  function $$(s) { return [...document.querySelectorAll(s)]; }

  const fig = p => `<figure data-full="${esc(p.src)}"><img src="${esc(p.src)}" alt="${esc(p.title || key)}" loading="lazy">
        <figcaption><b>${esc(p.title || "untitled")}</b>${esc([p.note, p.year].filter(Boolean).join(" · "))}</figcaption></figure>`;
  const emptyMsg = dir => `<div class="empty">nothing here yet. Put images in <code>${esc(dir)}</code> and list them in <code>content.js</code>.</div>`;
  const sl = t => t.toLowerCase().replace(/[^a-z0-9]+/g, "-");

  if (col.sections) {
    $("[data-chips]").innerHTML = col.sections.map(sec =>
      `<a class="chip" href="#${sl(sec.title)}">${esc(sec.title)} <span>${sec.pieces.length}</span></a>`).join("");
    $("[data-gallery]").outerHTML = col.sections.map((sec, i) => `<section class="enc-group" id="${sl(sec.title)}">
      <h2><span class="no">${String(i + 1).padStart(2, "0")}</span> ${esc(sec.title)}</h2>
      ${sec.pieces.length ? `<div class="gallery">${sec.pieces.map(fig).join("")}</div>` : emptyMsg(`img/art/${key}/${sl(sec.title)}/`)}
    </section>`).join("");
  } else {
    $("[data-chips]").remove();
    $("[data-gallery]").innerHTML = col.pieces.length ? col.pieces.map(fig).join("") : emptyMsg(`img/art/${key}/`);
  }

  $("[data-pagenav]").innerHTML = [...Object.keys(S.ART), "encounters"]
    .map(k => `<a href="${k}.html"${k === key ? ' class="on" aria-current="page"' : ""}>${k}</a>`).join("");

})();
