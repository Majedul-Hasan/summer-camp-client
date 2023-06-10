import InstructorsCard from '../../Shared/Cards/InstructorsCard';
import { useQuery } from '@tanstack/react-query';

const PopularInstructors = () => {
  const { data: instructors = [], isLoading: loading } = useQuery({
    queryKey: ['instructor'],
    queryFn: async () => {
      const res = await fetch(`${import.meta.env.VITE_API}/users/instructors`);
      return res.json();
    },
  });

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
        {instructors?.map((instructor) => (
          <InstructorsCard
            key={instructor._id}
            instructor={instructor}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularInstructors;
