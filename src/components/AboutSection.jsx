import React from "react";
import { About, Description, Hide, Image } from "../styles";

// Import Framer Motion
import { motion } from "framer-motion";

//Import Images
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true</motion.h2>
          </Hide>
          <p>
            Contact us for any ideas. We have professionals with amazing skills
          </p>
          <button>Contact Us</button>
        </motion.div>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
