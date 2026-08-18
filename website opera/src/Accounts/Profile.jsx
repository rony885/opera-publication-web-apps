import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const Profile = () => {
  const orders = [
    {
      id: "O-260800001",
      date: "2026-08-17",
      price: "540.00 BDT",
    },
    {
      id: "O-260800002",
      date: "2026-08-17",
      price: "540.00 BDT",
    },
    {
      id: "O-260800003",
      date: "2026-08-17",
      price: "540.00 BDT",
    },
    {
      id: "O-260800004",
      date: "2026-08-17",
      price: "540.00 BDT",
    },
    {
      id: "O-260800005",
      date: "2026-08-18",
      price: "540.00 BDT",
    },
    {
      id: "O-260800006",
      date: "2026-08-18",
      price: "540.00 BDT",
    },
    {
      id: "O-260800007",
      date: "2026-08-18",
      price: "1120.00 BDT",
    },
    {
      id: "O-260800008",
      date: "2026-08-18",
      price: "1120.00 BDT",
    },
    {
      id: "O-260800009",
      date: "2026-08-18",
      price: "1120.00 BDT",
    },
    {
      id: "O-260800010",
      date: "2026-08-18",
      price: "1120.00 BDT",
    },
    {
      id: "O-260800011",
      date: "2026-08-18",
      price: "1120.00 BDT",
    },
    {
      id: "O-260800012",
      date: "2026-08-18",
      price: "1120.00 BDT",
    },
    {
      id: "O-260800013",
      date: "2026-08-18",
      price: "1120.00 BDT",
    },
  ];

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
            <h1 className="breadcumb-title fs-4 fw-normal">প্রোফাইল</h1>

            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>

                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  প্রোফাইল
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile & Orders */}
      <section className="vs-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          {/* Profile Header */}
          <div className="profile-section">
            <div className="profile-avatar">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Rony71 Profile"
              />
            </div>

            <div className="profile-info">
              <h2>Rony71</h2>

              <p>01609857822</p>

              <button type="button" className="btn-profile-update">
                Profile update
              </button>
            </div>
          </div>

          {/* Order History */}
          <h3 className="section-title">Order History</h3>

          <div className="order-table-wrapper">
            <table className="order-table">
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="col-id">{order.id}</td>

                    <td className="col-date">{order.date}</td>

                    <td className="col-price">{order.price}</td>

                    <td className="col-action">
                      <OverlayTrigger
                        placement="left"
                        overlay={
                          <Tooltip id={`view-order-${order.id}`}>
                            View Order
                          </Tooltip>
                        }
                      >
                        <Link
                          //   to={`/order-view/${order.id}`}
                          to="/order-view"
                          className="view-btn"
                        >
                          <i className="fa-regular fa-eye"></i>
                        </Link>
                      </OverlayTrigger>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* ================================
     Profile Section
  ================================= */

  .profile-section {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    margin-bottom: 40px;
  }

  .profile-avatar {
    width: 80px;
    height: 80px;
    flex-shrink: 0;
    background-color: #e2e8f0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #64748b;
    font-size: 14px;
    overflow: hidden;
  }

  .profile-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .profile-info h2 {
    font-size: 24px;
    font-weight: 400;
    color: #222222;
    margin: 0 0 6px;
  }

  .profile-info p {
    font-size: 15px;
    color: #777777;
    margin: 0 0 16px;
  }

  .btn-profile-update {
    background-color: #ff0000;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-family: Arial, sans-serif;
  }

  .btn-profile-update:hover {
    background-color: #cc0000;
  }

  /* ================================
     Order History
  ================================= */

  .section-title {
    font-size: 20px;
    font-weight: 400;
    color: #222222;
    margin: 0 0 15px;
    font-family: Arial, sans-serif;
  }

  .order-table-wrapper {
    width: 100%;
    overflow-x: auto;
    font-family: Arial, sans-serif;
  }

  .order-table {
    width: 100%;
    border-collapse: collapse;
  }

  .order-table td {
    padding: 14px 8px;
    border-bottom: 1px solid #e9e9e9;
    font-size: 14px;
    color: #555555;
    vertical-align: middle;
  }

  .order-table tr:last-child td {
    border-bottom: 1px solid #e9e9e9;
  }

  /* Order ID */
  .col-id {
    width: 35%;
    text-align: left;
  }

  /* Date */
  .col-date {
    width: 25%;
    text-align: center;
  }

  /* Price */
  .col-price {
    width: 30%;
    text-align: right;
    padding-right: 15px !important;
  }

  /* Action */
  .col-action {
    width: 10%;
    text-align: center;
  }

  .view-btn {
    color: #ff3333;
    text-decoration: none;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s ease;
  }

  .view-btn:hover {
    color: #cc0033;
  }

  /* ================================
     Responsive
  ================================= */

  @media (max-width: 575px) {
    .profile-section {
      gap: 15px;
      margin-bottom: 30px;
    }

    .profile-avatar {
      width: 65px;
      height: 65px;
    }

    .profile-info h2 {
      font-size: 20px;
    }

    .profile-info p {
      font-size: 14px;
      margin-bottom: 12px;
    }

    .btn-profile-update {
      padding: 7px 12px;
      font-size: 13px;
    }

    .section-title {
      font-size: 18px;
    }

    .order-table {
      min-width: 550px;
    }

    .order-table td {
      padding: 12px 8px;
      font-size: 13px;
    }
  }
`;

export default Profile;
