// import React from 'react';
// import {
//   Chart as ChartJS,
//   RadialLinearScale,
//   ArcElement,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { PolarArea } from 'react-chartjs-2';

// ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// export const data = {
//   labels: ['Red', 'Blue', 'Yellow', 'Green', ],
//   datasets: [
//     {
//       label: '# of Votes',
//       data: [12, 19, 10, 13, ],
//       backgroundColor: [
//         '#343C6A',
//         '#396AFF',
//         '#FC7900',
//         '#232323',
//         // 'rgba(153, 102, 255, 0.5)',
//         // 'rgba(255, 159, 64, 0.5)',
//       ],
//       borderWidth: 1,
//     },
//   ],
// };

// export default function ExpenseChart() {
//   return <PolarArea data={data} />;
// }

import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

// Data for the chart
export const data = {
  labels: ['Entertainment', 'Bill Expense', 'Investment', 'Others'],
  datasets: [
    {
      label: 'Expense Distribution',
      data: [30, 15, 20, 35],
      backgroundColor: [
        '#343C6A', 
        '#FC7900', 
        '#396AFF', 
        '#232323', 
      ],
      borderWidth: 0, // Set borderWidth to 0 to remove borders
    },
  ],
};

// Custom plugin to show constant hover on a specific segment
const constantHoverPlugin = {
  id: 'constantHover',
  beforeDraw(chart) {
    const { ctx, chartArea, data, config } = chart;
    const hoverIndex = 0; 

    const segment = chart.getDatasetMeta(0).data[hoverIndex];

    chart.tooltip.setActiveElements([{
      datasetIndex: 0,
      index: hoverIndex
    }]);

    chart.update();
  },
};

export default function ExpenseChart() {
  return (
    <div
    className='bg-white p-6 rounded-xl shadow-sm '>
    <PolarArea
      data={data}
      options={{
        plugins: {
          legend: {
            // position: 'bottom',
            // enabled:false
            display: false,
          },
          tooltip: {
            enabled: true,
            mode: 'nearest',
            intersect: false,
          },
        },
      }}
      plugins={[constantHoverPlugin]}
    />
    </div>
  );
}