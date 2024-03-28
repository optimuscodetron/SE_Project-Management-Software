import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100"
      style={{ backgroundColor: "#111827" }}
    >
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      {/* <p className="mt-2 text-lg text-gray-100">
        Oops! We can't seem to find the page you're looking for.
      </p> */}
      <p className="mt-2 text-lg text-gray-100">
        Sorry, the page you are looking for might have been removed, had its
        name changed, or is temporarily unavailable.
      </p>
      <p className="mt-2 text-lg text-gray-100">
        Alternatively, you can navigate back to the homepage .
      </p>
      <Link
        to="/"
        className="mt-6 px-4 py-2 text-white bg-purple-600 rounded hover:bg-blue-500"
      >
        Go to Home Page
      </Link>
    </div>
  );
};

export default Error;
