import React from 'react'
import {robots} from './robots'
import CardList from './CardList'
import SearchBox from './SearchBox'


class App extends React.Component{
    constructor(){
        super();
        this.state={
            'robos':robots,
            searchFeild:''
        }
    }
    onSearchChange=(event)=>{
        this.setState({searchFeild:event.target.value})
     }
    render(){
        const filteredRobots=this.state.robos.filter( (cur)=>{
       return cur.name.toLowerCase().includes(this.state.searchFeild.toLowerCase());
        }) 
      return (
            <div className="tc">
         <h1>Robo- Friends</h1>
         <SearchBox searchChange={this.onSearchChange}/>
     <CardList robots={filteredRobots}/>
            </div>
     
        );
    }
}

export default App;