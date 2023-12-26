import { useState } from 'react'
import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Courses from './Component/Header/Courses/Courses'
import Header from './Component/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddToCourses = course =>{
    const newBookmarks = [...bookmarks, course];
    setBookmarks(newBookmarks);
  }

  return (
    <div className=''>
      <Header></Header>
      <div className='md: flex max-w-7xl mx-auto'>
        <Courses handleAddToCourses={handleAddToCourses}></Courses>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </div>
  )
}

export default App
