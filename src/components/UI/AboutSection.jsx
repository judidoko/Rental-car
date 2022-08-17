import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/About-section.css";
import aboutImg from "../../assets/all-images//cars-img/bmw-offer.png";

const AboutSection = () => {
  return (
    <section>
      <Container>
        <Row className="row mb-4 mt-3 align-items-center">
          <Col lg="6" md="7">
            <div className="about_section-content">
              <h4 className="section_subtitle">About Us</h4>
              <h2 className="section_title">Welcome To Car Rental Service</h2>
              <p className="section_description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis.
              </p>
              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor
                  sit amet consectetur.
                </p>
                <p className="section_description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor
                  sit amet consectetur.
                </p>
              </div>
              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor
                  sit amet consectetur.
                </p>
                <p className="section_description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i>Lorem ipsum dolor
                  sit amet consectetur.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="5">
            <div className="about_img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
