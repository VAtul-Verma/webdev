import react ,{useState}from "react"
import "./style.css"
import Menu from "./menuApi"
import MenuCard from "./MenuCard"
import Navbar from "./Navbar"

const uniquelist=[...new Set(Menu.map((currEle)=>{
    return currEle.category;
})),"All"]
const Restorent = () => {
const [menuData,setmenuData]=useState(Menu);
const [menuList,setmenuList]=useState(uniquelist);
const filterItem=(catgery)=>{
    if(catgery==="All"){
        setmenuData(Menu);
        return ;
    }
    const updatelist=Menu.filter((currele)=>{
return currele.category===catgery;
    })
    setmenuData(updatelist);
}
    return (
        <>
        <Navbar filterItem={filterItem} menuList={menuList} />
        <MenuCard menuData={menuData}/>
        </>
        
    )
}
export default Restorent;