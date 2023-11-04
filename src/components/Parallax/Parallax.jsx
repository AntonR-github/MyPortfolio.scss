import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #134f5c, #76a5af)"
            : "linear-gradient(180deg, #45818e, #45818e)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What I Do?" : "What I Did?"}
      </motion.h1>
      <motion.div 
      className="mountains"></motion.div>
      <motion.div
        className="planets"
        style={{
          y: yBg,
          backgroundImage: `url(${
            type === "services" ? "/sun.png" : "/moon.png"
          })`,
        }}
      ></motion.div>
      <motion.div style={{ 
        x: yBg,
        backgroundImage: `url(${
          type === "services" ? "/stars.png" : "/night.png"
        })`,
       }} className="stars"></motion.div>
    </div>
  );
};

export default Parallax;