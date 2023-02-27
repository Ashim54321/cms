import React from 'react';
import './News.css';
import AddPost from './Post/AddPost';
import ShowPost from './Post/ShowPost';

function News() {
  return (
    <div className='News'>
        <div className='Newspage'>
          <div className='News-display'>
             <div className='Post'>
               <AddPost/>
             </div>
             <div className='Display'>
               <ShowPost/>
             </div>
          </div>
        </div>
     
    </div>
  )
}

export default News;