const testimonials = [
  {
    name: "Ahmed Al Mansouri",
    role: "Real Estate Investor",
    date: "Sep 2024",
    stars: 5,
    quote:
      "The team demonstrated outstanding knowledge of the Dubai market. Their negotiation skills saved me significant time and money.",
  },
  {
    name: "Sarah Johnson",
    role: "CEO – Tech Corp",
    date: "Aug 2024",
    stars: 5,
    quote:
      "Finding a penthouse matching my standards seemed impossible, yet within weeks, the team presented three exceptional options.",
  },
  {
    name: "Michael Chen",
    role: "International Investor",
    date: "Jul 2024",
    stars: 5,
    quote:
      "As a foreign investor, I appreciated comprehensive legal and financial guidance navigating complex regulations effortlessly.",
  },
  {
    name: "Fatima Al-Serkal",
    role: "Luxury Lifestyle",
    date: "Jun 2024",
    stars: 5,
    quote:
      "Beyond finding properties, they understand lifestyle. Concierge services and design recommendations transformed my home.",
  },
  {
    name: "David Martinez",
    role: "Corporate Executive",
    date: "May 2024",
    stars: 5,
    quote:
      "Moving to Dubai for business, I needed quick turnaround. Their efficient process and white-glove service made it seamless.",
  },
  {
    name: "James Richardson",
    role: "Family Relocation",
    date: "Apr 2024",
    stars: 5,
    quote:
      "They truly understood what our family needed. The search was collaborative, resulting in our perfect Emirates Hills home.",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#4d96ff">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 md:py-32"
      style={{ background: "#fafbff" }}
    >
      <div className="lp-container">
        {/* Header */}
        <div className="text-center mb-10">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--lp-blue)" }}
          >
            Client Stories
          </span>
          <h2
            className="text-3xl sm:text-4xl font-medium mt-2"
            style={{
              fontFamily: "var(--font-halant)",
              color: "var(--lp-text)",
            }}
          >
            What Our Clients Say
          </h2>
        </div>

        {/* Horizontal scroll — all viewports */}
        <div
          className="flex gap-5 overflow-x-auto pb-4"
          style={{
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-4 rounded-2xl border p-6 shrink-0"
              style={{
                width: "clamp(280px, 75vw, 360px)",
                scrollSnapAlign: "start",
                background: "rgba(255,255,255,0.9)",
                borderColor: "var(--lp-border)",
                boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              }}
            >
              <Stars count={t.stars} />
              <p
                className="text-sm leading-relaxed flex-1"
                style={{ color: "var(--lp-text-muted)" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>
              <div
                className="pt-4 border-t flex items-center justify-between"
                style={{ borderColor: "var(--lp-border)" }}
              >
                <div>
                  <div
                    className="text-sm font-semibold"
                    style={{
                      color: "var(--lp-text)",
                      fontFamily: "var(--font-halant)",
                    }}
                  >
                    {t.name}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: "var(--lp-text-muted)" }}
                  >
                    {t.role}
                  </div>
                </div>
                <div
                  className="text-xs"
                  style={{ color: "var(--lp-text-light)" }}
                >
                  {t.date}
                </div>
              </div>
            </div>
          ))}
        </div>

        <style>{`
          #testimonials [style*="overflow-x"]::-webkit-scrollbar { display: none; }
        `}</style>
      </div>
    </section>
  );
}
