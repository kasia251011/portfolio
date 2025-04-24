import Image from "next/image";
import DecoText from "../DecoText";
import LOGO from "@/assets/logo.svg";
import Link from "next/link";

const Nav = () => (
  <nav className="fixed w-full py-2 z-100">
    <div className="container flex justify-between">
      <Link href="/#!">
        <Image src={LOGO} alt="Logo Relaxbad" className="w-7 h-auto" />
      </Link>
      <DecoText icon="phone">691 210 637</DecoText>
    </div>
  </nav>
);

export default Nav;
