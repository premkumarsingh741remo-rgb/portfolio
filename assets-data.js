// Prem Singh - Creative Portfolio Assets Data
const PORTFOLIO_ASSETS = {
  // Graphic Design category (posters folder)
  graphicDesign: [
    {
      id: "gd1",
      title: "Visual Narrative Poster I",
      description: "An expressive visual layout capturing human emotions through layered compositions and bold typography.",
      filePath: "./posters/WhatsApp Image 2026-05-17 at 10.14.50 PM.jpeg",
      category: "Graphic Design"
    },
    {
      id: "gd2",
      title: "Cinematic Collage Artwork",
      description: "Editorial graphic work experimenting with texture overlays, paper cuts, and dramatic contrasting tones.",
      filePath: "./posters/WhatsApp Image 2026-05-17 at 10.14.50 PM (1).jpeg",
      category: "Graphic Design"
    },
    {
      id: "gd3",
      title: "Abstract Form & Expression",
      description: "Minimalist visual branding concept focusing on structural composition and negative space.",
      filePath: "./posters/WhatsApp Image 2026-05-17 at 10.14.50 PM (2).jpeg",
      category: "Graphic Design"
    },
    {
      id: "gd4",
      title: "Bold Typographic Poster",
      description: "Expressive typeface arrangement layered with paper grain textures and hand-drawn brush marks.",
      filePath: "./posters/WhatsApp Image 2026-05-17 at 10.19.18 PM.jpeg",
      category: "Graphic Design"
    },
    {
      id: "gd5",
      title: "Editorial Design Composition",
      description: "Sleek collage style layout presenting a balance of imagery, bold accent colors, and structural text columns.",
      filePath: "./posters/WhatsApp Image 2026-05-17 at 10.19.28 PM.jpeg",
      category: "Graphic Design"
    }
  ],

  // Logos category (logo folder)
  logos: [
    {
      id: "logo1",
      title: "Branding Concept I",
      description: "Sleek geometric branding mark designed with high-contrast lines and clean visual typography.",
      filePath: "./logo/WhatsApp Image 2026-05-17 at 10.14.51 PM.jpeg",
      category: "Logos"
    },
    {
      id: "logo2",
      title: "Creative Identity Stamp",
      description: "A bold, modern, abstract graphic symbol built for digital and print media layouts.",
      filePath: "./logo/WhatsApp Image 2026-05-17 at 10.14.51 PM (1).jpeg",
      category: "Logos"
    },
    {
      id: "logo3",
      title: "Iconic Monogram",
      description: "Experimental typographic monogram featuring a high-fashion, premium editorial look.",
      filePath: "./logo/WhatsApp Image 2026-05-17 at 10.14.51 PM (2).jpeg",
      category: "Logos"
    },
    {
      id: "logo4",
      title: "Visual Emblem",
      description: "Handcrafted emblem design mixing sharp curves with a strong visual presence.",
      filePath: "./logo/WhatsApp Image 2026-05-17 at 10.14.52 PM.jpeg",
      category: "Logos"
    }
  ],

  // Drawings category (drawings folder)
  drawings: [
    {
      id: "dr1",
      title: "Anatomical Sketching",
      description: "Fine-line hand drawing studying physical proportions and expressive shadow gradients.",
      filePath: "./drawings/WhatsApp Image 2026-05-17 at 9.48.34 PM.jpeg",
      category: "Drawings"
    },
    {
      id: "dr2",
      title: "Expressionist Portrait Study",
      description: "Raw ink/pencil drawing emphasizing emotional contours and hand-drawn line textures.",
      filePath: "./drawings/WhatsApp Image 2026-05-17 at 9.48.41 PM.jpeg",
      category: "Drawings"
    },
    {
      id: "dr3",
      title: "Structural Charcoal Art",
      description: "Experimental textured composition examining depth, volume, and organic silhouettes.",
      filePath: "./drawings/WhatsApp Image 2026-05-17 at 9.48.47 PM.jpeg",
      category: "Drawings"
    },
    {
      id: "dr4",
      title: "Surreal Form Exploration",
      description: "Intricate conceptual illustration combining biological lines with abstract flow elements.",
      filePath: "./drawings/WhatsApp Image 2026-05-17 at 9.48.51 PM.jpeg",
      category: "Drawings"
    },
    {
      id: "dr5",
      title: "Gesture Sketch",
      description: "Fast-paced hand drawing capturing movement, form, and rapid ink contours.",
      filePath: "./drawings/WhatsApp Image 2026-05-17 at 9.49.17 PM.jpeg",
      category: "Drawings"
    },
    {
      id: "dr6",
      title: "Textured Silhouette Drawing",
      description: "Rich charcoal illustration with deep blacks and high visual tooth grain contrast.",
      filePath: "./drawings/WhatsApp Image 2026-05-17 at 9.49.27 PM.jpeg",
      category: "Drawings"
    },
    {
      id: "dr7",
      title: "Abstract Line Art Study",
      description: "Continuous line sketch showcasing minimalistic design flow and elegant structures.",
      filePath: "./drawings/WhatsApp Image 2026-05-17 at 9.49.36 PM.jpeg",
      category: "Drawings"
    },
    {
      id: "dr8",
      title: "Handcrafted Charcoal Collage",
      description: "Layered graphite composition capturing cinematic shadows and physical forms.",
      filePath: "./drawings/WhatsApp Image 2026-05-17 at 9.49.43 PM.jpeg",
      category: "Drawings"
    },
    {
      id: "dr9",
      title: "Detailed Figure Illustration",
      description: "Comprehensive figure study demonstrating anatomical detail and pencil rendering.",
      filePath: "./drawings/WhatsApp Image 2026-05-17 at 9.56.18 PM.jpeg",
      category: "Drawings"
    }
  ],

  // Landscape Illustration (landscape illusttration folder)
  landscapeIllustration: [
    {
      id: "li1",
      title: "Cinematic Landscape",
      description: "A gorgeous, layered illustration exploring environmental depth, visual storytelling, and rich textures.",
      filePath: "./landscape illusttration/WhatsApp Image 2026-05-17 at 10.14.52 PM.jpeg",
      category: "Landscape Illustration"
    }
  ],

  // YouTube Links mapping
  // Video categories: Motion Graphics, VFX & Compositing, Digital Filmmaking, Audio & Video Editing
  motionGraphics: [
    {
      id: "mg1",
      title: "Expressive Typographic Motion",
      description: "Animated poster design experimenting with kinetic layouts and textured paper grains.",
      youtubeUrl: "https://youtube.com/shorts/r48qNQQc9wM?si=MB4IuB_SH3-2lfAt",
      embedId: "r48qNQQc9wM",
      isShort: true,
      category: "Motion Graphics"
    },
    {
      id: "mg2",
      title: "Creative Branding Reveal",
      description: "Cinematic logo animation playing with light bursts, glitch textures, and bold soundscapes.",
      youtubeUrl: "https://youtu.be/4e4y32DMnK4?si=3TQcsjp2XbXNWKpa",
      embedId: "4e4y32DMnK4",
      isShort: false,
      category: "Motion Graphics"
    },
    {
      id: "mg3",
      title: "Water Animation | After Effects Assignment",
      description: "First fluid animation and water flow motion graphic study created using Adobe After Effects.",
      youtubeUrl: "https://youtu.be/NQKM9oUKuBw?si=sZYyuLZv1tfMkhbw",
      embedId: "NQKM9oUKuBw",
      isShort: false,
      category: "Motion Graphics"
    }
  ],

  vfxCompositing: [
    {
      id: "vfx1",
      title: "Double Role Assignment | Clone Effect",
      description: "Adobe After Effects practice work focusing on clone masks, clean plates, and spatial timing.",
      youtubeUrl: "https://youtu.be/pBejvuK7zxE?si=FD60PnRvWnBECx1f",
      embedId: "pBejvuK7zxE",
      isShort: false,
      category: "VFX & Compositing"
    },
    {
      id: "vfx2",
      title: "3D Camera Zoom Matte Painting | VFX Assignment",
      description: "Layered environment and 3D depth-of-field simulation created in Adobe After Effects.",
      youtubeUrl: "https://youtu.be/YpSrINhY8JU?si=ITPSlz0TnZMOfKyZ",
      embedId: "YpSrINhY8JU",
      isShort: false,
      category: "VFX & Compositing"
    },
    {
      id: "vfx3",
      title: "Rotoscoping in After Effects | VFX Assignment",
      description: "Intricate frame-by-frame subject isolation and rotoscoping practice for VFX composition.",
      youtubeUrl: "https://youtu.be/4h6NxkqVjQE?si=Nir62QydyHw7LMSa",
      embedId: "4h6NxkqVjQE",
      isShort: false,
      category: "VFX & Compositing"
    }
  ],

  videoEditing: [
    {
      id: "ve1",
      title: "Cinematic Color Grading & Editing",
      description: "A Premiere Pro editing exercise experimenting with cinematic palettes, contrast balance, and grading layers.",
      youtubeUrl: "https://youtu.be/wZK7YndbUUw?si=8Q2UBOcoFf1Y_Gd4",
      embedId: "wZK7YndbUUw",
      isShort: false,
      category: "Audio & Video Editing"
    },
    {
      id: "ve2",
      title: "Was bored ..so I tried making a match cut edit",
      description: "A rapid cinematic sequence practicing high-energy video transitions and match-cut timing in Premiere Pro.",
      youtubeUrl: "https://youtube.com/shorts/6nCJyWPRJsg?si=lBgKpvuKyzjRuuJI",
      embedId: "6nCJyWPRJsg",
      isShort: true,
      category: "Audio & Video Editing"
    }
  ],

  digitalFilmmaking: [
    {
      id: "df1",
      title: "AI Concept Ad | Shurix | Cinematic Commercial",
      description: "A high-octane cyberpunk concept commercial combining AI video generation tools with professional sound design.",
      youtubeUrl: "https://youtu.be/etwaoN-Am4Y?si=0Z5IEM2gkPIPf_cn",
      embedId: "etwaoN-Am4Y",
      isShort: false,
      category: "Digital Filmmaking"
    },
    {
      id: "df2",
      title: "THE GLASS KEEPER | My First AI Animated Short Film",
      description: "Prem's first experimental AI-animated short film showcasing futuristic depth, character close-ups, and cinematic grading.",
      youtubeUrl: "https://youtu.be/4fKM1vRPJRI?si=q9EMtBRazdbXupMs",
      embedId: "4fKM1vRPJRI",
      isShort: false,
      category: "Digital Filmmaking"
    }
  ],

  // Screenplay PDFs (Script folder)
  scripts: [
    {
      id: "sc1",
      title: "MILO",
      excerpt: "SCENE START. EXT. FLOODED STREETS - DAY. A heavy downpour turns the asphalt into a rushing river. MILO (10), wearing a torn yellow raincoat, stands on a wooden crate. A wet, stray golden retriever paddles nearby...",
      description: "A touching screenplay about a young boy and his stray dog companion navigating a flood-stricken city, relying purely on visual storytelling and deep emotional beats.",
      filePath: "./Script/Milo draft 1 (1).pdf",
      pageCount: 15,
      category: "Short Films"
    },
    {
      id: "sc2",
      title: "GLASS KEEPER",
      excerpt: "SCENE START. INT. MUSEUM DEPOT - NIGHT. Dust motes float in the beam of a flashlight. ANANT (40) stares at an hourglass. The sand inside is suspended in mid-air. He reaches out a trembling hand...",
      description: "A tense psychological thriller about a dedicated museum curator who guards an ancient hourglass capable of stopping time, only to discover his own forgotten past is locked inside.",
      filePath: "./Script/Glass keeper draft 1 .pdf",
      pageCount: 12,
      category: "Short Films"
    },
    {
      id: "sc3",
      title: "SHURIX",
      excerpt: "SCENE START. EXT. CYBER-DOJO - NIGHT. Cybernetic rain splatters against glowing holographic banners. RYU (25), armed with a traditional carbon-fiber katana, faces three armed drone sentries. Neon blue oil drips from their joints...",
      description: "An action-focused cyberpunk screenplay and storyboard concept exploring an ancient warrior resurrected in a high-tech corporate cybernetic future.",
      filePath: "./Script/SHURIX DRAFT 1 .pdf",
      pageCount: 10,
      category: "Storyboards"
    },
    {
      id: "sc4",
      title: "HARMONIA",
      excerpt: "SCENE START. INT. RESONANCE CHAMBER - SILENT. Soundwaves are visually represented by geometric lines of blue dust on the floor. ELENA (30) hums a single frequency. The dust forms perfect concentric circles. Then, the alarm blares...",
      description: "An experimental, poetic screenplay that visualizes soundwaves in a dystopian society where audio expressions are illegal, using design as a visual dialogue.",
      filePath: "./Script/HARMONIA DRAFT 2 .pdf",
      pageCount: 8,
      category: "Experimental"
    }
  ]
};

// Make it global or exportable
if (typeof module !== "undefined" && module.exports) {
  module.exports = PORTFOLIO_ASSETS;
} else {
  window.PORTFOLIO_ASSETS = PORTFOLIO_ASSETS;
}
