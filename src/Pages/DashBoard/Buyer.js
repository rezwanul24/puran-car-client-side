import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hook/useTitle";

const Buyer = () => {
  UseTitle("My Orders");
  const { user } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);

  const getData = () => {
    fetch(
      `https://puran-car-server-side.vercel.app/myBuyers?email=${user?.email}`
    )
      .then(res => res.json())
      .then(data => setTableData(data));
  };
  useEffect(() => {
    getData();
  }, [user?.uid]);

  console.log(tableData);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-white text-center text-3xl font-semibold my-10">
        <span className="p-1 border-b-2 border-primary">
          My <span className="text-primary">Buyers</span>
        </span>
      </h1>
      <div className=" w-10/12 mx-auto ">
        {tableData.length > 0 ? (
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Location</th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map(item => (
                  <tr key={item?._id}>
                    <td>{item?.buyerName}</td>
                    <td>{item?.phone}</td>
                    <td>{item?.buyerEmail}</td>
                    <td>{item?.meetingLocation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="min-h-[50vh] text-2xl flex justify-center items-center">
            You did not add any Buyer
          </div>
        )}
      </div>
    </div>
  );
};

export default Buyer;
