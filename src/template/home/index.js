import React, { Component } from 'react';
import {connect } from 'react-redux';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log("tes ini",this.props.user);
        return (
            <div>
                
                <p>{this.props.user.username}</p>
                <p>{this.props.user.hp}</p>
                <p>{this.props.user.email}</p>
            </div>
            
          );
    }
}
 const mapStateToProps = state =>({
    
    user:state.AReducer.userLogin

})

const mapDispatchToProps = dispatch =>({

})

export default connect(mapStateToProps, mapDispatchToProps)(Home);