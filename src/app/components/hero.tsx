import Image from "next/image";

export default function Hero() {
  return (
    <div
      className="text-black container grid grid-cols-1 md:grid-cols-2 min-h-[600px] px-8 md:px-16" // Adjust padding here
    >
      {/* Heading and Paragraph */}
      <div className="flex flex-col justify-center gap-1 text-center md:text-left">
        <p className="text-3xl font-extrabold">
          Hello it's Me
          <span className="ml-1 text-5xl font-extrabold text-pink-500">
            Niba Khan
          </span>
        </p>
        <p className="font-semibold hover:text-pink-500">
          "AI Student proficient in TypeScript & HTML, CSS and Certified
          Information Technology | Dedicated to advancing AI with coding
          expertise | Ready to tackle cutting-edge challenges."
        </p>
        <div className="flex space-x-4">
          <button className="text-white p-2 pr-5 bg-pink-300 border-blue-500 border-4 rounded-full hover:bg-blue-400">
            Hire Me
          </button>
          <button>
            <a
              className="p-2 pr-5 text bg-blue-400 border-pink-500 border-4 rounded-full hover:bg-white"
              href="https://cv-in-html-css.vercel.app/"
            >
              Download CV
            </a>
          </button>
        </div>
      </div>

      {/* Images Section */}
      <div className="flex justify-center items-center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYP2Dtatp3FgX3zmLhcGNAmt18LjJBgJN8i-73OumwbRKWPDIQcxVM4LXLpmpVIcyRjjI&usqp=CAU"
          alt="Menu Picture"
          width={350}
          height={350}
          className="object-cover rounded-md border-4 border-pink-500 hover:border-sky-500 transition-transform duration-500 hover:animate-bounce"
        />
      </div>
    </div>
  );
}


