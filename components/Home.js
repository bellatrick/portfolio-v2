import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div className=" mx-auto   jara_tm_section bg-apply" id="home">
      <div className="jara_tm_hero ">
        <div className="container ">
          <div className="content">
            <div className="left">
              <div className="hello dark:text-gray-100">
                <span className="hello">
                  <img className="svg" src="img/svg/hand.svg" alt="" />
                  Hello, World!
                </span>
              </div>
              <div className="title">
                <h2>I'm Busayo</h2>
                <h3 className="py-6">A Fullstack Developer & Technical Writer</h3>

              </div>
              <div className="subtitle">
                <p>With 3+ years experience</p>
              </div>
              <div className="buttons">
                <div className="jara_tm_button">
                  <Link className="anchor" href="/contact">
                    Say Hello
                  </Link>
                </div>
                <div className="jara_tm_button_border">
                  <Link className="anchor" href="/portfolio/technical-writing">
                    My Works
                  </Link>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="h-[500px] w-[500px] object-cover">
                <Image height={700} width={700} className="" src="/img/logo/moji.png" alt="" />

              </div>
            </div>
          </div>
          <div className="tm_partners">
            <div className="text">
              <p>
                Worked with
              </p>
            </div>
            <div className="list">
              <Marquee className="marquee">
                <ul>
                  <li>
                    <img src="img/partners/1.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/partners/21.png" alt="" />
                  </li>
                  <li>
                    <img src="img/partners/31.png" alt="" />
                  </li>
                  <li>
                    <img src="img/partners/41.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/partners/51.jpg" alt="" />
                  </li>
                  <li>
                    <img src="img/partners/61.png" alt="" />
                  </li>
                </ul>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
