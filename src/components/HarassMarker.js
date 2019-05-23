import React from "react";

const style = {
  backgroundColor: "red",
  color: "red",
  width: "10px",
  height: "10px",
  borderRadius: "4px",
};
const HarassMarker = ({ text }) => <div style={style}>{text}</div>;

export default HarassMarker;
