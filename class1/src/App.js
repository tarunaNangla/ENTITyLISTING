// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About';
import Cart from './Components/Cart';
function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
           <Route path={"/"} element={<Home/>}></Route>
           <Route path={"/about"} element={<About/>}></Route>
           <Route path={"/cart"} element={<Cart/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
