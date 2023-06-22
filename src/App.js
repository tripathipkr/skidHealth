import logo from './logo.svg';
import './App.css';
import Home from './Componant/Home';
import Navbar from './Componant/Navbar';
import AllRoutes from './AllRoute/AllRoutes';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoutes/>
    </div>
  );
}

export default App;
