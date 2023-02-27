import { Button, Input } from "@mantine/core";
import axios from "axios";
import React, { useContext } from "react";
import { AiOutlineLike, FaRegCommentAlt, ImShare } from "react-icons/all";
import PostCard from "./PostCard";
import { UserContext } from "../../../App";

interface Post {
  UserName: string;
  content: string;
  image: any;
  UserImg: any;
}
[];

function ShowPost() {
  const { user } = useContext(UserContext);

  const [post, setPost] = React.useState<Post[]>();
  const getPost = async () => {
    const res = await axios(`http://localhost:5000/api/post/`);
    const data = res.data.data;
    setPost(data);
  };

  React.useEffect(() => {
    getPost();
  }, []);

  return (
    <div>
      {post?.map?.(
          (v:any,key:any) => (
            <PostCard 
            UserImg={v.UserImg}
            UserName={v.UserName}
            Date="25 dec 2025"
            content={v.content}
            />
          )
        )}
    </div>
  );
}

export default ShowPost;
