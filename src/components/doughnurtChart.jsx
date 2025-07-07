// components/InvoiceDoughnutChart.jsx
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  const totalInvoices = 1135;

  const data = {
    labels: ['Paid', 'Overdue', 'Unpaid'],
    datasets: [
      {
        data: [234, 514, 345],
        backgroundColor: ['#0f172a', '#6366f1', '#cbd5e1'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '75%',
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`,
        },
      },
    },
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <Doughnut data={data} options={options} />
      <div className="absolute text-center">
        <p className="text-xl font-bold">{totalInvoices}</p>
        <p className="text-sm text-gray-500">Invoices</p>
      </div>
    </div>
  );
};

export default DoughnutChart;
