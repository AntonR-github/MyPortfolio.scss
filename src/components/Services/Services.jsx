import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  const contact = 'Contact'

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on crafting 
          <br /> unique digital experiences
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Developing</motion.b> Functional
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>And Beautiful</motion.b> Web Apps.
          </h1>
          <button
            onClick={() => {
              window.location.href = `#${contact}`;
            }}
          >WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Frontend</h2>
          <p>
            Developing Client Side applications with Javascript and Typescript,<br />
            using React, Angular and other related frameworks and libraries,<br />
            to create responsive and beautiful websites and web applications.
          </p>
          <button
            onClick={() => {
              window.location.href = `#${contact}`;
            }}
          >Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Backend</h2>
          <p>
            Developing Server Side applications with Javascript and PHP,<br />
            using NodeJS, ExpressJS and other related technologies and libraries.<br />
            MySQL and MongoDB for database management.
          </p>
          <button
            onClick={() => {
              window.location.href = `#${contact}`;
            }}
          >Go</button>
        </motion.div>
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Design</h2>
          <p>
            Using CSS3, SASS, Bootstrap, Material UI and other related technologies and libraries,
            to create responsive and beautiful websites and web applications.
          </p>
          <button>Go</button>
        </motion.div> */}
        {/* <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Branding</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            libero enim nisi aliquam consectetur expedita magni eius ex corrupti
            animi! Ad nam pariatur assumenda quae mollitia libero repellat
            explicabo maiores?
          </p>
          <button>Go</button>
        </motion.div> */}
      </motion.div>
    </motion.div>
  );
};

export default Services;
