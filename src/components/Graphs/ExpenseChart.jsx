

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
      borderWidth: 0,
    },
  ],
};

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
    className='bg-white h-[322px] p-6 flex justify-center items-center  rounded-xl shadow-sm '>
    <PolarArea
      data={data}
      options={{
        plugins: {
          legend: {
            
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