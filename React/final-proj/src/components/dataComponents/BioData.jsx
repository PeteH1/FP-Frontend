
import React, { useState } from 'react';

const BioData = ({data}) => {
// console.log(data);

    return (
        <div>
            <p>Citizen ID: {data.bioinfo[0].citizen_id}</p>
            <p>Date of Birth: {data.bioinfo[0].date_of_birth}</p>
            <p>Home Address: {data.bioinfo[0].home_address}</p>
            <p>Place of Birth: {data.bioinfo[0].place_of_birth}</p>
            <p>Sex: {data.bioinfo[0].sex}</p>        
        </div>
      );
}
 
export default BioData;