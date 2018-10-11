import React, { Component } from 'react';
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/es/Row";

export class NetWorth extends Component {
    displayName = NetWorth.name;

    constructor(props) {
        super(props);
        this.state = {
            currentAssets: [],
            currentLiabilities: [],
            valueToAdd: 0
        };
        this.handleAddAsset = this.handleAddAsset.bind(this);
        this.handleAddLiability = this.handleAddLiability.bind(this);
    }

    handleAddAsset(event) {
        event.preventDefault();
        let assets = this.state.currentAssets.splice();
        assets.push({
            name: event.target.assetName.value,
            value: parseFloat(event.target.assetValue.value)
        });
        this.setState({
            currentAssets: assets
        });
    }

    handleAddLiability(event) {
        event.preventDefault();
        let liabilities = this.state.currentLiabilities.splice();
        liabilities.push({
            name: event.target.liabilityName.value,
            value: parseFloat(event.target.liabilityValue.value)
        });
        this.setState({
            currentLiabilities: liabilities
        });
    }

    calculateNetWorth() {
        let totalAssets = 0;
        let totalLiabilities = 0;

        this.state.currentAssets.forEach((asset) => {
            totalAssets += asset.value;
        });
        
        this.state.currentLiabilities.forEach((liability) => {
            totalLiabilities += liability.value;
        });
        
        return totalAssets - totalLiabilities;
    }

    render() {
        return (
            <div>
                <Row>
                    <Col md={6}>
                        <form onSubmit={this.handleAddAsset}>
                            <label>
                                Asset Name:
                                <input type="text" name="assetName"/>
                            </label>
                            <label>
                                Asset Value:
                                <input type="number" name="assetValue"/>
                            </label>
                            <input type="submit" value="Add Asset"/>
                        </form>
                        <div>
                            <h3>This the list of your assets:</h3>

                            <ListItems items={this.state.currentAssets}/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <form onSubmit={this.handleAddLiability}>
                            <label>
                                Liability Name:
                                <input type="text" name="liabilityName"/>
                            </label>
                            <label>
                                Liability Value:
                                <input type="number" name="liabilityValue"/>
                            </label>
                            <input type="submit" value="Add Liability"/>
                        </form>
                        <div>
                            <h3>This the list of your liabilities:</h3>

                            <ListItems items={this.state.currentLiabilities}/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <h1>Net Worth</h1>
                    <div>
                        <h3>Total Net Worth: {this.calculateNetWorth()}</h3>
                    </div>
                </Row>
            </div>
        );
    }
}

function ListItems(props) {
    const listItems = props.items.map((item) =>
        <li>{item.name} {item.value}</li>
    );
    return (
        <div>
            <ul>{listItems}</ul>
        </div>
    );
}
