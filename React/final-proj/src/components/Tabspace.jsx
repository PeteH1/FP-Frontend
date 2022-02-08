import Tab from 'react-bootstrap/Tab';
import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Associates from './Associates';
import BiographicalInfo from './BiographicalInfo';
import Finance from './FinancialTransactions';
import Location from './Location';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BioData from './dataComponents/BioData';

// import { render } from 'react-dom';

const Tabspace = ({ searchQuery }) => {

  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const [data, setData] = useState([]);
  let{id} = useParams();

  useEffect(() => {

    console.log(id);

    if (searchQuery) {
      axios.get(`http://localhost:5015/suspect/readById/${id}`)
        .then((res) => {
          console.log(res.data.callsMade);
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
      {/* <h1>{data.citizenPassport[0].forenames} {data.citizenPassport[0].surname}</h1> */}
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
        <Tab eventKey="associates" title="Phone Calls">
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