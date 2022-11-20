import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import "./App.css";
class App extends Component {
  //fonksiyonelliğini genişlet ve app'i class component sayesinde
  constructor() {
    // p değişse buttona basılsa da bu constructor kurucu yöntem çalıştırsın Herşeyden önce constructor çalışır.
    super();
    this.state = {
      canavarlar: [],
      aramaAlanı: "",
    };
    //console.log("constructor")
  }
  componentDidMount() { // başlangıç state değeri var sonra component did mount ile bağlandı
    //console.log("ComponentDİd")
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json()) //index.js react strict mode silinirse çift konsol ortadan kalkar
      .then((users) =>
        this.setState(
          () => {
            return { canavarlar: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }
  aramaDeğişikliği = (e)=>{
    // console.log(e.target.value)
    const aramaAlanı = e.target.value.toLocaleLowerCase()
    //[{name:"leanne"},{name:"Namık"}]

    this.setState(()=>{
      return {aramaAlanı}
    })
    // ,
    // ()=>{
    //   console.log(
    //     {bitişDizisi : this.state.canavarlar
    //     })
    // }
    }
  render() {    console.log("render")
  const { canavarlar,aramaAlanı} = this.state
  const {aramaDeğişikliği} = this
    const filtrelenmişCanavarlar = canavarlar.filter((canavar)=>{
     return canavar.name.toLocaleLowerCase().includes(aramaAlanı)
    })
    return (
      <div className="App">
        <input 
        className="search-box" 
        type="search" 
        placeholder="search monsters"
        onChange={aramaDeğişikliği}
        />
        {/* {filtrelenmişCanavarlar.map((canavar) => {
          return (
            <div key={canavar.name}>
              <h1>{canavar.name}</h1>
            </div>
          );
        })} */}
        <CardList/>
      </div>
    );
  }
}

export default App;
