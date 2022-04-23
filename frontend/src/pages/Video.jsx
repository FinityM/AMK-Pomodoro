import { Box, Typography } from "@mui/material";
import { reducer as voxeetReducer } from "@voxeet/react-components"
import thunkMidleware from "redux-thunk"
import { combineReducers, createStore, applyMiddleware } from "redux"
import { ConferenceRoom, VoxeetProvider } from "@voxeet/react-components"
import "@voxeet/react-components/dist/voxeet-react-components.css"
import React from "react";

function Video() {
 
  return (
    <Box>
      <Typography>Video</Typography>
    </Box>
  );
}

export default Video;
