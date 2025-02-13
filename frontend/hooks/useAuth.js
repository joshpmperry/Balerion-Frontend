import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/auth/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUser(decoded);
    } catch (error) {
      console.error("Invalid token:", error);
      localStorage.removeItem("token");
      navigate("/auth/login"); 
    }
  }, [navigate]);

  const login = (token) => {
    try {
      const decoded = jwtDecode(token);
      localStorage.setItem("token", token);
      setUser(decoded);
      navigate("/");
    } catch (error) {
      console.error("Invalid token:", error);
    }
  };

  return { user, login };
};