import React, { Component } from 'react';

// import Axios from 'axios';


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
        // free serivce allows only 5 hits per min and 500 hits per day, so mocking the response. 
        const response = {
            "Realtime Currency Exchange Rate": {
                "1. From_Currency Code": "BTC",
                "2. From_Currency Name": "Bitcoin",
                "3. To_Currency Code": "INR",
                "4. To_Currency Name": "Indian Rupee",
                "5. Exchange Rate": "632479.93450000",
                "6. Last Refreshed": "2019-11-09 14:01:16",
                "7. Time Zone": "UTC",
                "8. Bid Price": "632464.23750000",
                "9. Ask Price": "632523.45800000"
            }
        }; const data = response;
        // const response = await fetch(url);
        // const data = await response.json();


        this.setState({ cryptoData: data['Realtime Currency Exchange Rate'], loading: false })
    }

    changeDropDownHandler = (event) => {
        if (event.target.name === 'crypto') {
            this.setState({ crypto: event.target.value });
        } else if (event.target.name === 'currency') {
            this.setState({ currency: event.target.value });
        }

    }

    handleSubmit = (event) => {
        event.preventDefault();
        const url = '/stock/value?function=CURRENCY_EXCHANGE_RATE&from_currency=' + `${this.state.crypto}` + '&to_currency=' + `${this.state.currency}`;

        // Axios.get(url).then(response => {
        //     alert('inside')
        //     console.log(response.data);
        // })
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
                            <select name='crypto' value={crypto} onBlur={this.changeDropDownHandler}>
                                    <option value='empty'></option>
                                    <option value='BTC'>Bitcoin</option>
                                    <option value='LTC'>Litecoin</option>
                                </select>
                                <br></br>
                                Currency:
                            <select name='currency' value={currency} onBlur={this.changeDropDownHandler}>
                                    <option value='empty'></option>
                                    <option value='INR'>Indian Rupee</option>
                                    <option value='USD'>US Dollors</option></select>


                            </div>
                            <button type="submit" name="submit">Submit</button>
                            <div>A {cryptoData['2. From_Currency Name']} is <b>{cryptoData['3. To_Currency Code']} {cryptoData['5. Exchange Rate']}</b>  as of {cryptoData['6. Last Refreshed']}</div>

                        </div> </form>)}
            </div >

        )
    };

}
