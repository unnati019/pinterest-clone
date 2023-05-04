import React from "react";

function Pins({pinSize, imgSrc, name, link}) {
  return <div className={`pin ${pinSize}`}>
    <img 
      className="main_pic" 
      src={imgSrc} 
      alt=""
    />
    <div className="content">
      <h3>{name}</h3>
      <div className="search">
        <a href={link}>
          <img 
            src="https://www.freeiconspng.com/thumbs/white-arrow-png/white-arrow-transparent-png-22.png" 
            alt="" />
        </a>
        
      </div>
    </div>
  </div>;
}

export default Pins;