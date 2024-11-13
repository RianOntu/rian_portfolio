import React, { useEffect } from "react";
import "./AboutMe.css";
import about_me2 from "../../assets/pic_rian.png";
import AOS from "aos";
import "aos/dist/aos.css";
import Resume from "../../Resume/Resume";

const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="container aboutme" id="aboutme">
      <div className="flex about mt-5 align-items-start">
        <img
          className="ppic"
          src={about_me2}
          style={{ width: "400px", height: "430px" }}
          alt=""
        />
        <div className="flex flex-col">
          <div className="about_me_desc">
            <p className="text-justify" style={{ color: "#8892B0" }}>
              I am RIAN-AL-NUR, a graduate with a BSc in Computer Science and
              Engineering from the American International University-Bangladesh.
              Throughout my academic journey, I have acquired a diverse range of
              skills and knowledge. Additionally, I have recently completed{" "}
              <span style={{ color: "white" }}>
                MERN stack development training
              </span>{" "}
              from <span style={{ color: "white" }}>Programming Hero</span> also
              from <span style={{ color: "white" }}>Bohubrihi</span>.
              <span style={{ color: "white" }}>Frontend development</span> is my
              passion, and I am eager to work{" "}
              <span style={{ color: "white" }}>
                collaboratively in a team environment
              </span>{" "}
              while continuously learning new web technologies. I am also driven
              to contribute to a company's needs and goals.
            </p>
            <Resume />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
