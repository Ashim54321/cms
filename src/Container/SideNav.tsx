import React from "react";
import { Text } from "@mantine/core";
import { Link } from "react-router-dom";
import {
  CgProfile,
  RiTeamLine,
  GrNotes,
  RiWechatFill,
  BsNewspaper,
  AiFillQuestionCircle,
  GiBookCover,
  SiCoursera
} from "react-icons/all";
import './Main.css';

function SideNav() {
  return (
    <div className="Sidenav">
      <Text className="but" component={Link} to="/home/">
        <CgProfile />
        <span>Profiles</span>
      </Text>
      <Text className="but" component={Link} to="/news/">
        <BsNewspaper />
        <span>News</span>
      </Text>
      <Text className="but" component={Link} to="/questions/">
        <AiFillQuestionCircle />
        <span>Past Questions
        </span>
      </Text>
      <Text className="but" component={Link} to="/syllabus/">
        <GiBookCover />
        <span>Syllabus</span>
      </Text>
      <Text className="but" component={Link} to="/notes/">
        <SiCoursera />
        <span>Courses</span>
      </Text>
      <Text className="but" component={Link} to="/teams/">
        <RiTeamLine />
        <span>Teams</span>
      </Text>
      <Text className="but" component={Link} to="/notes/">
        <GrNotes />
        <span>Notes</span>
      </Text>
      <Text className="but" component={Link} to="/feedbacks/">
        <RiWechatFill />
        <span>Feedbacks</span>
      </Text>
    
    </div>
  );
}

export default SideNav;
