import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";

import axios from "axios";
import { Formik, Form as FormikForm } from "formik";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import { useApiContext } from "../../context/ApiContext";

const schema = yup.object().shape({
  image: yup.mixed(),
  name: yup
    .string()
    .max(255, "Name contains maximum 255 chracters!")
    .required("Name  is required!"),
  email: yup.string().required("Mobile Number is required!"),
  district: yup.string().required("District is a required field!"),
  upazila: yup.string().required("Upazila is a required field!"),
  address: yup.string().required("Address is required!"),
});

const validate = (values) => {
  let errors = {};

  if (!values.email) {
    errors.email = "Mobile Number is required!";
  } else if (/^[0-9\b]+$/.test(values.email) === false) {
    errors.email = "Only number!";
  } else if (values.email.length !== 11) {
    errors.email = "Mobile Number contains 11 digit!";
  }

  return errors;
};

const UpdateProfile = () => {
  const { district, upazila, fetchDistrict, fetchUpazila } = useApiContext();

  useEffect(() => {
    fetchDistrict();
    fetchUpazila();
  }, [fetchDistrict, fetchUpazila]);

  const [item, setItem] = useState({});
  const [showImage, setShowImage] = useState(null);

  //   const [message, setMessage] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setShowImage(URL.createObjectURL(event.target.files[0]));
    }
  };

  useEffect(() => {
    const loadEmployees = async () => {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/custom_user/all_users/${id}/`,
      );
      setItem(data);
      setShowImage(data.image);
    };

    loadEmployees();
  }, [id]);

  const updatedValues = {
    image: item.image ? item.image : "",
    name: item.name ? item.name : "",
    email: item.email ? item.email : "",
    district: item.district ? item.district : "",
    upazila: item.upazila ? item.upazila : "",
    address: item.address ? item.address : "",
  };

  const UpdateProfileFunc = async (values) => {
    let formfield = new FormData();

    if (values.image !== item.image) {
      formfield.append("image", values.image);
    }
    formfield.append("name", values.name);
    formfield.append("email", values.email);
    // formfield.append("district", values.district);
    // formfield.append("upazila", values.upazila);
    formfield.append("address", values.address);

    await axios({
      method: "PATCH",
      url: `${process.env.REACT_APP_BASE_URL}/custom_user/all_users/${id}/`,
      data: formfield,
    })
      .then((response) => {
        // setMessage(response.success, "Profile is successfully updated...");
        navigate("/profile");
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error);
        // setMessage(error.message, "Error");
      });
  };

  const submitProfileForm = async (values, { setErrors, setSubmitting }) => {
    try {
      UpdateProfileFunc(values);
      setSubmitting(false);
    } catch (error) {
      setErrors({ err: error.message });
    }
  };

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");

  const handleDistrictChange = (e) => {
    const selectedDistrictName = e.target.value;
    setSelectedDistrict(
      district.find((district) => district.name === selectedDistrictName),
    );
    setSelectedUpazila("");
  };

  const handleUpazilaChange = (e) => {
    const selectedUpazilaName = e.target.value;
    setSelectedUpazila(
      upazila.find((upazila) => upazila.name === selectedUpazilaName),
    );
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
            <h1 className="breadcumb-title fs-4 fw-normal">আপডেট প্রোফাইল</h1>

            <div className="breadcumb-menu-wrap">
              <div className="breadcumb-menu">
                <span>
                  <Link className="fw-normal" to="/">
                    হোম
                  </Link>
                </span>

                <span className="fw-normal" style={{ color: "#FF3333" }}>
                  আপডেট প্রোফাইল
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="vs-blog-wrapper space-top space-extra-bottom">
        <div className="container">
          <div className="registration-wrapper">
            <div className="form-container">
              <h2>Update Profile</h2>
              <Formik
                enableReinitialize={true}
                initialValues={updatedValues}
                validationSchema={schema}
                onSubmit={submitProfileForm}
                validate={validate}
              >
                {({
                  handleSubmit,
                  handleChange,
                  setFieldValue,
                  isSubmitting,
                  values,
                  errors,
                  touched,
                }) => (
                  <FormikForm noValidate onSubmit={(e) => handleSubmit(e)}>
                    <div>
                      <Form.Group className="form-group mb-3">
                        <Form.Label>
                          Image<span></span>
                        </Form.Label>
                        <Form.Control
                          type="file"
                          name="image"
                          id="image"
                          onChange={(event) => {
                            setFieldValue(
                              "image",
                              event.currentTarget.files[0],
                            );
                            onImageChange(event);
                          }}
                          isInvalid={!!touched.image && !!errors.image}
                          isValid={touched.image && !errors.image}
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.image}
                        </Form.Control.Feedback>

                        {showImage && (
                          <div>
                            <img
                              alt="product preview img"
                              style={{
                                width: "150px",
                                height: "150px",
                                marginTop: "20px",
                                borderRadius: "50%",
                              }}
                              src={showImage}
                            />
                          </div>
                        )}
                      </Form.Group>

                      {/* Customer Name */}
                      <Form.Group className="form-group mb-3">
                        <Form.Label>
                          Name<span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            name="name"
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                            isInvalid={!!touched.name && !!errors.name}
                            isValid={touched.name && !errors.name}
                            className="form-control my-0"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      {/* Phone */}
                      <Form.Group className="form-group mb-3 ">
                        <Form.Label>
                          Phone<span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            type="text"
                            name="email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            isInvalid={!!touched.email && !!errors.email}
                            isValid={touched.email && !errors.email}
                            className="form-control my-0"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      {/* District */}
                      <Form.Group className="form-group mb-3 ">
                        <Form.Label>
                          District<span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <Form.Select
                            name="district"
                            id="district"
                            value={
                              selectedDistrict ? selectedDistrict.name : ""
                            }
                            onChange={(e) => {
                              handleChange(e);
                              handleDistrictChange(e);
                            }}
                            isInvalid={!!touched.district && !!errors.district}
                            isValid={touched.district && !errors.district}
                            className="form-control my-0"
                          >
                            <option value="">Select</option>
                            {district &&
                              district.map((d, i) => {
                                return (
                                  <option value={d.name} key={i}>
                                    {d.name}-{d.bn_name}
                                  </option>
                                );
                              })}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.district}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      {/* Upazila */}
                      <Form.Group className="form-group mb-3 ">
                        <Form.Label>
                          Upazila<span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <Form.Select
                            name="upazila"
                            id="upazila"
                            value={selectedUpazila ? selectedUpazila.name : ""}
                            onChange={(e) => {
                              handleChange(e);
                              handleUpazilaChange(e);
                            }}
                            isInvalid={!!touched.upazila && !!errors.upazila}
                            isValid={touched.upazila && !errors.upazila}
                            className="form-control my-0"
                          >
                            <option value="">Select</option>
                            {upazila &&
                              upazila
                                .filter(
                                  (upazila) =>
                                    upazila.district ===
                                    (selectedDistrict
                                      ? selectedDistrict.id
                                      : null),
                                )
                                .map((upazila) => {
                                  return (
                                    <option
                                      key={upazila.id}
                                      value={upazila.name}
                                    >
                                      {upazila.name}-{upazila.bn_name}
                                    </option>
                                  );
                                })}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.upazila}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      {/* Customer Address */}
                      <Form.Group className="form-group mb-3 ">
                        <Form.Label>
                          Customer Address<span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <Form.Control
                            as="textarea"
                            name="address"
                            id="address"
                            value={values.address}
                            onChange={handleChange}
                            isInvalid={!!touched.address && !!errors.address}
                            isValid={touched.address && !errors.address}
                            className="form-control my-0"
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.address}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>

                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="register-btn"
                      >
                        Update
                      </button>
                    </div>
                  </FormikForm>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .registration-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .form-container {
    width: 100%;
    max-width: 480px;
    background-color: #f8ebe5;
    padding: 30px 40px;
    border-radius: 4px;
    border: 1px solid #d1d4d8;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
  }

  .form-container h2 {
    text-align: center;
    color: #ff0000;
    font-family: "Times New Roman", Times, serif;
    font-size: 26px;
    font-weight: normal;
    margin: 0 0 25px;
  }

  .form-group {
    margin-bottom: 15px;
  }

  .form-group label {
    display: block;
    /* margin-bottom: 6px; */
    font-size: 13px;
    color: #333;
    font-weight: 400;
  }

  .required {
    color: #ff0000;
    margin-left: 2px;
  }

  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
    font-size: 14px;
    color: #333;
    background-color: #fff;
    outline: none;
    transition: border-color 0.2s ease;
  }

  .form-group input {
    height: 42px;
  }

  .form-group select {
    height: 42px;
    cursor: pointer;
  }

  .form-group textarea {
    min-height: 75px;
    resize: vertical;
  }

  .form-group input:focus,
  .form-group select:focus,
  .form-group textarea:focus {
    border-color: #aaa;
  }

  /* .autofill-bg {
    background-color: #F8EBE5 !important;
  } */

  .register-btn {
    width: 100%;
    height: 44px;
    padding: 10px 15px;
    margin-top: 10px;
    font-family: Arial, sans-serif;
    background-color: #ff0000;
    color: #fff;

    border: none;
    border-radius: 4px;

    font-size: 15px;
    font-weight: bold;

    cursor: pointer;
    transition: background-color 0.2s ease;
  }

  .register-btn:hover {
    background-color: #e60000;
  }

  .footer-text {
    text-align: center;
    margin-top: 15px;
    font-size: 13px;
    color: #333;
    font-family: Arial, sans-serif;
  }

  .footer-text a {
    color: #ff0000;
    text-decoration: none;
  }

  .footer-text a:hover {
    text-decoration: underline;
  }

  @media (max-width: 575px) {
    .form-container {
      max-width: 100%;
      padding: 25px 20px;
    }

    .form-container h2 {
      font-size: 24px;
    }
  }

  /* ===== Password icon ===== */
  .password-input-group {
    position: relative;
  }
  .password-input-group .form-control {
    padding-right: 42px;
  }
  .password-eye-icon {
    position: absolute;
    right: 13px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    cursor: pointer;
    color: #777;
    font-size: 16px;
    display: flex;
    align-items: center;
  }
  .password-eye-icon:hover {
    color: #ff0000;
  }
`;

export default UpdateProfile;
