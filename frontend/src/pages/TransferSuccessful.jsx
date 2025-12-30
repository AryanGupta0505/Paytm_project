import { useLocation ,useNavigate} from "react-router-dom";
import { Back } from "../components/Back";
import { Button } from "../components/Button";
export function TransferSuccessful() {
    const location = useLocation();
    const navigate=useNavigate();
    const { amount, name ,message,status } = location.state || {};
    return <div className="flex justify-center h-screen bg-gray-100 relative">
                <Back onClick={()=>{navigate(-1);}}/>
                <div className="h-full flex flex-col justify-center">
                    <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                        { (status)?
                            (<>
                                <div className="flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-16 text-teal-600">
                                        <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                        <animateTransform
                                            attributeName="transform"
                                            type="scale"
                                            dur="3s"
                                            values="1; 0.85; 1"
                                            repeatCount="indefinite"/>
                                    </svg>
                                    <div className="text-4xl font-bold text-teal-600">₹{amount}</div>
                                </div>
                                <div className="text-xl font-semibold text-teal-600 flex justify-center items-center">
                                    {message} to {name}!
                                </div>
                            </>):
                                (<div className="flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-red-600 mr-2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                                        <animateTransform
                                            attributeName="transform"
                                            type="scale"
                                            dur="3s"
                                            values="1; 0.85; 1"
                                            repeatCount="indefinite" />
                                    </svg>
                                    <div className="text-2xl font-bold text-red-600 flex justify-center items-center">
                                        {message}
                                    </div>
                                </div>)
                        }
                    </div>
                    <div className="mt-6">
                        <Button label="Go to Dashboard" onClick={() => navigate('/dashboard')} />
                    </div>
                </div>
            </div>
}