import React from "react";
import { About, Description, Hide, Image } from "../styles";

//Import Images
import home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
          <p>
            Contact us for any ideas. We have professionals with amazing skills
          </p>
          <button>Contact Us</button>
        </div>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

export default AboutSection;
