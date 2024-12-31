import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14, // Adjust font size
            family: 'Arial',
         // Set custom font family
          },
          color: '#718EBF', // Set text color for legend
        },
       
      },
      title: {
        display: false, // Hide the title
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Remove vertical grid lines
        },
        ticks: {
          font: {
            size: 12, // Customize font size for x-axis labels
            family: 'Arial',
          },
          color: '#718EBF', // Customize x-axis labels color
        },
       
      },
      y: {
      
        ticks: {
          font: {
            size: 12, // Customize font size for y-axis labels
            family: 'Arial',
          },
          color: '#718EBF', // Customize y-axis labels color
          beginAtZero: true,
        },
      },
    },
    interaction: {
        mode: 'index', // Ensure hover interaction highlights grouped bars
        intersect: false,
      },
      barThickness: 20, // Set bar thickness
      categoryPercentage: 0.8, // Adjust group width
      barPercentage: 0.7,
  };
const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Deposit',
      data: [80,50,90,100,400,30,110],
      backgroundColor: '#396AFF',
      borderRadius: 8,
      barThickness: 20,
    },
    {
      label: 'Withdraw',
      data: [110,30,400,100,90,50,80],
      backgroundColor: '#232323',
      borderRadius: 8,

      barThickness: 20,
    },
  ],
};

export default function ExpenseChart() {

  return (
  <div className='bg-white lg:h-[322px] p-6 rounded-xl shadow-sm '>
    <Bar options={options} data={data} />
    </div>)
}
