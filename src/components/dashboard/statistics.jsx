import React from 'react';
import DoughnutChart from '../doughnurtChart';
import LineChart from '../lineChart';

function Statistics() {
  return (
    <div className="dark:bg-[#100d25] items-center px-8 py-8 flex flex-col lg:flex-row gap-6  h-fit pb-4">
      
     
      <div className="dark:bg-[#090325] w-72 h-72 lg:w-1/3 shadow-md rounded-xl p-4 flex justify-center items-center">
        <DoughnutChart />
      </div>
      
     
      <div className="  dark:bg-[#090325] w-full h-fit lg:flex-1 shadow-md rounded-xl p-5">
        <LineChart  />
      </div>
      
    </div>
  );
}

export default Statistics;
