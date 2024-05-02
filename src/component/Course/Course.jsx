import { FaDollarSign } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
const Course = ({course, handleAddToCarts}) => {
    const {id, img, name, course_credit, price, course_details} = course;
    return (
        <div className="">
            <div className="card md:w-84 bg-base-100 shadow-xl">
                <figure>
                    <img className="py-5" src={img}alt="course.name" />
                </figure>
                <div className="mx-6 text-">
                        <h4 className="text-lg mb-2 font-bold text-black ">{name}</h4>
                        <p className="text-sm mb-2">{course_details}</p>
                    </div>
                    <div className="flex items-center">
                        <FaDollarSign className="ml-5 mr-2" />
                        <p className="">Price: {price}</p>
                        <IoMdBook className="ml-14" />
                        <p className="ml-2">Credit: {course_credit}hr</p>
                    </div>
                    
                    <div className="card-actions justify-end">
                    <button onClick={() =>handleAddToCarts(course) } className="bg-blue-600 text-white w-full m-4 py-2 rounded-md">Select</button>
                    </div>

            </div>
        </div>
    );
};

export default Course;