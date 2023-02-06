import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";
import UseTitle from "../../Hook/useTitle";
import SingleBike from "./SingleBike";

const Category = () => {
  const { name } = useParams();
  const { user } = useContext(AuthContext);

  //const [bikes, setBikes] = useState([]);

  const { data: bikes = [], isLoading } = useQuery({
    queryKey: ["allBikes"],
    queryFn: async () => {
      const res = await fetch(
        `https://puran-car-server-side.vercel.app/allBikes?category=${name}`
      );
      const data = await res.json();
      return data;
    },
  });

  // useEffect(() => {
  //     fetch(`https://puran-car-server-side.vercel.app/allBikes?category=${name}`)
  //         .then(res => res.json())
  //         .then(data => setBikes(data))
  // }, [user?.uid])

  return (
    <div className="w-11/12 mx-auto min-h-[60vh] flex justify-center items-center">
      <div className="grid grid-cols-1 gap-4 w-10/12 mx-auto">
        {bikes.length > 0 ? (
          bikes.map(bike => <SingleBike key={bike._id} bike={bike} />)
        ) : (
          <div>No Data Available.</div>
        )}
      </div>
    </div>
  );
};

export default Category;
