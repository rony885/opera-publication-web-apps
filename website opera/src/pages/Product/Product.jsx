import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import ProductArray from "../../../src/DataJS/Products.js";
import categoriesArray from "../../DataJS/categories.js";
import Loader2 from "../../components/Loader2.jsx";

import { useCartContext } from "../../context/CartContext.jsx";
import convertBanglaPercentage from "../../components/banglaConvert/convertBanglaPercentage.jsx";
import AuthorsArray from "../../../src/DataJS/authors.js";
import convertToBanglaNumber from "../../components/banglaConvert/convertToBanglaNumber.jsx";

const Product = () => {
  const {
    cart,
    addToCart,
    removeCart,
    addToWishlist,
    removeWishlist,
    wishlist,
  } = useCartContext();

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
  const [authors, setAuthors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [price, setPrice] = useState(0);
  const [sortOrder, setSortOrder] = useState("");

  const minPrice =
    products.length > 0
      ? Math.min(...products.map((item) => Number(item.price)))
      : 0;

  const maxPrice =
    products.length > 0
      ? Math.max(...products.map((item) => Number(item.price)))
      : 0;

  useEffect(() => {
    setLoading(true);

    const loadData = () => {
      setProducts(ProductArray);
      setCategories(categoriesArray);
      setAuthors(AuthorsArray);

      const highestPrice = Math.max(
        ...ProductArray.map((item) => Number(item.price)),
      );

      setPrice(highestPrice);

      setLoading(false);
    };

    loadData();
  }, []);

  const [selectedCategory, setSelectedCategory] = useState(() => {
    return localStorage.getItem("selectedCategory") || "all";
  });

  const [selectedSubCategory, setSelectedSubCategory] = useState(() => {
    return localStorage.getItem("selectedSubCategory") || "all";
  });

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

  const filteredProducts = products
    .filter((item) => {
      const categoryMatch =
        selectedCategory === "all" ||
        String(item.categoryId) === String(selectedCategory);

      const subCategoryMatch =
        selectedSubCategory === "all" ||
        item.subCategory === selectedSubCategory;

      const authorName =
        AuthorsArray.find((author) => author.id === item.authorId)?.name || "";

      const searchMatch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        authorName.toLowerCase().includes(searchTerm.toLowerCase());

      const priceMatch = item.price <= price;

      return categoryMatch && subCategoryMatch && searchMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortOrder === "price-low") {
        return a.price - b.price;
      }

      if (sortOrder === "price-high") {
        return b.price - a.price;
      }

      if (sortOrder === "name-a-z") {
        return a.title.localeCompare(b.title);
      }

      if (sortOrder === "name-z-a") {
        return b.title.localeCompare(a.title);
      }

      return 0;
    });

  useEffect(() => {
    setSelectedSubCategory("all");
  }, [selectedCategory]);

  const handleClearFilters = () => {
    setSearchTerm("");

    // clear category
    setSelectedCategory("all");
    setSelectedSubCategory("all");

    // clear sorting
    setSortOrder("");

    // reset price slider to maximum price
    setPrice(maxPrice);

    // clear localStorage
    localStorage.removeCart("selectedCategory");
    localStorage.removeCart("selectedSubCategory");
  };

  const getAuthorName = (book) => {
    const author = authors.find((item) => item.id === book.authorId);

    return /^[A-Za-z0-9\s.,'"():&-]+$/.test(book.title)
      ? author?.englishName
      : author?.name;
  };

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
            <div className="col-xl-9 col-lg-7">
              <div className="vs-sort-bar">
                <div className="row gap-4 align-items-center">
                  <div className="col-md-auto flex-grow-1">
                    {/* <p className="woocommerce-result-count">
                      Showing <span>1-9 of 40</span> results
                    </p> */}
                    <p className="woocommerce-result-count">
                      Showing{" "}
                      <span>
                        {filteredProducts.length > 0 ? 1 : 0}-
                        {filteredProducts.length} of {products.length}
                      </span>{" "}
                      results
                    </p>
                  </div>
                  <div className="col-md-auto">
                    <form className="woocommerce-ordering" method="get">
                      <select
                        name="orderby"
                        className="orderby fw-normal fs-6"
                        aria-label="Shop order"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        style={{
                          backgroundColor: "#F8EBE5",
                          color: "#2e4a5b",
                          fontFamily: "Arial, sans-serif",
                        }}
                        // style={{
                        //   backgroundColor: "#FF3333",
                        //   fontFamily: "Arial, sans-serif",
                        //   color: "#fff",
                        // }}
                      >
                        <option value="">Sort By</option>

                        <option value="price-low">
                          Sort by price: low to high
                        </option>

                        <option value="price-high">
                          Sort by price: high to low
                        </option>

                        <option value="name-a-z">
                          Sort by Alphabetically: A - Z
                        </option>

                        <option value="name-z-a">
                          Sort by Alphabetically: Z - A
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
                  // filteredProducts.map((book) => (
                  filteredProducts &&
                  filteredProducts.map((book) => {
                    const isWishlisted = wishlist.some(
                      (item) => item.id === book.id,
                    );

                    const isInCart = cart.some(
                      (item) => item.productId === book.id,
                    );

                    return (
                      <div
                        key={book.id}
                        className="col-xl-3 col-lg-6 col-md-4 col-sm-6"
                      >
                        <div
                          className="product-style1 wow animate__fadeInUp"
                          data-wow-delay={book.delay}
                        >
                          <div className="product-img">
                            <img
                              src={book.img}
                              alt="product"
                              style={{ height: "320px" }}
                            />

                            <div className="product-btns">
                              <Link
                                className="icon-btn wishlist"
                                data-tooltip-id="wishlist-tooltip"
                                data-tooltip-content={
                                  isWishlisted
                                    ? "Already in Wishlist"
                                    : "Add to Wishlist"
                                }
                                onClick={(e) => {
                                  e.preventDefault();

                                  if (isWishlisted) {
                                    removeWishlist(book.id);
                                  } else {
                                    addToWishlist(book);
                                  }
                                }}
                              >
                                <i
                                  className={
                                    isWishlisted
                                      ? "fas fa-heart"
                                      : "far fa-heart"
                                  }
                                  style={{
                                    color: isWishlisted ? "#CC0033" : "",
                                  }}
                                />
                              </Link>
                              <Tooltip
                                id="wishlist-tooltip"
                                place="left"
                                offset={1}
                                className="wishlist-tooltip"
                              />

                              <Link
                                className="icon-btn cart"
                                data-tooltip-id="cart-tooltip"
                                data-tooltip-content={
                                  isInCart ? "Already in Cart" : "Add to Cart"
                                }
                                onClick={(e) => {
                                  e.preventDefault();

                                  if (isInCart) {
                                    const cartItem = cart.find(
                                      (item) => item.productId === book.id,
                                    );

                                    if (cartItem) {
                                      removeCart(cartItem.id);
                                    }
                                  } else {
                                    addToCart(book.id, 1, null, null, book);
                                  }
                                }}
                              >
                                <i
                                  className="fa-solid fa-basket-shopping"
                                  style={{
                                    color: isInCart ? "#CC0033" : "",
                                  }}
                                ></i>
                              </Link>
                              <Tooltip
                                id="cart-tooltip"
                                place="left"
                                offset={1}
                                className="wishlist-tooltip"
                              />
                            </div>

                            <ul className="post-box">
                              {book.badge.map((tag, idx) => (
                                <li
                                  key={idx}
                                  className={tag === "Hot" ? "hot-badge" : ""}
                                >
                                  {tag === "Hot"
                                    ? "হট"
                                    : convertBanglaPercentage(tag)}
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
                                <i className="fas fa-star"></i> ({book.rating})
                              </span>
                              <ul className="price-list">
                                <li>
                                  <del
                                    className="fw-normal"
                                    style={{ fontSize: "18px" }}
                                  >
                                    ৳{convertToBanglaNumber(book.oldPrice)}
                                  </del>
                                </li>
                                <li
                                  className="fw-normal"
                                  style={{ fontSize: "18px" }}
                                >
                                  ৳{convertToBanglaNumber(book.price)}
                                </li>
                              </ul>
                            </div>

                            {/* <span
                            className="stock-badge fw-normal"
                            style={{
                              color: book.inStock ? "#28a745" : "#FF3333",
                              fontWeight: "600",
                              fontSize: "14px",
                              padding: "3px 8px",
                              borderRadius: "4px",
                              background: book.inStock
                                ? "rgba(40,167,69,0.1)"
                                : "rgba(220,53,69,0.1)",
                            }}
                          >
                            {book.inStock ? "In Stock" : "Out of Stock"}
                          </span> */}

                            <h2 className="product-title fs-5 fw-normal mt-2 text-center">
                              <Link
                                to={`/book/book-details/${book.id}`}
                                className=""
                              >
                                {book.title}{" "}
                                {book.subtitle && (
                                  <span
                                    style={{
                                      color: "#2e4a5bb9",
                                      fontSize: "14px",
                                    }}
                                  >
                                    ({book.subtitle})
                                  </span>
                                )}
                              </Link>
                            </h2>
                            <span className="product-author fs-6 text-center">
                              {/* <strong>By:</strong> {item.author} */}
                              {/* {item.author} */}
                              {/* {
                                AuthorsArray.find(
                                  (author) => author.id === book.authorId,
                                )?.name
                              } */}
                              {getAuthorName(book)}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })
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

            <div className="col-xl-3 col-lg-5">
              <aside className="sidebar-area">
                <div className="search-form mb-4">
                  <button
                    className="vs-btn fw-normal py-3 fs-5"
                    type="submit"
                    onClick={handleClearFilters}
                  >
                    {/* Clear All */}
                    সব ক্লিয়ার
                  </button>
                </div>

                <div className="widget widget_search wow animate__fadeInUp pb-2 pt-4">
                  <form
                    className="search-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="search-box">
                      <input
                        type="text"
                        placeholder="এখানে অনুসন্ধান করুন..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                      <i className="fa fa-search search-icon"></i>
                    </div>
                  </form>
                </div>

                <div
                  className="widget wow animate__fadeInUp"
                  data-wow-delay="0.40s"
                >
                  <h3 className="widget_title mb-35 title-shep fs-5 fw-normal">
                    {/* Filter By Price */}
                    প্রাইস অনুযায়ী ফিল্টার করুন
                  </h3>

                  <div className="slider-area">
                    <div className="slider-area-wrapper">
                      {/* Range Slider */}
                      <div className="mb-4">
                        <input
                          type="range"
                          min={minPrice}
                          max={maxPrice}
                          value={price}
                          onChange={(e) => setPrice(Number(e.target.value))}
                          className="form-range"
                          style={{ cursor: "pointer", accentColor: "#FF3333" }}
                        />
                      </div>

                      <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
                        <button
                          className="vs-btn fs-6 fw-normal"
                          type="submit"
                          style={{ padding: "12px 35px" }}
                          onClick={() => setPrice(price)}
                        >
                          ফিল্টার
                        </button>

                        <div className="price-range fw-normal fs-6">
                          প্রাইস: ৳
                          <span className="price fw-normal">
                            {convertToBanglaNumber(minPrice)}
                          </span>
                          &nbsp;- ৳
                          <span className="price fw-normal">
                            {convertToBanglaNumber(price)}
                          </span>
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

                            localStorage.removeCart("selectedCategory");
                            localStorage.removeCart("selectedSubCategory");
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
                            style={{ cursor: "pointer" }}
                            // onClick={() => {
                            //   setSelectedCategory(cat.id);
                            //   setSelectedSubCategory("all");
                            // }}
                            onClick={() => {
                              setSelectedCategory(cat.id);
                              setSelectedSubCategory("all");

                              localStorage.setItem("selectedCategory", cat.id);
                              localStorage.setItem(
                                "selectedSubCategory",
                                "all",
                              );
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
                            style={{ lineHeight: "20px" }}
                            className="text-inherit fs-6 fw-normal"
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
                            style={{ lineHeight: "20px" }}
                            className="text-inherit fs-5"
                            to="/blog-details"
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
                            style={{ lineHeight: "20px" }}
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
  .title-shep:before {
    background-color: #ff3333 !important;
  }
  .title-shep:after {
    background-color: #ff3333 !important;
  }

  .wishlist-tooltip,
  .cart-tooltip {
    padding: 0px -30px !important;
    font-size: 12px !important;
    border-radius: 3px !important;
    line-height: 1 !important;
    z-index: 9999 !important;
  }
`;

export default Product;
