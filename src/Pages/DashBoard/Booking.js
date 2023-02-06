import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hook/useTitle";
import BookingRow from "./BookingRow";

const Booking = () => {
  UseTitle("My Orders");
  const { user } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);

  const getData = () => {
    fetch(`http://localhost:5000/booking?email=${user?.email}`)
      .then(res => res.json())
      .then(data => setTableData(data));
  };
  useEffect(() => {
    getData();
  }, [user?.uid]);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-white text-center text-3xl font-semibold my-10">
        <span className="p-1 border-b-2 border-primary">
          My <span className="text-primary">Orders</span>
        </span>
      </h1>
      <div className="  ">
        {tableData.length > 0 ? (
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Seller Name</th>
                  <th>Payment Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map(item => (
                  <BookingRow key={item?._id} item={item} />
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="min-h-[50vh] text-2xl flex justify-center items-center">
            Did not have any booking product{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
