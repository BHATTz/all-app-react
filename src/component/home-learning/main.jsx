import React from "react";
import Logic from "./learnlogic";
import Api from "./api";
import SM from "./spreadMap";
import Arr from "./arr";

export default function Main() {
  return (
    <>
      <Logic />
      <Arr />
      <SM />
      <Api />
    </>
  );
}
