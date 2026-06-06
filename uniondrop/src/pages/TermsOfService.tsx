export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-6 py-24">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-black text-cyan-400">
          Terms of Service
        </h1>

        <p className="text-slate-400 mt-4">
          Effective Date: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-6 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing UnionDrop, you agree to comply with these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">2. Use of Services</h2>
            <p>
              Users agree not to misuse the platform, attempt unauthorized access,
              or disrupt services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">3. Payments</h2>
            <p>
              Paid services ($5 standard / $10 premium) are subject to future
              payment processing integration and are non-refundable once executed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">4. Service Delivery</h2>
            <p>
              UnionDrop provides digital services including software development,
              automation systems, and SaaS solutions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">5. Limitation of Liability</h2>
            <p>
              We are not liable for indirect damages, downtime, or third-party
              service failures.
            </p>
          </section>

        </div>

      </div>

    </div>
  );
}