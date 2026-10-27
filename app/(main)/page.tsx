
import Navbar from "../../components/layout/Navbar";

const Page = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 py-20">
        <div className="absolute left-1/2 top-20 z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-100/60 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-block rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            A little help can make a big difference
          </span>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            You don&apos;t have to figure it out{" "}
            <span className="text-indigo-600">alone.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-gray-600 sm:text-lg">
            Have a question or feeling stuck? Share what&apos;s on your mind
            and connect with people who are willing to help.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/ask"
              className="inline-flex min-w-40 items-center justify-center rounded-xl bg-indigo-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-indigo-300"
            >
              Ask for help
              <span className="ml-2" aria-hidden="true">→</span>
            </a>

            <a
              href="#explore"
              className="inline-flex min-w-40 items-center justify-center rounded-xl border border-gray-200 bg-white px-7 py-3.5 font-semibold text-gray-700 transition-colors hover:border-indigo-200 hover:bg-indigo-50"
            >
              Explore questions
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            No pressure. Just people helping people.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Page;

