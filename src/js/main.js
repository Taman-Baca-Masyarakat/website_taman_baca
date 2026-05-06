document.getElementById("mobile-menu-btn").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.remove("hidden");
});
document.getElementById("close-menu").addEventListener("click", () => {
  document.getElementById("mobile-menu").classList.add("hidden");
});
document.querySelectorAll(".mobile-link").forEach((link) => {
  link.addEventListener("click", () =>
    document.getElementById("mobile-menu").classList.add("hidden"),
  );
});

const defaultConfig = {
  site_title: "Taman Baca Ceria",
  tagline: "Membuka Jendela Dunia untuk Semua",
  about_text:
    "Taman Baca Ceria hadir sebagai ruang literasi untuk masyarakat. Kami percaya bahwa setiap orang berhak mendapatkan akses terhadap buku dan pengetahuan, tanpa memandang latar belakang.",
  address_text: "Jl. Pendidikan No. 12\nKelurahan Harapan",
  background_color: "#faf6f0",
  surface_color: "#ffffff",
  text_color: "#2c2c2c",
  primary_color: "#4c7354",
  accent_color: "#eab364",
  font_family: "Playfair Display",
  font_size: 16,
};

function applyConfig(config) {
  const c = { ...defaultConfig, ...config };

  document.getElementById("nav-title").textContent = c.site_title;
  document.getElementById("hero-title").textContent = c.site_title;
  document.getElementById("hero-tagline").textContent = c.tagline;
  document.getElementById("about-desc").textContent = c.about_text;
  document.getElementById("address-text").innerHTML = c.address_text.replace(
    /\n/g,
    "<br>",
  );

  // Colors
  document.body.style.backgroundColor = c.background_color;
  document.querySelector("nav").style.backgroundColor = c.background_color;
  document
    .querySelectorAll('[style*="background-color:#ffffff"]')
    .forEach((el) => (el.style.backgroundColor = c.surface_color));
  document
    .querySelectorAll(".font-heading")
    .forEach((el) => (el.style.color = c.text_color));

  const fontStack = `${c.font_family}, serif`;
  document
    .querySelectorAll(".font-heading")
    .forEach((el) => (el.style.fontFamily = fontStack));

  const base = c.font_size;
  document.getElementById("hero-title").style.fontSize = `${base * 2.5}px`;
  document.getElementById("hero-tagline").style.fontSize = `${base * 1.4}px`;
  document.getElementById("about-desc").style.fontSize = `${base * 1.1}px`;
}

window.elementSdk.init({
  defaultConfig,
  onConfigChange: async (config) => applyConfig(config),
  mapToCapabilities: (config) => ({
    recolorables: [
      {
        get: () => config.background_color || defaultConfig.background_color,
        set: (v) => {
          config.background_color = v;
          window.elementSdk.setConfig({ background_color: v });
        },
      },
      {
        get: () => config.surface_color || defaultConfig.surface_color,
        set: (v) => {
          config.surface_color = v;
          window.elementSdk.setConfig({ surface_color: v });
        },
      },
      {
        get: () => config.text_color || defaultConfig.text_color,
        set: (v) => {
          config.text_color = v;
          window.elementSdk.setConfig({ text_color: v });
        },
      },
      {
        get: () => config.primary_color || defaultConfig.primary_color,
        set: (v) => {
          config.primary_color = v;
          window.elementSdk.setConfig({ primary_color: v });
        },
      },
      {
        get: () => config.accent_color || defaultConfig.accent_color,
        set: (v) => {
          config.accent_color = v;
          window.elementSdk.setConfig({ accent_color: v });
        },
      },
    ],
    borderables: [],
    fontEditable: {
      get: () => config.font_family || defaultConfig.font_family,
      set: (v) => {
        config.font_family = v;
        window.elementSdk.setConfig({ font_family: v });
      },
    },
    fontSizeable: {
      get: () => config.font_size || defaultConfig.font_size,
      set: (v) => {
        config.font_size = v;
        window.elementSdk.setConfig({ font_size: v });
      },
    },
  }),
  mapToEditPanelValues: (config) =>
    new Map([
      ["site_title", config.site_title || defaultConfig.site_title],
      ["tagline", config.tagline || defaultConfig.tagline],
      ["about_text", config.about_text || defaultConfig.about_text],
      ["address_text", config.address_text || defaultConfig.address_text],
    ]),
});

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'9f75f9b2f427fd1e',t:'MTc3ODA0OTQzNy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
