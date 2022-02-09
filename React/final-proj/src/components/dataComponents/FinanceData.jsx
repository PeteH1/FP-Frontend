const FinanceData = ({data}) => {
    if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
        return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    } else {
    return ( 
        <div>
            <h2>Finance Data</h2>
            <p>Bank: {data.atmTransactions[0].bank}</p>
            <p>Account number: {data.atmTransactions[0].account_number}</p>
            <p>Card number: {data.atmTransactions[0].bank_card_number}</p>
            <p>cash withdrawal</p>
            <p>Amount: {data.atmTransactions[0].amount}</p>
            <p>Street_name: {data.atmTransactions[0].street_name}</p>
            <p>type: {data.atmTransactions[0].type}</p>
            <p>timestamp: {data.atmTransactions[0].timestamp}</p>
        </div>
     );
    }
}
 
export default FinanceData;