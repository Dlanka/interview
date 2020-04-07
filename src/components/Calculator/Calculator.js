import React, { Component } from 'react'

import './Calculator.scss';
import Keyboard from './Keyboard/Keyboard';

import { calculateTo } from './../../helpers/Calculate';

class Calculator extends Component {

    state = {
        result: '0',
        finalResult: '0'
    }

    componentDidMount() {
        document.addEventListener('keydown', this.keyDownHnadler, false);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.keyDownHnadler, false);
    }

    keyDownHnadler = (e) => {

        if (e.keyCode === 13) {
            this.onCalculate();
        }

        if (e.keyCode === 8) {
            this.onDelete();
        }
    }

    reset = () => {
        this.setState({
            ...this.state,
            result: '0',
            finalResult: '0'
        })
    }

    onKeyHandler = (key) => {
        const _key = key.toLocaleLowerCase();

        let result = this.state.result;

        if (_key === 'c') {
            this.reset();
        }

        else if (_key === 'del') {

            this.onDelete();
        }

        else if (_key === '0') {
            if (result !== '0') {
                result = result + _key;
                this.setResult(result);
            }
        }

        else if (_key === '.') {

            if (result.indexOf('.') === -1) {
                result = result + _key;
                this.setResult(result);
            }
        }

        else if (_key === '(' || _key === ')') {

            if (_key === '(' && result === '0') {
                result = _key;
                this.setResult(result);
            } else {

                result = result + _key;
                this.setResult(result);
            }
        }

        /* eslint-disable-next-line */
        else if (/[+\-*\/]/.exec(_key)) {

            if (_key === '-' && result === '0') {

                this.setState({
                    ...this.state,
                    result: '-'
                });

            } else {
                this.setState({
                    ...this.state,
                    result: result + _key
                })
            }

        }

        else if (_key === "=") {
            this.onCalculate();
        }

        else {

            if (result === '0') {
                result = _key;
            } else {
                result = result + _key;
            }

            this.setState({
                ...this.state,
                result
            });
        }

    }

    onCalculate = () => {
        let { result } = this.state;

        const total = calculateTo(result);

        this.setState({
            ...this.state,
            finalResult: result + '=',
            result: total.toString()
        })
    }

    onDelete = () => {
        let result = this.state.result;

        if (result === '0') {
            result = '0';
        } else {
            result = result.slice(0, -1);
        }

        this.setResult(result);
    }

    setResult = (result) => {
        this.setState({
            ...this.state,
            result
        });
    }


    render() {
        return (
            <div className="cal-container">
                <div className="cal-inner">
                    <div className="cal-result-container">
                        <div className="cal-fullresult">{this.state.finalResult}</div>
                        <div className="cal-result" >{this.state.result}</div>
                    </div>

                    <Keyboard onClick={this.onKeyHandler} />

                </div>
            </div>
        )
    }
}

export default Calculator;