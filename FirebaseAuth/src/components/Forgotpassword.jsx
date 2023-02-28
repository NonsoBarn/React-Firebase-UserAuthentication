import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useUserAuth } from "./context/UserAuthContext";
import { UilExclamationTriangle } from "@iconscout/react-unicons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Forgotpassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const { forgotPassword } = useUserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgotPassword(email);
      toast.success("Password Reset Link Sent", {
        position: "top-center",
        hideProgressBar: true,
      });
      navigate("/");
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
            Forgot Password?
          </h1>
          <p className="text-sm text-center pb-5">
            Just type in the email you registered with, a reset link will be
            sent to your mailbox.
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Enter your email address"
            />

            <div className="pb-5">
              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none my-1"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        <div className="text-grey-dark mt-6">
          Did you remember your password?
          <Link className="no-underline border-b border-blue text-blue" to="/">
            Try logging in
          </Link>
          .
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
