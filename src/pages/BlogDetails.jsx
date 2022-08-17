import React, { useEffect } from "react";
import { Container, Col, Row, Form, FormGroup, Input } from "reactstrap";
import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData";
import Helmet from "../components/Helmet/Helmet";
import commentImg from "../assets/all-images/ava-1.jpg";
import { Link } from "react-router-dom";
import "../styles/BlogDetail.css";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);
  return (
    <Helmet title={blog.title}>
      <Container>
        <Row className="mt-5">
          <Col lg="8" md="8">
            <div className="blog_details">
              <img src={blog.imgUrl} alt="" className="w-100" />
              <h2 className="section_title mt-4">{blog.title}</h2>
              <div className="blog_publisher d-flex align-items-center gap-4 mb-4">
                <span className="blog_author">
                  <i className="ri-user-line"></i>
                  {blog.author}
                </span>
                <span className="d-flex align-items-center gap-1 section_description">
                  <i className="ri-calender-line"></i>
                  {blog.date}
                </span>

                <span className="d-flex align-items-center gap-1 section_description">
                  <i className="ri-time-line"></i>
                  {blog.time}
                </span>
              </div>
              <div>
                <p className="section_description">{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="section_description">{blog.description}</p>
              </div>
              <div className="comment_list mt-3">
                <h4 className="mb-3">3 Comments</h4>
                <div className="single_comment d-flex gap-3">
                  <img src={commentImg} alt="" />
                  <div className="comment_content">
                    <h6 className="fw-bold">David Visa</h6>
                    <p className="section_description mb-0">14th July, 2022</p>
                    <p className="section_description">
                      Dolor labore lorem no accusam sit justo sadipscing labore
                      invidunt voluptua, amet duo et gubergren vero gubergren
                      dolor.
                    </p>
                    <span className="reply align-items-center gap-1">
                      <i className="ri-reply-line"></i> Reply
                    </span>
                  </div>
                </div>
                {/* ============= comment form =============== */}
                <div className="leave_comment-form mt-3">
                  <h5>Leave a Comment</h5>
                  <p className="section_description">
                    Do well to leaving a comment on this post
                  </p>
                  <Form>
                    <FormGroup className="d-flex gap-3">
                      <Input type="text" placeholder="Full Name" />
                      <Input type="email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup>
                      <textarea
                        rows="5"
                        placeholder="Comment..."
                        className="w-100 py-2 px-3"
                      ></textarea>
                    </FormGroup>
                    <button className="btn comment_btn mb-3">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
          <Col lg="4" md="4">
            <div className="recent_post mb-4">
              <h5 className="fw-bold">Recent Posts</h5>
            </div>
            {blogData.map((item, index) => (
              <div className="recent_blog-post mb-3" key={index}>
                <div className="recent_blog-item d-flex gap-2">
                  <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                  <h6>
                    <Link to={`/blogs/${item.title}`}>{blog.title}</Link>
                  </h6>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </Helmet>
  );
};

export default BlogDetails;
