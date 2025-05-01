import Image from "next/image";
import LINE_2 from "@/assets/lines/line-2.svg";
import LINE_2_SMALL from "@/assets/lines/line-2-small.svg";
import LINE_2_MD from "@/assets/lines/line-2-md.svg";

import WEB_GIRL from "@/assets/web-girl.svg";
import { JSX } from "react";

interface TextSectionProps {
  header: string | JSX.Element;
  description: string;
}

const TextSection = ({ description, header }: TextSectionProps) => (
  <section className="container text-center  w-full px-10">
    <h2>{header}</h2>
    <p className="lg:w-1/2 pt-7 mx-auto">{description}</p>
  </section>
);

const DescriptionSection = () => (
  <div className="relative">
    <div className="flex flex-col gap-10 lg:gap-80 py-40 items-center">
      <TextSection
        header={
          <>
            Chcesz pokazać się w sieci? <br /> Mały budżet?
          </>
        }
        description={`  Tworzę strony dostosowane do potrzeb małych firm i jednoosobowych
        działalności. Przejrzysta oferta, jasne zasady i ceny, które nie
        przerażają.`}
      />

      <Image
        src={WEB_GIRL}
        alt="Dziewczyna projektująca strony internetowe"
        className="lg:absolute lg:bottom-70 lg:left-10 w-70 lg:w-100"
      />
      <TextSection
        header="Kompleksowa obsługa"
        description={`Zaprojektuję wygląd, wdrożę stronę, zadbam o podstawowe pozycjonowanie
          i pomogę w tworzeniu treści.`}
      />
    </div>

    <Image
      src={LINE_2}
      role="presentation"
      alt=""
      className="hidden lg:block absolute -bottom-30 sm:bottom-20 lg:-bottom-50 left-0 w-full -z-10 "
    />
    <Image
      src={LINE_2_MD}
      role="presentation"
      alt=""
      className="hidden sm:block lg:hidden absolute bottom-110 left-0 w-full -z-10 "
    />
    <Image
      src={LINE_2_SMALL}
      role="presentation"
      alt=""
      className="absolute sm:hidden bottom-120  left-0 w-full -z-10 "
    />
  </div>
);

export default DescriptionSection;
