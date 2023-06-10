import { useLoaderData } from 'react-router-dom';

import CourseCard from '../Shared/Cards/CourseCard';

const AllCourses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className='py-10'>
      <h2 className='font-bold  text-4xl text-center text-gray-600 dark:text-blue-200'>
        All Instructors
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2'>
        {courses?.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
          />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
