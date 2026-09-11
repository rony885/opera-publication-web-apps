import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import blogArray from "../../../src/DataJS/blog.js";

const BlogDetails = () => {
  const [blogDetails, setBlogDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setBlogDetails(blogArray);
  }, []);

  const findBlogDetails = blogDetails.find(
    (blogItem) => blogItem.id === parseInt(id),
  );

  return (
    <>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/assets/img/bg/breadcumb-bg.png')",
          padding: "50px 0",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">Blog Details</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link to="/">Home</Link>
                </span>
                <span>Blog Details</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="vs-blog-wrapper blog-details space-top space-extra-bottom">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-7">
              <div className="vs-blog blog-single">
                <div
                  className="blog-img wow animate__fadeInUp"
                  data-wow-delay="0.30s"
                >
                  <img src="/assets/img/blog/blog-d-1.jpg" alt="blog Imagee" />
                  <div className="blog-tag">Thriller</div>
                  <div className="blog-meta">
                    <Link to="/blog">
                      <i className="fas fa-calendar-alt"></i>16 March, 2025
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-comments"></i>(13) Comment
                    </Link>
                    <Link to="/blog">
                      <i className="fas fa-eye"></i>(63) View
                    </Link>
                  </div>
                </div>
                <div
                  className="blog-content wow animate__fadeInUp"
                  data-wow-delay="0.50s"
                >
                  <h2 className="blog-title">
                    Lorem ipsum dolor sit amet consect etur adipiscing elit.
                  </h2>
                  <p className="blog-text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos aptent taciti sociosqu.
                  </p>
                  <p className="blog-text mb-30">
                    dolor sit amet consectetur adipiscing elit. Quisque faucibus
                    ex sapien vitae pellentesque sem placerat. In id cursus mi
                    pretium tellus duis convallis. Tempus leo eu aenean sed diam
                    urna tempor. Pulvinar vivamus fringilla lacus nec metus
                    bibendum egestas. Iaculis massa nisl malesuada lacinia.
                  </p>
                  <div className="row mb-3">
                    <div className="col-lg-6">
                      <div className="list-style1">
                        <ul className="list-unstyled">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Focus on
                            Your Riding Posture
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Work on
                            Your Leg Position
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Improve
                            Your Communication With Horse
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>
                            Strengthen Your Core Muscles
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="list-style1">
                        <ul className="list-unstyled">
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Practice
                            Regularly with Link Plan
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Take
                            Riding Lessons with Qualified Instructor
                          </li>
                          <li>
                            <i className="fa-solid fa-circle-check"></i>Make
                            Better Understand Horse Behavior
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="blog-video mb-35 wow animate__fadeInUp"
                    data-wow-delay="0.50s"
                  >
                    <img src="assets/img/blog/blog-d-2.jpg" alt="blog Imagee" />
                    <Link
                      to="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                      className="play-btn popup-video"
                    >
                      <i className="fas fa-play"></i>
                    </Link>
                  </div>
                  <p className="blog-text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu. Ad litora torquent per
                    conubia nostra inceptos himenaeos semper vel class aptent
                    taciti.
                  </p>
                  <blockquote className="vs-quote">
                    <p>
                      "Lorem ipsum dolor sit amet consectetur adipiscing elit.
                      Quisque faucibus ex sapien vitae pellentesque sem
                      placerat. In id cursus mi pretium tellus duis convallis. "
                    </p>
                    <cite>Rodja Heartmann</cite>
                    <span className="quote-icon">
                      <img src="/assets/img/icons/quote-icon.svg" alt="icon" />
                    </span>
                  </blockquote>
                  <p className="blog-text mb-30">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit.
                    Quisque faucibus ex sapien vitae pellentesque sem placerat.
                    In id cursus mi pretium tellus duis convallis. Tempus leo eu
                    aenean sed diam urna tempor. Pulvinar vivamus fringilla
                    lacus nec metus bibendum egestas. Iaculis massa nisl
                    malesuada lacinia integer nunc posuere. Ut hendrerit semper
                    vel class aptent taciti sociosqu.
                  </p>
                  <div
                    className="blog-group-imgs mb-30 wow animate__fadeInUp"
                    data-wow-delay="0.60s"
                  >
                    <div className="row g-5">
                      <div className="col-md-6">
                        <img
                          src="/assets/img/blog/blog-d-3.jpg"
                          alt="blog-details"
                        />
                      </div>
                      <div className="col-md-6">
                        <img
                          src="/assets/img/blog/blog-d-4.jpg"
                          alt="blog-details"
                        />
                      </div>
                    </div>
                  </div>
                  <p className="blog-text">
                    Having specific objectives can accelerate your progress.
                    Whether it's mastering Link new gait or improving your
                    jumping technique, set achievable goals and track your
                    progress. Even the best riders benefit from Link fresh
                    perspective. A qualified instructor can help you identify
                    areas for improvement, refine your techniques, and break bad
                    habits. A great rider understands not only the mechanics of
                    riding but also the psychology of horses. Learn to read your
                    horse’s body language, moods, and reactions to create Link
                    harmonious partnership.
                  </p>
                  <div className="share-links">
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-lg-auto">
                        <div className="tagcloud">
                          <span className="share-links-title">Tags:</span>
                          <Link to="/blog">Books</Link>
                          <Link to="/blog">Thriller</Link>
                          <Link to="/blog">Suspense</Link>
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-auto">
                        <ul className="social-links">
                          <li>
                            <span className="share-links-title">Share:</span>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-facebook-f"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fa-brands fa-x-twitter"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-instagram"></i>
                            </Link>
                          </li>
                          <li>
                            <Link to="#" target="_blank">
                              <i className="fab fa-dribbble"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="blog-author">
                    <div className="media-img">
                      <img
                        src="/assets/img/blog/blog-author.jpg"
                        alt="Blog Author Imagee"
                      />
                    </div>
                    <div className="media-body">
                      <h3 className="author-name h4">
                        <Link to="author-details">Ronald Richards</Link>
                      </h3>
                      <p className="author-degi">CEO, Vecuro</p>
                      <p className="author-text">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Quisque vitae is faucibus ex sapien vitae pellentesque
                        sem placerat. In id cursus mi pretium tellus duis
                        convallis. 
                      </p>
                      <ul className="social-links">
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fa-brands fa-x-twitter"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="#" target="_blank">
                            <i className="fab fa-dribbble"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    className="vs-comments-wrap wow animate__fadeInUp"
                    data-wow-delay="0.70s"
                  >
                    <h2 className="blog-inner-title title-shep">Comment</h2>
                    <ul className="comment-list">
                      <li className="vs-comment-item">
                        <div className="vs-post-comment">
                          <div className="comment-avater">
                            <img
                              src="/assets/img/blog/comment-author-1.jpg"
                              alt="Comment Author"
                            />
                          </div>
                          <div className="comment-content">
                            <span className="commented-on">
                              <i className="fas fa-calendar-alt"></i>July 21,
                              2025
                            </span>
                            <h4 className="name h4">Rodja Heartmann</h4>
                            <p className="text">
                              Lorem lipsum dolor sit amet, adipiscfvdg fgjnving
                              consectetur adipiscing elit dolor sit .consectetur
                              adipiscing elit. dolor sit amet.
                            </p>
                            <div className="reply_and_edit">
                              <Link to="/blog-details" className="replay-btn">
                                Reply
                              </Link>
                            </div>
                          </div>
                        </div>
                        <ul className="children">
                          <li className="vs-comment-item">
                            <div className="vs-post-comment">
                              <div className="comment-avater">
                                <img
                                  src="/assets/img/blog/comment-author-2.jpg"
                                  alt="Comment Author"
                                />
                              </div>
                              <div className="comment-content">
                                <span className="commented-on">
                                  <i className="fas fa-calendar-alt"></i>July
                                  25, 2025
                                </span>
                                <h4 className="name h4">Rivanur R. Rafi</h4>
                                <p className="text">
                                  Lorem lipsum dolor sit amet, adipiscfvdg
                                  fgjnving consectetur adipiscing elit dolor sit
                                  amet. dolor sit amet.
                                </p>
                                <div className="reply_and_edit">
                                  <Link
                                    to="/blog-details"
                                    className="replay-btn"
                                  >
                                    Reply
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="vs-comment-form wow animate__fadeInUp"
                    data-wow-delay="0.80s"
                  >
                    <div id="respond" className="comment-respond mb-0">
                      <div className="form-title">
                        <h3 className="blog-inner-title title-shep">Comment</h3>
                      </div>
                      <div className="form-inner">
                        <div className="row gx-30">
                          <div className="col-md-6 form-group">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Complete Name"
                            />
                          </div>
                          <div className="col-md-6 form-group">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Your Email"
                            />
                          </div>
                          <div className="col-12 form-group">
                            <textarea
                              className="form-control"
                              placeholder="Comment"
                            ></textarea>
                          </div>
                          <div className="col-12">
                            <div className="custom-checkbox notice">
                              <input
                                id="wp-comment-cookies-consent"
                                name="wp-comment-cookies-consent"
                                type="checkbox"
                                defaultValue="yes"
                              />
                              <label for="wp-comment-cookies-consent">
                                Save my name, email, and website in this browser
                                for the next time I comment.
                              </label>
                            </div>
                          </div>
                          <div className="col-12 form-group mb-0">
                            <button className="vs-btn">Submit A Comment</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-5">
              <aside className="sidebar-area">
                <div
                  className="widget widget_search wow animate__fadeInUp"
                  data-wow-delay="0.30s"
                >
                  <h3 className="wp-block-heading widget_title title-shep">
                    Search
                  </h3>
                  <form className="search-form">
                    <input type="text" placeholder="Search Here..." />
                    <button className="vs-btn" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div
                  className="widget wow animate__fadeInUp"
                  data-wow-delay="0.40s"
                >
                  <div className="wp-block-group widget_categories is-layout-constrained wp-block-group-is-layout-constrained">
                    <div className="wp-block-group__inner-container">
                      <h3 className="wp-block-heading widget_title title-shep">
                        Categories
                      </h3>
                      <ul className="wp-block-categories-list wp-block-categories">
                        <li className="cat-item">
                          <Link to="/blog">Romance</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/blog">Thriller</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/blog">Fantasy</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/blog">Since Fiction</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/blog">Since</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/blog">Astronomy</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/blog">Kids</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/blog">Cartoon & Story</Link>
                        </li>
                        <li className="cat-item">
                          <Link to="/blog">Educational</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="widget wow animate__fadeInUp"
                  data-wow-delay="0.50s"
                >
                  <h3 className="widget_title title-shep">Latest News</h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/blog/recent-post-1-1.jpg"
                            alt="Blog Imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <i className="fas fa-calendar-alt"></i> 16 January,
                          2025
                        </div>
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            Lorem ipsum dolor sit amet consectetur.
                          </Link>
                        </h4>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/blog/recent-post-1-2.jpg"
                            alt="Blog Imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <i className="fas fa-calendar-alt"></i> 16 January,
                          2025
                        </div>
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            How to Improve amet Your Riding Skills
                          </Link>
                        </h4>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/blog/recent-post-1-3.jpg"
                            alt="Blog Imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <div className="recent-post-meta">
                          <i className="fas fa-calendar-alt"></i> 16 January,
                          2025
                        </div>
                        <h4 className="post-title">
                          <Link className="text-inherit" to="/blog-details">
                            Lorem ipsum dolor sit amet consectetur.
                          </Link>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
