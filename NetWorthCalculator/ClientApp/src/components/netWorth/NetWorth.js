import React, { Component } from 'react';
import {Col, Row} from "react-bootstrap";
import {Assets} from "./Assets";
import {Liabilities} from "./Liabilities";

export class NetWorth extends Component {
    displayName = NetWorth.name;

    constructor() {
        super();
        this.state = {
            netWorth: 0,
            currentAccount: 0,
            savingsAccount: 0,
            creditCards: 0,
            personalLoans: 0
        };

        this.handleCurrentAccountChange = this.handleCurrentAccountChange.bind(this);
        this.handleSavingsAccountChange = this.handleSavingsAccountChange.bind(this);
        this.handleCreditCardsChange = this.handleCreditCardsChange.bind(this);
        this.handlePersonalLoansChange = this.handlePersonalLoansChange.bind(this);
    }
    
    updateNetWorth() {
        this.setState({
           netWorth: (this.state.currentAccount + this.state.savingsAccount) - (this.state.creditCards + this.state.personalLoans)
        });
    }

    handleCurrentAccountChange(event) {
        this.setState({
            currentAccount: Number(event.target.value)
        }, this.updateNetWorth);
    }

    handleSavingsAccountChange(event) {
        this.setState({
            savingsAccount: Number(event.target.value)
        }, this.updateNetWorth);
    }

    handleCreditCardsChange(event) {
        this.setState({
            creditCards: Number(event.target.value)
        }, this.updateNetWorth);
    }

    handlePersonalLoansChange(event) {
        this.setState({
            personalLoans: Number(event.target.value)
        }, this.updateNetWorth);
    }

    render() {
        return (
            <div>
                <h1 align="center">
                    Net Worth
                </h1>
                <Row>
                    <Col sm={6}>
                        <Assets currentAccount={this.state.currentAccount} savingsAccount={this.state.savingsAccount} onCurrentAccountChange={this.handleCurrentAccountChange} onSavingsAccountChange={this.handleSavingsAccountChange}/>
                    </Col>
                    <Col sm={6}>
                        <Liabilities creditCards={this.state.creditCards} personalLoans={this.state.personalLoans} onCreditCardsChange={this.handleCreditCardsChange} onPersonalLoansChange={this.handlePersonalLoansChange}/>
                    </Col>
                </Row>
                <Row>
                    <h3>Net Worth = {this.state.netWorth}</h3>
                </Row>
            </div>
        );
    }
}
