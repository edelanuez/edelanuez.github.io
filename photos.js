(() => {
  const S = window.SITE;
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const sl = t => String(t).toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const box = $("[data-photos]");
  $("[data-chips]").innerHTML = S.PHOTOS.map(g =>
    `<a class="chip" href="#${sl(g.title || "photos")}">${esc(g.title || "photos")} <span>${g.photos.length}</span></a>`).join("");
  box.innerHTML = S.PHOTOS.map((g, i) => `<section class="enc-group" id="${sl(g.title || "photos")}">
      <h2><span class="no">${String(i + 1).padStart(2, "0")}</span> ${esc(g.title || "photos")}</h2>
      <div class="masonry">${g.photos.map(p => `<figure data-full="${esc(p.src)}"><img src="${esc(p.src)}" alt="${esc(p.caption || "photograph")}" loading="lazy">
        ${p.caption ? `<figcaption>${esc(p.caption)}</figcaption>` : ""}</figure>`).join("")}</div>
    </section>`).join("");
  $("#tone").addEventListener("click", e => {
    const on = !box.classList.contains("cyan-on");
    box.classList.toggle("cyan-on", on);
    box.querySelectorAll(".masonry").forEach(m => m.classList.toggle("cyan-on", on));
    e.currentTarget.setAttribute("aria-pressed", on);
  });
})();
