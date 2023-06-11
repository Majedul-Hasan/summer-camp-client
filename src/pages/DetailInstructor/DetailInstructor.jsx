import { useLoaderData } from 'react-router-dom';
import InstructorHero from './InstructorHero';
import CourseCard from '../Shared/Cards/CourseCard';

const DetailInstructor = () => {
  const instructorData = useLoaderData();
  const { instructor, courses } = instructorData || {};
  console.log(instructor);

  return (
    <>
      <InstructorHero instructor={instructor} />
      <div className='grid md:grid-cols-2 sm:grid-cols-1   mx-auto gap-9 my-8'>
        {courses?.map((course) => (
          <CourseCard
            key={course._id}
            course={course}
          />
        ))}
      </div>
    </>
  );
};

export default DetailInstructor;
