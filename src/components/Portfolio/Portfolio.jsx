import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Food Shop",
    img: "project2.jpg",
    desc: "Fullstack Food Shop app using MEAN stack, enabling users order food online, integrated with Google Maps API and paypal payment system.",
    href: 'https://foodshop-tmv0.onrender.com/',
  },
  {
    id: 2,
    title: "Car Rental App",
    img: "project12.jpg",
    desc: "Cars Rental app using Next.js, REST API, Tailwind CSS, enabling users to browse and rent cars online.",
    href: 'https://cars-rental-ar.netlify.app/',
  },
  {
    id: 3,
    title: "Fitness Website",
    img: "project4.jpg",
    desc: "Frontend app for a fitness website, using React Typescript, Vite, Framer Motion and Tailwind CSS to create a modern and responsive website.",
    href: 'https://gymwebsite-aad.pages.dev/',
  },
  {
    id: 4,
    title: "Admin Dashboard",
    img: "project3.png",
    desc: "Admin Dashboard app using React, Material UI, Data Grid, enabling users to manage and view data.",
    href: 'https://antonr-dashboard.netlify.app/',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button
                onClick={() => window.open(item.href)}
            >See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;