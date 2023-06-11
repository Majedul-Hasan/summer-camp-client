import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

const DetailCourse = () => {
  const course = useLoaderData();
  console.log(course);

  return (
    <>
      <Helmet>
        <title>summer camp school | All courses</title>
      </Helmet>
      <div className='py-10'>
        {course.error ? (
          <div className='bg-red-100 text-red-700 p-3 '>
            <h2 className='font-bold  text-2xl text-center '>{course.error}</h2>{' '}
          </div>
        ) : (
          <div className='py-10'>
            <h2 className='font-bold  text-4xl text-center text-gray-600 dark:text-blue-200 mb-10'>
              All Courses
            </h2>
          </div>
        )}
      </div>

      {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2'>
          {courses?.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
            />
          ))}
        </div> */}
    </>
  );
};

export default DetailCourse;
