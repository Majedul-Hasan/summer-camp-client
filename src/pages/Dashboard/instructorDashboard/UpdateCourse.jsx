import { useForm } from 'react-hook-form';
import { imgHostingUrl } from '../../../util/imgHostingUrl';
import { swalWithBootstrapButtons } from '../../../util/swalWithBootstrapButtons';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import { useLoaderData } from 'react-router-dom';

const UpdateCourse = () => {
  const loadedCourse = useLoaderData();
  console.log(loadedCourse);
  const {
    name,
    price,
    category,
    continent,
    level,
    language,
    duration,
    seats,
    image,
    topic,
    courseDetail,
    requirements,
  } = loadedCourse;

  const [axiosSecure] = useAxiosSecure();
  const { user } = useAuth();
  // const [selectedFile, setSelectedFile] = useState(null);

  console.log(user?.email, user?.displayName);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0]);
    // formData.append('image', selectedFile);
    console.log(formData);
    fetch(imgHostingUrl, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        console.log(imgResponse);
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const {
            name,
            price,
            category,
            continent,
            level,
            language,
            duration,
            seats,
            topic,
            courseDetail,
            requirements,
          } = data;
          const newCourse = {
            name,
            seats: parseInt(seats),
            level,
            price: parseFloat(price),
            category,
            language,
            duration,
            continent,
            image: imgURL,
            status: 'pending',
            topic,
            courseDetail,
            requirements,
            instructorEmail: user?.email,
            instructorName: user?.displayName,
            uploadAt: Date.now(),
          };
          console.log(newCourse);
          axiosSecure.post('/courses', newCourse).then((data) => {
            console.log('after posting new menu item', data.data);
            if (data.data.insertedId) {
              reset();
              swalWithBootstrapButtons.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Item added successfully',
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div className='w-full px-10 dark:text-blue-200'>
      <div className='py-10'>
        <h2 className='font-bold  text-4xl text-center text-gray-600 dark:text-blue-200'>
          Update course
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-control w-full mb-4 '>
          <label className='label'>
            <span className='label-text font-semibold dark:text-blue-200 '>
              course Name*
            </span>
          </label>
          <input
            type='text'
            defaultValue={name}
            {...register('name', { required: true, maxLength: 120 })}
            className='input input-bordered w-full '
          />
        </div>
        <div className='flex my-4'>
          <div className='form-control w-full '>
            <label className='label '>
              <span className='label-text dark:text-blue-200'>Level*</span>
            </label>
            <select
              defaultValue={level}
              {...register('level', { required: true })}
              className='select select-bordered dark:text-black'>
              <option className='dark:text-black'>beginner</option>
              <option className='dark:text-black'>mid</option>
              <option className='dark:text-black'>expert</option>
            </select>
          </div>
          <div className='form-control w-full ml-4'>
            <label className='label'>
              <span className='label-text font-semibold dark:text-blue-200 '>
                Course Language*
              </span>
            </label>
            <input
              type='text'
              defaultValue={language}
              {...register('language', { required: true })}
              className='input input-bordered w-full '
            />
          </div>
        </div>

        <div className='flex my-4'>
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text font-semibold dark:text-blue-200  '>
                Continent*
              </span>
            </label>
            <select
              defaultValue={continent}
              {...register('continent', { required: true })}
              className='select select-bordered dark:text-black'>
              <option
                className='dark:text-black'
                disabled>
                Pick One
              </option>
              <option className='dark:text-black'>Asia</option>
              <option className='dark:text-black'>Africa</option>
              <option className='dark:text-black'>Europe</option>
              <option className='dark:text-black'>North America</option>
              <option className='dark:text-black'>South America</option>
            </select>
          </div>
          <div className='form-control w-full ml-4'>
            <label className='label'>
              <span className='label-text font-semibold dark:text-blue-200 '>
                Price*
              </span>
            </label>
            <input
              type='number'
              defaultValue={price}
              {...register('price', { required: true })}
              placeholder='Type here'
              className='input input-bordered w-full '
            />
          </div>
        </div>
        <div className='flex my-4'>
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text font-semibold dark:text-blue-200 '>
                Category*
              </span>
            </label>
            <select
              defaultValue={category}
              {...register('category', { required: true })}
              className='select select-bordered dark:text-black'>
              <option
                className='dark:text-black'
                disabled>
                Pick One
              </option>
              <option className='dark:text-black'>Spoken</option>
              <option className='dark:text-black'>Writing</option>
              <option className='dark:text-black'>Reading</option>
            </select>
          </div>
          <div className='form-control w-full ml-4'>
            <label className='label'>
              <span className='label-text  dark:text-blue-200 font-semibold'>
                Seats*
              </span>
            </label>
            <input
              type='number'
              defaultValue={seats}
              {...register('seats', { required: true })}
              placeholder='Type here'
              className='input input-bordered w-full '
            />
          </div>
          <div className='form-control w-full ml-4'>
            <label className='label'>
              <span className='label-text dark:text-blue-200 font-semibold'>
                Duration*
              </span>
            </label>
            <input
              type='text'
              defaultValue={duration}
              {...register('duration', { required: true })}
              placeholder='Type here'
              className='input input-bordered w-full '
            />
          </div>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text font-semibold dark:text-blue-200'>
              What you will Learn*
            </span>
          </label>
          <textarea
            {...register('topic', { required: true })}
            className='textarea textarea-bordered h-24'
            defaultValue={topic}></textarea>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text font-semibold dark:text-blue-200'>
              Requirements*
            </span>
          </label>
          <textarea
            {...register('requirements', { required: true })}
            className='textarea textarea-bordered h-24'
            defaultValue={requirements}></textarea>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text font-semibold dark:text-blue-200'>
              {' '}
              Details*
            </span>
          </label>
          <textarea
            {...register('courseDetail', { required: true })}
            className='textarea textarea-bordered h-24'
            defaultValue={courseDetail}
            placeholder='Bio'></textarea>
        </div>
        <div className='form-control w-full ml-4'>
          <label className='label'>
            <span className='label-text dark:text-blue-200 font-semibold'>
              course thumbnail*
            </span>
          </label>
          <input
            type='text'
            defaultValue={image}
            {...register('image', { required: true })}
            className='input input-bordered w-full '
          />
        </div>

        <input
          className='mt-4 bg-cyan-600  hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider cursor-pointer'
          type='submit'
          value='update course'
        />
      </form>
    </div>
  );
};

export default UpdateCourse;
