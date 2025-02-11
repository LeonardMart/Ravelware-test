import { useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import client from "../../../utils/mqttClient";
import { useDispatch, useSelector } from "react-redux";
import { setFuelUsage } from "../../../store/dashboard/dashboardSlice";

const FuelUsage = () => {
  const dispatch = useDispatch();
  const fuelUsage = useSelector((state) => state.dashboard.fuelUsage);

  useEffect(() => {
    const handleMessage = (topic, message) => {
      if (topic === "test/fuel-usage") {
        try {
          const data = JSON.parse(message.toString());

          const totalUsage = data.reduce((sum, item) => sum + item.usage, 0);

          const formattedData = data.map((item) => ({
            name: item.name,
            value: item.usage,
            percentage: ((item.usage / totalUsage) * 100).toFixed(1),
          }));

          dispatch(setFuelUsage(formattedData));
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

  const colors = [
    "#d946ef",
    "#22c55e",
    "#facc15",
    "#f43f5e",
    "#3b82f6",
    "#06b6d4",
  ];

  return (
    <div className="bg-gray-900 p-5 rounded-md shadow-md w-2/6">
      <h2 className="text-center text-white text-lg font-semibold mb-3">
        FUEL USAGE THIS MONTH
      </h2>
      {fuelUsage.length > 0 ? (
        <>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={fuelUsage}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={60}
                label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              >
                {fuelUsage.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="mt-5">
            <table className="w-full text-white border border-gray-700">
              <thead>
                <tr className="bg-gray-800 text-center">
                  <th className="p-2">FUEL NAME</th>
                  <th className="p-2">RATIO %</th>
                  <th className="p-2">Jumlah (L)</th>
                </tr>
              </thead>
              <tbody>
                {fuelUsage.map((fuel, index) => (
                  <tr
                    key={index}
                    className="text-center border-t border-gray-700"
                  >
                    <td
                      className="p-2"
                      style={{ color: colors[index % colors.length] }}
                    >
                      {fuel.name}
                    </td>
                    <td className="p-2">{fuel.percentage}%</td>
                    <td className="p-2">{fuel.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <p className="text-white text-center">Fetching data...</p>
      )}
    </div>
  );
};

export default FuelUsage;
