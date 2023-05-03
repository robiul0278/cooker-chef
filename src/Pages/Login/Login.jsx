import React, { useContext } from "react";
import { Link, useLoaderData, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { GithubAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const GitProvider = new GithubAuthProvider();
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';


  // Google Login ==========================

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const user = result.user;
      console.log(user)
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }


  // GitHub Login ===========================

  const handleGit = () => {
    signInWithPopup(auth, GitProvider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GithubAuthProvider.credentialFromError(error);
  });
  }

  // email password login ====================

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // console.log(user);
      navigate(from, {replace: true})
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  };
  return (
    <div className="hero p-14 bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl p-14 font-bold">Login now!</h1>
        </div>
        <form
          onSubmit={handleLogin}
          className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div>
              <h2 className="text-center pt-4  font-bold">OR</h2>
              <h2 className="font-semibold pb-4">
                Login easily with your Google or GitHub account
              </h2>
              <div className="gap-5 flex">
                <button onClick={handleGoogle} className="btn bg-white hover:bg-gray-400 text-black w-44">
                  <FcGoogle className="mr-2"></FcGoogle> Google
                </button>
                <button onClick={handleGit} className="btn w-44 hover:bg-gray-400 bg-slate-600">
                  <FaGithub className="mr-2"></FaGithub> GitHub
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <div className="text-center card-body">
            <div>
              New to Cooker Ten ?
              <Link to="/register" className=" text-blue-600">
                Create an account.
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
