import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
import { Back } from "./Back";
export const Appbar = () => {
    const navigate = useNavigate();
    const[profileData,setProfileData]=useState({});
        useEffect( () => {
             axios.get("http://localhost:3000/api/v1/user/profile", 
                {
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
                }
            )
            .then(response => {
                setProfileData(response.data);
            })
        }, [])
    return (
        <div className="shadow h-14 flex items-center relative">
          <div className="absolute -top-2 left-0  ">
            <Back onClick={() => navigate(-1)} />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <img src="../../../logo/paytm-icon.svg" className="h-6" alt="PayTM Logo" />
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center">
            <div className="mr-4 font-medium">Hello {profileData.firstName}</div>
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center items-center">
              <button
                className="text-xl"
                onClick={() => navigate("/profile")}
              >
                {profileData.firstName ? profileData.firstName[0] : "Me"}
              </button>
            </div>
          </div>
        </div>
);


}