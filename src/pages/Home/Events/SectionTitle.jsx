import { Link } from 'react-router-dom';

const SectionTitle = () => {
  return (
    <div className='flex justify-between items-center my-4'>
      <div>
        <h2 className='text-2xl dark:text-orange-400 font-bold '>Events</h2>
        <p className=' dark:text-orange-100 '>
          Upcoming Education Events to feed your brain.
        </p>
      </div>
      <div>
        <Link
          className='btn outline bg-transparent dark:text-blue-200 outline-cyan-300 hover:bg-transparent '
          to='/events'>
          VIEW ALL
        </Link>
      </div>
    </div>
  );
};

export default SectionTitle;
