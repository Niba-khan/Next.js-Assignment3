import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-black text-center text-pink-500 mb-10">
        My Projects
      </h2>

      <div className="flex flex-wrap justify-center space-x-4">
        {/* Project 1 */}
        <div className="relative group mb-4"> 
  <Link href="https://protfolio-website-using-html-css.vercel.app/"> 
    <Image
      src="https://media.geeksforgeeks.org/wp-content/uploads/20240207113731/Portfolio-Website-Project-Banner.webp"
      alt="Project Image 1"
      width={350}
      height={350}
      className="object-cover rounded-md border-4 border-pink-500 transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg hover:border-sky-500 opacity-100 group-hover:opacity-90"
    />
  </Link>
</div>


        {/* Project 2 */}
        <div className="relative group mb-4"> 
          <Link href="https://teqacher-day-card.vercel.app/"> 
            <Image
              src="https://coreldrawdesign.com/resources/thumbnails/thumbnail-1630681262.jpg"
              alt="Project Image 2"
              width={350}
              height={350}
              className="object-cover rounded-md border-4 border-pink-500 transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg hover:border-sky-500 opacity-100 group-hover:opacity-90"
            />
          </Link>
        </div>

        {/* Project 3 */}
        <div className="relative group mb-4"> 
          <Link href="https://project1-count-down-timer.vercel.app/"> 
            <Image
              src="https://miro.medium.com/v2/resize:fit:1400/1*e8KgiRZGG7EqkrfDnd0DcQ.png"
              alt="Project Image 3"
              width={350}
              height={350}
              className="object-cover rounded-md border-4 border-pink-500 transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg hover:border-sky-500 opacity-100 group-hover:opacity-90"
            />
          </Link>
        </div>

        {/* Project 4 */}
        <div className="relative group mb-4"> 
          <Link href="https://milestone4-editable-resume-form-by-niba-khan.vercel.app/">
            <Image
              src="https://raketcontent.com/medium_RESUME_1d64944aa3.png"
              alt="Project Image 4"
              width={350}
              height={350}
              className="object-cover rounded-md border-4 border-pink-500 transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg hover:border-sky-500 opacity-100 group-hover:opacity-90"
            />
          </Link>
        </div>

        {/* Project 5 */}
        <div className="relative group mb-4"> 
          <Link href="https://github.com/Niba-khan/Marksheet.git"> 
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYB1w79TMKBIqR8EzB1xc7kzx_qR8FrCUcA&s"
              alt="Project Image 5"
              width={350}
              height={350}
              className="object-cover rounded-md border-4 border-pink-500 transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg hover:border-sky-500 opacity-100 group-hover:opacity-90"
            />
          </Link>
        </div>

        {/* Project 6 */}
        <div className="relative group mb-4"> 
          <Link href="https://github.com/Niba-khan/simple-calculator.git"> 
            <Image
              src="https://i.ytimg.com/vi/f2DN1PNIz80/maxresdefault.jpg"
              alt="Project Image 6"
              width={350}
              height={350}
              className="object-cover rounded-md border-4 border-pink-500 transition-all duration-300 transform group-hover:scale-105 hover:shadow-lg hover:border-sky-500 opacity-100 group-hover:opacity-90"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
