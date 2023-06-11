import { useLoaderData } from 'react-router-dom';
import InstructorHero from './InstructorHero';

const DetailInstructor = () => {
  const instructorData = useLoaderData();
  const { instructor, courses } = instructorData || {};
  console.log(instructor);
  

  return (
    <>
      <InstructorHero instructor={instructor} />
    </>
  );
};

export default DetailInstructor;
