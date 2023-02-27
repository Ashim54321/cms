import React from "react";
import { Box, Image, Text, Container, Button } from "@mantine/core";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

interface Signup {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}
function Signup() {
  const [input, setInput] = React.useState<Signup>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const history = useNavigate();
  const sendRequest = async () => {
    const res = await axios.post("http://localhost:5000/auth/register", {
      first_name: input.first_name,
      last_name: input.last_name,
      email: input.email,
      password: input.password,
    });
    const data = await res.data;
    return data;
  };

  const handlechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendRequest()
      .then(() => history("/login/"))
      .then(() => toast.success("Registration Successfull"))
      .catch(() => toast.error("Unauthorized Credentials"));
  };

  return (
    <Box className="Login">
      <div className="Login-cms">
        <Image src={logo} height={120} width={120} mb={5} />
        <Text className="Text">Course Management System</Text>
      </div>
      <form className="Login-form" onSubmit={handleSubmit}>
        <Container className="form-control">
          <Text className="title" mt={5} mb={5}>
            Sign Up
          </Text>
          <Box className="form-field">
            <label>
              First Name<span>:</span>
            </label>
            <div className="imp">
              <input
                type="text"
                name="first_name"
                value={input.first_name}
                onChange={handlechange}
                required
              />
            </div>
          </Box>
          <Box className="form-field">
            <label>
              Last Name<span>:</span>
            </label>
            <div className="imp">
              <input
                type="text"
                name="last_name"
                value={input.last_name}
                onChange={handlechange}
                required
              />
            </div>
          </Box>
          <Box className="form-field">
            <label>
              Email<span>:</span>
            </label>
            <div className="imp">
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={handlechange}
                required
              />
            </div>
          </Box>
          <Box className="form-field">
            <label>Password:</label>
            <div className="imp">
              <input
                type="password"
                maxLength={10}
                minLength={8}
                name="password"
                value={input.password}
                onChange={handlechange}
                required
              />
              <small>*Must have 8 characters</small>
            </div>
            <Text className="Forget">
              <Link to="/">
                <span>Forget Password ? </span>
              </Link>
            </Text>
          </Box>
          <Button className="btn-login" type="submit">
            Register
          </Button>
          <Text className="Create ">
            Already Have a Account?{" "}
            <Link to="/login/">
              <span>Log In</span>
            </Link>
          </Text>
        </Container>
      </form>
      <ToastContainer />
    </Box>
  );
}

export default Signup;
