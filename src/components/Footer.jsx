import Logo from "./Logo.jsx";
import ComplianceStrip from "./ComplianceStrip.jsx";
import BackedByStrip from "./BackedByStrip.jsx";

export default function Footer() {
  return (
    <footer className="bg-ink text-sand/90">
      <div className="max-w-container mx-auto px-6 md:px-10 py-12 md:py-14 grid md:grid-cols-3 gap-10">
        <div>
          <Logo className="h-8" inverted />
          <address className="not-italic text-sm leading-relaxed text-sand/80 mt-5">
            301 Titan House, MP Vaidya Marg<br />
            Ghatkopar, Mumbai, India
          </address>
          <div className="mt-4 text-sm space-y-1">
            <div>
              <a href="mailto:founders@turocrates.ai" className="hover:text-terra">
                founders@turocrates.ai
              </a>
            </div>
            <div>
              <a href="tel:+919622040008" className="hover:text-terra">
                +91 96220 40008
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-terra mb-4">
            Compliance
          </div>
          <ComplianceStrip variant="footer" />
        </div>

        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-terra mb-4">
            Backed by
          </div>
          <BackedByStrip variant="footer" />
        </div>
      </div>
      <div className="border-t border-sand/10">
        <div className="max-w-container mx-auto px-6 md:px-10 py-5 text-xs text-sand/60 flex flex-col sm:flex-row gap-4 sm:justify-between items-start sm:items-center">
          <span>© {new Date().getFullYear()} Turocrates.ai. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="#/privacy-policy" className="hover:text-terra">Privacy Policy</a>
            <a href="#/terms-of-service" className="hover:text-terra">Terms of Service</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.18em] text-sand/50">Made in India</span>
            <img
              src="/logos/make-in-india.png"
              alt="Make in India"
              className="h-8 w-auto invert opacity-90"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
