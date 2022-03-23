import React from 'react'
import { useEffect } from 'react'

const Contact = () => {

    useEffect(() => {
        return () => {
            console.log('Composant detruit')
        }
    }, [])

    return (
        <div>
            <h1>Contact</h1>
        </div>
    )
}

export default Contact
