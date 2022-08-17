import React from "react";
import { Col } from "reactstrap";
import "../../styles/ServicesList.css";
import servicesData from "../../assets/data/serviceData";

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item, index) => (
        <Col lg="4" md="4" sm="6" item={item} key={index} className="mb-3">
          <div className="service_item">
            <span className="mb-2">
              <i className={item.icon} />
            </span>
            <h6>{item.title}</h6>
            <p className="section_description">{item.desc}</p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default ServicesList;
