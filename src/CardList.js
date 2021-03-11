import Card from './Card'

const CardList= ({robots})=>{
    const CardComponent=robots.map(((cur_robo)=>{
        return <Card id={cur_robo.id} name={cur_robo.name} email={cur_robo.email} />
    }))

    return(
        <div>
       {CardComponent}
        </div>
    )
}
export default CardList;