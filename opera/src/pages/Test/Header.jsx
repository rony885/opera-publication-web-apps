// import React from "react";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <header className="vs-header header-layout1 style2">
//       <div className="header-top">
//         <div className="container">
//           <div className="row justify-content-md-between justify-content-center align-items-center">
//             <div className="col-auto">
//               <div className="header-links d-md-inline d-none">
//                 <ul>
//                   <li>
//                     <i className="fa-solid fa-truck-fast"></i>Fastest Delivery
//                     In Your City
//                   </li>
//                 </ul>
//               </div>
//             </div>
//             <div className="col-auto">
//               <div className="header-right">
//                 <div className="dropdown">
//                   <Link
//                     className="dropdown-toggle"
//                     to="#"
//                     role="button"
//                     id="dropdownMenuLink"
//                     data-bs-toggle="dropdown"
//                     aria-expanded="false"
//                   >
//                     <span className="globe-icon">
//                       <i className="fal fa-globe"></i>
//                     </span>
//                     English
//                   </Link>
//                   <ul
//                     className="dropdown-menu"
//                     aria-labelledby="dropdownMenuLink"
//                   >
//                     <li>
//                       <Link className="dropdown-item" to="#">
//                         Arabic
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item" to="#">
//                         German
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item" to="#">
//                         French
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item" to="#">
//                         Italian
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item" to="#">
//                         Slobac
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item" to="#">
//                         Russian
//                       </Link>
//                     </li>
//                     <li>
//                       <Link className="dropdown-item" to="#">
//                         Spanish
//                       </Link>
//                     </li>
//                   </ul>
//                 </div>
//                 <div className="header-social">
//                   <Link to="#">
//                     <i className="fab fa-facebook-f"></i>
//                   </Link>
//                   <Link to="#">
//                     <i className="fa-brands fa-x-twitter"></i>
//                   </Link>
//                   <Link to="#">
//                     <i className="fab fa-instagram"></i>
//                   </Link>
//                   <Link to="#">
//                     <i className="fab fa-youtube"></i>
//                   </Link>
//                 </div>
//                 <div className="user-login">
//                   <Link to="#">
//                     <i className="fa-solid fa-user"></i>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="header-middle">
//         <div className="container">
//           <div className="row justify-content-sm-between justify-content-center align-items-center gx-sm-0">
//             <div className="col-auto">
//               <div className="header-logo">
//                 <Link to="/">
//                   <img
//                     src="/assets/img/dark-logo.svg"
//                     alt="Ebukz"
//                     className="logo"
//                   />
//                 </Link>
//               </div>
//             </div>
//             <div className="col-auto">
//               <div className="header-inner">
//                 <form className="header-search">
//                   <button
//                     className="searchBoxTggler"
//                     aria-label="search-button"
//                   >
//                     <i className="fa-solid fa-magnifying-glass"></i>
//                   </button>
//                   <div className="d-flex align-items-center">
//                     <input
//                       type="text"
//                       placeholder="Search Your Product’s....."
//                     />
//                   </div>
//                 </form>
//                 <div className="header-buttons">
//                   <Link to="/wishlist" className="vs-icon wishlist">
//                     <i className="fal fa-heart"></i>
//                   </Link>
//                   <div className="header-info">
//                     <div className="header-info_icon">
//                       <i className="fas fa-phone"></i>
//                     </div>
//                     <div className="media-body">
//                       <span className="header-info_label">Call Us 24/7</span>
//                       <div className="header-info_link">
//                         <Link to="tel:+1234567890">(00) 3349 0491 887</Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="sticky-wrapper header-bottom">
//         <div className="sticky-active">
//           <div className="container">
//             <div className="menu-top">
//               <div className="row justify-content-between align-items-center gx-sm-0">
//                 <div className="col-xl-auto">
//                   <div className="menu-inner">
//                     <div className="header-category">
//                       <button className="category-toggler">
//                         <i className="fa-solid fa-bars-sort"></i>Categories
//                       </button>
//                       <div className="vs-box-nav">
//                         <ul>
//                           <li>
//                             <Link to="/shop">
//                               <img
//                                 src="/assets/img/icons/categori-i-1.svg"
//                                 alt="icon"
//                               />
//                               Romance
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="/shop">
//                               <img
//                                 src="/assets/img/icons/categori-i-2.svg"
//                                 alt="icon"
//                               />
//                               Thriller
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="/shop">
//                               <img
//                                 src="/assets/img/icons/categori-i-3.svg"
//                                 alt="icon"
//                               />
//                               Fantasy
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="/shop">
//                               <img
//                                 src="/assets/img/icons/categori-i-4.svg"
//                                 alt="icon"
//                               />
//                               Since Fiction
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="/shop">
//                               <img
//                                 src="/assets/img/icons/categori-i-5.svg"
//                                 alt="icon"
//                               />
//                               Since
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="/shop">
//                               <img
//                                 src="/assets/img/icons/categori-i-6.svg"
//                                 alt="icon"
//                               />
//                               Adventure
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="/shop">
//                               <img
//                                 src="/assets/img/icons/categori-i-7.svg"
//                                 alt="icon"
//                               />
//                               Kids
//                             </Link>
//                           </li>
//                           <li>
//                             <Link to="/shop">
//                               <img
//                                 src="/assets/img/icons/categori-i-8.svg"
//                                 alt="icon"
//                               />
//                               cartoon & Story
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     </div>
//                     <div className="header-logo">
//                       <Link to="/">
//                         <img
//                           src="/assets/img/dark-logo.svg"
//                           alt="Ebukz"
//                           className="logo"
//                         />
//                       </Link>
//                     </div>
//                     <div className="menu-area">
//                       <nav className="main-menu menu-style1 d-none d-lg-block">
//                         <ul>
//                           <li className="menu-item-has-children">
//                             <Link to="/">Home</Link>
//                             <ul className="sub-menu">
//                               <li>
//                                 <Link to="/">Home 1</Link>
//                               </li>
//                               <li>
//                                 <Link to="/index-2">Home 2</Link>
//                               </li>
//                               <li>
//                                 <Link to="/index-3">Home 3</Link>
//                               </li>
//                             </ul>
//                           </li>
//                           <li className="menu-item-has-children">
//                             <Link to="/shop">Shop</Link>
//                             <ul className="sub-menu">
//                               <li>
//                                 <Link to="/shop">Shop</Link>
//                               </li>
//                               <li>
//                                 <Link to="/shop-sidebar">Shop Sidebar</Link>
//                               </li>
//                               <li>
//                                 <Link to="/shop-details">Shop Details</Link>
//                               </li>
//                             </ul>
//                           </li>
//                           <li className="menu-item-has-children">
//                             <Link to="/vendor">Vendor</Link>
//                             <ul className="sub-menu">
//                               <li>
//                                 <Link to="/vendor">Vendor</Link>
//                               </li>
//                               <li>
//                                 <Link to="/vendor-details">Vendor Details</Link>
//                               </li>
//                             </ul>
//                           </li>
//                           <li className="menu-item-has-children mega-menu-wrap">
//                             <Link to="#">Pages</Link>
//                             <ul className="mega-menu">
//                               <li>
//                                 <Link to="/shop">Page List 1</Link>
//                                 <ul>
//                                   <li>
//                                     <Link to="/">Home 1</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/index-2">Home 2</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/index-3">Home 3</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/about">About</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/contact">Contact</Link>
//                                   </li>
//                                 </ul>
//                               </li>
//                               <li>
//                                 <Link to="#">Page List 2</Link>
//                                 <ul>
//                                   <li>
//                                     <Link to="/blog">Blog</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/blog-sidebar">Blog Sidebar</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/blog-sidebar-2">
//                                       Blog Sidebar 2
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/Blog-Standard">
//                                       Blog Standard
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/blog-details">Blog Details</Link>
//                                   </li>
//                                 </ul>
//                               </li>
//                               <li>
//                                 <Link to="#">Page List 3</Link>
//                                 <ul>
//                                   <li>
//                                     <Link to="/cart">Cart</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/shop">Shop</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/shop-sidebar">Shop Sidebar</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/shop-details">Shop Details</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/404">Error Page</Link>
//                                   </li>
//                                 </ul>
//                               </li>
//                               <li>
//                                 <Link to="#">Page List 4</Link>
//                                 <ul>
//                                   <li>
//                                     <Link to="/wishlist">wishlist</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/checkout">checkout</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/author">All Authors</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/author-details">
//                                       Author Details
//                                     </Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/vendor">Vendor</Link>
//                                   </li>
//                                   <li>
//                                     <Link to="/vendor-details">
//                                       Vendor Details
//                                     </Link>
//                                   </li>
//                                 </ul>
//                               </li>
//                             </ul>
//                           </li>
//                           <li className="menu-item-has-children">
//                             <Link to="/blog">Blog</Link>
//                             <ul className="sub-menu">
//                               <li>
//                                 <Link to="/blog">Blog</Link>
//                               </li>
//                               <li>
//                                 <Link to="/blog-sidebar">Blog Sidebar</Link>
//                               </li>
//                               <li>
//                                 <Link to="/blog-sidebar-2">Blog Sidebar 2</Link>
//                               </li>
//                               <li>
//                                 <Link to="/Blog-Standard">Blog Standard</Link>
//                               </li>
//                               <li>
//                                 <Link to="/blog-details">Blog Details</Link>
//                               </li>
//                             </ul>
//                           </li>
//                           <li>
//                             <Link to="/contact">Contact</Link>
//                           </li>
//                         </ul>
//                       </nav>
//                       <button className="vs-menu-toggle d-inline-block d-lg-none">
//                         <i className="fal fa-bars"></i>
//                       </button>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="col-auto d-xl-block d-none">
//                   <div className="header-cart">
//                     <Link to="cart" className="vs-icon has-badge">
//                       <i className="fa-solid fa-basket-shopping"></i>
//                       <span className="badge">0</span>
//                     </Link>
//                     <div className="woocommerce widget_shopping_cart">
//                       <div className="widget_shopping_cart_content">
//                         <ul className="cart_list">
//                           <li className="mini_cart_item">
//                             <Link to="#" className="remove">
//                               <i className="far fa-times"></i>
//                             </Link>
//                             <Link to="shop-details" className="img">
//                               <img
//                                 src="/assets/img/cart/cat-img-1.jpg"
//                                 alt="Cart Imagee"
//                               />
//                             </Link>
//                             <Link to="shop-details" className="product-title">
//                               Smart Watch
//                             </Link>
//                             <span className="amount">$99.00</span>
//                             <div className="quantity">
//                               <button className="quantity-minus qut-btn">
//                                 <i className="far fa-minus"></i>
//                               </button>
//                               <input
//                                 type="number"
//                                 className="qty-input"
//                                 "1"
//                                 min="1"
//                                 max="99"
//                               />
//                               <button className="quantity-plus qut-btn">
//                                 <i className="far fa-plus"></i>
//                               </button>
//                             </div>
//                             <div className="subtotal">
//                               <span>Subtotal:</span>
//                               <span className="amount">$99.00</span>
//                             </div>
//                           </li>
//                           <li className="mini_cart_item">
//                             <Link to="#" className="remove">
//                               <i className="far fa-times"></i>
//                             </Link>
//                             <Link to="/shop-details" className="img">
//                               <img
//                                 src="/assets/img/cart/cat-img-2.jpg"
//                                 alt="Cart Imagee"
//                               />
//                             </Link>
//                             <Link to="/shop-details" className="product-title">
//                               Boss Chair
//                             </Link>
//                             <span className="amount">$80.00</span>
//                             <div className="quantity">
//                               <button className="quantity-minus qut-btn">
//                                 <i className="far fa-minus"></i>
//                               </button>
//                               <input
//                                 type="number"
//                                 className="qty-input"
//                                 "2"
//                                 min="1"
//                                 max="99"
//                               />
//                               <button className="quantity-plus qut-btn">
//                                 <i className="far fa-plus"></i>
//                               </button>
//                             </div>
//                             <div className="subtotal">
//                               <span>Subtotal:</span>
//                               <span className="amount">$160.00</span>
//                             </div>
//                           </li>
//                         </ul>
//                         <p className="total">
//                           <strong>Subtotal:</strong>
//                           <span className="amount">$259.00</span>
//                         </p>
//                         <p className="buttons">
//                           <Link to="/cart" className="vs-btn">
//                             View cart
//                           </Link>
//                           <Link to="/checkout" className="vs-btn checkout">
//                             Checkout
//                           </Link>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Header = ({ toggleMenu, closeMenu }) => {
  const [isActiveCategory, setIsActiveCategory] = useState(false);

  const toggleCategory = () => {
    setIsActiveCategory(!isActiveCategory); // toggle true/false
  };

  return (
    <Wrapper>
      <header className="vs-header header-layout1">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-md-between justify-content-center align-items-center">
              <div className="col-auto">
                <div className="header-links d-md-inline d-none">
                  <ul>
                    <li>
                      <i className="fa-solid fa-truck-fast"></i>Fastest Delivery
                      In Your City
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-right">
                  <div className="dropdown">
                    <Link
                      className="dropdown-toggle"
                      to="#"
                      role="button"
                      id="dropdownMenuLink"
                      // data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="globe-icon">
                        <i className="fal fa-globe"></i>
                      </span>
                      English
                    </Link>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <Link className="dropdown-item" to="#">
                          Arabic
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          German
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          French
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Italian
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Slobac
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Russian
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Spanish
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="header-social">
                    <Link to="#">
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
                      src="/assets/img/logo.svg"
                      alt="Ebukz"
                      className="logo"
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
                      placeholder="Search yourProduct’s....."
                    />
                  </form>
                  <div className="header-buttons">
                    <Link to="/wishlist" className="vs-icon wishlist">
                      <i className="fal fa-heart"></i>
                    </Link>
                    <div className="header-cart">
                      <Link to="/cart" className="vs-icon has-badge">
                        <i className="fa-solid fa-basket-shopping"></i>
                        <span className="badge">0</span>
                      </Link>
                      <div className="woocommerce widget_shopping_cart">
                        <div className="widget_shopping_cart_content">
                          <ul className="cart_list">
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
                                className="product-title"
                              >
                                Smart Watch
                              </Link>
                              <span className="amount">$99.00</span>
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
                                <span>Subtotal:</span>
                                <span className="amount">$99.00</span>
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
                                className="product-title"
                              >
                                Boss Chair
                              </Link>
                              <span className="amount">$80.00</span>
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
                              <div className="subtotal">
                                <span>Subtotal:</span>
                                <span className="amount">$160.00</span>
                              </div>
                            </li>
                          </ul>
                          <p className="total">
                            <strong>Subtotal:</strong>
                            <span className="amount">$259.00</span>
                          </p>
                          <p className="buttons">
                            <Link to="/cart" className="vs-btn">
                              View cart
                            </Link>
                            <Link to="/checkout" className="vs-btn checkout">
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
          className="sticky-wrapper header-bottom will-sticky"
          style={{ minHeight: "80px" }}
        >
          <div className="sticky-active active">
            <div className="container">
              <div className="menu-top">
                <div className="row justify-content-between align-items-center gx-sm-0">
                  <div className="col-auto">
                    <div className="header-category style2">
                      <button
                        className="category-toggler"
                        onClick={toggleCategory}
                      >
                        <i className="fa-solid fa-bars-sort"></i>Categories
                      </button>
                      <div
                        className={`vs-box-nav ${
                          isActiveCategory ? "active" : ""
                        }`}
                      >
                        {/* <div class="vs-box-nav"> */}
                        <ul>
                          <li>
                            <Link to="/shop">
                              <img
                                src="assets/img/icons/categori-i-1.svg"
                                alt="icon"
                              />
                              Romance
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop">
                              <img
                                src="assets/img/icons/categori-i-2.svg"
                                alt="icon"
                              />
                              Thriller
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop">
                              <img
                                src="assets/img/icons/categori-i-3.svg"
                                alt="icon"
                              />
                              Fantasy
                            </Link>
                          </li>
                          <li>
                            <Link to="shop.html">
                              <img
                                src="assets/img/icons/categori-i-4.svg"
                                alt="icon"
                              />
                              Since Fiction
                            </Link>
                          </li>
                          <li>
                            <Link to="shop.html">
                              <img
                                src="assets/img/icons/categori-i-5.svg"
                                alt="icon"
                              />
                              Since
                            </Link>
                          </li>
                          <li>
                            <Link to="shop.html">
                              <img
                                src="assets/img/icons/categori-i-6.svg"
                                alt="icon"
                              />
                              Adventure
                            </Link>
                          </li>
                          <li>
                            <Link to="shop.html">
                              <img
                                src="assets/img/icons/categori-i-7.svg"
                                alt="icon"
                              />
                              Kids
                            </Link>
                          </li>
                          <li>
                            <Link to="shop.html">
                              <img
                                src="assets/img/icons/categori-i-8.svg"
                                alt="icon"
                              />
                              cartoon & Story
                            </Link>
                          </li>
                          <li>
                            <Link to="/shop">
                              <img
                                src="assets/img/icons/categori-i-9.svg"
                                alt="icon"
                              />
                              Educational Curriculum
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="header-logo">
                      <Link to="/">
                        <img
                          src="/assets/img/dark-logo.svg"
                          alt="Ebukz"
                          className="logo"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-auto">
                    <nav className="main-menu menu-style1 d-none d-lg-block">
                      <ul>
                        <li className="menu-item-has-children">
                          <Link to="/">Home</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/">Home 1</Link>
                            </li>
                            <li>
                              <Link to="index-2.html">Home 2</Link>
                            </li>
                            <li>
                              <Link to="index-3.html">Home 3</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="shop.html">Shop</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                              <Link to="shop-sidebar.html">Shop Sidebar</Link>
                            </li>
                            <li>
                              <Link to="shop-details.html">Shop Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/vendor">Vendor</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/vendor">Vendor</Link>
                            </li>
                            <li>
                              <Link to="/vendor-details">Vendor Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children mega-menu-wrap">
                          <Link to="#">Pages</Link>
                          <ul className="mega-menu">
                            <li>
                              <Link to="/shop">Page List 1</Link>
                              <ul>
                                <li>
                                  <Link to="/">Home 1</Link>
                                </li>
                                <li>
                                  <Link to="index-2.html">Home 2</Link>
                                </li>
                                <li>
                                  <Link to="index-3.html">Home 3</Link>
                                </li>
                                <li>
                                  <Link to="about.html">About</Link>
                                </li>
                                <li>
                                  <Link to="contact.html">Contact</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="#">Page List 2</Link>
                              <ul>
                                <li>
                                  <Link to="/blog">Blog</Link>
                                </li>
                                <li>
                                  <Link to="blog-sidebar.html">
                                    Blog Sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link to="blog-sidebar-2.html">
                                    Blog Sidebar 2
                                  </Link>
                                </li>
                                <li>
                                  <Link to="Blog-Standard.html">
                                    Blog Standard
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/blog-details">Blog Details</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="#">Page List 3</Link>
                              <ul>
                                <li>
                                  <Link to="/cart">Cart</Link>
                                </li>
                                <li>
                                  <Link to="/shop">Shop</Link>
                                </li>
                                <li>
                                  <Link to="/shop-sidebar">Shop Sidebar</Link>
                                </li>
                                <li>
                                  <Link to="/shop-details">Shop Details</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link to="#">Page List 4</Link>
                              <ul>
                                <li>
                                  <Link to="/wishlist">wishlist</Link>
                                </li>
                                <li>
                                  <Link to="/checkout">checkout</Link>
                                </li>
                                <li>
                                  <Link to="/author">All Authors</Link>
                                </li>
                                <li>
                                  <Link to="/author-details">
                                    Author Details
                                  </Link>
                                </li>
                                <li>
                                  <Link to="/vendor">Vendor</Link>
                                </li>
                                <li>
                                  <Link to="/vendor-details">
                                    Vendor Details
                                  </Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <Link to="/blog">Blog</Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to="/blog">Blog</Link>
                            </li>
                            <li>
                              <Link to="blog-sidebar.html">Blog Sidebar</Link>
                            </li>
                            <li>
                              <Link to="blog-sidebar-2.html">
                                Blog Sidebar 2
                              </Link>
                            </li>
                            <li>
                              <Link to="Blog-Standard.html">Blog Standard</Link>
                            </li>
                            <li>
                              <Link to="/blog-details">Blog Details</Link>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <Link to="/contact">Contact</Link>
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
                        <span className="header-info_label">Call Us 24/7</span>
                        <div className="header-info_link">
                          <Link to="tel:+1234567890">(00) 3349 0491 887</Link>
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

const Wrapper = styled.section``;

export default Header;
