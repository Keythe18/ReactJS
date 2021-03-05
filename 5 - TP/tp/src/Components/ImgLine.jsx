import React from "react";
import "./Img.css";

const ImgLine = ({ setImgBig }) => {
  const images = [
    {
      nbr: 1,
      name: "emoji1",
      lien: "https://discord.com/assets/b426f77f42bb709bcb2faa23602d2dc4.svg",
    },
    {
      nbr: 2,
      name: "emoji2",
      lien: "https://discord.com/assets/6f75b58eb746d08c2c18451573876292.svg",
    },
    {
      nbr: 3,
      name: "emoji3",
      lien: "https://discord.com/assets/913e66b19410c0ca3e71fe837a29e093.svg",
    },
    {
      nbr: 4,
      name: "emoji4",
      lien: "https://discord.com/assets/2993ada413223a149555f5f68198043f.svg",
    },
    {
      nbr: 5,
      name: "emoji5",
      lien: "https://discord.com/assets/480eb6b0f6c22cbc1d98d6ff93e1edc1.svg",
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
