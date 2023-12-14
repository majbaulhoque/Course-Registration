import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="md: w-2/3 ">
            <div className="grid grid-cols-3 gap-10">
                {
                    courses.map(course => <Course key={courses.id} course={course}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;