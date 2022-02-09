import Table from 'react-bootstrap/Table';

const FinanceData = ({ data }) => {
    // if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
    //     return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    // } else {
    return (
        <div>

            <div>
                <Table striped bordered hover>
                    <thead>

                        <tr>
                            <th colSpan={4}>ATM Transactions</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Timestamp</td>
                            <td>Type</td>
                            <td>Amount</td>
                            <td>Operator</td>
                        </tr>
                        {data.atmTransactions.map((details) => {
                            return (
                                <tr>
                                    <td>
                                        {details.timestamp}
                                    </td>
                                    <td>
                                        {details.type}
                                    </td>
                                    <td>
                                        {details.amount}
                                    </td>
                                    <td>
                                        {details.operator}
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>
            </div>

            <div>
                <Table striped bordered hover>
                    <thead>

                        <tr>
                            <th colSpan={5}>(ATM) Bank Card Used</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Account Holder</td>
                            <td>Account number</td>
                            <td>Card number</td>
                            <td>Sort Code</td>
                            <td>Bank</td>
                        </tr>
                        {data.atmTransactions.map((details) => {
                            return (
                                <tr>
                                    <td>
                                    {details.forenames} {details.surname}
                                    </td>
                                    <td>
                                    {details.account_number}
                                    </td>
                                    <td>
                                    {details.bank_card_number}
                                    </td>
                                    <td>
                                    {details.sort_code}
                                    </td>
                                    <td>
                                    {details.bank}
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>
            </div>

            <div>
                <Table striped bordered hover>
                    <thead>

                        <tr>
                            <th colSpan={5}>EPOS Transactions</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Timestamp</td>
                            <td>Amount</td>
                            <td>Payee Account</td>
                            <td>Vendor</td>
                            <td>Vendor Address</td>
                        </tr>
                        {data.eposTransactions.map((details) => {
                            return (
                                <tr>
                                    <td>
                                        {details.timestamp}
                                    </td>
                                    <td>
                                    {details.amount}
                                    </td>
                                    <td>
                                    {details.payee_account}
                                    </td>
                                    <td>
                                    {details.vendor}
                                    </td>
                                    <td>
                                    {details.street_name}
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>
            </div>

            <div>
                <Table striped bordered hover>
                    <thead>

                        <tr>
                            <th colSpan={5}>(EPOS) Bank Card Used</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Account Holder</td>
                            <td>Account number</td>
                            <td>Card number</td>
                            <td>Sort Code</td>
                            <td>Bank</td>
                        </tr>
                        {data.eposTransactions.map((details) => {
                            return (
                                <tr>
                                    <td>
                                    {details.forenames} {details.surname}
                                    </td>
                                    <td>
                                    {details.account_number}
                                    </td>
                                    <td>
                                    {details.bank_card_number}
                                    </td>
                                    <td>
                                    {details.sort_code}
                                    </td>
                                    <td>
                                    {details.bank}
                                    </td>
                                </tr>
                            )
                        }
                        )}
                    </tbody>
                </Table>
            </div>


            {/* <h4>ATM Transactions</h4>
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
            )} */}

            {/* <h4>Bank card used</h4>
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
            )} */}

            {/* <h4>EPOS Transactions</h4>
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
            )} */}
        </div>
    );
}
// }

export default FinanceData;