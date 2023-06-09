import { useLoaderData } from 'react-router-dom';
import CourseCard from './InstructorsCard';

const AllInstructors = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <h2>All Instructors</h2>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
};

export default AllInstructors;
