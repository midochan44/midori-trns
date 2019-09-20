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
                After working for translation at{" "}
                <a href="http://www.shiningprince.com/" target="a">
                  Shining Prince Entertainment
                </a>
               I spent 17 years in the United States.  During the stay I helped with translations for Shining Prince.  Now I’m base in Japan and commit to help people who need my skills and experiences.  
               Toeic Score: 875
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <h4>Geoffrey Bossiere</h4>
              <p>
                President of{" "}
                <a href="http://www.shiningprince.com/" target="a">
                  Shining Prince Entertainment
                </a>
                , a consulting company related to movies and IT businesses, serves for worldside clients. Own UCLA MBA
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
