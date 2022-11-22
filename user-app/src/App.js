import React, { Component} from "react"
import AddUser from './components/AddUser';
import Users from './components/Users';
class App extends Component{
  constructor(){
    super()

    this.state = {
      users: [
{
  id:1,
  name: 'Ahmet Akın Tutkan',
  email: "akin.tutkan@gmail.com"
},
{
  id:2,
  name:"Mehmet Tutum",
  email: "mehmet.tutum@gmail.com"
},
{
  id:3,
  name:"Burak Ay",
  email: "burak.ay@gmail.com"
}
      ]
    }
    this.deleteUser = this.deleteUser.bind(this);
    this.addUser = this.addUser.bind(this);
  }
  addUser(newUser){
    let updatedUsers = this.state.users;
    updatedUsers.push(newUser)
    this.setState({
      users: updatedUsers
  })}
  deleteUser(id){
    let updatedUsers =this.state.users
updatedUsers = updatedUsers.filter(user => user.id !== id)
// State Direct immutable
this.setState({
  users:updatedUsers
})}
render(){
  return (
    <div className="container">
      <h5> User App</h5>
      <hr/>
      <AddUser addUser = {this.addUser}/> {/* dışarıda oluşturulan Adduser componenti içeri dahil edildi */}
    <hr/>
    <Users deleteUser = {this.deleteUser} users ={this.state.users}/> {/* üstteki users Arrayi buraya users props'u olarak geçirildi state management */}
    </div>
  );
}
}

export default App;
