// import React from 'react'

// export default function Accounts() {
//   return (
//     <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
// Accounts</div>
//   )
// }

import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts';

function Accounts() {
  const [weeklyData, setWeeklyData] = useState([]);
  const [expenseData, setExpenseData] = useState([]);

  useEffect(() => {
    // Sample data (replace with your actual data)
    const fetchData = async () => {
      const weeklyData = [
        { x: 'Sat', y: 200 },
        { x: 'Sun', y: 100 },
        { x: 'Mon', y: 300 },
        { x: 'Tue', y: 400 },
        { x: 'Wed', y: 200 },
        { x: 'Thu', y: 300 },
        { x: 'Fri', y: 400 },
      ];

      const expenseData = [
        { x: 'Entertainment', y: 30 },
        { x: 'Bill Expense', y: 15 },
        { x: 'Investment', y: 20 },
        { x: 'Others', y: 35 },
      ];

      setWeeklyData(weeklyData);
      setExpenseData(expenseData);
    };

    fetchData();
  }, []);

  function weeklyChartOptions() {
    return {
      chart: {
        type: 'bar',
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: weeklyData.map((item) => item.x),
      },
      yaxis: {
        title: {
          text: 'Amount',
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + ' USD';
          },
        },
      },
    };
  }

  function expenseChartOptions() {
    return {
      chart: {
        type: 'donut',
        width: 380,
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total',
              },
            },
          },
        },
      },
      labels: expenseData.map((item) => item.x),
      dataLabels: {
        enabled: true,
        formatter: (val) => val + '%',
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }

  const weeklyChartData = [
    {
      name: 'Deposit',
      data: weeklyData.map((item) => item.y),
    },
    {
      name: 'Withdraw',
      data: [500, 300, 300, 500, 200, 300, 400], // Replace with actual withdraw data
    },
  ];

  const expenseChartData = expenseData.map((item) => item.y);

  return (
    <div className="flex">
      <div className="w-1/2 p-4 border-r">
        <h2 className="text-xl font-bold mb-4">Weekly Activity</h2>
        <ApexCharts
          options={weeklyChartOptions()} // Call the function to get options
          series={weeklyChartData}
          type="bar"
          height={350}
        />
      </div>
      <div className="w-1/2 p-4">
        <h2 className="text-xl font-bold mb-4">Expense Statistics</h2>
        <ApexCharts
          options={expenseChartOptions}
          series={expenseChartData}
          type="donut"
          width={380}
        />
      </div>
    </div>
  );
}

export default Accounts;
