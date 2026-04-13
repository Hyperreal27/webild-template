const stats = [
  { value: "450+", label: "Properties Sold" },
  { value: "650+", label: "Satisfied Clients" },
  { value: "$2.3B", label: "Total Value" },
  { value: "45", label: "Countries" },
];

export default function StatsSection() {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        background: "linear-gradient(135deg, #0a0e1a 0%, #0f1630 50%, #0a0e1a 100%)",
      }}
    >
      <div className="lp-container">
        <div className="text-center mb-12">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "rgba(77,150,255,0.8)" }}
          >
            Our Track Record
          </span>
          <h2
            className="text-3xl sm:text-4xl font-medium mt-2 text-white"
            style={{ fontFamily: "var(--font-halant)" }}
          >
            By The Numbers
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-2xl text-center"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="text-4xl font-semibold"
                style={{
                  fontFamily: "var(--font-halant)",
                  background: "linear-gradient(135deg, #4d96ff, #5971e6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {s.value}
              </div>
              <div className="text-sm mt-2" style={{ color: "rgba(255,255,255,0.6)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
