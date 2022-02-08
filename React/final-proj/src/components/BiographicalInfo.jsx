import SuspectPage from "./SuspectPage";

const BiographicalInfo = ({tab, forenames, surname, home_address, place_of_birth, sex}) => {
    return ( 
        <div>
            <SuspectPage tab={tab}/>
            <h3>{forenames} {surname} </h3>
            <h3> Home_address: {home_address} </h3>
            <h3> Place_of_birth: {place_of_birth} </h3>
            <h3> Gender: {sex} </h3>

        </div>
     );
}
 
export default BiographicalInfo;