import moment from 'moment';
/* eslint-disable react/no-unescaped-entities */
import { AiOutlineClockCircle } from 'react-icons/Ai';
import { BsFillBarChartLineFill } from 'react-icons/Bs';
import { FaThumbsUp } from 'react-icons/fa';
import { MdEventAvailable } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import { handleAddToCartAction } from './handleAddToCart';
import useAuth from '../../../hooks/useAuth';
import useCart from '../../../hooks/useCart';
import useAdmin from '../../../hooks/useAdmin';

const CourseCard = ({ course }) => {
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const [role] = useAdmin();

  const handleAddToCart = (course) => {
    handleAddToCartAction(course, user, refetch, navigate);
  };

  return (
    <div
      className={`flex flex-col md:flex-row  py-4 px-2 ${
        course.seats <= 0
          ? 'shadow-red-400 bg-red-100 shadow-lg dark:bg-red-600/20 dark:text-red-200 '
          : 'shadow-gray-400 bg-gray-200 shadow-lg dark:bg-gray-700/60 dark:text-blue-200 '
      }`}>
      <div className='lg:w-1/4 pl-1 pr-2 flex-col flex mb-4'>
        <img
          className='rounded-tl-3xl'
          src={course.image}
          alt={course.name}
        />
        <Link
          to={`/courses/${course._id}`}
          className='mt-4 bg-cyan-600 text-center hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider'>
          course details
        </Link>
        <p className='mt-4 bg-indigo-200  hover:bg-indigo-800 hover:text-indigo-100 text-indigo-800  py-2 font-semibold  rounded text-xs tracking-wider text-center'>
          Price: ${course?.price} USD
        </p>
        <button
          onClick={() => handleAddToCart(course)}
          className='mt-4 bg-violet-600 disabled:bg-gray-300  disabled:text-gray-600  hover:bg-violet-300 hover:text-violet-700 text-violet-200  py-2 font-semibold uppercase rounded text-xs tracking-wider'
          disabled={
            course.seats === 0 ||
            role?.role === 'admin' ||
            role?.role === 'instructor'
          }>
          Add To Cart
        </button>
      </div>
      <div className='lg:w-3/4 pl-2 pr-0 '>
        <div className='py-1 px-4 font-bold bg-violet-200 text-violet-700 w-fit rounded-md'>
          {course.category}
        </div>
        <h2 className='font-bold py-2 '>{course.name} </h2>
        <div className='flex justify-between'>
          <h2 className=' py-2 '>
            posted by:{' '}
            <Link
              to={`/instructor/${course?.instructor?._id}`}
              className='font-bold'>
              {' '}
              {course.instructorName}{' '}
            </Link>
          </h2>
          <p>{moment(course.uploadAt).fromNow()}</p>
        </div>
        <div className='flex items-center gap-1 mx-1'>
          {course?.ratings && (
            <>
              {' '}
              <span>
                <FaThumbsUp />
              </span>{' '}
              {course.ratings} stars
            </>
          )}
        </div>

        <p className='leading-5 whitespace-break-spaces pb-2'>
          {course.courseDetail.length <= 190
            ? course.courseDetail
            : `${course.courseDetail.slice(0, 190)} ...`}
        </p>
        <div className='bg-gray-300 flex dark:bg-gray-300/50 justify-between py-2 my-2'>
          <div className='flex'>
            <div className='flex items-center gap-1 mx-1'>
              <span>
                <BsFillBarChartLineFill />
              </span>
              {course.level}
            </div>
            <div className='flex items-center gap-1 mx-1'>
              <span>
                <AiOutlineClockCircle />
              </span>
              {course.duration}
            </div>
          </div>

          <div className='flex items-center gap-1 mx-1'>
            <span>
              <MdEventAvailable />
            </span>{' '}
            {course.seats} seats
          </div>
        </div>
        <div>
          <h3 className='font-semibold my-2'>What you'll learn</h3>
          <p>
            {course.topic.length <= 190
              ? course.topic
              : `${course.topic.slice(0, 190)} ...`}
          </p>
        </div>
        <div className='mb-3'>
          <h3 className='font-semibold my-2'>Requirements</h3>
          <ul>
            <li>
              {course?.requirements
                ? course?.requirements?.length <= 190
                  ? course.requirements
                  : `${course?.requirements?.slice(0, 190)} ...`
                : 'No prerequisites'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
