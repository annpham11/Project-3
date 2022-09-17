import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../axios";
const LOGIN_URL = "/login";

export const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email: user, password: pwd }),
        {
          headers: { "Content-type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(JSON.stringify(response?.data));
      //console.log(JSON.stringify(response));
      const accessToken = response?.data?.accessToken;
      setUser("");
      setPwd("");
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to Home</a>
          </p>
        </section>
      ) : (
        <div className="container-fluid colored-section" id="login_form">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="images/login_pic.png"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <p
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1>Sign In</h1>
              {/* {user} */}
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example4">
                    Email address
                  </label>
                  <input
                    type="text"
                    id="email"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" for="form3Example5">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    autoComplete="off"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                </div>
                <div className="form-outline mb-4">
                  <button className="btn btn-primary btn-lg">Sign In</button>
                </div>
              </form>
              <p>
                Need an Account?
                <br />
                <span className="line">
                  {/* put router link here*/}
                  <Link to="/signup">Sign Up</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;

// <div className="container-fluid h-custom vh-100 colored-section" id="login_form">
//   <div className="row d-flex justify-content-center align-items-center h-100">
//     <div className="col-md-9 col-lg-6 col-xl-5">
//       <img src="assets/login_pic.png" className="img-fluid" alt="Sample image" />
//     </div>
//     <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
//       <form id="log-in-form">
//         <section id="errors"></section>
//         <!-- Email input -->
//         <div className="form-outline mb-4">
//           <label className="form-label" for="form3Example4">Email address</label>
//           <input
//             type="text"
//             name="email"
//             id="form3Example3"
//             className="form-control form-control-lg"
//             placeholder="Enter a valid email address"
//           />
//         </div>

//         <!-- Password input -->
//         <div className="form-outline mb-3">
//           <label className="form-label" for="form3Example5">Password</label>
//           <input
//             type="password"
//             name="password"
//             id="form3Example4"
//             className="form-control form-control-lg"
//             placeholder="Enter password"
//           />
//         </div>

//         <div className="d-flex justify-content-between align-items-center">
//           <!-- Checkbox -->
//           <div className="form-check mb-0">
//             <input
//               className="form-check-input me-2"
//               type="checkbox"
//               value=""
//               id="form2Example3"
//             />
//             <label className="form-check-label" for="form2Example3">
//               Remember me
//             </label>
//           </div>
//           <a href="#!" className="text-body">Forgot password?</a>
//         </div>

//         <div className="text-right text-lg-start mt-4 pt-2">
//           <button
//             type="button"
//             className="btn btn-primary btn-lg"
//             style="padding-left: 2.5rem; padding-right: 2.5rem"
//           >
//             Login
//           </button>
//           <p className="small fw-bold mt-2 pt-1 mb-0">
//             Don't have an account?
//             <a href="register.html" className="link-danger">Register</a>
//           </p>
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
