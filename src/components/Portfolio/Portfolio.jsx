import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Amazon Price Tracker",
    img: "project7.png",
    desc: "Fullstack Amazon Price Tracker app using MERN stack and Next.js, enabling users to track prices of products on Amazon and receive email notifications when the price drops.",
    href: 'https://pricetracker-red.vercel.app/',
  },
  {
    id: 2,
    title: "Food Shop",
    img: "project2.jpg",
    desc: "Fullstack Food Shop app using MEAN stack, enabling users order food online, integrated with Google Maps API and paypal payment system.",
    href: 'https://foodshop-tmv0.onrender.com/',
  },
  {
    id: 3,
    title: "Cloth Shop",
    img: "project8.png",
    desc: "Cloth Shop app built using ReactJS, enabling users to browse and purchase clothes online. ",
    href: 'https://cloths-shop-antonr.netlify.app/',
  },
  {
    id: 4,
    title: "Travel App",
    img: "project9.png",
    desc: "Travel app built using React Next.js and Tailwind CSS, enabling users to browse and book trips online.",
    href: 'https://antonr-travel-app.netlify.app/',
  },
  {
    id: 5,
    title: "Car Rental App",
    img: "project12.jpg",
    desc: "Cars Rental app using Next.js, REST API, Tailwind CSS, enabling users to browse and rent cars online.",
    href: 'https://cars-rental-ar.netlify.app/',
  },
  {
    id: 6,
    title: "Fitness Website",
    img: "project4.jpg",
    desc: "Frontend app for a fitness website, using React Typescript, Vite, Framer Motion and Tailwind CSS to create a modern and responsive website.",
    href: 'https://gymwebsite-aad.pages.dev/',
  },
  {
    id: 7,
    title: "Admin Dashboard",
    img: "project3.png",
    desc: "Admin Dashboard app using React, Material UI, Data Grid, enabling users to manage and view data.",
    href: 'https://antonr-dashboard.netlify.app/',
  },
  {
    id: 8,
    title: "Ecommerce Website",
    img: "project1.jpg",
    desc: "Fullstack ECommerce app using MERN stack, enabling users to browse and purchase products online. The app also provides a convenient and efficient admin dashboard for managing an online shop.",
    href: 'https://eshop2.onrender.com/',
  },
  {
    id: 9,
    title: "CowBank",
    img: "project5.jpg",
    desc: 'A beautiful banking app landing page created using React.js Tailwind CSS and Figma.',
    href: 'https://cowbank-antonr.netlify.app/',
  },
  {
    id: 10,
    title: "Weather App",
    img: "project6.jpg",
    desc: 'Weather App created using Angular Typescript and OpenWeatherMap API.',
    href: 'https://weather-app-by-antonr.web.app/',
  },
  {
    id: 11,
    title: "Fighting Game",
    img: "project10.png",
    desc: 'Fighting Game created with JS and Sprite Animation.',
    href: 'https://fighting-game-ar.netlify.app/',
  },
  {
    id: 12,
    title: "Calculator App",
    img: "project14.jpeg",
    desc: 'Calculator app',
    href: 'https://antonr-calculator.netlify.app/',
  },
  {
    id: 13,
    title: "Tic Tac Toe Game",
    img: "project15.png",
    desc: 'Tic Tac Toe Game',
    href: 'https://tictactoe-1u1.pages.dev/',
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