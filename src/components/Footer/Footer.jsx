import React from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },
  {
    path: "#",
    display: "Privacy Policy",
  },
  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog ",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12" className="p-1">
            <div className="logo footer_logo ">
              <h1>
                <Link to="/home" className="d-flex align-items-center gap-2">
                  <i className="ri-car-line"></i>
                  <span>
                    Rental Car <br /> Service
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer_logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum. molestiae quas vel sint commodi repudiandae
              consequuntur voluptatum.
            </p>
          </Col>

          <Col lg="2" md="2" sm="6" className="p-1">
            <div className="mb-4 ">
              <h5 className="footer_link-title mt-(-5)">Quick Links</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className=" quick_link p-0 mb-2">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="3" sm="6" className="p-1">
            <div className="mb-4">
              <h5 className="footer_link-title">Head Office</h5>
              <p className="office_info">123 Jomula Street, Lagos</p>
              <p className="office_info">Phone: +234804940344</p>
              <p className="office_info">Email: example@gmail.com</p>
              <p className="office_info">Office Time: 9am - 5pm</p>
            </div>
          </Col>

          <Col lg="3" md="3" className="p-1">
            <div className="mb-4">
              <h5 className="footer_link-title">NewsLetter</h5>
              <p className="section_description">Subscribe To Our Newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i className="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>
          <Col lg="12">
            <div className="footer_bottom">
              <p className="Footer_description d-flex align-items-center justify-content-center gap-1 mt-3">
                <i className="ri-copyright-line"></i>Copyright {year}, Developed
                by jUDDOKO. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
