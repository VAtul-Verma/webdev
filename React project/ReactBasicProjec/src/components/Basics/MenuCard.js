import react from "react"


const MenuCard= ({menuData}) => {
return (<>
<div className="main-card--cointainer">
{menuData.map((currele) => {
    const {id,name,category,price,description}=currele;
return (<>
    
    <div className="card-container">
            <div className="card">
                <div className="card-body"></div>
                <span className="card-number card-circle sbtle">{id}</span>
                <span className="card-author subtle">{name}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description subtle">
                   {description}
                   
                </span>
                <div className="card-read">Read</div>
                <img src={currele.image} alt="image" className="card-media"/>
                <span className="card-tag subtle">Order Now</span>
            </div>
        </div>
   
</>)
})}
</div>

</>)
};

export default MenuCard;