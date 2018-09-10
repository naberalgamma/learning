import React from 'react';

class Controls extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            num1: undefined,
            num2: undefined,
            znak: '+',
            result: undefined,
        };
    }

    onNumber1Change = (event) => this.setState({ num1: event.target.value });
    onNumber2Change = (event) => this.setState({ num2: event.target.value });
    onZnakChange = (event) => {
        const elSelect = event.target;
        this.setState({ znak: elSelect.options[elSelect.selectedIndex].value });
    };
    onClick = () => {
        var num1 = parseInt(this.state.num1, 10);
        var znak = this.state.znak;
        var num2 = parseInt(this.state.num2, 10);

        var result = undefined;
        if(znak == "+"){
            result = num1 + num2;
        }else if(znak == "-"){
            result = num1 - num2;
        }else if(znak == "*"){
            result = num1 * num2;
        }else if(znak == "/"){
            result = num1 / num2;
        }else if (Number.isNaN(num1 && num2)){
            alert("Zapovni polya");
        }

        var historyResult = num1 + znak + num2 + "=" + result;
        console.log(historyResult);

        this.setState({ result: result }, () => {
            this.props.onClick(historyResult);
        });
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onNumber1Change} />
                <select onChange={this.onZnakChange}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                </select>
                <input type="text" onChange={this.onNumber2Change} />
                <button onClick={this.onClick}>=</button>
                {/* <ResultInput value={this.state.result}></ResultInput> */}
                <input type="text" value={this.state.result} readOnly />

                {/* <span>{this.state.result}</span> */}
            </div>
        );
    }
}

export default Controls;
