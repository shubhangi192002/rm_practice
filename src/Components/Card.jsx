import React from 'react'

function Card(props) {
  return (
    <>
      <div className="grid">
          <div className="card" style={{ width: "370px" }}>
            <img src={props.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title py-3">{props.title}</h5>
              <p className="card-text">
                {props.body}
              </p>
              <h6 className="py-3">{props.note}<i class="fa fa-arrow-circle-right px-2"></i></h6>
            </div>
          </div>
        </div>
    </>
  )
}

export default Card
