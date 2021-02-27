import React from "react";
import { About, Description, Hide, Image } from "../styles";

// Import Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

//Import Images
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
          <motion.p variants={fade}>
            Contact us for any ideas. We have professionals with amazing skills
          </motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
        </motion.div>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
