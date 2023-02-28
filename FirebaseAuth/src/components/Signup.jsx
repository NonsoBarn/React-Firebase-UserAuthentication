import { useState } from "react";
import googlelogo from "../assets/googlelogo.png";
import facebooklogo from "../assets/facebooklogo.png";
import { UilExclamationTriangle } from "@iconscout/react-unicons";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
import { toast } from "react-toastify";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup, googleSignIn, facebookSignIn } = useUserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, password);
      toast.success(
        "Account created Successfully. Kindly Sign in to Continue",
        {
          position: "top-center",
          hideProgressBar: true,
        }
      );
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async (e) => {
    e.preventDefault();

    try {
      await googleSignIn();
      toast.success(
        "Account created Successfully. Kindly Sign in to Continue",
        {
          position: "top-center",
          hideProgressBar: true,
        }
      );
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleFacebookSignup = async (e) => {
    e.preventDefault();
    try {
      await facebookSignIn();
      toast.success(
        "Account created Successfully. Kindly Sign in to Continue",
        {
          position: "top-center",
          hideProgressBar: true,
        }
      );
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-lg text-black w-full">
          <h1
            className="font-semibold
         mb-1 text-2xl text-center"
          >
            Get Started
          </h1>
          <p className="text-md text-center pb-5">
            Create an account to continue.
          </p>
          {error && (
            <div className="pb-5">
              <div
                className="bg-red-100 border-red-400 text-red-700 px-4 py-2 rounded relative"
                role="alert"
              >
                <span className="flex">
                  <UilExclamationTriangle className="pr-1" /> {error}
                </span>
              </div>
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="username"
              placeholder="User Name"
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="pb-5">
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"
              >
                Create Account
              </button>
            </div>
          </form>
          {/* divider */}
          <div class="relative flex py-2 items-center">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-4 text-gray-400">or</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
          {/* divider end */}
          {/* googlt btn */}
          <div className="pt-0">
            <button
              onClick={handleGoogleSignup}
              className="relative w-full text-center py-3 rounded-md bg-gray-100 hover:bg-gray-200 text-black  focus:outline-none shadow-md my-0"
            >
              <span className=" absolute top-2.5 left-3 p-0 text-sm font-medium text-gray-900  hover:text-gray-800 dark:text-white  ">
                <img className="w-7 h-7" src={googlelogo} />
              </span>
              Sign up with Google
            </button>
          </div>
          {/* facebook btn */}
          <div className="pt-5">
            <button
              onClick={handleFacebookSignup}
              className="relative w-full text-center py-3 rounded-md hover:bg-blue-900 text-white  focus:outline-none shadow-md my-0 bg-blue-800"
            >
              <span className=" absolute top-2.5 left-3 p-0 text-sm font-medium  ">
                <img className="w-7 h-7" src={facebooklogo} />
              </span>
              Sign up with Facebook
            </button>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <Link className="no-underline border-b border-blue text-blue" to="/">
            Log in
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Signup;
