import './App.css'
import Bookmarks from './Bookmarks/Bookmarks'
import Courses from './Component/Header/Courses/Courses'
import Header from './Component/Header/Header'

function App() {

  return (
    <div className=''>
      <Header></Header>
      <div className='md: flex max-w-7xl mx-auto'>
        <Courses></Courses>
        <Bookmarks></Bookmarks>
      </div>
    </div>
  )
}

export default App
