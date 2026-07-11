"use client";

import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaWhatsapp,
  FaTelegramPlane,
  FaInstagram,
} from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiX } from "react-icons/si";
import { FiFileText } from "react-icons/fi";
import styles from "@/styles/sections/ContactSection.module.css";

// ── Single source of truth for this page's channels ──
// Update hrefs/handles here any time.
const CHANNELS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/deepak-verma-b552b5285/",
    handle: "deepak-verma-b552b5285",
    icon: <FaLinkedinIn />,
    preferred: true,
  },
  {
    label: "Gmail",
    href: "mailto:deepakverma4336@gmail.com",
    handle: "deepakverma4336@gmail.com",
    icon: <FaEnvelope />,
    preferred: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/de-coder-bit",
    handle: "de-coder-bit",
    icon: <FaGithub />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917999983308",
    handle: "+91 79999 83308",
    icon: <FaWhatsapp />,
    preferred: true,
  },
  {
    label: "Telegram",
    href: "https://t.me/debitcoder",
    handle: "@debitcoder",
    icon: <FaTelegramPlane />,
  },
  {
    label: "Codeforces",
    href: "https://codeforces.com/profile/deepakverma4336",
    handle: "deepakverma4336",
    icon: <SiCodeforces />,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/gamer_greg/",
    handle: "gamer_greg",
    icon: <SiLeetcode />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/p.a.t.ell/",
    handle: "@p.a.t.ell",
    icon: <FaInstagram />,
  },
  {
    label: "X",
    href: "https://x.com/deepak_ver47502",
    handle: "@deepak_ver47502",
    icon: <SiX />,
  },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1hGvhbWi8itIggYDHCZ-ZX4IvENqQTal9/view?usp=drive_link";

export default function ContactSection() {
  return (
    <section className={styles.stage}>
      <div className={styles.wrap}>
        <div className={styles.head}>
          <div>
            <div className={styles.eyebrow}>
              <span className={styles.pulseDot} />
              GET IN TOUCH
            </div>
            <h2 className={styles.title}>
              OPEN <span>CHANNELS</span>
            </h2>
          </div>
          <p className={styles.sub}>
            Every link below is a live line — pick whichever fits the message.
            For anything formal, email or LinkedIn is fastest.
          </p>
        </div>

        <div className={styles.body}>
          <div className={styles.rail}>
            <div>
              <div className={styles.railLabel}>Status</div>
              <div className={`${styles.railValue} ${styles.status}`}>
                <span className={styles.statusDot} />
                Open to work
              </div>
              <div className={styles.railHint}>Freelance &amp; full-time</div>
            </div>
            <div>
              <div className={styles.railLabel}>Response Time</div>
              <div className={styles.railValue}>&lt; 24 Hrs</div>
              <div className={styles.railHint}>Usually much faster</div>
            </div>
            <div>
              <div className={styles.railLabel}>Timezone</div>
              <div className={styles.railValue}>IST · UTC+5:30</div>
              <div className={styles.railHint}>Based in India</div>
            </div>
          </div>

          <div className={styles.main}>
            <div className={styles.channelsHead}>
              <h3>ALL CHANNELS</h3>
              <span className={styles.channelsCount}>
                {CHANNELS.length} TOTAL
              </span>
            </div>

            <div className={styles.grid}>
              {CHANNELS.map((c) => (
                <a
                  key={c.label}
                  className={styles.item}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.preferred && (
                    <span className={styles.badge}>PREFERRED</span>
                  )}
                  <span className={styles.icon}>{c.icon}</span>
                  <span className={styles.meta}>
                    <span className={styles.name}>{c.label}</span>
                    <span className={styles.handle}>{c.handle}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className={styles.resumeBand}>
              <div className={styles.resumeLeft}>
                <div className={styles.resumeIcon}>
                  <FiFileText />
                </div>
                <div>
                  <div className={styles.resumeTitle}>Resume</div>
                  <div className={styles.resumeSub}>
                    One-page PDF · hosted on Google Drive
                  </div>
                </div>
              </div>
              <a
                className={styles.btn}
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiFileText />
                View Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
