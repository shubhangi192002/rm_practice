import React from 'react'
import books from '../Images/08_Book_mockup_front_view 1.png'

function Books() {
  return (
    <>
      <div className="books d-flex" id="books">
          <div className="books-info mx-5">
            <h3 className="my-4 ">For in-depth <br />Knowledge about <br />Succession Planning,<br />check out the book</h3>
            <h6 className="my-4">Dive deeper inot Succession, Get your copy now! <i class="fa fa-arrow-circle-right px-2"></i></h6>
          </div>
          <img src={books} alt="" />
        </div>
    </>
  )
}

export default Books
