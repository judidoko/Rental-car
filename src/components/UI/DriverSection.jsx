import React from "react";
import "../../styles/DriverSection.css";
import { Container, Row, Col } from "reactstrap";
import driverImg from "../../assets/all-images/cars-img/toyota-offer-2.png";

const DriverSection = () => {
  return (
    <section className="driver_section">
      <Container>
        <Row className="p-3">
          <Col lg="6" md="6" sm="12" className="driver_img mt-3">
            <img src={driverImg} alt="" className="w-100" />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="driver_section-title">
              Do You Want To Earn With us? Don't Worry We Gat You Covered.
            </h2>

            <button className="btn driver_section-btn mt-3">
              Become Our Driver
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DriverSection;
