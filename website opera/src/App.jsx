// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
// import MobileMenu from "./components/mobileMenu/MobileMenu";
// import Header from "./components/header/Header";
// import Home from "./pages/home/Home";
// import Footer from "./components/Footer";
// import Loader from "./components/Loader";
// import BackToTop from "./components/BackToTop";
// import { useEffect, useState } from "react";

// function App() {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="App">
//       <BrowserRouter>
//         {isLoading ? (
//           <Loader />
//         ) : (
//           <>
//             <BackToTop />
//             <MobileMenu />
//             <Header />
//             <Routes>
//               <Route path="/" element={<Home />}></Route>
//             </Routes>

//             <Footer />
//           </>
//         )}
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import BackToTop from "./components/BackToTop";
import { useEffect, useState } from "react";
import NotFound from "./components/NotFound";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/Blog/Blog";
import Product from "./pages/Product/Product";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import Vendor from "./pages/Vendor/Vendor";
import VendorDetails from "./pages/VendorDetails/VendorDetails";
import Wishlist from "./pages/Wishlist/Wishlist";
import Cart from "./pages/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import About from "./pages/About/About";
import Top from "./components/Top";

import Authors from "./pages/Authors/Authors";
import AuthorDetails from "./pages/AuthorDetails/AuthorDetails";

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
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Product />} />
            <Route path="/shop-details/:id" element={<ProductDetails />} />
            <Route path="/vendor" element={<Vendor />} />
            <Route path="/vendor-details" element={<VendorDetails />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog-details/:id" element={<BlogDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/authors" element={<Authors />} />
            <Route path="/author-details/:id" element={<AuthorDetails />} />
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
