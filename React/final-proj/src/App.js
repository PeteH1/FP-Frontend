import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styling/custom.scss';
import 'leaflet/dist/leaflet.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Manager from './components/management/Manager';


function App() {
  return (
    <div className="App">
      <Manager />
    </div>
  );
}

export default App;
