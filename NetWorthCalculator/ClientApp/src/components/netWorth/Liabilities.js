import React, {Component} from "react";
import {Row} from "react-bootstrap";

export class Liabilities extends Component {
    displayName = Liabilities.name;

    render() {
        return (
            <div>
                <form>
                    <Row>
                        <label>
                            Credit Card Balances:
                            <input type="number" name="creditCards" value={this.props.creditCards} onChange={this.props.onCreditCardsChange}/>
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Personal Loan Balances:
                            <input type="number" name="personalLoans" value={this.props.personalLoans} onChange={this.props.onPersonalLoansChange}/>
                        </label>
                    </Row>
                </form>

            </div>
        );
    }
}