import { FaDollarSign } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";

const Course = ({course, handleAddToCourses}) => {
    const {id, img, name, course_credit, price, course_details} = course;
    return (
        <div>
            <div className="flex">
                <div className="shadow-md m-4">
                    <div className="flex">
                        <img className="w-[280px] flex" src={img} alt=""/>  
                    </div>
                    <h2 className="text-lg font-semibold mt-2">{name}</h2>
                    <p className="w-[280px] mt-3 mb-2 text-[14px]">{course_details}</p>
                    <div>
                        <div className="flex">
                            <FaDollarSign className="mr-2 mt-1"></FaDollarSign>
                            <p className="mr-4">Price: {price}</p>
                            <IoBookOutline className="mt-1 mr-2"></IoBookOutline>
                            <p>Credit {course_credit} hr</p>
                        </div>
                        <button className="bg-blue-800 rounded-lg w-[280px] h-10 mt-3 text-white" onClick={() =>handleAddToCourses()}>Select</button>
                    </div>
                </div>
            </div>
            <div className="">

            </div>
        </div>
    );
};

export default Course;