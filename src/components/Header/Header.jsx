import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/Header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/blogs",
    display: "Blogs",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("menu_active");

  return (
    <>
      <header className="header">
        {/* ============ Top Header ============= */}
        <div className="top_header">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="6">
                <div className="header_top_left d-flex align-items-center gap-3">
                  <span>Need Help?</span>
                  <span className="header_top_help">
                    <i className="ri-phone-fill"></i> +2348134534345
                  </span>
                </div>
              </Col>

              <Col lg="6" md="6" sm="6">
                <div className="header_top_right">
                  <Link to="#" className="d-fex align-items-center gap-1">
                    <i className="ri-login-circle-line"></i>Log In
                  </Link>
                  <Link to="#" className="d-fex align-items-center gap-1">
                    <i className="ri-user-line"></i>Register
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ============ End of Top Header ============= */}

        {/* ============ Middle Header ============= */}
        <div className="header_middle">
          <Container>
            <Row className="align-items-center">
              <Col lg="4" md="3" sm="4">
                <div className="logo">
                  <h1>
                    <Link
                      to="/home"
                      className="d-flex align-items-center gap-2 "
                    >
                      <i className="ri-car-line"></i>
                      <span>
                        Rental car <br /> Service
                      </span>
                    </Link>
                  </h1>
                </div>
              </Col>

              <Col lg="5" md="6" sm="4">
                <div className="navigation_wrapper d-flex align-items-center justify-content-between">
                  <span className="mobile_menu">
                    <i className="ri-menu-line" onClick={toggleMenu}></i>
                  </span>

                  <div
                    className="navigation align-items-center"
                    ref={menuRef}
                    onClick={toggleMenu}
                  >
                    <div className="menu">
                      {navLinks.map((item, index) => (
                        <NavLink
                          to={item.path}
                          key={index}
                          className={(navClass) =>
                            navClass.isActive
                              ? "nav_active nav_item"
                              : "nav_item"
                          }
                        >
                          {item.display}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
              {/* <Col lg="3" md="3" sm="4">
                <div className="header_location d-flex gap-2">
                  <span>
                    <i className="ri-earth-line"></i>
                  </span>
                  <div className="header_location-content">
                    <h6>Nigeria</h6>
                    <p>HomeLand Street, Abuja</p>
                  </div>
                </div>
              </Col>
              <Col lg="3" md="3" sm="4">
                <div className="header_location d-flex gap-2">
                  <span>
                    <i className="ri-time-line"></i>
                  </span>
                  <div className="header_location-content">
                    <h6>Mon. to Sat.</h6>
                    <p>9am - 5pm</p>
                  </div>
                </div>
              </Col> */}
              <Col
                lg="3"
                md="3"
                sm="0"
                className="align-items-center justify-content-end"
              >
                <div>
                  <button className="header_btn">
                    <Link to="/contact">
                      <i className="ri-phone-line"></i> Request a call
                    </Link>
                  </button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ============ end of Middle Header ============= */}

        {/* ============ main navigation ============= */}

        {/* <div className="main_navbar">
          <Container>
            <div className="navigation_wrapper d-flex align-items-center justify-content-between">
              <span className="mobile_menu">
                <i className="ri-menu-line" onClick={toggleMenu}></i>
              </span>

              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                  {navLinks.map((item, index) => (
                    <NavLink
                      to={item.path}
                      key={index}
                      className={(navClass) =>
                        navClass.isActive ? "nav_active nav_item" : "nav_item"
                      }
                    >
                      {item.display}
                    </NavLink>
                  ))}
                </div>
              </div>

              <div className="nav_right">
                <div className="search_box">
                  <input type="text" placeholder="Search" />
                  <span>
                    <i classname="ri-search-line"></i>
                  </span>
                </div>
              </div>
            </div>
          </Container>
        </div> */}
        {/* ============ end of main navigation ============= */}
      </header>
    </>
  );
};

export default Header;
