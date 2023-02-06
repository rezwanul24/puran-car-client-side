import { useEffect, useState } from "react";

const useUserRole = user => {
  const [role, setRole] = useState(false);
  const [roleLoading, setRoleLoading] = useState(true);

  useEffect(() => {
    const email = user?.email;
    if (email) {
      fetch(`http://localhost:5000/role/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then(res => res.json())
        .then(data => {
          setRole(data);
          setRoleLoading(false);
        });
    }
  }, [user?.email]);

  return [role, roleLoading];
};

export default useUserRole;
