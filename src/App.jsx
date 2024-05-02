import { useState } from "react"
import Carts from "./component/Carts/Carts"
import Courses from "./component/Courses/Courses"
import Header from "./component/Header/Header"

function App() {
  const [carts, setCarts] = useState([]);

  const handleAddToCarts = course => {
    const newCarts =[...carts, course];
    setCarts(newCarts)

    setTotalPrice(prevPrice => prevPrice + course.price);
    setTotalCredit(prevCredit => prevCredit - course.credit);
  }


  return (
    <>
      <Header></Header>
      <div className="flex ml-40">
        <Courses handleAddToCarts={handleAddToCarts}></Courses>
        {/* <Carts carts={carts} totalPrice={totalPrice} totalCredit={totalCredit}></Carts> */}
        <Carts carts={carts}></Carts>
      </div>
    </>
  )
}

export default App
