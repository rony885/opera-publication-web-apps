import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ActivityTimeline from "./components/ActivityTimeline/ActivityTimeline";
import SidebarTheme from "./components/SidebarTheme/SidebarTheme";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";
import Loader from "./components/Loader";
import NotFound from "./components/NotFound";

import ProductsList from "./pages/Books/ProductsList";
import AddProduct from "./pages/Books/AddProduct";
import ProductEdit from "./pages/Books/ProductEdit";
import Category from "./pages/Books/Category";

import Settings from "./pages/Settings/Settings";

import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import ResetPassword from "./pages/Authentication/ResetPassword";
import ForgotPassword from "./pages/Authentication/ForgotPassword";

import CompanySettings from "./pages/Settings/CompanySettings";
import Utilities from "./pages/Settings/Utilities";

import Dashboard from "./pages/Dashboard/Dashboard";
import Home from "./pages/Home/Home";
import AddHome from "./pages/Home/AddHome";
import UpdateHome from "./pages/Home/UpdateHome";

import Authors from "./pages/Authors/Authors";
import AddAuthor from "./pages/Authors/AddAuthor";
import UpdateAuthor from "./pages/Authors/UpdateAuthor";

import Blog from "./pages/Blog/Blog";
import AddBlog from "./pages/Blog/AddBlog";
import UpdateBlog from "./pages/Blog/UpdateBlog";

import Contact from "./pages/Contact/Contact";

import AllUsers from "./pages/Users/AllUsers";
import AddUser from "./pages/Users/AddUser";
import UpdateUser from "./pages/Users/UpdateUser";
import Profile from "./pages/Authentication/Profile";
import ChangePassword from "./pages/Authentication/ChangePassword";
import Opera from "./pages/Opera/Opera";
import OperaClients from "./pages/Opera/OperaClients";
// import AddOperaClient from "./pages/Opera/AddOperaClient";
import WriterChirkut from "./pages/Opera/WriterChirkut";
import AddWriterChirkut from "./pages/Opera/AddWriterChirkut";
import UpdateWriterChirkut from "./pages/Opera/UpdateWriterChirkut";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSidebarEnabled, setIsSidebarEnabled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const htmlElement = document.documentElement;
      const currentSize = htmlElement.getAttribute("data-menu-size");

      if (window.innerWidth <= 1140) {
        if (currentSize !== "hidden") {
          htmlElement.setAttribute("data-menu-size", "hidden");
        }
      } else {
        htmlElement.setAttribute("data-menu-size", "sm-hover-active");
      }
    };

    // Run once when mounted
    handleResize();

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const htmlElement = document.documentElement;
  const bodyElement = document.body;

  // Handle toggle logic
  const handleToggle = () => {
    const dataMenuSize = htmlElement.getAttribute("data-menu-size");

    // Only execute the toggle logic if datamenusize is "hidden"
    if (dataMenuSize === "hidden") {
      if (isSidebarEnabled) {
        htmlElement.classList.remove("sidebar-enable");
        bodyElement.style.overflow = ""; // Reset overflow
      } else {
        htmlElement.classList.add("sidebar-enable");
        bodyElement.style.overflow = "hidden"; // Hide overflow
      }

      setIsSidebarEnabled(!isSidebarEnabled); // Toggle sidebar state
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <BrowserRouter>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="wrapper">
            <Header handleTogglle={handleToggle} />
            <ActivityTimeline />
            <SidebarTheme />
            <SidebarMenu handleTogglle={handleToggle} />

            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/home-list" element={<Home />}></Route>
              <Route path="/create-home" element={<AddHome />}></Route>
              <Route path="/update-home" element={<UpdateHome />}></Route>

              <Route path="/book-list" element={<ProductsList />}></Route>
              <Route path="/add-book" element={<AddProduct />}></Route>
              <Route path="/book-update" element={<ProductEdit />}></Route>

              <Route path="/category" element={<Category />}></Route>

              <Route path="/authors" element={<Authors />}></Route>
              <Route path="/add-author" element={<AddAuthor />}></Route>
              <Route path="/author-update" element={<UpdateAuthor />}></Route>

              <Route path="/blogs" element={<Blog />}></Route>
              <Route path="/create-blog" element={<AddBlog />}></Route>
              <Route path="/blog-update" element={<UpdateBlog />}></Route>

              <Route path="/opera" element={<Opera />}></Route>
              <Route path="/writer-chirkut" element={<WriterChirkut />}></Route>
              <Route
                path="/add-writer-chirkut"
                element={<AddWriterChirkut />}
              ></Route>
              <Route
                path="/writer-chirkut-update"
                element={<UpdateWriterChirkut />}
              ></Route>
              <Route path="/opera-clients" element={<OperaClients />}></Route>
              {/* <Route path="/add-client" element={<AddOperaClient />}></Route> */}

              <Route path="/contact" element={<Contact />}></Route>

              <Route path="/settings" element={<Settings />}></Route>

              <Route path="/user" element={<AllUsers />}></Route>
              <Route path="/create-user" element={<AddUser />}></Route>
              <Route path="/user-update" element={<UpdateUser />}></Route>
              <Route path="/profile" element={<Profile />}></Route>
              <Route
                path="/change-password"
                element={<ChangePassword />}
              ></Route>

              <Route path="/sign-in" element={<SignIn />}></Route>
              <Route path="/register" element={<SignUp />}></Route>
              <Route path="/reset-password" element={<ResetPassword />}></Route>
              <Route
                path="/forgot-password"
                element={<ForgotPassword />}
              ></Route>

              <Route path="/company-info" element={<CompanySettings />}></Route>
              <Route path="/utilities" element={<Utilities />}></Route>

              <Route path="*" element={<NotFound />}></Route>
            </Routes>
          </div>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
