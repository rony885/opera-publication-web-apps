import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import convertToBanglaNumber from "../../components/banglaConvert/convertToBanglaNumber";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart } = useCartContext();
  console.log("CART:", cart);

  const subtotal = cart.reduce(
    (acc, item) => acc + item.sPrice * item.amount,
    0,
  );

  // const totalItems = cart.reduce((acc, item) => acc + item.amount, 0);

  const shipping = subtotal > 1000 ? 0 : 60;
  const total = subtotal + shipping;

  const handlePlaceOrder = () => {
    if (cart.length === 0) return alert("Cart is empty");

    const orderData = {
      id: Date.now(),
      items: cart,
      subtotal,
      shipping,
      total,
      date: new Date().toISOString(),
    };

    // 👇 THIS IS WHAT YOU WANTED
    console.log("🛒 PLACE ORDER DATA:", orderData);

    // existing orders
    const oldOrders = JSON.parse(localStorage.getItem("ecomOrder")) || [];

    const updatedOrders = [...oldOrders, orderData];

    localStorage.setItem("ecomOrder", JSON.stringify(updatedOrders));

    // clear cart after order
    localStorage.setItem("ecomCart", JSON.stringify([]));

    alert("Order placed successfully!");

    // window.location.href = "/";
    navigate("/"); // ✅ Correct
  };

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
            <h1 className="breadcumb-title fs-4 fw-normal">চেকআউট</h1>
            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link to="/" className="fw-normal">
                    হোম
                  </Link>
                </span>
                <span style={{ color: "#FF3333" }}>চেকআউট</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="vs-checkout-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="woocommerce-form-login-toggle">
            <div className="woocommerce-info fw-normal">
              Returning customer?
              <Link to="#" className="showlogin fw-normal">
                Click here to login
              </Link>
            </div>
          </div>
          <form className="woocommerce-form-login">
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username or email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <div className="custom-checkbox">
                    <input type="checkbox" id="remembermylogin" />
                    <label for="remembermylogin">Remember Me</label>
                  </div>
                </div>
                <div className="form-group">
                  <button type="submit" className="vs-btn">
                    Login
                  </button>
                  <p className="fs-xs mt-2 mb-0">
                    <Link className="text-reset" to="#">
                      Lost your password?
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
          <div className="woocommerce-form-coupon-toggle">
            <div className="woocommerce-info">
              Have a coupon?
              <Link to="#" className="showcoupon">
                Click here to enter your code
              </Link>
            </div>
          </div>
          <form className="woocommerce-form-coupon">
            <div className="row">
              <div className="col-lg-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Write your coupon code"
                  />
                </div>
                <div className="form-group">
                  <button type="submit" className="vs-btn">
                    Apply coupon
                  </button>
                </div>
              </div>
            </div>
          </form>
          <form className="woocommerce-checkout mt-40">
            <div className="row">
              <h3 className="fw-normal">Billing Details</h3>

              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                  <select className="form-select">
                    <option>Bangladesh (BD)</option>
                    <option>United Kingdom (UK)</option>
                    <option>United State (US)</option>
                    <option>Australia (AU)</option>
                    <option>Germany (DE)</option>
                  </select>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Town / City"
                  />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postcode / Zip"
                  />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone number"
                  />
                </div>
                {/* <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                  <input type="checkbox" id="accountNewCreate" />
                  <label for="accountNewCreate">Create An Account?</label>
                </div> */}
              </div>

              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 form-group">
                  <input type="checkbox" id="accountNewCreate" />
                  <label for="accountNewCreate">Create An Account?</label>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 form-group"></div>
                <div className="col-lg-4 col-md-12 col-sm-12 form-group"></div>
              </div>
            </div>
          </form>

          <h4 className="mt-4 pt-lg-2">Your Order</h4>
          <form className="woocommerce-cart-form">
            <table className="cart_table mb-20">
              <thead>
                <tr>
                  <th className="cart-col-image">Image</th>
                  <th className="cart-col-productname">Product Name</th>
                  <th className="cart-col-price">Price</th>
                  <th className="cart-col-quantity">Quantity</th>
                  <th className="cart-col-total">Total</th>
                </tr>
              </thead>
              {/* <tbody>
                <tr className="cart_item">
                  <td data-title="Product">
                    <Link className="cart-productimage" to="/shop">
                      <img
                        width="91"
                        height="91"
                        src="/assets/img/shop/product-1-3.jpg"
                        alt="Imagee"
                      />
                    </Link>
                  </td>
                  <td data-title="Name">
                    <Link className="cart-productname" to="/shop">
                      Present Trop Ical
                    </Link>
                  </td>
                  <td data-title="Price">
                    <span className="amount">
                      <bdi>
                        <span>$</span>200
                      </bdi>
                    </span>
                  </td>
                  <td data-title="Quantity">
                    <strong className="product-quantity">01</strong>
                  </td>
                  <td data-title="Total">
                    <span className="amount">
                      <bdi>
                        <span>$</span>200
                      </bdi>
                    </span>
                  </td>
                </tr>
              </tbody> */}
              <tbody>
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <tr key={item.id} className="cart_item">
                      {/* IMAGE */}
                      <td data-title="Product">
                        <Link className="cart-productimage" to="/shop">
                          <img
                            width="91"
                            height="91"
                            src={item.image}
                            alt={item.name}
                          />
                        </Link>
                      </td>

                      {/* NAME */}
                      <td data-title="Name">
                        <Link className="cart-productname" to="/shop">
                          {item.name}
                        </Link>
                      </td>

                      {/* PRICE */}
                      <td data-title="Price">
                        <span className="amount">
                          <bdi>
                            <span>৳</span>
                            {convertToBanglaNumber(item.sPrice)}
                          </bdi>
                        </span>
                      </td>

                      {/* QUANTITY */}
                      <td data-title="Quantity">
                        <strong className="product-quantity">
                          {convertToBanglaNumber(item.amount)}
                        </strong>
                      </td>

                      {/* TOTAL */}
                      <td data-title="Total">
                        <span className="amount">
                          <bdi>
                            <span>৳</span>
                            {convertToBanglaNumber(item.sPrice * item.amount)}
                          </bdi>
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center text-danger py-3">
                      No items in cart
                    </td>
                  </tr>
                )}
              </tbody>

              <tfoot className="checkout-ordertable">
                <tr className="cart-subtotal">
                  <th>Subtotal</th>
                  <td data-title="Subtotal" colspan="4">
                    <span className="woocommerce-Price-amount amount">
                      <bdi>
                        <span className="woocommerce-Price-currencySymbol fw-normal">
                          ৳
                        </span>
                        {convertToBanglaNumber(subtotal)}
                      </bdi>
                    </span>
                  </td>
                </tr>
                <tr className="woocommerce-shipping-totals shipping">
                  <th>Shipping</th>
                  {/* <td data-title="Shipping" colspan="4">
                    Enter your address to view shipping options.
                  </td> */}
                  <td data-title="Shipping" colSpan={4}>
                    {shipping === 0 ? (
                      <span className="text-success fw-bold">
                        ফ্রি ডেলিভারি
                      </span>
                    ) : (
                      <span>
                        <span className="fw-normal">৳</span>
                        {convertToBanglaNumber(shipping)}
                      </span>
                    )}
                  </td>
                </tr>
                <tr className="order-total">
                  <th>Total</th>
                  <td data-title="Total" colspan="4">
                    <strong>
                      <span className="woocommerce-Price-amount amount">
                        <bdi>
                          <span className="woocommerce-Price-currencySymbol fw-normal">
                            ৳
                          </span>
                          {convertToBanglaNumber(total)}
                        </bdi>
                      </span>
                    </strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </form>

          <div className="mt-lg-3 mb-30">
            <div className="woocommerce-checkout-payment">
              <ul className="wc_payment_methods payment_methods methods">
                <li className="wc_payment_method payment_method_bacs">
                  <input
                    id="payment_method_bacs"
                    type="radio"
                    className="input-radio"
                    name="payment_method"
                    defaultValue="bacs"
                    checked="checked"
                  />
                  <label for="payment_method_bacs">Direct bank transfer</label>
                  <div className="payment_box payment_method_bacs">
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      will not be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                </li>
                <li className="wc_payment_method payment_method_cheque">
                  <input
                    id="payment_method_cheque"
                    type="radio"
                    className="input-radio"
                    name="payment_method"
                    defaultValue="cheque"
                  />
                  <label for="payment_method_cheque">Cheque Payment</label>
                  <div className="payment_box payment_method_cheque">
                    <p>
                      Please send Link check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                </li>
                <li className="wc_payment_method payment_method_cod">
                  <input
                    id="payment_method_cod"
                    type="radio"
                    className="input-radio"
                    name="payment_method"
                  />
                  <label for="payment_method_cod">
                    Credit Cart
                    <img
                      src="/assets/img/others/credit-payment.png"
                      alt="Imagee"
                    />
                  </label>
                  <div className="payment_box payment_method_cod">
                    <p>Pay with cash upon delivery.</p>
                  </div>
                </li>
                <li className="wc_payment_method payment_method_paypal">
                  <input
                    id="payment_method_paypal"
                    type="radio"
                    className="input-radio"
                    name="payment_method"
                    defaultValue="paypal"
                  />
                  <label for="payment_method_paypal">Paypal</label>
                  <div className="payment_box payment_method_paypal">
                    <p>
                      Pay via PayPal; you can pay with your credit card if you
                      don’t have Link PayPal account.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="form-row place-order">
                <button
                  type="submit"
                  className="vs-btn"
                  onClick={handlePlaceOrder}
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .woocommerce-form-login-toggle .woocommerce-info {
    background-color: #ff3333 !important;
  }
  .woocommerce-message,
  .woocommerce-info {
    background-color: #ff3333 !important;
  }
  .checkout-ordertable .order-total .amount {
    color: #ff3333 !important;
  }
  input[type="radio"]:checked ~ label::before {
    border: 5px solid #ff3333 !important;
  }
  input[type="radio"] ~ label::before {
    content: "\f111";

    border: 1px solid #ff3333 !important;
  }
  input[type="checkbox"]:checked ~ label:before {
    content: "\f00c";

    background-color: #ff3333 !important;
    border-color: #ff3333 !important;
  }
`;

export default Checkout;
