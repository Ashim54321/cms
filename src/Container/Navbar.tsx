import React from "react";
import { AppShell, Box, Paper, Button, Text } from "@mantine/core";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  IoIosNotificationsOutline,
  CgProfile,
  AiFillSetting,
  AiOutlineUnorderedList,
} from "react-icons/all";
import { Link } from "react-router-dom";

import axios from "axios";

function Navbar() {
  const navigate = useNavigate();
  const SendLogoutreq =async () => {
    const res = await axios.post(`http://localhost:5000/auth/logout`,null);
    if(res.status == 200) {
      return res;
    }
    return new Error("Unable to logout");
  }
  const handleLogout =  () => {
    SendLogoutreq().then(()=> toast.success('Successfully logout'))
    .then(()=>navigate('/'))
    .catch(()=>toast.error('Logout fail'));
  };

  return (
    <div>
      <Paper sx={{ height: "2rem", width: "100%" }}>
        <Box className="Navbar">
          <Box className="Intro">
            <Text component={Link} to="/" sx={{ cursor: "pointer" }}>
              Course Management System
            </Text>
          </Box>
          <Box className="nav-link">
            <div className="dropdown">
              <Button
                className="btn-nav"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                variant="outline"
              >
                <AiOutlineUnorderedList />
              </Button>
              <Box
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/">
                  About
                </Link>
                <Link className="dropdown-item" to="/">
                  Contact Us
                </Link>
              </Box>
            </div>
            <div className="dropdown">
              <Button
                className="btn-nav"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                variant="outline"
              >
                <AiFillSetting />
              </Button>
              <Box
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/">
                  Language
                </Link>
                <Link className="dropdown-item" to="/">
                  Color
                </Link>
                <Link className="dropdown-item" to="/">
                  Font_Size
                </Link>
              </Box>
            </div>

            <div className="dropdown">
              <Button
                className="btn-nav"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                variant="outline"
              >
                <CgProfile />
              </Button>
              <Box
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <Link className="dropdown-item" to="/home"></Link>
                <a className="dropdown-item" onClick={handleLogout}>
                  LogOut
                </a>
              </Box>
            </div>

            <Button className="btn-nav" variant="outline">
              <IoIosNotificationsOutline />
            </Button>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default Navbar;
