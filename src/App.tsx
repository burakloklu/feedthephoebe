import runningChef from "./assets/running-chef.gif";
import hearts from "./assets/hearts.gif";

export default function App() {
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 to-white font-cute overflow-hidden px-2 sm:px-6 py-10 text-center">
      {/* floating hearts – keep it light on mobile, fuller on larger screens */}
      <img
        src={hearts}
        className="pointer-events-none w-20 sm:w-14 opacity-80 absolute top-28 left-20 sm:left-[15%] animate-bob"
        alt="pixel heart"
      />
      <img
        src={hearts}
        className="pointer-events-none w-24 sm:w-16 opacity-80 absolute top-24 right-20 sm:right-[15%] animate-bob"
        alt="pixel heart"
      />
      {/* bottom hearts only on md+ so they don't crowd small screens */}
      <img
        src={hearts}
        className="pointer-events-none w-12 sm:w-16 opacity-80 absolute bottom-32 left-[15%] animate-bob hidden md:block"
        alt="pixel heart"
      />
      <img
        src={hearts}
        className="pointer-events-none w-12 sm:w-14 opacity-80 absolute bottom-36 right-[15%] animate-bob hidden md:block"
        alt="pixel heart"
      />

      {/* main content */}
      <div className="flex flex-col relative items-center gap-6 sm:gap-8 z-10 w-full">
        <div className="bg-white/80 backdrop-blur-xl border border-pink-200 rounded-3xl shadow-xl w-full max-w-md sm:max-w-xl py-8 sm:py-10 px-4 sm:px-8">
          <p className="uppercase tracking-wide text-pink-500 font-semibold text-sm mb-2">
            coming soon
          </p>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-3">
            Feed the Phoebe 🍱
          </h1>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            A tiny love project where I share all the meals I cook for Phoebe
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 mt-[-2px] text-sm sm:text-base">
            — the girl whose smile makes everything I cook taste better.
          </p>

          <form
            className="flex flex-row gap-3 justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              alert("One day this will notify you. For now—thank you 💗");
            }}
          >
            <input
              type="email"
              required
              placeholder="get notified when it’s ready"
              className="px-4 py-2 rounded-full border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-300 text-sm flex-1"
            />
            <button
              type="submit"
              className="px-5 py-2 rounded-full bg-pink-500 text-white text-sm font-semibold shadow-md hover:bg-pink-600 transition"
            >
              Notify me
            </button>
          </form>
        </div>

        {/* chef – scaled for mobile, grows on larger screens */}
        <img
          src={runningChef}
          className="pointer-events-none opacity-90 w-auto"
          alt="little running chef"
        />
      </div>

      <footer className="absolute bottom-8 text-sm text-pink-600">
        Made with 💗 for Phoebe · {new Date().getFullYear()}
      </footer>
    </div>
  );
}
