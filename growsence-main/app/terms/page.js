export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-100 via-blue-50 to-green-100 py-12 px-6 text-center shadow-md rounded-b-3xl">
        <h1 className="text-5xl font-bold mb-2">Terms & Conditions</h1>
        <p className="text-lg text-gray-600">Effective from June 21, 2025 — Please read carefully</p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-base leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold">1. Welcome to Growsence</h2>
          <p>Growsence is a digital platform offering online education, AI tools, affiliate features, and personal growth content. These Terms apply to all users.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">2. Agreement Overview</h2>
          <p>By accessing Growsence, you agree to our Terms, Privacy Policy, and Refund Policy. If you disagree, please do not use our services.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">3. Eligibility</h2>
          <ul className="list-disc pl-5">
            <li>You must be 18+ to register.</li>
            <li>Provide accurate, updated contact details.</li>
            <li>Keep login credentials confidential.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">4. Code of Conduct</h2>
          <ul className="list-disc pl-5">
            <li>No fake accounts or impersonation.</li>
            <li>No harassment or unlawful behavior.</li>
            <li>No spamming or course sharing.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">5. Payment & Refunds</h2>
          <p>We use Cashfree for secure payments. Refunds are allowed within 24 hours, minus 2% gateway + 5% processing charges. No refunds post-upgrades or after 24 hours.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">6. Course Access</h2>
          <p>Once purchased, your course access is lifetime. Subscriptions (if any) renew automatically unless cancelled.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">7. Affiliate Program Rules</h2>
          <ul className="list-disc pl-5">
            <li>Ethical promotion only</li>
            <li>No sponsor changes after joining (unless inactive 6+ months)</li>
            <li>No misleading earnings or spam</li>
            <li>Official tools and links only</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">8. Restricted Activities 🚫</h2>
          <ul className="list-disc pl-5">
            <li>No illegal activities or hacking</li>
            <li>No bots or scripts</li>
            <li>No content redistribution</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">9. Intellectual Property</h2>
          <p>All content is owned by Growsence Private Limited. Reuse or resale is prohibited without permission.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">10. Feedback & Content</h2>
          <p>Your feedback may be used for platform improvement. You retain rights to your posted content, but grant us permission to use it for educational purposes.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">11. AI & Analytics</h2>
          <p>We use Google Analytics, Facebook Pixel, and AI tools like GrowBot. Data is anonymous and secure.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">12. Termination</h2>
          <p>Accounts may be suspended for violations without notice. Refunds not applicable post 24-hour window.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">13. Communications</h2>
          <p>You agree to receive updates, alerts, and promotional content. You may unsubscribe anytime.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">14. Limited Liability</h2>
          <p>We are not liable for indirect damages or losses. Maximum liability limited to the amount paid.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">15. Third-Party Platforms</h2>
          <p>We integrate services like Telegram, YouTube, and PCloud. We are not responsible for their policies.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">16. Fraud Prevention</h2>
          <ul className="list-disc pl-5">
            <li>Use only official contacts: teamgrowsence@gmail.com & +91 9835742586</li>
            <li>Never share OTPs or passwords</li>
            <li>Never make or accept payments outside official Growsence channels</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold">17. Legal Jurisdiction</h2>
          <p>All disputes will be resolved under Indian law, with Patna, Bihar as the jurisdiction.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold">18. Contact Support</h2>
          <p>For help, email <strong>teamgrowsence@gmail.com</strong> or WhatsApp <strong>+91 9835742586</strong>.</p>
        </section>

        <div className="pt-6 border-t text-sm text-center text-gray-500">
          &copy; {new Date().getFullYear()} Growsence. All Rights Reserved.
        </div>
      </div>
    </div>
  );
}