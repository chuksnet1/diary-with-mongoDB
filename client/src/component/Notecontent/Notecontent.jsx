import React from 'react'

import Note from './Note'



const Notecontent=({secretValue})=>{
    
    console.log(secretValue)
    return(
        <>
        <div >
            {secretValue.map((e, id)=>{
                return <div>
                    <Note content={e} key={id}/>
                     </div>
            })}
        </div>
        </>
    )
}

export default Notecontent;