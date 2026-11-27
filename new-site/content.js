/* =========================================================
   EDIT THIS FILE to update the site. No build step needed.
   - Add a photo: drop it in img/photos/, add a line to PHOTOS.
   - Add art: drop it in img/art/, add a line to ART.
   - Text uses plain HTML (links: <a href="...">text</a>).
   ========================================================= */

window.SITE = {
  name: { print: "Emarie", full: "Emarie R. De La Nuez" },
  tagline: "applied mathematics · decisions under uncertainty · art · photographs",

  contact: {
    email: "emdelanuez@outlook.com",
    github: "https://github.com/edelanuez",
    linkedin: "https://www.linkedin.com/in/emarie-rose-de-la-nuez",
    cv: "assets/Emarie_De_La_Nuez_CV.pdf"
  },

  about: `Hello! I'm Emarie De La Nuez, and this is my personal website. Here I post my art, math,
    projects I'm working on, and other things I like.
    <br><br>
    I did my undergrad at <a href="https://www.oberlin.edu" target="_blank" rel="noopener">Oberlin College</a>, where I focused on
    African political economy, econometrics, and linear programming. After that I did a post-baccalaureate program in mathematics at
    <a href="https://www.smith.edu" target="_blank" rel="noopener">Smith College</a> and a master's in applied mathematics at
    <a href="https://math.tufts.edu" target="_blank" rel="noopener">Tufts University</a>.
    <br><br>
    If you need to contact me, I can be reached here: <a href="mailto:emdelanuez@outlook.com">emdelanuez@outlook.com</a>.`,

  research: [
    {
      title: "stochastic processes for middle-mile logistics",
      blurb: "With Profs. Mark Lewis and Jamol J. Pender at Cornell: stochastic models and control policies for which arriving trucks a fulfillment center should admit to its loading bays. The dock is modeled as a finite-capacity Erlang-A (M/M/c/K+M) queue with blocking and driver abandonment.",
      tags: ["stochastic processes", "queueing theory", "Erlang-A", "continuous-time markov chains", "admission control", "stationary distributions"],
      link: ""
    },
    {
      title: "reinforcement learning for building energy control",
      blurb: "Training HVAC control policies with PPO, with a focus on reward shaping and sim-to-real transfer. That gap between a reward as a proxy and what you actually intend is the question I keep coming back to.",
      tags: ["reinforcement learning", "PPO", "reward design", "multi-objective optimization", "sim-to-real transfer", "Gymnasium"],
      link: ""
    },
    {
      title: "topology, optimal transport & redistricting",
      blurb: "With the MGGG Redistricting Lab (mentor: Moon Duchin): applying the Mapper algorithm and Gromov–Wasserstein distances to study gerrymandering, as part of data-science work for civil rights.",
      tags: ["topological data analysis", "Mapper", "Gromov–Wasserstein", "optimal transport", "clustering", "social choice"],
      link: "https://mggg.org"
    },
    {
      title: "spatial environmental risk (PFAS)",
      blurb: "With Smith College's Data Ethnography Lab: geospatial analysis identifying 6,000+ U.S. carceral facilities at potential risk of PFAS exposure, for an environmental justice report.",
      tags: ["geospatial analysis", "environmental justice", "data integration", "R", "SQL"],
      link: ""
    }
  ],

  background: [
    ["M.S.", "Applied Mathematics, Tufts University · advised by <a href='https://math.tufts.edu/people/faculty/abiy-tasissa' target='_blank' rel='noopener'>Abiy Tasissa</a>"],
    ["Post-bacc", "Mathematics, Smith College"],
    ["B.A.", "Africana Studies, Oberlin College · minors in Mathematics & Economics"],
    ["Fellow", "Mellon Mays Undergraduate Fellowship"],
    ["Teaching", "TA, probability and proof-writing"]
  ],

  /* ART: collections, each with its own page (ceramics.html, cyanotype.html, origami.html, textiles.html).
     To add a piece: put the image in img/art/<collection>/ and add { src, title, year, note } below. */
  ART: {
    ceramics: {
      blurb: "",
      pieces: [
        // { src: "img/art/ceramics/bowl.jpg", title: "speckled bowl", year: "2025", note: "stoneware" },
      ]
    },
    cyanotype: {
      blurb: "",
      pieces: [
        // { src: "img/art/cyanotype/print.jpg", title: "", year: "", note: "" },
      ]
    },
    origami: {
      blurb: "",
      pieces: [
        // { src: "img/art/origami/crane.jpg", title: "crane", year: "", note: "" },
      ]
    },
    textiles: {
      blurb: "",
      pieces: [
        // { src: "img/art/textiles/quilt.jpg", title: "", year: "", note: "" },
      ]
    }
  },

  /* ENCOUNTERS: art I came across out in the world (encounters.html).
     Newest first is automatic (by date). "where" decides the group, e.g. "New York · Gagosian", "Mexico", "Italy".
     Groups starting with "New York" are shown together under nyc galleries.
     { src, title, artist, where, date: "YYYY-MM-DD", note } */
  ENCOUNTERS: {
    blurb: "Art I've come across out in the world that stayed with me. Sorted by where I found it: galleries in New York, and other countries.",
    items: [
      // { src: "img/encounters/2026-11-gagosian.jpg", title: "untitled", artist: "artist name", where: "New York · Gagosian", date: "2026-11-20", note: "why it stuck with me" },
    ]
  },

  /* PHOTOS: { src, caption }. Samples below are placeholders; replace with your own. */
  PHOTOS: [
    { src: "img/photos/sample-2.jpg", caption: "sample" },
    { src: "img/photos/sample-1.jpg", caption: "sample" },
    { src: "img/photos/sample-3.jpg", caption: "sample" },
    { src: "img/photos/sample-4.jpg", caption: "sample" },
    { src: "img/photos/sample-5.jpg", caption: "sample" },
    { src: "img/photos/sample-6.jpg", caption: "sample" }
  ],

  /* MISC: anything. { title, text, link? } */
  MISC: [
    { title: "running", text: "AACR Philadelphia Marathon, 2023." },
    { title: "currently reading", text: "TODO" },
    { title: "notes", text: "TODO: talks, links, things I like" }
  ]
};
