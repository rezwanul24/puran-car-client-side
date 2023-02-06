import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hook/useTitle";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";

const SignUp = () => {
  UseTitle("Signup");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, googleSignIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const [signUpError, setSignUPError] = useState("");
  const [role, setRole] = useState("buyer");

  const handleSignUp = data => {
    console.log(data);
    setSignUPError("");
    setLoading(true);
    createUser(data.email, data.password)
      .then(result => {
        setLoading(false);
        const user = result.user;
        console.log(user);

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            const loginData = {
              userName: user?.displayName,
              email: user?.email,
              role: role,
              isSellerVerify: false,
            };

            console.log(loginData);

            if (user?.uid) {
              fetch(`http://localhost:5000/user/${user?.email}`, {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(loginData),
              })
                .then(res => res.json())
                .then(data => {
                  localStorage.setItem("token", data.token);
                  console.log(data);
                  toast.success("User Created Successfully. with token");
                  //navigate(from, { replace: true });
                });
            }
            toast.success("User Created Successfully.");
            navigate(from, { replace: true });
          })
          .catch(err => {
            console.log(err);
          });
      })
      .catch(error => {
        console.log(error);
        setSignUPError(error.message);
      });
  };
  const googleProvider = new GoogleAuthProvider();
  const handleGoogle = () => {
    googleSignIn(googleProvider)
      .then(result => {
        const user = result.user;
        console.log(user);
        if (user?.email) {
          const loginData = {
            userName: user?.displayName,
            email: user?.email,
            role: "buyer",
            isSellerVerify: false,
          };
          fetch(`http://localhost:5000/user/${user?.email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(loginData),
          })
            .then(res => res.json())
            .then(data => {
              localStorage.setItem("token", data.token);
              console.log(data);
              navigate(from, { replace: true });
            });
        }
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="flex gap-5  min-h-screen bg-base-200  flex-col justify-center items-center">
      <div className="text-center lg:text-left">
        <h1 className="text-5xl font-bold">Signup Now!</h1>
      </div>
      <div className="card w-11/12 lg:w-4/12  mx-auto  shadow-2xl bg-base-100 p-5">
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full grid grid-cols-3 gap-4">
            <label className="label">
              {" "}
              <span className="label-text">Role:</span>
            </label>
            <div className="form-control">
              <label className="label cursor-pointer justify-evenly">
                <span className="label-text">Buyer</span>
                <input
                  type="radio"
                  name="role"
                  className="radio checked:bg-blue-500"
                  checked={role === "buyer"}
                  onChange={() => setRole("buyer")}
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer justify-evenly">
                <span className="label-text">Seller</span>
                <input
                  type="radio"
                  name="role"
                  className="radio  checked:bg-blue-500"
                  checked={role === "seller"}
                  onChange={() => setRole("seller")}
                />
              </label>
            </div>
          </div>

          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full "
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full "
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full ">
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
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>
          <input className="btn  w-full mt-4" value="Sign Up" type="submit" />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p>
          Already have an account{" "}
          <Link className="text-secondary" to="/login">
            Please Login
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

export default SignUp;
