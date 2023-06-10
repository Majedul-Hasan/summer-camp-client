import { Helmet } from 'react-helmet-async';
import EventCard from '../Shared/Cards/EventCard';

const AllEvents = () => {
  return (
    <>
      <Helmet>
        <title>summer camp school | All courses</title>
      </Helmet>
      <div className='py-10'>
        <h2 className='font-bold  text-4xl text-center text-gray-600 dark:text-blue-200 '>
          All Courses
        </h2>
        <div className='  my-8'>
          <div>
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllEvents;
