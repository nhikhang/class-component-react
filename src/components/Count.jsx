import React from 'react';

class Count extends React.Component {
    constructor(props) {
        super(props);
    }

    handleIncrement = () => {
        this.props.increment();
    }

    handleDecrement = () => {
        this.props.decrement();
    }

    handleChangeText = (props) => {
        this.props.changeText(props);
    }

    render() {
        return (
            <div className="container">
                <button onClick={this.handleIncrement}>Increment (+)</button>
                <button onClick={this.handleDecrement}>Decrement (-)</button>
                <input type="text" onInput={this.handleChangeText}/>
            </div>
        ) 
    }
}

export default Count;


// import React from "react";

// class Count extends React.Component {
//     constructor(props) {
//         super(props);
//     }

//     handleIncrement = () => {
//         this.props.increment();
//     }

//     handleDecrement = () => {
//         this.props.decrement();
//     }

//     handleChangeText = (props) => {
//         this.props.changeText(props);
//     }

//     render() {
//         return (
//             <div className="container">
//                 <button onClick={this.handleIncrement}>Increment (+)</button>
//                 <button onClick={this.handleDecrement}>Decrement (-)</button>
//                 <input type="text" onInput={this.handleChangeText} />
//             </div>
//         )
//     }
// }

// export default Count;