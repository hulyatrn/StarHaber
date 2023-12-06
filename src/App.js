import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/home/Home";
import Header from './component/header/Header';


function App() {
  return (
    <div className="App">
          <BrowserRouter>
          <Header/>
      <Routes>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
