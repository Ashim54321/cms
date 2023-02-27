import React,{useState} from "react";
import { Link } from "react-router-dom";
import { Input,Anchor, Button, Group, Modal, Textarea,Text, ScrollArea } from '@mantine/core';


function PostCard(props: { UserName: any; UserImg: any; Date: any ; content:any; }) {
  const [opened, setOpened] = useState(false);
  return (
    <div className="ShowPost">
       <Modal 
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        className='Drawer'
      >
      <div className='Ask'>
        <div className='Ask-box'>
            <Text> Ask Question </Text>
           <Textarea placeholder=' Enter your question ' mt={40} />
           <Group position="center" >
           <Button mt={20}>
            Ask Question
           </Button>
           </Group>
          
        </div>
      </div>
      </Modal>
      <div className="Image-post">
        <img src="https://images.unsplash.com/photo-1666548001262-d42b426c8816?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </div>
      <div className="Post-details">
        <div className="User-details">
          <img src={props.UserImg} />
          <h4>{props.UserName}</h4>
        </div>
        <div className="User-post">
          <ScrollArea style={{ height: 150 }} >
           {props.content}
          </ScrollArea>
          <small>{props.Date}</small>
        </div>
        <div>
          <Anchor onClick={() => setOpened(true)}>
            <h6>See All Comments</h6>
          </Anchor>
          <Input placeholder="Write your comments"/>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
