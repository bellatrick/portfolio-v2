"use client";

import { useContext } from "react";
import { context } from "../context/context";
import Link from "next/link";


const News = () => {
  const blogs = [
    {
      id: 1,
      img: "img/news/1.jpg",
      title: "Why your client needs a responsive website",
      date: "Sep 22, 2023",
      animation: "fadeInLeft",
    },
    {
      id: 2,
      img: "img/news/2.jpg",
      title: "Best design books for increase design knowledge",
      date: "Sep 11, 2023",
      animation: "fadeInRight",
    },
  ];
  const { modalToggle, setBlogModal } = useContext(context);
  return (
    <div className="jara_tm_section" id="blog">
      <div className="jara_tm_news">
        <div className="container">
          <div className="news_inner">
            <div className="jara_tm_flex_title">
              <div className="jara_tm_title" data-text-align="left">
                <h3>Recent Blog</h3>
              </div>
              <div className="jara_tm_button_border">
                <Link href="blog">View All</Link>
              </div>
            </div>
            <div className="list">
              <ul>
                {blogs.map((blog) => (
                  <li
                    className={`wow ${blog.animation}`}
                    data-wow-duration=".5s"
                    key={blog.id}
                  >
                    <div className="list_inner">
                      <div className="image">
                        <img src="img/thumbs/57-32.jpg" alt="" />
                        <div className="main" data-img-url={blog.img} />
                        <a
                          className="jara_tm_full_link"
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            modalToggle(true);
                            setBlogModal(blog);
                          }}
                        />
                      </div>
                      <div className="details">
                        <span className="date">{blog.date}</span>
                        <h3 className="title">
                          <a
                            href="#"
                            className="text_hover_gradient"
                            onClick={(e) => {
                              e.preventDefault();
                              modalToggle(true);
                              setBlogModal(blog);
                            }}
                          >
                            {blog.title}
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default News;
