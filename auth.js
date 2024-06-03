import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { CButton, CCol, CForm, CFormFeedback, CFormInput, CFormLabel } from "@coreui/react";
import Link from "next/link";
import Seo from "@/shared/layout-components/seo/seo";
import { API_URL } from "@/config/index";
import styles from "@/styles/Home.module.scss";

export default function SignUp() {
  const navigate = useRouter();

  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    gender: "",
    dateOfBirth: "",
    username: "",
    password: "",
    userImage: "",
    adminTypeName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(`${API_URL}/signup`, userData);
      setLoading(false);

      if (res.status === 201) {
        navigate.push("/login");
      } else {
        console.error("Failed to create account");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error creating account:", error);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="description" content="Sign up page" />
      </Head>
      <Seo title={"Sign Up"} />
      <div className={styles.squareBox}>
        {[...Array(14)].map((_, index) => (
          <div key={index}></div>
        ))}
      </div>

      <div className={styles.page}>
        <div className={styles.pageSingle}>
          <div className="container">
            <div className="row justify-content-center mt-3">
              <div className="col-12 col-md-8 col-lg-6">
                <div className={styles.cardSiginMain + " card-sigin-main mx-auto my-auto py-4"}>
                  <div className="card-sigin">
                    <div className="main-card-signin d-md-flex">
                      <div className="wd-100p">
                        <div className="main-signup-header">
                          <h2>Create an Account</h2>
                          <h6 className="font-weight-semibold mb-4">Please fill in the form to create your account.</h6>

                          {step === 1 && (
                            <CForm className="row g-3 needs-validation" noValidate onSubmit={nextStep}>
                              <Step1 userData={userData} handleChange={handleChange} />
                            </CForm>
                          )}

                          {step === 2 && (
                            <CForm className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                              <Step2 userData={userData} handleChange={handleChange} />
                              <CCol xs={12} className="text-center">
                                <CButton
                                  className="btn-block mt-4"
                                  color="primary"
                                  type="button"
                                  onClick={prevStep}
                                >
                                  Previous
                                </CButton>
                                <CButton className="btn-block mt-2" color="primary" type="submit" disabled={loading}>
                                  {loading ? "Processing..." : "Sign Up"}
                                </CButton>
                              </CCol>
                            </CForm>
                          )}
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
    </>
  );
}

// Step 1 component
const Step1 = ({ userData, handleChange }) => {
  return (
    <>
      <CCol xs={12}>
        <CFormLabel htmlFor="firstName">First Name</CFormLabel>
        <CFormInput
          type="text"
          id="firstName"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
          required
        />
        <CFormFeedback>Looks good!</CFormFeedback>
      </CCol>
      {/* Add other form inputs for Step 1 here */}
    </>
  );
};

// Step 2 component
const Step2 = ({ userData, handleChange }) => {
  return (
    <>
      <CCol xs={12}>
        <CFormLabel htmlFor="username">Username</CFormLabel>
        <CFormInput
          type="text"
          id="username"
          name="username"
          value={userData.username}
          onChange={handleChange}
          required
        />
        <CFormFeedback>Looks good!</CFormFeedback>
      </CCol>
      {/* Add other form inputs for Step 2 here */}
    </>
  );
};
