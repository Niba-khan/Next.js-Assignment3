import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-style py-5 text-black bg-pink-500 border-4 border-cyan-500 hover:bg-cyan-300">
    <div >
<p className="text-center mb-2 text-sm hover:text-white">@Niba Khan. All rights reserved.</p>
<p className="text-center mb-2 text-sm hover:text-white">Contact me via</p>
</div>

<div className="flex justify-center space-x-4 mb-6 animate-pulse">
            <a
              href="https://www.linkedin.com/in/niba-farooq"
              target="_blank"
              rel="noopener noreferrer"
             
            >
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s" alt="LinkedIn" height={24} width={24} />
            </a>
          
            <a
              href="https://github.com/Niba-khan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s" alt="Instagram" height={24} width={24} />
            </a>
          </div >
     </footer>
  );
};



