import React from 'react'

const Roue = ({box}) => {
    return (
        <div style={{
            width:'100px',
            height:'100px',
            border:'3px solid orange',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            borderRadius:'5px'
        }}>
            {box}
        </div>
    )
}

export default Roue
