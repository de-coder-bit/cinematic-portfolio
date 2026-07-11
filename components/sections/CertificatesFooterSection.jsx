"use client";

import { useEffect, useRef, Fragment } from "react";
import Image from "next/image";
import * as THREE from "three";
import { gsap } from "@/lib/gsap";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
  FaDiscord,
} from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiX } from "react-icons/si";
import {
  FiArrowUpRight,
  FiChevronDown,
  FiAward,
  FiFileText,
} from "react-icons/fi";
import profile from "@/data/profile.json";
import content from "@/data/content.json";
import styles from "@/styles/sections/CertificatesFooterSection.module.css";
import ccStyles from "@/styles/sections/ContactChannels.module.css";

const CERTS = profile.certificates;
const GITHUB_CTA = profile.githubCta;

// ── All contact channels for the premium footer grid ──
// Update hrefs/handles here any time — this is the single source of truth
// for the footer contact links (independent of profile.json's `socials`).
const CHANNELS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/deepak-verma-b552b5285/",
    icon: <FaLinkedinIn size={15} />,
    preferred: true,
  },
  {
    label: "Gmail",
    href: "mailto:deepakverma4336@gmail.com",
    icon: <FaEnvelope size={14} />,
    preferred: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/de-coder-bit",
    icon: <FaGithub size={15} />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917999983308",
    icon: <FaWhatsapp size={15} />,
    preferred: true,
  },
  {
    label: "Telegram",
    href: "https://t.me/debitcoder",
    icon: <FaTelegramPlane size={14} />,
  },
  {
    label: "Discord",
    copy: "deepak_dev7_99581",
    icon: <FaDiscord size={15} />,
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/deepakverma4336",
    icon: <SiCodeforces size={14} />,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/gamer_greg/",
    icon: <SiLeetcode size={14} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/p.a.t.ell/",
    icon: <FaInstagram size={15} />,
  },
  {
    label: "X",
    href: "https://x.com/deepak_ver47502",
    icon: <SiX size={13} />,
  },
  {
    label: "Arcade",
    href: "https://www.skills.google/",
    icon: <FiAward size={15} />,
  },
];
const RESUME_URL =
  "https://drive.google.com/file/d/1hGvhbWi8itIggYDHCZ-ZX4IvENqQTal9/view?usp=drive_link";

function ContactChannels({ variant = "desktop" }) {
  function handleCopy(e, value) {
    e.preventDefault();
    if (navigator.clipboard?.writeText) navigator.clipboard.writeText(value);
  }

  return (
    <div
      className={`${ccStyles.grid} ${variant === "mobile" ? ccStyles.mobile : ""}`}
    >
      {CHANNELS.map((c) => {
        const isCopy = !c.href;
        const Tag = isCopy ? "button" : "a";
        return (
          <Tag
            key={c.label}
            className={`${ccStyles.item} ${c.preferred ? ccStyles.pref : ""}`}
            href={c.href}
            target={c.href ? "_blank" : undefined}
            rel={c.href ? "noopener noreferrer" : undefined}
            type={isCopy ? "button" : undefined}
            onClick={isCopy ? (e) => handleCopy(e, c.copy) : undefined}
            title={isCopy ? `Copy: ${c.copy}` : c.label}
          >
            <span className={ccStyles.icon}>{c.icon}</span>
            <span className={ccStyles.label}>{c.label}</span>
          </Tag>
        );
      })}
      <a
        className={ccStyles.resume}
        href={RESUME_URL}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiFileText size={12} />
        Resume
      </a>
    </div>
  );
}

const VID_VERT = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const VID_FRAG = `
  uniform sampler2D uVideo;
  uniform float uOpacity;
  uniform float uVideoAspect;
  uniform float uCanvasAspect;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    if (uCanvasAspect > uVideoAspect) {
      float s = uVideoAspect / uCanvasAspect;
      uv.y = (vUv.y - 0.5) * s + 0.5;
    } else {
      float s = uCanvasAspect / uVideoAspect;
      uv.x = (vUv.x - 0.5) * s + 0.5;
    }
    vec4 tex = texture2D(uVideo, uv);
    float fadeY =
      smoothstep(0.0, 0.05, uv.y) *
      smoothstep(1.0, 0.95, uv.y);
    float alpha = fadeY * uOpacity;
    float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    vec3 col = mix(vec3(lum), tex.rgb, 0.72);
    float vx = smoothstep(0.0, 0.38, abs(uv.x - 0.5) * 2.0);
    vec3 dark = vec3(0.008, 0.008, 0.008);
    col = mix(col, dark, vx * 0.82);
    col *= 0.68;
    gl_FragColor = vec4(col, alpha);
  }
`;

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function handleViewProjects() {
  const scroller = document.querySelector("main");
  if (scroller)
    gsap.to(scroller, {
      scrollTop: 3 * window.innerHeight,
      duration: 1.0,
      ease: "power3.inOut",
    });
}

export default function CertificatesFooterSection() {
  const wrapperRef = useRef(null);
  const stickyRef = useRef(null);

  // image
  const imageWrapRef = useRef(null);
  const imageOverlayRef = useRef(null);

  // certificate content
  const pubContentRef = useRef(null);
  const labelRef = useRef(null);
  const headingRef = useRef(null);
  const dividerRef = useRef(null);
  const itemRefs = useRef([]);

  // image-only interstitial
  const interstitialRef = useRef(null);

  // footer
  const canvasRef = useRef(null);
  const videoSrcRef = useRef(null);
  const footerContentRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const bigNameRef = useRef(null);
  const bottomBarRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const sticky = stickyRef.current;
    const canvas = canvasRef.current;
    const videoEl = videoSrcRef.current;
    const scroller = document.querySelector("main");
    if (!wrapper || !sticky || !scroller) return;

    const isMobile = window.innerWidth < 768;

    let renderer,
      vidUni,
      rafId,
      videoPlaying = false;
    let onMouseMove = () => {},
      onResize = () => {};

    if (!isMobile && canvas && videoEl) {
      // ── Three.js video setup ────────────────────────────────
      const W = sticky.offsetWidth;
      const H = sticky.offsetHeight;

      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: false,
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(W, H);
      renderer.setClearColor(0x000000, 0);

      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(
        -W / 2,
        W / 2,
        H / 2,
        -H / 2,
        0.1,
        100,
      );
      camera.position.z = 10;

      videoEl.src = "/assets/footer-video.mp4";
      videoEl.muted = true;
      videoEl.playsInline = true;
      videoEl.loop = true;
      videoEl.preload = "auto";

      const vidTex = new THREE.VideoTexture(videoEl);
      vidTex.minFilter = THREE.LinearFilter;
      vidTex.magFilter = THREE.LinearFilter;

      vidUni = {
        uVideo: { value: vidTex },
        uOpacity: { value: 0 },
        uVideoAspect: { value: 16 / 9 },
        uCanvasAspect: { value: W / H },
      };
      videoEl.addEventListener(
        "loadedmetadata",
        () => {
          if (videoEl.videoWidth && videoEl.videoHeight)
            vidUni.uVideoAspect.value =
              videoEl.videoWidth / videoEl.videoHeight;
        },
        { once: true },
      );
      const vidMat = new THREE.ShaderMaterial({
        uniforms: vidUni,
        vertexShader: VID_VERT,
        fragmentShader: VID_FRAG,
        transparent: true,
      });
      const vidMesh = new THREE.Mesh(
        new THREE.PlaneGeometry(W * 1.08, H * 1.08),
        vidMat,
      );
      vidMesh.position.z = 1;
      scene.add(vidMesh);

      const mx = { tx: 0, ty: 0, x: 0, y: 0 };
      onMouseMove = function (e) {
        const r = sticky.getBoundingClientRect();
        mx.tx = (e.clientX - r.left) / r.width - 0.5;
        mx.ty = (e.clientY - r.top) / r.height - 0.5;
      };
      sticky.addEventListener("mousemove", onMouseMove);

      onResize = function () {
        const w = sticky.offsetWidth;
        const h = sticky.offsetHeight;
        renderer.setSize(w, h);
        camera.left = -w / 2;
        camera.right = w / 2;
        camera.top = h / 2;
        camera.bottom = -h / 2;
        camera.updateProjectionMatrix();
        vidUni.uCanvasAspect.value = w / h;
      };
      window.addEventListener("resize", onResize);

      function tick() {
        rafId = requestAnimationFrame(tick);
        mx.x += (mx.tx - mx.x) * 0.04;
        mx.y += (mx.ty - mx.y) * 0.04;
        vidMesh.position.x = mx.x * 14;
        vidMesh.position.y = mx.y * -8;
        vidTex.needsUpdate = true;
        renderer.render(scene, camera);
      }
      tick();
    }

    // ── Certificate entry animation ───────────────────────────
    let pubAnimDone = false;

    function resetPubAnim() {
      pubAnimDone = false;
      gsap.set(labelRef.current, {
        opacity: 0,
        y: -16,
        rotateX: 40,
        transformPerspective: 500,
        transformOrigin: "50% 0%",
      });
      gsap.set(headingRef.current, {
        opacity: 0,
        y: -30,
        rotateX: 35,
        transformPerspective: 700,
        transformOrigin: "50% 0%",
      });
      gsap.set(dividerRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });
      itemRefs.current.forEach((el) => {
        if (el)
          gsap.set(el, {
            opacity: 0,
            y: 28,
            rotateX: 18,
            transformPerspective: 900,
            transformOrigin: "50% 0%",
          });
      });
    }

    function playPubAnim() {
      if (pubAnimDone) return;
      pubAnimDone = true;
      gsap.to(labelRef.current, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.55,
        ease: "power3.out",
      });
      gsap.to(headingRef.current, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.75,
        ease: "expo.out",
        delay: 0.08,
      });
      gsap.to(dividerRef.current, {
        scaleX: 1,
        duration: 0.7,
        ease: "power2.inOut",
        delay: 0.25,
      });
      itemRefs.current.forEach((el, i) => {
        if (el)
          gsap.to(el, {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.6,
            ease: "power3.out",
            delay: 0.32 + i * 0.1,
          });
      });
    }

    // ── Initial image position (full-width background) ───────
    function setImageLeft() {
      const vw = window.innerWidth;
      gsap.set(imageWrapRef.current, { width: vw, x: 0, opacity: 1 });
      if (imageOverlayRef.current)
        gsap.set(imageOverlayRef.current, { opacity: 1 });
    }

    // ── Scroll-driven animation ───────────────────────────────
    function onScroll() {
      const vh = window.innerHeight;
      // getBoundingClientRect is reliable regardless of offsetParent chain or navbar
      const dist = -wrapper.getBoundingClientRect().top;

      // Entry: play pub animation when section first enters view
      if (dist > -vh * 0.5 && dist < vh * 0.35) {
        playPubAnim();
      } else if (dist < -vh * 0.4) {
        resetPubAnim();
        setImageLeft();
      }

      // 300vh/svh wrapper → 2 viewports of scroll travel (same for mobile + desktop)
      const p = Math.max(0, Math.min(1, dist / (2 * vh)));

      // ── Phase 1: pub text fades out ──────────────────────
      // Mobile: p 0 → 0.25 | Desktop: p 0 → 0.28
      const pubFadeEnd = isMobile ? 0.25 : 0.28;
      const pubFade = 1 - Math.max(0, Math.min(1, p / pubFadeEnd));
      gsap.set(pubContentRef.current, {
        opacity: pubFade,
        pointerEvents: pubFade > 0.05 ? "auto" : "none",
      });

      const vw = window.innerWidth;

      if (isMobile) {
        // footer-mobile.webp static background - interstitial fades between pub and footer
        const interIn = Math.max(0, Math.min(1, (p - 0.28) / 0.17));
        const interOut = Math.max(0, Math.min(1, (p - 0.6) / 0.12));
        gsap.set(interstitialRef.current, {
          opacity: interIn * (1 - interOut),
          pointerEvents: "none",
        });
      } else {
        // ── Phase 2: image shrinks full-width → centered (p 0.12 → 0.65) ──
        const imgRaw = Math.max(0, Math.min(1, (p - 0.12) / 0.53));
        const imgP = easeInOut(imgRaw);

        const startW = vw;
        const endW = vw * 0.46;
        const w = startW + imgP * (endW - startW);
        const centerX = (imgP * (vw - w)) / 2;

        // Dark overlay fades as image shrinks
        if (imageOverlayRef.current) {
          gsap.set(imageOverlayRef.current, { opacity: 1 - imgP });
        }

        // ── Interstitial: fade in after pub, fade out before crossfade ──
        const interIn = Math.max(0, Math.min(1, (p - 0.25) / 0.15));
        const interOut = Math.max(0, Math.min(1, (p - 0.54) / 0.14));
        gsap.set(interstitialRef.current, {
          opacity: interIn * (1 - interOut),
          pointerEvents: "none",
        });

        // ── Phase 3: sine-eased crossfade image → video (p 0.65 → 0.92) ──
        // Sine ease: both curves share same t so they are perceptually matched
        const xfadeRaw = Math.max(0, Math.min(1, (p - 0.65) / 0.27));
        const xfade = 0.5 - 0.5 * Math.cos(Math.PI * xfadeRaw);

        gsap.set(imageWrapRef.current, {
          width: w,
          x: centerX,
          opacity: 1 - xfade,
        });
        vidUni.uOpacity.value = xfade;

        if (xfade > 0.04 && !videoPlaying) {
          videoPlaying = true;
          videoEl.play().catch(() => {});
        } else if (xfade <= 0.04 && videoPlaying) {
          videoPlaying = false;
          videoEl.pause();
          videoEl.currentTime = 0;
        }
      }

      // ── Footer text fades in ──────────────────────────────
      // Mobile: p 0.72 → 0.92 | Desktop: p 0.75 → 1.0
      const footerStart = isMobile ? 0.72 : 0.75;
      const footerRange = isMobile ? 0.2 : 0.25;
      const footerFade = Math.max(
        0,
        Math.min(1, (p - footerStart) / footerRange),
      );
      gsap.set(footerContentRef.current, {
        opacity: footerFade,
        pointerEvents: footerFade > 0.05 ? "auto" : "none",
      });
    }

    resetPubAnim();
    setImageLeft();
    scroller.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      scroller.removeEventListener("scroll", onScroll);
      sticky.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (renderer) renderer.dispose();
    };
  }, []);

  const year = new Date().getFullYear();

  return (
    <div ref={wrapperRef} className={styles.wrapper}>
      <div ref={stickyRef} className={styles.sticky}>
        {/* ── Video canvas (footer background - desktop) ── */}
        <canvas ref={canvasRef} className={styles.glCanvas} />
        <video ref={videoSrcRef} className={styles.hiddenVideo} />

        {/* ── Mobile background image (footer phase - mobile only) ── */}
        <div className={styles.mobileFooterBg}>
          <Image
            src="/assets/footer-mobile.webp"
            alt=""
            fill
            quality={100}
            className={styles.mobileFooterBgImg}
            sizes="100vw"
            priority={false}
          />
        </div>

        {/* ── Mobile permanent dark overlay - keeps image visually identical across all 3 sections ── */}
        <div className={styles.mobileDarkOverlay} aria-hidden />

        {/* ── Floating image: starts left, moves to center ── */}
        <div ref={imageWrapRef} className={styles.imageWrap}>
          <Image
            src="/assets/footer.png"
            alt=""
            fill
            quality={100}
            className={styles.imageEl}
            sizes="(max-width: 767px) 100vw, 50vw"
            priority={false}
          />
          <div ref={imageOverlayRef} className={styles.imageOverlay} />
        </div>

        {/* ── Certificate content (right of image) ── */}
        <div ref={pubContentRef} className={styles.pubContent}>
          <span className={styles.watermark} aria-hidden>
            CERTIFIED
          </span>

          <div className={styles.pubHero}>
            <p ref={labelRef} className={styles.label}>
              Certifications &amp; Code
            </p>
            <h2 ref={headingRef} className={styles.heading}>
              Certificates
            </h2>
          </div>

          <div ref={dividerRef} className={styles.divider} />

          <div className={styles.list}>
            {CERTS.map((cert, i) => (
              <a
                key={cert.id}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => {
                  itemRefs.current[i] = el;
                }}
                className={styles.item}
              >
                <div className={styles.num}>0{i + 1}.</div>
                <div className={styles.certThumb}>
                  {cert.image ? (
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      sizes="56px"
                      className={styles.certThumbImg}
                    />
                  ) : (
                    <FiAward size={18} className={styles.certThumbIcon} />
                  )}
                </div>
                <div className={styles.itemBody}>
                  <div className={styles.itemTop}>
                    <h3 className={styles.title}>{cert.title}</h3>
                    <span className={styles.platform}>{cert.issuer}</span>
                  </div>
                </div>
                <div className={styles.itemRight}>
                  <span className={styles.year}>{cert.year}</span>
                  <span className={styles.readBtn}>
                    View <FiArrowUpRight size={11} />
                  </span>
                </div>
              </a>
            ))}

            {GITHUB_CTA && (
              <a
                href={GITHUB_CTA.link}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => {
                  itemRefs.current[CERTS.length] = el;
                }}
                className={styles.githubCta}
              >
                <span className={styles.githubCtaIcon}>
                  <FaGithub size={20} />
                </span>
                <div className={styles.githubCtaBody}>
                  <h3 className={styles.githubCtaLabel}>{GITHUB_CTA.label}</h3>
                  <p className={styles.githubCtaText}>{GITHUB_CTA.text}</p>
                </div>
                <span className={styles.readBtn}>
                  Visit <FiArrowUpRight size={11} />
                </span>
              </a>
            )}
          </div>
        </div>

        {/* ── Image-only interstitial (step 2) ── */}
        <div ref={interstitialRef} className={styles.interstitial} aria-hidden>
          <div className={styles.interstitialLeft}>
            <div className={styles.interStat}>
              <span className={styles.interLabel}>
                {content.interstitial.availabilityLabel}
              </span>
              <span className={styles.interBig}>
                {profile.location.availability}
              </span>
            </div>
            <div className={styles.interDividerH} />
            <div className={styles.interStat}>
              <span className={styles.interLabel}>
                {content.interstitial.basedInLabel}
              </span>
              <span className={styles.interBig}>{profile.location.based}</span>
            </div>
          </div>

          <div className={styles.interstitialRight}>
            {profile.stats.map((stat, i) => (
              <Fragment key={stat.label}>
                {i > 0 && <div className={styles.interDividerV} />}
                <div className={styles.interNum}>
                  <span className={styles.interCount}>{stat.value}</span>
                  <span className={styles.interNumLabel}>
                    {(content.interstitial.statLabels[i] ?? stat.label)
                      .split("\n")
                      .map((line, j) => (
                        <Fragment key={j}>
                          {line}
                          {j === 0 && <br />}
                        </Fragment>
                      ))}
                  </span>
                </div>
              </Fragment>
            ))}
          </div>

          <div className={styles.interstitialBottom}>
            <span className={styles.interScrollText}>Continue</span>
            <span className={styles.interScrollLine} />
          </div>
        </div>

        {/* ── Radial vignette (footer phase) ── */}
        <div className={styles.vignetteOverlay} aria-hidden />

        {/* ── Footer content ── */}
        <div ref={footerContentRef} className={styles.footerContent}>
          {/* ── Mobile: hero-like layout ── */}
          <div className={styles.mobileLayout}>
            <div className={styles.mobileBrand}>
              <span className={styles.mobileRoleDot} />
              <span className={styles.mobileRoleText}>
                {profile.roles.short.toUpperCase()}
              </span>
            </div>
            <h2 className={styles.mobileName}>
              {profile.name.first.toUpperCase()}
              <br />
              <span className={styles.mobileNameGhost}>
                {profile.name.last.toUpperCase()}
              </span>
            </h2>
            <p className={styles.mobileDesc}>{profile.description}</p>
            <div className={styles.mobileCtas}>
              <a
                href={`mailto:${profile.email}`}
                className={styles.mobileTalkBtn}
              >
                Let&apos;s talk <FiArrowUpRight />
              </a>
            </div>
            <ContactChannels variant="mobile" />
            <div className={styles.mobileScrollHint} aria-hidden>
              <FiChevronDown size={18} />
              <span className={styles.mobileScrollText}>Scroll to explore</span>
            </div>
          </div>

          <div className={styles.mainGrid}>
            <div ref={leftRef} className={styles.leftCol}>
              <div className={styles.identityBlock}>
                <p className={styles.greetLine}>
                  <span className={styles.greetDot} />
                  {getGreeting()}
                </p>
                <p className={styles.roleLabel}>{profile.roles.short}</p>
                <h2 className={styles.nameHeading}>
                  {profile.name.first}
                  <br />
                  <span className={styles.nameGhost}>{profile.name.last}</span>
                </h2>
              </div>

              <div className={styles.footerInfo}>
                <p className={styles.footerDescription}>
                  {profile.description}
                </p>
                <ContactChannels variant="desktop" />
              </div>
            </div>

            <div className={styles.centerSpace} />

            <div ref={rightRef} className={styles.rightCol}>
              <div className={styles.ctaBlock}>
                <p className={styles.ctaEyebrow}>{content.footer.eyebrow}</p>
                <p className={styles.ctaHeading}>
                  {content.footer.ctaLines.map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                  <span className={styles.ctaAccent}>
                    {content.footer.ctaAccent}
                  </span>
                </p>
                <a href={`mailto:${profile.email}`} className={styles.talkBtn}>
                  Let&apos;s talk →
                </a>
              </div>
            </div>
          </div>

          <div ref={bigNameRef} className={styles.signatureWrap}>
            <h2 className={styles.signatureText}>
              {profile.name.full.toUpperCase()}
            </h2>
          </div>

          <div ref={bottomBarRef} className={styles.bottomBar}>
            <div className={styles.bottomLeft}>
              <div className={styles.monogram}>
                <span className={styles.monoLetters}>VK</span>
                <span className={styles.monoDot} />
              </div>
              <span className={styles.leftDivider} />
              <div className={styles.copyBlock}>
                <p className={styles.copy}>
                  © {year} {profile.name.full.toUpperCase()}
                </p>
                <p className={styles.copyAll}>ALL RIGHTS RESERVED</p>
              </div>
            </div>
            <div className={styles.bottomRight}>
              <span className={styles.builtWith}>
                DESIGNED &amp; DEVELOPED
                <br />
                WITH PRECISION.
              </span>
              <span className={styles.barDivider} />
              <span className={styles.sunIcon}>✺</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
