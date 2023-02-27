import React, { useState, createContext } from "react";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./Container/Landing";
import Login from "./Container/Login";
import Signup from "./Container/Signup";
import Home from "./User/Home";
import Newsmain from "./User/News/Newsmain";
import PagenotFound from "./PagenotFound";
import axios from "axios";
import Question from "./User/Question/QuestionMain";
import NoticeMain from "./User/Notes/NoticeMain";


export const UserContext = createContext<any>(null);

function App() {
  const [user, setUser] = useState<any>();
  const getUser = async () => {
    const res = await axios.get(`http://localhost:5000/auth/user`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = res?.data?.User;
    setUser(data);
    console.log('====================================');
    console.log(data);
    console.log('====================================');
  };
  React.useEffect(() => {
    getUser();
  }, []);
  return (
    <Router>
      <UserContext.Provider value={{user}}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/register/" element={<Signup />} />
          <Route path="*" element={<PagenotFound />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/home/" element={<Home />} />
          <Route path="/news/" element={<Newsmain />} />
          <Route path="/questions/" element={<Question />} />
          <Route path="/syllabus/" element={<Home />} />
          <Route path="/notes/" element={<NoticeMain />} />
          <Route path="/teams/" element={<Home />} />
          <Route path="/feedbacks/" element={<Home />} />
        </Routes>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
