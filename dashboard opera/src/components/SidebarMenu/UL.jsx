import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const UL = ({ handleTogglle }) => {
  const location = useLocation(); // Get current URL path
  const [activeMenu, setActiveMenu] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");

  // Ref for the active element
  const activeItemRef = useRef(null);

  // Scroll to active item when route changes
  useEffect(() => {
    setTimeout(() => {
      if (activeItemRef.current) {
        activeItemRef.current.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    }, 50); // delay to allow sidebar/menu to open
  }, [location.pathname]);

  // Sync active menu and submenu with the current URL
  useEffect(() => {
    const path = location.pathname;
    // Define menu mappings based on paths
    const menuMappings = {
      "/": "dashboard",

      //Home
      "/home-list": "home",
      "/create-home": "home",

      // Products
      "/book-list": "books",
      "/add-book": "books",
      "/book-update": "books",
      "/category": "books",

      // Authors
      "/authors": "authors",
      "/add-author": "authors",
      "/author-update": "authors",

      // Blogs
      "/blogs": "blogs",
      "/create-blog": "blogs",
      "/blog-update": "blogs",

      // Opera
      "/opera": "opera",
      "/writer-chirkut": "opera",
      "/add-writer-chirkut": "opera",
      "/writer-chirkut-update": "opera",
      "/opera-clients": "opera",

      // Contact
      "/contact": "contact",

      // Settings
      "/settings": "settings",

      // User
      "/user": "user",
      "/create-user": "user",
      "/user-update": "user",
      "/profile": "profile",
      "/change-password": "change-password",

      // Authentication
      "/sign-in": "authentication",
      "/register": "authentication",
      "/reset-password": "authentication",
      "/forgot-password": "authentication",

      // General Settings
      "/company-info": "settings",
      "/utilities": "settings",
    };

    // Define submenu mappings based on paths
    const subMenuMappings = {
      "/": "",

      //Home
      "/home-list": "home-list",
      "/create-home": "create-home",

      // Products
      "/book-list": "book-list",
      "/add-book": "add-book",
      "/book-update": "book-update",
      "/category": "category",

      // Authors
      "/authors": "authors",
      "/add-author": "add-author",
      "/author-update": "author-update",

      // Blogs
      "/blogs": "blogs",
      "/create-blog": "create-blogs",
      "/blog-update": "blog-update",

      // Opera
      "/opera": "opera",
      "/writer-chirkut": "writer-chirkut",
      "/add-writer-chirkut": "add-writer-chirkut",
      "/writer-chirkut-update": "writer-chirkut-update",
      "/opera-clients": "opera-clients",

      // Contact
      "/contact": "contact",

      // Settings
      "/settings": "settings",

      // User
      "/user": "user",
      "/create-user": "create-user",
      "/user-update": "user-update",
      "/profile": "profile",
      "/change-password": "change-password",

      // Authentication
      "/sign-in": "sign-in",
      "/register": "register",
      "/reset-password": "password",
      "/forgot-password": "forgot-password",

      //General Settings
      "/company-info": "company-info",
      "/utilities": "utilities",
    };

    // Update active menu and active submenu based on the URL path
    if (path.startsWith("/book-update")) {
      setActiveMenu("books");
      setActiveSubMenu("book-list");
    } else if (path.startsWith("/author-update")) {
      setActiveMenu("authors");
      setActiveSubMenu("author-update");
    } else if (path.startsWith("/add-writer-chirkut")) {
      setActiveMenu("opera");
      setActiveSubMenu("writer-chirkut");
    } else if (path.startsWith("/writer-chirkut-update")) {
      setActiveMenu("opera");
      setActiveSubMenu("writer-chirkut");
    } else if (path.startsWith("/blog-update")) {
      setActiveMenu("blogs");
      setActiveSubMenu("blog-update");
    } else if (path.startsWith("/user-update")) {
      setActiveMenu("all-user");
      setActiveSubMenu("user-update");
    } else {
      setActiveMenu(menuMappings[path] || "");
      setActiveSubMenu(subMenuMappings[path] || "");
    }
  }, [location.pathname]);

  // Handle submenu toggle (open/close)
  const handleSubMenuToggle = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? "" : menu));
  };

  return (
    <Wrapper>
      <ul className="navbar-nav" id="navbar-nav">
        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "dashboard" ? "active" : ""}`}
            to="/"
            ref={location.pathname === "/" ? activeItemRef : null}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:widget-5-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text" style={{ fontSize: "18px" }}>
              {" "}
              ড্যাশবোর্ড{" "}
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "home" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("home")}
            to="#sidebarHome"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarHome"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:home-2-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text" style={{ fontSize: "18px" }}>
              হোম
            </span>
          </Link>

          <div
            className={`collapse ${activeMenu === "Home" ? "show" : ""}`}
            id="sidebarHome"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "home-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/home-list"
                  ref={activeSubMenu === "home-list" ? activeItemRef : null}
                  // style={{ fontSize: "12px" }}
                >
                  হোম লিস্ট
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link ${
                    activeSubMenu === "create-home" ? "active" : ""
                  }`}
                  to="/create-home"
                  onClick={handleTogglle}
                  // style={{ fontSize: "12px" }}
                >
                  অ্যাড হোম
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "books" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("books")}
            to="#sidebarBooks"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarBooks"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:book-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text" style={{ fontSize: "18px" }}>
              {" "}
              বই{" "}
            </span>
          </Link>

          <div
            className={`collapse ${activeMenu === "books" ? "show" : ""}`}
            id="sidebarBooks"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "book-list" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/book-list"
                  ref={activeSubMenu === "book-list" ? activeItemRef : null}
                  // style={{ fontSize: "12px" }}
                >
                  বই লিস্ট
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "add-book" ? "active" : ""
                  }`}
                  to="/add-book"
                  onClick={handleTogglle}
                  // style={{ fontSize: "12px" }}
                >
                  অ্যাড বই
                </Link>
              </li>

              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "category" ? "active" : ""
                  }`}
                  to="/category"
                  onClick={handleTogglle}
                  // style={{ fontSize: "12px" }}
                >
                  ক্যাটাগরি
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "authors" ? "active" : ""}`}
            to="/authors"
            onClick={handleTogglle}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:users-group-rounded-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text" style={{ fontSize: "18px" }}>
              {" "}
              লেখকগণ{" "}
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "blogs" ? "active" : ""}`}
            to="/blogs"
            onClick={handleTogglle}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:notes-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text" style={{ fontSize: "18px" }}>
              {" "}
              ব্লগ
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "opera" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("opera")}
            to="#sidebarOpera"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarOpera"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:buildings-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text" style={{ fontSize: "18px" }}>
              {" "}
              অপেরা
            </span>
          </Link>

          <div
            className={`collapse ${activeMenu === "opera" ? "show" : ""}`}
            id="sidebarOpera"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "opera" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/opera"
                  ref={activeSubMenu === "opera" ? activeItemRef : null}
                  // style={{ fontSize: "12px" }}
                >
                  অপেরা সেকশন
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "writer-chirkut" ? "active" : ""
                  }`}
                  to="/writer-chirkut"
                  onClick={handleTogglle}
                  // style={{ fontSize: "12px" }}
                >
                  লেখকের চিরকুট
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "opera-clients" ? "active" : ""
                  }`}
                  to="/opera-clients"
                  onClick={handleTogglle}
                  // style={{ fontSize: "12px" }}
                >
                  অপেরা ক্লায়েন্ট
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "contact" ? "active" : ""}`}
            to="/contact"
            onClick={handleTogglle}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:phone-linear"></iconify-icon>
            </span>
            <span className="nav-text" style={{ fontSize: "18px" }}>
              {" "}
              যোগাযোগ{" "}
            </span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "settings" ? "active" : ""}`}
            to="/settings"
            onClick={handleTogglle}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:settings-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text" style={{ fontSize: "18px" }}>
              {" "}
              সেটিংস{" "}
            </span>
          </Link>
        </li>

        <li className="menu-title mt-2">Authentications</li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "user" ? "active" : ""}`}
            to="/user"
            onClick={handleTogglle}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:user-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text" style={{ fontSize: "18px" }}>
              {" "}
              ইউজার{" "}
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "profile" ? "active" : ""}`}
            to="/profile"
            onClick={handleTogglle}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:user-circle-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text" style={{ fontSize: "18px" }}>
              {" "}
              প্রোফাইল{" "}
            </span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link ${activeMenu === "change-password" ? "active" : ""}`}
            to="/change-password"
            onClick={handleTogglle}
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:lock-password-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text" style={{ fontSize: "18px" }}>
              {" "}
              পাসওয়ার্ড পরিবর্তন{" "}
            </span>
          </Link>
        </li>

        {/* <li className="menu-title mt-2">Settings</li> */}
        {/* <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "app-settings" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("app-settings")}
            to="#sidebarAppSettings"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarAppSettings"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:chat-square-like-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text">App Settings</span>
          </Link>
          <div
            className={`collapse ${activeMenu === "app-settings" ? "show" : ""}`}
            id="sidebarAppSettings"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "company-info" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/company-info"
                >
                  Company Info
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "utilities" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/utilities"
                >
                  Utilities
                </Link>
              </li>
            </ul>
          </div>
        </li> */}

        {/* ===== Sign In, Sign Up ===== */}
        <li className="nav-item">
          <Link
            className={`nav-link menu-arrow ${
              activeMenu === "authentication" ? "active" : ""
            }`}
            onClick={() => handleSubMenuToggle("authentication")}
            to="#sidebarAuthentication"
            data-bs-toggle="collapse"
            role="button"
            aria-expanded="false"
            aria-controls="sidebarAuthentication"
          >
            <span className="nav-icon">
              <iconify-icon icon="solar:lock-keyhole-bold-duotone"></iconify-icon>
            </span>
            <span className="nav-text"> Authentication </span>
          </Link>
          <div
            className={`collapse ${
              activeMenu === "authentication" ? "show" : ""
            }`}
            id="sidebarAuthentication"
          >
            <ul className="nav sub-navbar-nav">
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "sign-in" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/sign-in"
                  ref={activeSubMenu === "sign-in" ? activeItemRef : null}
                >
                  Sign In
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "register" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/register"
                >
                  Sign Up
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "reset-password" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/reset-password"
                >
                  Reset Password
                </Link>
              </li>
              <li className="sub-nav-item">
                <Link
                  className={`sub-nav-link  ${
                    activeSubMenu === "forgot-password" ? "active" : ""
                  }`}
                  onClick={handleTogglle}
                  to="/forgot-password"
                >
                  Lock Screen
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* .sub-navbar-nav .sub-nav-link {
    font-size: 12px !important;
  } */
`;

export default UL;
