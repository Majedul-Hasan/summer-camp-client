import EventCard from './EventCard';
import SectionTitle from './SectionTitle';

const Events = () => {
  return (
    <div className='border-t-2 py-10 my-8'>
      <SectionTitle></SectionTitle>
      <div>
        <EventCard />
        <EventCard />
      </div>
    </div>
  );
};

export default Events;
