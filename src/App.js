import React,{Component} from 'react';
import './App.css';
import  CardList  from './components/cardList/cardList';
import Search from './components/search/search';


class App extends Component{
constructor(){
  super();
  this.state={
    managers:[
        // {
        //   name:'Jamshid',
        //   id:1,
        //   email:'Jamshid@gmail.com'
        // },
        // {
        //   name:'Salih',
        //   id:12,
        //   email:'Salih@gmail.com'
        // },
        // {
        //   name:'Rahim',
        //   id:13,
        //   email:'Rahim@gmail.com'
        // },
        // {
        //   name:'Rahman',
        //   id:14,
        //   email:'Rahman@gmail.com'
        // },
      ],
      searchFiled:'',
  }
}
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then((response)=>response.json()).then((user)=>{ return this.setState({managers:user} , console.log(user))});

  };
  
  
  render(){

    const {managers ,searchFiled}=this.state;
    const filteredManagers=managers.filter(manager=>
     manager.name.toLowerCase().includes(searchFiled.toLowerCase())
    );
   const handleChangeFunction=(e)=>{
      this.setState({searchFiled: e.target.value})

    }

  return (
    <div className="App">
      <h1>Cats 😼🐈, Home Managers</h1>
      <Search placeholder='managers' handleChange={handleChangeFunction}/>        
        <CardList manager={filteredManagers}/>      
    </div>
  )};
}

export default App;