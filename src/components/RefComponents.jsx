import React, { Component } from 'react';
import ForRefComp from './ForRefComp';

export default class RefComponents extends Component {
    constructor(){
        super()
        this.inputRef = React.createRef();
        this.state = {test:'Hello Axioned '}
    }
    eventhandler = ()=>{
        this.setState({saying: this.inputRef.current.value})
        
    }
  render() {
    return (
      <div>
        <ForRefComp ref = {this.inputRef}/>
        <button onClick={this.eventhandler()}>click On Me</button>
        <p>{this.state.saying}</p>
      </div>
    )
  }
}
