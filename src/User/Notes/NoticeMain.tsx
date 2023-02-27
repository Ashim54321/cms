import React from 'react'
import Navbar from '../../Container/Navbar'
import SideNav from '../../Container/SideNav'
import Notice from './Notice'

function NoticeMain() {
  return (
    <>
      <Navbar />
      <div className="Homeflex">
        <div className="snav">
          <SideNav/>
        </div>
        <div className="prof">
            <Notice/>
        </div>
      </div>
    </>
  )
}

export default NoticeMain