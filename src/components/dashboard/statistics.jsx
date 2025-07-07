import React from 'react';
import DoughnutChart from '../doughnurtChart';
import LineChart from '../lineChart';

function Statistics() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-4">
      
      {/* Doughnut Chart Container */}
      <div className="bg-white w-72 h-72 lg:w-1/3 shadow-md rounded-xl p-4 flex justify-center items-center">
        <DoughnutChart />
      </div>
      
      {/* Line Chart Container */}
      <div className="bg-white w-full h-72 lg:flex-1 shadow-md rounded-xl p-4">
        <LineChart />
      </div>
      
    </div>
  );
}

export default Statistics;
