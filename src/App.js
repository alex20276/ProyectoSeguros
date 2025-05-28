import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Doshboard } from './pages/Doshboard';
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <div className="App">
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<>Pagina Inicio </>} />
          <Route path="*" element ={<>NOT FOUND </>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/doshboard" element ={<Doshboard/>} />
        </Routes>
        </BrowserRouter>
    </UserProvider>
    </div>
  );
}

export default App;
