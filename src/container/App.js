import React from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'

class App extends React.Component{
    constructor(){
        super();
        this.state={
            'robots':[],
            searchFeild:''
        }
        console.log("constructor")
    }
    //not a user defined method so simply use it
   
    componentDidMount(){
   
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((user)=>this.setState({robots:user}));
    // const res=await fetch("https://jsonplaceholder.typicode.com/users");
    // const data= res.json()
    // this.setState({robots:data})
    }

    onSearchChange=(event)=>{
        this.setState({searchFeild:event.target.value})
     }

    render(){
        console.log("render");
        const {robots,searchFeild}=this.state;
        const filteredRobots=robots.filter((cur)=>{
       return cur.name.toLowerCase().includes(searchFeild.toLowerCase());
        }) 
        if(robots.length===0){
          return   <h1>Loading</h1>
        }
        else {
 return (
            <div className="tc ">
         <h1 className="f1">Robo-Friends</h1>
         <SearchBox searchChange={this.onSearchChange}/>
         <Scroll>
         <CardList robots={filteredRobots}/>
         </Scroll>
            </div>
      );
        }
     
    }
}

export default App;