import { useState } from 'react';
import { Modal , Button, Group, Text, Textarea } from '@mantine/core';

export default function Note() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal 
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        className='Drawer'
      >
      <div className='Ask'>
        <div className='Ask-box'>
            <Text align='center' sx={{"fontSize":"30px"}}> Add Notice </Text>
           <Textarea placeholder=' Enter your question ' mt={40} />
           <Group position="center" >
           <Button mt={20}>
            Ask Question
           </Button>
           </Group>
          
        </div>
      </div>
      </Modal>

      <Group position="center" >
        <Button onClick={() => setOpened(true)}>Add Notice</Button>
      </Group>
    </>
  );
}