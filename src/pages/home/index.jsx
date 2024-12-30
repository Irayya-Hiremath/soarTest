import React from 'react';
import DataCard from '../../components/DataCard';
import TransactionCard from '../../components/TransactionCard';

import UserCard from '../../components/UserCard';

import { Icon } from '@iconify/react';
import { FiCreditCard, FiDollarSign } from 'react-icons/fi';
import { FaPaypal } from 'react-icons/fa';
import WeeklyActivityChart from '../../components/Graphs/WeeklyActivityChart';
import ExpenseChart from '../../components/Graphs/ExpenseChart';
import BalanceGraph from '../../components/Graphs/BalanceGraph';

export default function Home() {
  const cardsData = [
    {
      balance: '$5,756',
      cardHolder: 'Eddy Cusuma',
      validThru: '12/22',
      cardNumber: '3778 **** **** 1234',
      isDark: true,
    },
    {
      balance: '$5,756',
      cardHolder: 'Eddy Cusuma',
      validThru: '12/22',
      cardNumber: '3778 **** **** 1234',
      isDark: false,
    },
  ];
  const transactions = [
    {
      icon: <FiCreditCard size={24} className="text-yellow-500" />,
      title: 'Deposit from my Card',
      date: '28 January 2021',
      amount: '$850',
      isPositive: false,
    },
    {
      icon: <FaPaypal size={24} className="text-blue-500" />,
      title: 'Deposit Paypal',
      date: '25 January 2021',
      amount: '$2,500',
      isPositive: true,
    },
    {
      icon: <FiDollarSign size={24} className="text-teal-500" />,
      title: 'Jemi Wilson',
      date: '21 January 2021',
      amount: '$5,400',
      isPositive: true,
    },
  ];

  return (
    <div className="w-[100%] ">
      <div  className="flex flex-col md:flex-row justify-around ">
        {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2  */}
        <div className="w-[730px] ">
          <div className='flex my-4'>
          <h1 className="text-lg w-1/2 font-bold text-heading ">My Cards</h1>
          <h1 className="text-lg w-1/2 font-bold text-heading text-right  ">See All</h1>
          </div>
          <div className="gap-4 flex">
            {cardsData?.map((card, index) => (
              <DataCard key={index} {...card} />
            ))}
          </div>
        </div>

        <div className="">
        <h1 className="text-lg font-bold text-heading my-4">
            Recent Transactions
          </h1>

          <div className="space-y-4 rounded-xl p-4 max- w-[350px] h-[235px] bg-white">
            {transactions.map((transaction, index) => (
              <TransactionCard key={index} {...transaction} />
            ))}
          </div>
        </div>
      </div>
<div className='my-4 mx-2'>
<h1 className="text-lg font-bold text-heading my-4">Quick Transfer</h1>

      <UserCard />
      </div>
      <div className='w-[70%]'>
      <WeeklyActivityChart/>

      </div>
      <div className='w-[25%]'>
        <ExpenseChart/>
      </div>
      <div className='w-[70%]'>
        <BalanceGraph/>
      </div>
      
    </div>
  );
}
