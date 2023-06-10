import { BsGeoAlt } from 'react-icons/Bs';
import { SiMinutemailer } from 'react-icons/si';
import { Link } from 'react-router-dom';

const InstructorsCard = ({ instructor }) => {
  return (
    <div className='w-full'>
      <div className='py-3 border-t-2 my-8 bg-gray-200 w-11/12 mr-0 ml-auto shadow-lg shadow-gray-400 dark:bg-gray-700/60 dark:text-blue-200'>
        <div className='flex gap-8 py-3  my-3 '>
          <div className='flex flex-col w-2/12 items-center justify-center border-r-2 '>
            <div className='text-orange-300 font-bold text-6xl -ml-10'>
              <img
                src={
                  instructor?.image ||
                  'https://i.ibb.co/p1TKvmQ/img-certification-rockstar-2x.jpg'
                }
                alt=''
              />
            </div>
          </div>

          <div className=' flex-auto text-gray-400   text-left '>
            <h3 className=' text-xl'>{instructor.name}</h3>
            <div className='flex gap-5'>
              {' '}
              <span className='flex items-center gap-1'>
                <SiMinutemailer /> {instructor?.email}
              </span>
              <span className='flex items-center gap-1'>
                <BsGeoAlt /> NEWYORK, USA
              </span>
            </div>
            <p>
              Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor
              a ornare odio. Sed non mauris itae erat conuat
            </p>
            <div className='my-3'>
              <Link
                to={`/instructor/${instructor._id}`}
                className='mt-4 bg-cyan-600  hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider'>
                see all classes
              </Link>
            </div>
          </div>
          <div className='flex flex-col w-2/12 items-center justify-center border-r-2'>
            <div className='text-orange-300 font-bold text-6xl'>
              {instructor?.courses.length}
            </div>
            <div className='text-gray-400'>classes</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;
