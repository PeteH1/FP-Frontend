import Tab from 'react-bootstrap/Tab';
import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Associates from './Associates';
import BioInfo from './BiographicalInfo';
import Finance from './FinancialTransactions';
import Location from './Location';

// import { render } from 'react-dom';

const Tabspace = () => {
  const [key, setKey] = useState("bio-info");
  return (
    <div>
      <h1>$Name of Suspect</h1>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => {
          setKey(k);
          // console.log(key);
        }}
        className="mb-3"
      >
        <Tab eventKey="bio-info" title="Biographical Information">
          <BioInfo data={key} />
        </Tab>
        <Tab eventKey="associates" title="Associates">
          <Associates data={key}/>
        </Tab>
        <Tab eventKey="finance" title="Financial Transactions">
          <Finance data={key}/>
        </Tab>
        <Tab eventKey="location" title="Location">
          <Location data={key}/>
        </Tab>
      </Tabs>
    </div>

  );
}

export default Tabspace;