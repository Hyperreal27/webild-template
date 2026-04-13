const footerLinks = {
  Company: ["About Us", "Our Services", "Executive Team", "Properties", "Contact"],
  Resources: ["Investment Guide", "Market Reports", "FAQ", "Blog"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "WhatsApp", href: "#" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{
        background: "linear-gradient(180deg, #0a0e1a 0%, #060810 100%)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="lp-container py-10 md:py-20">
        {/* Mobile: brand full-width + 2-col links grid / Desktop: 5-col */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-5 md:gap-10">

          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                style={{ background: "linear-gradient(135deg, #4d96ff, #5971e6)" }}
              >
                L
              </div>
              <span
                className="font-semibold text-sm text-white tracking-tight"
                style={{ fontFamily: "var(--font-halant)" }}
              >
                Luxe Properties Dubai
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
              Premier boutique real estate agency specialising in luxury
              properties across Dubai&apos;s most prestigious addresses.
            </p>
            <div className="flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="text-xs font-medium no-underline transition-colors duration-150 hover:text-white"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns — 2-col grid on mobile, individual cols on desktop */}
          <div className="grid grid-cols-2 gap-6 md:contents">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="flex flex-col gap-3 md:col-span-1">
                <h4
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  {section}
                </h4>
                <ul className="list-none m-0 p-0 flex flex-col gap-2">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs no-underline transition-colors duration-150 hover:text-white"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          <span>© {new Date().getFullYear()} Luxe Properties Dubai. All rights reserved.</span>
          <span>Dubai, United Arab Emirates</span>
        </div>
      </div>
    </footer>
  );
}
