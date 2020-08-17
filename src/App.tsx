import React from "react";
import { BrowserRouter } from "react-router-dom";
import { SHeader, SMain, SFooter } from "./components";
// import "./App.css";

const App: React.FC<any> = () => {
 return (
  <BrowserRouter>
   <SHeader auth={false} name={"hanzputro"} />
   <SMain />
   <SFooter />
  </BrowserRouter>
 );
};

export default App;
