import React, { Component } from 'react';

import './Keyboard.scss';

export default class Keyboard extends Component {

    state = {
        keyButtons: [

            { name: 'c', cls: 'btn-backpace', text: 'C' },
            { name: '(', cls: 'btn-prat-l', text: '(' },
            { name: ')', cls: 'btn-prat-r', text: ')' },
            { name: '/', cls: 'btn-devid btn-opt', text: '/' },

            { name: '7', cls: 'btn-7', text: '7' },
            { name: '8', cls: 'btn-8', text: '8' },
            { name: '9', cls: 'btn-9', text: '9' },
            { name: '*', cls: 'btn-mult btn-opt', text: 'x' },

            { name: '4', cls: 'btn-4', text: '4' },
            { name: '5', cls: 'btn-5', text: '5' },
            { name: '6', cls: 'btn-6', text: '6' },
            { name: '-', cls: 'btn-minus btn-opt', text: '-' },

            { name: '1', cls: 'btn-1', text: '1' },
            { name: '2', cls: 'btn-2', text: '2' },
            { name: '3', cls: 'btn-3', text: '3' },
            { name: '+', cls: 'btn-plus btn-opt', text: '+' },

            { name: '0', cls: 'btn-zero', text: '0' },
            { name: '.', cls: 'btn-dot', text: '.' },
            { name: 'del', cls: 'btn-del', text: 'del' },
            { name: '=', cls: 'btn-equal', text: '=' },

        ]
    }

    renderKeys = () => {
        return this.state.keyButtons.map((btn, i) => {
            return (
                <button
                    key={i}
                    type="button"
                    className={['cal-btn', btn.cls].join(' ')}
                    onClick={() => { this.props.onClick(`${btn.name}`) }}
                >
                    {btn.text}
                </button>
            )
        })
    }

    render() {
        return (
            <div className="cal-keyboard-container">
                <div className="cal-key-container">
                    {this.renderKeys()}
                </div>
            </div>
        )
    }
}
