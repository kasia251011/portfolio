import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface ExpCardProps {
  title: string;
  description: string;
  icon: StaticImport;
}

const ExpCard = ({ title, description, icon }: ExpCardProps) => (
  <div className="bg-white rounded-4xl flex flex-col items-center p-10 pb-16 h-full">
    <Image src={icon} alt={title} className="w-10 h-10 mb-2" />
    <h3 className="my-2">{title}</h3>
    <p className="text-sm text-gray-500">{description}</p>
  </div>
);

export default ExpCard;
