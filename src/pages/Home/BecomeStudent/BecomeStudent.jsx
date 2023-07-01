import { Link } from 'react-router-dom';

const BecomeStudent = () => {
  return (
    <div className='flex flex-col md:flex-row my-10 px-5 gap-5 items-center '>
      <div className='flex flex-col '>
        <h2 className='text-xl font-bold dark:text-gray-300'>
          Become a Student
        </h2>
        <p className='text-sm text-gray-500 dark:text-gray-400 my-7'>
          Join millions of people from around the world learning together.
          Online learning is as easy and natural as chatting..
        </p>
        <div>
          <Link
            to='/signup'
            className='btn border-2 border-slate-800 hover:bg-slate-800 hover:text-white'>
            Apply Now
          </Link>
        </div>
      </div>
      <div>
        <div>
          <img
            src='https://i.ibb.co/BZwpP51/2.png'
            alt='Become a Student'
          />
        </div>
      </div>
    </div>
  );
};

export default BecomeStudent;
