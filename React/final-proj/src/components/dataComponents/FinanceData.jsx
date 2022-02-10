import Table from 'react-bootstrap/Table';

const FinanceData = ({ data }) => {
    // if (data.eposTransactions.length === 0 || data.anprSightings.length === 0 || data.atmTransactions.length === 0) {
    //     return <h2> NOOOOOO DATA FOR ONE ARRAY </h2>
    // } else {
    return (
        <div>

            <div id="myTable">
                <div class="row justify-content-center">
                    <div class="col-8">
                        <table class="table">

                            <div>
                                <Table striped bordered hover>
                                    <thead>

                                        <tr>
                                            <th colSpan={4}>ATM Transactions</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="col-md-2">Timestamp</td>
                                            <td class="col-md-2">Type</td>
                                            <td class="col-md-2">Amount</td>
                                            <td class="col-md-2">Operator</td>
                                        </tr>
                                        {data.atmTransactions.map((details) => {
                                            return (
                                                <tr>
                                                    <td class="col-md-2">
                                                        {details.timestamp}
                                                    </td>
                                                    <td class="col-md-2">
                                                        {details.type}
                                                    </td>
                                                    <td class="col-md-2">
                                                        {details.amount}
                                                    </td>
                                                    <td class="col-md-2">
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
                                            <td class="col-md-2">Account Holder</td>
                                            <td class="col-md-2">Account number</td>
                                            <td class="col-md-2">Card number</td>
                                            <td class="col-md-2">Sort Code</td>
                                            <td class="col-md-2">Bank</td>
                                        </tr>
                                        {data.atmTransactions.map((details) => {
                                            return (
                                                <tr>
                                                    <td class="col-md-2">
                                                        {details.forenames} {details.surname}
                                                    </td>
                                                    <td class="col-md-2">
                                                        {details.account_number}
                                                    </td>
                                                    <td class="col-md-2">
                                                        {details.bank_card_number}
                                                    </td>
                                                    <td class="col-md-2">
                                                        {details.sort_code}
                                                    </td>
                                                    <td class="col-md-2">
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
                                            <td class="col-md-2">Timestamp</td>
                                            <td class="col-md-2">Amount</td>
                                            <td class="col-md-2">Payee Account</td>
                                            <td class="col-md-2">Vendor</td>
                                            <td class="col-md-2">Vendor Address</td>
                                        </tr>
                                        {data.eposTransactions.map((details) => {
                                            return (
                                                <tr>
                                                    <td class="col-md-2">
                                                        {details.timestamp}
                                                    </td>
                                                    <td class="col-md-2">
                                                        {details.amount}
                                                    </td>
                                                    <td class="col-md-2">
                                                        {details.payee_account}
                                                    </td>
                                                    <td class="col-md-2">
                                                        {details.vendor}
                                                    </td>
                                                    <td class="col-md-2">
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
                                            <td class="col-md-2">Account Holder</td>
                                            <td class="col-md-2">Account number</td>
                                            <td class="col-md-2">Card number</td>
                                            <td class="col-md-2">Sort Code</td>
                                            <td class="col-md-2">Bank</td>
                                        </tr>
                                        {data.eposTransactions.map((details) => {
                                            return (
                                                <tr>
                                                    <td class="col-md-2">
                                                        {details.forenames} {details.surname}
                                                    </td>
                                                    <td class="col-md-2">
                                                        {details.account_number}
                                                    </td>
                                                    <td class="col-md-2">
                                                        {details.bank_card_number}
                                                    </td>
                                                    <td class="col-md-2">
                                                        {details.sort_code}
                                                    </td>
                                                    <td class="col-md-2">
                                                        {details.bank}
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        )}
                                    </tbody>
                                </Table>
                            </div>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
            // }

            export default FinanceData;