import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Label, Input, Option } from "../../component/form";

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            username: "",
            password: "",
            hp: "",
            email: "",
            role: "",
         }
    }
    setValue = el => {
        this.setState({
            [el.target.name]: el.target.value
        })

    }


    setRegister = el =>{
        let obj = this.state
        this.props.register(obj);
        el.preventDefault()
        this.hapus()
        alert("Berhasil Registrasi")
        this.props.history.push("/")
        

    }
    hapus = () => {
        this.setState({ 
            username:"",
            password:"",
            hp:"",
            email:"",
            role:"",})
    }

    render() { 
        return ( 
            <div>
                {/* <form> */}

                    <div>SILAHKAN REGISTRASI</div>
                    <div>
                        <Label>Username</Label>
                        <Input type="text" name="username" value={this.state.username} onChange={this.setValue} />
                    </div>
                    <div>
                        <Label>Password</Label>
                        <Input type="password" name="password" value={this.state.password} onChange={this.setValue} />
                    </div>
                    <div>
                        <Label>Handphone</Label>
                        <Input type="number" name="hp" value={this.state.hp} onChange={this.setValue} />
                    </div>
                    <div>
                        <Label>Email</Label>
                        <Input type="text" name="email" value={this.state.email} onChange={this.setValue} />
                    </div>
                    {/* <div>
                    <label>Role</label>
                        <select>
                            <option></option>   
                            <option></option>
                            <option></option>
                        </select>
                    </div> */}
                    <div>
                    <button type="submit" value="submit" onClick={this.setRegister} >Sign Up</button>
                    <button onClick={() => this.props.history.push("/")}>Login</button>    
                    </div>
                    <div>

                    </div>
                {/* </form> */}
            </div>
         );
    }
}
 
const mapStateToProps = state =>({
    
    
    dataUser:state.UReducer.users

})

const mapDispatchToProps = dispatch =>({
register:(data)=>dispatch({type:"REGISTER",payload:data})
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);