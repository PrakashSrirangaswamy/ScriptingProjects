import React, { Component } from 'react';


export default class randomuser extends Component {

    state = {
        loading: true,
        person: null,
    };
    async componentDidMount() {
        const url = 'https://randomuser.me/api/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ person: data.results[0], loading: false })
    }
    render() {
        return (
            <div>
                {this.state.loading ? (<div>loading...</div>) : (
                    <div>
                        <div> {this.state.person.name.title}.{this.state.person.name.first} {this.state.person.name.last}</div>
                        <div><img src={this.state.person.picture.large} /></div>
                    </div>)}
            </div >

        )
    };

}
