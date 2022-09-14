import { useRef, useState, useEffect } from 'react'; 
import axios from '../axios'; 
const LOGIN_URL = '/auth';

export const Login = () => {
    const userRef = useRef(); 
    const errRef = useRef();

    const [user, setUser] = useState(''); 
    const [pwd, setPwd] = useState(''); 
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({user, pwd}),
                {
                    headers: { 'Content-type': 'application/json'},
                    withCredentials: true 
                }
            );
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            setUser(''); 
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response'); 
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password'); 
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized'); 
            } else {
                setErrMsg('Login Failed'); 
            }
            errRef.current.focus();

        }
    
    }
    

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


        <section> 
            <p ref={errRef} className={errMsg ? "errmsg" : 
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            {user}
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input 
                    type="text"
                    id="username"
                    ref={userRef} 
                    autoComplete="off" 
                    onChange={(e) => setUser(e.target.value)}
                    value={user} 
                    required 
                />

                <label htmlFor="password">Password:</label>
                <input 
                    type="password"
                    id="password"
                    autoComplete="off" 
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd} 
                    required 
                />
                <button>Sign In</button>
            </form>
            <p> 
                Need an Account?<br /> 
                <span className="line">
                    {/* put router link here*/}
                    <a href="#">Sign Up</a>
                </span>
            </p>
        </section>
        )}
        </>

    )
}

export default Login 



{/* <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white" style="border-radius: 1rem;">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">Please enter your login and password!</p>

              <div class="form-outline form-white mb-4">
                <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                <label class="form-label" for="typeEmailX">Email</label>
              </div>

              <div class="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                <label class="form-label" for="typePasswordX">Password</label>
              </div>

              <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                <a href="#!" class="text-white"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}


// .gradient-custom {
//     /* fallback for old browsers */
//     background: #6a11cb;
    
//     /* Chrome 10-25, Safari 5.1-6 */
//     background: -webkit-linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1));
    
//     /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
//     background: linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))
//     }