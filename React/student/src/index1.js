import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


// ------------------------------------------------------------------------
// function Add(props)
// {
//   let result =parseInt(props.a)+parseInt(props.b);
//   return <h1>Addition of {props.a} and {props.b} is {result}</h1>
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Add a="10" b="20" />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ---------------------------------------------------------------------------
// function Calculation(props)
// {
//   let result =parseInt(props.a)+parseInt(props.b);
//   let result1 =parseInt(props.a)-parseInt(props.b);
//   let result2 =parseInt(props.a)*parseInt(props.b);
//   let result3 =parseInt(props.a)/parseInt(props.b);
//   return <h1>Calculation of {props.a} and {props.b}  add = {result} sub ={result1} mul = {result2} div = {result3}</h1>
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Calculation a="10" b="20" />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// ____________________________________________________________________________________________________________________
// function Grading(props){
//   let maths = parseInt(props.a);
//   let cs = parseInt(props.b);
//   let english = parseInt(props.c);
//    let result = (maths + cs + english)/3;
//   if (result>=90){
//   return <h1> marks scored {props.a}, {props.b} and  {props.c} - A grade </h1>
// } else if (result>=80){
//   return <h1> marks scored {props.a}, {props.b} and  {props.c} - B grade </h1>
// } else if (result>=70){
//   return <h1> marks scored {props.a}, {props.b} and  {props.c} - c grade </h1>
// } else{ 
//   return <h1> marks scored {props.a}, {props.b} and  {props.c} - Fail </h1> }
// }

// ReactDOM.render(
//   <Grading a="80" b="80" c="80"/>,
//   document.getElementById('root')
// );
// ____________________________________________________________________________________________________________________________________\


// class App extends React.Component{

//   constructor(props){
//     super(props);    
//     this.surname = "Singh"; //the properties which are owned by component are know as state of the component
//   }

//   render(){
//     return <h1>Hello {this.props.name} {this.surname}</h1>;
//   }
// }

// ReactDOM.render(  
//   <App name="Rajesh"/> ,
// document.getElementById('root')
// );

// _______________________________________________________________________________________________________________________
// class Calculation extends React.Component{

//   constructor(props){
//     super(props);    
//   let add =parseInt(this.props.a)+parseInt(this.props.b);
//   let  sub=parseInt(this.props.a)-parseInt(this.props.b);
//   let mul=parseInt(this.props.a)*parseInt(this.props.b);
//   let  div=parseInt(this.props.a)/parseInt(this.props.b);
//   }

//   render(){
//     return <h1>Calculation of {this.props.a} and {this.props.b} </h1>
//   }
// }

// ReactDOM.render(  
//     <React.StrictMode>
//     <Calculation a="10" b="20" />
//   </React.StrictMode>, 
// document.getElementById('root')
// );
// class Calculator extends React.Component
// {
//   constructor()
//   {
//     super();
//     this.a=parseInt("20");
//     this.b=parseInt("10");
//   }

//   render()
//   {
//     return <>
//   <button ><h1>Add = {this.a+this.b}</h1></button> 
//   <button>  <h1>Sub = {this.a-this.b}</h1></button> 
//     <button> <h1>Mul= {this.a*this.b}</h1></button> 
//     <button> <h1>Div = {this.a/this.b}</h1></button> 
    
//     </>
//   }
// }

// ReactDOM.render(
//   <Calculator />,
//   document.getElementById("root")
// );
// class MySwitch extends React.Component{

//   constructor(props){
//     super(props);  
//     this.state = {isOn : true};    
//     this.myHandler = this.myHandler.bind(this);
//   }

//   myHandler(){
//     //how do we change the state
//     //this.state.isOn = false;
//     this.setState( i => (
//       {isOn: !i.isOn}
//     ));
//   }

//   render(){
//     const output = this.state.isOn;
//     console.log(output);
//     return (
//       <div>
//       <h1>This is result {output}</h1>
//       <button onClick={this.myHandler}>{this.state.isOn ? 'ON':'OFF'}</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(  
//   <MySwitch /> ,
// document.getElementById('root')
// );
// _______________________________________________________________________________________________________________________
// class Calculator extends React.Component{
//   constructor(props)
//   {
//     super(props);
//     this.state={ a: '20', b: '40', result: '' };
//     this.AddHandler = this.AddHandler.bind(this);
//     this.SubHandler = this.SubHandler.bind(this);
//     this.MultiHandler = this.MultiHandler.bind(this);
//     this.DivHandler = this.DivHandler.bind(this);
//   }
// AddHandler(){
//   this.setState({ result: parseInt(this.state.a) + parseInt(this.state.b) })
// }
// SubHandler(){
//   this.setState({ result: parseInt(this.state.b) - parseInt(this.state.a) })
// }
// MultiHandler(){
//   this.setState({ result: parseInt(this.state.a) * parseInt(this.state.b) })
// }
// DivHandler(){
//   this.setState({ result: parseInt(this.state.a) / parseInt(this.state.b) })
// }
// render() {
//   return(
//     <div>
     
//       <h1>Calculator  {this.state.result}</h1>

//       <button onClick={()=>{this.AddHandler()}} >ADD</button>
//       <br/><br/>

//       <button onClick={()=>{this.SubHandler()}} >SUB</button>
//       <br/><br/>

//       <button onClick={()=>{this.MultiHandler()}} >MUL</button>
//       <br/><br/>

//       <button onClick={()=>{this.DivHandler()}} >DIV</button>
//       <br/><br/>
//     </div>
//   );
// }
// }
// ReactDOM.render
// (  
//   <Calculator/> ,
// document.getElementById('root')
// );
// ____________________________________________________________________________________________________________________________
// function Randoma(e) {
//   e.target.setAttribute( 'src', "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XTIfBvecynI_oDCUO_kjCIkTAzadpCjIlg&usqp=CAU");
//   e.target.setAttribute('alt', 'random1');
// }

// const Random1 = (
//   <div>
// <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_3u_sivbOws6Bwlq11HsSwsmP70G0bHfYw&usqp=CAU" alt="random2" onClick={Randoma}
//   />
    
//   </div>
// );

// ReactDOM.render(Randoma),
//   document.getElementById('root')
// class ButtonImg extends React.Component
// {
//   constructor()
//   {
//     super();
//     this.randomHandler = this.randomHandler.bind(this);
//     this.a=true;
//   }

//   randomHandler()
//   {
//     this.a=!this.a;
//     console.log(this.a)
//     if(this.a)
//     {
//       document.getElementById("img").innerHTML="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5XTIfBvecynI_oDCUO_kjCIkTAzadpCjIlg&usqp=CAU'></img>"
//       console.log(this.image)
//     }else{
//       document.getElementById("img").innerHTML="<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_3u_sivbOws6Bwlq11HsSwsmP70G0bHfYw&usqp=CAU'></img>"
//       console.log(this.image)
//     }
    
   
//   }  

//   render()
//   {
//     return(
//     <>
//    <div id="img">

//    </div>
//    <div>
//    <button onClick={this.randomHandler}>Button</button>
//    </div>
//     </>
//     );
//   }
// }

// ReactDOM.render(
//   <ButtonImg  />,
//   document.getElementById("root")
// );
// __________________________________________________________________________________________________________________________________
// class SignUp extends React.Component{
//     constructor(props){
//       super(props);
//       this.state = {stname:'',lname:'',newPass:'',phoneNumber:'',DOB:'',Gender:"", ispass:true};
//       this.handleChange = this.handleChange.bind(this);
//       this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange(event){
//       //this.setState({value: event.target.value});
//       const target = event.target;
//       const value = target.name === "isPass" ? target.checked: target.value;
//       const name = target.name;
  
//       console.log(name +" "+ value);
//       this.setState({[name]:value});
//     }
  
//     handleSubmit(event){
//       alert('Are you sure you want to submit? '+this.state.stname+" "+ this.state.isPass+" "+this.state.noOfAttempts);
//       event.preventDefault();
//     }
  
  
//     render(){
//       return(
        
//         <form onSubmit={this.handleSubmit}>
//           <div>
//           <b><label>
//             Name: 
//             <input name="stname" type="text" value={this.state.stname} onChange={this.handleChange}/>
//           </label>
//           </b>
//           </div>
//           <div>
//           <b>
//           <label>
//             Last Name: 
//             <input name="lname" type="text" value={this.state.lname} onChange={this.handleChange}/>
//           </label>
//           </b>
//           </div>
//           <div>
//           <b>
//           <label>
//             New Password: 
//             <input name="newPass" type="password" value={this.state.newPass} onChange={this.handleChange}/>
//           </label>
//           </b>
//           </div>
//           <div>
//           <b>
//           <label>
//             Phone Number: 
//             <input name="phoneNumber" type="number" value={this.state.phoneNumber} onChange={this.handleChange}/>
//           </label>
//           </b>
//           </div>
//           <div>
//           <b>
//           <label>
//             DOB 
//             <input name="DOB" type="date" value={this.state.DOB} onChange={this.handleChange}/>
//           </label>
//           </b>
//           </div>
//           <div>
//           <b>
//           <label>
//           <div>
//         <select name="Gender" value={this.state.Gender} onChange={this.handleChange} aria-label="Default select example">
//           <option value="m">Male</option>
//           <option value="f">Female</option>
//           <option value="r">Rather not to say</option>
//         </select>
//         </div>
//           </label>
//           </b> 
//           </div>
//           <div>
//           <b>
//           <label>
//             condition accept?
//             <input name="isPass" type="checkbox" checked={this.state.isPass} onChange={this.handleChange}/>
//           </label>
//           </b>
//           </div>
//           <input type="submit" value="Submit" />
//         </form>
  
//       );
//     }
//   }
  
//   ReactDOM.render(  
//     <SignUp /> ,
//   document.getElementById('root')
//   );