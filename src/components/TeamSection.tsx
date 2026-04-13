import Image from "next/image";

const team = [
  {
    name: "Hassan Al-Maktoum",
    title: "Chief Executive Officer",
    image: "/images/team-ceo.jpg",
    desc: "Visionary leader with 20+ years shaping Dubai's luxury real estate landscape.",
  },
  {
    name: "Layla Al-Mansoori",
    title: "Chief Operating Officer",
    image: "/images/team-coo.jpg",
    desc: "Operations expert ensuring every client interaction exceeds expectations.",
  },
  {
    name: "Marcus Wellington",
    title: "Chief Investment Officer",
    image: "/images/team-cio.jpg",
    desc: "Globally recognised investment strategist with deep knowledge of UAE markets.",
  },
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 md:py-32" style={{ background: "#ffffff" }}>
      <div className="lp-container">
        {/* Header */}
        <div className="text-center mb-14">
          <span
            className="text-xs font-semibold uppercase tracking-widest"
            style={{ color: "var(--lp-blue)" }}
          >
            Leadership
          </span>
          <h2
            className="text-3xl sm:text-4xl font-medium mt-2"
            style={{ fontFamily: "var(--font-halant)", color: "var(--lp-text)" }}
          >
            Executive Team
          </h2>
          <p className="text-sm mt-2 max-w-md mx-auto" style={{ color: "var(--lp-text-muted)" }}>
            Meet the visionary leaders guiding Luxe Properties with expertise and
            dedication.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl overflow-hidden border transition-shadow duration-300 hover:shadow-xl"
              style={{
                borderColor: "var(--lp-border)",
                background: "#fafbff",
              }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <h3
                  className="text-base font-semibold"
                  style={{ fontFamily: "var(--font-halant)", color: "var(--lp-text)" }}
                >
                  {member.name}
                </h3>
                <p
                  className="text-xs font-medium mt-0.5 mb-3"
                  style={{ color: "var(--lp-blue)" }}
                >
                  {member.title}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "var(--lp-text-muted)" }}>
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
