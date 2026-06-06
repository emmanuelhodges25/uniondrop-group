export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-4 md:px-6 py-24">

      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl md:text-5xl font-black text-cyan-400">
          Privacy Policy
        </h1>

        <p className="text-slate-400 mt-4">
          Effective Date: {new Date().getFullYear()}
        </p>

        <div className="mt-10 space-y-6 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-xl font-bold text-white">1. Information We Collect</h2>
            <p>
              We collect information you provide directly, such as email address,
              login credentials, and project requests submitted through the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">2. How We Use Information</h2>
            <p>
              We use your data to provide services, manage accounts, improve platform
              functionality, and support customer requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">3. Data Protection</h2>
            <p>
              We implement reasonable security measures to protect user data, but
              cannot guarantee absolute security over internet transmissions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">4. Third-Party Services</h2>
            <p>
              We may use third-party services such as authentication providers,
              hosting platforms, and analytics tools.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white">5. User Rights</h2>
            <p>
              Users may request deletion of their data or account at any time.
            </p>
          </section>

        </div>

      </div>

    </div>
  );
}