import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";
import { Button, Typography, Grid } from "@mui/material";
import { TextField } from "@mui/material";

function GoalForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText("");
  };

  return (
    <>
    <Grid>
    <Typography align="center">Goal</Typography>
      <TextField
        id="text"
        name="text"
        label={"Enter a goal"}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button onClick={onSubmit}>Add</Button>
    </Grid>
      
    </>
  );
}

export default GoalForm;
