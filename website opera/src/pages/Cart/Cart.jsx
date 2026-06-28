// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";

// const cartData = [
//   {
//     id: 1,
//     name: "The Muke Guy",
//     img: "/assets/img/shop/product-1-1.jpg",
//     price: 200.0,
//     quantity: "01",
//     total: 200.0,
//   },
//   {
//     id: 2,
//     name: "Neglected Solitary Life",
//     img: "/assets/img/shop/product-1-2.jpg",
//     price: 200.0,
//     quantity: "01",
//     total: 200.0,
//   },
//   {
//     id: 3,
//     name: "Green Journey",
//     img: "/assets/img/shop/product-1-3.jpg",
//     price: 200.0,
//     quantity: "01",
//     total: 200.0,
//   },
// ];

// const Cart = () => {
//   return (
//     <Wrapper>
//       <div
//         className="breadcumb-wrapper"
//         style={{
//           backgroundImage: "url('/assets/img/bg/breadcumb-bg.png')",
//           padding: "30px 0",
//         }}
//       >
//         <div className="container z-index-common">
//           <div className="breadcumb-content">
//             <h1 className="breadcumb-title fs-4 fw-normal">কার্ট</h1>
//             <div className="breadcumb-menu-wrap">
//               <div className="breadcumb-menu">
//                 <span>
//                   <Link className="fw-normal" to="/">
//                     হোম
//                   </Link>
//                 </span>
//                 <span className="fw-normal" style={{ color: "#FF3333" }}>
//                   কার্ট
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="vs-cart-wrapper space-top space-extra-bottom">
//         <div className="container">
//           <div className="woocommerce-notices-wrapper">
//             <div className="woocommerce-message">Shipping costs updated.</div>
//           </div>
//           <form className="woocommerce-cart-form">
//             <table className="cart_table">
//               <thead>
//                 <tr>
//                   <th className="cart-col-image fw-normal">Image</th>
//                   <th className="cart-col-productname fw-normal">
//                     Product Name
//                   </th>
//                   <th className="cart-col-price fw-normal">Price</th>
//                   <th className="cart-col-quantity fw-normal">Quantity</th>
//                   <th className="cart-col-total fw-normal">Total</th>
//                   <th className="cart-col-remove fw-normal">Remove</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartData.map((item) => {
//                   return (
//                     <tr key={item.id} className="cart_item">
//                       <td data-title="Product">
//                         <Link className="cart-productimage" to="/shop">
//                           <img
//                             width="100"
//                             height="95"
//                             src={item.img}
//                             alt={item.name}
//                           />
//                         </Link>
//                       </td>
//                       <td data-title="Name">
//                         <Link className="cart-productname fw-normal" to="/shop">
//                           {item.name}
//                         </Link>
//                       </td>
//                       <td data-title="Price">
//                         <span className="amount fw-normal">
//                           <bdi>
//                             <span>৳</span>
//                             {item.price}
//                           </bdi>
//                         </span>
//                       </td>
//                       <td data-title="Quantity">
//                         <div className="quantity style2">
//                           <div className="quantity__field quantity-container">
//                             <div className="quantity__buttons">
//                               <button className="quantity-plus qty-btn">
//                                 <i className="fal fa-plus"></i>
//                               </button>
//                               <input
//                                 type="number"
//                                 id="quantity"
//                                 className="qty-input fw-normal"
//                                 step="1"
//                                 min="1"
//                                 max="100"
//                                 name="quantity"
//                                 defaultValue="01"
//                                 title="Qty"
//                               />
//                               <button className="quantity-minus qty-btn">
//                                 <i className="fal fa-minus"></i>
//                               </button>
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                       <td data-title="Total">
//                         <span className="amount fw-normal">
//                           <bdi>
//                             <span>৳</span>
//                             {item.total}
//                           </bdi>
//                         </span>
//                       </td>
//                       <td data-title="Remove">
//                         <Link to="#" className="remove">
//                           <i
//                             className="fal fa-trash-alt"
//                             style={{ color: "#FF3333" }}
//                           ></i>
//                         </Link>
//                       </td>
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </form>
//           <div className="row justify-content-end">
//             <div className="col-md-8 col-lg-7 col-xl-6">
//               <h2 className="h4 summary-title fw-normal">Cart Totals</h2>
//               <table className="cart_totals">
//                 <tbody>
//                   <tr className="fw-normal">
//                     <td className="fw-normal">Cart Subtotal</td>
//                     <td data-title="Cart Subtotal">
//                       <span className="amount fw-normal">
//                         <bdi>
//                           <span className="fw-normal">৳</span>600.00
//                         </bdi>
//                       </span>
//                     </td>
//                   </tr>
//                   <tr className="shipping fw-normal">
//                     <th className="fw-normal">Shipping and Handling</th>
//                     <td data-title="Shipping and Handling">
//                       <ul className="woocommerce-shipping-methods list-unstyled">
//                         <li>
//                           <input
//                             type="radio"
//                             id="free_shipping"
//                             name="shipping_method"
//                             className="shipping_method"
//                           />
//                           <label for="free_shipping" className="fw-normal">
//                             Free shipping
//                           </label>
//                         </li>
//                         <li>
//                           <input
//                             type="radio"
//                             id="flat_rate"
//                             name="shipping_method"
//                             className="shipping_method"
//                             checked="checked"
//                           />
//                           <label for="flat_rate" className="fw-normal">
//                             Flat rate
//                           </label>
//                         </li>
//                       </ul>
//                       <p className="woocommerce-shipping-destination fw-normal">
//                         Shipping options will be updated during checkout.
//                       </p>
//                       <form action="#" method="post">
//                         <Link
//                           to="#"
//                           className="shipping-calculator-button fw-normal"
//                         >
//                           Change address
//                         </Link>
//                         <div className="shipping-calculator-form">
//                           <p className="form-row">
//                             <select className="form-select">
//                               <option defaultValue="AR">Argentina</option>
//                               <option defaultValue="AM">Armenia</option>
//                               <option defaultValue="BD" selected="selected">
//                                 Bangladesh
//                               </option>
//                             </select>
//                           </p>
//                           <p>
//                             <select className="form-select">
//                               <option defaultValue="">Select an option…</option>
//                               <option defaultValue="BD-05">Bagerhat</option>
//                               <option defaultValue="BD-01">Bandarban</option>
//                               <option defaultValue="BD-02">Barguna</option>
//                               <option defaultValue="BD-06">Barishal</option>
//                             </select>
//                           </p>
//                           <p className="form-row">
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Town / City"
//                             />
//                           </p>
//                           <p className="form-row">
//                             <input
//                               type="text"
//                               className="form-control"
//                               placeholder="Postcode / ZIP"
//                             />
//                           </p>
//                           <p>
//                             <button className="vs-btn fw-normal">Update</button>
//                           </p>
//                         </div>
//                       </form>
//                     </td>
//                   </tr>
//                 </tbody>
//                 <tfoot>
//                   <tr className="order-total">
//                     <td className="fw-normal">Order Total</td>
//                     <td data-title="Total">
//                       <strong>
//                         <span className="amount fw-normal">
//                           <bdi style={{ color: "#FF3333" }}>
//                             <span>৳</span>600.00
//                           </bdi>
//                         </span>
//                       </strong>
//                     </td>
//                   </tr>
//                 </tfoot>
//               </table>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Wrapper>
//   );
// };

// const Wrapper = styled.section`
//   .woocommerce-notices-wrapper .woocommerce-message {
//     background-color: #ff3333 !important;
//   }
//   .cart_table .cart-productname:hover {
//     color: #ff3333 !important;
//   }
//   .quantity.style2 .qty-btn {
//     border: 1px solid #ff3333 !important;
//     /* background-color: #ff3333 !important; */
//   }
//   .quantity.style2 .qty-btn:hover {
//     background-color: #ff3333 !important;
//   }

//   .cart_table .qty-input {
//     border: 1px solid #ff3333 !important;
//     /* color: var(--title-color); */
//   }

//   .quantity .qty-input:focus {
//     background-color: #ff3333;
//     color: #ffffff;
//     border-color: #ff3333;
//     outline: none;
//   }

//   .cart_totals .shipping-calculator-button {
//     color: #ff3333;
//   }
//   input[type="radio"]:checked ~ label::before {
//     border: 5px solid #ff3333;
//   }
// `;

// export default Cart;

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeItem, setIncrement, setDecrement } = useCartContext();

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
            <h1 className="breadcumb-title fs-4 fw-normal">কার্ট</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>
                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  কার্ট
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vs-cart-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="woocommerce-notices-wrapper">
            <div className="woocommerce-message">Shipping costs updated.</div>
          </div>

          <form className="woocommerce-cart-form">
            <table className="cart_table">
              <thead>
                <tr>
                  <th className="cart-col-image fw-normal">Image</th>
                  <th className="cart-col-productname fw-normal">
                    Product Name
                  </th>
                  <th className="cart-col-price fw-normal">Price</th>
                  <th className="cart-col-quantity fw-normal">Quantity</th>
                  <th className="cart-col-total fw-normal">Total</th>
                  <th className="cart-col-remove fw-normal">Remove</th>
                </tr>
              </thead>

              {/* ================= BODY ================= */}
              <tbody>
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <tr key={item.id} className="cart_item">
                      {/* IMAGE */}
                      <td data-title="Product">
                        <Link className="cart-productimage" to="/shop">
                          <img
                            width="100"
                            height="95"
                            src={item.image}
                            alt={item.name}
                          />
                        </Link>
                      </td>

                      {/* NAME */}
                      <td data-title="Name">
                        <Link className="cart-productname fw-normal" to="/shop">
                          {item.name}
                        </Link>
                      </td>

                      {/* PRICE */}
                      <td data-title="Price">
                        <span className="amount fw-normal">
                          <bdi>
                            <span>৳</span>
                            {Number(item.sPrice || 0).toLocaleString("bn-BD")}
                          </bdi>
                        </span>
                      </td>

                      {/* QUANTITY */}
                      <td data-title="Quantity">
                        <div className="quantity style2">
                          <div className="quantity__field quantity-container">
                            <div className="quantity__buttons">
                              <button
                                type="button"
                                className="quantity-plus qty-btn"
                                onClick={() => setIncrement(item.id)}
                              >
                                <i className="fal fa-plus"></i>
                              </button>

                              <input
                                type="number"
                                className="qty-input fw-normal"
                                value={item.amount}
                                readOnly
                              />

                              <button
                                type="button"
                                className="quantity-minus qty-btn"
                                onClick={() => setDecrement(item.id)}
                              >
                                <i className="fal fa-minus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* TOTAL */}
                      <td data-title="Total">
                        <span className="amount fw-normal">
                          <bdi>
                            <span>৳</span>
                            {Number(
                              item.sPrice * item.amount || 0,
                            ).toLocaleString("bn-BD")}
                          </bdi>
                        </span>
                      </td>

                      {/* REMOVE */}
                      <td data-title="Remove">
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="remove border-0 bg-transparent"
                        >
                          <i
                            className="fal fa-trash-alt"
                            style={{ color: "#FF3333" }}
                          ></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center py-4 fs-2 text-danger"
                    >
                      Cart is empty
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </form>

          {/* ================= TOTAL ================= */}
          {/* <div className="row justify-content-end">
            <div className="col-md-8 col-lg-7 col-xl-6">

              <h2 className="h4 summary-title fw-normal">
                Cart Totals
              </h2>

              <table className="cart_totals">
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td>
                      <span className="amount fw-normal">
                        <bdi>
                          <span>৳</span>
                          {Number(
                            cart.reduce(
                              (acc, item) =>
                                acc +
                                item.sPrice * item.amount,
                              0
                            ) || 0
                          ).toLocaleString("bn-BD")}
                        </bdi>
                      </span>
                    </td>
                  </tr>
                </tbody>

                <tfoot>
                  <tr className="order-total">
                    <td className="fw-normal">Order Total</td>
                    <td>
                      <strong>
                        <span className="amount fw-normal">
                          <bdi style={{ color: "#FF3333" }}>
                            <span>৳</span>
                            {Number(
                              cart.reduce(
                                (acc, item) =>
                                  acc +
                                  item.sPrice *
                                    item.amount,
                                0
                              ) || 0
                            ).toLocaleString("bn-BD")}
                          </bdi>
                        </span>
                      </strong>
                    </td>
                  </tr>
                </tfoot>
              </table>

            </div>
          </div> */}

          <div className="row justify-content-end">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <h2 className="h4 summary-title fw-normal">Cart Totals</h2>
              <table className="cart_totals">
                <tbody>
                  <tr className="fw-normal">
                    <td className="fw-normal">Cart Subtotal</td>
                    <td data-title="Cart Subtotal">
                      <span className="amount fw-normal">
                        <bdi>
                          <span className="fw-normal">৳</span>{" "}
                          {Number(
                            cart.reduce(
                              (acc, item) => acc + item.sPrice * item.amount,
                              0,
                            ) || 0,
                          ).toLocaleString("bn-BD")}
                        </bdi>
                      </span>
                    </td>
                  </tr>
                  <tr className="shipping fw-normal">
                    <th className="fw-normal">Shipping and Handling</th>
                    <td data-title="Shipping and Handling">
                      <ul className="woocommerce-shipping-methods list-unstyled">
                        <li>
                          <input
                            type="radio"
                            id="free_shipping"
                            name="shipping_method"
                            className="shipping_method"
                          />
                          <label for="free_shipping" className="fw-normal">
                            Free shipping
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="flat_rate"
                            name="shipping_method"
                            className="shipping_method"
                            checked="checked"
                          />
                          <label for="flat_rate" className="fw-normal">
                            Flat rate
                          </label>
                        </li>
                      </ul>
                      <p className="woocommerce-shipping-destination fw-normal">
                        Shipping options will be updated during checkout.
                      </p>
                      <form>
                        <Link
                          to="#"
                          className="shipping-calculator-button fw-normal"
                        >
                          Change address
                        </Link>
                        <div className="shipping-calculator-form">
                          <p className="form-row">
                            <select className="form-select">
                              <option defaultValue="AR">Argentina</option>
                              <option defaultValue="AM">Armenia</option>
                              <option defaultValue="BD" selected="selected">
                                Bangladesh
                              </option>
                            </select>
                          </p>
                          <p>
                            <select className="form-select">
                              <option defaultValue="">Select an option…</option>
                              <option defaultValue="BD-05">Bagerhat</option>
                              <option defaultValue="BD-01">Bandarban</option>
                              <option defaultValue="BD-02">Barguna</option>
                              <option defaultValue="BD-06">Barishal</option>
                            </select>
                          </p>
                          <p className="form-row">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Town / City"
                            />
                          </p>
                          <p className="form-row">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Postcode / ZIP"
                            />
                          </p>
                          <p>
                            <button className="vs-btn fw-normal">Update</button>
                          </p>
                        </div>
                      </form>
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr className="order-total">
                    <td className="fw-normal">Order Total</td>
                    <td data-title="Total">
                      <strong>
                        <span className="amount fw-normal">
                          <bdi style={{ color: "#FF3333" }}>
                            <span>৳</span>
                            {Number(
                              cart.reduce(
                                (acc, item) => acc + item.sPrice * item.amount,
                                0,
                              ) || 0,
                            ).toLocaleString("bn-BD")}
                          </bdi>
                        </span>
                      </strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <Link to="/checkout" className="vs-btn w-100">
            Checkout
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .woocommerce-notices-wrapper .woocommerce-message {
    background-color: #ff3333 !important;
  }

  .cart_table .cart-productname:hover {
    color: #ff3333 !important;
  }

  .quantity.style2 .qty-btn {
    border: 1px solid #ff3333 !important;
  }

  .quantity.style2 .qty-btn:hover {
    background-color: #ff3333 !important;
  }

  .cart_table .qty-input {
    border: 1px solid #ff3333 !important;
  }

  .quantity .qty-input:focus {
    background-color: #ff3333;
    color: #fff;
  }

  .cart_totals .shipping-calculator-button {
    color: #ff3333;
  }
`;

export default Cart;
