import React from 'react';

export default class History extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        const { historyItems } = this.props; // { historyItems: ["", ""], children: [] }
        const listItems = historyItems.map((item, index) =>
            <li key={index}>{item}</li>
        );
        return (
            <ul>
                {listItems}
            </ul>
        );
    }
}
