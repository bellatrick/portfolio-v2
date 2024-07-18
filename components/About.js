"use client";
import dynamic from "next/dynamic";
const Counter = dynamic(() => import("./Counter"), {
  ssr: false,
});

const About = () => {
  return (
    <div className="jara_tm_section dark:bg-black/40" id="about">
      <div className="jara_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="experience">
              <div className="in">
                <div className="inside">
                  <h3>
                    <Counter end={3} />
                  </h3>
                  <h6>
                    Years
                    <br />
                    Expercience
                  </h6>
                </div>
              </div>
            </div>
            <div className="text">
              <p>
                Over{" "}
                <span className="text-green-500">3 years of coding</span>! I
                help to transform concepts projects using{" "}
                <span className="text-green-500">logic</span> and{" "}
                <span className="text-green-500">creativity.</span>{" "}

              </p>
              <div className="jara_tm_button_border">
                <a href="img/portfolio/resume.pdf" download="">
                  Download My Resume
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
