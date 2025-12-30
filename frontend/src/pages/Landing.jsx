import { useNavigate } from "react-router-dom"
export function Landing() {
    const navigate=useNavigate();
    return <div className="bg-slate-300 h-screen grid ">
        <div>
            <img src="../../../logo/paytm-icon.svg" alt="PayTM Logo" className="h-30 w-50 justify-self-center align-self-center"/>
        </div>
        <div className="justify-self-center align-self-center text-2xl font-semibold text-center px-4">
            <p>Be ready to manage your finances with ease.</p>
            <p>Make secure and seamless transactions anytime, anywhere.</p>
        </div>
        <div className="flex justify-center items-center">
            <div className="justify-self-center align-self-center mr-20">
            <button onClick={()=>{
                navigate("/signup");
            }} className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Create an account</button>
            </div>
            <div className="justify-self-center align-self-center ml-20">
                <button onClick={()=>{
                    navigate("/signin");
                }} className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Log in</button>
            </div>
        </div>
    </div>
}