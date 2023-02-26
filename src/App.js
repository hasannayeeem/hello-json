import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./shared/Header/Header";
import Hero from "./components/Hero";
import Test from "./Tests/Test";
import { useState } from "react";
import { createContext } from 'react';
import Home from "./Pages/Home/Home";
import Login from "./Pages/Auth/Login/Login";
import Radium, { Style, StyleRoot } from 'radium';
import Register from "./Pages/Auth/Register/Register";
export const BgContext = createContext("");

function App() {
  const [bg, setBg] = useState('d')
  return (
    <>
    
    <BgContext.Provider value={[bg, setBg]}>

      <Header></Header>
      <Routes>
        <Route path={`/`} element={<StyleRoot><Home /></StyleRoot>}></Route>
        <Route path={`/home`} element={<StyleRoot><Home /></StyleRoot>}></Route>
        <Route path={`/hero`} element={<StyleRoot><Hero /></StyleRoot>}></Route>
        <Route path={`/test`} element={<StyleRoot><Test /></StyleRoot>}></Route>
        <Route path={`/login`} element={<Login></Login>}></Route>
        <Route path={`/register`} element={<Register></Register>}></Route>
        
      </Routes>
      
    </BgContext.Provider>
    </>
  );
}

export default Radium(App);
