import React from 'react'

const Personnage = ({nom, prenom, age}) => {
    return (
        <div>
            Personnage: {nom} {prenom} {age}
        </div>
    )
}

export default Personnage
