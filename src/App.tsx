import { useState, useEffect, useRef, useCallback, type KeyboardEvent } from "react";
import imgCeipaBlue from "./imports/logo-ceipa-azul-png.png";
import imgCeipaWhite from "./imports/logo-ceipa-blanco-png.png";
import imgSlide1Mobile from "./imports/image-1.png";
import imgSlide1Desktop from "./imports/image-2.png";
import imgSlide2Mobile from "./imports/Imagen_de_Codex_17_sept_2026__10_50_11.png";
import imgSlide2Desktop from "./imports/Imagen_de_Codex_17_sept_2026__10_53_23.png";
import imgSlide3Mobile from "./imports/ceipa-hero-mobile-1080x1400.jpg";
import imgSlide3Desktop from "./imports/ceipa-hero-desktop-1920x700.jpg"; // hero v2
import imgPorQueCeipa from "./imports/image-porqueceipa.png";
import imgTecnicasBg from "./imports/image-6.png";
import imgTecnicasCard from "./imports/image-7.png";
import imgPregradosBg from "./imports/image-8.png";
import imgPregradosCard from "./imports/image-9.png";
import imgPosgradosBg from "./imports/image-10.png";
import imgPosgradosCard from "./imports/image-11.png";
import imgMaestriasBg from "./imports/image-12.png";
import imgMaestríasCard from "./imports/image-13.png";
import imgEdContBg from "./imports/image-15.png";
import imgEdContCard from "./imports/image-14.png";
import imgSelloAltaCalidad from "./imports/acreditaciones/sello-acreditacion-alta-calidad.webp";
import imgSelloAAA from "./imports/acreditaciones/sello-aaa-corantioquia.webp";
import imgSelloQsStars from "./imports/acreditaciones/sello-qs-stars.webp";
import imgSelloEquaa2023 from "./imports/acreditaciones/sello-equaa-2023.webp";
import imgSelloLifelong from "./imports/acreditaciones/sello-lifelong-learning.webp";
import imgSelloLatamDigital from "./imports/acreditaciones/sello-premios-latam-digital.webp";
import imgSelloEquaa2022 from "./imports/acreditaciones/sello-equaa-2022.webp";
import imgSelloEquaa2025 from "./imports/acreditaciones/sello-equaa-2025.webp";
import imgSelloImpactRankings from "./imports/acreditaciones/sello-the-impact-rankings.webp";
import imgNovedadAcreditacion from "./imports/novedades/novedad-acreditacion-internacional.webp";
import imgNovedadFeria from "./imports/novedades/novedad-feria-emprendimiento.webp";
import imgNovedadConcurso from "./imports/novedades/novedad-concurso-innovacion.webp";
import imgTestiMaria from "./imports/testimonios/maria-garcia.webp";
import imgTestiCarlos from "./imports/testimonios/carlos-lopez.webp";
import imgTestiAna from "./imports/testimonios/ana-martinez.webp";
import imgCertificadoIso from "./imports/footer/certificado-iso-9001-2015.png";

// Hook for scroll reveal animations
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// Nav component
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Estudia en CEIPA", items: ["Pregrados", "Posgrados", "Educación continua", "Admisiones"] },
    { label: "Estudiantes", items: ["Portal académico", "Bienestar universitario", "Egresados"] },
    { label: "CEIPA", items: ["Institución", "Entorno empresarial", "Actualidad", "Contacto"] },
    { label: "Entorno empresarial", items: ["Empresas aliadas", "Formación corporativa"] },
    { label: "Actualidad", items: ["Noticias", "Eventos", "Blog"] },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      {/* Desktop nav */}
      <div className="hidden md:flex bg-white rounded-[85px] mx-4 mt-4 px-8 py-4 items-center justify-between shadow-sm">
        <div className="flex items-center">
          <img alt="CEIPA" className="h-10 object-contain" src={imgCeipaBlue} />
        </div>
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <button
                className="font-['Archivo:Regular',sans-serif] text-black text-[16px] hover:text-[#354ee7] transition-colors flex items-center gap-1"
                style={{ fontVariationSettings: '"wdth" 100' }}
              >
                {link.label}
                <svg className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-2xl py-3 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {link.items.map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="block px-5 py-2 text-[14px] font-['Archivo:Regular',sans-serif] text-gray-700 hover:text-[#354ee7] hover:bg-blue-50 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="bg-[#354ee7] text-white font-['Archivo:SemiBold',sans-serif] text-[14px] px-6 py-2 rounded-full hover:bg-[#2a3ec0] transition-colors">
          Inscríbete
        </button>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden bg-white mx-3 mt-3 rounded-2xl shadow-sm">
        <div className="flex items-center justify-between px-5 py-3">
          <img alt="CEIPA" className="h-6 object-contain" src={imgCeipaBlue} />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-700 hover:text-[#354ee7] transition-colors"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`} />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu-enter border-t border-gray-100">
            {navLinks.map((link) => (
              <div key={link.label}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                  className="w-full flex items-center justify-between px-5 py-3 font-['Archivo:Regular',sans-serif] text-[15px] text-gray-800 hover:text-[#354ee7] transition-colors"
                >
                  {link.label}
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {activeDropdown === link.label && (
                  <div className="bg-gray-50 px-5 pb-2">
                    {link.items.map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="block py-2 text-[14px] font-['Archivo:Regular',sans-serif] text-gray-600 hover:text-[#354ee7] transition-colors border-b border-gray-100 last:border-0"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-5 py-4">
              <button className="w-full bg-[#354ee7] text-white font-['Archivo:SemiBold',sans-serif] text-[15px] py-3 rounded-full hover:bg-[#2a3ec0] transition-colors">
                Inscríbete
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero section
function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      highlight: "hasit amet consectetur\nadipiscing elit",
      prefix: "Lorem ",
      bgMobile: imgSlide1Mobile,
      bgDesktop: imgSlide1Desktop,
      dark: false,
      overlay: "linear-gradient(to right, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.25) 60%, transparent 100%)",
      desktopPos: "left center",
    },
    {
      highlight: "innovación que\ntransforma vidas",
      prefix: "La ",
      bgMobile: imgSlide2Mobile,
      bgDesktop: imgSlide2Desktop,
      dark: true,
      overlay: "linear-gradient(to right, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.22) 58%, transparent 100%)",
      desktopPos: "right center",
      glassBtn: true,
    },
    {
      highlight: "excelencia académica\nte espera hoy",
      prefix: "La ",
      bgMobile: imgSlide3Mobile,
      bgDesktop: imgSlide3Desktop,
      dark: true,
      overlay: "linear-gradient(to right, rgba(6,13,55,0.70) 0%, rgba(6,13,55,0.35) 55%, transparent 100%)",
      desktopPos: "right center",
      glassBtn: true,
    },
  ];

  const prevSlide = () => setCurrentSlide((p) => (p - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((p) => (p + 1) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <section className="relative rounded-b-[55px] overflow-hidden min-h-[700px] md:min-h-[680px]">
      {/* Background images — crossfade per slide */}
      {slides.map((slide, i) => (
        <span key={i}>
          <img
            src={slide.bgMobile}
            alt=""
            aria-hidden
            className="md:hidden absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === currentSlide ? 1 : 0, objectPosition: "center center" }}
          />
          <img
            src={slide.bgDesktop}
            alt=""
            aria-hidden
            className="hidden md:block absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
            style={{ opacity: i === currentSlide ? 1 : 0, objectPosition: slide.desktopPos }}
          />
        </span>
      ))}
      {/* Gradient overlay — per slide (desktop: horizontal split; mobile: vertical, protects text/button legibility over the photo) */}
      <div
        className="hidden md:block absolute inset-0 z-[1] transition-all duration-700"
        style={{ background: slides[currentSlide].overlay }}
      />
      <div
        className="md:hidden absolute inset-0 z-[1] transition-all duration-700"
        style={{
          background: slides[currentSlide].dark
            ? "linear-gradient(to bottom, rgba(6,13,55,0.82) 0%, rgba(6,13,55,0.55) 40%, rgba(6,13,55,0.22) 62%, transparent 85%)"
            : "linear-gradient(to bottom, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.62) 40%, rgba(255,255,255,0.25) 62%, transparent 85%)",
        }}
      />

      {/* Arrow navigation — desktop: centered on the media; mobile: moved below the text block so it never overlaps it */}
      <button
        onClick={prevSlide}
        aria-label="Slide anterior"
        className="absolute left-4 md:left-8 bottom-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{ background: slides[currentSlide].dark ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.70)", backdropFilter: "blur(6px)" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M12.5 15L7.5 10L12.5 5" stroke={slides[currentSlide].dark ? "#fff" : "#354ee7"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        aria-label="Siguiente slide"
        className="absolute right-4 md:right-8 bottom-8 md:bottom-auto md:top-1/2 md:-translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
        style={{ background: slides[currentSlide].dark ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.70)", backdropFilter: "blur(6px)" }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M7.5 5L12.5 10L7.5 15" stroke={slides[currentSlide].dark ? "#fff" : "#354ee7"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-10 pt-28 md:pt-32 pb-16" style={{ color: slides[currentSlide].dark ? "#fff" : "inherit" }}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-16">
          {/* Text — left half on desktop, full width on mobile */}
          <div className="w-full md:max-w-[52%]">
            {/* Fixed height so slides never shift layout */}
            <div className="h-[180px] md:h-[260px] overflow-hidden mb-6">
              <h1
                className="hero-title font-['Archivo:Regular',sans-serif] text-[38px] md:text-[64px] leading-[1.05]"
                style={{ fontVariationSettings: '"wdth" 100', whiteSpace: "pre-line" }}
              >
                <span className={slides[currentSlide].dark ? "text-white" : "text-black"}>{slides[currentSlide].prefix}</span>
                <span className={slides[currentSlide].dark ? "text-[#7b8fff]" : "text-[#354ee7]"}>{slides[currentSlide].highlight}</span>
              </h1>
            </div>
            <p
              className={`hero-sub font-['Archivo:ExtraLight',sans-serif] text-[17px] md:text-[20px] leading-[1.44] max-w-[560px] mb-8 ${slides[currentSlide].dark ? "text-white/90" : "text-black"}`}
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc efficitur sed lectus nec tempor. In quis tellus id sem placerat dignissim laoreet at ligula.
            </p>
            <div className="hero-cta">
              <button
                className="font-['Archivo:Regular',sans-serif] text-[18px] px-8 py-3 rounded-full transition-all duration-300 hover:scale-[1.03]"
                style={{
                  fontVariationSettings: '"wdth" 100',
                  ...(slides[currentSlide].glassBtn
                    ? {
                        background: "rgba(255,255,255,0.15)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        border: "1px solid rgba(255,255,255,0.55)",
                        color: "#fff",
                      }
                    : {
                        background: "transparent",
                        border: "1px solid #354ee7",
                        color: "#060d37",
                      }),
                }}
              >
                Quiero más información
              </button>
            </div>
            <div className="flex gap-3 mt-10">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${i === currentSlide ? `w-10 ${slides[currentSlide].dark ? "bg-white" : "bg-[#354ee7]"}` : `w-4 ${slides[currentSlide].dark ? "bg-white/40" : "bg-[#354ee7]/30"}`}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="bg-white px-6 md:px-16 py-5 flex flex-wrap justify-center md:justify-around items-center gap-x-8 gap-y-4 border-t border-gray-100 shadow-sm">
      {["Técnicas Laborales", "Pregrados", "Especializaciones", "Maestrías"].map((label, i) => (
        <a
          key={label}
          href="#"
          className={`reveal delay-${(i + 1) * 100} font-['Archivo:SemiBold',sans-serif] font-semibold text-[15px] md:text-[17px] text-[#354ee7] hover:text-[#2a3ec0] transition-colors whitespace-nowrap`}
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {label}
        </a>
      ))}
    </div>
    </>
  );
}

// Progressive multi-step form
function FormProgresivo() {
  const [step, setStep] = useState(0);
  const [animDir, setAnimDir] = useState<"in" | "out">("in");
  const [icfes, setIcfes] = useState<"si" | "no" | null>(null);
  const [fields, setFields] = useState({
    nombre: "", apellido: "", email: "", celular: "",
    programa: "", departamento: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const steps = [
    {
      label: "Paso 1 de 3",
      title: "¿Cuéntanos sobre ti?",
      content: (
        <div className="flex flex-col gap-5">
          {/* ICFES check */}
          <div>
            <p className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[#132237] text-[15px] mb-3" style={{ fontVariationSettings: '"wdth" 100' }}>
              ¿Cuenta con resultados de pruebas ICFES?
            </p>
            <div className="flex gap-3">
              {(["Sí", "No"] as const).map((opt) => {
                const val = opt === "Sí" ? "si" : "no";
                const selected = icfes === val;
                return (
                  <button
                    key={opt}
                    onClick={() => setIcfes(val)}
                    className={`flex-1 py-3 rounded-[20px] text-[15px] font-['Archivo:SemiBold',sans-serif] transition-all duration-200 border-2 ${
                      selected
                        ? "bg-[#354ee7] text-white border-[#354ee7] shadow-[0_4px_14px_rgba(53,78,231,0.35)]"
                        : "bg-white text-[#354ee7] border-[#354ee7]/30 hover:border-[#354ee7]"
                    }`}
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {icfes === "no" && (
              <p className="mt-3 text-[13px] text-amber-600 font-['Archivo:Regular',sans-serif]" style={{ fontVariationSettings: '"wdth" 100' }}>
                Para ingresar a CEIPA es necesario contar con resultados de pruebas ICFES.
              </p>
            )}
          </div>
          <input
            value={fields.programa}
            onChange={e => setFields(f => ({ ...f, programa: e.target.value }))}
            placeholder="Tipo de programa de interés"
            className="bg-white rounded-[20px] shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] px-5 py-3 text-[13.3px] font-['Lato:Regular',sans-serif] text-gray-700 placeholder:text-[#aaa] border-none outline-none focus:ring-2 focus:ring-[#354ee7]/30 transition-all"
          />
        </div>
      ),
      canNext: icfes === "si" && fields.programa.trim() !== "",
    },
    {
      label: "Paso 2 de 3",
      title: "¿Cómo te llamamos?",
      content: (
        <div className="flex flex-col gap-4">
          <input
            value={fields.nombre}
            onChange={e => setFields(f => ({ ...f, nombre: e.target.value }))}
            placeholder="Nombre"
            className="bg-white rounded-[20px] shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] px-5 py-3 text-[13.3px] font-['Lato:Regular',sans-serif] text-gray-700 placeholder:text-[#aaa] border-none outline-none focus:ring-2 focus:ring-[#354ee7]/30 transition-all"
          />
          <input
            value={fields.apellido}
            onChange={e => setFields(f => ({ ...f, apellido: e.target.value }))}
            placeholder="Apellido"
            className="bg-white rounded-[20px] shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] px-5 py-3 text-[13.3px] font-['Lato:Regular',sans-serif] text-gray-700 placeholder:text-[#aaa] border-none outline-none focus:ring-2 focus:ring-[#354ee7]/30 transition-all"
          />
        </div>
      ),
      canNext: fields.nombre.trim() !== "" && fields.apellido.trim() !== "",
    },
    {
      label: "Paso 3 de 3",
      title: "¿Cómo te contactamos?",
      content: (
        <div className="flex flex-col gap-4">
          <input
            value={fields.email}
            onChange={e => setFields(f => ({ ...f, email: e.target.value }))}
            placeholder="E-mail"
            type="email"
            className="bg-white rounded-[20px] shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] px-5 py-3 text-[13.3px] font-['Lato:Regular',sans-serif] text-gray-700 placeholder:text-[#aaa] border-none outline-none focus:ring-2 focus:ring-[#354ee7]/30 transition-all"
          />
          <input
            value={fields.celular}
            onChange={e => setFields(f => ({ ...f, celular: e.target.value }))}
            placeholder="Número de celular"
            type="tel"
            className="bg-white rounded-[20px] shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] px-5 py-3 text-[13.3px] font-['Lato:Regular',sans-serif] text-gray-700 placeholder:text-[#aaa] border-none outline-none focus:ring-2 focus:ring-[#354ee7]/30 transition-all"
          />
          <input
            value={fields.departamento}
            onChange={e => setFields(f => ({ ...f, departamento: e.target.value }))}
            placeholder="Departamento en que reside"
            className="bg-white rounded-[20px] shadow-[0px_10px_10px_-5px_rgba(0,0,0,0.1)] px-5 py-3 text-[13.3px] font-['Lato:Regular',sans-serif] text-gray-700 placeholder:text-[#aaa] border-none outline-none focus:ring-2 focus:ring-[#354ee7]/30 transition-all"
          />
        </div>
      ),
      canNext: fields.email.trim() !== "" && fields.celular.trim() !== "" && fields.departamento.trim() !== "",
    },
  ];

  function goNext() {
    if (!steps[step].canNext) return;
    setAnimDir("out");
    setTimeout(() => {
      setStep(s => s + 1);
      setAnimDir("in");
    }, 280);
  }

  function goBack() {
    setAnimDir("out");
    setTimeout(() => {
      setStep(s => s - 1);
      setAnimDir("in");
    }, 280);
  }

  if (submitted) {
    return (
      <div className="reveal-right flex-1 w-full max-w-[946px] bg-gradient-to-b from-[#f0f3f6] to-white rounded-[40px] shadow-[0px_30px_63px_-42px_rgba(19,34,55,0.34)] border-2 border-[#d9d9d9] p-8 md:p-10 flex flex-col items-center justify-center min-h-[320px] text-center">
        <div className="w-16 h-16 rounded-full bg-[#354ee7] flex items-center justify-center mb-6">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
        </div>
        <p className="font-['Archivo:Bold',sans-serif] font-bold text-[#354ee7] text-[28px] mb-3" style={{ fontVariationSettings: '"wdth" 100' }}>¡Gracias, {fields.nombre}!</p>
        <p className="font-['Archivo:ExtraLight',sans-serif] font-extralight text-[16px] text-[#444] max-w-[360px]" style={{ fontVariationSettings: '"wdth" 100' }}>Hemos recibido tu información. Un asesor de CEIPA se pondrá en contacto contigo pronto.</p>
      </div>
    );
  }

  const current = steps[step];

  return (
    <div className="reveal-right flex-1 w-full max-w-[946px] bg-gradient-to-b from-[#f0f3f6] to-white rounded-[40px] shadow-[0px_30px_63px_-42px_rgba(19,34,55,0.34)] border-2 border-[#d9d9d9] overflow-hidden p-8 md:p-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-['Archivo:Regular',sans-serif] text-[#132237] text-[24px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          Estudia en CEIPA
        </h3>
        <span className="font-['Archivo:Regular',sans-serif] text-[13px] text-[#aaa]" style={{ fontVariationSettings: '"wdth" 100' }}>
          {current.label}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-1 bg-gray-200 rounded-full mb-6 overflow-hidden">
        <div
          className="h-full bg-[#354ee7] rounded-full transition-all duration-500"
          style={{ width: `${((step + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Step title + content with slide animation */}
      <div
        key={step}
        style={{
          animation: animDir === "in"
            ? "stepIn .28s ease both"
            : "stepOut .28s ease both",
        }}
      >
        <p className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[#060d37] text-[20px] mb-5" style={{ fontVariationSettings: '"wdth" 100' }}>
          {current.title}
        </p>
        {current.content}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 gap-4">
        {step > 0 ? (
          <button
            onClick={goBack}
            className="font-['Archivo:Regular',sans-serif] text-[15px] text-[#354ee7] flex items-center gap-1 hover:underline"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Atrás
          </button>
        ) : <div />}

        {step < steps.length - 1 ? (
          <button
            onClick={goNext}
            disabled={!current.canNext}
            className={`font-['Archivo:SemiBold',sans-serif] text-[16px] px-8 py-3 rounded-full transition-all duration-300 ${
              current.canNext
                ? "bg-[#354ee7] text-white hover:bg-[#2a3ec0] shadow-[0_4px_14px_rgba(53,78,231,0.35)]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Continuar →
          </button>
        ) : (
          <button
            onClick={() => { if (current.canNext) setSubmitted(true); }}
            disabled={!current.canNext}
            className={`font-['Archivo:SemiBold',sans-serif] text-[16px] px-8 py-3 rounded-full transition-all duration-300 ${
              current.canNext
                ? "bg-[#354ee7] text-white hover:bg-[#2a3ec0] shadow-[0_4px_14px_rgba(53,78,231,0.35)]"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Quiero más información
          </button>
        )}
      </div>

      <p className="font-['Roboto:Regular',sans-serif] text-[9px] text-center text-black mt-5" style={{ fontVariationSettings: '"wdth" 100' }}>
        Al enviar acepta los términos de uso. Lee aquí las{" "}
        <span className="underline">Política de Tratamiento y Protección de datos y Habeas Data</span>
      </p>

      <style>{`
        @keyframes stepIn {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes stepOut {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-32px); }
        }
      `}</style>
    </div>
  );
}

// Form section — scroll-driven sticky with 3 panels on the left
function FormSection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const [panel, setPanel] = useState(0);

  const panels = [
    {
      accent: "sit amet",
      title: "Lorem ipsum",
      body: "Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo dignissim magna",
    },
    {
      accent: "tu futuro",
      title: "empieza aquí",
      body: "Más de 30 años formando profesionales que prefieren hacer antes que memorizar. Programas con enfoque empresarial desde el primer semestre.",
    },
    {
      accent: "¡inscríbete",
      title: "sin costo!",
      body: "El proceso de admisión es sencillo y rápido. Nuestros asesores académicos te acompañarán en cada paso del camino.",
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (!outerRef.current) return;
      const { top, height } = outerRef.current.getBoundingClientRect();
      const scrollable = height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, -top / scrollable));
      setPanel(Math.min(panels.length - 1, Math.floor(progress * panels.length)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={outerRef} className="lg:h-[811px]">
      <div className="lg:sticky lg:top-0 lg:h-screen flex items-center lg:overflow-hidden bg-[#fafafa] py-16 lg:py-0">
        <div className="w-full max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-12 items-center">

          {/* Left: intro text — static single block on mobile (no room to scroll-jack a stacked layout), animated scroll-driven panels on desktop */}
          <div className="flex-1 max-w-[440px] w-full">
            {/* Mobile: static, in normal flow so it can never overlap the form below it */}
            <div className="lg:hidden" style={{ fontVariationSettings: '"wdth" 100' }}>
              <p className="font-['Archivo:Bold',sans-serif] font-bold leading-[0.85] text-[#354ee7] text-[52px] mb-1" style={{ fontVariationSettings: '"wdth" 100' }}>{panels[0].accent}</p>
              <p className="font-['Archivo:Regular',sans-serif] leading-[0.85] text-[52px] text-[#060d37]" style={{ fontVariationSettings: '"wdth" 100' }}>{panels[0].title}</p>
              <p className="font-['Archivo:ExtraLight',sans-serif] font-extralight text-[18px] text-black leading-[1.44] mt-8 max-w-[400px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                {panels[0].body}
              </p>
            </div>

            {/* Desktop: scroll-driven animated panels + progress dots */}
            <div className="hidden lg:block relative" style={{ minHeight: "260px" }}>
              {panels.map((p, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: i === panel ? 1 : 0,
                    transform: `translateY(${(i - panel) * 48}px)`,
                    transition: "opacity 0.55s cubic-bezier(0.4,0,0.2,1), transform 0.55s cubic-bezier(0.4,0,0.2,1)",
                    pointerEvents: i === panel ? "auto" : "none",
                    width: "100%",
                  }}
                >
                  <div style={{ fontVariationSettings: '"wdth" 100' }}>
                    <p className="font-['Archivo:Bold',sans-serif] font-bold leading-[0.85] text-[#354ee7] text-[52px] md:text-[60px] mb-1" style={{ fontVariationSettings: '"wdth" 100' }}>{p.accent}</p>
                    <p className="font-['Archivo:Regular',sans-serif] leading-[0.85] text-[52px] md:text-[60px] text-[#060d37]" style={{ fontVariationSettings: '"wdth" 100' }}>{p.title}</p>
                  </div>
                  <p className="font-['Archivo:ExtraLight',sans-serif] font-extralight text-[18px] md:text-[20px] text-black leading-[1.44] mt-8 max-w-[400px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    {p.body}
                  </p>
                </div>
              ))}
              {/* Progress dots */}
              <div className="absolute -bottom-10 left-0 flex gap-2">
                {panels.map((_, i) => (
                  <div
                    key={i}
                    className="rounded-full transition-all duration-400"
                    style={{
                      width: i === panel ? "28px" : "8px",
                      height: "8px",
                      background: i === panel ? "#354ee7" : "#354ee7/30",
                      backgroundColor: i === panel ? "#354ee7" : "rgba(53,78,231,0.25)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: interactive form */}
          <FormProgresivo />
        </div>
      </div>
    </div>
  );
}

// Academic offerings — Kerala/Komodo spec v3
function OfertaAcademica() {
  const slides = [
    {
      title: "Pregrados",
      tag: "Presencial & Virtual",
      desc: "Programas presenciales y virtuales diseñados para el mundo real, con enfoque empresarial desde el primer semestre.",
      bg: imgPregradosBg,
      card: imgPregradosCard,
    },
    {
      title: "Posgrados",
      tag: "Especialización",
      desc: "Especializaciones con enfoque en innovación empresarial para profesionales que buscan ir más lejos en su carrera.",
      bg: imgPosgradosBg,
      card: imgPosgradosCard,
    },
    {
      title: "Técnicas Laborales",
      tag: "Formación Técnica",
      desc: "Programas técnicos con alta empleabilidad para quienes quieren iniciar su carrera profesional rápidamente.",
      bg: imgTecnicasBg,
      card: imgTecnicasCard,
    },
    {
      title: "Educación continua",
      tag: "Cursos & Diplomados",
      desc: "Cursos y diplomados para profesionales en constante evolución, con horarios flexibles y modalidad virtual.",
      bg: imgEdContBg,
      card: imgEdContCard,
    },
    {
      title: "Maestrías",
      tag: "Alta Especialización",
      desc: "Lleva tu carrera al siguiente nivel con programas de maestría enfocados en investigación y liderazgo estratégico.",
      bg: imgMaestriasBg,
      card: imgMaestríasCard,
    },
  ];

  const N = slides.length;
  const [active, setActive] = useState(0);
  const [exiting, setExiting] = useState<number | null>(null);
  const [dir, setDir] = useState<"fwd" | "bwd">("fwd");
  const [going, setGoing] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [isStatic, setIsStatic] = useState(false);

  const activeRef = useRef(0);
  const goingRef = useRef(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const scrollDrivenRef = useRef(false);

  useEffect(() => { activeRef.current = active; }, [active]);
  useEffect(() => { goingRef.current = going; }, [going]);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400);
    return () => clearTimeout(t);
  }, []);

  // Plays the roller crossfade + advances `active` — used by both clicks and scroll progress.
  const activate = useCallback((idx: number) => {
    if (goingRef.current || idx === activeRef.current) return;
    const from = activeRef.current;
    const df = ((idx - from) + N) % N;
    const db = ((from - idx) + N) % N;
    setExiting(from);
    setDir(df <= db ? "fwd" : "bwd");
    setActive(idx);
    setGoing(true);
    setTimeout(() => { setExiting(null); setGoing(false); }, 900);
  }, [N]);

  // Scroll-driven carousel — mirrors Testimonios: `oferta-track` is a tall rail; while
  // scrolling through it, `oferta-sticky` stays pinned and the active program advances
  // with scroll progress. Falls back to click-only navigation for reduced-motion.
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const readScroll = () => {
      if (!scrollDrivenRef.current || !trackRef.current) return;
      const total = trackRef.current.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.min(Math.max(-trackRef.current.getBoundingClientRect().top / total, 0), 1);
      activate(Math.min(N - 1, Math.floor(progress * N)));
    };

    const measure = () => {
      const driven = !reduceMotion.matches;
      scrollDrivenRef.current = driven;
      setIsStatic(!driven);
      readScroll();
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => { ticking = false; readScroll(); });
      }
    };
    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(measure, 150); };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    reduceMotion.addEventListener("change", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      reduceMotion.removeEventListener("change", measure);
      clearTimeout(resizeTimer);
    };
  }, [N, activate]);

  // Click navigation — when scroll-driven, scrolls to the target's point in the rail
  // (like Testimonios' goTest) so clicks and scroll position never fight each other.
  const goTo = (idx: number) => {
    if (!scrollDrivenRef.current || !trackRef.current) { activate(idx); return; }
    const total = trackRef.current.offsetHeight - window.innerHeight;
    if (total <= 0) { activate(idx); return; }
    const trackTop = trackRef.current.getBoundingClientRect().top + window.scrollY;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: Math.round(trackTop + total * ((idx + 0.5) / N)), behavior: reduceMotion ? "auto" : "smooth" });
  };

  const toPrev = () => goTo((active - 1 + N) % N);
  const toNext = () => goTo((active + 1) % N);

  const entryKf = dir === "fwd" ? "oferta-currentUp" : "oferta-currentDown";
  const exitKf  = dir === "fwd" ? "oferta-prev"      : "oferta-next";

  const CARD_W = 256;
  const ACT_H  = 410;
  const NRM_H  = 320;
  const CARD_GAP = 20;

  const cardOrder = Array.from({ length: 4 }, (_, i) => (active + i) % slides.length);

  // Roller slot: ghost div sizes the container, two absolute layers animate
  function Roller({ curr, prev: prevContent, dur }: { curr: React.ReactNode; prev: React.ReactNode; dur: string }) {
    return (
      <div style={{ position: "relative", overflow: "hidden" }}>
        {/* ghost — sets natural height of container */}
        <div aria-hidden style={{ visibility: "hidden", pointerEvents: "none" }}>{curr}</div>
        {/* exiting layer */}
        {exiting !== null && (
          <div key={`x-${exiting}`} style={{ position: "absolute", inset: 0, animation: `${exitKf} ${dur} ease-in-out forwards` }}>
            {prevContent}
          </div>
        )}
        {/* entering layer */}
        <div key={`e-${active}`} style={{
          position: "absolute", inset: 0,
          animation: going && exiting !== null ? `${entryKf} ${dur} ease-in-out forwards` : undefined,
        }}>
          {curr}
        </div>
      </div>
    );
  }

  return (
    <section
      id="oferta-academica"
      role="region"
      aria-roledescription="carrusel de programas académicos"
      aria-label="Oferta Académica"
      className={isStatic ? "is-static" : undefined}
    >
      <div className="oferta-track" ref={trackRef}>
      <div className="oferta-sticky" ref={stickyRef}>
        {/* ── Background layer: crossfade + zoom ── */}
        {slides.map((sl, i) => (
          <div key={i} className="absolute inset-0" style={{ zIndex: 0, opacity: i === active ? 1 : 0, transition: "opacity 0.5s linear" }}>
            <img
              src={sl.bg}
              alt=""
              aria-hidden
              className="w-full h-full object-cover"
              style={{
                transform: i === active ? "scale(1)" : "scale(1.1)",
                transition: "transform 1s ease-in-out",
                animation: i === active ? "oferta-bgEnter 0.5s linear forwards" : undefined,
                filter: "blur(2px)",
              }}
            />
          </div>
        ))}

        {/* ── Gradient overlay: 150deg + stronger left vignette for text contrast ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 1, background: "linear-gradient(150deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.38) 50%, rgba(30,30,30,0.15) 100%)" }}
        />

        {/* ── Main content ── */}
        <div className="relative flex flex-col md:flex-row" style={{ zIndex: 2, minHeight: "100vh" }}>

          {/* LEFT column — full on mobile, 50% on desktop */}
          <div
            className="flex items-center w-full md:w-1/2"
            style={{ minWidth: "0", paddingLeft: "clamp(24px,10%,144px)", paddingRight: "clamp(16px,4%,32px)", paddingTop: "clamp(80px,12vh,120px)", paddingBottom: "clamp(32px,4vh,48px)" }}
          >
            {/* Vertical dot bar */}
            <div
              className="hidden md:flex flex-col justify-between items-center flex-shrink-0 relative"
              style={{
                width: "30px",
                height: "min(600px,70vh)",
                marginRight: "clamp(16px,4%,48px)",
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
              }}
            >
              <div style={{ position: "absolute", left: "50%", transform: "translateX(-50%)", top: "10px", bottom: "10px", width: "1px", background: "#B0B7D04D" }} />
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Programa ${i + 1} de ${slides.length}`}
                  style={{
                    width: "23px", height: "23px",
                    borderRadius: "100px",
                    background: "#B0B7D0",
                    border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transform: i === active ? "scale(1)" : "scale(0.304)",
                    transition: "transform 0.3s ease-in-out",
                    position: "relative", zIndex: 1,
                  }}
                >
                  <span style={{ color: "white", fontSize: "13px", fontWeight: "bold", opacity: i === active ? 1 : 0, transition: "opacity 0.3s" }}>
                    {i + 1}
                  </span>
                </button>
              ))}
            </div>

            {/* Text block */}
            <div style={{ flex: 1, minWidth: 0 }}>
              {/* Title roller — 0.8s */}
              <div style={{ marginBottom: "20px" }}>
                <Roller
                  dur="0.8s"
                  curr={
                    <h2
                      className="font-['Archivo:Bold',sans-serif] font-bold text-white"
                      style={{ fontSize: "clamp(30px,4.5vw,64px)", lineHeight: "1.15em", fontVariationSettings: '"wdth" 100', margin: 0 }}
                    >
                      {slides[active].title}
                    </h2>
                  }
                  prev={
                    exiting !== null ? (
                      <h2
                        className="font-['Archivo:Bold',sans-serif] font-bold text-white"
                        style={{ fontSize: "clamp(30px,4.5vw,64px)", lineHeight: "1.15em", fontVariationSettings: '"wdth" 100', margin: 0 }}
                      >
                        {slides[exiting].title}
                      </h2>
                    ) : null
                  }
                />
              </div>

              {/* Paragraph roller — 0.5s */}
              <div style={{ marginBottom: "28px" }}>
                <Roller
                  dur="0.5s"
                  curr={
                    <p
                      className="font-['Archivo:ExtraLight',sans-serif] text-white/85"
                      style={{ fontSize: "16px", lineHeight: "1.6", fontVariationSettings: '"wdth" 100', maxWidth: "420px", textShadow: "0 0 10px rgba(0,0,0,0.3)", margin: 0 }}
                    >
                      {slides[active].desc}
                    </p>
                  }
                  prev={
                    exiting !== null ? (
                      <p
                        className="font-['Archivo:ExtraLight',sans-serif] text-white/85"
                        style={{ fontSize: "16px", lineHeight: "1.6", fontVariationSettings: '"wdth" 100', maxWidth: "420px", textShadow: "0 0 10px rgba(0,0,0,0.3)", margin: 0 }}
                      >
                        {slides[exiting].desc}
                      </p>
                    ) : null
                  }
                />
              </div>

              {/* Button roller — 0.5s */}
              <div style={{ overflow: "hidden" }}>
                <Roller
                  dur="0.5s"
                  curr={
                    <button
                      className="font-['Archivo:SemiBold',sans-serif] text-white"
                      style={{ background: "#354EE7", padding: "15px 30px", fontSize: "16px", fontVariationSettings: '"wdth" 100', border: "none", cursor: "pointer", borderRadius: "8px" }}
                    >
                      Explorar programa
                    </button>
                  }
                  prev={
                    exiting !== null ? (
                      <button
                        className="font-['Archivo:SemiBold',sans-serif] text-white"
                        style={{ background: "#354EE7", padding: "15px 30px", fontSize: "16px", fontVariationSettings: '"wdth" 100', border: "none", cursor: "pointer", borderRadius: "8px" }}
                      >
                        Explorar programa
                      </button>
                    ) : null
                  }
                />
              </div>

              {/* Mobile controls: dots + arrows in one row */}
              <div
                className="flex items-center justify-between mt-8 md:hidden"
                style={{ opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease-in-out", maxWidth: "280px" }}
              >
                {/* Dots */}
                <div className="flex items-center gap-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Programa ${i + 1}`}
                      style={{
                        height: "7px",
                        width: i === active ? "23px" : "7px",
                        borderRadius: "100px",
                        background: i === active ? "#354EE7" : "rgba(255,255,255,0.5)",
                        transition: "all 0.3s ease-in-out",
                        border: "none", cursor: "pointer",
                      }}
                    />
                  ))}
                </div>
                {/* Arrows */}
                <div className="flex gap-2">
                  <button onClick={toPrev} aria-label="Anterior"
                    style={{ width: "36px", height: "36px", borderRadius: "100px", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                  </button>
                  <button onClick={toNext} aria-label="Siguiente"
                    style={{ width: "36px", height: "36px", borderRadius: "100px", background: "rgba(255,255,255,0.2)", border: "1px solid rgba(255,255,255,0.35)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT column — hidden on mobile, 50% on desktop */}
          <div
            className="hidden md:flex flex-col justify-center overflow-hidden"
            style={{
              flex: 1,
              minWidth: 0,
              paddingTop: "clamp(60px,8vh,100px)",
              paddingBottom: "clamp(40px,6vh,80px)",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateX(0)" : "translateX(100px)",
              transition: "opacity 0.8s ease-in-out, transform 0.8s ease-in-out",
            }}
          >
            {/* Card track: overflows right edge — natural clip from section overflow:hidden */}
            <div className="relative overflow-hidden" style={{ height: `${ACT_H + 20}px`, marginBottom: "20px" }}>
              {cardOrder.map((slideIdx, pos) => {
                const isActive = pos === 0;
                return (
                  <div
                    key={slideIdx + "-pos" + pos + "-" + active}
                    onClick={!isActive ? toNext : undefined}
                    style={{
                      position: "absolute",
                      left: `${pos * (CARD_W + CARD_GAP)}px`,
                      bottom: 0,
                      width: `${CARD_W}px`,
                      height: `${isActive ? ACT_H : NRM_H}px`,
                      borderRadius: "8px",
                      overflow: "hidden",
                      boxShadow: "0 0 50px rgba(0,0,0,0.15)",
                      cursor: isActive ? "default" : "pointer",
                      transition: "height 0.3s ease-in-out 0.2s, left 0.5s ease",
                    }}
                  >
                    <img src={slides[slideIdx].card} alt={slides[slideIdx].title} className="w-full h-full object-cover" />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(20deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 100%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 20px 25px" }}>
                      <p className="font-['Archivo:SemiBold',sans-serif] text-white" style={{ fontSize: "19px", fontVariationSettings: '"wdth" 100' }}>
                        {slides[slideIdx].title}
                      </p>
                      <p style={{ color: "#B7B7B7B8", fontSize: "14px", marginTop: "4px", fontFamily: "sans-serif" }}>
                        {slides[slideIdx].tag}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Arrows — spec: circular, #BDBDBD9C bg, #2C2B2B icon, radius 100px, 17px gap */}
            <div
              className="flex"
              style={{
                gap: "17px",
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.8s ease-in-out",
              }}
            >
              <button
                onClick={toPrev}
                aria-label="Programa anterior"
                style={{ width: "41px", height: "40px", borderRadius: "100px", background: "#BDBDBD9C", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C2B2B" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={toNext}
                aria-label="Siguiente programa"
                style={{ width: "41px", height: "40px", borderRadius: "100px", background: "#BDBDBD9C", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2C2B2B" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

// ¿Por qué CEIPA?
function PorQueCeipa() {
  return (
    <section className="py-16 md:py-24 max-w-[1440px] mx-auto px-6 md:px-16">
      <div className="flex flex-col lg:flex-row lg:items-end">
        {/* Big stacked title — overlaps the photo's left edge on large screens */}
        <div className="reveal-left relative z-10 flex-shrink-0 pb-4 lg:pb-8 lg:mr-[-72px] xl:mr-[-110px]">
          <p
            className="font-['Archivo:Bold',sans-serif] font-bold text-[#354ee7] text-[48px] md:text-[72px] lg:text-[84px] leading-[0.92] tracking-tight"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            ¿Por qué
            <br />
            CEIPA?
          </p>
        </div>

        {/* Photo, desaturated, with location/year captions below */}
        <div className="flex-1 min-w-0">
          <div className="reveal-scale h-[280px] md:h-[420px] lg:h-[560px] rounded-2xl overflow-hidden">
            <img alt="Por qué CEIPA" className="w-full h-full object-cover grayscale" src={imgPorQueCeipa} />
          </div>
          <div className="reveal delay-300 flex items-center justify-between mt-3">
            <span className="font-['Archivo:Regular',sans-serif] text-[13px] text-black/60" style={{ fontVariationSettings: '"wdth" 100' }}>
              Medellín, Colombia
            </span>
            <span className="font-['Archivo:Regular',sans-serif] text-[13px] text-black/60" style={{ fontVariationSettings: '"wdth" 100' }}>
              2026
            </span>
          </div>
        </div>

        {/* Arrow + short pitch, off to the side */}
        <div className="reveal-right delay-200 lg:w-[260px] xl:w-[300px] flex-shrink-0 pt-8 lg:pt-0 lg:pl-10 lg:pb-10 flex flex-col">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#354ee7" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M7 7h10v10" />
          </svg>
          <p
            className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[#060d37] text-[20px] leading-[1.2] mt-4 mb-2"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Formación con propósito
          </p>
          <p
            className="font-['Archivo:Regular',sans-serif] text-black/70 text-[14px] leading-[1.6]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo dignissim magna
          </p>
        </div>
      </div>
    </section>
  );
}

// Testimonios — sticky scroll-driven carousel, ported from the CEIPA HTML reference
// (degrades to a plain static list via `measureTest` when the content doesn't fit one screen,
// which is what avoids the overlap / dead-scroll-space bugs the old animated version had).
function Testimonios() {
  const testimonials = [
    { name: "María García", role: "Egresada Pregrado", text: "Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo dignissim magna aliquam.", img: imgTestiMaria },
    { name: "Carlos López", role: "Egresado Posgrado", text: "La formación en CEIPA transformó mi carrera profesional. El enfoque práctico y empresarial marca la diferencia desde el primer semestre.", img: imgTestiCarlos },
    { name: "Ana Martínez", role: "Estudiante activa", text: "Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo.", img: imgTestiAna },
  ];
  const N = testimonials.length;
  const pad = (v: number) => String(v).padStart(2, "0");

  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const scrollDrivenRef = useRef(false);

  const [active, setActive] = useState(0);
  const [isStatic, setIsStatic] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const readScroll = () => {
      if (!scrollDrivenRef.current || !trackRef.current) return;
      const total = trackRef.current.offsetHeight - window.innerHeight;
      if (total <= 0) return;
      const progress = Math.min(Math.max(-trackRef.current.getBoundingClientRect().top / total, 0), 1);
      setActive((prev) => {
        const next = Math.min(N - 1, Math.floor(progress * N));
        return prev === next ? prev : next;
      });
    };

    const measureTest = () => {
      if (!stickyRef.current || !wrapRef.current) return;
      const cs = getComputedStyle(stickyRef.current);
      const chrome = parseFloat(cs.paddingTop) + parseFloat(cs.paddingBottom);
      const fits = wrapRef.current.getBoundingClientRect().height + chrome <= window.innerHeight;
      const driven = fits && !reduceMotion.matches;
      scrollDrivenRef.current = driven;
      setIsStatic(!driven);
      readScroll();
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => { ticking = false; readScroll(); });
      }
    };

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(measureTest, 150);
    };

    measureTest();
    if (document.fonts?.ready) document.fonts.ready.then(measureTest);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    reduceMotion.addEventListener("change", measureTest);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      reduceMotion.removeEventListener("change", measureTest);
      clearTimeout(resizeTimer);
    };
  }, [N]);

  const goTest = (i: number) => {
    if (!scrollDrivenRef.current || !trackRef.current) { setActive(i); return; }
    const total = trackRef.current.offsetHeight - window.innerHeight;
    if (total <= 0) { setActive(i); return; }
    const trackTop = trackRef.current.getBoundingClientRect().top + window.scrollY;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: Math.round(trackTop + total * ((i + 0.5) / N)), behavior: reduceMotion ? "auto" : "smooth" });
  };

  const onDotKey = (e: KeyboardEvent, i: number) => {
    const step = ({ ArrowLeft: -1, ArrowUp: -1, ArrowRight: 1, ArrowDown: 1 } as Record<string, number>)[e.key];
    let next: number | null = null;
    if (step) next = (i + step + N) % N;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = N - 1;
    if (next === null) return;
    e.preventDefault();
    goTest(next);
  };

  const t = testimonials[active];
  const statusText = `Testimonio ${active + 1} de ${N}: ${t.name}, ${t.role}.`;

  return (
    <section id="testimonios" className={isStatic ? "is-static" : undefined} role="region" aria-roledescription="carrusel de testimonios" aria-labelledby="testimonios-title">
      <div className="test-track" ref={trackRef}>
        <div className="test-sticky" ref={stickyRef}>
          <div className="testimonios-wrap" ref={wrapRef}>
            <div className="testimonios-left">
              <h2 className="section-title" id="testimonios-title">Testimonios</h2>
              <p className="section-desc">Lo que dicen quienes ya vivieron la experiencia CEIPA.</p>
              <p className="test-counter" aria-hidden="true">
                <span>{pad(active + 1)}</span><span className="test-counter-sep">/</span><span>{pad(N)}</span>
              </p>
              <div className="test-dots" role="group" aria-label="Ir a un testimonio">
                {testimonials.map((tl, i) => (
                  <button
                    key={tl.name}
                    type="button"
                    className={`test-dot${i === active ? " is-active" : ""}`}
                    tabIndex={i === active ? 0 : -1}
                    aria-label={`Testimonio ${i + 1} de ${N}: ${tl.name}`}
                    aria-current={i === active}
                    onClick={() => goTest(i)}
                    onKeyDown={(e) => onDotKey(e, i)}
                  />
                ))}
              </div>
              <p className={`test-hint${active === N - 1 ? " is-done" : ""}`} aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
                Desplázate para ver más
              </p>
            </div>
            <div className="testimonios-list">
              {testimonials.map((tl, i) => (
                <article
                  key={tl.name}
                  className={`test-card${i === active ? " is-active" : ""}`}
                  aria-current={i === active}
                  onClick={() => goTest(i)}
                >
                  <div className="test-avatar"><img src={tl.img} alt="" loading="lazy" width={76} height={76} /></div>
                  <div className="test-body">
                    <p className="test-text">{tl.text}</p>
                    <p className="test-name">{tl.name} — {tl.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
      <p className="sr-only" aria-live="polite">{statusText}</p>
    </section>
  );
}

// Innovation text section
function InnovationText() {
  return (
    <section className="py-10 overflow-hidden">
      <div className="flex">
        <div className="innovation-scroll flex gap-8 items-center">
          {[1, 2].map((repeat) => (
            <p
              key={repeat}
              className="font-['Ancizar_Sans:Thin',sans-serif] font-thin text-[#354ee7] text-[100px] md:text-[160px] leading-[0.83] opacity-36 whitespace-nowrap"
            >
              Aquí la innovación no es una meta&nbsp;&nbsp;&nbsp;&nbsp;
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

// Financiación section
function Financiacion() {
  return (
    <section className="py-16 md:py-20 bg-[#d9d9d9] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-8 items-center">
        <div className="reveal-left flex-1 max-w-[700px] z-10">
          <p className="font-['Archivo:Bold',sans-serif] font-bold text-[#354ee7] text-[52px] md:text-[60px] leading-[0.83] mb-4" style={{ fontVariationSettings: '"wdth" 100' }}>
            Financiación
          </p>
          <p className="font-['Archivo:ExtraLight',sans-serif] font-extralight text-[18px] md:text-[20px] text-black leading-[1.44] max-w-[665px] mb-8" style={{ fontVariationSettings: '"wdth" 100' }}>
            Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo dignissim magna
          </p>
          <button className="bg-[#354ee7] text-white font-['Archivo:Regular',sans-serif] text-[18px] px-8 py-3 rounded-full hover:bg-[#2a3ec0] transition-all duration-300" style={{ fontVariationSettings: '"wdth" 100' }}>
            Quiero más información
          </button>
        </div>

        {/* Blue triangle decoration */}
        <div className="reveal-right flex-1 relative h-[300px] w-full">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 785 395" fill="none" preserveAspectRatio="xMidYMid meet">
            <path d="M785 0L0 395H785V0Z" fill="#354ee7" />
          </svg>
        </div>
      </div>
    </section>
  );
}

// Novedades
function Novedades() {
  const items = [
    { tag: "Académico", title: "CEIPA obtiene acreditación internacional de alta calidad", excerpt: "Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo.", date: "10 sep 2026", img: imgNovedadAcreditacion },
    { tag: "Eventos", title: "Feria de Emprendimiento CEIPA 2026: inscripciones abiertas", excerpt: "Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo.", date: "5 sep 2026", img: imgNovedadFeria },
    { tag: "Investigación", title: "Estudiantes CEIPA ganan primer lugar en concurso nacional de innovación", excerpt: "Vel tortor eleifend ornare feugiat fusce sem montes vestibulum faucibus, placerat congue lobortis accumsan pharetra commodo.", date: "1 sep 2026", img: imgNovedadConcurso },
  ];
  return (
    <section className="py-16 md:py-20 max-w-[1440px] mx-auto px-6 md:px-16">
      <div className="reveal flex flex-wrap items-end justify-between gap-4 mb-10">
        <div>
          <p className="font-['Archivo:Bold',sans-serif] font-bold text-[#354ee7] text-[52px] md:text-[60px] leading-[0.83] mb-3" style={{ fontVariationSettings: '"wdth" 100' }}>Novedades</p>
          <p className="font-['Archivo:ExtraLight',sans-serif] font-extralight text-[18px] text-black leading-[1.44] max-w-[460px]" style={{ fontVariationSettings: '"wdth" 100' }}>Entérate de lo último en CEIPA: eventos, logros académicos y todo lo que nos hace únicos.</p>
        </div>
        <a href="#" className="flex-shrink-0 bg-[#354ee7] font-['Archivo:SemiBold',sans-serif] text-white text-[15px] px-7 py-3 rounded-lg hover:bg-[#2a3ec0] transition-all duration-300" style={{ fontVariationSettings: '"wdth" 100', margin: 0 }}>Ver todas</a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={item.title} className={`reveal delay-${(i + 1) * 100} bg-white rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.07)] flex flex-col group hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(0,0,0,0.12)] transition-all duration-300`}>
            <div className="h-[200px] overflow-hidden">
              <img alt={item.title} src={item.img} className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-400" />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="inline-block bg-[#354ee7]/10 text-[#354ee7] font-['Archivo:SemiBold',sans-serif] text-[12px] px-3 py-1 rounded-full mb-3 tracking-[.4px]" style={{ fontVariationSettings: '"wdth" 100' }}>{item.tag}</span>
              <p className="font-['Archivo:Bold',sans-serif] font-bold text-[#060d37] text-[18px] leading-[1.3] mb-2.5" style={{ fontVariationSettings: '"wdth" 100' }}>{item.title}</p>
              <p className="font-['Archivo:ExtraLight',sans-serif] font-extralight text-[14px] text-[#555] leading-[1.55] flex-1" style={{ fontVariationSettings: '"wdth" 100' }}>{item.excerpt}</p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                <span className="text-[12px] text-gray-400 font-['Archivo:Regular',sans-serif]">{item.date}</span>
                <a href="#" className="flex items-center gap-1 text-[13px] font-['Archivo:SemiBold',sans-serif] text-[#354ee7] hover:gap-2 transition-all duration-200" style={{ fontVariationSettings: '"wdth" 100' }}>
                  Leer más
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// FAQs
function Faqs() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    { q: "¿Cuáles son los requisitos de admisión?", a: "Para ingresar a CEIPA debes presentar tu diploma de bachiller, documento de identidad, formulario de inscripción diligenciado y el pago de los derechos de inscripción. Algunos programas pueden requerir entrevista o prueba de conocimientos." },
    { q: "¿Qué modalidades de estudio ofrece CEIPA?", a: "Ofrecemos modalidad presencial, virtual y a distancia. Nuestros programas están diseñados para que puedas estudiar según tu ritmo de vida, con flexibilidad de horarios y acceso a plataformas digitales de última generación." },
    { q: "¿Qué opciones de financiación existen?", a: "Contamos con convenios con el ICETEX, créditos directos con la institución, becas por mérito académico y alianzas con entidades financieras para facilitar el acceso a la educación superior." },
    { q: "¿CEIPA está acreditada por el Ministerio de Educación?", a: "Sí. CEIPA cuenta con registro calificado y acreditación de alta calidad otorgados por el Ministerio de Educación Nacional de Colombia, además de reconocimientos internacionales que avalan la excelencia de nuestros programas." },
    { q: "¿Puedo homologar materias de otra universidad?", a: "Sí, CEIPA cuenta con un proceso formal de homologación y transferencia. Debes presentar los microcurrículos de las asignaturas cursadas y el comité académico evaluará cuáles aplican para cada programa." },
    { q: "¿Qué es el modelo 'Powered by Arizona State University'?", a: "Es una alianza estratégica con Arizona State University (ASU), reconocida como la universidad más innovadora de EE. UU. Esta colaboración incorpora metodologías, recursos académicos y certificaciones de clase mundial en nuestros programas." },
  ];
  return (
    <section className="py-16 md:py-20 bg-[#d9d9d9]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 flex flex-col lg:flex-row gap-12">
        <div className="reveal-left flex-shrink-0 max-w-[380px]">
          <p className="font-['Archivo:Bold',sans-serif] font-bold text-[#354ee7] text-[52px] md:text-[60px] leading-[0.83] mb-4" style={{ fontVariationSettings: '"wdth" 100' }}>Preguntas frecuentes</p>
          <p className="font-['Archivo:ExtraLight',sans-serif] font-extralight text-[18px] md:text-[20px] text-black leading-[1.44]" style={{ fontVariationSettings: '"wdth" 100' }}>Resolvemos las dudas más comunes sobre nuestros programas, admisiones y vida universitaria en CEIPA.</p>
        </div>
        <div className="reveal-right flex-1 flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={i} className={`bg-white rounded-2xl overflow-hidden transition-shadow duration-200 ${isOpen ? "shadow-[0_4px_20px_rgba(53,78,231,0.15)]" : "shadow-[0_2px_12px_rgba(0,0,0,0.06)]"}`}>
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className={`font-['Archivo:SemiBold',sans-serif] font-semibold text-[16px] transition-colors ${isOpen ? "text-[#354ee7]" : "text-[#060d37]"}`} style={{ fontVariationSettings: '"wdth" 100' }}>{faq.q}</span>
                  <span className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-all duration-300 ${isOpen ? "bg-[#354ee7] rotate-45" : "bg-[#354ee7]/10"}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={isOpen ? "#fff" : "#354ee7"} strokeWidth={2.5} strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-350 ${isOpen ? "max-h-[300px] pb-5" : "max-h-0"}`}>
                  <p className="font-['Archivo:ExtraLight',sans-serif] font-extralight text-[15px] text-[#444] leading-[1.65] px-6" style={{ fontVariationSettings: '"wdth" 100' }}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Llamado a la acción — matricúlate ahora
function CtaMatricula() {
  return (
    <section className="py-16 md:py-20 max-w-[1440px] mx-auto px-6 md:px-16">
      <div
        className="reveal-scale relative overflow-hidden rounded-[45px] px-8 py-14 md:px-16 md:py-20 text-center"
        style={{ background: "linear-gradient(135deg, #4450f2 0%, #4450f2 55%, #8afff6 100%)" }}
      >
        {/* Decorative glow accents */}
        <div className="absolute -top-24 -left-24 w-[280px] h-[280px] rounded-full bg-white/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-[320px] h-[320px] rounded-full bg-white/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-[960px] mx-auto">
          <p
            className="font-['Archivo:Bold',sans-serif] font-bold text-white leading-[1.05] mb-4 md:whitespace-nowrap"
            style={{ fontVariationSettings: '"wdth" 100', fontSize: "clamp(26px, 3.6vw, 40px)" }}
          >
            ¿Listo para dar el siguiente paso?
          </p>
          <p
            className="font-['Archivo:ExtraLight',sans-serif] font-extralight text-white/90 text-[17px] md:text-[20px] leading-[1.5] mb-9 max-w-[320px] md:max-w-[700px] mx-auto"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Inicia hoy tu proceso de admisión y da el primer paso hacia la carrera que quieres. Nuestros asesores te acompañan en cada momento del camino.
          </p>
          <button
            className="bg-white text-[#4450f2] font-['Archivo:SemiBold',sans-serif] font-semibold text-[17px] px-10 py-4 rounded-full hover:bg-white/90 transition-all duration-300 hover:scale-[1.04] shadow-[0_12px_32px_rgba(6,13,55,0.25)]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            ¡Matricúlate ahora!
          </button>
        </div>
      </div>
    </section>
  );
}

// Accreditations
function Acreditaciones() {
  const seals = [
    { name: "Acreditación Institucional en Alta Calidad", img: imgSelloAltaCalidad },
    { name: "Sello AAA Corantioquia", img: imgSelloAAA },
    { name: "4 estrellas QS Stars", img: imgSelloQsStars },
    { name: "EQUAA Awards 2023", img: imgSelloEquaa2023 },
    { name: "Sello Lifelong Learning University", img: imgSelloLifelong },
    { name: "Premios LATAM Digital", img: imgSelloLatamDigital },
    { name: "EQUAA Awards 2022", img: imgSelloEquaa2022 },
    { name: "EQUAA Awards 2025", img: imgSelloEquaa2025 },
    { name: "The Impact Rankings", img: imgSelloImpactRankings },
  ];
  return (
    <section className="py-12 max-w-[1440px] mx-auto px-6 md:px-16 overflow-hidden">
      <p className="reveal text-center font-['Archivo:SemiBold',sans-serif] font-semibold text-[#71717a] text-[13px] tracking-[0.52px] mb-8" style={{ fontVariationSettings: '"wdth" 100' }}>
        ACREDITACIONES Y RECONOCIMIENTOS
      </p>
      <div className="overflow-hidden">
        <div className="seals-scroll flex items-center">
          {[0, 1].map((rep) => (
            <div key={rep} className="flex items-center gap-6 flex-shrink-0 pr-6">
              {seals.map((seal) => (
                <div
                  key={seal.name}
                  className="group relative bg-white border border-[#e5e5e5] rounded-[10px] h-[150px] w-[200px] flex-shrink-0 flex items-center justify-center p-6"
                >
                  <img src={seal.img} alt={seal.name} className="max-h-full max-w-full object-contain" />
                  <div className="absolute inset-0 rounded-[10px] bg-[#060d37]/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                    <span className="font-['Archivo:SemiBold',sans-serif] font-semibold text-white text-[16px] leading-[1.35]" style={{ fontVariationSettings: '"wdth" 100' }}>
                      {seal.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const footerLinks = [
    {
      title: "Estudia en CEIPA",
      links: ["Pregrados", "Posgrados", "Educación continua", "Admisiones"],
    },
    {
      title: "Estudiantes",
      links: ["Portal académico", "Bienestar universitario", "Egresados"],
    },
    {
      title: "CEIPA",
      links: ["Institución", "Entorno empresarial", "Actualidad", "Contacto"],
    },
    {
      title: "Recibe novedades",
      links: [],
      isNewsletter: true,
    },
  ];

  const legalLines = [
    "Fundación Universitaria CEIPA, Institución de Educación Superior VIGILADA MINEDUCACIÓN SNIES 2727",
    "Acreditada en Alta Calidad mediante Resolución No. 016362 del 23 de Junio de 2026 por el término de 6 años.",
  ];

  const legalEmails = [
    { label: "Correo de notificaciones judiciales", email: "notificacionesjudiciales@ceipa.edu.co" },
    { label: "Correo de tratamiento de datos", email: "tratramientodedatos@ceipa.edu.co" },
    { label: "Línea Ética", email: "lineaetica@ceipa.edu.co" },
  ];

  return (
    <footer className="bg-[#120957] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-12 border-b border-white/12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div>
            <img alt="CEIPA" className="h-10 mb-4 object-contain" src={imgCeipaWhite} />
            <img alt="Certificado ISO 9001:2015 — Bureau Veritas" className="h-[90px] object-contain bg-white rounded-lg p-2" src={imgCertificadoIso} />
          </div>

          {/* Link columns */}
          {footerLinks.slice(0, 3).map((col) => (
            <div key={col.title}>
              <p className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[13px] text-white mb-4" style={{ fontVariationSettings: '"wdth" 100' }}>
                {col.title}
              </p>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block font-['Archivo:Regular',sans-serif] text-[#a5a1e8] text-[14px] mb-3 hover:text-white transition-colors"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <p className="font-['Archivo:SemiBold',sans-serif] font-semibold text-[13px] text-white mb-4" style={{ fontVariationSettings: '"wdth" 100' }}>
              Recibe novedades
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 bg-white/10 border border-white/25 rounded-lg px-3 py-2 text-[13px] text-white placeholder:text-white/50 outline-none focus:border-[#354ee7] transition-colors font-['Archivo:Regular',sans-serif]"
              />
              <button className="bg-[#354ee7] text-white font-['Archivo:SemiBold',sans-serif] text-[13px] px-4 py-2 rounded-lg hover:bg-[#2a3ec0] transition-colors" style={{ fontVariationSettings: '"wdth" 100' }}>
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Legal / regulatory notices */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-8 border-b border-white/12 flex flex-col gap-2">
        {legalLines.map((line) => (
          <p key={line} className="font-['Archivo:Regular',sans-serif] text-[#a5a1e8] text-[12px] leading-[1.6] max-w-[900px]" style={{ fontVariationSettings: '"wdth" 100' }}>
            {line}
          </p>
        ))}
        <div className="flex flex-wrap gap-x-8 gap-y-1 mt-2">
          {legalEmails.map((item) => (
            <p key={item.email} className="font-['Archivo:Regular',sans-serif] text-[#a5a1e8] text-[12px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              {item.label}:{" "}
              <a href={`mailto:${item.email}`} className="text-white hover:underline">
                {item.email}
              </a>
            </p>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-16 py-4 flex flex-col md:flex-row items-center justify-between gap-2 flex-wrap">
        <p className="font-['Archivo:Regular',sans-serif] text-[#7f7ac0] text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>
          © 2026 CEIPA. Todos los derechos reservados.
        </p>
        <div className="flex gap-6">
          {["Términos de uso", "Política de tratamiento de datos", "Habeas Data"].map((link) => (
            <a
              key={link}
              href="#"
              className="font-['Archivo:Regular',sans-serif] text-[#7f7ac0] text-[13px] hover:text-white transition-colors"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  useScrollReveal();

  return (
    <div className="bg-[#fafafa] min-h-screen" style={{ overflowX: "clip" }}>
      <Nav />
      <Hero />
      <FormSection />
      <OfertaAcademica />
      <PorQueCeipa />
      <Testimonios />
      <InnovationText />
      <Financiacion />
      <Novedades />
      <Acreditaciones />
      <Faqs />
      <CtaMatricula />
      <Footer />
    </div>
  );
}
