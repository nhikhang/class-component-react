import React from 'react';
import Count from './components/Count';
import './App.css';
import {MASTER_DATA} from './ultis/constants';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            text: 'React'
        }
    }

    handleIncrement = () => {
        this.setState({
            ...this.state,
            count: this.state.count + 1
        });
    }

    handleDecrement = () => {
        this.setState({
            ...this.state,
            count: this.state.count - 1
        });
    }

    handleChangeText = (props) => {
        this.setState({
            ...this.state,
            text: props.target.value
        });
    }

    render() {
        const { count, text} = this.state;
        return (
            <div className="App">
                <h2>Class Component</h2>
                <>
                    <p>{count}</p>
                    <p>{text}</p>
                </>
                <Count 
                    number={count}
                    increment={this.handleIncrement}
                    decrement={this.handleDecrement} 
                    changeText={this.handleChangeText}   
                />

                <ul>
                    {
                        MASTER_DATA.length > 0 ? MASTER_DATA.map((item, index) => (
                            <li key={item.name}>{item.name} {item.ver}</li>
                        )) : <p className="noneData">No Data</p>
                    }
                </ul>
            </div>
        )
    }
}

export default App;
