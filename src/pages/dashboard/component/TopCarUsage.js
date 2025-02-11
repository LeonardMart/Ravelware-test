import { useEffect } from "react";
import client from "../../../utils/mqttClient";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { useDispatch, useSelector } from "react-redux";
import { setCarUsage } from "../../../store/dashboard/dashboardSlice";

const TopCarUsage = () => {
  const dispatch = useDispatch();
  const carUsage = useSelector((state) => state.dashboard.carUsage);

  useEffect(() => {
    const handleMessage = (topic, message) => {
      if (topic === "test/top-5-car-usage") {
        try {
          const data = JSON.parse(message.toString());
          console.log("check",data)
          dispatch(setCarUsage(data));
        } catch (error) {
          console.error("Error parsing MQTT message:", error);
        }
      }
    };

    client.on("message", handleMessage);
    return () => {
      client.off("message", handleMessage);
    };
  }, [dispatch]);

  return (
    <div className="bg-gray-900 p-5 rounded-md shadow-md w-4/6">
      <h2 className="text-center text-white text-lg font-semibold mb-3">
        Top 5 Car Usage This Month
      </h2>
      {carUsage.length > 0 ? (
        <ResponsiveContainer width="100%" height={450}>
          <BarChart
            data={carUsage}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#555" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis
              stroke="#fff"
              label={{
                value: "Volume (Liter)",
                angle: -90,
                position: "insideLeft",
                fill: "#fff",
              }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#222",
                borderRadius: "5px",
                color: "#fff",
              }}
              cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              wrapperStyle={{ color: "#fff" }}
            />
            <Bar
              dataKey="usage"
              fill="#5eead4"
              name="Fuel Used (L)"
              barSize={40}
            />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p className="text-white text-center">Fetching data...</p>
      )}
    </div>
  );
};

export default TopCarUsage;
