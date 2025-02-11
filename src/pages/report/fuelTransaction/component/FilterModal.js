import React, { useState } from "react";
import {
  DateRangePicker,
  defaultStaticRanges,
  createStaticRanges,
} from "@umakantp/react-date-range";
import "@umakantp/react-date-range/dist/styles.css";
import "@umakantp/react-date-range/dist/theme/default.css";

const customRanges = createStaticRanges([
  {
    label: "This Year",
    range: () => ({
      startDate: new Date(new Date().getFullYear(), 0, 1),
      endDate: new Date(new Date().getFullYear(), 11, 31),
    }),
  },
  {
    label: "Last Year",
    range: () => {
      const lastYear = new Date().getFullYear() - 1;
      return {
        startDate: new Date(lastYear, 0, 1),
        endDate: new Date(lastYear, 11, 31),
      };
    },
  },
  {
    label: "All Time",
    range: () => ({
      startDate: new Date(2000, 0, 1), // Tanggal awal (epoch time)
      endDate: new Date(), // Hari ini
    }),
  },
]);

const DateFilterModal = ({ isOpen, onClose, onApply }) => {
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-fit text-black">
        <DateRangePicker
          editableDateInputs
          onChange={(item) => setDateRange([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={dateRange}
          staticRanges={[...defaultStaticRanges, ...customRanges]} // Gabungkan preset bawaan + custom "This Year"
          months={2}
          direction="horizontal"
        />

        {/* Tombol Action */}
        <div className="flex justify-end mt-4 space-x-3">
          <button
            className="bg-gray-300 px-4 py-2 rounded-md"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
            onClick={() => onApply(dateRange)}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateFilterModal;
