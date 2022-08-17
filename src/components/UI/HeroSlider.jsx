import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Container } from "reactstrap";
import "../../styles/HeroSlider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    isFinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero_slider">
      <div className="slider_item slider_item-01 mt-0">
        <Container>
          <div className="slider_content">
            <h4 className="text-light mb-3">For Rent NGN2,000 Per Day</h4>
            <h1>Reserve Now and 50% Discount</h1>
            <button className="btn reserve_btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider_item slider_item-02 mt-0">
        <Container>
          <div className="slider_content">
            <h4 className="text-light mb-3">For Rent NGN2,000 Per Day</h4>
            <h1>Reserve Now and 50% Discount</h1>
            <button className="btn reserve_btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
      <div className="slider_item slider_item-03 mt-0">
        <Container>
          <div className="slider_content">
            <h4 className="text-light mb-3">For Rent NGN2,000 Per Day</h4>
            <h1>Reserve Now and 50% Discount</h1>
            <button className="btn reserve_btn mt-4">
              <Link to="/cars">Reserve Now</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
