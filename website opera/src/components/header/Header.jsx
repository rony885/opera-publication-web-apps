import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import categoriesArray from "../../DataJS/categories.js";
import { useCartContext } from "../../context/CartContext.jsx";
import convertToBanglaNumber from "../banglaConvert/convertToBanglaNumber.jsx";

const Header = ({ toggleMenu, closeMenu }) => {
  const {
    cart,
    total_item,
    total_price,
    removeCart,
    setIncrement,
    setDecrement,
    wishlist,
  } = useCartContext();

  // const cartListRef = useRef(null);
  const cartRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  useEffect(() => {
    setCategories(categoriesArray);
  }, []);

  const toggleCategory = () => {
    setIsCategoryOpen((prev) => !prev);
  };

  useEffect(() => {
    const cart = cartRef.current;

    if (!cart) return;

    const stopScroll = (e) => {
      e.stopPropagation();
    };

    cart.addEventListener("wheel", stopScroll, { passive: false });

    return () => {
      cart.removeEventListener("wheel", stopScroll);
    };
  }, []);

  return (
    <Wrapper>
      <header className="vs-header header-layout1 style2">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-md-between justify-content-center align-items-center">
              <div className="col-auto">
                <div className="header-links d-md-inline d-none">
                  <ul>
                    <li>
                      <i className="fa-solid fa-truck-fast"></i>দ্রুততম ডেলিভারি
                      সেবা
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-right">
                  <div className="header-social">
                    <Link
                      to="https://www.facebook.com/operapublication"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                      to="https://x.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                    <Link
                      to="https://www.instagram.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link
                      to="https://www.youtube.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>

                  {/* <div className="user-login">
                    <Link to="#">
                      <i className="fa-solid fa-user"></i>
                    </Link>
                  </div> */}

                  <div className="user-login">
                    <button
                      type="button"
                      className="user-login-btn"
                      onClick={() => setIsUserMenuOpen((prev) => !prev)}
                      aria-label="User menu"
                    >
                      <i className="fa-solid fa-user"></i>
                    </button>

                    <div
                      className={`user-dropdown ${
                        isUserMenuOpen ? "user-dropdown-active" : ""
                      }`}
                    >
                      <Link
                        to="/account"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <i className="fa-solid fa-user-circle"></i>
                        <span>Account Info</span>
                      </Link>

                      <Link
                        to="/profile"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <i className="fa-solid fa-id-card"></i>
                        <span>Profile</span>
                      </Link>

                      <Link
                        to="/orders"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <i className="fa-solid fa-box"></i>
                        <span>Order</span>
                      </Link>

                      <Link
                        to="/settings"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <i className="fa-solid fa-gear"></i>
                        <span>Settings</span>
                      </Link>

                      <Link
                        to="/registration"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <i className="fa-solid fa-gear"></i>
                        <span>Registration</span>
                      </Link>
                      <Link
                        to="/accounts"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <i className="fa-solid fa-gear"></i>
                        <span>Accounts</span>
                      </Link>

                      <button
                        type="button"
                        className="user-dropdown-logout"
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          // logout function here
                        }}
                      >
                        <i className="fa-solid fa-right-from-bracket"></i>
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <div className="row justify-content-sm-between justify-content-center align-items-center gx-sm-0">
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="/">
                    <img
                      src="/assets/img/Opera logo 195 x 60.png"
                      alt="Opera"
                      className="logo"
                      style={{ height: "70px" }}
                    />
                  </Link>
                </div>
              </div>

              <div className="col-auto">
                <div className="header-inner">
                  <form className="header-search">
                    <button
                      className="searchBoxTggler"
                      aria-label="search-button"
                    >
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                    <input
                      type="text"
                      placeholder="এখানে অনুসন্ধান করুন....."
                    />
                  </form>
                  <div className="header-buttons">
                    <Link to="/wishlist" className="vs-icon wishlist">
                      <i className="fal fa-heart"></i>
                      <span className="badge">{wishlist.length}</span>
                    </Link>

                    <div className="header-cart">
                      <Link to="/cart" className="vs-icon has-badge">
                        <i className="fa-solid fa-basket-shopping"></i>
                        {/* <span className="badge">0</span> */}
                        <span className="badge">{total_item}</span>
                      </Link>
                      <div
                        className="woocommerce widget_shopping_cart"
                        style={{
                          height: "620px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          className="widget_shopping_cart_content cart-scroll"
                          ref={cartRef}
                          style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          <ul
                            className="cart_list"
                            style={{
                              flex: 1,
                              overflowY: "auto",
                              maxHeight: "500px",
                              paddingRight: "5px",
                              scrollBehavior: "smooth",
                              WebkitOverflowScrolling: "touch",
                            }}
                          >
                            {cart.length > 0 ? (
                              cart.map((item) => (
                                <li className="mini_cart_item" key={item.id}>
                                  {/* REMOVE BUTTON */}
                                  <button
                                    className="remove border-0 bg-transparent"
                                    onClick={() => removeCart(item.id)}
                                  >
                                    <i className="far fa-times text-danger"></i>
                                  </button>

                                  {/* PRODUCT IMAGE */}
                                  <Link
                                    to={`/book/book-details/${item.id}`}
                                    className="img"
                                  >
                                    <img src={item.image} alt={item.name} />
                                  </Link>

                                  {/* PRODUCT TITLE */}
                                  <Link
                                    to={`/book/book-details/${item.id}`}
                                    className="product-title fw-normal"
                                  >
                                    {item.name}
                                  </Link>

                                  {/* PRODUCT PRICE */}
                                  {/* <span className="amount fw-normal">
                                    ৳{convertToBanglaNumber(item.sPrice || 0)}
                                  </span> */}
                                  <span className="amount fw-normal">
                                    ৳
                                    {convertToBanglaNumber(
                                      Number(item.sPrice) || 0,
                                    )}
                                  </span>

                                  {/* QUANTITY */}
                                  <div className="quantity">
                                    {/* DECREMENT */}
                                    <button
                                      className="quantity-minus qut-btn"
                                      onClick={() => setDecrement(item.id)}
                                    >
                                      <i className="far fa-minus"></i>
                                    </button>

                                    {/* INPUT */}
                                    <input
                                      type="text"
                                      className="qty-input fw-normal"
                                      value={convertToBanglaNumber(item.amount)}
                                      readOnly
                                    />

                                    {/* INCREMENT */}
                                    <button
                                      className="quantity-plus qut-btn"
                                      onClick={() => setIncrement(item.id)}
                                    >
                                      <i className="far fa-plus"></i>
                                    </button>
                                  </div>

                                  {/* SUBTOTAL */}
                                  <div className="subtotal">
                                    <span className="fw-normal fs-6">
                                      Subtotal:
                                    </span>
                                    &nbsp;
                                    <span className="amount fw-normal fs-6">
                                      ৳
                                      {convertToBanglaNumber(
                                        (Number(item.sPrice) || 0) *
                                          (Number(item.amount) || 0),
                                      )}
                                    </span>
                                  </div>
                                </li>
                              ))
                            ) : (
                              <li className="text-center py-3 fs-2 text-danger">
                                Cart is empty
                              </li>
                            )}
                          </ul>
                          <p
                            className="total"
                            style={{ fontFamily: "sans-serif" }}
                          >
                            <strong>Subtotal:</strong>
                            <span className="amount fw-normal fs-6">
                              {/* ৳২৫৯.০০ */}৳
                              {convertToBanglaNumber(Number(total_price) || 0)}
                            </span>
                          </p>
                          <p className="buttons d-flex gap-1">
                            <Link to="/cart" className="vs-btn fw-normal py-2">
                              View cart
                            </Link>
                            <Link
                              to="/checkout"
                              className="vs-btn checkout fw-normal py-2"
                            >
                              Checkout
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sticky-wrapper header-bottom">
          <div className="sticky-active">
            <div className="container">
              <div className="menu-top">
                <div className="row justify-content-between align-items-center gx-sm-0">
                  <div className="col-xl-auto">
                    <div className="menu-inner">
                      <div className="header-category">
                        <button
                          className="category-toggler"
                          onClick={toggleCategory}
                        >
                          <i className="fa-solid fa-bars-sort"></i>{" "}
                          <span className="fs-5">ক্যাটাগরি</span>
                        </button>
                        {/* <div className="vs-box-nav"> */}
                        <div
                          className={`vs-box-nav ${isCategoryOpen ? "active" : ""}`}
                          style={{
                            display: isCategoryOpen ? "block" : "none",
                          }}
                        >
                          <ul>
                            {categories &&
                              categories.map((cat) => {
                                return (
                                  <li key={cat.id}>
                                    <Link
                                      to="/book"
                                      style={{
                                        fontSize: "20px",
                                        fontWeight: "500",
                                      }}
                                      onClick={() => {
                                        localStorage.setItem(
                                          "selectedCategory",
                                          String(cat.id),
                                        );
                                        localStorage.setItem(
                                          "selectedSubCategory",
                                          "all",
                                        );

                                        window.dispatchEvent(
                                          new CustomEvent(
                                            "localStorageChange",
                                            {
                                              detail: {
                                                category: String(cat.id),
                                              },
                                            },
                                          ),
                                        );
                                        setIsCategoryOpen(false);
                                      }}
                                    >
                                      <img
                                        src="/assets/img/icons/categori-i-2.svg"
                                        alt="icon"
                                        style={{ height: "20px" }}
                                      />
                                      {cat.name}
                                    </Link>
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      </div>
                      <div className="header-logo">
                        <Link to="/">
                          <img
                            // src="/assets/img/dark-logo.svg"
                            // src="/assets/img/Opera Publication Logo11.png"
                            src="/assets/img/Opera logo 195 x 60.png"
                            alt="Opera"
                            className="logo"
                            // style={{ width: "195px", height: "60px" }}
                            // style={{ width: "120px", height: "70px" }}
                            style={{ height: "80px" }}
                          />
                        </Link>
                      </div>
                      <div className="menu-area">
                        <nav className="main-menu menu-style1 d-none d-lg-block">
                          <ul>
                            <li className="menu-item-has-children">
                              <NavLink
                                to="/"
                                className={({ isActive }) =>
                                  isActive ? "active" : ""
                                }
                              >
                                হোম
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/book"
                                className={({ isActive }) =>
                                  isActive ? "active" : ""
                                }
                              >
                                বই
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/authors"
                                className={({ isActive }) =>
                                  isActive ? "active" : ""
                                }
                              >
                                লেখক
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/blog"
                                className={({ isActive }) =>
                                  isActive ? "active" : ""
                                }
                              >
                                ব্লগ
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/opera"
                                className={({ isActive }) =>
                                  isActive ? "active" : ""
                                }
                              >
                                অপেরা
                              </NavLink>
                            </li>
                            <li>
                              <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                  isActive ? "active" : ""
                                }
                              >
                                যোগাযোগ
                              </NavLink>
                            </li>
                          </ul>
                        </nav>
                        <button
                          className="vs-menu-toggle d-inline-block d-lg-none"
                          onClick={toggleMenu}
                        >
                          <i className="fal fa-bars"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="col-auto d-xl-block d-none">
                    <div className="header-info">
                      <div className="header-info_icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="media-body">
                        <span className="header-info_label fw-normal fs-6 text-white">
                          যোগাযোগ করুন ২৪/৭
                        </span>
                        <div className="header-info_link fw-normal fs-6">
                          <Link
                            style={{ fontSize: "15px" }}
                            to="tel:01739392329"
                          >
                            01739392329
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .main-menu ul li a.active {
    color: #cccccc !important;
  }
  .header-layout1 .sticky-active.active .main-menu > ul > li > a.active {
    /* color: #cccccc !important; */
    color: #000 !important;
  }

  /* Bottom border color (active + hover) */
  .header-layout1
    .sticky-active.active
    .menu-style1
    > ul
    > li
    > a.active::before,
  .header-layout1
    .sticky-active.active
    .menu-style3
    > ul
    > li
    > a.active::before {
    background-color: #000 !important;
  }

  .dropdown-menu {
    margin: -10px !important;
  }

  /* Active link bottom border */
  .menu-style1 > ul > li > a.active::before,
  .menu-style3 > ul > li > a.active::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 4px;
    background-color: #cccccc;
    bottom: 0;
    left: 0;
    opacity: 1;
    visibility: visible;
    transition: all 0.3s ease-in-out;
  }

  /* Sticky Default state */
  .menu-style1 > ul > li > a::before,
  .menu-style3 > ul > li > a::before {
    position: absolute;
    content: "";
    width: 0%;
    height: 4px;
    background-color: #cccccc;
    bottom: 0;
    left: 0;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
  }

  /* Optional hover effect */
  .menu-style1 > ul > li > a:hover::before,
  .menu-style3 > ul > li > a:hover::before {
    width: 100%;
    opacity: 1;
    visibility: visible;
  }

  /* Sticky header-info color change */
  .header-layout1 .sticky-active.active .header-info,
  .header-layout1 .sticky-active.active .header-info_label,
  .header-layout1 .sticky-active.active .header-info_link a {
    color: #ff3333 !important;
  }

  /* Optional: icon color */
  .header-layout1 .sticky-active.active .header-info_icon i {
    color: #ff3333 !important;
  }
  .header-layout1 .sticky-active.active .header-info_icon {
    border: 1px solid #ff3333 !important;
    border-radius: 50%;
  }

  .main-menu a,
  .menu-style2 a {
    font-size: 20px !important;
    font-weight: 500 !important;
  }

  /* .vs-menu-toggle {
    background-color: #ffffff !important;
    color: #ff3333 !important;
  } */

  .header-category .vs-box-nav ul li a::after {
    content: "";
    background-color: #ff3333;
  }
  /* ================== */
  /* .header-info_label {
    font-size: 14px;
    color: #ff3333 !important;
  } */
  /* .header-info_link a:hover {
    color: #cc0033 !important;
  } */
  .header-layout1.style2 .header-cart .vs-icon {
    background-color: #ffffff !important;
    border-color: var(--title-color);
    transition: all 0.5s ease;
  }
  .header-layout1.style2 .header-cart:hover .vs-icon {
    background-color: #ff3333 !important;
  }

  .header-layout1.style2 .header-cart .vs-icon .badge {
    color: #ffffff !important;
    background-color: #2e4a5b !important;
  }

  .header-layout1.style2 .header-top {
    background-color: #2e4a5b !important;
  }
  .header-info_icon {
    background-color: #ffffff !important;
    border: 2px solid #ff3333 !important;
    transition: all 0.5s ease;
  }
  .header-info_icon:hover {
    /* background-color: #ff3333 !important; */
    /* color: #ffffff !important; */
    color: #ff3333 !important;
    border: 2px solid #ffffff !important;
  }
  .sticky_cart {
    border: none !important;
  }
  .sticky_cart i {
    color: #ffffff !important;
  }
  /* .header-layout1.style2 .header-cart .vs-icon .badge {
    color: #ff3333 !important;
    transition: all 0.5s ease;
  }
  .header-layout1.style2 .header-cart .vs-icon:hover .badge {
    color: #ffffff !important;
  } */
  .widget_shopping_cart .qut-btn {
    border: 1px solid #ff3333 !important;
  }
  .widget_shopping_cart .total .amount {
    color: #ff3333 !important;
  }
  .widget_shopping_cart .qty-input {
    border: 1px solid #ff3333 !important;
  }
  .header-social a:hover {
    color: #ff3333 !important;
  }

  .header-category {
    position: relative;
  }
  .vs-box-nav {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 9999;
    width: 336px;
    background: #fff;
  }

  .vs-menu-toggle {
    width: 50px;
    height: 50px;
    padding: 0;
    /* font-size: 24px; */
    border: none;
    display: inline-block;
    background-color: var(--theme-color);
    color: var(--white-color);
    border-radius: 0%;
    background-color: red;
  }

  @media (max-width: 991px) {
    .vs-box-nav {
      position: absolute;
      left: 0;
      top: 100%;
      width: 330px;
      /* max-height: 70vh; */
      /* overflow-y: auto; */
      z-index: 99999;
      background: #fff;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
    }
  }

  /* ============================= */
  /* USER LOGIN DROPDOWN */
  /* ============================= */

  .user-login {
    position: relative;
    display: flex;
    align-items: center;
  }

  .user-login-btn {
    width: 42px;
    height: 42px;
    padding: 0;
    border: none;
    background: #f8ebe5;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 20px;
    border-radius: 5px;
    transition: all 0.3s ease;
  }

  .user-login-btn:hover {
    color: #ff3333;
  }

  /* Dropdown */

  .user-dropdown {
    position: absolute;
    top: calc(100% + -2px);
    right: 0;
    width: 220px;
    padding: 8px 0;

    /* Main dropdown color */
    background: #f8ebe5;

    border-radius: 6px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.18);
    border: 1px solid #ff3333;

    z-index: 99999;

    opacity: 0;
    visibility: hidden;
    transform: translateY(-8px);
    transition: all 0.25s ease;
  }

  /* Open */

  .user-dropdown-active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  /* Dropdown links */

  .user-dropdown a,
  .user-dropdown-logout {
    width: 100%;
    min-height: 45px;
    padding: 10px 16px;

    display: flex;
    align-items: center;
    gap: 12px;

    border: none;
    background: #f8ebe5 !important;
    text-decoration: none;

    color: #ff3333;
    font-size: 15px;
    font-weight: 500;

    cursor: pointer;
    transition: all 0.25s ease;
  }

  /* Icons */

  .user-dropdown a i,
  .user-dropdown-logout i {
    width: 22px;
    text-align: center;
    font-size: 16px;
    color: #ff3333;
    transition: all 0.25s ease;
  }

  /* Text */

  .user-dropdown a span,
  .user-dropdown-logout span {
    flex: 1;
    text-align: left;
  }

  /* Hover */

  .user-dropdown a:hover,
  .user-dropdown-logout:hover {
    background-color: #f8ebe5;
    color: #ff3333;
  }
  */ .user-dropdown a:hover i,
  .user-dropdown-logout:hover i {
    color: #ff3333;
  }

  /* Logout */

  .user-dropdown-logout {
    border-top: 1px solid rgba(255, 255, 255, 0.4);
    margin-top: 5px;
    padding-top: 12px;
    color: #ff3333;
  }

  .user-dropdown-logout i {
    color: #ff3333;
  }

  .user-dropdown-logout:hover {
    color: #ff3333;
    background-color: #ffffff;
  }

  .user-dropdown-logout:hover i {
    color: #ff3333;
  }
`;

export default Header;
