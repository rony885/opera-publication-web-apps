import React, { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "@iconify-icon/react";

const NewSales = () => {
  const [rows, setRows] = useState([0]); // one initial row

  const addRow = () => {
    setRows([...rows, rows.length]);
  };

  const removeRow = (index) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  return (
    <Wrapper>
      <div className="page-content">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center gap-1">
                  <h4 className="card-title flex-grow-1 fs-4">
                    <Link to="/">Dashboard</Link> | New Sale
                  </h4>

                  <button
                    className="btn btn-sm btn-primary fs-4"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModalCenteredScrollable"
                  >
                    Create Customer
                  </button>
                </div>

                <div className="card-body">
                  <h4 className="card-title fs-4 mb-3">Sale Update</h4>
                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Sales Date
                          </label>
                          <input
                            type="date"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Customer
                          </label>
                          <select
                            className="form-control"
                            id="layout"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Layout"
                          >
                            <option defaultValue="">Select</option>
                            <option defaultValue="Fashion">Abc</option>
                            <option defaultValue="Dining">Xyz</option>
                          </select>
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Warehouse
                          </label>
                          <select
                            className="form-control"
                            id="layout"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Layout"
                          >
                            <option defaultValue="">Select</option>
                            <option defaultValue="Fashion">Abc</option>
                            <option defaultValue="Dining">Xyz</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Sales Date
                          </label>
                          <textarea
                            className="form-control bg-light-subtle"
                            id="description"
                            // rows="4"
                            rows="1"
                          ></textarea>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="card py-3">
                      <div className="table-responsive my-2">
                        <div className="barcode-input w-50 mb-2 d-flex gap-2">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Scan with Product Code"
                            disabled
                          />
                        </div>

                        <table className="table table-borderless table-nowrap align-middle mb-0 invoicee-table">
                          {/* <thead className="table-light">
                            <tr>
                              <th style={{ width: "3%" }}>#</th>
                              <th
                                className="text-start"
                                style={{ width: "35%" }}
                              >
                                Product Name
                              </th>
                              <th style={{ width: "17%" }}>Product Qty</th>
                              <th className="text-end" style={{ width: "10%" }}>
                                Price (BDT)
                              </th>
                              <th className="text-end" style={{ width: "10%" }}>
                                Discount (BDT)
                              </th>
                              <th className="text-end" style={{ width: "12%" }}>
                                Total Price (BDT)
                              </th>
                              <th className="text-end" style={{ width: "12%" }}>
                                Total Discount (BDT)
                              </th>
                              <th className="text-end" style={{ width: "13%" }}>
                                Action
                              </th>
                            </tr>
                          </thead> */}

                          <thead className="table-light">
                            <tr>
                              <th style={{ width: "3%", verticalAlign: "top" }}>
                                #
                              </th>

                              <th
                                className="text-start"
                                style={{ width: "40%", verticalAlign: "top" }}
                              >
                                Product Name
                              </th>

                              <th
                                style={{ width: "13%", verticalAlign: "top" }}
                              >
                                Product Qty
                              </th>

                              <th
                                className="text-end"
                                style={{ width: "10%", verticalAlign: "top" }}
                              >
                                Price (BDT)
                              </th>

                              <th
                                className="text-end"
                                style={{ width: "7%", verticalAlign: "top" }}
                              >
                                Discount <br /> (BDT)
                              </th>

                              <th
                                className="text-end"
                                style={{ width: "12%", verticalAlign: "top" }}
                              >
                                Total Price (BDT)
                              </th>

                              <th
                                className="text-end"
                                style={{ width: "7%", verticalAlign: "top" }}
                              >
                                Total <br /> Discount <br /> (BDT)
                              </th>

                              <th
                                className="text-end"
                                style={{ width: "8%", verticalAlign: "top" }}
                              >
                                Action
                              </th>
                            </tr>
                          </thead>

                          {/* <tbody>
                            <tr>
                              <td>1</td>

                              <td>
                                <select className="form-select">
                                  <option>Select Product</option>
                                  <option>XYZ</option>
                                  <option>ABC</option>
                                </select>
                              </td>

                              <td>
                                <div className="input-step d-flex align-items-center gap-1">
                                  <button className="btn btn-secondary btn-sm">
                                    -
                                  </button>
                                  <input
                                    type="number"
                                    className="form-control text-center"
                                    value={1}
                                    min={0}
                                  />
                                  <button className="btn btn-secondary btn-sm">
                                    +
                                  </button>
                                </div>
                              </td>

                              <td className="text-end">
                                <input
                                  type="number"
                                  className="form-control text-end"
                                  value="100"
                                />
                              </td>

                              <td className="text-end">
                                <input
                                  type="number"
                                  className="form-control text-end"
                                  value="0"
                                />
                              </td>

                              <td className="text-end">
                                <input
                                  type="number"
                                  className="form-control text-end"
                                  value="100"
                                  disabled
                                />
                              </td>

                              <td className="text-end">
                                <input
                                  type="number"
                                  className="form-control text-end"
                                  value="0"
                                  disabled
                                />
                              </td>

                              <td className="text-end">
                                <div className="d-flex justify-content-end gap-2">
                                  <button className="btn btn-danger btn-sm">
                                    ✕
                                  </button>
                                  <button className="btn btn-secondary btn-sm">
                                    ＋
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody> */}
                          <tbody>
                            {rows.map((_, index) => (
                              <tr key={index}>
                                <td>{index + 1}</td>

                                <td>
                                  <select className="form-select">
                                    <option>Select Product</option>
                                    <option>XYZ</option>
                                    <option>ABC</option>
                                  </select>
                                </td>

                                <td>
                                  <div className="input-step d-flex align-items-center gap-1">
                                    <button className="btn btn-secondary btn-sm">
                                      -
                                    </button>
                                    <input
                                      type="number"
                                      className="form-control text-center"
                                      value={1}
                                      min={0}
                                    />
                                    <button className="btn btn-secondary btn-sm">
                                      +
                                    </button>
                                  </div>
                                </td>

                                <td className="text-end">
                                  <input
                                    type="number"
                                    className="form-control text-end"
                                    value="100"
                                  />
                                </td>

                                <td className="text-end">
                                  <input
                                    type="number"
                                    className="form-control text-end"
                                    value="0"
                                  />
                                </td>

                                <td className="text-end">
                                  <input
                                    type="number"
                                    className="form-control text-end"
                                    value="100"
                                    disabled
                                  />
                                </td>

                                <td className="text-end">
                                  <input
                                    type="number"
                                    className="form-control text-end"
                                    value="0"
                                    disabled
                                  />
                                </td>

                                <td className="text-end">
                                  <div className="d-flex justify-content-end gap-2">
                                    {/* ❌ ✕ ONLY for added rows (NOT first row) */}
                                    {index !== 0 && (
                                      <button
                                        className="btn btn-danger btn-sm"
                                        style={{
                                          visibility:
                                            index === 0 ? "hidden" : "visible",
                                        }}
                                        onClick={() => removeRow(index)}
                                      >
                                        ✕
                                      </button>
                                    )}

                                    {/* ➕ Always visible */}
                                    <button
                                      className="btn btn-secondary btn-sm"
                                      onClick={addRow}
                                    >
                                      ＋
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Sub Total Amount
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            AIT (%)
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Paid Amount
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Grand Total Amount
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Discount
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            VAT (%)
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Due Amount
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Payment Method
                          </label>
                          <select
                            className="form-control"
                            id="layout"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Layout"
                          >
                            <option defaultValue="">Select</option>
                            <option defaultValue="Fashion">Abc</option>
                            <option defaultValue="Dining">Xyz</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="layout" className="form-label">
                            Total amount After Discount
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Payable Amount
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Change Amount
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                          />
                        </div>
                      </form>
                    </div>

                    <div className="col-lg-3">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Account
                          </label>
                          <select
                            className="form-control"
                            id="layout"
                            data-choices
                            data-choices-groups
                            data-placeholder="Select Layout"
                          >
                            <option defaultValue="">Select</option>
                            <option defaultValue="Fashion">Abc</option>
                            <option defaultValue="Dining">Xyz</option>
                          </select>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="d-flex justify-content-end gap-2 my-2">
                    <button type="reset" className="btn btn-danger">
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-success">
                      Submit
                    </button>
                  </div>
                </div>
              </div>

              {/* ========= Add Customer Modal ========= */}
              <div
                className="modal fade"
                id="exampleModalCenteredScrollable"
                readOnly="-1"
                aria-labelledby="exampleModalCenteredScrollableTitle"
                aria-hidden="true"
              >
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5
                        className="modal-title"
                        id="exampleModalCenteredScrollableTitle"
                      >
                        Create Customer
                      </h5>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div className="card-body">
                        <div className="row">
                          <div className="col-lg-12">
                            <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Name
                                </label>
                                <input
                                  type="text"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-6">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Phone
                                </label>
                                <input
                                  type="text"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-6">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Email
                                </label>
                                <input
                                  type="text"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-6">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Contact Person
                                </label>
                                <input
                                  type="text"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-6">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Contact Person Designation
                                </label>
                                <input
                                  type="text"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-6">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Adress
                                </label>
                                <textarea
                                  className="form-control bg-light-subtle"
                                  id="description"
                                  rows="2"
                                ></textarea>
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-6">
                            <form>
                              <div className="mb-3">
                                <label
                                  htmlFor="meta-tag"
                                  className="form-label"
                                >
                                  Note
                                </label>
                                <textarea
                                  className="form-control bg-light-subtle"
                                  id="description"
                                  rows="2"
                                ></textarea>
                              </div>
                            </form>
                          </div>

                          <div className="col-lg-12">
                            <form>
                              <div className="mb-3">
                                <label htmlFor="layout" className="form-label">
                                  Image
                                </label>
                                <input
                                  type="file"
                                  id="meta-tag"
                                  className="form-control"
                                />
                              </div>
                            </form>
                          </div>

                          <div className="d-flex justify-content-end gap-2 my-2">
                            <button type="reset" className="btn btn-danger">
                              Cancel
                            </button>
                            <button type="submit" className="btn btn-success">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* .table-fixed {
    table-layout: fixed;
    width: 100%;
  }

  .table-fixed th,
  .table-fixed td {
    vertical-align: middle;
  } */
`;

export default NewSales;
