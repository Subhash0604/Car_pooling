import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-8">
      {/* Hero Section */}
      <header className="w-full max-w-4xl text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          Find Your Perfect <span className="text-blue-600 dark:text-blue-400">Carpool</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6">
          Save money, reduce traffic, and travel together. Join our carpooling community today.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-lg transition"
          >
            Get Started
          </a>
          <a
            href="#how-it-works"
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-lg px-6 py-3 rounded-lg transition"
          >
            Learn More
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="mt-16 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg text-center">
          <Image src="/ride-sharing.svg" alt="Ride Sharing" width={60} height={60} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Seamless Matching</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Find the best ride matches based on your route and schedule.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg text-center">
          <Image src="/eco-friendly.svg" alt="Eco Friendly" width={60} height={60} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Eco-Friendly</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Reduce your carbon footprint by sharing rides.</p>
        </div>
        <div className="p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg text-center">
          <Image src="/save-money.svg" alt="Save Money" width={60} height={60} className="mx-auto mb-4" />
          <h3 className="text-xl font-semibold">Save Money</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Share fuel costs and make travel affordable.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-center text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Carpool Connect. All Rights Reserved.
      </footer>
    </div>
  );
}