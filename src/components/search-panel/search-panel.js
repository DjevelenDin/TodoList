import React, {Component} from 'react';
import '../search-panel/search-panel.css';
import ItemStatusFilter from '../item-status-filter';

export default class SearchPanel extends Component{

    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render(){
        return(
            <div className="search-panel">
                <input className="search" value={this.state.term} onChange={this.onSearchChange} placeholder="type to search" />
            </div>
        )
    }
}

