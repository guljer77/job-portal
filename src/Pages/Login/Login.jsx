import { FaFaceGrinStars } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { TbFidgetSpinner } from "react-icons/tb";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { IoIosEye,IoIosEyeOff } from "react-icons/io";

function Login() {
  // const [query, setQuery] = useState("");
  // const showPassword = (event) =>{
  //   setQuery(event.target.value);
  //   console.log(query);
  // }
  const { loading, setLoading, loginUser, googleAuth } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userLoginHandle = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if ((email, password)) {
      loginUser(email, password)
        .then(() => {
          navigate(from, { replace: true });
        })
        .catch(error => {
          setLoading(false);
          console.log(error.message);
        });
    }
  };

  const googleAuthLogin = () => {
    googleAuth()
      .then(() => {
        navigate(from, { replace: true });
      })
      .catch(error => {
        setLoading(false);
        console.log(error.message);
      });
  };

  return (
    <div className="flex items-center justify-center bg-black/75 w-full h-screen">
      <div className="p-10 bg-white w-[420px] rounded-md shadow-lg">
        <div>
          <FaFaceGrinStars className="text-[36px] mx-auto text-blue" />
          <h4 className="text-center text-[22px] font-semibold text-primary py-5">
            Welcome
          </h4>
          <form onSubmit={userLoginHandle} action="">
            <div className="pb-3">
              <label
                htmlFor=""
                className="block pb-2 text-[16px] font-light text-black"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter Your Email"
                className="w-full py-[6px] pl-3 border border-gray-200 outline-0"
              />
            </div>
            <div className="pb-3">
              <label
                htmlFor=""
                className="block pb-2 text-[16px] font-light text-black"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter Your Password"
                className="w-full py-[6px] pl-3 border border-gray-200 outline-0"
              />
              <p className="pt-2 text-blue-600 cursor-pointer">
                forget password?
              </p>
            </div>
            <div className="pb-3">
              <button
                type="submit"
                className="w-full bg-blue py-[6px] text-white uppercase text-[16px] font-semibold"
              >
                {loading ? (
                  <TbFidgetSpinner size={24} className="mx-auto animate-spin" />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </form>
          <p>
            Do not have an account?
            <Link to="/signUp" className="text-blue underline pl-2">
              Sign Up
            </Link>
          </p>
          <div className="py-3">
            <button
              onClick={googleAuthLogin}
              className="flex items-center gap-2 py-[6px] px-5 w-full border"
            >
              <AiFillGoogleCircle className="text-[26px] text-blue" />
              Continue With google?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
