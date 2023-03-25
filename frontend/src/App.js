import { BrowserRouter, Routes, Route } from "react-router-dom";
import HrVerify from "./Authentication/HrVerify";
import EmployeeVerify from './Authentication/EmployeeVerify'
import LandingPage from "./Pages/LandingPage";
import HrRoutes from "./Routes/HrRoutes";
import Login from "./Pages/HrPages/Login";
import EmployeeLogin from "./Pages/EmployeePages/EmployeeLogin";
import EmployeeRoutes from "./Routes/employeeRoutes";
import VerifyCheckIn from './Authentication/CheckIn';
import EmployeeCheckIn from './Pages/EmployeePages/EmployeeCheckIn';
import BlockedorNot from "./Authentication/BlockedorNot";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={ <LandingPage /> } />
          <Route path="/hr/login" element={ <Login /> } />
          <Route path="/employee/login" element={ <EmployeeLogin />} />
          <Route path="/employee/*" element={<BlockedorNot> <EmployeeVerify> <VerifyCheckIn> <EmployeeRoutes /> </VerifyCheckIn> </EmployeeVerify></BlockedorNot>} />
          <Route path='/employee/checkin' element={<EmployeeVerify> <EmployeeCheckIn />  </EmployeeVerify>} />
          <Route path="/hr/*" element={ <HrVerify> <HrRoutes /> </HrVerify> } />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
