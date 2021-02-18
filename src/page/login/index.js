import React, { Component } from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }


    componentDidMount(){
        this.setState({
            ...this.state
        })
    }

    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })

    }

    doLogin = (e) => {

        const { username, password } = this.state
        const { dataUser } = this.props
        let find = dataUser.filter(users => {
            return users.username === username && users.password === password
        })
        console.log("find", find);

        if (find.length > 0) {
            alert("Login Sukses")
            this.props.submitLogin({ username })
        } else {
            alert("gagal")
        }
        e.preventDefault()
    }


    render() {
        console.log(this.props.statusLogin)
        console.log("heey",this.props.history)
        if (this.props.statusLogin)
            return <Redirect to="/" />
        return (
            <div>
                <div>SILAHKAN LOGIN</div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" onChange={this.setValue} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" onChange={this.setValue} />
                </div>
                <div>
                    <button type="submit" name="submit" onClick={(e) => this.doLogin(e)}>Login</button>
                    <button onClick={() => this.props.history.push("/register")}>Register</button>
                    
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    dataUser: state.UReducer.users,
    statusLogin: state.AReducer.isLogin

})

const mapDispatchToProps = dispatch => ({
    submitLogin: () => dispatch({ type: "LOGIN_SUCCESS" })
})

export default (connect(mapStateToProps, mapDispatchToProps))(Login);