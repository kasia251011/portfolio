import DecoText from "@/components/DecoText";
import Image from "next/image";
import LINE_3 from "@/assets/lines/line-3.svg";
import LINE_3_SM from "@/assets/lines/line-3-sm.svg";
import LINE_3_MD from "@/assets/lines/line-3-md.svg";

import BLOB from "@/assets/blob.svg";
import Footer from "../Footer";

const ContactSection = () => (
  <div className="relative overflow-clip">
    <Image
      src={LINE_3}
      role="presentation"
      alt=""
      className="hidden lg:block absolute -top-15 left-0 w-full -z-10"
    />
    <Image
      src={LINE_3_MD}
      role="presentation"
      alt=""
      className="hidden sm:block lg:hidden absolute -top-10 left-0 w-full -z-10"
    />
    <Image
      src={LINE_3_SM}
      role="presentation"
      alt=""
      className="sm:hidden absolute -top-5 md:-top-15 left-0 w-full -z-10"
    />
    <div className="container flex flex-col items-center gap-4 py-40 md:py-60 0">
      <h2 className="text-center mb-5 px-5 ">
        <span className="text-primary">Napisz do mnie lub zadzwoń</span> , a{" "}
        <br />
        przedstawię szczegóły oferty!
      </h2>

      <DecoText icon="phone-dark" type="secondary">
        691 210 627
      </DecoText>
      <DecoText variant="outlined">kasia.jankowska.web@gmail.com</DecoText>
    </div>
    <Image
      src={BLOB}
      role="presentation"
      alt=""
      className="absolute -bottom-30 sm:-bottom-80 md:-bottom-100 left-0 sm:-left-30 md:-left-50 -z-10"
    />
    <Footer />
  </div>
);

export default ContactSection;
