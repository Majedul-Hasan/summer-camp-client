/* eslint-disable react/no-unescaped-entities */
import { AiOutlineClockCircle } from 'react-icons/Ai';
import { BsFillBarChartLineFill } from 'react-icons/Bs';
import { FaThumbsUp } from 'react-icons/fa';

const CourseCard = () => {
  return (
    <div className='flex flex-col md:flex-row bg-gray-200 shadow-lg shadow-gray-400 dark:bg-gray-700/60 dark:text-blue-200 py-4 px-2'>
      <div className='lg:w-1/4 pl-1 pr-2 flex-col flex mb-4'>
        <img
          className='rounded-tl-3xl'
          src='https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/5gOjBf0OJwC2gIHsmlT20G/7db648c216f61ae1f05d3a64a59baf1a/instructor-pointing-at-computer-screen.jpg'
          alt=''
        />
        <button className='mt-4 bg-cyan-600  hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider'>
          course details
        </button>
        <button className='mt-4 bg-rose-600  hover:bg-rose-300 hover:text-rose-700 text-rose-200  py-2 font-semibold uppercase rounded text-xs tracking-wider'>
          download outline
        </button>
      </div>
      <div className='lg:w-3/4 pl-2 pr-0 '>
        <div className='py-1 px-4 font-bold bg-violet-200 text-violet-700 w-fit rounded-md'>
          Spoken
        </div>
        <h2 className='font-bold py-2 '>Become an Android Kotlin Developer </h2>
        <p className='leading-5 whitespace-break-spaces pb-2'>
          Built in collaboration with Google, this program will prepare you to
          become a professional Android developer and allow you to create a
          diverse portfolio of projects to show employers.
        </p>
        <div className='bg-gray-300 flex dark:bg-gray-300/50 justify-between py-2 my-2'>
          <div className='flex'>
            <div className='flex items-center gap-1 mx-1'>
              <span>
                <BsFillBarChartLineFill />
              </span>{' '}
              Intermediate{' '}
            </div>
            <div className='flex items-center gap-1 mx-1'>
              <span>
                <AiOutlineClockCircle />
              </span>
              4 months
            </div>
          </div>

          <div className='flex items-center gap-1 mx-1'>
            <span>
              <FaThumbsUp />
            </span>
            4.7 stars
          </div>
        </div>
        <div>
          <h3 className='font-semibold my-2'>What you'll learn</h3>
          <p>
            vocabulary & grammar, Efficiently master important grammar rules,
            necessary language skills to finally get fluent, Create longer and
            more complex sentences, 7 hours on-demand video & 33 downloadable
            resources, Assignments, Full lifetime access& 105 articles,
            Certificate of completion,
          </p>
        </div>
        <div className='mb-3'>
          <h3 className='font-semibold my-2'>Requirements</h3>
          <ul>
            <li>
              course for advancing beginners, meaning you should have a good
              knowledge of the Language
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
