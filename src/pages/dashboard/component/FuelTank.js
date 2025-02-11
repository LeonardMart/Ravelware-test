import { useEffect, useRef } from "react";
import client from "../../../utils/mqttClient";
import BarellIcon from "../../../assets/icon/barrel-icon";
import RightArrow from "../../../assets/icon/right-arrow";
import LeftArrow from "../../../assets/icon/left-arrow";
import { useDispatch, useSelector } from "react-redux";
import { setFuelStatus } from "../../../store/dashboard/dashboardSlice";

const FuelTank = () => {
  const dispatch = useDispatch();
  const fuelStatus = useSelector((state) => state.dashboard.fuelStatus);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const handleMessage = (topic, message) => {
      if (topic === "test/realtime") {
        try {
          const data = JSON.parse(message.toString());
          dispatch(setFuelStatus(data));
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

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 250;
      scrollContainerRef.current.scrollLeft +=
        direction === "next" ? scrollAmount : -scrollAmount;
    }
  };
  const getFuelColor = (fuelLevel) => {
    if (fuelLevel >= 60) return "bg-green-700";
    if (fuelLevel >= 20) return "bg-yellow-600";
    return "bg-red-700";
  };

  const getFuelLevel = (current, max) => {
    return (current / max) * 100;
  };
  return (
    <div className="flex flex-col space-y-4">
      <div className="text-2xl font-bold">REALTIME FUEL TANK STATUS</div>

      <div className="flex flex-row items-center justify-between max-w-screen space-x-4">
        <button
          onClick={() => scroll("prev")}
          className="p-2 bg-gray-300 text-white rounded-full"
        >
          <LeftArrow className="w-6 h-auto" />
        </button>

        <div className="flex items-center space-x-2 bg-gray-900 p-2 rounded-md w-full max-w-screen overflow-hidden">
          <div
            ref={scrollContainerRef}
            className="flex space-x-2 overflow-x-hidden scroll-smooth scrollbar-hide"
            style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
          >
            {fuelStatus.length > 0 ? (
              fuelStatus.map((item, index) => {
                let fuelLevel = getFuelLevel(
                  item.current_stock,
                  item.maxium_stock
                );
                let fuelColor = getFuelColor(fuelLevel);
                return (
                  <div
                    key={index}
                    className={`${fuelColor} w-[900px] p-2 flex flex-row space-x-2 rounded-md`}
                  >
                    <div className="bg-gray-800 p-1 flex flex-row space-x-2 items-center justify-center">
                      <div className="w-4 h-24 bg-gray-300 rounded-md mt-2 overflow-hidden relative z-20">
                        <div className="items-center justify-center w-full">
                          <div className="text-black text-[10px]">
                            {fuelLevel}
                          </div>
                          <div className="text-black text-[10px]">%</div>
                        </div>

                        <div
                          className={`absolute bottom-0 w-full transition-all duration-300 ${fuelColor}`}
                          style={{ height: `${fuelLevel}%` }}
                        />
                      </div>
                      <BarellIcon className="w-16 h-auto text-gray-300" />
                    </div>

                    <div className="flex flex-col justify-between items-start">
                      <div>
                        <div className="flex flex-row space-x-4 items-start justify-between w-full">
                          <div>{item.name}</div>
                          <div className="text-xs">Last transaction</div>
                        </div>
                        <div className="flex flex-row space-x-4 items-start justify-between w-full">
                          <div>
                            {item.current_stock}/{item.maxium_stock}L
                          </div>
                          <div className="text-xs">27 minutes ago</div>
                        </div>
                      </div>

                      <div>Status: {item.status}</div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p className="text-white text-center">Fetching data...</p>
            )}
          </div>
        </div>

        <button
          onClick={() => scroll("next")}
          className="p-2 bg-gray-300 text-white rounded-full"
        >
          <RightArrow className="w-6 h-auto" />
        </button>
      </div>
    </div>
  );
};

export default FuelTank;
