import React from 'react';


class Table extends React.Component {

    constructor(props) {
        super(props);

        this.state = { value: "" };
    }

    onClick = (event) => this.setState({ value: event.target.innerText });

    render() {
        const items = this.props.items;
        const value = this.state.value;

        var unical = [];
        for (var i=0; i<items.length; i++){
            const name = items[i].name;
            const price = items[i].price;
            
            if(value == undefined || value == "" || name.toLowerCase().includes(value.toLowerCase())) {
                unical.push (<tr><td onClick={this.onClick}>{name}</td><td>{price}</td></tr>);
            }
        }

        return(
        <div>
            <input 
                type="text" 
                placeholder="Name" 
                onChange={(event) => this.setState({ value: event.target.value }) } 
                value={this.state.value}
            />
            
            <table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                    {unical}
                </tbody>
            </table>
        </div>
        );
    }
}

export default Table;
