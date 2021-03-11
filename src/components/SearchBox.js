const SearchBox=({searchChange})=>{
    return (
<div className="pa2">
    <input 
    className="pa3 ba b--green bg-lightest-blue" 
    type="serach"
     placeholder="Enter Robo Name"
    onChange={searchChange}
    />

    
</div>
    )
}
export default SearchBox;