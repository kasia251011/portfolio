"use client";

import { HTMLAttributes } from "react";
import PHONE_ICON from "@/assets/icons/phone.svg";
import PHONE_DARK_ICON from "@/assets/icons/phone-dark.svg";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

interface DecoTextProps extends HTMLAttributes<HTMLParagraphElement> {
  type?: "primary" | "secondary";
  variant?: "filled" | "outlined";
  size?: "sm" | "md" | "lg";
  icon?: "phone" | "phone-dark";
}

const primaryFilled = "bg-primary text-white";
const secondaryFilled = "bg-secondary text-[#4D4213] ";

const primaryOutlined = "border-3 border-primary";
const secondaryOutlined = "border-3 border-secondary ";

const getClassNames = (type: string, variant: string) => {
  switch (type) {
    case "primary":
      return variant === "filled" ? primaryFilled : primaryOutlined;
    case "secondary":
      return variant === "filled" ? secondaryFilled : secondaryOutlined;
    default:
      return "";
  }
};

const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success("Skopiowano do schowka");
};

const DecoText = ({
  children,
  size = "sm",
  type = "primary",
  variant = "filled",
  icon,
  className,
}: DecoTextProps) => {
  const sizeClass =
    size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base";

  return (
    <div
      onClick={() => handleCopy(children as string)}
      className={`${getClassNames(
        type,
        variant
      )} ${sizeClass} ${className} w-fit h-fit py-2 px-4 rounded-full flex gap-2 items-center font-semibold hover:cursor-pointer`}
    >
      {icon && (
        <Image
          src={icon === "phone" ? PHONE_ICON : PHONE_DARK_ICON}
          alt={icon}
          className="size-4"
        />
      )}
      <p className="font-semibold">{children}</p>
      <Toaster
        toastOptions={{
          style: {
            boxShadow: "-4px 3px 10px 0px rgba(66, 68, 90, 0.06)",
          },
        }}
      />
    </div>
  );
};

export default DecoText;
