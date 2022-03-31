//To make useContext, you'll have to createContext first, no matter what! First, make createContext => Then to use, you'll have to do => useContext
import { createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import YellowPage from "./components/YellowPage";
import GreenPage from "./components/GreenPage";

//Make  A Variable of ColorContext with the value of dark
export const ColorContext = createContext("dark");

const App = () => {
  return (
    <ColorContext.Provider value={"light"}>
      <BrowserRouter>
        <Routes>
          <Route path="/yellow" element={<YellowPage />} />
          <Route path="/green" element={<GreenPage />} />
        </Routes>
      </BrowserRouter>
    </ColorContext.Provider>
  );
};

export default App;
