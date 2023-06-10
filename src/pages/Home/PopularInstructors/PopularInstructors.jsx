import InstructorsCard from '../../Shared/Cards/InstructorsCard';

const PopularInstructors = () => {
  return (
    <div className='py-10 border-t-2'>
      <div className='text-center '>
        <h2 className='text-2xl my-3 font-bold dark:text-orange-300 '>
          Popular Instructors
        </h2>
        <p className='dark:text-orange-100 '>
          How people loves their instructors
        </p>
      </div>
      <div className='grid grid-cols-1  gap-6 mx-2'>
        <InstructorsCard />
        <InstructorsCard />
        <InstructorsCard />
      </div>
    </div>
  );
};

export default PopularInstructors;
