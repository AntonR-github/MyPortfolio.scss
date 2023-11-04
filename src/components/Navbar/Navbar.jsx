
import './navbar.scss';
import { motion } from "framer-motion";
import Sidebar from './../Sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className="navbar">
    <Sidebar/>
    <div className="wrapper">
      <motion.span
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Hey i am Anton, Welcome to my portfolio i hope you enjoy it.
      </motion.span>
      <div className="social">
        <a href="https://github.com/AntonR-github/">
          <img src="/github.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/antonrv/">
          <img src="/linkedin.png" alt="" />
        </a>
      </div>
    </div>
  </div>
  )
}

export default Navbar
