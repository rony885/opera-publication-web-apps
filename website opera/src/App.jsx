// import "./App.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useEffect, useState } from "react";

// import MobileMenu from "./components/mobileMenu/MobileMenu";
// import Header from "./components/header/Header";
// import Footer from "./components/Footer";
// import Loader from "./components/Loader";
// import BackToTop from "./components/BackToTop";
// import Top from "./components/Top";
// import NotFound from "./components/NotFound";

// import Home from "./pages/home/Home";
// import Product from "./pages/Product/Product";
// import ProductDetails from "./pages/ProductDetails/ProductDetails";
// import Authors from "./pages/Authors/Authors";
// import AuthorDetails from "./pages/AuthorDetails/AuthorDetails";
// import Blog from "./pages/Blog/Blog";
// import BlogDetails from "./pages/BlogDetails/BlogDetails";
// import About from "./pages/About/About";
// import Contact from "./pages/contact/Contact";

// import Wishlist from "./pages/Wishlist/Wishlist";
// import Cart from "./pages/Cart/Cart";
// import Checkout from "./pages/Checkout/Checkout";
// import Profile from "./Accounts/Profile";
// import OrderView from "./Accounts/OrderView";
// import SignUp from "./Accounts/SignUp";
// import Login from "./Accounts/Login";
// import Accounts from "./Accounts/Accounts";
// import AccountDashboard from "./Accounts/AccountDashboard";

// function App() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   // If loading → show only loader
//   // if (isLoading) {
//   //   return <Loader />;
//   // }

//   return (
//     <BrowserRouter>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <>
//           <BackToTop />
//           <MobileMenu closeMenu={closeMenu} menuOpen={menuOpen} />
//           <Header toggleMenu={toggleMenu} closeMenu={closeMenu} />

//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/book" element={<Product />} />
//             <Route path="/book/book-details/:id" element={<ProductDetails />} />
//             <Route path="/authors" element={<Authors />} />
//             <Route
//               path="/authors/author-details/:id"
//               element={<AuthorDetails />}
//             />
//             <Route path="/blog" element={<Blog />} />
//             <Route path="/blog/blog-details/:id" element={<BlogDetails />} />
//             <Route path="/opera" element={<About />} />
//             <Route path="/contact" element={<Contact />} />

//             <Route path="/wishlist" element={<Wishlist />} />
//             <Route path="/cart" element={<Cart />} />
//             <Route path="/checkout" element={<Checkout />} />

//             <Route path="/profile" element={<Profile />} />
//             <Route path="/order-view" element={<OrderView />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/registration" element={<SignUp />} />
//             <Route path="/accounts" element={<Accounts />} />

//             <Route path="*" element={<NotFound />} />
//           </Routes>

//           <Top />
//           <Footer />
//         </>
//       )}
//     </BrowserRouter>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import MobileMenu from "./components/mobileMenu/MobileMenu";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
import Top from "./components/Top";
import NotFound from "./components/NotFound";

import Home from "./pages/home/Home";
import Product from "./pages/Product/Product";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Authors from "./pages/Authors/Authors";
import AuthorDetails from "./pages/AuthorDetails/AuthorDetails";
import Blog from "./pages/Blog/Blog";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import About from "./pages/About/About";
import Contact from "./pages/contact/Contact";

import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import Profile from "./Accounts/Profile";
import OrderView from "./Accounts/OrderView";
import SignUp from "./Accounts/SignUp";
import Login from "./Accounts/Login";
import Accounts from "./Accounts/Accounts";
import AccountDashboard from "./Accounts/AccountDashboard";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // If loading → show only loader
  // if (isLoading) {
  //   return <Loader />;
  // }

  return (
    <BrowserRouter>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BackToTop />
          <MobileMenu closeMenu={closeMenu} menuOpen={menuOpen} />
          <Header toggleMenu={toggleMenu} closeMenu={closeMenu} />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/book" element={<Product />} />

            <Route path="/book/book-details/:id" element={<ProductDetails />} />

            <Route path="/authors" element={<Authors />} />

            <Route
              path="/authors/author-details/:id"
              element={<AuthorDetails />}
            />

            <Route path="/blog" element={<Blog />} />

            <Route path="/blog/blog-details/:id" element={<BlogDetails />} />

            <Route path="/opera" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/wishlist" element={<Wishlist />} />

            <Route path="/cart" element={<Cart />} />

            <Route path="/checkout" element={<Checkout />} />
            {/* Normal Profile page */}
            <Route path="/profile" element={<Profile />} />

            {/* Normal Order page */}
            <Route path="/order-view" element={<OrderView />} />

            {/* ============================= */}
            {/* ACCOUNT NESTED ROUTES */}
            {/* ============================= */}

            <Route path="/accounts" element={<Accounts />}>
              {/* Dashboard */}
              <Route index element={<AccountDashboard />} />

              {/* Profile */}
              <Route path="profile" element={<Profile />} />

              {/* Orders */}
              <Route path="order-view" element={<OrderView />} />

              {/* Address */}
              <Route path="address" element={<div>Address Page</div>} />

              {/* Account Details */}
              <Route path="edit" element={<div>Account Details Page</div>} />
            </Route>

            {/* Login */}
            <Route path="/login" element={<Login />} />

            {/* Registration */}
            <Route path="/registration" element={<SignUp />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Top />
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
