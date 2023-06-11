import moment from 'moment';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { handleAddToCartAction } from '../Shared/Cards/handleAddToCart';

import CourseInfo from './courseInfo';
import DetailAndInstructor from './DetailAndInstructor';
import InstructorOtherCourses from './InstructorOtherCourses';

const DetailCourse = () => {
  const course = useLoaderData();
  const [instructorData, setInstructorData] = useState([]);
  const { user } = useAuth();

  console.log(course);

  useEffect(() => {
    fetch(
      `${import.meta.env.VITE_API}/users/instructors/${
        course?.instructorDetail?._id
      }`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInstructorData(data);
      });
  }, [course]);

  const handleAddToCart = (course) => {
    handleAddToCartAction(course, user);
  };
  const photoUrl =
    instructorData?.instructor?.image ||
    instructorData?.instructor?.gender === 'male'
      ? 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

  const bio =
    instructorData?.instructor?.bio ||
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

  return (
    <>
      <Helmet>
        <title>summer camp school | course detail</title>
      </Helmet>
      <div className='py-5'>
        {course.error ? (
          <div className='bg-red-100 text-red-700 p-3 '>
            <h2 className='font-bold  text-2xl text-center '>{course.error}</h2>{' '}
          </div>
        ) : (
          <div className='py-10'>
            <h2 className='font-bold  text-xl text-center text-gray-600 dark:text-blue-200 '>
              Course Detail
            </h2>
            <h2 className='font-bold  text-3xl text-center text-gray-600 dark:text-blue-200 my-5'>
              {course?.name}
            </h2>
            <CourseInfo
              course={course}
              handleAddToCart={handleAddToCart}
              user={user}
            />
            <DetailAndInstructor
              course={course}
              bio={bio}
              photoUrl={photoUrl}
            />

            {instructorData?.courses?.length && (
              <InstructorOtherCourses instructorData={instructorData} />
            )}
            {instructorData?.courses?.length && (
              <div>
                <div>
                  <h2 className='text-3xl font-bold text-center capitalize'>
                    how students valued this course
                  </h2>
                </div>
                <div>
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
                              "As aulas são perfeitas, são claras e objetivas e
                              a Sandra tem uma maneira de ensinar excelente.
                              Aprendi muito com o curso, bem completo ! The
                              classes are perfect, they are clear and objective
                              and Sandra has an excellent way of teaching. I
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
                              "As aulas são perfeitas, são claras e objetivas e
                              a Sandra tem uma maneira de ensinar excelente.
                              Aprendi muito com o curso, bem completo ! The
                              classes are perfect, they are clear and objective
                              and Sandra has an excellent way of teaching. I
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
                              "As aulas são perfeitas, são claras e objetivas e
                              a Sandra tem uma maneira de ensinar excelente.
                              Aprendi muito com o curso, bem completo ! The
                              classes are perfect, they are clear and objective
                              and Sandra has an excellent way of teaching. I
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
                              "As aulas são perfeitas, são claras e objetivas e
                              a Sandra tem uma maneira de ensinar excelente.
                              Aprendi muito com o curso, bem completo ! The
                              classes are perfect, they are clear and objective
                              and Sandra has an excellent way of teaching. I
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
                              "As aulas são perfeitas, são claras e objetivas e
                              a Sandra tem uma maneira de ensinar excelente.
                              Aprendi muito com o curso, bem completo ! The
                              classes are perfect, they are clear and objective
                              and Sandra has an excellent way of teaching. I
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
                              "As aulas são perfeitas, são claras e objetivas e
                              a Sandra tem uma maneira de ensinar excelente.
                              Aprendi muito com o curso, bem completo ! The
                              classes are perfect, they are clear and objective
                              and Sandra has an excellent way of teaching. I
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
                              "As aulas são perfeitas, são claras e objetivas e
                              a Sandra tem uma maneira de ensinar excelente.
                              Aprendi muito com o curso, bem completo ! The
                              classes are perfect, they are clear and objective
                              and Sandra has an excellent way of teaching. I
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
              </div>
            )}
          </div>
        )}
      </div>

      {/* <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mx-2'>
          {courses?.map((course) => (
            <CourseCard
              key={course._id}
              course={course}
            />
          ))}
        </div> */}
    </>
  );
};

export default DetailCourse;
