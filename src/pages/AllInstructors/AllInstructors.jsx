import { useLoaderData } from 'react-router-dom';

import InstructorsCard from '../Shared/Cards/InstructorsCard';

const AllInstructors = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className='py-10'>
      <h2 className='font-bold  text-4xl text-center text-gray-600 dark:text-blue-200'>All Instructors</h2>
      <div className='grid grid-cols-1  gap-6 mx-2'>
        <InstructorsCard />
        <InstructorsCard />
        <InstructorsCard />
      </div>
    </div>
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