import PageWrapper from "../components/ui/PageWrapper";

export default function Settings() {
  return (
    <PageWrapper>
      <div className="pt-32 px-6 pb-20">

        <div className="max-w-5xl mx-auto">

          <h1 className="text-5xl font-black mb-10">
            Settings
          </h1>

          <div className="space-y-6">

            <div className="
              p-8
              rounded-3xl
              bg-slate-900/40
              border
              border-cyan-500/20
            ">
              Profile Settings
            </div>

            <div className="
              p-8
              rounded-3xl
              bg-slate-900/40
              border
              border-cyan-500/20
            ">
              Security Settings
            </div>

            <div className="
              p-8
              rounded-3xl
              bg-slate-900/40
              border
              border-cyan-500/20
            ">
              Notification Settings
            </div>

          </div>

        </div>

      </div>
    </PageWrapper>
  );
}