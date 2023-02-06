import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hook/useTitle";

const ReportedItems = () => {
  UseTitle("My Products");
  const { user } = useContext(AuthContext);
  const [tableData, setTableData] = useState([]);

  const getData = () => {
    fetch(`http://localhost:5000/getReport`)
      .then(res => res.json())
      .then(data => setTableData(data));
  };
  useEffect(() => {
    getData();
  }, [user?.uid]);

  const handleRemoveReport = id => {
    console.log(id);
    fetch(`http://localhost:5000/removeReport/${id}`, {
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
          toast.success("Remove Report successfully");
        }
      });
  };

  const handleRemovePost = (id, productId) => {
    fetch(`http://localhost:5000/removePost/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({ productId: productId }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data?.message) {
          toast.error(data.message);
        } else {
          getData();
          toast.success("Deleted Report Post successfully");
        }
      });
  };

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-white text-center text-3xl font-semibold my-10">
        <span className="p-1 border-b-2 border-primary">
          Reported<span className="text-primary"> Items</span>
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
                  <th>Seller Name</th>
                  <th>Seller Email</th>
                  <th>Buyer Name</th>
                  <th>Buyer Email</th>
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
                          <img src={item?.productImg} alt={item?.name} />
                        </div>
                      </div>
                    </td>
                    <td>{item?.productName}</td>
                    <td>{item?.sellerName}</td>
                    <td>{item?.sellerEmail}</td>
                    <td>{item?.buyerName}</td>
                    <td>{item?.buyerEmail}</td>
                    <td>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => handleRemoveReport(item?._id)}
                      >
                        Remove Report{" "}
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-error btn-sm"
                        onClick={() =>
                          handleRemovePost(item?._id, item?.productId)
                        }
                      >
                        Delete Report Product
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="min-h-[50vh] text-2xl flex justify-center items-center">
            Did not have any Report{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportedItems;
