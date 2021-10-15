import React from 'react'

const Thumbnail = ({position, listIMG}) => {
    return (
        <div className="thumbnails">
        {
          listIMG.map((img, index) => (
            <img 
              src={img} 
              alt="" 
              key={index} 
              style={{
                border: index == position ? '8px solid blue' : 'unset'
              }}
            />
          ))
        }

      </div>
    )
}

export default Thumbnail
