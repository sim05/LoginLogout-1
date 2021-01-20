import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css'
class LoginForm extends React.Component
{
    constructor(props)
    {
        super();
        this.loginUser = this.loginUser.bind(this)
    }

    loginUser()
    {   
        
        alert("Login successful")
    }
    render(){
        const headerStyle = {
            //color: "white",
            //backgroundColor: "DodgerBlue",
            padding: "10px",
            marginLeft : "10px",
            fontFamily: "Arial"
          }

        return(
        <div>
            <h2 class="h2" style = {headerStyle}>Login</h2>
            <form className ="form-group">
            
            <div class ="col-md-6">
                <div class = "p-2">
                Username : <input type ="text" name ="txtUsername" className="form-control"/>
                </div>
            </div>
            <div class ="col-md-6">
                <div class = "p-2">
                Password : <input type ="password" name  = "txtPassword" className="form-control"/>
                </div>
            </div>
            <div class ="col-md-6">
                <div class = "p-2">
                <Button variant="primary" onClick = {this.loginUser}>Login</Button>
                </div>
            </div>
            
            </form>

        </div>
    )
        }
}

export default LoginForm;

/*

style="text-align: center; padding-top: 35px; padding-bottom: 30px; color: white;"
*/