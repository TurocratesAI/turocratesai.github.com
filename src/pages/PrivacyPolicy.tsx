import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="fixed inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>

      <div className="relative z-10">
        <Navigation />

        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-slate-200">
          <h1 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate-400 mb-8"><strong>Effective Date:</strong> April 4, 2026</p>

          <p className="mb-6 leading-relaxed">
            Turocrates.ai ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
            explains how we collect, use, disclose, and safeguard your information when you visit our website
            or use our diagnostic AI platform and services.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">1. Information We Collect</h2>
          <p className="mb-4 leading-relaxed">We may collect information about you in a variety of ways, including:</p>
          <ul className="list-disc pl-6 space-y-3 mb-6 leading-relaxed">
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, email
              address, and professional details, that you voluntarily give to us when registering for our Early
              Access Program or AI Vendor Application.
            </li>
            <li>
              <strong>Medical and Diagnostic Data:</strong> Data uploaded or processed through our platform
              (e.g., WSI formats like SVS, NDPI, MRXS files), which is handled strictly in accordance with
              applicable healthcare regulations and our business agreements.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access
              the site, such as your IP address, your browser type, your operating system, your access times,
              and the pages you have viewed directly before and after accessing the site.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">2. Use of Your Information</h2>
          <p className="mb-4 leading-relaxed">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-3 mb-6 leading-relaxed">
            <li>Provide, operate, and maintain our platform and services.</li>
            <li>
              Improve our AI models and diagnostic tools (strictly using de-identified or aggregated data where
              permissible by law and agreement).
            </li>
            <li>Communicate with you regarding updates, support, and administrative information.</li>
            <li>Respond to your comments, questions, and requests for customer service.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">3. Disclosure of Your Information</h2>
          <p className="mb-4 leading-relaxed">
            We may share information we have collected about you in certain situations. Your information may be
            disclosed as follows:
          </p>
          <ul className="list-disc pl-6 space-y-3 mb-6 leading-relaxed">
            <li>
              <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you
              is necessary to respond to legal process, to investigate or remedy potential violations of our
              policies, or to protect the rights, property, and safety of others.
            </li>
            <li>
              <strong>Third-Party Service Providers:</strong> We may share your information with third parties
              that perform services for us or on our behalf, including data analysis, email delivery, hosting
              services, and customer service.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">4. Security of Your Information</h2>
          <p className="mb-6 leading-relaxed">
            We use administrative, technical, and physical security measures to help protect your personal
            information and sensitive diagnostic data. While we have taken reasonable steps to secure the
            personal information you provide to us, please be aware that despite our efforts, no security
            measures are perfect or impenetrable.
          </p>

          <h2 className="text-2xl font-semibold text-white mt-10 mb-4">5. Contact Us</h2>
          <p className="mb-4 leading-relaxed">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p className="leading-relaxed">
            <strong>Turocratesai Private Limited</strong>
            <br />
            Mumbai, India
            <br />
            Email:{" "}
            <a href="mailto:founders@turocrates.ai" className="text-blue-400 hover:text-cyan-400 transition-colors">
              founders@turocrates.ai
            </a>
          </p>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
