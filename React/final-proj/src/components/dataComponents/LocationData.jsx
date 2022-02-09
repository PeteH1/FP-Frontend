const LocationData = ({ data }) => {
    if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
        return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    } else {
        return (
            <div>
                <h2>Location Data</h2>
                <p>atm latitude: {data.atmTransactions[0].latitude}</p>
                <p>atm longitude: {data.atmTransactions[0].longitude}</p>
                <p>atm street name: {data.atmTransactions[0].street_name}</p>

                <p>epos latitude: {data.eposTransactions[0].latitude}</p>
                <p>epos longitude: {data.eposTransactions[0].longitude}</p>
                <p>epos vendor: {data.eposTransactions[0].vendor}</p>
                <p>epos timestamp: {data.eposTransactions[0].timestamp}</p>

            </div>
        );
    }
}
export default LocationData;