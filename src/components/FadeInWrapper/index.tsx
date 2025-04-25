import { PropsWithChildren } from "react";
import * as motion from "motion/react-client";

interface FadeInWrapperProps extends PropsWithChildren {
  delay?: number;
  duration?: number;
}

const FadeInWrapper = ({
  children,
  delay = 0,
  duration = 2,
}: FadeInWrapperProps) => {
  console.log("motion: ", motion.div);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration, ease: "easeOut", delay }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInWrapper;
