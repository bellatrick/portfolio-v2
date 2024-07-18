const Pricing = () => {
  return (
    <div className="jara_tm_section" id="pricing">
      <div className="jara_tm_pricing">
        <div className="container">
          <div className="jara_tm_title" data-text-align="center">
            <h3>Pricing</h3>
          </div>
          <div className="list">
            <ul>
              <li className="waypoint_effect">
                <div className="list_inner">
                  <div className="in">
                    <div className="top">
                      <span className="plan">Basic</span>
                      <h3 className="hour">40 Hours</h3>
                      <span className="time">10 hours per week</span>
                    </div>
                    <h3 className="price">
                      $50<span>/hour</span>
                    </h3>
                    <div className="jara_tm_button_border">
                      <a href="#">Get Started Now</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="dark waypoint_effect">
                <div className="list_inner">
                  <div className="in">
                    <div className="top">
                      <span className="plan">Standard</span>
                      <h3 className="hour">60 Hours</h3>
                      <span className="time">20 hours per week</span>
                    </div>
                    <h3 className="price">
                      <span className="gradient">$60</span>
                      <span className="in">/hour</span>
                    </h3>
                    <div className="jara_tm_button_border">
                      <a href="#">Get Started Now</a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="waypoint_effect">
                <div className="list_inner">
                  <div className="in">
                    <div className="top">
                      <span className="plan">Premium</span>
                      <h3 className="hour">90 Hours</h3>
                      <span className="time">30 hours per week</span>
                    </div>
                    <h3 className="price">
                      $120<span>/hour</span>
                    </h3>
                    <div className="jara_tm_button_border">
                      <a href="#">Get Started Now</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Pricing;
