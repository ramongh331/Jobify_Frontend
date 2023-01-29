import './App.css';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header"
import { createContext, useState } from 'react';

export const GlobalCtx = createContext(null)



function App() {
  const [gState, setGState] = useState({url: "http://localhost:3000", token: null})


  return (
    <GlobalCtx.Provider value={{gState, setGState}}>
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
