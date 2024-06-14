import Head from "next/head";
import { Inter } from "next/font/google";
import favicon from "../public/assets/img/brand/favicon.png";
import styles from "@/styles/Home.module.scss";
import { Alert, Button, Col, Form, Row, Tab, Tabs } from "react-bootstrap";
import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Seo from "@/shared/layout-components/seo/seo";
import { auth } from "../shared/firebase/firebase";
import {
  CButton,
  CCol,
  CForm,
  CFormFeedback,
  CFormInput,
  CFormLabel,
} from "@coreui/react";
import { signIn, useSession } from "next-auth/react";
import { Flip, toast } from "react-toastify";
// import { C } from "@fullcalendar/core/internal-common";

export default function Home() {
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  // console.log(session);
  // useEffect(() => {
  //   if (session) routeChange(session.type);
  // }, [session]);
  useEffect(() => {
    if (document.body) {
      document
        .querySelector("body")
        .classList.add("ltr", "error-page1", "bg-primary");
    }

    return () => {
      document.body.classList.remove("ltr", "error-page1", "bg-primary");
    };
  }, []);

  // Firebase
  const [err, setError] = useState("");
  const [data, setData] = useState({
    email: "adminnextjs@gmail.com",
    password: "1234567890",
  });
  let navigate = useRouter();
  const routeChange = () => {
    // let path = session.type === "admin" ? `/admin` : `/restaurant`;
    // navigate.push(path);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(null); // Initial state: null (checking)
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const changeEmailHandler = (event) => {
    const val = event.target.value;
    setEmail(val);
    if (validateEmail(val)) {
      setIsValid(true);
      console.log(true);
    } else {
      setIsValid(false);
      event.preventDefault();
      event.stopPropagation();
      console.log(false);
    }
  };

  console.log(status, "Status");

  const [isFocused, setIsFocused] = useState(false);

  const checkEmailAvailability = async (email) => {
    try {
      const response = await axios.get(`${API_URL}?email=${email}`);
      if (response.data.available) {
        setIsValid(true);
        setErrorMessage("Email is valid!");
      } else {
        setIsValid(false);
        setErrorMessage("Email already taken!");
      }
    } catch (error) {
      console.error("Error checking email availability:", error);
      setIsValid(null); // Reset to checking state
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  const [key, setKey] = useState("restaurant");

  const submitForm = async (event) => {
    event.preventDefault();
    // const credentials = { email, password };
    console.log("Type", key);
    if (!isValid || !password.length > 0) return;
    setLoading(true);

    routeChange();
    const path = key === "admin" ? `/admin` : `/restaurant`;
    navigate.push(path);

    // try {
    //   const res = await signIn("credentials", {
    //     email,
    //     password,
    //     type: key,
    //     redirect: false,
    //   });

    //   console.log("result", res);

    //   if (res.error) {
    //     toast.error(
    //       <p className="text-white tx-16 mb-0">Invalid email or password</p>,
    //       {
    //         position: toast.POSITION.TOP_RIGHT,
    //         hideProgressBar: true,
    //         autoClose: 5000,
    //         theme: "colored",
    //         transition: Flip,
    //       }
    //     );
    //     console.log(res, "Invalid email or passowrd");
    //     setLoading(false);
    //     return;
    //   }

    //   toast.success(<p className="text-white tx-16 mb-0">Welcome back!</p>, {
    //     position: toast.POSITION.TOP_RIGHT,
    //     hideProgressBar: true,
    //     autoClose: 5000,
    //     theme: "colored",
    //     transition: Flip,
    //   });
    //   setLoading(false);

    //   // routeChange();
    // } catch (error) {
    //   setLoading(false);
    //   toast.error(
    //     <p className="text-white tx-16 mb-0">
    //       Internal server error. Please try again later!
    //     </p>,
    //     {
    //       position: toast.POSITION.TOP_RIGHT,
    //       hideProgressBar: true,
    //       autoClose: 5000,
    //       theme: "colored",
    //       transition: Flip,
    //     }
    //   );

    //   console.log(error, "error");
    // }
  };

  return (
    <>
      <Head>
        <title>POG</title>
        <meta name="description" content="Spruha" />
        <link rel="icon" href={favicon.src} />
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link> */}
      </Head>
      <Seo title={"Login"} />
      <div className="square-box">
        {" "}
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>{" "}
        <div></div> <div></div> <div></div> <div></div> <div></div> <div></div>{" "}
        <div></div> <div></div> <div></div>{" "}
      </div>

      <div className="page">
        <div className="page-single">
          <Tabs
            className="justify-content-center mt-3"
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
          >
            <Tab eventKey="restaurant" title="Restaurant"></Tab>
            <Tab eventKey="admin" title="Admin"></Tab>
          </Tabs>

          <div className="container">
            <Row>
              <Col
                xl={5}
                lg={6}
                md={8}
                sm={8}
                xs={10}
                className="card-sigin-main mx-auto my-auto py-4 justify-content-center"
              >
                <div className="card-sigin">
                  {/* <!-- Demo content--> */}
                  <div className="main-card-signin d-md-flex">
                    <div className="wd-100p">
                      <div className="d-flex mb-4">
                        <Link href={`/components/dashboards/dashboard1/`}>
                          <img
                            src={"./assets/img/brand/favicon.png"}
                            className="sign-favicon ht-40"
                            alt="logo"
                          />
                        </Link>
                      </div>
                      <div className="">
                        <div className="main-signup-header">
                          <h2>Welcome back!</h2>
                          <h6 className="font-weight-semibold mb-4">
                            Please sign in to continue.
                          </h6>
                          <div className="panel panel-primary">
                            <div className="tab-menu-heading mb-2 border-bottom-0">
                              <div className="tabs-menu1">
                                <CForm
                                  onFocus={() => setIsFocused(true)}
                                  className="row needs-validation"
                                  noValidate
                                  onSubmit={submitForm}
                                >
                                  <CCol xs={12}>
                                    <CFormLabel htmlFor="validationServer01">
                                      Email
                                    </CFormLabel>
                                    <CFormInput
                                      type="email"
                                      id="validationServer01"
                                      placeholder="Enter your email address"
                                      onChange={changeEmailHandler}
                                      valid={isFocused && isValid}
                                      invalid={isFocused && !isValid}
                                      required
                                    />
                                    <CFormFeedback valid>
                                      Looks good!
                                    </CFormFeedback>
                                    <CFormFeedback invalid>
                                      {email.length > 0
                                        ? "Invalid email address"
                                        : "Email is required"}
                                    </CFormFeedback>
                                  </CCol>
                                  <CCol xs={12}>
                                    <CFormLabel htmlFor="validationServer02">
                                      Password
                                    </CFormLabel>
                                    <CFormInput
                                      type="password"
                                      id="validationServer02"
                                      placeholder="Enter password"
                                      onChange={(event) => {
                                        setPassword(event.target.value);
                                      }}
                                      valid={isFocused && password.length > 0}
                                      invalid={
                                        isFocused && password.length <= 0
                                      }
                                      required
                                    />
                                    <CFormFeedback valid>
                                      Looks good!
                                    </CFormFeedback>
                                    <CFormFeedback invalid>
                                      Password is required
                                    </CFormFeedback>
                                  </CCol>

                                  <CCol xs={12}>
                                    <CButton
                                      className="btn-block mt-4"
                                      color="primary"
                                      type="submit"
                                      disabled={loading}
                                    >
                                      {loading ? "Processign..." : "Sign In"}
                                    </CButton>
                                  </CCol>
                                </CForm>
                                <div className="mt-4 d-flex text-center justify-content-center mb-2">
                                  <Link
                                    href="https://www.facebook.com/"
                                    target="_blank"
                                    className="btn btn-icon btn-facebook me-2"
                                    type="button"
                                  >
                                    <span className="btn-inner--icon">
                                      {" "}
                                      <i className="bx bxl-facebook tx-18 tx-prime"></i>{" "}
                                    </span>
                                  </Link>
                                  <Link
                                    href="https://www.twitter.com/"
                                    target="_blank"
                                    className="btn btn-icon me-2"
                                    type="button"
                                  >
                                    <span className="btn-inner--icon">
                                      {" "}
                                      <i className="bx bxl-twitter tx-18 tx-prime"></i>{" "}
                                    </span>
                                  </Link>
                                  <Link
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    className="btn btn-icon me-2"
                                    type="button"
                                  >
                                    <span className="btn-inner--icon">
                                      {" "}
                                      <i className="bx bxl-linkedin tx-18 tx-prime"></i>{" "}
                                    </span>
                                  </Link>
                                  <Link
                                    href="https://www.instagram.com/"
                                    target="_blank"
                                    className="btn  btn-icon me-2"
                                    type="button"
                                  >
                                    <span className="btn-inner--icon">
                                      {" "}
                                      <i className="bx bxl-instagram tx-18 tx-prime"></i>{" "}
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>

                            <div className="panel-body tabs-menu-body border-0 p-3">
                              <div className="tab-content"></div>
                            </div>
                          </div>

                          <div className="main-signin-footer text-center mt-3">
                            <p>
                              <Link href="" className="mb-3">
                                Forgot password?
                              </Link>
                            </p>
                            <p>
                              {`Don't`} have an account?{" "}
                              <Link
                                href={`/components/pages/authentication/sign-up/`}
                              >
                                Create an Account
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
