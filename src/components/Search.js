import React, { Component } from 'react'

export default class Search extends Component {

    state = {
        value: ''
    }

    onChange = (e) => this.setState({ value: e.target.value })

    componentDidMount() {
        const search = document.getElementById('search');
        search.addEventListener("keyup", e => {
            if ( e.keyCode == 13 ) {
                this.props.serachWeather(this.state.value);
            }else if( e.keyCode == 27) {
                search.value = '';
            }
        });
    }

    render() {
        return (
            <div className='searchBar'>
                <img src='./icons/search.png' />
                <input id="search" type="text" value={this.state.value} onChange={this.onChange.bind(this)} placeholder="Search by Name or Zip Code" />
            </div>
        )
    }
}
