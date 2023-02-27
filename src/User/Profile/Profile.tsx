import React, { useContext, useState } from "react";
import "./Profile.css";
import {
  Image,
  Text,
  Button,
  Modal,
  Group,
  Textarea,
  Input,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import {
  FcAbout,
  RiInformationLine,
  FaRegAddressCard,
  FaCity,
  BiPhone,
  AiOutlineMail,
} from "react-icons/all";

interface profile {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  phone: number;
  about: string;
  images: any;
}
[];

function Profile() {
  const { user } = useContext(UserContext);
  console.log('====================================');
  console.log(user);
  console.log('====================================');
  const [opened, setOpened] = useState(false);
  const [data, setData] = useState<profile>();

  const handleSubmit = async() =>{

  };

  return (
    <div>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        className="Drawer"
      >
        <form className="Ask" onSubmit={handleSubmit}>
          <Text align="center"> Edit Profile</Text>
          <div className="ProfileImg">
            <Input type="file" className="about Img " />
          </div>
          <div className="Name">
            <Input placeholder="First Name" className="aboutme" type='text' />
            <Input placeholder="Last Name" className="aboutme" type='text' />
          </div>
          <Input placeholder="Email" className="about" type="email" />
          <Input placeholder="City" className="about" type="text" />
          <div className="Info">
            <Input placeholder="Phone" className="aboutme" type="text"/>
            <Input placeholder="Address " className="aboutme" type="text"/>
          </div>

          <Textarea placeholder="About me" className="about"/>
        </form>
        <Button type="submit">Update Profile</Button>
      </Modal>

      <div className="Profile">
        <small>
          Course Management System / <Link to="/">Profile</Link>
        </small>
        <div className="Spacing">
          <div className="User-info">
            <h5>My Profile</h5>
            <div className="image">
              <div className="user-img">
                <img
                  src={user.images[0].url}
                  alt="img"
                  width={130}
                  height={130}
                />
              </div>
              <Group className="btn">
                <Button onClick={() => setOpened(true)}>Edit</Button>
              </Group>
            </div>

            <div className="user-name">
              <Text>
                {user.first_name} {user.last_name}
              </Text>
            </div>
            <div className="Contact">
              <div className="About">
                <h4>
                  <span>
                    <FcAbout />
                  </span>
                  About Me
                </h4>
                <p>{user.about}</p>
              </div>
              <div className="address">
                <h4>
                  <span>
                    <RiInformationLine />
                  </span>
                  My Information
                </h4>
                <h6>
                  <span>
                    <FaRegAddressCard />
                  </span>
                  Address: {user.address}
                </h6>
                <h6>
                  <span>
                    <FaCity />
                  </span>
                  City: {user.city}
                </h6>
                <h6>
                  <span>
                    <BiPhone />
                  </span>
                  Phone: {user.phone}
                </h6>
                <h6>
                  <span>
                    <AiOutlineMail />
                  </span>
                  Email: {user.email}
                </h6>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
