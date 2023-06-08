import { BsStopwatch, BsGeoAlt } from 'react-icons/Bs';

const EventCard = () => {
  return (
    <div className='py-3 border-t-2 my-8 '>
      <div className='flex gap-8 py-3  my-3 '>
        <div className='flex flex-col w-2/12 items-center justify-center border-r-2'>
          <div className='text-orange-300 font-bold text-6xl'>30</div>
          <div className='text-gray-400'>september</div>
        </div>
        <div className=' flex-auto text-gray-400  text-left '>
          <h3 className=' text-xl'>
            Applying Natural Laws to Technology and Society
          </h3>
          <div className='flex gap-5'>
            {' '}
            <span className='flex items-center gap-1'>
              <BsStopwatch /> 8:00 AM - 5:00 PM
            </span>
            <span className='flex items-center gap-1'>
              <BsGeoAlt /> NEWYORK, USA
            </span>
          </div>
          <p>
            Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a
            ornare odio. Sed non mauris itae erat conuat
          </p>
        </div>
        <div className='flex flex-col w-2/12 items-center justify-center border-r-2'>
          <div className='text-orange-300 font-bold text-6xl'>
            <img
              src='https://images.unsplash.com/photo-1674230316788-d9c8b92f0d63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
              alt=''
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
