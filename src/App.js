import './App.css';
//import Dang from './assets/Dang.jpg';
import {Route, Routes} from "react-router-dom";
import Header from './component/Header';
import Home from "./Pages/Home.js";
import Signup from './Pages/Signup';
import Signin from './Pages/Signin';
import Profile from './Pages/Profile';
function App()  {
  return (
    <>
  <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/sign-up" element={<Signup />}></Route>
      <Route path="/sign-in" element={<Signin />}></Route>
      <Route path='/profile' element={<Profile />}></Route>
    </Routes>
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={Dang} className="App-logo" alt="Dang" />
    //     <p>
    //       DangGuitar
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://www.youtube.com/watch?v=RPXzF_wtbGg"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       ธรรมแท้ไม่มีคำปลอบใจ 
    //     </a>
    //   </header>
    // </div>s
  );
}

export default App;
