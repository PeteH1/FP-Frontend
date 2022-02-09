import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import FPNav from './components/FP-Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Tabs from './components/Tabspace.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Manager from './components/management/Manager';


function App() {
  return (
    <div className="App">

      <Manager />
    </div>
  );
}

export default App;
