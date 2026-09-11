import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import convertToBanglaNumber from "../../components/banglaConvert/convertToBanglaNumber";

const Cart = () => {
  const { cart, removeCart, clearCart, setIncrement, setDecrement } =
    useCartContext();

  const [shippingCost, setShippingCost] = useState(60);
  const [showOrderModal, setShowOrderModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");

  // For Modal
  const bookTotal = cart.reduce(
    (acc, item) => acc + Number(item.sPrice || 0) * Number(item.amount || 0),
    0,
  );

  const orderTotal = bookTotal + shippingCost;

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
        {/* <div className="container"> */}
        <div className="container-fluid">
          <div className="woocommerce-notices-wrapper">
            {/* <div className="woocommerce-message">Shipping costs updated.</div> */}
            <div className="woocommerce-message text-center">
              Checkout Summary
            </div>
          </div>

          <div className="row">
            <div className="col-lg-7 col-md-12 cl-sm-12">
              <form className="woocommerce-cart-form">
                <table className="cart_table">
                  <thead>
                    <tr>
                      <th className="cart-col-image fw-normal">Image</th>
                      <th className="cart-col-productname fw-normal">
                        Book Name
                      </th>
                      <th className="cart-col-price fw-normal">Price</th>
                      <th className="cart-col-quantity fw-normal">Quantity</th>
                      <th className="cart-col-total fw-normal">Total</th>
                      <th
                        className="cart-col-remove fw-normal text-danger"
                        style={{ cursor: "pointer" }}
                        onClick={clearCart}
                      >
                        Remove Cart
                      </th>
                    </tr>
                  </thead>

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
                            <Link
                              className="cart-productname fw-normal"
                              to="/shop"
                            >
                              {item.name}
                            </Link>
                          </td>

                          {/* PRICE */}
                          <td data-title="Price">
                            <span className="amount fw-normal">
                              <bdi>
                                <span>৳</span>
                                {Number(item.sPrice || 0).toLocaleString(
                                  "bn-BD",
                                )}
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
                                    type="text"
                                    className="qty-input fw-normal"
                                    // value={item.amount}
                                    value={convertToBanglaNumber(item.amount)}
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
                              onClick={() => removeCart(item.id)}
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
            </div>

            <div className="col-lg-5 col-md-12 cl-sm-12">
              {/* <h2 className="h4 summary-title fw-normal text-center fs-4">
                Cart Totals
                কার্টের মোট মূল্য
              </h2> */}
              <table className="cart_totals">
                <tbody>
                  <tr className="shipping fw-normal">
                    <th className="fw-normal">
                      <ul className="woocommerce-shipping-methods list-unstyled">
                        {/* Inside Dhaka */}
                        <li>
                          <input
                            type="radio"
                            id="inside_dhaka"
                            name="shipping_method"
                            className="shipping_method"
                            checked={shippingCost === 60}
                            onChange={() => setShippingCost(60)}
                          />

                          <label htmlFor="inside_dhaka" className="fw-normal">
                            Inside Dhaka
                          </label>
                        </li>

                        {/* Outside Dhaka */}
                        <li>
                          <input
                            type="radio"
                            id="outside_dhaka"
                            name="shipping_method"
                            className="shipping_method"
                            checked={shippingCost === 120}
                            onChange={() => setShippingCost(120)}
                          />

                          <label htmlFor="outside_dhaka" className="fw-normal">
                            Outside Dhaka
                          </label>
                        </li>
                      </ul>
                    </th>

                    <td data-title="Shipping and Handling">
                      <p className="woocommerce-shipping-destination fw-normal">
                        Shipping options will be updated during checkout.
                      </p>

                      <form>
                        <Link
                          to="#"
                          className="shipping-calculator-button fw-normal"
                        >
                          বিলিং তথ্য
                        </Link>

                        <div className="shipping-calculator-form">
                          {/* Name + Phone */}
                          <div className="row">
                            <div className="col-md-12 mb-0">
                              <p className="form-row">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="নাম"
                                />
                              </p>
                            </div>

                            <div className="col-md-12 mb-0">
                              <p className="form-row">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="ফোন"
                                />
                              </p>
                            </div>
                          </div>

                          {/* District + Upazila */}
                          <div className="row mb-3">
                            <div className="col-md-6">
                              <p className="form-row">
                                <select className="form-select">
                                  <option value="">জেলা সিলেক্ট করুন</option>
                                  <option value="dhaka">Dhaka</option>
                                  <option value="mymensingh">Mymensingh</option>
                                </select>
                              </p>
                            </div>
                            {/* সিলেক্ট */}
                            <div className="col-md-6">
                              <p className="form-row">
                                <select className="form-select">
                                  <option value="">উপজেলা সিলেক্ট করুন</option>
                                  <option value="gulshan">Gulshan</option>
                                  <option value="gazipur">Gazipur</option>
                                  <option value="mymensingh-sadar">
                                    Mymensingh Sadar
                                  </option>
                                </select>
                              </p>
                            </div>
                          </div>

                          <div className="row">
                            <div className="col-md-12 mb-0">
                              <p className="form-row">
                                <textarea
                                  className="form-control"
                                  rows="1"
                                  placeholder="আপনার সম্পূর্ণ ঠিকানা লিখুন"
                                ></textarea>
                              </p>
                            </div>
                          </div>
                        </div>
                      </form>
                    </td>
                  </tr>
                </tbody>
                {/* <h2 className="fs-5">Checkout Summary</h2> */}
                <tfoot>
                  {/* Book Total */}
                  <tr className="order-total">
                    <td className="fw-normal">বইয়ের মোট মূল্য</td>

                    <td data-title="Total">
                      <strong>
                        <span className="amount fw-normal">
                          <bdi style={{ color: "#FF3333" }}>
                            <span>৳</span>{" "}
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

                  {/* Shipping Charge */}
                  <tr className="shipping-total">
                    <td className="fw-normal">ডেলিভারি চার্জ</td>

                    <td data-title="Shipping">
                      <strong>
                        <span className="amount fw-normal">
                          <bdi style={{ color: "#FF3333" }}>
                            <span>৳</span>{" "}
                            {shippingCost.toLocaleString("bn-BD")}
                          </bdi>
                        </span>
                      </strong>
                    </td>
                  </tr>

                  {/* Order Total */}
                  <tr className="order-total">
                    <td className="fw-normal">অর্ডার টোটাল</td>

                    <td data-title="Total">
                      <strong>
                        <span className="amount fw-normal">
                          <bdi style={{ color: "#FF3333" }}>
                            <span>৳</span>{" "}
                            {Number(
                              (cart.reduce(
                                (acc, item) => acc + item.sPrice * item.amount,
                                0,
                              ) || 0) + shippingCost,
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

          {/* <div className="d-flex justify-content-end mt-3">
            <Link
              to="/checkout"
              className="vs-btn fw-normal fs-5"
              onClick={() => setShowOrderModal(true)}
            >
              চেকআউট
            </Link>
          </div> */}

          <div className="d-flex justify-content-end mt-3">
            <button
              type="button"
              className="vs-btn fw-normal fs-5 border-0"
              onClick={() => setShowOrderModal(true)}
            >
              {/* চেকআউট */}
              অর্ডার কনফার্ম করুন
            </button>
          </div>

          {/* ===== ORDER SUMMARY MODAL ===== */}
          {showOrderModal && (
            <div
              className="order-modal-overlay"
              onClick={() => setShowOrderModal(false)}
            >
              <div className="order-modal" onClick={(e) => e.stopPropagation()}>
                <button
                  type="button"
                  className="order-modal-close"
                  onClick={() => setShowOrderModal(false)}
                >
                  ×
                </button>

                <div className="order-modal-icon">
                  <i className="fas fa-check"></i>
                </div>

                {/* <h2>Order Summary</h2> */}

                {/* <p className="order-success-message">
                  Thank you for your order!
                </p> */}
                <h2 className="fs-4">আলহামদুলিল্লাহ আপনার অর্ডারটি</h2>
                <h2 className="fs-5">সফলভাবে গ্রহণ করা হয়েছে</h2>

                <p className="order-success-message">
                  আমাদের উপর আস্থা রাখার জন্য আপনাকে অসংখ্য ধন্যবাদ। আমাদের
                  প্রতিনিধি খুব শীঘ্রই কল করে আপনার অর্ডারটি কনফার্ম করবেন।
                  অনুগ্রহ করে ফোনটি সাথে রাখুন।
                </p>

                {/* ================= BOOK LIST ================= */}
                <div className="order-summary-list d-none">
                  {cart.length > 0 ? (
                    cart.map((item) => (
                      <div className="order-summary-item" key={item.id}>
                        <div className="order-item-image">
                          <img src={item.image} alt={item.name} />
                        </div>

                        <div className="order-item-info">
                          <h4>{item.name}</h4>

                          <span>
                            {convertToBanglaNumber(item.amount)} × ৳
                            {Number(item.sPrice || 0).toLocaleString("bn-BD")}
                          </span>
                        </div>

                        <div className="order-item-total">
                          ৳
                          {Number(
                            Number(item.sPrice || 0) * Number(item.amount || 0),
                          ).toLocaleString("bn-BD")}
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-danger text-center">আপনার কার্ট খালি।</p>
                  )}
                </div>

                {/* ================= PAYMENT METHOD ================= */}
                <div className="order-payment-method mt-3 text-start">
                  <h4 className="mb-2 fs-6 fw-medium">Payment Method</h4>

                  <div className="row g-2">
                    {/* Cash on Delivery */}
                    <div className="col-6">
                      <label
                        className={`payment-option d-flex align-items-center gap-2 p-2 border rounded ${
                          paymentMethod === "Cash on Delivery" ? "active" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="Cash on Delivery"
                          checked={paymentMethod === "Cash on Delivery"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="d-none"
                        />

                        <i className="fas fa-money-bill-wave payment-icon"></i>

                        <span>
                          <strong className="d-block small fw-medium">
                            Cash on Delivery
                          </strong>
                          <small className="text-muted d-block">
                            পণ্য হাতে পেয়ে পেমেন্ট
                          </small>
                        </span>
                      </label>
                    </div>

                    {/* bKash */}
                    <div className="col-6">
                      <label
                        className={`payment-option d-flex align-items-center gap-2 p-2 border rounded ${
                          paymentMethod === "bKash" ? "active" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="bKash"
                          checked={paymentMethod === "bKash"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="d-none"
                        />

                        <i className="fas fa-mobile-alt payment-icon"></i>

                        <span>
                          <strong className="d-block small fw-medium">
                            bKash
                          </strong>
                          <small className="text-muted d-block">
                            bKash দিয়ে পেমেন্ট
                          </small>
                        </span>
                      </label>
                    </div>

                    {/* Nagad */}
                    <div className="col-6">
                      <label
                        className={`payment-option d-flex align-items-center gap-2 p-2 border rounded ${
                          paymentMethod === "Nagad" ? "active" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="Nagad"
                          checked={paymentMethod === "Nagad"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="d-none"
                        />

                        <i className="fas fa-wallet payment-icon"></i>

                        <span>
                          <strong className="d-block small fw-medium">
                            Nagad
                          </strong>
                          <small className="text-muted d-block">
                            Nagad দিয়ে পেমেন্ট
                          </small>
                        </span>
                      </label>
                    </div>

                    {/* Rocket */}
                    <div className="col-6">
                      <label
                        className={`payment-option d-flex align-items-center gap-2 p-2 border rounded ${
                          paymentMethod === "Rocket" ? "active" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="Rocket"
                          checked={paymentMethod === "Rocket"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="d-none"
                        />

                        <i className="fas fa-paper-plane payment-icon"></i>

                        <span>
                          <strong className="d-block small fw-medium">
                            Rocket
                          </strong>
                          <small className="text-muted d-block">
                            Rocket দিয়ে পেমেন্ট
                          </small>
                        </span>
                      </label>
                    </div>

                    {/* Card */}
                    <div className="col-6">
                      <label
                        className={`payment-option d-flex align-items-center gap-2 p-2 border rounded ${
                          paymentMethod === "Card" ? "active" : ""
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="Card"
                          checked={paymentMethod === "Card"}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="d-none"
                        />

                        <i className="fas fa-credit-card payment-icon"></i>

                        <span>
                          <strong className="d-block small fw-medium">
                            Card
                          </strong>
                          <small className="text-muted d-block">
                            Debit / Credit Card
                          </small>
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* ================= TOTALS ================= */}
                <div className="order-summary-totals">
                  {/* Book Total */}
                  <div className="summary-row">
                    {/* <span>বইয়ের মোট মূল্য</span> */}
                    <span>Sub Total</span>

                    <strong>৳{bookTotal.toLocaleString("bn-BD")}</strong>
                  </div>

                  {/* Delivery */}
                  <div className="summary-row">
                    {/* <span>ডেলিভারি চার্জ</span> */}
                    <span>Delivery Charge</span>

                    <strong>৳{shippingCost.toLocaleString("bn-BD")}</strong>
                  </div>

                  {/* Order Total */}
                  <div className="summary-row summary-grand-total">
                    {/* <span>অর্ডার টোটাল</span> */}
                    <span>Total Amount</span>

                    <strong>৳{orderTotal.toLocaleString("bn-BD")}</strong>
                  </div>
                  {/* Payable Total */}
                  <div className="summary-row summary-grand-total">
                    {/* <span>পেঅ্যা্বেল টোটাল</span> */}
                    <span>Payable Amount</span>

                    <strong>৳{orderTotal.toLocaleString("bn-BD")}</strong>
                  </div>
                </div>

                <Link
                  to="/profile"
                  className="vs-btn order-ok-button border-0"
                  onClick={() => setShowOrderModal(false)}
                >
                  Okay
                </Link>
              </div>
            </div>
          )}
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

  .cart_totals th:first-child,
  .cart_totals td:first-child {
    width: 25% !important;
    /* background-color: var(--body-color);
    font-weight: 700;
    font-size: 16px;
    color: var(--title-color); */
  }
  .shipping-calculator-form .form-select {
    border: 1px solid #ff3333 !important;
    box-shadow: none !important;
    background-color: #f8ebe5 !important;
    color: #333;
    cursor: pointer;
  }

  /* Hover */
  .shipping-calculator-form .form-select:hover {
    border: 1px solid #ff3333 !important;
    box-shadow: none !important;
    background-color: #f8ebe5 !important;
  }

  /* Focus */
  .shipping-calculator-form .form-select:focus {
    border: 1px solid #ff3333 !important;
    box-shadow: none !important;
    background-color: #f8ebe5 !important;
  }

  /* Active */
  .shipping-calculator-form .form-select:active {
    border: 1px solid #ff3333 !important;
    box-shadow: none !important;
    background-color: #f8ebe5 !important;
  }

  /* ===== ORDER SUMMARY MODAL ===== */
  .order-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.65);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    z-index: 999999;
    overflow-y: auto;
  }

  /* ===== MODAL ===== */
  .order-modal {
    position: relative;
    width: 520px;
    max-width: 100%;
    max-height: 90vh;
    background: #ffffff;
    border-radius: 15px;
    padding: 35px;
    text-align: center;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    overflow-y: auto;
    animation: orderModalShow 0.3s ease;
  }

  /* ===== CLOSE BUTTON ===== */
  .order-modal-close {
    position: absolute;
    top: 12px;
    right: 15px;
    width: 35px;
    height: 35px;
    border: none;
    background: transparent;
    color: #555;
    font-size: 30px;
    line-height: 30px;
    cursor: pointer;
    transition: 0.3s;
  }

  .order-modal-close:hover {
    color: #ff3333;

    transform: rotate(90deg);
  }

  /* ===== SUCCESS ICON ===== */
  .order-modal-icon {
    width: 65px;
    height: 65px;
    margin: 0 auto 15px;
    border-radius: 50%;
    background: #ff3333;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .order-modal-icon i {
    font-size: 28px;
    color: #ffffff;
  }

  /* ===== TITLE ===== */
  .order-modal h2 {
    margin: 0;
    margin-bottom: 5px;
    font-size: 27px;
    font-weight: 500;
    color: #222;
  }

  .order-success-message {
    margin: 0 0 20px;
    color: #777;
    font-size: 16px;
  }

  /* ===== BOOK LIST ===== */
  .order-summary-list {
    width: 100%;
    margin-top: 15px;
    border: 1px solid #eeeeee;
    border-radius: 8px;
    overflow: hidden;
    text-align: left;
  }

  /* ===== SINGLE BOOK ===== */
  .order-summary-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-bottom: 1px solid #eeeeee;
  }

  .order-summary-item:last-child {
    border-bottom: none;
  }

  /* ===== BOOK IMAGE ===== */
  .order-item-image {
    width: 55px;
    min-width: 55px;
    height: 65px;
    overflow: hidden;
    border-radius: 5px;
  }

  .order-item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* ===== BOOK INFO ===== */
  .order-item-info {
    flex: 1;
    min-width: 0;
  }

  .order-item-info h4 {
    margin: 0 0 5px;
    font-size: 15px;
    font-weight: 500;
    color: #222;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .order-item-info span {
    font-size: 14px;
    color: #777;
  }

  /* ===== ITEM TOTAL ===== */
  .order-item-total {
    font-size: 15px;
    font-weight: 500;
    color: #ff3333;
    white-space: nowrap;
  }

  /* ===== TOTAL SECTION ===== */
  .order-summary-totals {
    font-family: Arial, sans-serif;
    margin-top: 20px;
    border-top: 1px solid #eeeeee;
    padding-top: 10px;
  }

  /* ===== SUMMARY ROW ===== */
  .summary-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 0;
    font-size: 12px;
    color: #555;
  }

  .summary-row strong {
    color: #ff3333;
    font-weight: 500;
  }

  /* ===== GRAND TOTAL ===== */
  .summary-grand-total {
    margin-top: 5px;
    padding-top: 12px;
    border-top: 1px dashed #dddddd;
    font-size: 14px;
    color: #222;
  }

  .summary-grand-total strong {
    font-size: 15px;
    color: #ff3333;
  }

  /* ===== OKAY BUTTON ===== */
  .order-ok-button {
    margin-top: 20px;
    min-width: 120px;
    border-radius: 5px;
    background: #ff3333;
    color: #ffffff;
    padding: 10px 25px;
    transition: all 0.3s ease;
  }

  .order-ok-button:hover {
    background: #222;
    color: #ffffff;
  }

  /* ===== ANIMATION ===== */
  @keyframes orderModalShow {
    from {
      opacity: 0;

      transform: translateY(-20px) scale(0.95);
    }

    to {
      opacity: 1;

      transform: translateY(0) scale(1);
    }
  }

  .shipping-calculator-form textarea.form-control {
    height: 75px !important;
    min-height: 75px !important;
  }

  /* ===== MOBILE ===== */
  @media (max-width: 576px) {
    .order-modal-overlay {
      padding: 12px;
    }

    .order-modal {
      width: 100%;
      max-height: 92vh;
      padding: 30px 18px 25px;
    }

    .order-modal h2 {
      font-size: 23px;
    }

    .order-modal-icon {
      width: 55px;
      height: 55px;
    }

    .order-modal-icon i {
      font-size: 24px;
    }

    .order-summary-item {
      gap: 8px;
      padding: 10px;
    }

    .order-item-image {
      width: 48px;
      min-width: 48px;
      height: 58px;
    }

    .order-item-info h4 {
      font-size: 14px;
    }

    .order-item-info span {
      font-size: 12px;
    }

    .order-item-total {
      font-size: 13px;
    }
  }

  /* Payment Method */

  .payment-option {
    cursor: pointer;
    background: #fff;
    border-color: #e5e5e5 !important;
    transition: all 0.2s ease;
  }

  .payment-option:hover,
  .payment-option.active {
    border-color: #ff3333 !important;
    background: #fff7f7;
  }

  .payment-icon {
    width: 32px;
    height: 32px;
    min-width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    background: #f5f5f5;
    color: #555;
    font-size: 14px;
  }

  .payment-option.active .payment-icon {
    background: #ff3333;
    color: #fff;
  }
`;

export default Cart;
