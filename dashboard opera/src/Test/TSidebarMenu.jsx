import React from "react";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div className="main-nav">
      {/* <!-- Sidebar Logo --> */}
      <div className="logo-box">
        <Link to="index.html" className="logo-dark">
          <img
            src="assets/images/logo-sm.png"
            className="logo-sm"
            alt="logo sm"
          />
          <img
            src="assets/images/logo-dark.png"
            className="logo-lg"
            alt="logo dark"
          />
        </Link>

        <Link to="index.html" className="logo-light">
          <img
            src="assets/images/logo-sm.png"
            className="logo-sm"
            alt="logo sm"
          />
          <img
            src="assets/images/logo-light.png"
            className="logo-lg"
            alt="logo light"
          />
        </Link>
      </div>

      {/* <!-- Menu Toggle Button (sm-hover) --> */}
      <button
        type="button"
        className="button-sm-hover"
        aria-label="Show Full Sidebar"
      >
        <iconify-icon
          icon="solar:double-alt-arrow-right-bold-duotone"
          className="button-sm-hover-icon"
        ></iconify-icon>
      </button>

      <div className="scrollbar" data-simplebar>
        <ul className="navbar-nav" id="navbar-nav">
          <li className="menu-title">General</li>

          <li className="nav-item">
            <Link className="nav-link" to="index.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:widget-5-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Dashboard </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarProducts"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarProducts"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:t-shirt-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Products </span>
            </Link>
            <div className="collapse" id="sidebarProducts">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="product-list.html">
                    List
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="product-grid.html">
                    Grid
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="product-details.html">
                    Details
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="product-edit.html">
                    Edit
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="product-add.html">
                    Create
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarCategory"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarCategory"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:clipboard-list-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Category </span>
            </Link>
            <div className="collapse" id="sidebarCategory">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="category-list.html">
                    List
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="category-edit.html">
                    Edit
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="category-add.html">
                    Create
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarInventory"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarInventory"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:box-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Inventory </span>
            </Link>
            <div className="collapse" id="sidebarInventory">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="inventory-warehouse.html">
                    Warehouse
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link
                    className="sub-nav-link"
                    to="inventory-received-orders.html"
                  >
                    Received Orders
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarOrders"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarOrders"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:bag-smile-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Orders </span>
            </Link>
            <div className="collapse" id="sidebarOrders">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="orders-list.html">
                    List
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="order-detail.html">
                    Details
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="order-cart.html">
                    Cart
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="order-checkout.html">
                    Check Out
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarPurchases"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarPurchases"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:card-send-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Purchases </span>
            </Link>
            <div className="collapse" id="sidebarPurchases">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="purchase-list.html">
                    List
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="purchase-order.html">
                    Order
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="purchase-returns.html">
                    Return
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarAttributes"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarAttributes"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:confetti-minimalistic-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Attributes </span>
            </Link>
            <div className="collapse" id="sidebarAttributes">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="attributes-list.html">
                    List
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="attributes-edit.html">
                    Edit
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="attributes-add.html">
                    Create
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarInvoice"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarInvoice"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:bill-list-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Invoices </span>
            </Link>
            <div className="collapse" id="sidebarInvoice">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="invoice-list.html">
                    List
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="invoice-details.html">
                    Details
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="invoice-add.html">
                    Create
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="settings.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:settings-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Settings </span>
            </Link>
          </li>

          <li className="menu-title mt-2">Users</li>

          <li className="nav-item">
            <Link className="nav-link" to="pages-profile.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:chat-square-like-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Profile </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarRoles"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarRoles"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:user-speak-rounded-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Roles </span>
            </Link>
            <div className="collapse" id="sidebarRoles">
              <ul className="nav sub-navbar-nav">
                <ul className="nav sub-navbar-nav">
                  <li className="sub-nav-item">
                    <Link className="sub-nav-link" to="role-list.html">
                      List
                    </Link>
                  </li>
                  <li className="sub-nav-item">
                    <Link className="sub-nav-link" to="role-edit.html">
                      Edit
                    </Link>
                  </li>
                  <li className="sub-nav-item">
                    <Link className="sub-nav-link" to="role-add.html">
                      Create
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="pages-permissions.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:checklist-minimalistic-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Permissions </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarCustomers"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarCustomers"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:users-group-two-rounded-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Customers </span>
            </Link>
            <div className="collapse" id="sidebarCustomers">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="customer-list.html">
                    List
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="customer-detail.html">
                    Details
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarSellers"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarSellers"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:shop-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Sellers </span>
            </Link>
            <div className="collapse" id="sidebarSellers">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="seller-list.html">
                    List
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="seller-details.html">
                    Details
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="seller-edit.html">
                    Edit
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="seller-add.html">
                    Create
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-title mt-2">Other</li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarCoupons"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarCoupons"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:leaf-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Coupons </span>
            </Link>
            <div className="collapse" id="sidebarCoupons">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="coupons-list.html">
                    List
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="coupons-add.html">
                    Add
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="pages-review.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:chat-square-like-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Reviews </span>
            </Link>
          </li>

          <li className="menu-title mt-2">Other Apps</li>

          <li className="nav-item">
            <Link className="nav-link" to="apps-chat.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:chat-round-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Chat </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="apps-email.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:mailbox-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Email </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="apps-calendar.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:calendar-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Calendar </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="apps-todo.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:checklist-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Todo </span>
            </Link>
          </li>

          <li className="menu-title mt-2">Support</li>

          <li className="nav-item">
            <Link className="nav-link" to="help-center.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:help-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Help Center </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="pages-faqs.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:question-circle-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> FAQs </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="privacy-policy.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:document-text-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Privacy Policy </span>
            </Link>
          </li>

          <li className="menu-title mt-2">Custom</li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarPages"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarPages"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:gift-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Pages </span>
            </Link>
            <div className="collapse" id="sidebarPages">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="pages-starter.html">
                    Welcome
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="pages-comingsoon.html">
                    Coming Soon
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="pages-timeline.html">
                    Timeline
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="pages-pricing.html">
                    Pricing
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="pages-maintenance.html">
                    Maintenance
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="pages-404.html">
                    404 Error
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="pages-404-alt.html">
                    404 Error (alt)
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
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
            <div className="collapse" id="sidebarAuthentication">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="auth-signin.html">
                    Sign In
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="auth-signup.html">
                    Sign Up
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="auth-password.html">
                    Reset Password
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="auth-lock-screen.html">
                    Lock Screen
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="widgets.html">
              <span className="nav-icon">
                <iconify-icon icon="solar:atom-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text">Widgets</span>
              <span className="badge bg-info badge-pill text-end">9+</span>
            </Link>
          </li>

          <li className="menu-title mt-2">Components</li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarBaseUI"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarBaseUI"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:bookmark-square-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Base UI </span>
            </Link>
            <div className="collapse" id="sidebarBaseUI">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-accordion.html">
                    Accordion
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-alerts.html">
                    Alerts
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-avatar.html">
                    Avatar
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-badge.html">
                    Badge
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-breadcrumb.html">
                    Breadcrumb
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-buttons.html">
                    Buttons
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-card.html">
                    Card
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-carousel.html">
                    Carousel
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-collapse.html">
                    Collapse
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-dropdown.html">
                    Dropdown
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-list-group.html">
                    List Group
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-modal.html">
                    Modal
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-tabs.html">
                    Tabs
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-offcanvas.html">
                    Offcanvas
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-pagination.html">
                    Pagination
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-placeholders.html">
                    Placeholders
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-popovers.html">
                    Popovers
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-progress.html">
                    Progress
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-scrollspy.html">
                    Scrollspy
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-spinners.html">
                    Spinners
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-toasts.html">
                    Toasts
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="ui-tooltips.html">
                    Tooltips
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarExtendedUI"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarExtendedUI"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:case-round-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Advanced UI </span>
            </Link>
            <div className="collapse" id="sidebarExtendedUI">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="extended-ratings.html">
                    Ratings
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="extended-sweetalert.html">
                    Sweet Alert
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link
                    className="sub-nav-link"
                    to="extended-swiper-silder.html"
                  >
                    Swiper Slider
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="extended-scrollbar.html">
                    Scrollbar
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="extended-toastify.html">
                    Toastify
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarCharts"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarCharts"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:pie-chart-2-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Charts </span>
            </Link>
            <div className="collapse" id="sidebarCharts">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-area.html">
                    Area
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-bar.html">
                    Bar
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-bubble.html">
                    Bubble
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link
                    className="sub-nav-link"
                    to="charts-apex-candlestick.html"
                  >
                    Candlestick
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-column.html">
                    Column
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-heatmap.html">
                    Heatmap
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-line.html">
                    Line
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-mixed.html">
                    Mixed
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-timeline.html">
                    Timeline
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-boxplot.html">
                    Boxplot
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-treemap.html">
                    Treemap
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-pie.html">
                    Pie
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-radar.html">
                    Radar
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link
                    className="sub-nav-link"
                    to="charts-apex-radialbar.html"
                  >
                    RadialBar
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="charts-apex-scatter.html">
                    Scatter
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link
                    className="sub-nav-link"
                    to="charts-apex-polar-area.html"
                  >
                    Polar Area
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarForms"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarForms"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:book-bookmark-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Forms </span>
            </Link>
            <div className="collapse" id="sidebarForms">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="forms-basic.html">
                    Basic Elements
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="forms-checkbox-radio.html">
                    Checkbox &amp; Radio
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="forms-choices.html">
                    Choice Select
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="forms-clipboard.html">
                    Clipboard
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="forms-flatepicker.html">
                    Flatepicker
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="forms-validation.html">
                    Validation
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="forms-wizard.html">
                    Wizard
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="forms-fileuploads.html">
                    File Upload
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="forms-editors.html">
                    Editors
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="forms-input-mask.html">
                    Input Mask
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="forms-range-slider.html">
                    Slider
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarTables"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarTables"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:tuning-2-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Tables </span>
            </Link>
            <div className="collapse" id="sidebarTables">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="tables-basic.html">
                    Basic Tables
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="tables-gridjs.html">
                    Grid Js
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarIcons"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarIcons"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:ufo-2-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Icons </span>
            </Link>
            <div className="collapse" id="sidebarIcons">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="icons-boxicons.html">
                    Boxicons
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="icons-solar.html">
                    Solar Icons
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarMaps"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarMaps"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:streets-map-point-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Maps </span>
            </Link>
            <div className="collapse" id="sidebarMaps">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="maps-google.html">
                    Google Maps
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="maps-vector.html">
                    Vector Maps
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="#">
              <span className="nav-icon">
                <iconify-icon icon="solar:volleyball-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text">Badge Menu</span>
              <span className="badge bg-danger badge-pill text-end">1</span>
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link menu-arrow"
              to="#sidebarMultiLevelDemo"
              data-bs-toggle="collapse"
              role="button"
              aria-expanded="false"
              aria-controls="sidebarMultiLevelDemo"
            >
              <span className="nav-icon">
                <iconify-icon icon="solar:share-circle-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Menu Item </span>
            </Link>
            <div className="collapse" id="sidebarMultiLevelDemo">
              <ul className="nav sub-navbar-nav">
                <li className="sub-nav-item">
                  <Link className="sub-nav-link" to="#">
                    Menu Item 1
                  </Link>
                </li>
                <li className="sub-nav-item">
                  <Link
                    className="sub-nav-link menu-arrow"
                    to="#sidebarItemDemoSubItem"
                    data-bs-toggle="collapse"
                    role="button"
                    aria-expanded="false"
                    aria-controls="sidebarItemDemoSubItem"
                  >
                    <span> Menu Item 2 </span>
                  </Link>
                  <div className="collapse" id="sidebarItemDemoSubItem">
                    <ul className="nav sub-navbar-nav">
                      <li className="sub-nav-item">
                        <Link className="sub-nav-link" to="#">
                          Menu Sub item
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>

          <li className="nav-item">
            <Link className="nav-link disabled" to="#">
              <span className="nav-icon">
                <iconify-icon icon="solar:user-block-rounded-bold-duotone"></iconify-icon>
              </span>
              <span className="nav-text"> Disable Item </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarMenu;
