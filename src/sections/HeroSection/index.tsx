import DecoText from "@/components/DecoText";
import Image from "next/image";
import ARROW from "@/assets/icons/arrow-down.svg";
import LINE_1 from "@/assets/lines/line-1.svg";
import LINE_1_MD from "@/assets/lines/line-1-md.svg";
import LINE_1_SM from "@/assets/lines/line-1-sm.svg";
import DevGirl from "@/components/grafics/DevGirl";
import Link from "next/link";

const HeroSection = () => (
  <div className="relative">
    <header className="container pt-40 h-screen pb-10 flex flex-col justify-between">
      <div className="relative">
        <DecoText type="secondary" className="mb-5 ">
          Kasia Jankowska
        </DecoText>
        <h1 className="text-[#31174D]">
          Wykonam <br />
          <span className="text-primary">stronę internetową</span>
          <br /> dla Ciebie
        </h1>
      </div>
      <Link href="#projekty">
        <div className="self-center flex flex-col items-center cursor-pointer z-20">
          <p className="mb-5 text-sm text-primary-dark">Ostatnie realizacje</p>
          <Image src={ARROW} alt="Strzałka" className="animate-bounce" />
        </div>
      </Link>
      <DevGirl className="absolute -right-0 w-60 sm:w-80 md:w-100 lg:w-auto -bottom-10 md:bottom-10 lg:bottom-40 z-10 pointer-events-none" />
    </header>
    <Image
      src={LINE_1}
      role="presentation"
      alt=""
      className="hidden lg:block absolute  -bottom-40 left-0 w-full -z-10"
    />
    <Image
      src={LINE_1_MD}
      role="presentation"
      alt=""
      className="hidden sm:block lg:hidden absolute  -bottom-10 left-0 w-full -z-10"
    />
    <Image
      src={LINE_1_SM}
      role="presentation"
      alt=""
      className="sm:hidden absolute  bottom-20  left-0 w-full -z-10"
    />
  </div>
);

export default HeroSection;
