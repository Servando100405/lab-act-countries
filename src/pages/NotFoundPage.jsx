import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="grid min-h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50">
          <svg
            className="h-10 w-10 text-indigo-600"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
        </div>

        <p className="mt-6 text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn't find the page you're looking for. It might have
          been moved or deleted.
        </p>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500"
          >
            Go back home
          </Link>
          <a
            href="#"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600"
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
