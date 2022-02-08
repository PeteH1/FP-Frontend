const SearchResultsCards = ({tab, forenames, surname, home_address, place_of_birth, sex}) => {
    return ( 
        <div>
            <h3> Home Address: {home_address} </h3>
            <h3> Place of Birth: {place_of_birth} </h3>
            <h3> Gender: {sex} </h3>
        </div>
     );
}
 
export default SearchResultsCards;