import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-purple-200 via-purple-100 to-white min-h-screen flex items-center justify-center">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-6 md:px-12 py-12">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-700 leading-tight">
            The Best URL Shortener in the Market
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-md">
            We are the most straightforward URL shortener in the world. 
            Unlike others, we don’t track you or force signups. 
            Just paste your link and shorten instantly!
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="/shorten">
              <button className="bg-purple-600 hover:bg-purple-700 transition-all text-white rounded-xl shadow-lg px-6 py-3 font-semibold cursor-pointer">
                🚀 Try Now
              </button>
            </Link>
            <Link href="https://github.com/SHAHAAN08">
              <button className="bg-gray-800 hover:bg-gray-900 transition-all text-white rounded-xl shadow-lg px-6 py-3 font-semibold cursor-pointer">
                ⭐ Github
              </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center relative">
          <div className="relative w-[350px] md:w-[500px] h-[300px] md:h-[400px]">
            <Image
              className="rounded-2xl shadow-2xl object-cover hover:scale-105 transition-transform duration-500"
              src="/vector.jpg"
              alt="URL Shortener Illustration"
              fill
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}

