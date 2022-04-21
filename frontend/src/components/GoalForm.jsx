import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGoal } from "../features/goals/goalSlice";
import { Button, Typography, Grid, Box, autocompleteClasses } from "@mui/material";
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
    <Box
      sx={{
        margin: 10,
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <TextField
            id="text"
            name="text"
            label={"Enter a goal"}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant="contained" size="large" sx={{p: 2,}} onClick={onSubmit}>
            Add
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GoalForm;
