const services = [
  {
    num: "01",
    title: "Property Selection",
    desc: "Exclusive access to off-market and hand-selected luxury properties.",
  },
  {
    num: "02",
    title: "Investment Advisory",
    desc: "Expert insights into market trends and investment opportunities.",
  },
  {
    num: "03",
    title: "Negotiation & Closing",
    desc: "Strategic negotiation and seamless transaction management.",
  },
  {
    num: "04",
    title: "Legal Compliance",
    desc: "Full support with documentation, permits, and regulatory compliance.",
  },
  {
    num: "05",
    title: "Property Management",
    desc: "Professional management services for rental income optimisation.",
  },
  {
    num: "06",
    title: "Concierge Services",
    desc: "White-glove concierge support for renovations and lifestyle services.",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="py-24 md:py-32"
      style={{
        background:
          "linear-gradient(160deg, #f0f4ff 0%, #fafbff 60%, #f5f0ff 100%)",
      }}
    >
      <div className="lp-container">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--lp-blue)" }}
          >
            What We Offer
          </span>
          <h2
            className="text-3xl sm:text-4xl font-medium mt-2"
            style={{
              fontFamily: "var(--font-halant)",
              color: "var(--lp-text)",
            }}
          >
            Our Services & Expertise
          </h2>
        </div>

        {/* Horizontal scroll — mobile; grid — desktop */}
        <div
          className="flex lg:grid lg:grid-cols-3 gap-5 overflow-x-auto pb-4"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {services.map((s) => (
            <div
              key={s.num}
              className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-default shrink-0"
              style={{
                width: "clamp(240px, 70vw, 340px)",
                scrollSnapAlign: "start",
                background: "rgba(255,255,255,0.85)",
                borderColor: "var(--lp-border)",
                backdropFilter: "blur(8px)",
                /* On lg+, reset the fixed width so grid takes over */
              }}
            >
              <div
                className="text-3xl font-semibold mb-4"
                style={{
                  fontFamily: "var(--font-halant)",
                  color: "rgba(77,150,255,0.3)",
                }}
              >
                {s.num}
              </div>
              <h3
                className="text-base font-semibold mb-2"
                style={{
                  color: "var(--lp-text)",
                  fontFamily: "var(--font-halant)",
                }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--lp-text-muted)" }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <style>{`
          #services [style*="overflow-x"]::-webkit-scrollbar { display: none; }
          @media (min-width: 1024px) {
            #services .shrink-0 {
              width: auto !important;
              scroll-snap-align: unset;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
