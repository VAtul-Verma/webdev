import react from "react"
const Navbar= ({filterItem,menuList})=>{
    return(<>
        <nav className="navbar">
            <div className="btn-group">
            {
                menuList.map((currele)=>{
                    return <button 
                    className="btn-group__item" 
                    onClick={()=>filterItem(currele)}>
                    {currele}
                    </button>
                })
            }
            </div>
        </nav>
    </>)
}
export default Navbar;