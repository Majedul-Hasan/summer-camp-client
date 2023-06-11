import {
  BsGeoAlt,
  BsPeopleFill,
  BsFillTelephoneInboundFill,
} from 'react-icons/Bs';
import { SiMinutemailer } from 'react-icons/si';
import { BsMagic } from 'react-icons/Bs';

const InstructorHero = ({ instructor }) => {
  const { address, courses, name, email, gender, phone } = instructor || {};
  const photoUrl =
    instructor?.image || gender === 'male'
      ? 'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
      : 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80';

  const bio =
    instructor?.bio ||
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  return (
    <section
      className='page_header bg-cover bg-center py-20 min-h-[50vh] text-white flex flex-col md:flex-row justify-between'
      style={{ backgroundImage: `url(${photoUrl})` }}>
      <div className='bg-black/40 mx-2 p-5'>
        <div className='flex  items-end justify-start '>
          <div className=' md:w-full '>
            <h2 className='uppercase lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold my-3 border-b-4 border-blue-400 pb-4'>
              {name}
            </h2>
            <p className=' lg:text-2xl md:text-xl max-w-xs sm:text-sm text-xs'>
              {bio}
            </p>
          </div>
        </div>
      </div>
      <div className='bg-black/40 mx-2 p-5'>
        <div className='flex  items-end justify-start '>
          {/* <h2 className="uppercase lg:text-5xl md:text-4xl sm:text-3xl text-xl font-bold my-3 border-b-4 border-blue-400 pb-4">{likes}</h2> */}
          {/* {(experience || likes || recipes) && ( */}
          <div className=' md:w-full py-9 '>
            <h2 className=' mt-6 text-base sm:text-xl md:text-3xl lg:text-4xl font-semibold  text-center mb-10 '>
              Instructor Detail
            </h2>
            <p className=' my-4 lg:text-2xl md:text-xl max-w-xs sm:text-sm text-xs flex'>
              <span className='font-bold text-white mr-1 '>
                <BsMagic></BsMagic>
              </span>{' '}
              <span className='font-bold text-red-500 mr-3'>
                {' '}
                {courses?.length}
              </span>{' '}
              classes
            </p>
            {address && (
              <p className=' my-4 lg:text-2xl md:text-xl max-w-xs sm:text-sm text-xs flex'>
                <span className='font-bold text-white mr-1 '>
                  <BsGeoAlt></BsGeoAlt>
                </span>{' '}
                <span className='font-bold text-blue-200 mr-3'> {address}</span>{' '}
              </p>
            )}

            {/* eslint-disable-next-line react/prop-types */}
            <p className=' my-4 lg:text-2xl md:text-xl max-w-xs sm:text-sm text-xs flex'>
              <span className='font-bold text-white mr-1 '>
                <BsPeopleFill></BsPeopleFill>
              </span>{' '}
              <span className='font-bold text-red-500 mr-3'> {1000}+</span>{' '}
              students
            </p>
            {phone && (
              <p className=' my-4 lg:text-2xl md:text-xl max-w-xs sm:text-sm text-xs flex'>
                <span className='font-bold text-white mr-1 '>
                  <BsFillTelephoneInboundFill></BsFillTelephoneInboundFill>
                </span>{' '}
                <span className='font-bold text-blue-200 mr-3'>+ {phone}</span>{' '}
              </p>
            )}

            <p className=' my-4 lg:text-2xl md:text-xl max-w-xs sm:text-sm text-xs flex'>
              <span className='font-bold text-white mr-1 '>
                <SiMinutemailer></SiMinutemailer>
              </span>{' '}
              <span className='font-bold text-blue-200 mr-3'>{email}</span>{' '}
            </p>
            <div className=' my-4 lg:text-2xl md:text-xl max-w-xs sm:text-sm text-xs flex'>
              <div className='grid-flow-col gap-6 md:place-self-center md:justify-self-end flex justify-between'>
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
            {/* <div
              onClick={voteHandler}
              className=' my-4 lg:text-2xl md:text-xl max-w-xs sm:text-sm text-xs flex justify-center items-center py-2 rounded-lg cursor-pointer hover:bg-sky-800 bg-sky-600'>
              <span className='font-bold text-white mr-3 '>
                <AiFillLike />
              </span>{' '}
              add like
            </div> */}
          </div>
          {/* )} */}
        </div>
      </div>
    </section>
  );
};

export default InstructorHero;
