import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import DriverSection from "../components/UI/DriverSection";
import img1 from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/AboutPage.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection />

      <Container className="mb-4 mt-2">
        <Row>
          <Col lg="6" md="6" sm="12">
            <div className="about_page-img">
              <img src={img1} alt="" className="w-100 rounded-3" />
            </div>
          </Col>
          <Col lg="6" md="6" sm="12">
            <div className="about_page-content">
              <h2 className="section_title">
                We are Committed T0 Provide Safe Ride Solution
              </h2>
              <p className="section_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum. <br /> Laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio.
              </p>
              <div className="d-flex align-items-center gap-3 mt-3">
                <span className="fs-4">
                  <i className="ri-phone-line"></i>
                </span>

                <div>
                  <h6 className="section_subtitle">Need Any Help</h6>
                  <h6>+23408074737585</h6>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <DriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-3 mt-3 text-center">
              <h6 className="section_subtitle">Experts</h6>
              <h2 className="section_title">Our Members</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
