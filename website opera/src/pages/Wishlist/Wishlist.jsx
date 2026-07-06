import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { useCartContext } from "../../context/CartContext.jsx";
import convertToBanglaNumber from "../../components/banglaConvert/convertToBanglaNumber.jsx";

// const wishlistData = [
//   {
//     id: 58,
//     name: "Vqirk Teur Mocgkcup",
//     img: "/assets/img/product/p-thumb-1.jpg",
//     price: 45.0,
//     oldPrice: null,
//     date: "November 21, 2024",
//     stock: "In stock",
//   },
//   {
//     id: 60,
//     name: "Hd Pry Balir Ptonnrnle",
//     img: "/assets/img/product/p-thumb-2.jpg",
//     price: 18.0,
//     oldPrice: 20.0,
//     date: "November 21, 2024",
//     stock: "In stock",
//   },
//   {
//     id: 61,
//     name: "Beuto minimal Cork",
//     img: "/assets/img/product/p-thumb-3.jpg",
//     price: 18.0,
//     oldPrice: 20.0,
//     date: "November 21, 2024",
//     stock: "In stock",
//   },
// ];

const Wishlist = () => {
  const { wishlist, removeWishlist, addToCart } = useCartContext();

  return (
    <Wrapper>
      <div
        className="breadcumb-wrapper"
        style={{
          backgroundImage: "url('/assets/img/bg/breadcumb-bg.png')",
          padding: "30px 0",
        }}
      >
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title fs-4 fw-normal">উইশলিস্ট</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>
                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  উইশলিস্ট
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wishlist-area space">
        <div className="container">
          <div className="tinv-wishlist woocommerce tinv-wishlist-clear">
            <div className="tinv-header">
              <h2 className="mb-30 fw-normal">উইশলিস্ট</h2>
            </div>
            <form>
              <table className="tinvwl-table-manage-list">
                <thead>
                  <tr>
                    <th className="product-cb">
                      <input
                        type="checkbox"
                        className="global-cb"
                        title="Select all for bulk action"
                      />
                    </th>
                    <th className="product-remove"></th>
                    <th className="product-thumbnail fw-normal">Images</th>
                    <th className="product-name">
                      <span className="tinvwl-full fw-normal">
                        Product Name
                      </span>
                      <span className="tinvwl-mobile">Product</span>
                    </th>
                    <th className="product-price fw-normal">Unit Price</th>
                    <th className="product-date fw-normal">Date Added</th>
                    <th className="product-stock fw-normal">Stock Status</th>
                    <th className="product-action">&nbsp;</th>
                  </tr>
                </thead>
                {/* <tbody>
                  {wishlistData.map((item) => (
                    <tr key={item.id} className="wishlist_item">
                      <td className="product-cb">
                        <input type="checkbox" />
                      </td>

                      <td className="product-remove">
                        <button title="Remove">
                          <i className="fal fa-times"></i>
                        </button>
                      </td>

                      <td className="product-thumbnail">
                        <Link to="/shop-details">
                          <img src={item.img} alt={item.name} />
                        </Link>
                      </td>

                      <td className="product-name fw-normal">
                        <Link to="/shop-details">{item.name}</Link>
                      </td>

                      <td className="product-price fw-normal">
                        {item.oldPrice ? (
                          <>
                            <ins>৳{item.price}</ins> <del>৳{item.oldPrice}</del>
                          </>
                        ) : (
                          <span>৳{item.price}</span>
                        )}
                      </td>

                      <td className="product-date fw-normal">
                        <time>{item.date}</time>
                      </td>

                      <td className="product-stock">
                        <p className="stock in-stock">
                          <span>
                            <i className="fas fa-check"></i>
                          </span>
                          <span className="fw-normal">{item.stock}</span>
                        </p>
                      </td>

                      <td className="product-action">
                        <button className="button vs-btn alt fw-normal">
                          <i className="fal fa-shopping-cart"></i>
                          <span>Add to Cart</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody> */}

                <tbody>
                  {wishlist.length > 0 ? (
                    wishlist.map((item) => (
                      <tr key={item.id} className="wishlist_item">
                        <td className="product-cb">
                          <input type="checkbox" />
                        </td>

                        <td className="product-remove">
                          <button
                            type="button"
                            title="Remove"
                            onClick={() => removeWishlist(item.id)}
                            style={{
                              background: "transparent",
                              border: "none",
                            }}
                          >
                            <i className="fal fa-times"></i>
                          </button>
                        </td>

                        <td className="product-thumbnail">
                          <Link to={`/shop-details/${item.id}`}>
                            <img src={item.img || item.image} alt={item.name} />
                          </Link>
                        </td>

                        <td className="product-name fw-normal">
                          <Link to={`/shop-details/${item.id}`}>
                            {item.title}
                          </Link>
                        </td>

                        <td className="product-price fw-normal">
                          {item.oldPrice ? (
                            <>
                              <ins>৳{convertToBanglaNumber(item.price)}</ins>{" "}
                              <del>৳{convertToBanglaNumber(item.oldPrice)}</del>
                            </>
                          ) : (
                            <span>৳{convertToBanglaNumber(item.price)}</span>
                          )}
                        </td>

                        {/* <td className="product-date fw-normal">
                          <time>{item.date || "-"}</time>
                        </td> */}
                        <td className="product-date fw-normal">
                          <time>
                            {item.addedAt
                              ? new Date(item.addedAt).toLocaleDateString(
                                  "en-BD",
                                  {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                  },
                                )
                              : "-"}
                          </time>
                        </td>

                        {/* <td className="product-stock">
                          <p className="stock in-stock">
                            <span>
                              <i className="fas fa-check"></i>
                            </span>
                            <span className="fw-normal">
                              {item.stock || "In stock"}
                            </span>
                          </p>
                        </td> */}

                        <td className="product-stock">
                          {item.inStock ? (
                            <p className="stock in-stock">
                              <span>
                                <i className="fas fa-check"></i>
                              </span>
                              <span className="fw-normal">In Stock</span>
                            </p>
                          ) : (
                            <p className="stock out-stock">
                              <span>
                                <i className="fas fa-times"></i>
                              </span>
                              <span className="fw-normal">Out of Stock</span>
                            </p>
                          )}
                        </td>
                        {/* 
                        <td className="product-action">
                          <button
                            className="button vs-btn alt fw-normal"
                            onClick={() => {
                              addToCart(
                                item.id,
                                1,
                                item.size || "",
                                item.color || "",
                                {
                                  id: item.id,
                                  title: item.title || item.name,
                                  author: item.author || "",
                                  img: item.img || item.image,
                                  oldPrice: item.oldPrice || item.price,
                                  price: item.price,
                                  inStock: item.inStock || true,
                                },
                              );

                           
                              removeWishlist(item.id);
                            }}
                          >
                            <i className="fal fa-shopping-cart"></i>

                            {item.inStock ? "Add to Cart" : "Out of Stock"}
                          </button>
                        </td> */}
                        <td className="product-action">
                          <button
                            type="button"
                            className="button vs-btn alt fw-normal"
                            disabled={!item.inStock}
                            onClick={() => {
                              if (!item.inStock) return;

                              addToCart(
                                item.id,
                                1,
                                item.size || "",
                                item.color || "",
                                {
                                  id: item.id,
                                  title: item.title || item.name,
                                  author: item.author || "",
                                  img: item.img || item.image,
                                  oldPrice: item.oldPrice || item.price,
                                  price: item.price,

                                  // IMPORTANT
                                  inStock: item.inStock,
                                },
                              );

                              removeWishlist(item.id);
                            }}
                          >
                            <i className="fal fa-shopping-cart"></i>

                            <span>
                              {item.inStock ? "Add to Cart" : "Out of Stock"}
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan="8"
                        style={{ textAlign: "center", color: "#ff3333" }}
                      >
                        Wishlist is empty
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </form>

            <div className="social-buttons">
              <span className="fw-normal">Share on</span>
              <ul>
                <li>
                  <Link
                    to="#"
                    className="social social-facebook"
                    title="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="social social-twitter"
                    title="Twitter"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="social social-pinterest"
                    title="Pinterest"
                  >
                    <i className="fab fa-pinterest-p"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="social social-whatsapp"
                    title="WhatsApp"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="social social-clipboard"
                    title="Clipboard"
                  >
                    <i className="far fa-clipboard"></i>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="social social-email" title="Email">
                    <i className="far fa-envelope"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .tinv-wishlist .social-buttons li a.social {
    background-color: #ff3333;
  }

  .vs-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .out-stock {
    color: #ff3333;
  }
`;

export default Wishlist;
