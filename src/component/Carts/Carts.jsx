import Cart from "../Cart/Cart";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carts = ({carts}) => {
    // const lessCreditHours = carts.reduce((total, cart) => total - cart.course_credit, 20);
    const totalCreditHours = carts.reduce((total, cart) => cart.course_credit + total, 0);
    const totalPrice = carts.reduce((previousValue, currentValue) => currentValue.price + previousValue, 0);
    const lessCreditHours = 20 - totalCreditHours; // Calculate remaining credit hours

    if (lessCreditHours < 0) {
        alert("Warning: Credit Hours Exceeded!");
    }
    return (
        <div>
            <div className="ml-5 bg-white shadow-xl p-4 h-[455px] rounded-xl">
                <h3 className="text-lg border-b-2 pb-3 text-blue-700 font-semibold">Credit Hour Remaining {lessCreditHours} hr</h3>
                <h3 className="text-black text-lg font-bold my-3 ">Course Name</h3>
                <div className="mb-3">
                    {
                        carts.map((cart, idx)=> <Cart key={carts.idx} cart={cart}></Cart>)
                    }
                </div>
                <h3 className="text-md border-t-2 p-4">Total Credit: {totalCreditHours}</h3>
                <h3 className="text-md border-t-2 p-4">Total Price: {totalPrice}</h3>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Carts;