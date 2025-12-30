import {BrowserRouter,Route,Routes} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { Landing } from "./pages/Landing";
import { Profile } from "./pages/Profile";
import { TransferSuccessful } from "./pages/TransferSuccessful";

function App() {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/transfer-successful" element={<TransferSuccessful/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
