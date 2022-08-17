import React from "react";
import "../styles/Contact.css";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact Us" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="6">
              <h6 className="fw-bold">Get In Touch</h6>

              <Form>
                <FormGroup>
                  <Input type="text" placeholder="Full Name" />
                </FormGroup>
                <FormGroup>
                  <Input type="email" placeholder="Email" />
                </FormGroup>
                <FormGroup>
                  <textarea
                    rows="5"
                    placeholder="Message..."
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button type="submit" className="contact_btn">
                  Send
                </button>
              </Form>
            </Col>
            <Col lg="5" md="6">
              <div className="contact_info">
                <h6 className="fw-bold"> Contact Information</h6>
              </div>
              <div className="d-flex align-items-center gap-2">
                <h6 className="mb-0 fs-0">Address:</h6>
                <p className="section_description mb-0">
                  123 uptown Street, Wuse, Abuja.
                </p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <h6 className="mb-0 fs-0 ">Phone:</h6>
                <p className="section_description mb-0">+2348043453855</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <h6 className="mb-0 fs-0">Email:</h6>
                <p className="section_description mb-0">example@gmail.com</p>
              </div>
              <div className="social_icon">
                <h6 className="mt-4 fw-bold">Follow Us</h6>
                <div className=" social_link-icon d-flex align-items-center gap-4 mt-3">
                  <Link to="#" className="facebook">
                    <i className="ri-facebook-line"></i>
                  </Link>
                  <Link to="#" className="instagram">
                    <i className="ri-instagram-line"></i>
                  </Link>
                  <Link to="#" className="linkedin">
                    <i className="ri-linkedin-line"></i>
                  </Link>
                  <Link to="#" className="twitter">
                    <i className="ri-twitter-line"></i>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
