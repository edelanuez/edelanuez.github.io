(() => {
  const S = window.SITE, E = S.ENCOUNTERS;
  const $ = (s, r = document) => r.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  $("[data-blurb]").innerHTML = E.blurb || "";
  $$("[data-cv]").forEach(a => (a.href = S.contact.cv));
  $("[data-pagenav]").innerHTML = [...Object.keys(S.ART), "encounters"]
    .map(k => `<a href="${k}.html"${k === "encounters" ? ' class="on" aria-current="page"' : ""}>${k}</a>`).join("");

  // group: "New York · X" -> nyc galleries / X ; anything else -> its own country group
  const items = [...E.items].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  const groups = new Map();
  for (const it of items) {
    const w = (it.where || "unsorted").trim();
    const nyc = /^new york/i.test(w);
    const g = nyc ? "nyc galleries" : w.toLowerCase();
    if (!groups.has(g)) groups.set(g, []);
    groups.get(g).push({ ...it, sub: nyc ? w.split("·").slice(1).join("·").trim() : "" });
  }
  // nyc first, then countries alphabetically
  const order = [...groups.keys()].sort((a, b) => (a === "nyc galleries" ? -1 : b === "nyc galleries" ? 1 : a.localeCompare(b)));

  const fmt = d => { if (!d) return ""; const t = new Date(d + "T12:00:00"); return isNaN(t) ? d : t.toLocaleDateString("en-US", { month: "short", year: "numeric" }).toLowerCase(); };
  const card = it => `<figure data-full="${esc(it.src)}"><img src="${esc(it.src)}" alt="${esc([it.title, it.artist].filter(Boolean).join(" by ") || "artwork")}" loading="lazy">
    <figcaption>${it.title ? `<b>${esc(it.title)}</b>` : ""}${esc([it.artist, it.sub, fmt(it.date)].filter(Boolean).join(" · "))}${it.note ? `<span class="note">${esc(it.note)}</span>` : ""}</figcaption></figure>`;

  const chips = $("[data-chips]"), body = $("[data-groups]");
  if (!items.length) {
    chips.remove();
    body.innerHTML = `<div class="empty">nothing here yet. Put photos in <code>img/encounters/</code> and add them under <code>ENCOUNTERS</code> in <code>content.js</code>, with <code>where</code> set to a country or <code>"New York · gallery name"</code>.</div>`;
  } else {
    chips.innerHTML = [`<button type="button" class="chip on" data-g="all">all <span>${items.length}</span></button>`,
      ...order.map(g => `<button type="button" class="chip" data-g="${slug(g)}">${esc(g)} <span>${groups.get(g).length}</span></button>`)].join("");
    body.innerHTML = order.map(g => `<section class="enc-group" data-g="${slug(g)}"><h2><span class="no">${groups.get(g).length}</span> ${esc(g)}</h2>
      <div class="gallery">${groups.get(g).map(card).join("")}</div></section>`).join("");
    chips.addEventListener("click", e => {
      const b = e.target.closest(".chip"); if (!b) return;
      $$(".chip").forEach(c => c.classList.toggle("on", c === b));
      $$(".enc-group").forEach(sec => (sec.hidden = b.dataset.g !== "all" && sec.dataset.g !== b.dataset.g));
    });
  }

})();
