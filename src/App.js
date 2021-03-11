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
    onSearchChange(event){
     console.log(event.target.value)
    }
    render(){
        return (
            <div className="tc">
                <h1>Robo- Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
     <CardList robots={this.state.robos}/>
            </div>
     
        );
    }
}

export default App;