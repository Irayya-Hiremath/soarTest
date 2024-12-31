import React from 'react';
import DataCard from '../../components/DataCard';
import TransactionCard from '../../components/TransactionCard';
import UserCard from '../../components/UserCard';
import WeeklyActivityChart from '../../components/Graphs/WeeklyActivityChart';
import ExpenseChart from '../../components/Graphs/ExpenseChart';
import BalanceGraph from '../../components/Graphs/BalanceGraph';
import { Link } from 'react-router-dom';
import { cardsData,transactions } from '../../components/Utility/dummyData';

export default function Home() {
  


  return (
    <>
     
      <div className="w-full">
  <div className="flex flex-col lg:flex-row justify-between w-full ">
  <div className="w-full lg:w-[calc(100%-350px)] my-4 ">
    <div className="flex justify-between my-4 ">
      <h1 className="text-lg w-1/2 font-bold text-heading">My Cards</h1>
      <h1 className="text-lg w-1/2 lg:mr-12 font-bold cursor-pointer text-heading text-right">
      <Link
      to='/transactions'
      >See All</Link>
      </h1>
    </div>
    <div className="gap-4 flex  flex-wrap">
      {cardsData?.slice(0, 2)?.map((card, index) => (
        <div key={index} className="w-full sm:w-auto lg:w-auto">
          <DataCard {...card} />
        </div>
      ))}
    </div>
  </div>

  <div className="w-full lg:w-[350px] my-4 mx-2">
    <h1 className="text-lg font-bold text-heading my-4">Recent Transactions</h1>
    <div className="space-y-4 rounded-xl p-4 bg-white flex flex-col justify-center items-center">
      {transactions?.slice(0, 3)?.map((transaction, index) => (
        <TransactionCard key={index} {...transaction} />
      ))}
    </div>
  </div>
</div>

  <div className="flex flex-wrap justify-between items-center my-4">
    <div className="w-full lg:w-[60%]">
      <h1 className="text-lg font-bold text-heading my-4">Weekly Activity</h1>
      <WeeklyActivityChart />
    </div>
    <div className="w-full lg:w-[35%] mt-4 lg:mt-0">
      <h1 className="text-lg font-bold text-heading my-4">Expense Statistics</h1>
      <ExpenseChart />
    </div>
  </div>

  <div className="flex flex-wrap justify-between items-center">
    <div className="w-full lg:w-[35%] lg:h-[323px] mt-4 lg:mt-0">
      <h1 className="text-lg font-bold text-heading my-4">Quick Transfer</h1>
      <UserCard />
    </div>
    <div className="w-full lg:w-[60%] lg:h-[323px] mt-4 lg:mt-0">
      <h1 className="text-lg font-bold text-heading my-4">Balance History</h1>
      <BalanceGraph />
    </div>
  </div>
</div>

    </>
  );
}
