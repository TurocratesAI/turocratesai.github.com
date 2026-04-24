import Section from "../components/ui/Section.jsx";

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-sand border-b border-line">
        <div className="max-w-container mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-14 md:pb-16 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.05] max-w-3xl mx-auto">
            Privacy Policy.
          </h1>
          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-terra font-medium">
            Effective Date: April 4, 2026
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="max-w-3xl mx-auto text-ink text-[17px] leading-relaxed space-y-6">
          <p>
            Turocrates.ai ("we", "our", or "us") is committed to protecting your privacy. This Privacy
            Policy explains how we collect, use, disclose, and safeguard your information when you visit
            our website or use our diagnostic AI platform and services.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">1. Information We Collect</h2>
          <p>We may collect information about you in a variety of ways, including:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name,
              email address, and professional details, that you voluntarily give to us when registering
              for our Early Access Program or AI Vendor Application.
            </li>
            <li>
              <strong>Medical and Diagnostic Data:</strong> Data uploaded or processed through our
              platform (e.g., WSI formats like SVS, NDPI, MRXS files), which is handled strictly in
              accordance with applicable healthcare regulations and our business agreements.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you
              access the site, such as your IP address, your browser type, your operating system, your
              access times, and the pages you have viewed directly before and after accessing the site.
            </li>
          </ul>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">2. Use of Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-3">
            <li>Provide, operate, and maintain our platform and services.</li>
            <li>
              Improve our AI models and diagnostic tools (strictly using de-identified or aggregated
              data where permissible by law and agreement).
            </li>
            <li>Communicate with you regarding updates, support, and administrative information.</li>
            <li>Respond to your comments, questions, and requests for customer service.</li>
          </ul>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">3. Disclosure of Your Information</h2>
          <p>
            We may share information we have collected about you in certain situations. Your information
            may be disclosed as follows:
          </p>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the release of information
              about you is necessary to respond to legal process, to investigate or remedy potential
              violations of our policies, or to protect the rights, property, and safety of others.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your information with third
              parties that perform services for us or on our behalf, including data analysis, email
              delivery, hosting services, and customer service.
            </li>
          </ul>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">4. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your
            personal information and sensitive diagnostic data. While we have taken reasonable steps to
            secure the personal information you provide to us, please be aware that despite our efforts,
            no security measures are perfect or impenetrable.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">5. Contact Us</h2>
          <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
          <p>
            <strong>Turocratesai Private Limited</strong>
            <br />
            301 Titan House, MP Vaidya Marg, Ghatkopar, Mumbai, India
            <br />
            Email:{" "}
            <a href="mailto:founders@turocrates.ai" className="text-sea hover:text-terraDeep">
              founders@turocrates.ai
            </a>
          </p>
        </div>
      </Section>
    </>
  );
}
