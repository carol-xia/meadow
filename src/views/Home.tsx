// import { useState } from 'react'
import '../styles/home.css'
import Header from '../components/Header';
import Reports from '../components/Reports';

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
            {/** TO DO: PIE GRAPH */}
          </div>
        </div>
      </div>
    </>
  )
}
  
export default Home;