import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hook/useTitle";
import { toast } from "react-toastify";
import axios from "axios";
import { async } from "@firebase/util";

const SellerPost = () => {
  UseTitle("My Products");
  const { user } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/myProduct?email=${user?.email}`
      );
      setTableData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData();
  }, [user?.uid]);

  const handleDelete = id => {
    console.log(id);
    fetch(`http://localhost:5000/deleteAdvertise/${id}`, {
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
          toast.success("Deleted successfully");
          getData();
        }
      });
  };

  const handleAddAdvertise = id => {
    console.log(id);

    if (user?.email) {
      const updateDate = { ads: true };

      fetch(`http://localhost:5000/addAdvertise/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updateDate),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data?.message) {
            toast.error(data.message);
          } else {
            getData();
            toast.success("Added to Advertise successfully");
          }
        });
    }
  };

  const handleRemoveAdvertise = id => {
    console.log(id);

    if (user?.email) {
      const updateDate = { ads: false };

      fetch(`http://localhost:5000/addAdvertise/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(updateDate),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data?.message) {
            toast.error(data.message);
          } else {
            getData();
            toast.success("Removed to Advertise successfully");
          }
        });
    }
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-white text-center text-3xl font-semibold my-10">
        <span className="p-1 border-b-2 border-primary">
          My <span className="text-primary">Products</span>
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
                  <th></th>
                  <th>Price</th>
                  <th>Status</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {tableData?.map(item => (
                  <tr key={item?._id}>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item?.img} alt={item?.name} />
                        </div>
                      </div>
                    </td>
                    <td colSpan={2}>{item?.name}</td>
                    <td>{item?.resalePrice}</td>
                    <td>{item?.status}</td>
                    <td>
                      {item?.status !== "Sold" && (
                        <>
                          {" "}
                          {item?.status === "Available" && item?.ads ? (
                            <button
                              className="btn btn-error btn-sm"
                              onClick={() => handleRemoveAdvertise(item?._id)}
                            >
                              Remove Advertise{" "}
                            </button>
                          ) : (
                            <button
                              className="btn btn-info btn-sm"
                              onClick={() => handleAddAdvertise(item?._id)}
                            >
                              Add to Advertise{" "}
                            </button>
                          )}
                        </>
                      )}
                    </td>
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

export default SellerPost;
