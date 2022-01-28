import React, { Component } from "react";
import './Login.css';

class Login extends Component{
    constructor(){
        super();
        this.state = {
            userName: '', pwd: ''
        }

        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangePwd = this.handleChangePwd.bind(this);
    }

    handleSubmit(event){
        let isLogin = false;
        for(const account of this.props.userInfos){
            let count = 0;
            for(const property in account)
            {
                count += account[property] === this.state[property] ? 1 : 0;
            }
            if(count === 2){
                isLogin = true;
                if(account.userName === 'admin')
                    alert("Login as admin successfully");
                else
                    alert("Login as normal user successfully");
                break;
            }
        }
        if(!isLogin)
            alert('Login fail');
        event.preventDefault();
    }

    handleChangeUserName(event){
        this.setState({userName: event.target.value});
    }

    handleChangePwd(event){
        this.setState({pwd: event.target.value});
    }

    render(){
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <div>
                            <label>Username:</label>
                            <input type="text" onChange={this.handleChangeUserName}/>
                        </div>
                        <div>
                            <label>Password:</label>
                            <input type="password" onChange={this.handleChangePwd}/>
                        </div>
                        <div>
                            <input type="submit" value="Đăng nhập"/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
};

export default Login;