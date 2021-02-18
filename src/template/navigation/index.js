import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Menu } from "../../component"
import { connect } from 'react-redux';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { changePage } = this.props
        console.log(this.props.statusLogin)
        return (
            <div>
               {
                    this.props.statusLogin &&
                    <Link to="/home">
                        <Menu redirect={() => changePage("home")}>Home</Menu>
                    </Link>

                 }
                {
                    !this.props.statusLogin && 
                    <>
                         <Link to="/register">
                             <Menu redirect={() => changePage("register")}></Menu>
                         </Link>
                        <Link to="/">
                            <Menu redirect={() => changePage("login")}></Menu>
                        </Link>
                     </>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({


    statusLogin: state.AReducer.isLogin

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Nav);