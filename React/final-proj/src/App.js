import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Page from './components/Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
          <Routes>
                <Route path="/" exact element={<Home/>} />
                <Route path="/page" exact element={<Page/>} />
          </Routes>
        <Footer/>
      </BrowserRouter>  
    </div>
  );
}

export default App;
