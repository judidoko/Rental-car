import React from "react";

import { Container, Col, Row } from "reactstrap";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import FindCarForm from "../components/UI/FindCarForm";
import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import DriverSection from "../components/UI/DriverSection";
import Testimonial from "../components/UI/Testimonial";
import Bloglist from "../components/UI/Bloglist";

const Home = () => {
  return (
    <Helmet title="Home">
      {/* ============ Hero Section ========== */}
      <section className="p-0 hero_slider-section">
        <HeroSlider />

        <div className="hero_form">
          <Container>
            <Row className="form_row">
              <Col lg="4" md="4">
                <div className="find_cars-left">
                  <h4>Find Your Best Car Here</h4>
                </div>
              </Col>
              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      {/* ============ End of Hero Section ========== */}

      {/* ============ About Section ========== */}

      <AboutSection />

      {/* ============ End of About Section ========== */}

      {/* ============ Services Section ========== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-3 text-center">
              <h6 className="section_subtitle">See Our</h6>
              <h2 className="section_title">Popular Services</h2>
            </Col>
            <ServicesList />
          </Row>
        </Container>
      </section>
      {/* ============ End of Services Section ========== */}

      {/* ============ Car offer Section ========== */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section_subtitle">Come With</h6>
              <h2 className="section_title">Hot Offers</h2>
            </Col>
            {carData.slice(0, 6).map((item, index) => (
              <CarItem item={item} key={index} />
            ))}
          </Row>
        </Container>
      </section>
      {/* ============ Car offer Section ========== */}

      {/* ============ Driver Section ========== */}

      <DriverSection />

      {/* ============ End of Driver Section ========== */}

      {/* ============ Testimonial Section ========== */}

      <section className="mb-4 mt-3">
        <Container>
          <Row className="p-4">
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section_subtitle">
                Our Client Says About Our Services
              </h6>
              <h2 className="section_title">Testimonials</h2>
            </Col>
            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* ============ End of Testimonial Section ========== */}

      {/* ============ Blog Section ========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section_subtitle">Explore Our Blogs</h6>
              <h2 className="section_title">Latest Blogs</h2>
            </Col>
            <Bloglist />
          </Row>
        </Container>
      </section>

      {/* ============ End of Blog Section ========== */}
    </Helmet>
  );
};

export default Home;
