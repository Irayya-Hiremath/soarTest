import React from 'react'
import { transactions } from '../../components/Utility/dummyData'

export default function Transactions() {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Source
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            Deposit By
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            Amount
            </h5>
          </div>
          
        </div>

        {transactions?.map((el, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === el.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-100">
          {el?.icon}
        </div>
              {/* <p className="hidden text-black dark:text-white sm:block">
                {brand.name}
              </p> */}
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{el?.title}K</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{el?.date}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              {/* <p className="text-black dark:text-white">{el?.amount}</p> */}
              <p
        className={`text-sm font-bold ${
          el?.isPositive ? "text-green-500" : "text-red-500"
        }`}
      >
        {el?.isPositive ? `+${el?.amount}` : `-${el?.amount}`}
      </p>
            </div>

           
          </div>
        ))}
      </div>
    </div>
  )
}
