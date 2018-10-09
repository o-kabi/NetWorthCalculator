import React, { Component } from 'react';

export class NetWorth extends Component {
  displayName = NetWorth.name;

  constructor(props) {
    super(props);
    this.state = { 
        currentAssets: 0,
        valueToAdd: 0
    };
    this.handleAddAsset = this.handleAddAsset.bind(this);
  }

  handleAddAsset(event) {
    event.preventDefault();
    this.setState({
        currentAssets: this.state.currentAssets + parseFloat(event.target.assetValue.value)
    });
  }

  render() {
    return (
      <div>
        <h1>Net Worth</h1>

        <p>This the sum of your assets.</p>

        <p>Current Net Worth: <strong>£{this.state.currentAssets}</strong></p>
          
        <form onSubmit={this.handleAddAsset}>
            <label>
                Asset value: 
                <input type="number" name="assetValue" />
            </label>
            <input type="submit" value="Add Asset" />
        </form>
      </div>
    );
  }
}
