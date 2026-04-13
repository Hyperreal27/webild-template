"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

export default function HeroSection() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const bubbleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(bubbleRef.current, { opacity: 0, y: 24, duration: 0.5 })
        .from(badgeRef.current, { opacity: 0, y: 14, duration: 0.5 }, "-=0.2")
        .from(headingRef.current, { opacity: 0, y: 28, duration: 0.7 }, "-=0.3")
        .from(subRef.current, { opacity: 0, y: 16, duration: 0.5 }, "-=0.3")
        .from(btnRef.current, { opacity: 0, y: 14, duration: 0.5 }, "-=0.3")
        .from(statsRef.current, { opacity: 0, y: 10, duration: 0.4 }, "-=0.3")
        .from(imgRef.current, { opacity: 0, scale: 0.97, duration: 0.8 }, "-=0.6");
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #f0f4ff 0%, #fafbff 50%, #f5f0ff 100%)",
      }}
    >
      {/* bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 50%, rgba(77,150,255,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="lp-container relative z-10 pt-24 pb-16 md:pt-36 md:pb-28">
        {/* MOBILE: centrado en burbuja / DESKTOP: 2 cols */}
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-8 md:gap-12">

          {/* ── Copy bubble ── */}
          <div
            ref={bubbleRef}
            className="flex flex-col items-center text-center md:items-start md:text-left gap-5 rounded-3xl md:rounded-none p-7 md:p-0"
            style={{
              /* glass bubble on mobile only — reset on md */
              background: "rgba(255,255,255,0.72)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(255,255,255,0.75)",
              boxShadow: "0 6px 32px rgba(77,150,255,0.07), 0 1px 2px rgba(0,0,0,0.04)",
            }}
          >
            {/* Badge */}
            <span
              ref={badgeRef}
              className="inline-flex items-center gap-2 font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full"
              style={{
                fontSize: "clamp(0.6rem, 1.8vw, 0.75rem)",
                color: "var(--lp-blue)",
                background: "rgba(77,150,255,0.1)",
                border: "1px solid rgba(77,150,255,0.2)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "var(--lp-blue)" }}
              />
              Premium Collections
            </span>

            {/* Heading — 20% smaller on mobile */}
            <h1
              ref={headingRef}
              className="font-medium leading-tight"
              style={{
                fontFamily: "var(--font-halant)",
                color: "var(--lp-text)",
                fontSize: "clamp(1.9rem, 5.5vw, 4.5rem)",
              }}
            >
              Discover Luxury
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #4d96ff 0%, #5971e6 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Living in Dubai
              </span>
            </h1>

            {/* Subtitle — 20% smaller on mobile */}
            <p
              ref={subRef}
              className="leading-relaxed max-w-md"
              style={{
                color: "var(--lp-text-muted)",
                fontSize: "clamp(0.8rem, 2.2vw, 1rem)",
              }}
            >
              Exclusive properties curated for discerning buyers. Experience the
              pinnacle of sophistication with our award-winning real estate
              portfolio.
            </p>

            {/* Buttons — smaller on mobile */}
            <div
              ref={btnRef}
              className="flex flex-wrap justify-center md:justify-start gap-3"
            >
              <a
                href="#listings"
                className="rounded-full font-semibold text-white no-underline transition-opacity hover:opacity-90"
                style={{
                  fontSize: "clamp(0.72rem, 2vw, 0.875rem)",
                  padding: "clamp(0.45rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)",
                  background: "linear-gradient(135deg, #4d96ff 0%, #5971e6 100%)",
                  boxShadow: "0 4px 20px rgba(77,150,255,0.4)",
                }}
              >
                Explore Properties
              </a>
              <a
                href="#contact"
                className="rounded-full font-semibold no-underline transition-all"
                style={{
                  fontSize: "clamp(0.72rem, 2vw, 0.875rem)",
                  padding: "clamp(0.45rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem)",
                  color: "var(--lp-text)",
                  border: "1.5px solid var(--lp-border)",
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(8px)",
                }}
              >
                Contact Agent
              </a>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="flex gap-6 pt-4 border-t w-full justify-center md:justify-start"
              style={{ borderColor: "var(--lp-border)" }}
            >
              {[
                { value: "450+", label: "Properties Sold" },
                { value: "$2.3B", label: "Total Value" },
                { value: "15+", label: "Years Experience" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="font-semibold"
                    style={{
                      fontFamily: "var(--font-halant)",
                      color: "var(--lp-text)",
                      fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      color: "var(--lp-text-muted)",
                      fontSize: "clamp(0.65rem, 1.6vw, 0.75rem)",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div
            ref={imgRef}
            className="relative w-full h-[300px] sm:h-[400px] md:h-[540px] rounded-3xl overflow-hidden"
          >
            <Image
              src="/images/hero-bg.jpg"
              alt="Luxury living room with panoramic window"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* floating card */}
            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-card">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl overflow-hidden relative shrink-0">
                  <Image
                    src="/images/villa-palm-jumeirah.jpg"
                    alt="Featured property"
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="text-left">
                  <div
                    className="text-sm font-semibold"
                    style={{
                      color: "var(--lp-text)",
                      fontFamily: "var(--font-halant)",
                    }}
                  >
                    Palm Jumeirah Villa
                  </div>
                  <div className="text-xs" style={{ color: "var(--lp-text-muted)" }}>
                    5 Bed · Beachfront · AED 12,500,000
                  </div>
                </div>
                <span
                  className="ml-auto text-xs font-semibold px-2 py-1 rounded-full shrink-0"
                  style={{
                    background: "rgba(77,150,255,0.12)",
                    color: "var(--lp-blue)",
                  }}
                >
                  Featured
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
