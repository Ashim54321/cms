import axios from "axios";
import { useState, useEffect } from "react";
import "./Question.css";
import QuestionCard from "./QuestionCard";
import Questions from "./Questions";
interface question {
  UserName: string;
  Qusetion: string;
  date: string;
  categories: string;
  id: string;
  map: any;
}
[];
function Question() {
  const [data, setData] = useState<question>();
  const getQuestion = async () => {
    const res = await axios.get(`http://localhost:5000/api/question/`);
    const data = res.data.data;
    setData(data);
  };
  useEffect(() => {
    getQuestion();
  }, []);
  return (
    <div className="News Question">
      <div className="Questions">
        {data?.map?.(
          (question: {
            date: any;
            UserName: any;
            Question: any;
            categories: any;
            data: any;
          }) => (
            <Questions
              UserName={question.UserName}
              Ask={question.Question}
              categories={question.categories}
              date={question.date}
            />
          )
        )}
      </div>
      <div className="Sidebar">
        <QuestionCard />
      </div>
    </div>
  );
}

export default Question;
