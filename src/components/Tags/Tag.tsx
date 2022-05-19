import {Button as MUIButton,ButtonProps,styled} from '@mui/material'
import React, {FC, useState} from 'react'




export interface TagProps extends ButtonProps{
    label:string;
    active?:boolean;
    onClick?:any
    handleSelect?:(name:string)=>React.MouseEventHandler<HTMLButtonElement>
}

//Ради всего святого, внизу вместо MUIButton давайте напишем 'button'
const StyledButton = styled(MUIButton)<TagProps>`
    text-transform:none;
    border: 1px solid #D6DADF;
    margin-left:8px;
    padding: 8px 20px;
    margin-bottom:12px;
    border-radius: 8px;
    background-color:${props=>props.active ? '#474B52': 'white'};
    color:${(props)=>props.active  ? 'white': '#666C72;'};
    height:35px;
    &:hover{
        background-color:${(props)=>props.active  ? '#474B52': 'white'};
        border: 1px solid #D6DADF;
    }
`;

const Tag:FC<TagProps>=({label,active,handleSelect})=>{
    const [tagActive,setTagActive]=useState(false)
    const lol = (item:string)=>{
        handleSelect ?
            handleSelect(item)
            :
            setTagActive(!tagActive)
    }
    return(
       <StyledButton onClick={()=>lol(label)} variant='outlined' label={label} active={active ? active : tagActive}>{label}</StyledButton>
    )
}
export default Tag