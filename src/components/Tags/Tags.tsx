
import React, {FC} from 'react'
import Tag from './Tag'

type TagsProps={
    tags:string[],
    selected:string[],
    handleChange:(name:string)=>React.MouseEventHandler<HTMLButtonElement> 
   
 
}



const AllTags:FC<TagsProps>=({tags,selected,handleChange})=>{

 
   
    return(
        <>
   
        {tags.map((tag)=>{
            const  active =selected.includes(tag)
            return <Tag active={active}  handleClick={handleChange} label={tag}/>
        })}

        
        
        </>
    )
}
export default AllTags