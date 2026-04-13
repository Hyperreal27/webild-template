"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const properties = [
  {
    id: 1,
    name: "Palm Jumeirah Villa",
    type: "5 Bed Villa",
    feature: "Beachfront",
    price: "AED 12,500,000",
    image: "/images/villa-palm-jumeirah.jpg",
    tag: "Exclusive",
  },
  {
    id: 2,
    name: "Downtown Dubai Penthouse",
    type: "4 Bed Penthouse",
    feature: "City View",
    price: "AED 8,750,000",
    image: "/images/penthouse-downtown.jpg",
    tag: "Premium",
  },
  {
    id: 3,
    name: "Emirates Hills Townhouse",
    type: "4 Bed Townhouse",
    feature: "Golf View",
    price: "AED 6,200,000",
    image: "/images/townhouse-emirates-hills.jpg",
    tag: "Available",
  },
];

// Duplicated for seamless infinite loop
const doubled = [...properties, ...properties];

const GAP = 20; // px — matches gap-5

export default function ListingsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Blur-in on scroll enter
    gsap.from(track, {
      opacity: 0,
      filter: "blur(12px)",
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: track,
        start: "top 85%",
        once: true,
      },
    });

    // Wait for paint so offsetWidth is accurate
    const rafId = requestAnimationFrame(() => {
      const firstCard = track.querySelector<HTMLElement>(".listing-card");
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      // Half the track = one full original set (3 cards + gaps)
      const halfWidth = properties.length * (cardWidth + GAP);

      tweenRef.current = gsap.to(track, {
        x: -halfWidth,
        duration: properties.length * 5, // 5s per card
        ease: "none",
        repeat: -1,
        // On repeat GSAP snaps x back to 0 — identical to start since
        // the second half of doubled[] mirrors the first half exactly.
      });
    });

    // Pause on hover, resume on leave
    const pause = () => tweenRef.current?.pause();
    const resume = () => tweenRef.current?.resume();
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(rafId);
      tweenRef.current?.kill();
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="listings"
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "#fafbff" }}
    >
      <div className="lp-container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--lp-blue)" }}
            >
              Featured Properties
            </span>
            <h2
              className="text-3xl sm:text-4xl font-medium mt-2"
              style={{ fontFamily: "var(--font-halant)", color: "var(--lp-text)" }}
            >
              Exclusive Listings
            </h2>
            <p className="text-sm mt-2 max-w-lg" style={{ color: "var(--lp-text-muted)" }}>
              Handpicked luxury properties showcasing the finest real estate
              opportunities in Dubai&apos;s most prestigious locations.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 text-sm font-semibold no-underline transition-opacity hover:opacity-70"
            style={{ color: "var(--lp-blue)" }}
          >
            View all listings →
          </a>
        </div>
      </div>

      {/* Full-bleed carousel track — overflows lp-container intentionally */}
      <div className="pl-[max(1rem,calc((100vw-var(--lp-content-width))/2+2.5rem))]">
        <div
          ref={trackRef}
          className="flex"
          style={{ gap: GAP, willChange: "transform" }}
        >
          {doubled.map((p, i) => (
            <div
              key={`${p.id}-${i}`}
              className="listing-card group rounded-2xl overflow-hidden border transition-shadow duration-300 hover:shadow-xl cursor-pointer shrink-0"
              style={{
                width: "clamp(260px, 72vw, 340px)",
                background: "rgba(255,255,255,0.9)",
                borderColor: "var(--lp-border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="340px"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 50%)",
                  }}
                />
                <span
                  className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.9)",
                    color: "var(--lp-blue)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {p.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3
                  className="text-lg font-medium mb-1"
                  style={{ fontFamily: "var(--font-halant)", color: "var(--lp-text)" }}
                >
                  {p.name}
                </h3>
                <p className="text-sm" style={{ color: "var(--lp-text-muted)" }}>
                  {p.type} · {p.feature}
                </p>
                <div
                  className="flex items-center justify-between mt-4 pt-4 border-t"
                  style={{ borderColor: "var(--lp-border)" }}
                >
                  <span
                    className="text-base font-semibold"
                    style={{ fontFamily: "var(--font-halant)", color: "var(--lp-text)" }}
                  >
                    {p.price}
                  </span>
                  <a
                    href="#contact"
                    className="text-xs font-semibold px-3 py-1.5 rounded-full no-underline transition-opacity hover:opacity-80"
                    style={{
                      background: "rgba(77,150,255,0.1)",
                      color: "var(--lp-blue)",
                    }}
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
