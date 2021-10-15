import React from "react";
import "./Img.css";
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img3 from '../img/img3.jpg';
import img4 from '../img/img4.jpg';
import img5 from '../img/img5.jpg';

const ImgLine = ({ setImgBig }) => {
  const images = [
    {
      nbr: 1,
      name: "img1",
      lien: img1,
    },
    {
      nbr: 2,
      name: "img2",
      lien: img2,
    },
    {
      nbr: 3,
      name: "img3",
      lien: img3,
    },
    {
      nbr: 4,
      name: "img4",
      lien: img4,
    },
    {
      nbr: 5,
      name: "img5",
      lien: img5,
    },
  ];

  const handleClick = (src, nbr) => {
    setImgBig(src);
    console.log(nbr);
  };

  return (
    <div className="center">
      {images.map((img, index) => (
        <img
          id="line"
          nbr={img.nbr}
          alt={img.name}
          src={img.lien}
          key={index}
          onClick={() => {
            handleClick(img.lien, img.nbr);
          }}
        />
      ))}
    </div>
  );
};

export default ImgLine;
