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
import TabContainer from 'react-bootstrap/esm/TabContainer';

// import { render } from 'react-dom';

const Tabspace = ({ searchQuery }) => {

  const [error, setError] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const [data, setData] = useState([]);
  let { id } = useParams();

  useEffect(() => {

    console.log(id);

    if (searchQuery) {
      axios.get(`http://localhost:5015/suspect/readById/${id}`)
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

  const [key, setKey] = useState("");



  if (error === true) {
    return <h2>Oops,theres been an error please refresh the page</h2>
  } else if (!loaded) {
    return <h2>Please wait, data is loading</h2>
  } else {
    return (
      <div id="tabz">
        <h1>{data.citizenPassport[0].forenames} {data.citizenPassport[0].surname}</h1>

        <Tabs id="controlled-tab-example" className="mb-3"
          activeKey={key}
          onSelect={(k) => {
            setKey(k);
          }}
        >
          <Tab eventKey="bio-info" title="Biographical Information" className="BioKey">
            <BiographicalInfo tab={key} data={data} />
          </Tab>
          <Tab eventKey="associates" title="Associates">
            <Associates tab={key} data={data} />
          </Tab>
          <Tab eventKey="finance" title="Financial Transactions">
            <Finance tab={key} data={data} />
          </Tab>
          <Tab eventKey="location" title="Location">
            <Location tab={key} data={data} />
          </Tab>
        </Tabs>



      </div>

    );
  }
}

export default Tabspace;