import React from 'react';

class Folder extends React.Component {
    constructor () {
        super();
        this.state = {istoggle: false};
        this.toggleClick =this.toggleClick.bind(this);
    };

    toggleClick = () => {
        this.state.istoggle
            ? this.setState({ istoggle: false })
            : this.setState({ istoggle: true });
    };

    render () {
        const show =this.state.istoggle ? null :(
            <div>
                <ul>
                    <li> File1 </li>
                    <li> File2 </li>
                    <li> File3 </li>
                </ul>
            </div>
        );

        return (
            <div className ="display">
                <h1> Home </h1>
                {show}
                <button onClick ={this.toggleClick}>Toggle</button>
            </div>
        );

    }

}

export default Folder;