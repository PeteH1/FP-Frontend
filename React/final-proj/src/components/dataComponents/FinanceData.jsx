const FinanceData = ({data}) => {
    if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
        return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    } else {
    return ( 
        <div>
            <h4>Bank Card Details</h4>
            <p>Account number: {data.atmTransactions[0].account_number}</p>
            <p>Card number: {data.atmTransactions[0].bank_card_number}</p>
            <p>Sort Code: {data.atmTransactions[0].sort_code}</p>
            <p>Bank: {data.atmTransactions[0].bank}</p>

            <h4>ATM Transactions</h4>
            <p>Timestamp: {data.atmTransactions[0].timestamp}</p>
            <p>Type: {data.atmTransactions[0].type}</p>
            <p>Amount: {data.atmTransactions[0].amount}</p>
            <p>Operator: {data.atmTransactions[0].operator}</p>
            
            
            <h4>EPOS Transactions</h4>
            <p>Timestamp: {data.eposTransactions[0].timestamp}</p>
            <p>Amount: {data.eposTransactions[0].amount}</p>
            <p>Payee Account: {data.eposTransactions[0].payee_account}</p>
            <p>Vendor: {data.eposTransactions[0].vendor}</p>
            <p>Vendor Address: {data.eposTransactions[0].street_name}</p>
            
            
        </div>
     );
    }
}
 
export default FinanceData;