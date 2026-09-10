import Link from "next/link";
import { Logo } from "./logo";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "@/components/shared/social-icons";

const footerLinks = {
  Platform: [
    { href: "/curriculum", label: "Curriculum" },
    { href: "/pricing", label: "Pricing" },
    { href: "/dashboard", label: "Student Dashboard" },
    { href: "/cbt", label: "CBT Mock Exams" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "/about#careers", label: "Careers" },
  ],
  Support: [
    { href: "/contact", label: "Help Center" },
    { href: "/about#faq", label: "FAQs" },
    { href: "/contact", label: "Report an Issue" },
  ],
  Legal: [
    { href: "/about#privacy", label: "Privacy Policy" },
    { href: "/about#terms", label: "Terms of Service" },
  ],
};

export function MarketingFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-20">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Nigeria&apos;s all-in-one learning platform for Primary 1 to SS3 —
              aligned to NERDC, ready for WAEC, NECO &amp; JAMB/UTME.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="h-9 w-9 rounded-full bg-background border border-border flex items-center justify-center hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-colors"
                  aria-label="Social link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-sm mb-3">{title}</h4>
              <ul className="space-y-2">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-primary-600 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} NaijaLearn. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="mailto:hello@naijalearn.ng" className="flex items-center gap-1.5 hover:text-primary-600">
              <Mail className="h-4 w-4" /> hello@naijalearn.ng
            </a>
            <a href="tel:+2348000000000" className="flex items-center gap-1.5 hover:text-primary-600">
              <Phone className="h-4 w-4" /> +234 800 000 0000
            </a>
          </div>
        </div>
        <div className="mt-6 h-1.5 w-full rounded-full badge-flag opacity-80" />
      </div>
    </footer>
  );
}
