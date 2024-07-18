"use client";

import Isotope from "isotope-layout";
import { useContext, useEffect, useRef, useState } from "react";
import { jaraUtilits } from "../utility";

const PortfolioIsotope = () => {
  // Isotope
  const isotope = useRef();
  useEffect(() => {
    jaraUtilits.dataImage();
    setTimeout(() => {
      isotope.current = new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".grid-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 500);
  }, []);
const projects=[
  {name:'BuildBoxed',img:"img/portfolio/1.png"}
]


  return (
    <div className="portfolio_inner">
      <div className="jara_tm_flex_title">
        <div className="jara_tm_title" data-text-align="left">
          <h3>Software Projects</h3>
        </div>
        <div className="portfolio_filter">
          See Technical Writing projects
        </div>
      </div>
      <div className="portfolio_list">
        <ul className="grid gallery_zoom">
        {projects.map((project)=>(
            <li className="grid-item vimeo">
            <div className="list_inner">
              <div className="image">
                <img src={project.img} alt="" />
                <div className="main" data-img-url="img/portfolio/1.jpg" />
                <a
                  className="jara_tm_full_link popup-vimeo"
                  href="https://vimeo.com/337293658"
                />
              </div>
              <div className="title">
                <h3>
                  <a
                    className="text_hover_gradient popup-vimeo"
                    href="https://vimeo.com/337293658"
                  >
                    {project.name}
                  </a>
                </h3>
              </div>
            </div>
          </li>
        ))}

        </ul>
      </div>
    </div>
  );
};
export default PortfolioIsotope;
