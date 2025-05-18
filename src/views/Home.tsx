// import { useState } from 'react'
import Header from '../components/Header';
import Reports from '../components/Reports';
import PieGraph from '../components/PieGraph';
import '../styles/home.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className="fullscreen">
        <div className="flex-container">
          <div className="left">
            <Reports />
          </div>
          <div  className="right">
            <PieGraph />
          </div>
        </div>
      </div>
    </>
  )
}
  
export default Home;