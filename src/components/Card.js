import React from 'react'

const Card = ({obj}) => {
    const toCamelCase = (str) => {
        let arr= str.split(' ');
        return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');  // Capitalize first letter of each worda
    }

  return (
    <div style={{width:"40vw", border: "1px solid black", display:"flex", margin:"10px", padding:"10px"}}>
        <div style={{width:"30%", padding:"5px", margin:"5px"}}><img src={obj.img} width={"99%"} height={"99%"}/></div>
        <div>
            <div style={{borderBottom:"3px dotted red",display:"flex",justifyContent:"space-between"}}>
                <h3>{toCamelCase(obj.title)}</h3>
                <h4>$ {obj.price}</h4>
            </div>
            <p>{obj.desc}</p>
        </div>
      
    </div>
  )
}

export default Card
