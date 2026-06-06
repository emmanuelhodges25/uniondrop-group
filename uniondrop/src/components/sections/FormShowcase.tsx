export default function FormShowcase() {
  return (
    <section className="py-32">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl text-center font-bold mb-16">
          Form Solutions
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-3xl bg-slate-900/50 border border-cyan-500/20">
            Client Registration Form
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/50 border border-cyan-500/20">
            Business Application Form
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/50 border border-cyan-500/20">
            Customer Feedback Form
          </div>

        </div>

      </div>

    </section>
  );
}