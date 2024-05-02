import { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = ({handleAddToCarts}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch("course.json")
        .then(res=> res.json())
        .then(data => setCourses(data))
    },[])
    return (
        <div className='w-2/3'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-5">
                {
                    courses && courses.map(course => <Course 
                        key={courses.id} course={course}
                        handleAddToCarts={handleAddToCarts}
                        ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;