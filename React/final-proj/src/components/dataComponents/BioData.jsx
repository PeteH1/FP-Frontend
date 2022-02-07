
import React, { useState } from 'react';

const BioData = ({data}) => {
console.log(data);

    return (
        <div>
            <p>Forename: {data.bioinfo[0].forenames}</p>
            <p>Surname: {data.bioinfo[0].surname}</p>
        </div>
      );
}
 
export default BioData;