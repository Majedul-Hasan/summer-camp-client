/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <div className='py-10 border-t-2'>
      <div className='text-center '>
        <h2 className='text-2xl my-3 font-bold dark:text-orange-300 '>
          What People Say
        </h2>
        <p className='dark:text-orange-100 '> How real people said about us</p>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className='mySwiper'>
        <SwiperSlide>
          <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
            <figure className='max-w-screen-md mx-auto'>
              <svg
                className='h-12 mx-auto mb-3 text-gray-400 dark:text-blue-200'
                viewBox='0 0 24 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                  fill='currentColor'
                />
              </svg>
              <blockquote>
                <p className='text-lg font-medium text-gray-900 dark:text-blue-300'>
                  "As aulas são perfeitas, são claras e objetivas e a Sandra tem
                  uma maneira de ensinar excelente. Aprendi muito com o curso,
                  bem completo ! The classes are perfect, they are clear and
                  objective and Sandra has an excellent way of teaching. I
                  learned a lot from the course, very complete!"
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-center mt-6 space-x-3'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
                  alt='profile picture'
                />
                <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                  <div className='pr-3 font-medium text-gray-900 dark:text-white'>
                    Micheal Gough
                  </div>
                  <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
            <figure className='max-w-screen-md mx-auto'>
              <svg
                className='h-12 mx-auto mb-3 text-gray-400 dark:text-blue-200'
                viewBox='0 0 24 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                  fill='currentColor'
                />
              </svg>
              <blockquote>
                <p className='text-lg font-medium text-gray-900 dark:text-blue-300'>
                  "As aulas são perfeitas, são claras e objetivas e a Sandra tem
                  uma maneira de ensinar excelente. Aprendi muito com o curso,
                  bem completo ! The classes are perfect, they are clear and
                  objective and Sandra has an excellent way of teaching. I
                  learned a lot from the course, very complete!"
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-center mt-6 space-x-3'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
                  alt='profile picture'
                />
                <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                  <div className='pr-3 font-medium text-gray-900 dark:text-blue-300'>
                    Micheal Gough
                  </div>
                  <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
            <figure className='max-w-screen-md mx-auto'>
              <svg
                className='h-12 mx-auto mb-3 text-gray-400 dark:text-blue-200'
                viewBox='0 0 24 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                  fill='currentColor'
                />
              </svg>
              <blockquote>
                <p className='text-lg font-medium text-gray-900 dark:text-blue-300'>
                  "As aulas são perfeitas, são claras e objetivas e a Sandra tem
                  uma maneira de ensinar excelente. Aprendi muito com o curso,
                  bem completo ! The classes are perfect, they are clear and
                  objective and Sandra has an excellent way of teaching. I
                  learned a lot from the course, very complete!"
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-center mt-6 space-x-3'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
                  alt='profile picture'
                />
                <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                  <div className='pr-3 font-medium text-gray-900 dark:text-blue-300'>
                    Micheal Gough
                  </div>
                  <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
            <figure className='max-w-screen-md mx-auto'>
              <svg
                className='h-12 mx-auto mb-3 text-gray-400 dark:text-blue-200'
                viewBox='0 0 24 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                  fill='currentColor'
                />
              </svg>
              <blockquote>
                <p className='text-lg font-medium text-gray-900 dark:text-blue-300'>
                  "As aulas são perfeitas, são claras e objetivas e a Sandra tem
                  uma maneira de ensinar excelente. Aprendi muito com o curso,
                  bem completo ! The classes are perfect, they are clear and
                  objective and Sandra has an excellent way of teaching. I
                  learned a lot from the course, very complete!"
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-center mt-6 space-x-3'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
                  alt='profile picture'
                />
                <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                  <div className='pr-3 font-medium text-gray-900 dark:text-blue-300'>
                    Micheal Gough
                  </div>
                  <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
            <figure className='max-w-screen-md mx-auto'>
              <svg
                className='h-12 mx-auto mb-3 text-gray-400 dark:text-blue-200'
                viewBox='0 0 24 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                  fill='currentColor'
                />
              </svg>
              <blockquote>
                <p className='text-lg font-medium text-gray-900 dark:text-blue-300'>
                  "As aulas são perfeitas, são claras e objetivas e a Sandra tem
                  uma maneira de ensinar excelente. Aprendi muito com o curso,
                  bem completo ! The classes are perfect, they are clear and
                  objective and Sandra has an excellent way of teaching. I
                  learned a lot from the course, very complete!"
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-center mt-6 space-x-3'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
                  alt='profile picture'
                />
                <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                  <div className='pr-3 font-medium text-gray-900 dark:text-blue-300'>
                    Micheal Gough
                  </div>
                  <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
            <figure className='max-w-screen-md mx-auto'>
              <svg
                className='h-12 mx-auto mb-3 text-gray-400 dark:text-blue-200'
                viewBox='0 0 24 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                  fill='currentColor'
                />
              </svg>
              <blockquote>
                <p className='text-lg font-medium text-gray-900 dark:text-blue-300'>
                  "As aulas são perfeitas, são claras e objetivas e a Sandra tem
                  uma maneira de ensinar excelente. Aprendi muito com o curso,
                  bem completo ! The classes are perfect, they are clear and
                  objective and Sandra has an excellent way of teaching. I
                  learned a lot from the course, very complete!"
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-center mt-6 space-x-3'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
                  alt='profile picture'
                />
                <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                  <div className='pr-3 font-medium text-gray-900 dark:text-blue-300'>
                    Micheal Gough
                  </div>
                  <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6'>
            <figure className='max-w-screen-md mx-auto'>
              <svg
                className='h-12 mx-auto mb-3 text-gray-400 dark:text-blue-200'
                viewBox='0 0 24 27'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
                  fill='currentColor'
                />
              </svg>
              <blockquote>
                <p className='text-lg font-medium text-gray-900 dark:text-blue-300'>
                  "As aulas são perfeitas, são claras e objetivas e a Sandra tem
                  uma maneira de ensinar excelente. Aprendi muito com o curso,
                  bem completo ! The classes are perfect, they are clear and
                  objective and Sandra has an excellent way of teaching. I
                  learned a lot from the course, very complete!"
                </p>
              </blockquote>
              <figcaption className='flex items-center justify-center mt-6 space-x-3'>
                <img
                  className='w-6 h-6 rounded-full'
                  src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
                  alt='profile picture'
                />
                <div className='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
                  <div className='pr-3 font-medium text-gray-900 dark:text-blue-300'>
                    Micheal Gough
                  </div>
                  <div className='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>
                    CEO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonials;
