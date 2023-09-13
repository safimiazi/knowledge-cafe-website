
import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'

function App() {
const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0)

const handleAddBookmark = blog => {
  if(!bookmarks.includes(blog)){
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
}
}

const handleMarksAsRead = (time, title) => {
  setReadingTime(readingTime + time)
  const deleteTitle = bookmarks.filter(title => title !== title)
  setBookmarks(deleteTitle)
}

  return (
    <>
    <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleAddBookmark={handleAddBookmark} handleMarksAsRead={handleMarksAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App;
