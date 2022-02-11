import Button from 'react-bootstrap/Button';

const SearchResultsCards = ({home_address, place_of_birth, sex}) => {

    return ( 
        <div>
            <h3> Home Address: {home_address} </h3>
            <h3> Place of Birth: {place_of_birth} </h3>
            <h3> Gender: {sex} </h3>
            {/* on click, more info button should set state for citizenId */}
            {/* we want to pass this state to tabspace where a get request is sent ot back end using citizenID as parameter */}
        </div>
     );
}
 
export default SearchResultsCards;