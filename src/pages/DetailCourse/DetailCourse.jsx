import moment from 'moment';

import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { handleAddToCartAction } from '../Shared/Cards/handleAddToCart';

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
            <div className='grid grid-cols-5 gap-3 '>
              <div className='col-span-2 flex flex-col py-8 '>
                <div>
                  <img
                    src={course?.image}
                    alt=''
                  />
                </div>
                <div>
                  <p className='mt-4 bg-indigo-200  hover:bg-indigo-800 hover:text-indigo-100 text-indigo-800  py-2 font-semibold  rounded text-xs tracking-wider text-center'>
                    Price: ${course?.price} USD
                  </p>
                  <button
                    onClick={() => handleAddToCart(course)}
                    className='mt-4 w-full bg-violet-600 disabled:bg-gray-300  disabled:text-gray-600  hover:bg-violet-300 hover:text-violet-700 text-violet-200  py-2 font-semibold uppercase rounded text-xs tracking-wider'
                    disabled={
                      course.seats === 0 ||
                      user.role?.role === 'admin' ||
                      user.role?.role === 'instructor'
                    }>
                    Add To Cart
                  </button>
                  <p className='mt-4 bg-gray-200  hover:bg-gray-800 hover:text-gray-100 text-gray-800  py-2 font-semibold  rounded text-xs tracking-wider text-center'>
                    Seats Available : ${course?.seats}
                  </p>
                  <p className='mt-4 bg-indigo-200  hover:bg-indigo-800 hover:text-indigo-100 text-indigo-800  py-2 font-semibold  rounded text-xs tracking-wider text-center'>
                    Duration : ${course?.duration} USD
                  </p>
                  <p className='mt-4 bg-gray-200  hover:bg-gray-800 hover:text-gray-100 text-gray-800  py-2 font-semibold  rounded text-xs tracking-wider text-center'>
                    Last update:{moment(course.uploadAt).fromNow()}
                  </p>
                </div>
              </div>
              <div className='col-span-3'>
                <div className='flex justify-between'>
                  <p className='py-1 px-4 font-bold bg-violet-200 text-violet-700 w-fit rounded-md'>
                    {course.category}
                  </p>
                  <p className='py-1 px-4 font-bold bg-sky-200 text-sky-700 w-fit rounded-md'>
                    {course.language}
                  </p>
                </div>
                <div>
                  <h3 className='font-bold capitalize py-2 text-center'>
                    you will learn
                  </h3>
                  <ul>
                    {course?.topic.split(',').map((x, i) => (
                      <li
                        key={i}
                        className={`${
                          i % 2 === 1
                            ? ' bg-gray-300 py-1 px-3  '
                            : ' bg-orange-200 py-1 px-3  '
                        }`}>
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div></div>
            </div>
            <div className='grid grid-cols-5 my-3 gap-4'>
              <div className='col-span-3'>
                <h2 className='text-center text-2xl font-bold mb-2'>
                  course Detail
                </h2>
                <div>
                  <p className='text-justify'>{course?.courseDetail}</p>
                </div>
              </div>
              <div className='col-span-2'>
                <div className='text-center'>
                  <div className='w-8/12 mx-auto flex justify-center my-3'>
                    <img
                      className='w-full '
                      src={photoUrl}
                      alt=''
                    />
                  </div>
                  <p>This course was offered by</p>
                  <h2 className='text-3xl font-bold '>
                    <span></span>
                    {course.instructorName}
                  </h2>
                  <h2 className=' font-bold '>
                    <span></span>
                    {course.instructorEmail}
                  </h2>
                  <p className=' mt-4'>
                    {' '}
                    <span className='border-b-4 pb-1   '>
                      About the Instructor
                    </span>
                  </p>
                </div>
                <div className='my-5'>
                  <p>{bio}</p>
                  <div className='my-5'>
                    <div className='grid-flow-col gap-6 md:place-self-center md:justify-self-end flex justify-center'>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          className='fill-current'>
                          <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
                        </svg>
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          className='fill-current'>
                          <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
                        </svg>
                      </div>
                      <div>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='24'
                          height='24'
                          viewBox='0 0 24 24'
                          className='fill-current'>
                          <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {instructorData?.courses?.length && (
              <div>
                <div>
                  <h2 className='text-3xl font-bold text-center'>
                    Other courses By this instructor
                  </h2>
                </div>
                <div></div>
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
