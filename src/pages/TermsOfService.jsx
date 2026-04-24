import Section from "../components/ui/Section.jsx";

export default function TermsOfService() {
  return (
    <>
      <section className="bg-sand border-b border-line">
        <div className="max-w-container mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-14 md:pb-16 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-semibold leading-[1.05] max-w-3xl mx-auto">
            Terms of Service.
          </h1>
          <p className="mt-5 text-sm uppercase tracking-[0.2em] text-terra font-medium">
            Effective Date: April 4, 2026
          </p>
        </div>
      </section>

      <Section tone="paper">
        <div className="max-w-3xl mx-auto text-ink text-[17px] leading-relaxed space-y-6">
          <p>
            Welcome to Turocrates.ai. These Terms of Service ("Terms") govern your use of our website
            and our AI-powered diagnostic platform and services (collectively, the "Services") provided
            by Turocratesai Private Limited ("we", "our", or "us").
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">1. Acceptance of Terms</h2>
          <p>
            By accessing or using our Services, you agree to be bound by these Terms and our Privacy
            Policy. If you do not agree to these Terms, you may not access or use the Services.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">2. Description of Services</h2>
          <p>
            Turocrates.ai provides a unified platform for advanced storage, viewing, and clinical-grade
            AI analysis of whole slide images (WSI) and other diagnostic formats. Our Services are
            intended for professional and institutional use.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">3. User Responsibilities</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Compliance with Laws:</strong> You agree to use the Services in compliance with
              all applicable local, state, national, and international laws and regulations, including
              healthcare and privacy laws.
            </li>
            <li>
              <strong>Account Security:</strong> You are responsible for safeguarding your account
              credentials and for any activity or actions under your account.
            </li>
            <li>
              <strong>Data Ownership and Rights:</strong> You must have the necessary rights, consents,
              and permissions to upload any medical or diagnostic data to our platform.
            </li>
            <li>
              <strong>Prohibited Uses:</strong> You may not use the Services for any unlawful purpose,
              to reverse engineer our platform or AI models, or to interfere with the operation of the
              Services.
            </li>
          </ul>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">4. Intellectual Property</h2>
          <p>
            All intellectual property rights in the Services, including but not limited to software, AI
            algorithms, patented compression technology, designs, and content, are owned by Turocratesai
            Private Limited or our licensors. You are granted a limited, non-exclusive, non-transferable
            license to use the Services in accordance with these Terms.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">5. Disclaimer of Warranties</h2>
          <p>
            While we strive for accuracy, the Services, including any AI analysis and insights, are
            provided "as is" and "as available" without any warranties, express or implied. The Services
            are designed to assist healthcare professionals and are not a substitute for professional
            medical judgment, diagnosis, or treatment.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">6. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, Turocratesai Private Limited shall not be liable for
            any indirect, incidental, special, consequential, or punitive damages, or any loss of
            profits or revenues, whether incurred directly or indirectly, or any loss of data, use,
            goodwill, or other intangible losses, resulting from (a) your access to or use of or
            inability to access or use the Services; (b) any conduct or content of any third party on
            the Services; or (c) unauthorized access, use, or alteration of your transmissions or
            content.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">7. Modifications to the Service and Terms</h2>
          <p>
            We reserve the right to modify or discontinue, temporarily or permanently, the Services (or
            any part thereof) with or without notice. We may also revise these Terms from time to time.
            The most current version will always be posted on our website.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">8. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of India, without
            regard to its conflict of law provisions.
          </p>

          <h2 className="font-serif text-2xl md:text-3xl font-semibold pt-4">9. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at:</p>
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
