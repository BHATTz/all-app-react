import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import TextForm from "../TextForm";
import Content from "../content-P/ContentComponent";
import { DarkModeProvider } from "../DarkModeContext";

export default function connectall() {
  return (
    <div>
      <DarkModeProvider>
        <Header />
        <Content />
        <TextForm />
        <Footer />
      </DarkModeProvider>
    </div>
  );
}
