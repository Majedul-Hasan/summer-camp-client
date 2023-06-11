import moment from 'moment';

const CourseInfo = ({ course, handleAddToCart, user }) => {
  return (
    <>
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
                user?.role?.role === 'admin' ||
                user?.role?.role === 'instructor'
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
    </>
  );
};

export default CourseInfo;
