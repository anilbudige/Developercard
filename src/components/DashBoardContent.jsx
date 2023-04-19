import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  FaUser,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";

function DashBoardContent() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:8000/user", {
        method: "GET",
        headers: { "content-type": "application/json" },
      })
        .then((res) => {
          res = res.json();
          return res;
        })
        .catch((err) => {
          toast.error("Failed :" + err.message);
        });
      setUsers(res);
    })();
  }, []);
  return (
    <div className="details">
      {users?.map((user) => {
        console.log(user);
        return (
          <>
            <div className="pt-3">
              <div className="card">
                <div className="card-body">
                  <h5>DEVELOPER CARD DETAILS</h5>
                  <div className="d-flex flex-row justify-content-center">
                    <div>
                      <p>Name : {user?.firstName + " " + user?.lastName} </p>
                      <p>
                        Email :{" "}
                        <a
                          href="https://mail.google.com/"
                          className="text-black"
                          target="_blank"
                        >
                          {" "}
                          {user?.email}
                        </a>
                      </p>
                      <p>
                        <a href="https://github.com/" target="_blank">
                          <FaGithub size="2rem" color="black" />
                        </a>
                        <a href="https://www.linkedin.com/in/" target="_blank">
                          <FaLinkedin size="2rem" color="black" />{" "}
                        </a>
                        <a href="https://www.facebook.com/" target="_blank">
                          <FaFacebook size="2rem" color="black" />{" "}
                        </a>
                        <a
                          href="https://twitter.com/i/flow/login"
                          target="_blank"
                        >
                          <FaTwitter size="2rem" color="black" />{" "}
                        </a>
                      </p>
                    </div>
                    <FaUser size="7rem" color="black" />
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default DashBoardContent;
