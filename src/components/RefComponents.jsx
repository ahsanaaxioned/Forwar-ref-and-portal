import React, { Component } from 'react';
import ForRefComp from './ForRefComp';

export default class RefComponents extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }
    eventhandler = () => {
        this.inputRef.current.focus();

    }
    render() {
        return (
            <>
                <ForRefComp ref={this.inputRef} />
                <button onClick={this.eventhandler}>click On Me</button>
            </>
        )
    }
}
