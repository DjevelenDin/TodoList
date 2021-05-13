import React, { Component } from 'react';
import "../item-status-filter/item-status-filter.css";


export default class ItemStatusFilter extends Component {

    buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' },
    ]

    render() {

        const { filter, onFilterChange } = this.props;

        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const clazz = isActive ? 'btn btn-primary' : 'btn-info';
            return (
                <button type='button' onClick={() => { onFilterChange(name) }} className={`btn ${clazz}`} key={name}>{label}</button>
            )
        })

        return (
            <div className="btn-group item-status-filter">
                {buttons}
            </div>
        )
    }
}