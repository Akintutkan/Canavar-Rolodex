import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{ //fonksiyonelliğini genişlet ve app'i class component sayesinde
  constructor(){ // p değişse buttona basılsa da bu constructor kurucu yöntem çalıştırsın
    super()
    this.state = {
      canavarlar :[
      // {name:"Linda"},
      // {name:"Frank"},
      // {name:"Jackie"},
      // {name:"Andre"}
    ]
    }
  } 
  componentDidMount(){
    fetch(`https://jsonplaceholder.typicode.com/users`)
   .then((res)=> res.json()) //index.js react strict mode silinirse çift konsol ortadan kalkar
   .then((users) => this.setState(() =>{
    return{canavarlar : users}
   }, ()=>{
    console.log(this.state)
   }))
  }
  render(){  
  return (
    <div className="App">{this.state.canavarlar.map((canavar)=>{
      return (
      <div key={canavar.name}>
      <h1>{canavar.name}</h1>
    </div>
    )})}
    </div>
  );
}
}

export default App;
