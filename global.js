/* Prem Singh - Creative Graphic Design Portfolio */
/* Core Interactive Script Engine */

document.addEventListener("DOMContentLoaded", () => {
  initPageTransitions();
  initMobileNav();
  initLightbox();
  initMagneticButtons();
});

/* 1. Seamless Page Transitions */
function initPageTransitions() {
  const overlay = document.querySelector(".page-transition-overlay");
  if (!overlay) return;

  // Slide away overlay on page load
  window.addEventListener("load", () => {
    setTimeout(() => {
      overlay.classList.add("is-loaded");
    }, 150);
  });

  // Intercept all local links for transitions
  document.querySelectorAll("a").forEach(link => {
    // Only capture relative links on the same origin (no target="_blank" or external links)
    const href = link.getAttribute("href");
    const target = link.getAttribute("target");
    
    if (href && !href.startsWith("#") && !href.startsWith("http") && !href.startsWith("mailto:") && !href.startsWith("tel:") && target !== "_blank") {
      link.addEventListener("click", e => {
        e.preventDefault();
        
        // Add leaving animation to overlay
        overlay.classList.remove("is-loaded");
        overlay.classList.add("is-leaving");
        
        // Redirect after animation completes (matches CSS duration)
        setTimeout(() => {
          window.location.href = href;
        }, 550);
      });
    }
  });
}

/* 2. Animated Mobile Menu Drawer */
function initMobileNav() {
  const hamburger = document.querySelector(".hamburger");
  const drawer = document.querySelector(".mobile-nav-drawer");
  
  if (!hamburger || !drawer) return;

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    drawer.classList.toggle("is-active");
  });

  // Close drawer when clicking a link
  drawer.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("is-active");
      drawer.classList.remove("is-active");
    });
  });
}

/* 3. Global Dynamic Lightbox Manager */
function initLightbox() {
  let lightbox = document.querySelector(".lightbox-modal");
  
  // Create Lightbox HTML Structure if absent
  if (!lightbox) {
    lightbox = document.createElement("div");
    lightbox.className = "lightbox-modal";
    lightbox.innerHTML = `
      <div class="lightbox-content-wrapper">
        <button class="lightbox-close" aria-label="Close Lightbox">CLOSE X</button>
        <div class="lightbox-media-container"></div>
        <div class="lightbox-meta">
          <h3 class="lightbox-title"></h3>
          <p class="lightbox-desc"></p>
          <a class="lightbox-youtube-link" target="_blank" style="display:none; margin-top: 1rem; color: var(--hot-pink); font-family: var(--font-typewriter); font-weight: bold; text-decoration: underline;">WATCH ON YOUTUBE ↗</a>
        </div>
      </div>
    `;
    document.body.appendChild(lightbox);
  }

  const mediaContainer = lightbox.querySelector(".lightbox-media-container");
  const titleEl = lightbox.querySelector(".lightbox-title");
  const descEl = lightbox.querySelector(".lightbox-desc");
  const youtubeLinkEl = lightbox.querySelector(".lightbox-youtube-link");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  const openLightbox = (mediaType, mediaSrc, title, desc, youtubeUrl = "") => {
    mediaContainer.innerHTML = "";
    youtubeLinkEl.style.display = "none";
    
    if (mediaType === "image") {
      const img = document.createElement("img");
      img.src = mediaSrc;
      img.alt = title;
      mediaContainer.appendChild(img);
    } else if (mediaType === "video") {
      // Generate clean YouTube responsive iframe embed
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${mediaSrc}?autoplay=1&rel=0&modestbranding=1`;
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      mediaContainer.appendChild(iframe);
      
      // Fallback direct link
      if (youtubeUrl) {
        youtubeLinkEl.href = youtubeUrl;
        youtubeLinkEl.style.display = "inline-block";
      } else {
        youtubeLinkEl.href = `https://youtube.com/watch?v=${mediaSrc}`;
        youtubeLinkEl.style.display = "inline-block";
      }
    }

    titleEl.textContent = title || "";
    descEl.textContent = desc || "";
    lightbox.classList.add("is-active");
  };

  const closeLightbox = () => {
    lightbox.classList.remove("is-active");
    // Clear iframe/image after fade out to stop sound playing
    setTimeout(() => {
      mediaContainer.innerHTML = "";
    }, 400);
  };

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lightbox-content-wrapper")) {
      closeLightbox();
    }
  });

  // ESC key support
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-active")) {
      closeLightbox();
    }
  });

  // Expose function globally to let other pages call it
  window.openLightboxModal = openLightbox;
}

/* 5. Magnetic Micro-Animations for Interactive Elements */
function initMagneticButtons() {
  document.querySelectorAll(".magnetic-btn, .btn-creative").forEach(btn => {
    btn.addEventListener("mousemove", e => {
      const rect = btn.getBoundingClientRect();
      // Calculate mouse vector relative to element center
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Pull element in the direction of the cursor (gentle drag force)
      btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px) skewX(-2deg)`;
    });

    btn.addEventListener("mouseleave", () => {
      // Ease back to original coordinates
      btn.style.transform = "";
    });
  });
}
