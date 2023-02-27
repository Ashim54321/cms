import React from 'react'
import Navbar from '../../Container/Navbar';
import SideNav from '../../Container/SideNav';
import Question from './Question';




function QuestionMain() {
  return (
    <>
      <Navbar />
      <div className="Homeflex">
        <div className="snav">
          <SideNav/>
        </div>
        <div className="prof">
         <Question/>
        </div>
      </div>
    </>
  )
}

export default QuestionMain;