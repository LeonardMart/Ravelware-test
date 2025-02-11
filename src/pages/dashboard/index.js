
import FuelTank from "./component/FuelTank";
import TopCarUsage from "./component/TopCarUsage";
import FuelUsage from "./component/FuelUsage";

const Dashboard = () => {
  return (
    <div className="text-center w-full flex flex-col space-y-2">
      <FuelTank />
      <div className="flex flex-row space-x-2 w-full">
        <TopCarUsage />
        <FuelUsage />
      </div>
    </div>
  );
};

export default Dashboard;
