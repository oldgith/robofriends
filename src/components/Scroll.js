const Scroll =(props)=>{
    return (
        // We can do this by css but we doin this way
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
 
    )
}
export default Scroll;