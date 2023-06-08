import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import travel from '../../../assets/Travel plans_Flatline.svg';
import travel2 from '../../../assets/vacation-holidays-background-with-realistic-globe-suitcase-photo-camera_1284-10476.avif';

const BannerSlider = () => {
  return (
    <Carousel infiniteLoop={true}>
      <div className='h-96 bg-yellow-200 dark:bg-blue-200 flex justify-between items-center'>
        <div className='flex-1 flex justify-center items-center '>
          <div className=' w-2/3 bg-slate-400 dark:text-slate-200 dark:bg-slate-600 p-6  mx-auto '>
            <h2 className='text-3xl py-2'>Learning that gets you</h2>
            <h2 className='my-2'>
              Skills for your present (and your future). Get started with us.
            </h2>
          </div>
        </div>
        <div className='flex-1'>
          <img
            className='h-full'
            src={travel2}
            alt=''
          />
        </div>
      </div>
      <div className='h-96 bg-yellow-200 dark:bg-blue-200 flex justify-between items-center'>
        <div className='flex-1 flex justify-center items-center '>
          <div className=' w-2/3 bg-slate-400 dark:text-slate-200 dark:bg-slate-600 p-6  mx-auto '>
            <h2 className='text-3xl py-2'>Unlock the power of your-self</h2>
            <h2 className='my-2'>
              summer school is trusted by thousand of companies around the
              world. Find out what we can do for yours.
            </h2>
          </div>
        </div>
        <div className='flex-1'>
          <img
            className='h-full'
            src={travel}
            alt=''
          />
        </div>
      </div>
    </Carousel>
  );
};

export default BannerSlider;
