import './css/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './component/Nav';
import Home from './component/Home';
import Footer from './component/Footer';
import Page from './component/Page';

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
