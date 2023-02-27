import { Button,Badge } from "@mantine/core";
import axios from "axios";
import { AiOutlineLike, BiComment, FaShare, GoReport } from "react-icons/all";

function Questions(props: { UserName: any; Ask: any; categories: any; date:any }) {
  return (
    <div className="Show-question">
      <div className="User-details ">
        <img
          src="https://images.unsplash.com/photo-1665999560543-5d1942e74e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80"
          alt="img"
        />
        <h5>{props.UserName}</h5>
        <small>{props.date}</small>
      </div>
      <div className="User-question">
        <p>{props.Ask}</p>
        <Badge>{props.categories}</Badge>
      </div>

      <div className="Additional">
        <div className="Qbtn">
          <Button className="button">
            {" "}
            <span>
              <AiOutlineLike />
            </span>{" "}
            Like
          </Button>
        </div>
        <div className="Qbtn">
          <Button className="button">
            <span>
              <BiComment />
            </span>{" "}
            Answer
          </Button>
        </div>
        <div className="Qbtn">
          <Button className="button">
            {" "}
            <span>
              <FaShare />
            </span>
            Share
          </Button>
        </div>
        <div className="Qbtn">
          <Button className="button">
            <span>
              <GoReport />
            </span>{" "}
            Report
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
