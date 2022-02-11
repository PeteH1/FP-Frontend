import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import RedshiftLogo from '../img/RedshiftLogo.png';

import SearchResults from './SearchResults'

const Home = () => {


    return (
        <div>
            <p>For Scenario 1, please type in First Name and Last Name into the Search Bar</p>
            <p>For Scenario 3, please type in Car Registration Number into the Search Bar</p>
        </div>
    );
}
export default Home;