import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center">
        <p className="text-6xl font-bold text-gray-900">404</p>

        <h1 className="mt-4 text-xl font-semibold text-gray-900">
          Page not found
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          The page you're looking for doesn't exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-5 py-3 rounded-xl bg-[#e52e2e] text-white text-sm font-medium"
        >
          Back to Menu
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
