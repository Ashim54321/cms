import React, { useContext, useState } from "react";
import { Button, FileInput, Image, Input } from "@mantine/core";
import "../News.css";
import { UserContext } from "../../../App";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddPost() {
  const { user } = useContext(UserContext);
  const history = useNavigate();
  const [image, setImage] = useState<any>(null);
  const [content, setContent] = useState<any>("");
  const UserName = user.first_name + " " + user.last_name;
  const UserImg = user.images[0].url;

  const Addnews = async () => {
    let formField = new FormData();
    formField.append("content", content);
    formField.append("UserImg", UserImg);
    formField.append("UserName", UserName);
    formField.append("image", image);

    await axios({
      method: "post",
      url: "http://localhost:5000/api/post/",
      data: formField,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }).then((response) => {
      console.log(response.data);
      history("/home/");
    });
    toast.success("Post successfully");
  };

  return (
    <div className="AddPost">
      <div className="info">
        <img src={user.images[0].url} alt="user image" width={50} height={50} />
        <h5>
          {user.first_name} {user.last_name}
        </h5>
      </div>
      <form className="add">
        <Input
          placeholder="What's on your mind ? "
          className="add-input"
          name="content"
          value={content}
          onChange={(e: any) => setContent(e.target.value)}
          required
        />
        <FileInput
          placeholder="Add Photo"
          className="fileinp"
          name="image"
          onChange={(e: any) => setImage(e.target.files[0])}
          required
        />
        <Button onClick={Addnews}>Post</Button>
      </form>
    </div>
  );
}

export default AddPost;
