import React, { Component } from 'react';
import '../todo-list-item/todo-list-item.css';

export default class TodoListItem extends Component {

    state = {
        done: false,
        important: false
    };

    render() {
        const { label, onDeleted, onToggleImportant, onToggleDone, important, done } = this.props;

        let classNames = 'todo-list-item';
        if (done) {
            classNames += ' done';
        }
        if (important) {
            classNames += ' important';
        }


        return (
            <div className="todo-list-item-label">
                <span className={classNames}
                    onClick={onToggleDone}>
                    {label}
                </span>
                <div>
                    <button type="button" onClick={onDeleted} className="btn btn-outline-success btn-sm todo-list-item-button">
                        <i className="far fa-trash-alt" />
                    </button>
                    <button type="button" onClick={onToggleImportant} className="btn btn-outline-danger btn-sm todo-list-item-button">
                        <i className="fas fa-exclamation" />
                    </button>
                </div>
            </div>
        )
    }
}