/* =========================================================
   EDIT THIS FILE to update the site. No build step needed.
   - Add a photo: drop it in img/photos/, add a line to PHOTOS.
   - Add art: drop it in img/art/, add a line to ART.
   - Text uses plain HTML (links: <a href="...">text</a>).
   ========================================================= */

window.SITE = {
  lastUpdated: "november 2026",   // shown in the footer and misc; change when you update

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
    I did my undergrad at Oberlin College, where I focused on
    African political economy, econometrics, and linear programming. After that I did a post-baccalaureate program in mathematics at
    Smith College and a master's in applied mathematics at
    Tufts University.
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
      blurb: "With the MGGG Redistricting Lab: applying the Mapper algorithm and Gromov–Wasserstein distances to study gerrymandering, as part of data-science work for civil rights.",
      tags: ["topological data analysis", "Mapper", "Gromov–Wasserstein", "optimal transport", "clustering", "social choice"],
      link: ""
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
        { src: "img/art/ceramics/plate.jpg", title: "plate", year: "", note: "" },
        { src: "img/art/ceramics/vase-wip-1.jpg", title: "vase", year: "", note: "work in progress, photo 1" },
      ]
    },
    cyanotype: {
      blurb: "",
      /* a collection can be split into sections; each gets its own heading on the page */
      sections: [
        {
          title: "negatives",
          pieces: [
            { src: "img/art/cyanotype/negatives/sheet-1.jpg", title: "sheet no. 1", year: "", note: "" },
            { src: "img/art/cyanotype/negatives/sheet-2.jpg", title: "sheet no. 2", year: "", note: "" },
            { src: "img/art/cyanotype/negatives/last-class-1.jpg", title: "last class, no. 1", year: "", note: "" },
            { src: "img/art/cyanotype/negatives/last-class-2.jpg", title: "last class, no. 2", year: "", note: "" },
            { src: "img/art/cyanotype/negatives/last-class-3.jpg", title: "last class, no. 3", year: "", note: "" },
            { src: "img/art/cyanotype/negatives/last-class-4.jpg", title: "last class, no. 4", year: "", note: "" },
            { src: "img/art/cyanotype/negatives/last-class-5.jpg", title: "last class, no. 5", year: "", note: "" },
            { src: "img/art/cyanotype/negatives/last-class-6.jpg", title: "last class, no. 6", year: "", note: "" },
          ]
        },
        {
          title: "finished prints",
          pieces: [
            { src: "img/art/cyanotype/finished-prints/exposing-on-fabric.jpg", title: "exposing on fabric", year: "", note: "" },
            { src: "img/art/cyanotype/finished-prints/fabric-panels.jpg", title: "fabric panels", year: "", note: "" },
            { src: "img/art/cyanotype/finished-prints/bound-book.jpg", title: "stab-bound book", year: "", note: "" },
            { src: "img/art/cyanotype/finished-prints/bound-book-in-progress.jpg", title: "stab-bound book, in progress", year: "", note: "" },
          ]
        },
        {
          title: "photo album pages",
          pieces: [
            { src: "img/art/cyanotype/photo-album-pages/page-1.jpg", title: "page 1", year: "", note: "" },
            { src: "img/art/cyanotype/photo-album-pages/page-2.jpg", title: "page 2", year: "", note: "" },
            { src: "img/art/cyanotype/photo-album-pages/page-3.jpg", title: "page 3", year: "", note: "" },
            { src: "img/art/cyanotype/photo-album-pages/page-4.jpg", title: "page 4", year: "", note: "" },
            { src: "img/art/cyanotype/photo-album-pages/page-5.jpg", title: "page 5", year: "", note: "" },
          ]
        }
      ]
    },
    origami: {
      blurb: "I don't have a lot of photos of my origami. I've managed to find some things, but I'll keep better track now.",
      pieces: [
        { src: "img/art/origami/seahorse.jpg", title: "seahorse", year: "", note: "design by Michael G. LaFosse" },
        { src: "img/art/origami/frogs.jpg", title: "frogs", year: "", note: "" },
        { src: "img/art/origami/roses.jpg", title: "roses", year: "", note: "" },
        { src: "img/art/origami/lilies-on-dashboard.jpg", title: "lilies on the dashboard", year: "", note: "" },
      ]
    },
    textiles: {
      blurb: "",
      pieces: [
        { src: "img/art/textiles/fabric-prints-1.jpg", title: "fabric prints", year: "", note: "" },
        { src: "img/art/textiles/fabric-prints-2.jpg", title: "fabric prints, another view", year: "", note: "" },
        { src: "img/art/textiles/shibori-drying.jpg", title: "shibori, drying", year: "", note: "" },
        { src: "img/art/textiles/indigo-vat.jpg", title: "the indigo vat", year: "", note: "" },
        { src: "img/art/textiles/indigo-panel.jpg", title: "indigo panel", year: "", note: "" },
        { src: "img/art/textiles/shibori-pillows.jpg", title: "shibori pillows", year: "", note: "" },
        { src: "img/art/textiles/light-table.jpg", title: "negative on the light table", year: "", note: "" },
        { src: "img/art/textiles/drawing-from-photos.jpg", title: "drawing from family photos", year: "", note: "" },
        { src: "img/art/textiles/resist-lines.jpg", title: "resist lines on canvas", year: "", note: "" },
        { src: "img/art/textiles/indigo-book-spread.jpg", title: "indigo book, spread", year: "", note: "" },
        { src: "img/art/textiles/indigo-book-page-1.jpg", title: "indigo book, page", year: "", note: "" },
        { src: "img/art/textiles/indigo-book-page-2.jpg", title: "indigo book, page", year: "", note: "" },
        { src: "img/art/textiles/indigo-book-page-3.jpg", title: "indigo book, page", year: "", note: "" },
        { src: "img/art/textiles/silk-scarf.jpg", title: "hand-painted silk scarf", year: "", note: "" },
        { src: "img/art/textiles/figure.jpg", title: "figure", year: "", note: "" },
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
      { src: "img/encounters/encounter-01.jpg", title: "", artist: "", where: "", date: "", note: "" },
      { src: "img/encounters/encounter-02.jpg", title: "", artist: "", where: "", date: "", note: "" },
      { src: "img/encounters/encounter-03.jpg", title: "", artist: "", where: "", date: "", note: "" },
      { src: "img/encounters/encounter-04.jpg", title: "", artist: "", where: "", date: "", note: "" },
      { src: "img/encounters/encounter-05.jpg", title: "", artist: "", where: "", date: "", note: "" },
      { src: "img/encounters/encounter-06.jpg", title: "", artist: "", where: "", date: "", note: "" },
      { src: "img/encounters/encounter-07.jpg", title: "", artist: "", where: "", date: "", note: "" },
      { src: "img/encounters/encounter-08.jpg", title: "", artist: "", where: "", date: "", note: "" },
      { src: "img/encounters/encounter-09.jpg", title: "", artist: "", where: "", date: "", note: "" },
      { src: "img/encounters/encounter-10.jpg", title: "", artist: "", where: "", date: "", note: "" },
      { src: "img/encounters/encounter-11.jpg", title: "", artist: "", where: "", date: "", note: "" },
    ]
  },

  /* PHOTOS: grouped by camera. Each group gets its own heading.
     Add a photo: put it in img/photos/ and add { src, caption } to the right group. */
  PHOTOS: [
    {
      title: "panasonic lumix g7",
      photos: [
        { src: "img/photos/P1080724.jpg", caption: "" },
        { src: "img/photos/P1080726.jpg", caption: "" },
        { src: "img/photos/P1080852.jpg", caption: "" },
        { src: "img/photos/P1080989.jpg", caption: "" },
        { src: "img/photos/P1080999.jpg", caption: "" },
      ]
    },
    {
      title: "iphone",
      photos: [
        { src: "img/photos/iphone-01.jpg", caption: "shot on iphone" },
        { src: "img/photos/iphone-02.jpg", caption: "shot on iphone" },
        { src: "img/photos/iphone-03.jpg", caption: "shot on iphone" },
        { src: "img/photos/iphone-05.jpg", caption: "shot on iphone" },
        { src: "img/photos/iphone-06.jpg", caption: "shot on iphone" },
      ]
    },
    {
      title: "other",
      photos: [
        { src: "img/photos/instax-montreal.jpg", caption: "instax dump: montreal" },
      ]
    }
  ],

  /* LISTENING: songs for the opt-in "what i'm listening to" player.
     Paste the Spotify song link (Share → Copy Song Link). Nothing loads from Spotify until a visitor clicks.
     { title, artist, spotify: "https://open.spotify.com/track/..." } */
  LISTENING: [
    { title: "Sailing", artist: "Christopher Cross", spotify: "https://open.spotify.com/track/6YIeSw2cTNQRWbuxWvRPsW" },
    { title: "Midnight Run", artist: "Charley Crockett", spotify: "https://open.spotify.com/track/0Kyr1asI6ETruhE7jK7inR" },
    { title: "The Thrill", artist: "Wiz Khalifa, Empire of the Sun", spotify: "https://open.spotify.com/track/4wqzOaLxiCRy2Et8tRyNSX" },
    { title: "Die Hard", artist: "Kendrick Lamar, Blxst, Amanda Reifer", spotify: "https://open.spotify.com/track/2g6tReTlM2Akp41g0HaeXN" },
    { title: "EVERBLUE", artist: "Omoinotake", spotify: "https://open.spotify.com/track/5RmtuRIe8FJg9FRegwCqzW" },
    { title: "Everywhere", artist: "Fleetwood Mac", spotify: "https://open.spotify.com/track/254bXAqt3zP6P50BdQvEsq" },
    { title: "ルミナス (Luminous)", artist: "ClariS", spotify: "https://open.spotify.com/track/1t1rGn7F2btHJWxqcsEGq2" },
  ],
  /* or a whole playlist (used when set); also only loads after a click */
  LISTENING_PLAYLIST: "",

  /* MEDIA: things that really meant something to me. Each entry is its own block.
     { title, images: ["img/media/..."], reason } */
  MEDIA: [
    {
      title: "attack on titan, chapter 137",
      kind: "manga",
      images: ["img/media/aot-137-1.jpg", "img/media/aot-137-2.jpg"],
      reason: "what running feels like to me"
    },
    {
      title: "attack on titan, chapter 71",
      kind: "manga",
      images: ["img/media/aot-71.jpg"],
      reason: "anytime i am a bit discouraged, i am reminded of this panel and i feel better somehow"
    },
    {
      title: "dune messiah",
      kind: "book",
      images: [],
      reason: "prescience is a curse as much as it is a gift"
    },
    {
      title: "mister rogers' neighborhood",
      kind: "tv show",
      images: [],
      reason: ""
    },
    {
      title: "naruto",
      kind: "anime",
      images: [],
      reason: "never quit on your dreams!"
    },
    {
      title: "bring her back",
      kind: "movie",
      images: [],
      reason: ""
    },
  ],

  /* MISC: anything. { title, text, link? } */
  MISC: [
    { title: "running", text: "Philly Marathon, Newport Marathon" },
    { title: "currently reading", text: "Children of Dune (Dune series)" },
    { title: "quote that is resonating with me right now", text: "“But the wind that day was slightly warm, and it felt so good just running.” — Armin Arlert" }
  ]
};
