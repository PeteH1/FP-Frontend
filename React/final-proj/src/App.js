import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './css/App.css';
import FPNav from './components/FP-Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Tabs from './components/Tabspace.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <FPNav/>
          <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/tabs" exact element={<Tabs/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
