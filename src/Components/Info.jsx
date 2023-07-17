import React from 'react'

function Info(props) {
  return (
    <>
      <div className="info-box">
      <div className="info px-5">
        <p>{props.title}</p>
        <h6>Go to case study<i class="fa fa-arrow-circle-right px-2"></i></h6>
      </div>
      <div className="info-img">
        <img src={props.img} alt="" />
      </div>
      </div>

    </>
  )
}

export default Info
