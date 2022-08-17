import React from "react";
import { Col } from "reactstrap";
import "../../styles/Bloglist.css";
import { Link } from "react-router-dom";
import blogData from "../../assets/data/blogData";

const Bloglist = () => {
  return (
    <>
      {blogData.map((item, index) => (
        <BlogItem item={item} key={index} />
      ))}
    </>
  );
};

const BlogItem = ({ item }) => {
  const { imgUrl, title, author, date, description, time } = item;
  return (
    <Col lg="4" md="4" sm="12">
      <div className="blog_item">
        <img src={imgUrl} alt="" className="w-100" />
        <div className="blog_info p-2">
          <Link to={`/blogs/${title}`} className="blog_title">
            {title}
          </Link>
          <p className="section">
            {description.length > 100
              ? description.substr(0, 100)
              : description}
          </p>
          <div className="read_more-section">
            <Link to={`/blogs/${title}`} className="read_more">
              Read More
              <span>
                <i className="ri-arrow-drop-right-line"></i>
                <i className="ri-arrow-drop-right-line"></i>
              </span>
            </Link>
          </div>

          <div
            className="blog_time p-1 mt-2 d-flex align-items-center
            justify-content-between"
          >
            <span className="blog_author">
              <i className="ri-user-line"></i>
              {author}
            </span>

            <div className="d-flex align-items-center gap-2">
              <span className="d-flex align-items-center gap-1 section_description">
                <i className="ri-calender-line"></i>
                {date}
              </span>

              <span className="d-flex align-items-center gap-1 section_description">
                <i className="ri-time-line"></i>
                {time}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
export default Bloglist;
