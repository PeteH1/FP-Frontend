import SuspectCard from './SuspectCard';
import Tab from 'react-bootstrap/Tab';
import React, { useState } from 'react'
import Tabs from 'react-bootstrap/Tabs';
import Associates from './Associates';
import BioInfo from './BiographicalInfo';
import Finance from './FinancialTransactions';
import Location from './Location';

// import { render } from 'react-dom';

const Tabspace = () => {
    const [key, setKey] = useState("associates");
    return ( 
        
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => {
        setKey(k);
        console.log(key);
      } }
      className="mb-3"
    >
      <Tab eventKey="associates" title="Associates">
        <Associates />
      </Tab>
      <Tab eventKey="bio-info" title="Biographical Information">
        <BioInfo />
      </Tab>
      <Tab eventKey="finance" title="Financial Transactions">
        <Finance />
      </Tab>
      <Tab eventKey="location" title="Location">
        <Location />
      </Tab>
    </Tabs>
     );
}
 
export default Tabspace;
