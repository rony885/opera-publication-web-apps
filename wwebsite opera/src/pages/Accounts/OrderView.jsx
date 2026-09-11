import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const OrderView = () => {
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
            <h1 className="breadcumb-title fs-4 fw-normal">অর্ডার দেখুন</h1>

            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>

                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  অর্ডার দেখুন
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="vs-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="card">
            <div className="d-flex justify-content-between align-items-start">
              {/* Left Side */}
              <div>
                <div className="card-title mb-1">Order Number</div>
                <div className="text-bold">O-260800015</div>
              </div>

              {/* Right Side */}
              <div className="text-end">
                <div className="text-bold mb-1">2026-08-18</div>
                <div className="text-muted">02:11 PM</div>
              </div>
            </div>
          </div>

          {/* =========================
              2. Customer & Payment
          ========================= */}
          <div className="two-column-row">
            {/* Customer Info */}
            <div className="card column-card">
              <div className="card-title">Customer Info</div>
              <div className="text-bold" style={{ marginBottom: "3px" }}>
                Rony71
              </div>
              <div className="text-muted">01609857822</div>
              <div className="text-muted">Dhaka, Uttara</div>
            </div>

            {/* Payment Info */}
            <div className="card column-card">
              <div className="card-title">Payment Info</div>
              <div className="payment-line">
                <strong>Order Number:</strong> O-260800015
              </div>
              <div className="payment-line">
                <strong>Invoice Number:</strong> OI-260800015
              </div>
              <div>
                <strong>Payment Method:</strong> Cash On Delivery
              </div>
            </div>
          </div>

          {/* =========================
              3. Product + Total
          ========================= */}
          <div className="product-total-row">
            {/* Product Items */}
            <div className="card product-card">
              <div className="card-title">Product Items</div>

              <div className="table-responsive">
                <table className="table-container">
                  <thead>
                    <tr>
                      <th style={{ width: "40px" }}></th>
                      <th className="text-center" style={{ width: "50%" }}>
                        Product
                      </th>

                      <th className="text-center">Item Price</th>
                      <th className="text-center">Quantity</th>
                      {/* <th className="text-center">Size</th> */}
                      {/* <th className="text-center">Color</th> */}
                      <th className="text-right">Amount</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <div className="product-img">
                          <img
                            src="/assets/img/book/প্রম্পট ইঞ্জিনিয়ারিং.png"
                            alt="Havit HV-MS66GT"
                          />
                        </div>
                      </td>

                      <td className="text-center">
                        <div className="text-bold">প্রম্পট ইঞ্জিনিয়ারিং</div>
                        <div className="product-code">#PROD-00009</div>
                      </td>
                      <td className="text-center">৳550.00</td>
                      <td className="text-center">1</td>
                      {/* <td className="text-center">-</td> */}
                      {/* <td className="text-center">-</td> */}

                      <td className="text-right text-bold">৳550.00</td>
                    </tr>

                    <tr>
                      <td>
                        <div className="product-img">
                          <img
                            src="/assets/img/book/data sience.jpg"
                            alt="HAVIT MS76GT"
                          />
                        </div>
                      </td>

                      <td className="text-center">
                        <div className="text-bold">
                          HAVIT MS76GT plus 2.4G WIRELESS OPTICAL MOUSE
                        </div>
                        <div className="product-code">#PROD-00010</div>
                      </td>
                      <td className="text-center">৳630.00</td>
                      <td className="text-center">2</td>
                      <td className="text-right text-bold">৳1,260.00</td>
                    </tr>

                    <tr>
                      <td>
                        <div className="product-img">
                          <img
                            src="/assets/img/book/mindmaping.png"
                            alt="Philips TAS1009"
                          />
                        </div>
                      </td>

                      <td className="text-center">
                        <div className="text-bold">
                          Philips TAS1009 Mini Bluetooth Speaker
                        </div>
                        <div className="product-code">#PROD-00004</div>
                      </td>
                      <td className="text-center">৳1,190.00</td>
                      <td className="text-center">1</td>
                      <td className="text-right text-bold">৳1,190.00</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Order Statistics */}
              <div className="stats-grid">
                <div className="stat-box">
                  <div className="stat-label">Order Date</div>
                  <div className="stat-value">2026-08-18</div>
                </div>
                <div className="stat-box">
                  <div className="stat-label">Order Time</div>
                  <div className="stat-value">02:11 PM</div>
                </div>

                <div className="stat-box">
                  <div className="stat-label">Order Status</div>
                  <div className="stat-value">
                    <span className="badge-new">New</span>
                  </div>
                </div>

                <div className="stat-box">
                  <div className="stat-label">Delivery Type</div>
                  <div className="stat-value">Inside Dhaka</div>
                </div>
              </div>
            </div>

            {/* Total Amount */}
            <div className="card total-card">
              <div className="card-title">Total Order Amount</div>

              <table className="summary-table">
                <tbody>
                  <tr>
                    <td>
                      <strong>Sub Total :</strong>
                    </td>

                    <td className="text-right text-bold">৳3,000.00</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Discount :</strong>
                    </td>

                    <td className="text-right">(-) ৳400.00</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Delivery Charge :</strong>
                    </td>

                    <td className="text-right">(+) ৳90.00</td>
                  </tr>

                  <tr className="border-top">
                    <td>
                      <strong>Payable Amount :</strong>
                    </td>

                    <td className="text-right text-bold">৳2,690.00</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Paid Amount :</strong>
                    </td>

                    <td className="text-right">৳0.00</td>
                  </tr>

                  <tr>
                    <td>
                      <strong>Due Amount :</strong>
                    </td>

                    <td className="text-right text-bold">৳2,690.00</td>
                  </tr>

                  <tr className="border-top">
                    <td>
                      <strong>Total (BDT) :</strong>
                    </td>

                    <td className="text-right text-bold">৳2,690.00</td>
                  </tr>
                </tbody>
              </table>

              {/* Barcode */}
              <div className="barcode-area">
                <div className="barcode-header">
                  <span className="text-muted">Scan barcode to track</span>

                  <span className="text-muted">O-260800015</span>
                </div>

                <div className="text-center">
                  <div className="barcode"></div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================
              4. Order Status
          ========================= */}
          <div className="card order-status-card">
            <div className="card-title">Order Status</div>

            <div className="status-pipeline">
              <div className="status-step active">New</div>

              <div className="status-step">Pending</div>

              <div className="status-step">Approved</div>

              <div className="status-step">Packaging</div>

              <div className="status-step">Shipment</div>

              <div className="status-step">Delivered</div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* =====================================
     MAIN FONT
  ===================================== */

  /* font-family: Arial, sans-serif; */

  /* =====================================
     COMMON
  ===================================== */

  .card {
    width: 100%;
    box-sizing: border-box;
    background-color: #ffffff;
    border: 1px solid #dcdcdc;
    padding: 12px;
    margin-bottom: 10px;
    font-family: Arial, sans-serif;
  }

  .card-title {
    font-weight: 600;
    color: #555555;
    font-size: 11px;
    margin-bottom: 8px;
    font-family: Arial, sans-serif;
  }

  .text-bold {
    font-weight: 600;
  }

  .text-muted {
    color: #666666;
  }

  .text-right {
    text-align: right;
  }

  .text-center {
    text-align: center;
  }

  /* =====================================
     1. ORDER INFO
  ===================================== */

  .order-number-box {
    min-width: 180px;
  }

  .date-display {
    text-align: right;
    line-height: 1.4;
  }

  /* =====================================
     2. CUSTOMER + PAYMENT
  ===================================== */

  .two-column-row {
    width: 100%;
    display: flex;
    gap: 10px;
    margin-bottom: 0;
  }

  .column-card {
    flex: 1;
    min-width: 0;
  }

  .payment-line {
    margin-bottom: 2px;
  }

  /* =====================================
     3. PRODUCT + TOTAL
  ===================================== */

  .product-total-row {
    width: 100%;
    display: flex;
    align-items: stretch;
    gap: 10px;
  }

  .product-card {
    flex: 3;
    min-width: 0;
  }

  .total-card {
    flex: 1;
    min-width: 250px;
  }

  /* =====================================
     PRODUCT TABLE
  ===================================== */

  .table-responsive {
    width: 100%;
    overflow-x: auto;
  }

  .table-container {
    width: 100%;
    min-width: 800px;
    border-collapse: collapse;
    margin-bottom: 12px;
  }

  .table-container th {
    background-color: #e9ecef;
    padding: 7px 8px;
    font-weight: 600;
    border-bottom: 1px solid #dcdcdc;
    font-size: 11px;
    white-space: nowrap;
  }

  .table-container td {
    padding: 10px 8px;
    border-bottom: 1px solid #eeeeee;
    vertical-align: middle;
    font-size: 11px;
  }

  .product-img {
    width: 50px;
    height: 60px;
    background: #f8f8f8;
    border: 1px solid #dddddd;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .product-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .product-code {
    color: #777777;
    font-size: 10px;
    margin-top: 3px;
  }

  /* =====================================
     ORDER STATS
  ===================================== */

  .stats-grid {
    width: 100%;
    display: flex;
    gap: 10px;
  }

  .stat-box {
    flex: 1;
    border: 1px solid #e0e0e0;
    padding: 10px;
    text-align: center;
    background: #fafafa;
  }

  .stat-label {
    color: #666666;
    font-size: 11px;
    margin-bottom: 4px;
  }

  .stat-value {
    font-weight: 600;
    color: #000000;
    font-size: 11px;
  }

  .badge-new {
    display: inline-block;
    background-color: #ffeef0;
    color: #e53935;
    border: 1px solid #ffcdd2;
    padding: 2px 7px;
    border-radius: 3px;
    font-size: 10px;
  }

  /* =====================================
     SUMMARY
  ===================================== */

  .summary-table {
    width: 100%;
    border-collapse: collapse;
  }

  .summary-table td {
    padding: 5px 5px;
    font-size: 11px;
  }

  .summary-table tr.border-top td {
    border-top: 1px solid #dddddd;
    padding-top: 7px;
  }

  /* =====================================
     BARCODE
  ===================================== */

  .barcode-area {
    margin-top: 25px;
    border-top: 1px solid #eeeeee;
    padding-top: 10px;
  }

  .barcode-header {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .barcode {
    display: inline-block;
    width: 120px;
    height: 35px;
    background: repeating-linear-gradient(
      90deg,
      #000000,
      #000000 2px,
      #ffffff 2px,
      #ffffff 4px,
      #000000 4px,
      #000000 7px
    );
    margin-top: 5px;
  }

  /* =====================================
     4. ORDER STATUS
  ===================================== */

  .order-status-card {
    width: 100%;
    margin-bottom: 0;
  }

  .status-pipeline {
    width: 100%;
    display: flex;
    background: #d8d8d8;
    overflow: hidden;
    margin-top: 8px;
  }

  .status-step {
    flex: 1;
    text-align: center;
    padding: 18px 5px;
    font-weight: 600;
    color: #333333;
    font-size: 11px;
    border-right: 1px solid #c5c5c5;
  }

  .status-step:last-child {
    border-right: none;
  }

  .status-step.active {
    background-color: #ff0000;
    color: #ffffff;
  }

  /* =====================================
     TABLET
  ===================================== */

  @media (max-width: 991px) {
    .product-total-row {
      flex-direction: column;
    }

    .total-card {
      min-width: 0;
      width: 100%;
    }
  }

  /* =====================================
     MOBILE
  ===================================== */

  @media (max-width: 767px) {
    .two-column-row {
      flex-direction: column;
    }

    .product-total-row {
      flex-direction: column;
    }

    .order-info-card {
      flex-direction: column;
      gap: 10px;
    }

    .date-display {
      text-align: left;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .status-pipeline {
      overflow-x: auto;
    }

    .status-step {
      min-width: 100px;
      flex: 0 0 100px;
    }
  }

  /* =====================================
     SMALL MOBILE
  ===================================== */

  @media (max-width: 480px) {
    .stats-grid {
      grid-template-columns: 1fr;
    }
  }
`;

export default OrderView;
