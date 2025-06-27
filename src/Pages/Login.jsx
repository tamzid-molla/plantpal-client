import React, { useContext, useEffect, useState } from "react";
import { FaEnvelope, FaLock, FaGoogle, FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Context/FirebaseContext";
import Swal from "sweetalert2";
import login from '../assets/login.png'

const Login = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { loginWithEmailPass, googleLogin, setUser, setLoading } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    loginWithEmailPass(email, password)
      .then((userCredential) => {
        const newUser = userCredential.user;
        if (newUser) {
          setUser(newUser);
          Swal.fire({
            icon: "success",
            title: "Login successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(location.state || "/");
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Incorrect email or password. Please try again",
          footer: err.message,
        });
        setLoading(false);
        e.target.reset();
      });
  };

  useEffect(() => {
    document.title = "PlantPal || Login";
  }, []);

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        Swal.fire({
          icon: "success",
          title: "Login successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state || "/");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Try again",
          footer: err.message,
        });
      });
  };

  return (
    <div className="pt-20">
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-teal-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-300 rounded-full -translate-x-20 -translate-y-20 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-teal-400 rounded-full translate-x-20 translate-y-20 opacity-20"></div>

      <div className="relative flex max-w-6xl p-3 gap-5 flex-col md:flex-row w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={login}
            alt="Login Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500" />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-2 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-400"
                required
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500" />
              {!show ? (
                <button type="button" onClick={() => setShow(!show)}>
                  <FaEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500 cursor-pointer" />
                </button>
              ) : (
                <button type="button" onClick={() => setShow(!show)}>
                  <FaRegEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500 cursor-pointer" />
                </button>
              )}
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full pl-10 pr-10 py-2 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-200"
            >
              Sign In
            </button>
          </form>
          <div className="flex items-center justify-center mt-4">
            <hr className="w-full border-teal-200" />
            <span className="px-3 text-gray-500">or</span>
            <hr className="w-full border-teal-200" />
          </div>
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-200 flex items-center justify-center gap-2 mt-4"
          >
            <FaGoogle />
            Sign in with Google
          </button>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-teal-500 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;