import Tab from 'react-bootstrap/Tab';
import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Associates from './Associates';
import BiographicalInfo from './BiographicalInfo';
import Finance from './FinancialTransactions';
import Location from './Location';
import axios from 'axios';
import { useEffect } from 'react';
import BioData from './dataComponents/BioData';

// import { render } from 'react-dom';

const Tabspace = ({ searchQuery }) => {

  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const [data, setData] = useState([]);


  useEffect(() => {

    if (searchQuery) {
      axios.get("http://localhost:5015/suspect/PeteHutchison")
        .then((res) => {
          console.log(res.data);
          setData(res.data);
          setLoaded(true);
        })
        .catch((err) => {
          setError(error);
          console.error(err);
        })
    }
  }, [searchQuery]
  );

  const [key, setKey] = useState("bio-info");

  return (
    <div>
      <h1>{data.bioinfo[0].forenames} {data.bioinfo[0].surname}</h1>
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
          <BiographicalInfo tab={key} data={data}/>
        </Tab>
        <Tab eventKey="associates" title="Associates">
          <Associates data={key} />
        </Tab>
        <Tab eventKey="finance" title="Financial Transactions">
          <Finance data={key} />
        </Tab>
        <Tab eventKey="location" title="Location">
          <Location data={key} />
        </Tab>
      </Tabs>
    </div>

  );
}

export default Tabspace;