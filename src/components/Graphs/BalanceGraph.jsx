

import React from 'react';
import ReactApexChart from 'react-apexcharts';

const BalanceChart = () => {

const  options= {
    chart: {
      // height: 400,
      type: 'area',
      toolbar: {
        show: false, 
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
        
      ],
    },
  }
  const series= [
    {
      name: 'Series 1',
      data: [10, 52, 15,38, 95,],
    },
  ]

 

  return (
    <div
    
    className='bg-white max-h-[276px] p-6 rounded-xl shadow-sm '>
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


  