import React from "react";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      
      <div className="text-center text-white px-6">
        
        <h1 className="text-8xl md:text-9xl font-bold">404</h1>
        
        <h2 className="text-2xl md:text-3xl mt-4 font-semibold">
          Oops! Page Not Found
        </h2>
        
        <p className="mt-3 text-gray-200 max-w-md mx-auto">
          The page you are looking for might have been removed or doesn't exist.
        </p>

        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-white text-purple-600 font-semibold rounded-full shadow hover:bg-gray-200 transition"
        >
          Go Back Home
        </a>

      </div>

    </div>
  );
}