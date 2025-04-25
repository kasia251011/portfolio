import PROJECT_1 from "@/assets/projects/relaxbad.webp";
import PROJECT_2 from "@/assets/projects/kseuforia.webp";
import PROJECT_3 from "@/assets/projects/kuchnia.webp";
import Image from "next/image";
import Link from "next/link";
import FadeInWrapper from "@/components/FadeInWrapper";

const PROJECTS = [
  {
    src: PROJECT_1,
    alt: "Project 1",
    href: "https://www.relaxbad.pl/",
  },
  {
    src: PROJECT_2,
    alt: "Project 2",
    href: "https://kseuforia.pl/",
  },
  {
    src: PROJECT_3,
    alt: "Project 3",
    href: "https://magiczna-kuchnia.pl/",
  },
];

const ProjectsSection = () => (
  <div className="container grid grid-cols-1 md:grid-cols-3 gap-6">
    {PROJECTS.map(({ alt, href, src }, index) => (
      <FadeInWrapper key={index} delay={index * 0.5}>
        <Link href={href} target="_blank">
          <Image
            src={src}
            alt={alt}
            className="rounded-3xl md:rounded-4xl border border-gray-100"
          />
        </Link>
      </FadeInWrapper>
    ))}
  </div>
);

export default ProjectsSection;
