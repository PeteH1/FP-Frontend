import FPNav from './components/FP-Nav';
import Home from './components/Home';
import React, { useState } from 'react';

const Manager = () => {
    const [search, setSearch] = useState("");
    
    return ( 
        <div>
            <Home searchData={search}/>
            <FPNav searchData={search}/>
        </div>
     );
}
 
export default Manager;