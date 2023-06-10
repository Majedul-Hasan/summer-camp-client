/* eslint-disable react/no-unescaped-entities */
import { AiOutlineClockCircle } from 'react-icons/Ai';
import { BsFillBarChartLineFill } from 'react-icons/Bs';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
  return (
    <div className='flex flex-col md:flex-row bg-gray-200 shadow-lg shadow-gray-400 dark:bg-gray-700/60 dark:text-blue-200 py-4 px-2'>
      <div className='lg:w-1/4 pl-1 pr-2 flex-col flex mb-4'>
        <img
          className='rounded-tl-3xl'
          src={course.image}
          alt={course.name}
        />
        <Link
          to={`/course/${course._id}`}
          className='mt-4 bg-cyan-600 text-center hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider'>
          course details
        </Link>
        <button className='mt-4 bg-rose-600  hover:bg-rose-300 hover:text-rose-700 text-rose-200  py-2 font-semibold uppercase rounded text-xs tracking-wider'>
          download outline
        </button>
        <button className='mt-4 bg-violet-600  hover:bg-violet-300 hover:text-violet-700 text-violet-200  py-2 font-semibold uppercase rounded text-xs tracking-wider'>
          download outline
        </button>
      </div>
      <div className='lg:w-3/4 pl-2 pr-0 '>
        <div className='py-1 px-4 font-bold bg-violet-200 text-violet-700 w-fit rounded-md'>
          {course.category}
        </div>
        <h2 className='font-bold py-2 '>{course.name} </h2>
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
            {course?.ratings ? (
              <>
                {' '}
                <span>
                  <FaThumbsUp />
                </span>{' '}
                {course.ratings} stars
              </>
            ) : (
              <span>New course</span>
            )}
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
