// import axios from 'axios';
// import React from 'react';
// import { useState } from 'react';
// import { UserContext } from './UserContext';
// import { Route } from "react-router-dom";
// import Home from '../User/Home';
// import Newsmain from '../User/News/Newsmain';


// function UserState() {
//     const [ user ,setUser] = useState<any>();
//   const getUser =async () => {
//     const res = await axios.get(`http://localhost:5000/auth/user`,{
//       headers:{
//         Authorization : "Bearer " + localStorage.getItem('token')
//       }
//     });
//     const data = res?.data?.User
//     setUser(data)
//   }
//   React.useEffect(()=>{
//     getUser();
//   },[])
//   return (
//     <UserContext.Provider value={{user}}>
//       <Route path="/home/" element={<Home />} />
//         <Route path="/news/" element={<Newsmain />} />
//         <Route path="/questions/" element={<Home />} />
//         <Route path="/syllabus/" element={<Home />} />
//         <Route path="/notes/" element={<Home />} />
//         <Route path="/teams/" element={<Home />} />
//         <Route path="/feedbacks/" element={<Home />} />
//     </UserContext.Provider>
//   )
// }

// export default UserState;