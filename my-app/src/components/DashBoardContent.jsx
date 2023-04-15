import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function DashBoardContent() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (
        async () => {
            const res = await fetch("http://localhost:8000/user", {
                method: "GET",
                headers: { "content-type": "application/json" },
              })
                .then((res) => {
                  res = res.json()
                  return res;
                })
                .catch((err) => {
                    toast.error("Failed :" + err.message);
                });
            setUsers(res);
        }
    )();
  }, []);
  return (
    <div className="flex ">
      {users?.map((user) => {
        console.log(user);
        return (
          <>
            <div
              className="card text-white bg-primary mb-3"
              style={{"max-width": "18rem"}}
            >
              <div className="card-header">{user?.firstName +" "+ user?.lastName}</div>
              <div className="card-body">
                <h5 className="card-title">{user?.email}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default DashBoardContent;
