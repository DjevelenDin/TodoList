import React, { Component } from 'react';
import './item-add-form.css';

export default class ItemAddForm extends Component {

    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
    };

    onSubmit = (e)=>{
        e.preventDefault()
        this.props.onAddItem(this.state.label)
        this.setState({
            label: ''
        })
    }

    render() {
        const {onAddItem} = this.props;
        return (
            <form className="item-add-form"
            onSubmit={this.onSubmit}>
                <input type="text" value={this.state.label} onChange= {this.onLabelChange} className="item-add" placeholder="What needs to be done?"></input>
                <button className="btn btn-outline-secondary item-add-button">Add</button>
            </form>
        )
    }
}
