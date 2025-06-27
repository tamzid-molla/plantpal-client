import { useContext, useEffect, useState } from 'react';
import { FaUser, FaEnvelope, FaLink, FaLock, FaEyeSlash, FaRegEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Context/FirebaseContext';
import Swal from 'sweetalert2';
import signUp from "../assets/Sign up-bro.png"

const Register = () => {
  const [show, setShow] = useState(false);
  const [shows, setShows] = useState(false);
  const navigate = useNavigate();
  const { registerWithEmailPass, updateUser, setUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const photoURL = formData.get('photoURL');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;

    if (!passwordRegex.test(password)) {
      return Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must contain at least one lowercase and one uppercase letter.",
        footer: 'Try again'
      });
    }

    if (password.length < 6) {
      return Swal.fire({
        icon: "error",
        title: "Weak Password",
        text: "Password must be at least 6 characters long",
        footer: 'Try again'
      });
    }

    if (password !== confirmPassword) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords do not match",
        footer: 'Please try again'
      });
    }

    registerWithEmailPass(email, password)
      .then(userCredential => {
        const newUser = userCredential.user;
        if (newUser) {
          updateUser({
            displayName: name,
            photoURL: photoURL
          })
            .then(() => {
              setUser({ ...newUser, displayName: name, photoURL: photoURL });
            })
            .catch(err => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Something went wrong! Please try again",
                footer: err.message
              });
              setUser(newUser);
            });

          Swal.fire({
            icon: "success",
            title: "Registration successful",
            showConfirmButton: false,
            timer: 1500
          });
          navigate('/');
        }
      })
      .catch(err => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Please try again",
          footer: err.message
        });
        e.target.reset();
      });
  };

  useEffect(() => {
    document.title = "PlantPal || Register";
  }, []);

  return (
    <div className="pt-20">
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-teal-50 relative overflow-hidden">
      
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-300 rounded-full -translate-x-20 -translate-y-20 opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-teal-400 rounded-full translate-x-20 translate-y-20 opacity-20"></div>

      <div className="relative flex flex-col md:flex-row max-w-6xl p-3 gap-5 w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Image Section */}
        <div className="hidden md:block md:w-1/2">
          <img
            src={signUp}
            alt="SignUp Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-center text-teal-600 mb-6">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="w-full pl-10 pr-4 py-2 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-400"
                required
              />
            </div>
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
              <FaLink className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500" />
              <input
                type="url"
                name="photoURL"
                placeholder="Photo URL"
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
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-500" />
              {!shows ? (
                <button type="button" onClick={() => setShows(!shows)}>
                  <FaEyeSlash className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500 cursor-pointer" />
                </button>
              ) : (
                <button type="button" onClick={() => setShows(!shows)}>
                  <FaRegEye className="absolute right-3 top-1/2 transform -translate-y-1/2 text-teal-500 cursor-pointer" />
                </button>
              )}
              <input
                type={shows ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full pl-10 pr-10 py-2 border border-teal-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 placeholder:text-gray-400"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition duration-200"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <Link to="/login" className="text-teal-500 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;