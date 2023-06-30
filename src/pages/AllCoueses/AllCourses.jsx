import { useLoaderData } from 'react-router-dom';

import CourseCard from '../Shared/Cards/CourseCard';
import { Helmet } from 'react-helmet-async';
import { useGetAllCoursesQuery } from '../../features/courses/coursesApi';

const AllCourses = () => {
  const {
    isError,
    isFetching,
    isLoading,
    data: courses,
  } = useGetAllCoursesQuery({});
  // const courses = useLoaderData();
  console.log(courses);
  return (
    <>
      <Helmet>
        <title>summer camp school | All courses</title>
      </Helmet>

      <div className='py-10'>
        <h2 className='font-bold  text-4xl text-center text-gray-600 dark:text-blue-200 mb-10'>
          All Courses
        </h2>
        {isLoading ? (
          <h2>loading .. .. ..</h2>
        ) : (
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2'>
            {courses?.map((course) => (
              <CourseCard
                key={course._id}
                course={course}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllCourses;
