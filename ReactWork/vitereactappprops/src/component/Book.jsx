import React from 'react'

function Book({book}) {
  return (
    <div className='book'>
        <center>
        <img src={book.img} className='image'></img>
        </center>
        <h2 className='heading'>Title:</h2>
        <p className='test'>{book.title}</p>
        <h2 className='heading'>Publisher:</h2>
        <p className='test'>{book.publisher}</p>
        <h2 className='heading'>Price:</h2>
        <p className='test'>{book.price}</p>
    </div>
  )
}

export default Book

