import { useEffect, useState } from 'react';
import CourseCard from '../../Shared/Cards/CourseCard';

const PopularCourses = () => {
  const [popularCourses, setPopularCourses] = useState();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API}/courses?limit=6`)
      .then((response) => response.json())
      .then((data) => setPopularCourses(data));
  }, []);

  return (
    <div className='py-10 border-t-2'>
      <div className='text-center '>
        <h2 className='text-2xl my-3 font-bold dark:text-orange-300 '>
          Popular Courses
        </h2>
        <p className='dark:text-orange-100 '> How people join our courses</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2 mt-8'>
        {popularCourses?.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
