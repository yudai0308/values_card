import React from "react";
import { Box, Paper } from '@material-ui/core';
import { useHandStyles } from '../styles';
import { fieldFrame, cardFrame } from '../conf'

export default function Discord() {
  const handClasses = useHandStyles();
  const left = (fieldFrame.sideWidth - cardFrame.width) / 2
  let discards = [];
  for (let i = 0; i < 60; i++) {
    const top = i * 30 + 30;
    const style = { position: "absolute", left: left, top: top, cursor: "pointer" };
    discards.push(
      <Paper key={i} elevation={5} p={2} style={style} />
    );
  }

  return (
    <Box
      className={handClasses.vCards}
      display="flex"
      flexDirection="column"
      position="relative"
      style={{ width: "100%" }}
    >
      {discards}
    </Box>
  )
}
