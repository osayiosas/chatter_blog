"use client";

import { ProgressBar } from "react-loader-spinner";

export default function Spinner() {
  return (
    <ProgressBar
      height={"120"}
      width={"120"}
      ariaLabel="common loader"
      borderColor="#000"
      barColor="#fff"
    />
  );
}
