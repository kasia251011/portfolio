import Image from "next/image";
import LINKEDIN from "@/assets/icons/Linkedin.svg";
import Link from "next/link";

const Footer = () => (
  <div className="bg-white/20 backdrop-blur-sm border border-t-white text-gray-400 text-xs p-5 flex flex-col gap-3 md:gap-0 text-center md:text-start md:flex-row md:justify-between items-center">
    <p>Kasia Jankowska 2025, Wszelkie prawa zastrzerzone</p>

    <Link href="https://www.linkedin.com/in/kasia-jankowska-5b07941a9/">
      <Image src={LINKEDIN} alt="LinkedIn Kasia Jankowska" className="size-6" />
    </Link>
  </div>
);

export default Footer;
