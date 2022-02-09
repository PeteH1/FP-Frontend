import Table from 'react-bootstrap/Table';

const FinanceData = ({data}) => {
    if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
        return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    } else {
    return ( 
        <div>
             <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th colSpan={2}>Finance Data</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Bank</td>
                                <td>{data.atmTransactions[0].bank}</td>
                            </tr>
                            <tr>
                                <td>Account number</td>
                                <td>{data.atmTransactions[0].account_number}</td>
                            </tr>
                            <tr>
                                <td>Card number</td>
                                <td>{data.atmTransactions[0].bank_card_number}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th colSpan={2}>Cash Withdrawal</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Amount</td>
                                <td>{data.atmTransactions[0].amount}</td>
                            </tr>
                            <tr>
                                <td>Street_name</td>
                                <td>{data.atmTransactions[0].street_name}</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>{data.atmTransactions[0].type}</td>
                            </tr>
                            <tr>
                                <td>Timestamp</td>
                                <td>{data.atmTransactions[0].timestamp}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
        </div>
     );
    }
}
 
export default FinanceData;