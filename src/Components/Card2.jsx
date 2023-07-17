import React from "react";

function Card2(props) {
  return (
    <>
      <div className="cardd my-4 py-4 p-4">
          <img src={props.img} className="card-imgs pb-5" alt="..." />
          <p className="card-text">{props.body}</p>
        </div>
    </>
  );
}

export default Card2;
