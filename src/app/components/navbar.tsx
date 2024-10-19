import Link from 'next/link'
import Image from 'next/image'

export default function Navbar (){
  return (
    <div className="py-5 bg-pink-300 font-black text-2xl border-8 border-cyan-400 hover:bg-cyan-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-2xl pl-36 font-semibold">
           Niba
            <span className=" ml-1 font-extrabold text-gray-200">Khan</span>
          </p>
        </div>

        <div className='flex gap-3 pr-16'> 
          <nav>
            <Link className="mr-5 border-b-2 hover:text-red-500" href={"/"}>Home</Link>  
            <Link className="mr-5 border-b-2 hover:text-blue-500" href={"/about"}>About</Link> 
            <Link className="mr-5 border-b-2 hover:text-green-500" href={"/project"}>Projects</Link>
            <Link className="mr-5  border-b-2 hover:text-yellow-500" href={"/contact"}>Contact</Link>
          </nav>
        </div>
        </div>
        </div>
    )
 }