const Process = () => {
  return (
    <div className="jara_tm_section">
      <div className="jara_tm_process">
        <div className="container">
          <div className="process_inner">
            <div className="jara_tm_title" data-text-align="left">
              <h3>Working process</h3>
            </div>
            <div className="list">
              <ul>
                <li className="waypoint_effect active">
                  <div className="list_inner">
                    <div className="in">
                      <span className="step">Step: 1</span>
                      <span className="icon">
                        <img src="img/svg/icon.svg" alt="" />
                      </span>
                      <h3 className="title">Send up your project</h3>
                      <p className="text">
                        Compellingly repurpose covalent core competencies for
                        top-line paradigms.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="waypoint_effect">
                  <div className="list_inner">
                    <div className="in">
                      <span className="step">Step: 2</span>
                      <span className="icon">
                        <img src="img/svg/phone.svg" alt="" />
                      </span>
                      <h3 className="title">Get it delivered on time</h3>
                      <p className="text">
                        Compellingly repurpose covalent core competencies for
                        top-line paradigms.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="waypoint_effect">
                  <div className="list_inner">
                    <div className="in">
                      <span className="step">Step: 3</span>
                      <span className="icon">
                        <img src="img/svg/talk.svg" alt="" />
                      </span>
                      <h3 className="title">
                        Take on more clients &amp; scale up
                      </h3>
                      <p className="text">
                        Compellingly repurpose covalent core competencies for
                        top-line paradigms.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div
                className="jara_tm_button_border wow fadeInUp"
                data-wow-duration=".5s"
              >
                <a className="anchor" href="#footer">
                  Contact With Me
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="imagebox">
          <div
            className="main jarallax"
            data-speed={0}
            data-img-url="img/process/1.jpg"
          />
        </div>
      </div>
    </div>
  );
};
export default Process;
