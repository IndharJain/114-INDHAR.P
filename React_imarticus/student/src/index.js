
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import React,{ useState } from 'react';
class SignUp extends React.Component{
      constructor(props){
        super(props);
        this.state = {stname:'',lname:'',newPass:'',phoneNumber:'',DOB:'',Gender:"", ispass:true};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event){
        //this.setState({value: event.target.value});
        const target = event.target;
        const value = target.name === "isPass" ? target.checked: target.value;
        const name = target.name;
    
        console.log(name +" "+ value);
        this.setState({[name]:value});
      }
    
      handleSubmit(event){
        alert('Are you sure you want to submit? '+this.state.stname+" "+ this.state.isPass+" "+this.state.noOfAttempts);
        event.preventDefault();
      }
    
    
      render(){
        return(
          
          <form onSubmit={this.handleSubmit}>
            <div>
            <b><label>
              Name: 
              <input name="stname" type="text" value={this.state.stname} onChange={this.handleChange}/>
            </label>
            </b>
            </div>
            <div>
            <b>
            <label>
              Last Name: 
              <input name="lname" type="text" value={this.state.lname} onChange={this.handleChange}/>
            </label>
            </b>
            </div>
            <div>
            <b>
            <label>
              New Password: 
              <input name="newPass" type="password" value={this.state.newPass} onChange={this.handleChange}/>
            </label>
            </b>
            </div>
            <div>
            <b>
            <label>
              Phone Number: 
              <input name="phoneNumber" type="number" value={this.state.phoneNumber} onChange={this.handleChange}/>
            </label>
            </b>
            </div>
            <div>
            <b>
            <label>
              DOB 
              <input name="DOB" type="date" value={this.state.DOB} onChange={this.handleChange}/>
            </label>
            </b>
            </div>
            <div>
            <b>
            <label>
            <div>
          <select name="Gender" value={this.state.Gender} onChange={this.handleChange} aria-label="Default select example">
            <option value="m">Male</option>
            <option value="f">Female</option>
            <option value="r">Rather not to say</option>
          </select>
          </div>
            </label>
            </b> 
            </div>
            <div>
            <b>
            <label>
              condition accept?
              <input name="isPass" type="checkbox" checked={this.state.isPass} onChange={this.handleChange}/>
            </label>
            </b>
            </div>
            <input type="submit" value="Submit" />
          </form>
    
        );
      }
    }
    
    ReactDOM.render(  
      <SignUp /> ,
    document.getElementById('root')
    );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

