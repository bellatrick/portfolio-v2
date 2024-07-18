import Link from "next/link";

const Footer = () => {
  return (
    <div className="jara_tm_section bg-apply" id="footer">
      <div className="jara_tm_footer bg-apply">
        <div className="container">
          <div className="footer_inner">
            <div className="project bg-teal-700 rounded-md">
              <div className="left" >
                <h3>Got a project? Let's talk!</h3>
              </div>
              <div className="right " >
                <div className="flex items-center justify-center">
                  <img className="" src="img/about/mymoji.png" alt="" />
                </div>
                <Link href={'/contact'} className="call">
                  <p className="bg-white text-gray-800 px-4 py-3 rounded-md hover:bg-black/80 hover:text-white text-center font-semibold">
                    Contact me
                  </p>
                </Link>
              </div>
            </div>
            <div className="copyright">
              <div className="year " >
                <p>© {new Date().getFullYear()} Busayo All Right Reserved</p>
              </div>
              <div className="logo " >
                <img src="img/logo/logo.png" alt="" />
              </div>
              <div className="social " >
                <ul>

                  <li>
                    <a href="https://x.com/Bellaspeaksss">
                      <i className="icon-twitter-1" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/bellatrick">
                      <i className="icon-github-1" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
