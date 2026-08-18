import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = ({ menuOpen, closeMenu }) => {
  return (
    // <div className="vs-menu-wrapper">
    <Wrapper>
      <div
        className={`vs-menu-wrapper ${
          menuOpen ? "vs-menu-wrapper vs-body-visible" : ""
        }`}
      >
        <div className="vs-menu-area text-center">
          <div className="mobile-logo">
            <Link to="/">
              {/* <img src="/assets/img/logo.svg" alt="ebukz" className="logo" /> */}
              <img
                src="/assets/img/Opera logo 195 x 60.png"
                alt="Opera Publication"
                className="logo"
                style={{height: "70px"}}
              />
            </Link>
            <button className="vs-menu-toggle" onClick={closeMenu}>
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="vs-mobile-menu">
            {/* <ul>
              <li className="">
                <Link to="/">Home</Link>
              </li>

              <li>
                <Link to="/about">About</Link>
              </li>

              <li className="">
                <Link to="/shop">Shop</Link>
              </li>

              <li className="menu-item-has-children">
                <Link to="/about">Vendor</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/vendor">Vendor</Link>
                  </li>
                  <li>
                    <Link to="/vendor-details">Vendor Details</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>

              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul> */}

            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  হোম
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  সম্বন্ধে
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  বই
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/authors"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  লেখক
                </NavLink>
              </li>

              {/* <li className="menu-item-has-children">
                <NavLink
                  to="/vendor"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Vendor
                </NavLink>
                <ul className="sub-menu">
                  <li>
                    <NavLink
                      to="/vendor"
                      className={({ isActive }) => (isActive ? "active" : "")}
                      onClick={closeMenu}
                    >
                      Vendor
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/vendor-details"
                      className={({ isActive }) => (isActive ? "active" : "")}
                      onClick={closeMenu}
                    >
                      Vendor Details
                    </NavLink>
                  </li>
                </ul>
              </li> */}

              <li>
                <NavLink
                  to="/blog"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  ব্লগ
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                  onClick={closeMenu}
                >
                  যোগাযোগ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .vs-mobile-menu ul li a.active {
    color: #ff3333 !important;
  }
  /* Optional: submenu active color */
  .vs-mobile-menu ul li ul.sub-menu li a.active {
    color: #ff3333 !important;
  }
  .vs-mobile-menu ul li a {
    font-size: 20px !important;
    font-weight: 500 !important;
  }
  .vs-menu-wrapper .mobile-logo {
    background-color: gray !important;
  }
  .vs-menu-wrapper .vs-menu-toggle {
    background-color: #ff3333 !important;
    /* color: var(--white-color); */
  }
  .vs-menu-wrapper .vs-menu-toggle:hover {
    background-color: #ff3333 !important;
    /* color: var(--white-color); */
  }
`;

export default MobileMenu;
