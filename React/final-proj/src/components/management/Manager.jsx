import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FPNav from '../FP-Nav';
import Home from '../Home';
import React, { useState } from 'react';
import Footer from '../Footer';
import Tabs from '../Tabspace.jsx';
import SearchResults from '../SearchResults.jsx';

const Manager = () => {
    const [search, setSearch] = useState([]);

    return (
        <div>
            <BrowserRouter>
                <FPNav setSearch={setSearch}/>
                <Routes>
                    <Route path="/" exact element={<Home searchQuery={search} />} />
                    <Route path="/tabs/" exact element={<Tabs searchQuery={search}/>} />
                    <Route path="/searchresults" exact element={<SearchResults searchQuery={search}/>} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default Manager;