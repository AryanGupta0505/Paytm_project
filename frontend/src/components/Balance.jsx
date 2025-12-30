import axios from "axios";
import { useEffect, useState } from "react";
import { useRef } from "react";
// import {Popup} from "./Popup";
export const Balance = () => {
    const[balance,setBalance]=useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const divRef=useRef();
    useEffect(()=>{
        axios.get("http://localhost:3000/api/v1/account/balance",{
                    headers: {
                        Authorization: "Bearer " + localStorage.getItem("token")
                    }
            }).then(response=>{
                setBalance(response.data.balance);
            })
    },[balance])
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div ref={divRef} className="font-semibold ml-4 text-lg">
            {/* Rs {value.toFixed(2)} */}
            <button onClick={()=>{
                // axios.get("http://localhost:3000/api/v1/account/balance",{
                //     headers: {
                //         Authorization: "Bearer " + localStorage.getItem("token")
                //     }
                // }).then(response=>{
                //     setBalance(response.data.balance);
                // })
                divRef.current.innerHTML="₹ "+balance.toFixed(2);
            }} className="w-full text-black bg-lime-200 hover:bg-lime-300 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2">Check Balance</button>
            {/* <div>
             <button onClick={() => setShowPopup(true)}>Open Popup</button>

      {showPopup && <Popup onClose={() => setShowPopup(false)} />} */}
        </div>
    </div>
}