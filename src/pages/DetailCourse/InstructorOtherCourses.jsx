import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import CourseCard from '../Shared/Cards/CourseCard';

const InstructorOtherCourses = ({ instructorData }) => {
  return (
    <div className='my-8'>
      <div className='my-5'>
        <h2 className='text-3xl font-bold text-center dark:text-blue-200'>
          Other courses By this instructor
        </h2>
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={40}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className='mySwiper'>
          {instructorData?.courses?.map((x) => (
            <SwiperSlide key={x}>
              <CourseCard course={x} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InstructorOtherCourses;
