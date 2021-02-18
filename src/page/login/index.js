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

    doLogin = () => {

        const { username, password } = this.state
        const { dataUser } = this.props
        let find = dataUser.filter(users => {
            return users.username === username && users.password === password
        })
        let find1 = dataUser.filter(users => {
            return users.username === username 
        })
        console.log("find1",find1[0]);
        console.log("find", find);

        if (find.length > 0) {
            alert("Login Sukses")
            this.props.submitLogin( find1[0] )
            this.props.history.push("/home")
        } else {
            alert("gagal")
        }
        // e.preventDefault()
    }


    render() {
        console.log(this.props.statusLogin)
        console.log("hey",this.props.history)
        // if (this.props.statusLogin)
        //     return <Redirect to="/home" />
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
                    <button type="button" name="submit" onClick={() => this.doLogin()}>Login</button>
                    <button onClick={() => this.props.history.push("/register")}>Register</button>
                    
                </div>
            </div>
        );
    }
}
//ketika mengambil data dari luar kelas
const mapStateToProps = state => ({
    dataUser: state.UReducer.users,
    statusLogin: state.AReducer.isLogin

})
//mengubah data kereducer
const mapDispatchToProps = dispatch => ({
    submitLogin: (data) => dispatch({ type: "LOGIN_SUCCESS",payload:data })
})

export default (connect(mapStateToProps, mapDispatchToProps))(Login);