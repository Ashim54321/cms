import React from 'react'
import Navbar from '../../Container/Navbar';
import SideNav from '../../Container/SideNav';
import News from './News';



function Newsmain() {
  return (
    <>
      <Navbar />
      <div className="Homeflex">
        <div className="snav">
          <SideNav/>
        </div>
        <div className="prof">
          <News/>
        </div>
      </div>
    </>
  )
}

export default Newsmain