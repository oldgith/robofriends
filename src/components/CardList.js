import Card from './Card'

const CardList= ({robots})=>{
    // when itrate their should be unique key prop(parameter)

    return(
        <div>
       {
       robots.map(((cur_robo,ind)=>
       {
        return (<Card 
        key={ind} 
        id={cur_robo.id} 
        name={cur_robo.name} 
        email={cur_robo.email} 
        />)
       }
        ))
       }
        </div>
    )
}
export default CardList;