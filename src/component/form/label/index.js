import React, { Component } from 'react';

class Label extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <label>{this.props.children}</label>
            </div>
         );
    }
}
 
export default Label;