import { useLoaderData } from 'react-router-dom';

import InstructorsCard from '../Shared/Cards/InstructorsCard';
import { Helmet } from 'react-helmet-async';

const AllInstructors = () => {
  const instructors = useLoaderData();
  console.log(instructors);
  return (
    <>
      {' '}
      <Helmet>
        <title>summer camp school | All Instructors</title>
      </Helmet>
      <div className='py-10'>
        <h2 className='font-bold  text-4xl text-center text-gray-600 dark:text-blue-200'>
          All Instructors
        </h2>
        <div className='grid grid-cols-1  gap-6 mx-2'>
          {instructors?.map((instructor) => (
            <InstructorsCard
              key={instructor._id}
              instructor={instructor}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllInstructors;
/**+
 * 
 <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2'>
        <InstructorsCard />
        <InstructorsCard />
        <InstructorsCard />
      </div> 
 */