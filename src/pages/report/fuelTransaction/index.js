import DataTable from "react-data-table-component";
import moment from "moment";
import DateFilterModal from "./component/FilterModal";
import React, { useState } from "react";
import { parseISO, format } from "date-fns";
import CalendarIcon from "../../../assets/icon/calendar-icon";
import DocumentIcon from "../../../assets/icon/document-icon";

const data = [
  {
    id: 1,
    time: "2024-02-05 10:15:23",
    station: "Station 1",
    name: "andrew",
    license: "B 1234 K",
    code: "20130",
    fuel: "pertalite",
    usage: 5,
    leftover: 150,
  },
  {
    id: 2,
    time: "2024-01-28 14:22:45",
    station: "Station 2",
    name: "andrew",
    license: "B 9876 C",
    code: "20130",
    fuel: "pertamax",
    usage: 7,
    leftover: 150,
  },
  {
    id: 3,
    time: "2024-01-10 08:30:17",
    station: "Station 3",
    name: "andrew",
    license: "B 4567 S",
    code: "20130",
    fuel: "solar",
    usage: 6,
    leftover: 150,
  },
  {
    id: 4,
    time: "2023-12-25 19:45:00",
    station: "Station 1",
    name: "andrew",
    license: "B 6789 K",
    code: "20130",
    fuel: "pertamax turbo",
    usage: 8,
    leftover: 150,
  },
  {
    id: 5,
    time: "2023-12-15 12:10:32",
    station: "Station 2",
    name: "andrew",
    license: "B 1122 C",
    code: "20130",
    fuel: "pertalite",
    usage: 4,
    leftover: 150,
  },
  {
    id: 6,
    time: "2023-11-30 16:50:12",
    station: "Station 3",
    name: "andrew",
    license: "B 3344 S",
    code: "20130",
    fuel: "solar",
    usage: 5,
    leftover: 150,
  },
  {
    id: 7,
    time: "2025-01-20 09:05:55",
    station: "Station 1",
    name: "andrew",
    license: "B 5566 K",
    code: "20130",
    fuel: "pertamax",
    usage: 9,
    leftover: 150,
  },
  {
    id: 8,
    time: "2023-11-10 21:18:40",
    station: "Station 2",
    name: "andrew",
    license: "B 7788 C",
    code: "20130",
    fuel: "pertamax turbo",
    usage: 6,
    leftover: 150,
  },
  {
    id: 9,
    time: "2025-01-30 11:29:03",
    station: "Station 3",
    name: "andrew",
    license: "B 9900 S",
    code: "20130",
    fuel: "solar",
    usage: 7,
    leftover: 150,
  },
  {
    id: 10,
    time: "2023-10-15 15:40:25",
    station: "Station 1",
    name: "andrew",
    license: "B 2233 K",
    code: "20130",
    fuel: "pertalite",
    usage: 3,
    leftover: 150,
  },
  {
    id: 11,
    time: "2023-10-01 18:55:38",
    station: "Station 2",
    name: "andrew",
    license: "B 4455 C",
    code: "20130",
    fuel: "pertamax",
    usage: 5,
    leftover: 150,
  },
  {
    id: 12,
    time: "2023-09-25 22:10:49",
    station: "Station 3",
    name: "andrew",
    license: "B 6677 S",
    code: "20130",
    fuel: "solar",
    usage: 2,
    leftover: 150,
  },
  {
    id: 13,
    time: "2023-09-10 07:20:15",
    station: "Station 1",
    name: "andrew",
    license: "B 8899 K",
    code: "20130",
    fuel: "pertamax turbo",
    usage: 8,
    leftover: 150,
  },
  {
    id: 14,
    time: "2023-08-30 13:35:42",
    station: "Station 2",
    name: "andrew",
    license: "B 1010 C",
    code: "20130",
    fuel: "pertalite",
    usage: 4,
    leftover: 150,
  },
  {
    id: 15,
    time: "2025-01-20 17:45:57",
    station: "Station 3",
    name: "andrew",
    license: "B 1212 S",
    code: "20130",
    fuel: "solar",
    usage: 5,
    leftover: 150,
  },
  {
    id: 16,
    time: "2023-08-10 12:50:20",
    station: "Station 1",
    name: "andrew",
    license: "B 1414 K",
    code: "20130",
    fuel: "pertamax",
    usage: 6,
    leftover: 150,
  },
  {
    id: 17,
    time: "2025-01-30 19:15:33",
    station: "Station 2",
    name: "andrew",
    license: "B 1616 C",
    code: "20130",
    fuel: "pertamax turbo",
    usage: 7,
    leftover: 150,
  },
  {
    id: 18,
    time: "2023-07-15 09:40:12",
    station: "Station 3",
    name: "andrew",
    license: "B 1818 S",
    code: "20130",
    fuel: "solar",
    usage: 5,
    leftover: 150,
  },
  {
    id: 19,
    time: "2025-02-01 14:55:28",
    station: "Station 1",
    name: "andrew",
    license: "B 2020 K",
    code: "20130",
    fuel: "pertalite",
    usage: 3,
    leftover: 150,
  },
  {
    id: 20,
    time: "2023-06-25 11:10:40",
    station: "Station 2",
    name: "andrew",
    license: "B 2222 C",
    code: "20130",
    fuel: "pertamax",
    usage: 5,
    leftover: 150,
  },
  {
    id: 21,
    time: "2025-02-10 08:20:55",
    station: "Station 3",
    name: "andrew",
    license: "B 2424 S",
    code: "20130",
    fuel: "solar",
    usage: 6,
    leftover: 150,
  },
  {
    id: 22,
    time: "2023-05-30 16:30:12",
    station: "Station 1",
    name: "andrew",
    license: "B 2626 K",
    code: "20130",
    fuel: "pertamax turbo",
    usage: 8,
    leftover: 150,
  },
  {
    id: 23,
    time: "2023-05-15 10:45:27",
    station: "Station 2",
    name: "andrew",
    license: "B 2828 C",
    code: "20130",
    fuel: "pertalite",
    usage: 4,
    leftover: 150,
  },
  {
    id: 24,
    time: "2023-05-01 13:50:32",
    station: "Station 3",
    name: "andrew",
    license: "B 3030 S",
    code: "20130",
    fuel: "solar",
    usage: 5,
    leftover: 150,
  },
  {
    id: 25,
    time: "2023-04-20 19:05:45",
    station: "Station 1",
    name: "andrew",
    license: "B 3232 K",
    code: "20130",
    fuel: "pertamax",
    usage: 7,
    leftover: 150,
  },
  {
    id: 26,
    time: "2023-04-10 22:15:50",
    station: "Station 2",
    name: "andrew",
    license: "B 3434 C",
    code: "20130",
    fuel: "pertamax turbo",
    usage: 6,
    leftover: 150,
  },
  {
    id: 27,
    time: "2023-03-30 07:30:15",
    station: "Station 3",
    name: "andrew",
    license: "B 3636 S",
    code: "20130",
    fuel: "solar",
    usage: 5,
    leftover: 150,
  },
];

const columns = [
  {
    name: "ID",
    selector: (row) => row.id,
    sortable: false,
    width: "fit-content",
  },
  {
    name: "Time/Date",
    selector: (row) => moment(row.time).format("YYYY-MM-DD HH:mm:ss"),
    sortable: true,
    wrap: false,
    width: "auto",
  },
  {
    name: "Station",
    selector: (row) => row.station,
    sortable: true,
    wrap: true,
  },
  { name: "Name", selector: (row) => row.name, sortable: true, wrap: true },
  {
    name: "License",
    selector: (row) => row.license,
    sortable: true,
    wrap: true,
  },
  { name: "Code", selector: (row) => row.code, sortable: true, wrap: true },
  { name: "Fuel", selector: (row) => row.fuel, sortable: true, wrap: true },
  {
    name: "Fuel Usage (L)",
    selector: (row) => row.usage,
    sortable: true,
    wrap: true,
  },
  {
    name: "Left Over (L)",
    selector: (row) => row.leftover,
    sortable: true,
    wrap: true,
  },
];
const customStyles = {
  headCells: {
    style: {
      backgroundColor: "#FFFFF",
      color: "black",
      fontSize: "12px",
      fontWeight: "bold",
      textTransform: "uppercase",
      whiteSpace: "normal",
      wordBreak: "break-word",
      textAlign: "center",
    },
  },
  rows: {
    style: {
      fontSize: "14px",
      backgroundColor: "#0F172A",
      color: "white",
      borderBottom: "1px solid #374151",
      wordBreak: "break-word",
      textAlign: "left",
    },
  },
  cells: {
    style: {
      whiteSpace: "normal",
      wordBreak: "break-word",
    },
  },
  pagination: {
    style: {
      backgroundColor: "#0F172A",
      color: "white",
      borderTop: "1px solid #374151",
      display: "flex",
    },
    pageButtonsStyle: {
      backgroundColor: "#FFFFFF",
      color: "white",
      borderRadius: "5px",
      padding: "5px 10px",
      margin: "0 5px",
    },
  },
};

const FuelTransaction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("Select Date");
  const [filteredData, setFilteredData] = useState(data);

  const handleApply = (dateRange) => {
    const { startDate, endDate } = dateRange[0];
    const newData = data.filter((item) => {
      const itemDate = parseISO(item.time);
      return itemDate >= startDate && itemDate <= endDate;
    });

    setFilteredData(newData);
    setSelectedDate(
      `${format(startDate, "MMM d, yyyy")} - ${format(endDate, "MMM d, yyyy")}`
    );
    setIsModalOpen(false);
  };

  return (
    <div>
      <DateFilterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onApply={handleApply}
      />
      <div className="flex flex-row justify-between items-center">
        <div className="text-white text-lg font-bold p-3 rounded-t-md">
          Fuel Transaction History
        </div>
        <div className="flex flex-row space-x-2">
          <button
            className="border-gray-300 border-[1px] text-white px-4 py-1 rounded-md flex items-center space-x-2"
            onClick={() => setIsModalOpen(true)}
          >
            <CalendarIcon className="text-white w-4 h-auto" />
            <span>{selectedDate}</span>
            <span>▼</span>
          </button>
          <button className="border-gray-300 border-[1px] text-white px-4 py-1 rounded-md flex items-center space-x-2">
            <span>Export</span>
            <DocumentIcon className="text-white w-4 h-auto" />
          </button>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[]}
        paginationComponentOptions={{
          noRowsPerPage: true,
          noRowsPerPageText: "",
        }}
        customStyles={customStyles}
      />
    </div>
  );
};

export default FuelTransaction;
