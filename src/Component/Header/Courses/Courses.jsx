import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'

const Courses = ({handleAddToCourses}) => {

    const [courses, setCourses] = useState([]);

    useEffect(() =>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])

    return (
        <div className="md:w-2/3 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    courses.map(course => <Course key={courses.id} handleAddToCourses={handleAddToCourses} course={course}></Course>)
                }
            </div>
        </div>
    );
};

Courses.propTypes = {
    handleAddToCourses: PropTypes.func
}

export default Courses;