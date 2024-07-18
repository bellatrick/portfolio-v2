const Testimonials = () => {
  return (
    <div className="jara_tm_section">
      <div className="jara_tm_testimonials">
        <div className="container">
          <div className="testimonials_inner">
            <div className="left wow fadeInLeft" data-wow-duration=".5s">
              <img src="img/testimonials/1.jpg" alt="" />
            </div>
            <div className="right">
              <div className="text wow fadeInRight" data-wow-duration=".5s">
                <p>
                  “We worked with Marketify designing our backend web app from
                  scratch and we are happy with the results. He has good
                  communication skills and uses robust workflows that allowed me
                  and my team to work with him efficiently.”
                </p>
              </div>
              <div className="extra wow fadeInUp" data-wow-duration=".5s">
                <div className="info">
                  <h3>By Adam Walker</h3>
                  <span>CEO @Javis Company Ltd.</span>
                </div>
                <img className="svg" src="img/svg/quote.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
