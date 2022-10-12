import React, { useContext } from "react";
import "./Works.css";
import mongodb from "../../img/mongo db.png";
import expressjs from "../../img/express-logo.png";
import js from "../../img/JavaScript.png";
import reactjs from "../../img/reactjs.png";
import nodejs from "../../img/nodejs.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Worked in these
          </span>
          <span>Tools and Technologies</span>
          <spane>
            worked in these tools and have good knoweldge of installation,
            <br />
            command line codes 
            
            <br />
            as well as in MERN stack 
            <br />
            also in Bootstrap,EJS, Eventloupe, Postman , insomnia 
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={mongodb} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={expressjs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={js} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={reactjs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={nodejs} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;