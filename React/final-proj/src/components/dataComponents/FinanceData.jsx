const FinanceData = ({ data }) => {
    // if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
    //     return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    // } else {
    return (
        <div>
            <h4>ATM Transactions</h4>
            {data.atmTransactions.map((details) => {
                return (
                    <div>
                        <p>Timestamp: {details.timestamp}</p>
                        <p>Type: {details.type}</p>
                        <p>Amount: {details.amount}</p>
                        <p>Operator: {details.operator}</p>
                    </div>
                )
            }
            )}
            <h4>Bank card used</h4>
            {data.atmTransactions.map((details) => {
                return (
                    <div>
                        <p>Account Holder: {details.forenames} {details.surname}</p>
                        <p>Account number: {details.account_number}</p>
                        <p>Card number: {details.bank_card_number}</p>
                        <p>Sort Code: {details.sort_code}</p>
                        <p>Bank: {details.bank}</p>
                    </div>
                )
            }
            )}

            <h4>EPOS Transactions</h4>
            {data.eposTransactions.map((details) => {
                return (
                    <div>
                        <p>Timestamp: {details.timestamp}</p>
                        <p>Amount: {details.amount}</p>
                        <p>Payee Account: {details.payee_account}</p>
                        <p>Vendor: {details.vendor}</p>
                        <p>Vendor Address: {details.street_name}</p>
                    </div>
                )
            }
            )}
            <h4>Bank card used</h4>
            {data.eposTransactions.map((details) => {
                return (
                    <div>
                        <p>Account Holder: {details.forenames} {details.surname}</p>
                        <p>Account number: {details.account_number}</p>
                        <p>Card number: {details.bank_card_number}</p>
                        <p>Sort Code: {details.sort_code}</p>
                        <p>Bank: {details.bank}</p>
                    </div>
                )
            }
            )}
        </div>
    );
}
// }

export default FinanceData;