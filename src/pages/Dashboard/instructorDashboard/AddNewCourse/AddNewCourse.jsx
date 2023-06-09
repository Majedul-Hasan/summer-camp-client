import { useForm } from 'react-hook-form';

import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const img_hosting_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;
const AddNewCourse = () => {
  const [axiosSecure] = useAxiosSecure();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const formData = new FormData();
    console.log(img_hosting_token);

    formData.append('image', data.image[0]);
    fetch(img_hosting_url, {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          console.log(newItem);
          axiosSecure.post('/menu', newItem).then((data) => {
            console.log('after posting new menu item', data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
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
      <div>
        <h2>new course</h2>
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
            placeholder='course Name'
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
              defaultValue='beginner'
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
              placeholder='course language'
              {...register('language', { required: true })}
              className='input input-bordered w-full '
            />
          </div>
        </div>

        <div className='flex my-4'>
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text '>Continent*</span>
            </label>
            <select
              defaultValue='Pick One'
              {...register('category', { required: true })}
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
              <span className='label-text font-semibold'>Price*</span>
            </label>
            <input
              type='number'
              {...register('price', { required: true })}
              placeholder='Type here'
              className='input input-bordered w-full '
            />
          </div>
        </div>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'> Details*</span>
          </label>
          <textarea
            {...register('courseDetail', { required: true })}
            className='textarea textarea-bordered h-24'
            placeholder='Bio'></textarea>
        </div>
        <div className='form-control w-full my-4'>
          <label className='label'>
            <span className='label-text'>course thumbnail*</span>
          </label>
          <input
            type='file'
            {...register('image', { required: true })}
            className='file-input file-input-bordered w-full '
          />
        </div>
        <input
          className='mt-4 bg-cyan-600  hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider cursor-pointer'
          type='submit'
          value='Add course'
        />
      </form>
    </div>
  );
};

export default AddNewCourse;
