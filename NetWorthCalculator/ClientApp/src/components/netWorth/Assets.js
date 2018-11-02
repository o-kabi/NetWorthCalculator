import React, {Component} from "react";
import {Row} from "react-bootstrap";

export class Assets extends Component {
    displayName = Assets.name;
    
    render() {
        return (
            <div>
                <form>
                    <Row>
                        <label>
                            Current Account:
                            <input type="number" name="currentAccount" value={this.props.currentAccount} onChange={this.props.onCurrentAccountChange}/>
                        </label>
                    </Row>
                    <Row>
                        <label>
                            Savings Account:
                            <input type="number" name="currentAccount" value={this.props.savingsAccount} onChange={this.props.onSavingsAccountChange}/>
                        </label>
                    </Row>
                </form>

            </div>
        );
    }
}