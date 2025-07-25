import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const UserLogger = ({ userId }) => {
  const location = useLocation();

  useEffect(() => {
    const logVisit = async () => {
      if (!userId) return;

      try {
        await axios.post("http://localhost:5000/api/logs", {
          userId,
          path: location.pathname,
          userAgent: navigator.userAgent,
          timestamp: new Date(),
        });
        console.log("Visit logged:", location.pathname);
      } catch (err) {
        console.error("Logging failed:", err.message);
      }
    };

    logVisit();
  }, [location.pathname]);

  return null;
};

export default UserLogger;
