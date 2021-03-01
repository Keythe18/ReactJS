import React from 'react'
import Ville from './Ville'


const moyenne = (notes) => {
    let somme = 0
    notes.forEach((note) => {
        somme += note
    })

    return Math.round(somme / notes.length * 100) / 100
}



const Eleve = ({nom, prenom, notes, ville}) => {
    return (
        <div>
            {nom} {prenom}, moyenne : {moyenne(notes)}
            <Ville ville={ville} />
            <br />
        </div>
    )
}

export default Eleve
