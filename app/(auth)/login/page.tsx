import Link from "next/link";

const LoginPage = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50 px-5">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-sm sm:p-10">
        <Link
          href="/"
          className="mb-10 block text-center text-3xl font-bold tracking-tight text-gray-900"
        >
          Help<span className="text-indigo-600">Me.</span>
        </Link>

        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome to Help Me
          </h1>
          <p className="mt-3 text-sm leading-6 text-gray-500">
            Enter your email and we&apos;ll send you a code to log in.
          </p>
        </div>

        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Enter your email address"
            autoComplete="email"
            required
            className="w-full rounded-xl border border-gray-200 px-4 py-3.5 text-sm outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50"
          />

          <button
            type="submit"
            className="w-full rounded-xl bg-indigo-600 py-3.5 font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-100"
          >
            Send code
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          A little help can make a big difference.
        </p>
      </div>
    </main>
  );
};

export default LoginPage;