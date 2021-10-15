import React from 'react'

const Slides = ({listIMG, position, setPosition}) => {
    const handleClick = (direction) => {
        let positionTemp

        if (direction === 'suiv') {
            if (position == listIMG.length - 1) {
                positionTemp = 0
            } else {
                positionTemp = position + 1
            }
        } else if (direction === 'prec') {
            if (position == 0) {
                positionTemp = listIMG.length - 1
            } else {
                positionTemp = position - 1
            }
        }

        setPosition(positionTemp)
    }


    return (
        <div className="slider">

            <div className="navPrec navSlider">
                <div className="navButton" onClick={() => { handleClick('prec') }}>prec</div>
            </div>

            <div className="imgPrincipale">
                <img src={listIMG[position]} alt="" />
            </div>

            <div className="navSuiv navSlider">
                <div className="navButton" onClick={() => { handleClick('suiv') }}>suiv</div>
            </div>

        </div>
    )
}

export default Slides
