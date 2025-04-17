import React from 'react'
import Book from './Book'

const Books = ({data}) => {
  return (
    <div className='grid grid-cols-3 gap-6 justify-center'>
      {data.map( singleBook => <Book key={singleBook.bookId} singleBook = {singleBook} />)}
    </div>
  )
}

export default Books