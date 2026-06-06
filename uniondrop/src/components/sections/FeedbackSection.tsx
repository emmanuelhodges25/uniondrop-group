export default function FeedbackSection() {
  return (
    <section className="py-32">

      <div className="max-w-4xl mx-auto px-6">

        <div
          className="
          p-10
          rounded-3xl
          bg-slate-900/60
          border
          border-cyan-500/20
          "
        >
          <h2 className="text-4xl font-bold mb-6">
            Send Feedback
          </h2>

          <form className="space-y-6">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-4 rounded-xl bg-slate-800"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-4 rounded-xl bg-slate-800"
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="w-full p-4 rounded-xl bg-slate-800"
            />

            <button
              className="
              px-8
              py-4
              rounded-xl
              bg-cyan-500
              text-black
              font-bold
              "
            >
              Submit
            </button>

          </form>
        </div>

      </div>

    </section>
  );
}