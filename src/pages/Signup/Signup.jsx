import { Link, useNavigate } from 'react-router-dom';
import summer from '../../assets/Summer landscape_Monochromatic.svg';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { useState } from 'react';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { swalWithBootstrapButtons } from '../../util/swalWithBootstrapButtons';
// import axiosInstance from '../../util/axiosInstance';
import { imgHostingUrl } from '../../util/imgHostingUrl';
import axiosInstance from '../../util/axiosInstance';

const SignUp = () => {
  const [firebaseError, setFirebaseError] = useState(null);
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
   const [selectedFile, setSelectedFile] = useState(null);
   const [photoUrl, setPhotoUrl] = useState(null);

   const {
     register,
     handleSubmit,
     formState: { errors },
     reset,
     watch,
   } = useForm();
   console.log(photoUrl);

   const photoUpload = () => {
     const formData = new FormData();

     formData.append('image', selectedFile);
     axiosInstance.post(imgHostingUrl, formData).then((imgResponse) => {
       console.log(imgResponse);
       if (imgResponse.data.success) {
         const imgURL = imgResponse.data.data.display_url;
         console.log(imgURL);
         setPhotoUrl(imgURL);
       }
     });
   };

   const onSubmit = (data) => {
     createUser(data.email, data.password)
       .then((result) => {
         const loggedUser = result.user;
         console.log(loggedUser);
         const imgURL = data.image;

         updateUserProfile(data.name, imgURL);
       })
       .then(() => {
         const { name, email, gender, address, phone } = data;

         const saveUser = {
           name,
           email,
           gender,
           address,
           phone,
         };
         console.log('user profile info updated');
         axiosInstance.post(`${import.meta.env.VITE_API}/users`, saveUser);
         reset();
         swalWithBootstrapButtons.fire({
           position: 'center',
           icon: 'success',
           title: 'User created successfully.',
           showConfirmButton: false,
           timer: 1500,
         });
         navigate('/');
       })
       .catch((error) => {
         const errorMessage = error.message;
         setFirebaseError(errorMessage);

         // ..
       });
   };

   /*** */

   ////////////////////////////////

   return (
     <section className='h-screen flex flex-col md:flex-row dark:text-blue-200 justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0'>
       <div className='md:w-1/3 max-w-sm'>
         <img
           src={summer}
           alt='Sample image'
         />
       </div>
       <div className='md:w-1/3 max-w-sm'>
         <SocialLogin />
         <div className='my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'>
           <p className='mx-4 mb-0 text-center font-semibold text-slate-500'>
             Or
           </p>
         </div>
         <form
           onSubmit={handleSubmit(onSubmit)}
           className='dark:text-gray-600 '>
           <input
             className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
             type='text'
             {...register('name', { required: true })}
             placeholder='Your name'
           />
           <input
             className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
             type='text'
             {...register('image', { required: true })}
             defaultValue={photoUrl}
             placeholder='img url or upload img'
           />
           <div className='flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300'>
             <p className='mx-4 mb-0 text-center font-semibold text-slate-500'>
               Or
             </p>
           </div>
           <input
             type='file'
             // {...register('image', { required: true })}
             //  value={selectedFile}
             onChange={(e) => setSelectedFile(e.target.files[0])}
             onBlur={photoUpload}
             className='file-input file-input-bordered text-sm w-full   border-gray-300 rounded'
           />

           <input
             className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4 '
             type='email'
             {...register('email', { required: true })}
             placeholder='Email Address'
           />
           <input
             className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
             type='password'
             {...register('password', {
               required: true,
               minLength: 6,
               maxLength: 20,
               pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
             })}
             placeholder='Password'
           />
           <input
             className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
             type='password'
             placeholder='confirm password'
             {...register('confirm_password', {
               required: true,
               validate: (val) => {
                 if (watch('password') != val) {
                   return 'Your passwords do no match';
                 }
               },
             })}
           />
           <input
             className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
             type='text'
             {...register('address', { required: true })}
             placeholder='Your district, state'
           />
           <input
             className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
             type='text'
             {...register('phone', { required: true })}
             placeholder='Your phone number'
           />
           <label htmlFor='gender'> Gender</label>
           <label htmlFor='gender'>
             <input
               {...register('gender', { required: true })}
               type='radio'
               name='gender'
               defaultValue='male'
             />{' '}
             male{' '}
           </label>
           <label htmlFor='gender'>
             <input
               {...register('gender', { required: true })}
               type='radio'
               name='gender'
               defaultValue='female'
             />{' '}
             female{' '}
           </label>
           <label htmlFor='gender'>
             <input
               {...register('gender', { required: true })}
               type='radio'
               name='gender'
               defaultValue='other'
             />{' '}
             Other{' '}
           </label>

           <div className='mt-4 flex justify-between font-semibold text-sm'></div>
           <div className='text-center md:text-left'>
             <button
               className='mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider'
               type='submit'>
               Register
             </button>
           </div>
         </form>
         <div className='mt-4 font-semibold text-sm text-slate-500 text-center md:text-left'>
           Already have an account?{' '}
           <Link
             className='text-red-600 hover:underline hover:underline-offset-4'
             to='/login'>
             login
           </Link>
         </div>
         {errors.password?.type === 'required' && (
           <p className='text-red-600'>Password is required</p>
         )}
         {errors.image?.type === 'required' && (
           <p className='text-red-600'>
             If you upload photo please click on the url field
           </p>
         )}

         {errors.password?.type === 'minLength' && (
           <p className='text-red-600'>Password must be 6 characters</p>
         )}
         {errors.confirm_password?.type === 'validate' && (
           <p className='text-red-600'>Your passwords do no match</p>
         )}
         {errors.password?.type === 'maxLength' && (
           <p className='text-red-600'>
             Password must be less than 20 characters
           </p>
         )}
         {errors.password?.type === 'pattern' && (
           <p className='text-red-600'>
             Password must have one Uppercase one lower case, one number and one
             special character.
           </p>
         )}
         {firebaseError && <p className='text-red-600'>{firebaseError}</p>}
       </div>
     </section>
   );
};

export default SignUp;
