// import { useState } from 'react'
import '../styles/home.css'
import Header from '../components/Header';
import TabPanel from '../components/TabPanel';

const fakeExpenses =  [
  {
    id: '1', 
    name: "May", 
    purchases: [
      {
        id: 0, 
        category: "groceries", 
        name: "Trader Joe’s",
        date: "2024-05-01T14:30:25Z", 
        price: "32.45", 
      },
      {
        id: 0, 
        category: "rent", 
        name: "May rent",
        date: "2024-05-16T14:30:25Z", 
        price: "1600", 
      },
      {
        id: 0, 
        category: "gas", 
        name: "gas station",
        date: "2024-05-17T14:30:25Z", 
        price: "26.42", 
      },
    ],
  }
]

const fakeReports =  [
  {
    id: '1', 
    name: "February", 
    purchases: [],
  },
  {
    id: '2', 
    name: "March", 
    purchases: [],
  },
  {
    id: '3', 
    name: "April", 
    purchases: [],
  },
  {
    id: '4', 
    name: "May", 
    purchases: [],
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <div className="fullscreen">
        <div className="flex-container">
          <div className="left">
            <TabPanel tabs={fakeReports}/>
          </div>
          <div  className="right">

          </div>
        </div>
      </div>
    </>
  )
}
  
export default Home;