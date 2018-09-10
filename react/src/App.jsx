import React from 'react';
import Controls from './components/Controls.jsx';
import History from './components/History.jsx';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            historyItems: []
        };
    }

    onClick = (result) => this.setState({ historyItems: [...this.state.historyItems, result] });

    render() {
        return (
            <div>
                <div>My String</div>
                <Controls onClick={this.onClick}></Controls>
                <History historyItems={this.state.historyItems}></History>
            </div>
        );
    }
}

export default App;
