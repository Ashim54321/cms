import { useState } from "react";
import { Modal, Button, Group, Text, Textarea, Select } from "@mantine/core";
import "./Question.css";

export default function QuestionCard() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        className="Drawer"
      >
        <div className="Ask">
          <div className="Ask-box">
            <Text align="center" sx={{ fontSize: "30px" }}>
              {" "}
              Ask Question{" "}
            </Text>
            <Textarea 
            label="Question" placeholder=" Enter your question " mt={40} />
            <Select
              label="Question Categories"
              placeholder="Pick one"
              data={[
                { value: "react", label: "Technology" },
                { value: "ng", label: "Programming" },
                { value: "svelte", label: "History" },
                { value: "vue", label: "Vue" },
              ]}
            />
            <Group position="center">
              <Button mt={20}>Ask Question</Button>
            </Group>
          </div>
        </div>
      </Modal>

      <Group position="center">
        <Button onClick={() => setOpened(true)}>Ask Question</Button>
      </Group>
    </>
  );
}
