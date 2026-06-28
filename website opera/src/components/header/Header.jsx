import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";
import categoriesArray from "../../DataJS/categories.js";
import { useCartContext } from "../../context/CartContext.jsx";
import convertToBanglaNumber from "../banglaConvert/convertToBanglaNumber.jsx";

const Header = ({ toggleMenu, closeMenu }) => {
  const {
    cart,
    total_item,
    total_price,
    removeItem,
    setIncrement,
    setDecrement,
    wishlist,
  } = useCartContext();

  const location = useLocation(); // gives you current path
  const [isActiveCategory, setIsActiveCategory] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesArray);
  }, []);

  const toggleCategory = () => {
    setIsActiveCategory(!isActiveCategory);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        // change 50 to whatever scroll height you want
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateCategoryState = () => {
      if (window.innerWidth < 1300) {
        // Always disable below 1300px
        setIsActiveCategory(false);
      } else {
        // Above 1300px → follow path rule
        if (location.pathname === "/") {
          setIsActiveCategory(true);
        } else {
          setIsActiveCategory(false);
        }
      }
    };

    updateCategoryState(); // run on mount

    window.addEventListener("resize", updateCategoryState);

    return () => window.removeEventListener("resize", updateCategoryState);
  }, [location.pathname]);

  // cart scroll code
  useEffect(() => {
    const cartBox = document.querySelector(".cart_list");

    if (!cartBox) return;

    const handleWheel = (e) => {
      const { scrollTop, scrollHeight, clientHeight } = cartBox;

      const isScrollingUp = e.deltaY < 0;
      const isScrollingDown = e.deltaY > 0;

      const isAtTop = scrollTop === 0;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight;

      // Prevent page scroll when inside cart
      if ((isScrollingUp && isAtTop) || (isScrollingDown && isAtBottom)) {
        e.preventDefault();
      }

      e.stopPropagation();
    };

    cartBox.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      cartBox.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <Wrapper>
      <header className="vs-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-md-between justify-content-center align-items-center">
              <div className="col-auto">
                <div className="header-links d-md-inline d-none">
                  <ul>
                    <li className="fw-normal">
                      <i className="fa-solid fa-truck-fast"></i>দ্রুততম ডেলিভারি
                      সেবা
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-right">
                  <div className="dropdown d-none">
                    <Link
                      className="dropdown-toggle"
                      to="#"
                      role="button"
                      id="dropdownMenuLink"
                      aria-expanded="false"
                      onClick={() => setOpenLang(!openLang)}
                    >
                      <span className="globe-icon">
                        <i className="fal fa-globe"></i>
                      </span>
                      English
                    </Link>
                    <ul className={`dropdown-menu ৳{openLang ? "show" : ""}`}>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Bangla
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          English
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="header-social">
                    <Link to="https://www.facebook.com/operapublication">
                      <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-instagram"></i>
                    </Link>
                    <Link to="#">
                      <i className="fab fa-youtube"></i>
                    </Link>
                  </div>
                  <div className="user-login">
                    <Link to="#">
                      <i className="fa-solid fa-user"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-middle">
          <div className="container">
            <div className="row justify-content-between align-items-center gx-sm-0">
              <div className="col-auto">
                <div className="header-logo">
                  <Link to="/">
                    <img
                      // src="/assets/img/logo.svg"
                      // src="/assets/img/195X60.png"
                      // src="/assets/img/Opera Publication Logo.png"
                      // src="/assets/img/Opera Publication Logo11.png"
                      src="/assets/img/Opera logo 195 x 60.png"
                      alt="Opera"
                      className="logo"
                      // style={{ width: "195px", height: "60px" }}
                      // style={{ width: "120px", height: "75px" }}
                      style={{ height: "80px" }}
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
                      {/* <span className="badge">0</span> */}
                      <span className="badge">{wishlist.length}</span>
                    </Link>

                    <div className="header-cart">
                      <Link to="/cart" className="vs-icon has-badge">
                        <i className="fa-solid fa-basket-shopping"></i>
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
                          className="widget_shopping_cart_content"
                          style={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                          }}
                        >
                          {/* <ul className="cart_list">
                            <li className="mini_cart_item">
                              <Link to="#" className="remove">
                                <i className="far fa-times"></i>
                              </Link>
                              <Link to="/shop-details" className="img">
                                <img
                                  src="/assets/img/cart/cat-img-1.jpg"
                                  alt="Cart Imagee"
                                />
                              </Link>
                              <Link
                                to="/shop-details"
                                className="product-title fw-normal"
                              >
                                Smart Watch
                              </Link>
                              <span className="amount fw-normal">৳৯৯.00</span>
                              <div className="quantity">
                                <button className="quantity-minus qut-btn">
                                  <i className="far fa-minus"></i>
                                </button>
                                <input
                                  type="number"
                                  className="qty-input"
                                  defaultValue="1"
                                  min="1"
                                  max="99"
                                />
                                <button className="quantity-plus qut-btn">
                                  <i className="far fa-plus"></i>
                                </button>
                              </div>
                              <div className="subtotal">
                                <span className="fw-normal fs-6">
                                  Subtotal:
                                </span>
                                &nbsp;
                                <span className="amount fw-normal fs-6">
                                  ৳৯৯.00
                                </span>
                              </div>
                            </li>
                            <li className="mini_cart_item">
                              <Link to="#" className="remove">
                                <i className="far fa-times"></i>
                              </Link>
                              <Link to="/shop-details" className="img">
                                <img
                                  src="/assets/img/cart/cat-img-2.jpg"
                                  alt="Cart Imagee"
                                />
                              </Link>
                              <Link
                                to="/shop-details"
                                className="product-title fw-normal"
                              >
                                Boss Chair
                              </Link>
                              <span className="amount fw-normal">৳৯0.00</span>
                              <div className="quantity">
                                <button className="quantity-minus qut-btn">
                                  <i className="far fa-minus"></i>
                                </button>
                                <input
                                  type="number"
                                  className="qty-input"
                                  defaultValue="2"
                                  min="1"
                                  max="99"
                                />
                                <button className="quantity-plus qut-btn">
                                  <i className="far fa-plus"></i>
                                </button>
                              </div>
                              <div className="subtotal fw-normal fs-6">
                                <span>Subtotal:</span>&nbsp;
                                <span className="amount fw-normal fs-6">
                                  ৳১৬0.00
                                </span>
                              </div>
                            </li>
                          </ul> */}

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
                                    onClick={() => removeItem(item.id)}
                                  >
                                    <i className="far fa-times"></i>
                                  </button>

                                  {/* PRODUCT IMAGE */}
                                  <Link to="/shop-details" className="img">
                                    <img src={item.image} alt={item.name} />
                                  </Link>

                                  {/* PRODUCT TITLE */}
                                  <Link
                                    to="/shop-details"
                                    className="product-title fw-normal"
                                  >
                                    {item.name}
                                  </Link>

                                  {/* PRODUCT PRICE */}
                                  <span className="amount fw-normal">
                                    ৳{convertToBanglaNumber(item.sPrice || 0)}
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
                                      type="number"
                                      className="qty-input fw-normal"
                                      value={item.amount}
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
                                        item.sPrice * item.amount || 0,
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

                            <span
                              className="amount"
                              style={{
                                color: "#FF3333",
                                fontFamily: "sans-serif",
                              }}
                            >
                              ৳{convertToBanglaNumber(total_price || 0)}
                            </span>
                          </p>
                          <p className="buttons">
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

        {/* <div className="sticky-wrapper header-bottom"> */}
        <div
          // className="sticky-wrapper header-bottom will-sticky"
          className={`sticky-wrapper header-bottom ${
            isScrolled ? "will-sticky" : ""
          }`}
          style={{ minHeight: "80px" }}
        >
          {/* <div className="sticky-active "> */}
          <div className={`sticky-active ${isScrolled ? "active" : ""}`}>
            <div className="container">
              <div className="menu-top">
                <div className="row justify-content-between align-items-center gx-sm-0">
                  <div className="col-auto">
                    <div className="header-category style2">
                      <button
                        className="category-toggler fs-4"
                        onClick={toggleCategory}
                        disabled={
                          location.pathname === "/" && window.innerWidth > 1300
                        }
                      >
                        <i className="fa-solid fa-bars-sort"></i>ক্যাটাগরি
                      </button>
                      <div
                        className={`vs-box-nav ৳{
                          isActiveCategory ? "active" : ""
                        }`}
                        style={{
                          visibility: isActiveCategory ? "visible" : "hidden",
                        }}
                      >
                        <ul>
                          {categories.map((cat) => {
                            return (
                              <li key={cat.id}>
                                <Link
                                  to="/shop"
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
                                      new CustomEvent("localStorageChange", {
                                        detail: {
                                          category: String(cat.id),
                                        },
                                      }),
                                    );
                                    setIsActiveCategory(false); // ✅ ADD THIS LINE
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
                  </div>

                  <div className="col-auto">
                    <nav className="main-menu menu-style1 d-none d-lg-block">
                      <ul className="iphone-bangla">
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

                        <li className="menu-item-has-children">
                          <NavLink
                            to="/about"
                            className={({ isActive }) =>
                              isActive ? "active" : ""
                            }
                          >
                            সম্বন্ধে
                          </NavLink>
                        </li>

                        <li className="menu-item-has-children">
                          <NavLink
                            to="/shop"
                            className={({ isActive }) =>
                              isActive ? "active" : ""
                            }
                          >
                            বই
                          </NavLink>
                        </li>

                        <li className="menu-item-has-children">
                          <NavLink
                            to="/authors"
                            className={({ isActive }) =>
                              isActive ? "active" : ""
                            }
                          >
                            লেখক
                          </NavLink>
                        </li>

                        {/* <li className="menu-item-has-children">
                          <NavLink
                            to="/vendor"
                            className={({ isActive }) =>
                              isActive ? "active" : ""
                            }
                          >
                            Vendor
                          </NavLink>

                          <ul className="sub-menu">
                            <li>
                              <NavLink
                                to="/vendor"
                                className={({ isActive }) =>
                                  isActive ? "active" : ""
                                }
                              >
                                Vendor
                              </NavLink>
                            </li>

                            <li>
                              <NavLink
                                to="/vendor-details"
                                className={({ isActive }) =>
                                  isActive ? "active" : ""
                                }
                              >
                                Vendor Details
                              </NavLink>
                            </li>
                          </ul>
                        </li> */}

                        <li className="menu-item-has-children">
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
                  <div className="col-auto d-xl-block d-none">
                    <div className="header-info">
                      <div className="header-info_icon">
                        <i className="fas fa-phone"></i>
                      </div>
                      <div className="media-body">
                        <span className="header-info_label fw-normal fs-6">
                          Call Us 24/7
                        </span>
                        <div className="header-info_link fw-normal fs-6">
                          <Link to="tel:01739392329">01739392329</Link>
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

  .vs-menu-toggle {
    background-color: #ffffff !important;
    color: #ff3333 !important;
  }

  .cart_table .cart-productname:hover {
    color: #ff3333 !important;
  }
  .quantity.style2 .qty-btn {
    border: 1px solid #ff3333 !important;
    /* background-color: #ff3333 !important; */
  }
  .quantity.style2 .qty-btn:hover {
    background-color: #ff3333 !important;
  }

  .cart_table .qty-input {
    border: 1px solid #ff3333 !important;
    /* color: var(--title-color); */
  }

  .quantity .qty-input:focus {
    background-color: #ff3333;
    color: #ffffff;
    border-color: #ff3333;
    outline: none;
  }

  .cart_totals .shipping-calculator-button {
    color: #ff3333;
  }
  input[type="radio"]:checked ~ label::before {
    border: 5px solid #ff3333;
  }

  .header-category .vs-box-nav ul li a::after {
    content: "";
    background-color: #ff3333;
  }
`;

export default Header;
