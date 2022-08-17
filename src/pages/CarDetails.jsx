import React, { useEffect } from "react";
import CarData from "../assets/data/carData";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import { useParams } from "react-router-dom";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const CarDetails = () => {
  const { slug } = useParams();
  const singleCarItem = CarData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section className="mt-4">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>
            <Col lg="6" md="6">
              <div className="car_info">
                <h2 className="section_title">{singleCarItem.carName}</h2>
                <div className=" d-flex align-item-center gap-2 mb-3 mt-3">
                  <h6 className="rent_price fw-bold">
                    ${singleCarItem.price}.00 / Day
                  </h6>
                  <span className="d-flex align-items-center gap-1">
                    <span style={{ color: "#f9a826" }}>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                    </span>
                    ({singleCarItem.rating} ratings)
                  </span>
                </div>
                <p className="section_description">
                  {singleCarItem.description}
                </p>

                <div
                  className="d-flex align-itms-center mt-3"
                  style={{ columnGap: "2rem", fontSize: "0.9rem" }}
                >
                  <span className="d-flex align-items-center gap-1 section_description">
                    <i
                      className="ri-roadster-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.model}
                  </span>
                  <span className="d-flex align-items-center gap-1 section_description">
                    <i
                      className="ri-settings-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.automatic}
                  </span>
                  <span className="d-flex align-items-center gap-1 section_description">
                    <i
                      className="ri-timer-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className="d-flex align-itms-center mt-3"
                  style={{ columnGap: "1rem", fontSize: "0.9rem" }}
                >
                  <span className="d-flex align-items-center gap-1 section_description">
                    <i
                      className="ri-map-pin-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.gps}
                  </span>
                  <span className="d-flex align-items-center gap-1 section_description">
                    <i
                      className="ri-wheelchair-line"
                      style={{ color: "#f9a826" }}
                    ></i>
                    {singleCarItem.seatType}
                  </span>
                  <span className="d-flex align-items-center gap-1 section_description">
                    <i
                      className="ri-building-2-line"
                      style={{ color: "#f9a826" }}
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
              </div>
            </Col>
            <Col lg="7" md="6" className="mt-4">
              <div className="booking-info mt-3">
                <h5 className="mb-3 fw-bold">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>
            <Col lg="5" md="6" className="mt-4">
              <div className="payment-info mt-3">
                <h5 className="mb-3 fw-bold">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
