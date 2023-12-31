import { Button, Typography } from "@mui/material";
import React from "react";

const customBtnStyle = {
  backgroundColor: "#687EFF",
  color: "white",
  borderRadius: "10px",
  padding: "10px 25px",
  width: "100%"
};

const PrimaryBtn = ({ text, onClick, icon = null, disabled = false }) => {
  return (
    <Button
      style={customBtnStyle}
      startIcon={icon}
      onClick={onClick}
      disabled={disabled}
    >
      <Typography>{text}</Typography>
    </Button>
  );
};

export default PrimaryBtn;
