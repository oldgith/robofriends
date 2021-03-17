import React ,{useState,useEffect} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import './App.css'


const App=()=>{
  
    const [robots,setRobots]=useState([]);
    const [searchFeild,setSearchFeild]=useState('');
   
        useEffect(()=>{
            fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json())
            .then((user)=>setRobots(user) )
            .catch(err=> console.log("error in api",err))  
            },[])
       //this second param empty array is used so which tell run this only first time(thts wht componentdidMount was doin)
       // if we not put empty array it will refetch infintly  many times

   console.log(robots,searchFeild);
  const  onSearchChange=(event)=>setSearchFeild(event.target.value);
       
  
 const filteredRobots=robots.filter((cur)=>cur.name.toLowerCase().includes(searchFeild.toLowerCase()) ) 
  
             
     if(!robots.length){  return   <h1>Loading</h1> }
       else {
            return (
                    <div className="tc ">
                    <h1 className="f1">Robo-Friends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                    <CardList robots={filteredRobots}/>
                    </Scroll>
                    </div>
                );
          }
     
    
}

export default App;