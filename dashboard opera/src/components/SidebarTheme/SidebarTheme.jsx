import React, { useState, useEffect } from "react";

const SidebarTheme = () => {
  const [theme, setTheme] = useState("light"); // default is light
  const [topbarColor, setTopbarColor] = useState("light");
  const [menuColor, setMenuColor] = useState("dark");
  const [menuSize, setMenuSize] = useState("sm-hover-active");

  // Update html attributes based on selections
  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
    document.documentElement.setAttribute("data-topbar-color", topbarColor);
    document.documentElement.setAttribute("data-menu-color", menuColor);
    document.documentElement.setAttribute("data-menu-size", menuSize);
  }, [theme, topbarColor, menuColor, menuSize]);

  // Reset all to default
  const resetLayout = () => {
    setTheme("light");
    setTopbarColor("light");
    setMenuColor("dark");
    setMenuSize("sm-hover-active");
  };

  return (
    <div
      className="offcanvas offcanvas-end border-0"
      tabIndex="-1"
      id="theme-settings-offcanvas"
    >
      <div className="d-flex align-items-center bg-primary p-3 offcanvas-header">
        <h5 className="text-white m-0">Theme Settings</h5>
        <button
          type="button"
          className="btn-close btn-close-white ms-auto"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body p-0">
        <div data-simplebar="true" className="h-100">
          <div className="p-3 settings-bar">
            {/* Color Scheme */}
            <div>
              <h5 className="mb-3 font-16 fw-semibold">Color Scheme</h5>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="data-bs-theme"
                  id="layout-color-light"
                  value="light"
                  checked={theme === "light"}
                  onChange={() => setTheme("light")}
                />
                <label
                  className="form-check-label"
                  htmlFor="layout-color-light"
                >
                  Light
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="data-bs-theme"
                  id="layout-color-dark"
                  value="dark"
                  checked={theme === "dark"}
                  onChange={() => setTheme("dark")}
                />
                <label className="form-check-label" htmlFor="layout-color-dark">
                  Dark
                </label>
              </div>
            </div>

            {/* Topbar Color */}
            <div>
              <h5 className="my-3 font-16 fw-semibold">Topbar Color</h5>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="data-topbar-color"
                  id="topbar-color-light"
                  value="light"
                  checked={topbarColor === "light"}
                  onChange={() => setTopbarColor("light")}
                />
                <label
                  className="form-check-label"
                  htmlFor="topbar-color-light"
                >
                  Light
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="data-topbar-color"
                  id="topbar-color-dark"
                  value="dark"
                  checked={topbarColor === "dark"}
                  onChange={() => setTopbarColor("dark")}
                />
                <label className="form-check-label" htmlFor="topbar-color-dark">
                  Dark
                </label>
              </div>
            </div>

            {/* Menu Color */}
            <div>
              <h5 className="my-3 font-16 fw-semibold">Menu Color</h5>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="data-menu-color"
                  id="leftbar-color-light"
                  value="light"
                  checked={menuColor === "light"}
                  onChange={() => setMenuColor("light")}
                />
                <label
                  className="form-check-label"
                  htmlFor="leftbar-color-light"
                >
                  Light
                </label>
              </div>
              <div className="form-check mb-2">
                <input
                  className="form-check-input"
                  type="radio"
                  name="data-menu-color"
                  id="leftbar-color-dark"
                  value="dark"
                  checked={menuColor === "dark"}
                  onChange={() => setMenuColor("dark")}
                />
                <label
                  className="form-check-label"
                  htmlFor="leftbar-color-dark"
                >
                  Dark
                </label>
              </div>
            </div>

            {/* Sidebar Size */}
            <div>
              <h5 className="my-3 font-16 fw-semibold">Sidebar Size</h5>
              <div className="form-check mb-2">
                {[
                  {
                    id: "leftbar-size-default",
                    label: "Default",
                    value: "default",
                  },
                  {
                    id: "leftbar-size-small",
                    label: "Condensed",
                    value: "condensed",
                  },
                  { id: "leftbar-hidden", label: "Hidden", value: "hidden" },
                  {
                    id: "leftbar-size-small-hover-active",
                    label: "Small Hover Active",
                    value: "sm-hover-active",
                  },
                  {
                    id: "leftbar-size-small-hover",
                    label: "Small Hover",
                    value: "sm-hover",
                  },
                ].map((item) => (
                  <div key={item.id} className="form-check mb-2">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="data-menu-size"
                      id={item.id}
                      value={item.value}
                      checked={menuSize === item.value}
                      onChange={() => setMenuSize(item.value)}
                    />
                    <label className="form-check-label" htmlFor={item.id}>
                      {item.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="offcanvas-footer border-top p-3 text-center">
        <div className="row">
          <div className="col">
            <button
              type="button"
              className="btn btn-danger w-100"
              onClick={resetLayout}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarTheme;
