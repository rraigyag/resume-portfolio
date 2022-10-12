import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>3</div>
        <span  style={{color: darkMode?'white':''}}>known </span>
        <span>Languages</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>2 </div>
        <span  style={{color: darkMode?'white':''}}>Main  </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
        <span  style={{color: darkMode?'white':''}}>Mini  </span>
        <span>Projects</span>
      </div>
    </div>
  );
};

export default Experience;