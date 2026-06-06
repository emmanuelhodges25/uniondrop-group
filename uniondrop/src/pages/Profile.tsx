import PageWrapper from "../components/ui/PageWrapper";

export default function Profile() {
  return (
    <PageWrapper>
      <div className="pt-32 px-6 pb-20">

        <div className="max-w-4xl mx-auto">

          <div className="flex flex-col md:flex-row gap-8 items-center">

            <div className="
              w-40
              h-40
              rounded-full
              bg-slate-800
              border
              border-cyan-500/20
            " />

            <div>

              <h1 className="text-4xl font-black">
                User Profile
              </h1>

              <p className="text-slate-400 mt-3">
                Manage your account information.
              </p>

            </div>

          </div>

        </div>

      </div>
    </PageWrapper>
  );
}