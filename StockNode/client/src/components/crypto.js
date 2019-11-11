import React, { Component } from 'react';

export default class crypto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            cryptoData: null,
            crypto: null,
            currency: null
        };
    }

    async componentDidMount() {
        const url = '/stock/value?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=INR';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            cryptoData: data['Realtime Currency Exchange Rate'], loading: false,
            currency: 'INR', crypto: 'BTC'
        });
    }

    async getNodeResponse() {
        if (null != this.state.currency && null != this.state.crypto) {
            const url = '/stock/value?function=CURRENCY_EXCHANGE_RATE&from_currency=' + this.state.crypto + '&to_currency=' + this.state.currency;
            const response = await fetch(url);
            const data = await response.json();
            this.setState({ cryptoData: data['Realtime Currency Exchange Rate'] });
        }
    }

    changeDropDownHandler = (event) => {
        if (event.target.name === 'crypto') {
            this.setState({ crypto: event.target.value }, () => this.getNodeResponse());
        } else if (event.target.name === 'currency') {
            this.setState({ currency: event.target.value }, () => this.getNodeResponse());
        }

    }

    render() {
        const { crypto, currency, cryptoData } = this.state;
        return (
            <div>
                {this.state.loading ? (<div>loading...</div>) : (
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <div>
                                <h1>Crypto Tracker</h1>
                                Crypto:
                            <select name='crypto' value={crypto} onChange={this.changeDropDownHandler}>
                                    <option value='BTC'>Bitcoin</option>
                                    <option value='LTC'>Litecoin</option>
                                </select>
                                <br></br>
                                Currency:
                            <select name='currency' value={currency} onChange={this.changeDropDownHandler}>
                                    <option value='INR'>Indian Rupee</option>
                                    <option value='USD'>US Dollors</option></select>
                            </div>
                            <div>A {cryptoData['2. From_Currency Name']} is <b>{cryptoData['3. To_Currency Code']} {cryptoData['5. Exchange Rate']}</b>  as of {cryptoData['6. Last Refreshed']}</div>
                        </div> </form>)}
            </div >
        )
    };

}
