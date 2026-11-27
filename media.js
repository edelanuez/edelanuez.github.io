(() => {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const M = S.MEDIA || [];
  $("[data-media]").innerHTML = M.length
    ? M.map(m => `<article class="media-item">
        <h3>${esc(m.title)}${m.kind ? `, <em>${esc(m.kind)}</em>` : ""}</h3>
        ${(m.images || []).length ? `<div class="media-imgs">${m.images.map(src => `<figure data-full="${esc(src)}"><img src="${esc(src)}" alt="${esc(m.title)}" loading="lazy"></figure>`).join("")}</div>` : ""}
        ${m.reason ? `<p class="reason">${esc(m.reason)}</p>` : ""}
      </article>`).join("")
    : `<div class="empty">coming soon</div>`;
})();
