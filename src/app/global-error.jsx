"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded shadow-md text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
            <button
              onClick={() => reset()}
              className="bg-red-600 text-white rounded py-2 px-4 hover:bg-red-700 transition duration-300"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
