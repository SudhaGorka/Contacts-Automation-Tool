import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter,  Navigate,  Route,  Routes , } from 'react-router-dom';
import Login from './components/Login';
import { SignUp } from './components/SignUp';
import AddContact from './components/AddContact';
import Home from './components/Home';
import { SheetManager } from './components/SheetManager';
import About from './components/About';


function App() {
  return (
  
    <div>
      <BrowserRouter>
     
     <Navbar />
     <Routes>
     <Route element ={<Navigate to="/contact" />} path= "/" />
     <Route element ={<Login />} path= "login" />
     <Route element ={<SignUp />} path= "signup" />
     <Route element ={<AddContact />} path= "addcontact" />
     <Route element ={<Home />} path= "home" />
     <Route element ={<SheetManager />} path= "sheetmanager" />
     <Route element ={<About />} path= "about" />

     </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
