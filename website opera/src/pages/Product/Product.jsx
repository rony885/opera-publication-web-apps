import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ProductArray from "../../../src/DataJS/Products.js";
import categoriesArray from "../../DataJS/categories.js";
import Loader2 from "../../components/Loader2.jsx";
import { useCartContext } from "../../context/CartContext.jsx";

const Product = () => {
  const { addToCart, addToWishlist } = useCartContext();
  const [price, setPrice] = useState(25000);
  // const filteredProducts =
  //   selectedCategory === "all"
  //     ? products
  //     : products.filter((item) => item.categoryId === Number(selectedCategory));

  // Scroll Fix for Category & SubCategory
  useEffect(() => {
    const stopScroll = (e) => e.stopPropagation();

    const cat = document.querySelector(".scroll-category");
    const sub = document.querySelector(".scroll-subcategory");

    cat?.addEventListener("wheel", stopScroll);
    sub?.addEventListener("wheel", stopScroll);

    return () => {
      cat?.removeEventListener("wheel", stopScroll);
      sub?.removeEventListener("wheel", stopScroll);
    };
  }, []);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setProducts(ProductArray);
  //   setCategories(categoriesArray);
  // }, []);
  useEffect(() => {
    setLoading(true);

    const loadData = () => {
      setProducts(ProductArray);
      setCategories(categoriesArray);
      setLoading(false);
    };

    loadData();
  }, []);

  // const [selectedCategory, setSelectedCategory] = useState("all");
  // const [selectedSubCategory, setSelectedSubCategory] = useState("all");

  // const activeCategory = categories.find((cat) => cat.id === selectedCategory);

  // const filteredProducts = products.filter((item) => {
  //   const categoryMatch =
  //     selectedCategory === "all" || item.categoryId === selectedCategory;

  //   const subCategoryMatch =
  //     selectedSubCategory === "all" || item.subCategory === selectedSubCategory;

  //   return categoryMatch && subCategoryMatch;
  // });

  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem("selectedCategory") || "all";
  });

  const [selectedSubCategory, setSelectedSubCategory] = useState(() => {
    return localStorage.getItem("selectedSubCategory") || "all";
  });

  // useEffect(() => {
  //   localStorage.setItem("selectedCategory", selectedCategory);
  // }, [selectedCategory]);

  // useEffect(() => {
  //   localStorage.setItem("selectedSubCategory", selectedSubCategory);
  // }, [selectedSubCategory]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.detail?.category) {
        setSelectedCategory(String(e.detail.category));
        setSelectedSubCategory("all");
      }
    };

    window.addEventListener("localStorageChange", handleStorageChange);

    return () => {
      window.removeEventListener("localStorageChange", handleStorageChange);
    };
  }, []);

  useEffect(() => {
    setSelectedCategory(localStorage.getItem("selectedCategory") || "all");

    setSelectedSubCategory(
      localStorage.getItem("selectedSubCategory") || "all",
    );
  }, []);

  const activeCategory = categories.find(
    (cat) => String(cat.id) === String(selectedCategory),
  );

  // const filteredProducts = products.filter((item) => {
  //   const categoryMatch =
  //     selectedCategory === "all" ||
  //     String(item.categoryId) === String(selectedCategory);

  //   const subCategoryMatch =
  //     selectedSubCategory === "all" ||
  //     item.subCategory === selectedSubCategory;

  //   return categoryMatch && subCategoryMatch;
  // });

  const filteredProducts = products.filter((item) => {
    const categoryMatch =
      selectedCategory === "all" ||
      String(item.categoryId) === String(selectedCategory);

    const subCategoryMatch =
      selectedSubCategory === "all" || item.subCategory === selectedSubCategory;

    return categoryMatch && subCategoryMatch;
  });

  useEffect(() => {
    setSelectedSubCategory("all");
  }, [selectedCategory]);

  return (
    <Wrapper>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: `url("/assets/img/bg/breadcumb-bg.png")`,
          padding: "30px 0",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title fs-4 fw-normal">বই</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>
                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  বই{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="books-layout1 space-top space-extra-bottom">
        <div className="container">
          <div className="row g-4">
            <div className="col-xl-8 col-lg-7">
              <div className="vs-sort-bar">
                <div className="row gap-4 align-items-center">
                  <div className="col-md-auto flex-grow-1">
                    <p className="woocommerce-result-count">
                      Showing <span>1-9 of 40</span> results
                    </p>
                  </div>
                  <div className="col-md-auto">
                    <form className="woocommerce-ordering" method="get">
                      <select
                        name="orderby"
                        className="orderby fw-normal"
                        aria-label="Shop order"
                        // style={{ backgroundColor: "#F8EBE5", color: "#2e4a5b" }}
                        style={{ backgroundColor: "#FF3333" }}
                      >
                        <option
                          defaultValue="recent_product"
                          // selected="selected"
                          className=" fw-normal"
                        >
                          Short By Latest
                        </option>
                        <option
                          defaultValue="popularity"
                          className=" fw-normal"
                        >
                          Sort by popularity
                        </option>
                        <option defaultValue="rating" className=" fw-normal">
                          Sort by average rating
                        </option>
                        <option defaultValue="date" className=" fw-normal">
                          Sort by latest
                        </option>
                        <option defaultValue="price" className=" fw-normal">
                          Sort by price: low to high
                        </option>
                        <option
                          defaultValue="price-desc"
                          className=" fw-normal"
                        >
                          Sort by price: high to low
                        </option>
                      </select>
                    </form>
                  </div>
                </div>
              </div>

              <div className="row g-4">
                {loading ? (
                  <div
                    style={{ height: "500px" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <Loader2 />
                  </div>
                ) : filteredProducts.length === 0 ? (
                  <div className="col-12 text-center">
                    <h4 style={{ color: "#d16655", marginTop: "20px" }}>
                      No Product Found 😔
                    </h4>
                  </div>
                ) : (
                  filteredProducts.map((item) => (
                    <div
                      key={item.id}
                      className="col-xl-4 col-lg-6 col-md-4 col-sm-6"
                    >
                      <div
                        className="product-style1 wow animate__fadeInUp"
                        data-wow-delay={item.delay}
                      >
                        <div className="product-img">
                          <img
                            src={item.img}
                            alt="product"
                            style={{ height: "400px" }}
                          />

                          <div className="product-btns">
                            <Link
                              to="/wishlist"
                              className="icon-btn wishlist"
                              onClick={() => addToWishlist(item)}
                            >
                              <i className="far fa-heart"></i>
                            </Link>
                            <Link
                              to="/cart"
                              className="icon-btn cart"
                              onClick={() =>
                                addToCart(item.id, 1, null, null, item)
                              }
                            >
                              <i className="fa-solid fa-basket-shopping"></i>
                            </Link>
                          </div>

                          {/* <ul className="post-box">
                            {item.badge.map((tag, idx) => (
                              <li key={idx}>{tag}</li>
                            ))}
                          </ul> */}
                          <ul className="post-box">
                            {item.badge.map((tag, idx) => (
                              <li
                                key={idx}
                                className={tag === "Hot" ? "hot-badge" : ""}
                              >
                                {tag}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="product-content">
                          <div className="product-rating">
                            <span
                              className="star fw-normal"
                              style={{ fontSize: "16px" }}
                            >
                              <i className="fas fa-star"></i> ({item.rating})
                            </span>
                            <ul className="price-list">
                              <li>
                                <del
                                  className="fw-normal"
                                  style={{ fontSize: "18px" }}
                                >
                                  ৳{item.oldPrice}
                                </del>
                              </li>
                              <li
                                className="fw-normal"
                                style={{ fontSize: "18px" }}
                              >
                                ৳{item.price}
                              </li>
                            </ul>
                          </div>

                          {/* <span
                            className="stock-badge fw-normal"
                            style={{
                              color: item.inStock ? "#28a745" : "#FF3333",
                              fontWeight: "600",
                              fontSize: "14px",
                              padding: "3px 8px",
                              borderRadius: "4px",
                              background: item.inStock
                                ? "rgba(40,167,69,0.1)"
                                : "rgba(220,53,69,0.1)",
                            }}
                          >
                            {item.inStock ? "In Stock" : "Out of Stock"}
                          </span> */}

                          <h2 className="product-title fs-5 fw-normal mt-2">
                            <Link to={`/shop-details/${item.id}`} className="">
                              {item.title}{" "}
                              {item.subtitle && (
                                <span
                                  style={{
                                    color: "#2e4a5bb9",
                                    fontSize: "14px",
                                  }}
                                >
                                  ({item.subtitle})
                                </span>
                              )}
                            </Link>
                          </h2>
                          <span className="product-author fs-6">
                            <strong>By:</strong> {item.author}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div
                className="row justify-content-center wow animate__fadeInUp"
                data-wow-delay="0.95s"
              >
                <div className="col-auto">
                  <div className="vs-pagination mt-55">
                    <Link to="#" className="pagi-btn">
                      <i className="fa-solid fa-arrow-left"></i>
                    </Link>
                    <ul>
                      <li>
                        <Link to="#" className="active fw-normal">
                          1
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className=" fw-normal">
                          2
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className=" fw-normal">
                          3
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className=" fw-normal">
                          ...
                        </Link>
                      </li>
                      <li>
                        <Link to="#" className=" fw-normal">
                          16
                        </Link>
                      </li>
                    </ul>
                    <Link to="#" className="pagi-btn active">
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-5">
              <aside className="sidebar-area">
                <div className="search-form mb-4">
                  <button
                    className="vs-btn fw-normal py-3 fs-5"
                    type="submit"
                    // onClick={() => {
                    //   setSelectedCategory("all");
                    //   setSelectedSubCategory("all");
                    // }}
                    onClick={() => {
                      setSelectedCategory("all");
                      setSelectedSubCategory("all");

                      localStorage.removeItem("selectedCategory");
                      localStorage.removeItem("selectedSubCategory");
                    }}
                  >
                    {/* Clear All */}
                    সব ক্লিয়ার
                  </button>
                </div>

                <div className="widget widget_search wow animate__fadeInUp pb-2 pt-4">
                  <form className="search-form">
                    <div className="search-box">
                      <input
                        type="text"
                        placeholder="এখানে অনুসন্ধান করুন..."
                      />
                      <i className="fa fa-search search-icon"></i>
                    </div>
                  </form>
                </div>

                {/* <div
                  className="widget wow animate__fadeInUp"
                  data-wow-delay="0.40s"
                >
                  <h3 className="widget_title mb-35 title-shep fs-5 fw-normal">
                    Filter By Price
                  </h3>
                  <div className="slider-area">
                    <div className="slider-area-wrapper">
                      <div id="skipstep" className="slider mb-20"></div>
                      <div className="range-btn">
                        <button
                          className="vs-btn fs-6 fw-normal"
                          type="submit"
                          style={{ padding: "12px 35px" }}
                        >
                          Filter
                        </button>
                        <div className="price-range fw-normal">
                          Price: ৳
                          <span
                            className="price fw-normal"
                            id="skip-value-lower"
                          ></span>
                          -৳
                          <span
                            className="price fw-normal"
                            id="skip-value-upper"
                          ></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

                <div
                  className="widget wow animate__fadeInUp d-none"
                  data-wow-delay="0.40s"
                >
                  <h3 className="widget_title mb-35 title-shep fs-5 fw-normal">
                    Filter By Price
                  </h3>

                  <div className="slider-area">
                    <div className="slider-area-wrapper">
                      {/* Range Slider */}
                      <div className="mb-4">
                        <input
                          type="range"
                          min="500"
                          max="50000"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
                          className="form-range"
                          style={{ cursor: "pointer", accentColor: "#FF3333" }}
                        />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
                        <button
                          className="vs-btn fs-6 fw-normal"
                          type="submit"
                          style={{ padding: "12px 35px" }}
                        >
                          Filter
                        </button>

                        <div className="price-range fw-normal fs-6">
                          Price: ৳<span className="price fw-normal">500</span>
                          &nbsp;- ৳
                          <span className="price fw-normal">{price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="widget wow animate__fadeInUp"
                  data-wow-delay="0.50s"
                >
                  <div className="wp-block-group widget_categories is-layout-constrained wp-block-group-is-layout-constrained">
                    <div className="wp-block-group__inner-container">
                      <h3 className="wp-block-heading widget_title title-shep fs-5 fw-normal">
                        ক্যাটাগরি
                      </h3>

                      <ul className="wp-block-categories-list scroll-category">
                        <li
                          className={`cat-item ${selectedCategory === "all" ? "active" : ""}`}
                          onClick={() => {
                            setSelectedCategory("all");
                            setSelectedSubCategory("all");
                          }}
                        >
                          <Link to="#" className="fs-5">
                            {/* All Categories */}
                            সব ক্যাটাগরি
                          </Link>
                        </li>

                        {categories.map((cat) => (
                          <li
                            key={cat.id}
                            // className={`cat-item ${
                            //   selectedCategory === cat.id ? "active" : ""
                            // }`}
                            className={`cat-item  ${
                              String(selectedCategory) === String(cat.id)
                                ? "active"
                                : ""
                            }`}
                            // onClick={() => {
                            //   setSelectedCategory(cat.id);
                            //   setSelectedSubCategory("all");
                            // }}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setSelectedCategory(cat.id);
                              setSelectedSubCategory("all");
                            }}
                          >
                            <Link to="#" className=" fs-5">
                              {cat.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="widget wow animate__fadeInUp d-none"
                  data-wow-delay="0.50s"
                >
                  <div className="wp-block-group widget_categories is-layout-constrained wp-block-group-is-layout-constrained">
                    <div className="wp-block-group__inner-container">
                      <h3 className="wp-block-heading widget_title title-shep fs-5 fw-normal">
                        সাব ক্যাটাগরি
                      </h3>

                      <ul className="wp-block-categories-list scroll-subcategory">
                        <li
                          className={`cat-item ${selectedSubCategory === "all" ? "active" : ""}`}
                          onClick={() => setSelectedSubCategory("all")}
                        >
                          <Link className="fw-normal" to="#">
                            All Sub Categories
                          </Link>
                        </li>

                        {activeCategory?.subCategories?.map((sub, index) => (
                          <li
                            key={index}
                            className={`cat-item  ${
                              selectedSubCategory === sub ? "active" : ""
                            }`}
                            onClick={() => setSelectedSubCategory(sub)}
                            style={{ cursor: "pointer" }}
                          >
                            <Link to="#">{sub}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  className="widget product-sidebar wow animate__fadeInUp"
                  data-wow-delay="0.60s"
                >
                  <h3 className="widget_title title-shep fs-5 fw-normal">
                    {/* top Books This Week */}
                    সাপ্তাহিক জনপ্রিয় বইসমূহ
                  </h3>
                  <div className="recent-post-wrap">
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/product/product-sidebar-1-1.jpg"
                            alt="Blog imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link
                            className="text-inherit fs-5 fw-normal"
                            to="/blog-details"
                          >
                            Rat Phnory Mttke Srial Tofairle
                          </Link>
                        </h4>
                        <span className="product-author fw-normal">
                          <strong>By:</strong> Fahim Al Bashar
                        </span>
                        <ul className="price-list">
                          <li>
                            <del className="fw-normal">৳39.99</del>
                          </li>
                          <li className="fw-normal">৳30.00</li>
                        </ul>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/product/product-sidebar-1-2.jpg"
                            alt="Blog imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title fw-normal">
                          <Link
                            className="text-inherit fs-5"
                            to="blog-det/ails"
                          >
                            Amazona Book Cover
                          </Link>
                        </h4>{" "}
                        <span className="product-author fw-normal">
                          <strong>By:</strong> Fahim Al Bashar
                        </span>
                        <ul className="price-list">
                          <li>
                            <del className="fw-normal">৳39.99</del>
                          </li>
                          <li className="fw-normal">৳30.00</li>
                        </ul>
                      </div>
                    </div>
                    <div className="recent-post">
                      <div className="media-img">
                        <Link to="/blog-details">
                          <img
                            src="/assets/img/product/product-sidebar-1-3.jpg"
                            alt="Blog imagee"
                          />
                        </Link>
                      </div>
                      <div className="media-body">
                        <h4 className="post-title">
                          <Link
                            className="text-inherit fs-5 fw-normal"
                            to="blog-det/ails"
                          >
                            Quantum Entanglement
                          </Link>
                        </h4>
                        <span className="product-author fw-normal">
                          <strong>By:</strong> Fahim Al Bashar
                        </span>

                        <ul className="price-list">
                          <li>
                            <del className="fw-normal">৳39.99</del>
                          </li>
                          <li className="fw-normal">৳30.00</li>
                        </ul>
                      </div>
                    </div>
                    <Link
                      className="vs-btn wow animate__flipInX fw-normal py-2 fs-5"
                      data-wow-delay="0.70s"
                      to="#"
                    >
                      {/* View More */}
                      আরও দেখুন
                    </Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .cat-item.active a {
    color: #fff;
    /* background: #d16655; */
    background: #ff3333;

    border-radius: 50px;
  }

  .scroll-category,
  .scroll-subcategory {
    max-height: 400px; /* control height */
    overflow-y: auto; /* enable vertical scroll */
    padding-right: 5px;
    overscroll-behavior: contain;
  }
  /* Optional: scrollbar width */
  .scroll-category::-webkit-scrollbar,
  .scroll-subcategory::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  .scroll-category::-webkit-scrollbar-track,
  .scroll-subcategory::-webkit-scrollbar-track {
    background: #f1f1f1 !important;
    border-radius: 10px !important;
  }

  /* Thumb */
  .scroll-category::-webkit-scrollbar-thumb,
  .scroll-subcategory::-webkit-scrollbar-thumb {
    background: #ff3333 !important;
    border-radius: 10px !important;
  }

  /* Hover */
  .scroll-category::-webkit-scrollbar-thumb:hover,
  .scroll-subcategory::-webkit-scrollbar-thumb:hover {
    background: #ff3333 !important;
  }
  .search-box {
    position: relative;
  }

  .search-box input {
    width: 100%;
    padding: 12px 40px 12px 15px;
  }

  .search-icon {
    position: absolute;
    right: 12px;
    top: 35%;
    transform: translateY(-35%);
    color: #ff3333;
    cursor: pointer;
  }
  .product-title a:hover {
    color: #ff3333 !important;
  }
  .price-list li {
    color: #ff3333 !important;
  }
  .product-rating .star i {
    color: #ff3333 !important;
  }
  .post-box li.hot-badge {
    background-color: #ff3333 !important;
  }
  .product-style1 .product-btns .icon-btn:hover {
    color: var(--white-color);
    background-color: #ff3333 !important;
  }
  .product-style1 .product-btns .icon-btn {
    color: #ff3333 !important;
  }
  .product-style1 .product-btns .icon-btn:hover {
    color: #ffffff !important;
  }

  /* price ranges  */
  .form-range::-webkit-slider-thumb {
    background: #ff3333 !important;
  }

  .form-range::-moz-range-thumb {
    background: #ff3333 !important;
  }

  .form-range::-webkit-slider-runnable-track {
    background-color: #ff3333;
  }

  .form-range::-moz-range-track {
    background-color: #ff3333;
  }

  .vs-pagination span.active,
  .vs-pagination span:hover,
  .vs-pagination a.active,
  .vs-pagination a:hover {
    background-color: #ff3333 !important;
  }

  .vs-pagination span,
  .vs-pagination a {
    border: 1px solid #ff3333 !important;
    /* font-family: 'Courier New', Courier, monospace */
  }
`;

export default Product;
