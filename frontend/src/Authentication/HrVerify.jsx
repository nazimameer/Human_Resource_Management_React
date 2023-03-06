import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function HrVerify({ children }) {
  const Navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("hrjwt")) {
      Navigate("/hr/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return children;
}
