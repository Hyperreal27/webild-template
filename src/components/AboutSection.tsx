import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32" style={{ background: "#ffffff" }}>
      <div className="lp-container">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[420px] md:h-[500px] rounded-3xl overflow-hidden">
              <Image
                src="/images/about-team.jpg"
                alt="Luxe Properties team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating stat card */}
            <div
              className="absolute -bottom-6 -right-4 md:-right-8 p-5 rounded-2xl glass-card w-44"
            >
              <div
                className="text-3xl font-semibold"
                style={{ fontFamily: "var(--font-halant)", color: "var(--lp-text)" }}
              >
                15+
              </div>
              <div className="text-xs mt-1" style={{ color: "var(--lp-text-muted)" }}>
                Years of Excellence in Dubai Real Estate
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="flex flex-col gap-6 md:pt-0 pt-8">
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--lp-blue)" }}
            >
              About Us
            </span>
            <h2
              className="text-3xl sm:text-4xl font-medium leading-snug"
              style={{ fontFamily: "var(--font-halant)", color: "var(--lp-text)" }}
            >
              Your Trusted Dubai Real Estate Partner
            </h2>
            <p className="text-sm leading-relaxed" style={{ color: "var(--lp-text-muted)" }}>
              With over 15 years of excellence in Dubai&apos;s luxury real estate
              market, we have established ourselves as the premier boutique agency
              for discerning international clientele.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--lp-text-muted)" }}>
              Our team of seasoned professionals combines deep market knowledge
              with personalised service to deliver unmatched results. From
              off-market villas on the Palm to iconic Downtown penthouses, we open
              doors others cannot.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { value: "450+", label: "Properties Sold" },
                { value: "650+", label: "Satisfied Clients" },
                { value: "$2.3B", label: "Total Portfolio Value" },
                { value: "45", label: "Countries Represented" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="p-4 rounded-2xl border"
                  style={{ borderColor: "var(--lp-border)", background: "#fafbff" }}
                >
                  <div
                    className="text-2xl font-semibold"
                    style={{ fontFamily: "var(--font-halant)", color: "var(--lp-text)" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: "var(--lp-text-muted)" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
