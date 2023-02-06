import React, { useContext } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hook/useTitle";
import { toast } from "react-toastify";

const SingleBike = ({ bike }) => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    name,
    img,
    category,
    location,
    resalePrice,
    originalPrice,
    UsedYears,
    postedTime,
    sellerName,
    isSellerVerify,
    sellerEmail,
    status,
    description,
    condition,
  } = bike;

  const handleFormSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const phone = form.phone.value;
    const meetingLocation = form.meetingLocation.value;

    const formData = {
      productId: _id,
      productName: name,
      productImg: img,
      price: resalePrice,
      buyerName: buyerName,
      buyerEmail: buyerEmail,
      phone: phone,
      meetingLocation: meetingLocation,
      sellerName: sellerName,
      sellerEmail: sellerEmail,
      pay: "UnPaid",
    };

    fetch("http://localhost:5000/addBooking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data?.message) {
          toast.error(data.message);
        } else {
          toast.success("booking successfully");
        }
      });
  };

  const handleReport = item => {
    const data = {
      productId: item._id,
      productName: item.name,
      productImg: item.img,
      sellerName: item.sellerName,
      sellerEmail: item.sellerEmail,
      buyerEmail: user?.email,
      buyerName: user?.displayName,
    };

    fetch("http://localhost:5000/addReport", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(data),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data?.message) {
          toast.error(data.message);
        } else {
          toast.success("report sent");
        }
      });
  };

  return (
    <>
      {/* modal  */}
      <input type="checkbox" id={`bookNow${_id}`} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={`bookNow${_id}`}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <p>
            <span className=" font-semibold">Resale Price:</span> {resalePrice}
          </p>
          <form onSubmit={handleFormSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input
                type="text"
                name="buyerName"
                value={user?.displayName}
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input
                type="text"
                name="buyerEmail"
                value={user?.email}
                className="input input-bordered"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Phone</span>
              </label>
              <input
                type="text"
                name="phone"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Meeting Location</span>
              </label>
              <input
                type="text"
                name="meetingLocation"
                className="input input-bordered"
                required
              />
            </div>
            <button className="btn btn-primary my-10 block mx-auto">
              <label htmlFor={`bookNow${_id}`}>Submit</label>
            </button>
          </form>
        </div>
      </div>

      {/* card  */}
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-[300px] h-[300px] mx-auto rounded-lg"
            src={img}
            alt="Album"
          />
        </figure>
        <div className="card-body relative">
          <h2 className="card-title">{name}</h2>
          <button
            onClick={() => handleReport(bike)}
            className="text-error text-right absolute top-4 right-4 hover:btn-ghost"
          >
            report to admin
          </button>
          <div className="grid grid-cols-3">
            <p>
              <span className=" font-semibold">Category:</span> {category}
            </p>
            <p>
              <span className=" font-semibold">Status:</span> {status}
            </p>
            <p>
              <span className=" font-semibold">Condition:</span> {condition}
            </p>
          </div>
          <p>
            <span className=" font-semibold">Location:</span> {location}
          </p>
          <hr />
          <div className="grid grid-cols-2">
            <p>
              <span className=" font-semibold">Resale Price:</span>{" "}
              {resalePrice}
            </p>
            <p>
              <span className=" font-semibold">Original Price:</span>{" "}
              {originalPrice}
            </p>
          </div>
          <p>
            <span className=" font-semibold">Years of used:</span> {UsedYears}
          </p>
          <p>
            <span className=" font-semibold">Description:</span> {description}
          </p>
          <hr />
          <div className="card-actions justify-between items-center">
            <div>
              <div className="grid grid-cols-2 gap-2">
                <span>Seller: {sellerName} </span>
                {isSellerVerify && (
                  <FaCheckCircle className="text-green-500 w-6 h-6" />
                )}
              </div>
              <p>Email: {sellerEmail}</p>
              <p>Post time: {postedTime}</p>
            </div>
            {isSellerVerify && status !== "Sold" && (
              <label htmlFor={`bookNow${_id}`} className="btn btn-primary">
                Book Now
              </label>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBike;
