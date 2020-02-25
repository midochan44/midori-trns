import React from "react";
import kayImg from "../../media/kay.jpg";

export default class AboutE extends React.Component {
  render() {
    return (
      <div>
        <h2>Who we are</h2>
        <hr />
        <div className="about">
          <img src={kayImg} alt="Kayoko Bossiere" />
          <div className="row">
            <div className="col-12">
              <h4>Kayoko Bossiere</h4>
              <p>
                I have worked with translation for our company, {" "}
                <a href="http://www.shiningprince.com/" target="a">
                  Shining Prince Entertainment
                </a>
               , on and off for 18 years.  Now we’re based in Japan and commit to help people who need my skills and experiences.

              </p>
            </div>
          </div>
          
        </div>
      </div>
    );
  }
}
