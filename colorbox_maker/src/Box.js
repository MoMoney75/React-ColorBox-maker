const Box = ({backgroundColor,height,width, handleRemove}) =>{

    const remove = () => handleRemove()
    return(
        <div>
        <div style={{backgroundColor : backgroundColor,
                     width: width + "px", 
                    height: height + "px"}}
                    >
        
        </div>
        <button onClick={remove}>x</button>
        </div>
        
    )
}

export default Box;