import React from "react";
import { Box, Image, Text, Container, Button,Input } from "@mantine/core";
import logo from "../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import{toast} from 'react-toastify';


interface login {
  email: string;
  password: string;
}

function Login() {
  const [input, setInput] = React.useState<login>({
    email: "admin@gmail.com",
    password: "12345678",
  });
  const history = useNavigate();

  const sendRequest = async () => {
    const res = await axios
      .post("http://localhost:5000/auth/login", {
        email: input.email,
        password: input.password,
      })
    const data = await res.data;
    localStorage.setItem('token',res.data.Token);
    return data;
  };

  const handlechange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e :React.FormEvent) => {
    e.preventDefault();
    sendRequest()
      .then(() => history("/home/"))
      .then(()=>toast.success('Authentication Success !', {
        position: toast.POSITION.TOP_CENTER,className:'toast-msg'
    })
    )
      .catch(()=> toast.error("Unauthorized Credentials"))
      
  };

  return (
    
    <Box className="Login">
      <div className="Login-cms">
        <Image src={logo} height={120} width={120} mb={5} />
        <Text className="Text" >Course Management System</Text>
      </div>
      <form className="Login-form" onSubmit={handleSubmit}>
        <Container className="form-control">
          <Text className="title" mt={5} mb={5}>
            Login
          </Text>
          <Box className="form-field">
            <label>
              Email<span>:</span>
            </label>
            <div className="imp">
              <Input
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
              <Input
                type="password"
                name="password"
                value={input.password}
                onChange={handlechange}
                required
              />
              <small>*Max password limit : 10</small>
            </div>
            <Text className="Forget">
              <Link to="/">
                <span>Forget Password ? </span>
              </Link>
            </Text>
          </Box>
          <Button type="submit">
            Login
          </Button>
          
          <Text className="Create">
            Don't Have a Account?{" "}
            <Link to="/register/">
              <span>Create Account</span>
            </Link>
          </Text>
        </Container>
      </form>
    </Box>
  );
}

export default Login;
