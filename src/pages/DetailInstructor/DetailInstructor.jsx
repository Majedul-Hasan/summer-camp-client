import { useLoaderData } from 'react-router-dom';
import InstructorHero from './InstructorHero';

const DetailInstructor = () => {
  const instructor = useLoaderData();
  const { address, courses, name, email, gender, phone } = instructor || {};
  console.log(instructor);

  return (
    <>
      <InstructorHero instructor={instructor} />
    </>
  );
};

export default DetailInstructor;
