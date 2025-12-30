import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Back } from "../components/Back";
export function Profile(){
    const[profile,setProfile]=useState({});
    const navigate = useNavigate();
    useEffect( () => {
         axios.get("http://localhost:3000/api/v1/user/profile", 
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
        )
        .then(response => {
            setProfile(response.data);
        })
    }, [])
    return <div className="bg-slate-300 h-screen flex justify-center">
            <Back onClick={()=>{navigate(-1);}}/>
                <div className="flex flex-col justify-center">
                    <div className="rounded-lg bg-amber-50 w-80 text-center p-2 h-max px-4">
                        <h1 className="text-3xl font-bold italic p-5">Profile Page</h1>
                        <div className="pt-15 pb-15 pl-5 pr-5">
                            <div className="text-xl font-semibold mt-5 text-left ">Email:{profile.username}</div>
                            <div className="text-xl font-semibold mt-5 text-left">Name:{profile.firstName} {profile.lastName}</div>
                            <div className="text-xl font-semibold mt-5 text-left">Balance:{profile.balance?profile.balance.toFixed(2):"Getting balance from the bank"}</div>
                        </div>
                    </div>
                </div>
            </div>
}