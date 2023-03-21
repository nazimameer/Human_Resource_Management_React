import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function EmployeeVerify({ children }) {
  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("employeejwt")) {
      Navigate("/employee/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}
