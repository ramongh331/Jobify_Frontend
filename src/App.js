import './App.css';
import { Outlet } from 'react-router-dom';
import Header from "./components/Header"
import { useState, useEffect} from 'react';

function App() {

  const [isLoading, setLoading] = useState(true);

  function someRequest() { //Simulates a request; makes a "promise" that'll run for 2.5 seconds
    return new Promise(resolve => setTimeout(() => resolve(), 10000));
  } 

  useEffect(() => {
    someRequest().then(() => {
      const loaderElement = document.querySelector(".loader-container");
      if (loaderElement) {
        loaderElement.remove();
        setLoading(!isLoading);
      }
    });
  });

  if (isLoading) {
    return null;
  }

  return (
    <div className="App">
      <Header/>
      <Outlet/>
    </div>
  );
}

export default App;
