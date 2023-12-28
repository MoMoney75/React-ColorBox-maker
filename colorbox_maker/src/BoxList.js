import { useState } from "react";
import Box from "./Box";
import BoxForm from "./NewBoxForm";



const BoxList = () => {
const [boxes,setBoxes] = useState([])
const handleFormSubmit = (formData)=>{
    
setBoxes((prevBoxes) =>  [...prevBoxes,formData])
}
const remove = (index) =>{
    setBoxes(boxes.filter((box,i) => i !== index))
}


return(
    
  <div>
<BoxForm onFormSubmit={handleFormSubmit} />
<ul className="BoxList">
{boxes.map((box,index) => (
<li>
<Box 
key={index}
backgroundColor = {box.backgroundColor}
width = {box.width}
height={box.height}
handleRemove={() => remove(index)}

/>

</li>
))}
</ul>
  </div>
)

};
export default BoxList;