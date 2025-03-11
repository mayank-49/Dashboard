import React from 'react';
import Chart from './Chart';

const Dashboard = () => {
  return (
    <div className='flex flex-col items-center space-y-4 grow py-12 px-14 h-screen overflow-y-auto'>
        <div className='w-4/5'>
            <h2 className='underline text-lg text-slate-700 '>Dashboard</h2>
        </div>
      <div className='grid grid-cols-2 w-4/5 gap-4'>
        <div className='w-full h-[150px] border border-gray-300 rounded-md flex flex-col justify-center p-4 text-gray-600'>
          <span className='text-black text-xl'>Mayank Kumar</span>
          <span className='text-gray-500 text-lg mt-2'>Your Balance : Rs 20000</span>
        </div>
        <div className='w-full h-[150px] border border-gray-300 rounded-md flex flex-col justify-center p-4 text-gray-600'>
          <span className='text-xl text-black'>Mayank Kumar</span>
          <span className='text-gray-500 text-lg mt-2'>Your Expenses : Rs 10000</span>
        </div>
      </div>
      <div className='flex flex-col space-x-8 w-4/5'>
        <h2 className='underline text-lg text-slate-700'>Expenses chart</h2>
        <Chart className='w-full' />
      </div>
      <div className='grid grid-cols-2 w-4/5 gap-4'>
        <div className='w-full h-[150px] border border-gray-300 rounded-md flex flex-col justify-center p-4 text-gray-600'>
          <span className='text-xl text-black'>Your Activity</span>
          <ul>
            <li className='mt-4 text-lg text-gray-500'>You sent Rs 10000 to your mother</li>
          </ul>
        </div>
        <div className='w-full h-[150px] border border-gray-300 rounded-md flex flex-col justify-center p-4 text-gray-600'>
          <span className='text-xl text-black'>Pending Bills</span>
          <ul>
            <li className='mt-4 text-lg text-gray-500'>Broadband Bill : Rs 700</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;