import React from 'react'
import RevenueCard  from '../components/RevenueCard'
import Payout from '../components/Payout'
import Overview from '../components/Overview'
import Transactions from '../components/Transactions'
import SearchBar from '../components/SearchBar'
import OrderBar from '../components/OrderBar'
import Orders from '../components/Orders'
import {ordersData} from '../assets/oders'


const Cards = () => {
  return (
    <div className='pl-10 pr-5'>
      

    <div className='py-6'>
      <Overview/>
    </div>

    <div className='flex justify-between'>
          <div>
            <Payout text={"Next Payout"} amount={"₹2,312.23"} num={"23"} due={"Next Payment Date:"} date={"Today, 4:00PM"}/>
          </div>

          <div>
            <RevenueCard head={"Amount Pending"} amount={"₹92,312.20"} num={"13 orders >"}/>
          </div>

          <div>
            <RevenueCard head={"Amount Processed"} amount={"₹23,92,312.19"}/>
          </div>
    </div>

    <div className='py-8'>
      <Transactions payouts={22} refunds={6} />
    </div>

    <div className='pt-3'>
      <SearchBar/>
    </div>

    <div className='pt-2'>
      <OrderBar />
    </div>


    <div>
      {ordersData.map((order, index) => (
        <Orders oid={order.oid} status={order.status} tid={order.tid} rDate={order.rDate} oDate={order.oDate} />
      ))}
    </div>

    </div>
  )
}

export default Cards