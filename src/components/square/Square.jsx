import { useState } from "react"
import { StyledButton, StyledSquare } from "./square.style"

const Square =()=>{
   
    const [isRed, setIsRed]= useState(true);
    
    

    return <StyledSquare $isRed={isRed}>
        <StyledButton  onClick={()=>changeColor(isRed, setIsRed)}>Chage color</StyledButton>
    </StyledSquare>
}
const changeColor=(isRed, setIsRed)=>{
    setIsRed(!isRed)
}



export default Square