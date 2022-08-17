import React from "react";
import "../../styles/OurMembers.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava1 from "../../assets/all-images/ava-1.jpg";
import ava2 from "../../assets/all-images/ava-2.jpg";
import ava3 from "../../assets/all-images/ava-3.jpg";

const ourMembersData = [
  {
    name: "John Alex",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkendinUrl: "#",
    imgUrl: ava1,
  },
  {
    name: "Mike Bossman",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkendinUrl: "#",
    imgUrl: ava2,
  },
  {
    name: "Rose Abah",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkendinUrl: "#",
    imgUrl: ava3,
  },
  {
    name: "Faith Ojobo",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkendinUrl: "#",
    imgUrl: ava1,
  },
];

const OurMembers = () => {
  return (
    <>
      {ourMembersData.map((item, index) => (
        <Col lg="3" md="3" sm="6" xs="6" key={index} className="mb-4">
          <div className="single_member">
            <div className="single_member-img">
              <img src={item.imgUrl} alt="" className="w-100" />
              <div className="single_member-social">
                <Link to={item.fbUrl}>
                  <i className="ri-facebook-line"></i>
                </Link>
                <Link to={item.twitUrl}>
                  <i className="ri-twitter-line"></i>
                </Link>
                <Link to={item.linkendinUrl}>
                  <i className="ri-linkedin-line"></i>
                </Link>
                <Link to={item.instUrl}>
                  <i className="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{item.name}</h6>
            <p className="member_description text-center">{item.experience}</p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
