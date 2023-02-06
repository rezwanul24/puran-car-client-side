import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hook/useTitle";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  UseTitle("Login");
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = data => {
    console.log(data);
    setLoginError("");
    setLoading(true);
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        if (user?.email) {
          fetch(
            `https://puran-car-server-side.vercel.app/jwt?email=${user?.email}`,
            {
              method: "GET",
              headers: {
                "content-type": "application/json",
              },
            }
          )
            .then(res => res.json())
            .then(fData => {
              setLoading(false);
              if (fData?.accessToken) {
                console.log("token", fData);
                localStorage.setItem("token", fData.accessToken);
              }
            });
        }
        // setLoading('flase')
        navigate(from, { replace: true });
        toast.message("Login Successfully.");
      })
      .catch(error => {
        setLoading(false);
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogle = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        //console.log(user);
        if (user?.email) {
          const loginData = {
            userName: user?.displayName,
            email: user?.email,
            role: "buyer",
            isSellerVerify: false,
          };
          fetch(
            `https://puran-car-server-side.vercel.app/user/${user?.email}`,
            {
              method: "PUT",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(loginData),
            }
          )
            .then(res => res.json())
            .then(data => {
              localStorage.setItem("token", data.token);
              //console.log(data);
              // navigate(from, { replace: true });
            });
        }
        navigate(from, { replace: true });
        toast.message("Login Successfully.");
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="flex gap-5  min-h-screen bg-base-200  flex-col justify-center items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Login now!</h1>
      </div>
      <div className="card w-11/12 lg:w-4/12  mx-auto  shadow-2xl bg-base-100 p-5">
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full"
            />
            <label className="label">
              {" "}
              <span className="label-text">Forget Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600">{errors.password?.message}</p>
            )}
          </div>

          <input className="btn w-full" value="Login" type="submit" />
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p>
          New to Puran Car{" "}
          <Link className="text-secondary" to="/signup">
            Create new Account
          </Link>
        </p>
        <div className="divider">OR</div>
        {loading && (
          <div>
            <span className="loader"></span>
          </div>
        )}
        <button
          className="btn btn-outline w-full"
          onClick={() => handleGoogle()}
        >
          CONTINUE WITH GOOGLE (only for buyer)
        </button>
      </div>
    </div>
  );
};

export default Login;
