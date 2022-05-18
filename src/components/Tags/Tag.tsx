import {Button,styled} from '@mui/material'
import React, { FC } from 'react'


export interface TagProps {
    label:string;
    active?:boolean;
    // handleSelect:(name:string)=>void
    handleClick:(name:string)=>React.MouseEventHandler<HTMLButtonElement> 

    
    
}


const StyledButton = styled(Button)<TagProps>`
 text-transform:none;
border: 1px solid #D6DADF;
margin-left:8px;
padding: 8px 20px;
margin-bottom:12px;
border-radius: 8px;
background-color:${(props)=>props.active  ? '#474B52': 'white'};
color:${(props)=>props.active  ? 'white': '#666C72;'};
height:35px ;

&:hover{
    
    background-color:${(props)=>props.active  ? '#474B52': 'white'};
    border: 1px solid #D6DADF;

  
}

`
const Tag:FC<TagProps>=(props)=>{
    console.log(typeof props.label)
    const lol = ()=>{

        props.handleClick(props?.label)
    }

    
    return(
       <StyledButton {...props}  variant='outlined'>{props.label}</StyledButton>
    )
}
export default Tag