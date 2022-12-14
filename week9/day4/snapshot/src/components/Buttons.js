import { useEffect,useContext } from "react";
import { HomeContext } from "./Home";
import './Gallery.css'

function Buttons() {
    const {category,setCategory}=useContext(HomeContext);

   
  return (
    <div className="flex center">
    <button className="bg-blue br2 bn white ma2 pa2" onClick={()=>setCategory('Mountains')}>Mountains</button>
    <button className="bg-blue br2 bn white ma2 pa2"onClick={()=>setCategory('Trees')}>Trees</button>
    <button className="bg-blue br2 bn white ma2 pa2"onClick={()=>setCategory('sunset')}>Sunsets</button>
    <button className="bg-blue br2 bn white ma2 pa2"onClick={()=>setCategory('birds')}>Birds</button>
</div>
  )
}

export default Buttons