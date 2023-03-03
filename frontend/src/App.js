import { BrowserRouter, Routes, Route } from "react-router-dom";
import HrVerify from "./Authentication/HrVerify";
import LandingPage from "./Pages/LandingPage";
import HrRoutes from "./Routes/HrRoutes";
import Login from "./Pages/HrPages/Login";
import EmployeeRoutes from './Routes/employeeRoutes'

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/hr/login" element={<Login />} />

          <Route path="/hr/*" element={<HrVerify><HrRoutes /></HrVerify>}/>
          <Route path="/employee/*" element={ <EmployeeRoutes/> }/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
