import Navbar from "@/components/layout/Navbar";
import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Ask for help",
    description:
      "Have something on your mind? Post your question anonymously and share what you need help with.",
  },
  {
    number: "02",
    title: "Find someone who wants to help",
    description:
      "People can explore questions and send a volunteer request by clicking 'I want to help'.",
  },
  {
    number: "03",
    title: "You're in control",
    description:
      "Receive volunteer requests and decide whom to accept or reject. You can accept multiple volunteers.",
  },
  {
    number: "04",
    title: "Connect privately",
    description:
      "Once you accept a volunteer, private chat and video calls become available for both of you.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />

      <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <section className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            How it works
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            A little help can make a big difference.
          </h1>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Ask for help, offer support, and connect with people on your own
            terms. You decide who gets access to you.
          </p>
        </section>

        <section className="mt-16 grid gap-6 sm:grid-cols-2">
          {steps.map((step) => (
            <article
              key={step.number}
              className="rounded-2xl border border-gray-200 bg-white p-7 transition-shadow hover:shadow-md"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-800">
                {step.number}
              </span>

              <h2 className="mt-5 text-xl font-semibold text-gray-900">
                {step.title}
              </h2>

              <p className="mt-3 leading-7 text-gray-600">
                {step.description}
              </p>
            </article>
          ))}
        </section>

        <section className="mt-16 rounded-2xl bg-indigo-50 px-6 py-10 text-center sm:px-12">
          <h2 className="text-2xl font-bold text-gray-900">
            You don&apos;t have to figure it out alone.
          </h2>

          <p className="mx-auto mt-3 max-w-xl leading-7 text-gray-600">
            Whether you need support or want to offer it, take the first step.
          </p>

          <Link
            href="/login"
            className="mt-7 inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition-colors hover:bg-indigo-700"
          >
            Get started
          </Link>
        </section>
      </main>
    </>
  );
}