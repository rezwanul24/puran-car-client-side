import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hook/useTitle";

const AllBuyers = () => {
  UseTitle("My Products");
  const { user } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);

  const getData = () => {
    fetch(`http://localhost:5000/allSellersAndBuyers?role=buyer`)
      .then(res => res.json())
      .then(data => setTableData(data));
  };
  useEffect(() => {
    getData();
  }, [user?.uid]);

  const handleVerify = id => {
    console.log(id);
  };

  const handleDelete = id => {
    console.log(id);
    fetch(`http://localhost:5000/deleteSellerAndBuyer/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data?.message) {
          toast.error(data.message);
        } else {
          getData();
          toast.success("Deleted Buyer successfully");
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-white text-center text-3xl font-semibold my-10">
        <span className="p-1 border-b-2 border-primary">
          All <span className="text-primary">Seller List</span>
        </span>
      </h1>
      <div className=" w-10/12 mx-auto ">
        {tableData.length > 0 ? (
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map((item, index) => (
                  <tr key={item?._id}>
                    <td>{index + 1}</td>
                    <td>{item?.userName}</td>
                    <td>{item?.email}</td>
                    <td>{item?.role}</td>
                    <td>
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() => handleDelete(item?._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="min-h-[50vh] text-2xl flex justify-center items-center">
            You did not add any product
          </div>
        )}
      </div>
    </div>
  );
};

export default AllBuyers;
