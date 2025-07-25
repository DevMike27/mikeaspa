import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const Dahsboard = () => {
  const location = useLocation();
  const LOCAL = "http://localhost:5000";
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.post(`${LOCAL}/api/user/logs`, {
          userId: location.state.userId,
        });
        setLogs(response.data.logs);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Welcome to the admin dashboard!</p>
      {/* Additional dashboard content can go here */}

      <div className="p-4 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">User Visit Logs</h2>
        <table className="min-w-full border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-3 py-2">User</th>
              <th className="border px-3 py-2">Path</th>
              <th className="border px-3 py-2">IP Address</th>
              <th className="border px-3 py-2">Browser Info</th>
              <th className="border px-3 py-2">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((logs) => (
              <tr key={logs._id} className="hover:bg-gray-50">
                <td className="border px-3 py-2">
                  {logs.userId?.name || logs.userId || "Anonymous"}
                </td>
                <td className="border px-3 py-2">{logs.path}</td>
                <td className="border px-3 py-2">{logs.ipAddress}</td>
                <td className="border px-3 py-2 truncate max-w-xs">
                  {logs.userAgent}
                </td>
                <td className="border px-3 py-2">
                  {new Date(logs.timestamp).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dahsboard;
