
// import React, { useState, useEffect } from 'react';
// import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend } from 'chart.js';
// import { Line } from 'react-chartjs-2';

// ChartJS.register(
//     LineElement,
//     PointElement,
//     LinearScale,
//     CategoryScale,
//     Title,
//     Tooltip,
//     Legend
// );

// const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//             display: false,
//         },
//     },
//     scales: {
//         x: {
//             grid: {
//                 display: false,
//             },
//             ticks: {
//                 color: '#A0A0A0', // Set x-axis tick color
//                 font: {
//                     size: 12,
//                 },
//             },
//         },
//         y: {
//             grid: {
//                 display: true, // Show y-axis grid lines
//                 color: '#A0A0A0', // Set y-axis grid color
//                 lineWidth: 0.5,
//             },
//             ticks: {
//                 display: false, // Remove y-axis tick labels
//             },
//         },
//     },
//     elements: {
//         line: {
//             tension: 0.4, // Adjust tension for smoother curve
//         },
//     },
// };

// const labels = ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'];

// const data = {
//     labels,
//     datasets: [
//         {
//             label: 'Balance',
//             data: [100, 300, 450, 800, 200, 550, 650],
//             borderColor: '#007bff',
//             backgroundColor: 'rgba(0, 123, 255, 0.2)', // Lightest shade for the shadow
//             pointRadius: 0, // Remove data points
//             fill: true,
//         },
//         {
//             label: 'Shadow 1',
//             data: [100, 300, 450, 800, 200, 550, 650],
//             borderColor: 'transparent',
//             backgroundColor: 'rgba(0, 123, 255, 0.15)', // Slightly darker shade
//             pointRadius: 0,
//             fill: true,
//         },
//         {
//             label: 'Shadow 2',
//             data: [100, 300, 450, 800, 200, 550, 650],
//             borderColor: 'transparent',
//             backgroundColor: 'rgba(0, 123, 255, 0.1)', // Darkest shade
//             pointRadius: 0,
//             fill: true,
//         },
//     ],
// };

// function BalanceChart() {
//     return <Line options={options} data={data} />;
// }

// export default BalanceChart;

import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BalanceChart = () => {
//  const  options= {
//     chart: {
//       height: 580,
//       type: 'area',
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     menubar:false,
//     fill: {
//       type: 'gradient',
//       gradient: {
//         shadeIntensity: 1,
//         opacityFrom: 0.7,
//         opacityTo: 0.9,
//         // stops: [0, 10,20,30,40,50],
//       },
//     },
//     xaxis: {
//       categories: [
//         '01 Jan',
//         '02 Feb',
//         '03 Mar',
//         '04 Apr',
//         '05 May',
//         '06 Jul',
       
//       ],
//     },
//   }
//   const series= [
//     {
//       name: 'Series 1',
//       data: [100,50,600, 400, 110, 100, ],
//     },
//   ]

 
//   return (
//     <div>
//       <ReactApexChart
//         options={options}
//         series={series}
//         // type="area"
//         type='area'
//         height={280}
//       />
//     </div>
//   );
// };
const  options= {
    chart: {
      height: 400,
      type: 'area',
      toolbar: {
        show: false, // Hide zoom and pan tools
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
        'Jan',
        'feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
      ],
    },
  }
  const series= [
    {
      name: 'Series 1',
      data: [10, 52, 15,38, 95, 19, 100, 20],
    },
  ]

  // useEffect(()=>{
  //   setState( {
      
  //   })
  // },[])

  return (
    <div>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={280}
      />
    </div>
  );
};
export default BalanceChart;


  