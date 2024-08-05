import React from "react";
import './Notecontent.css'


const Note=({content, key})=>{
    return(
        <div className='container'>
            <p>{content.note}</p>
            
        </div>
    )
}

export default Note;