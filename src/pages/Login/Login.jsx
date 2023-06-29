import { Link, useLocation, useNavigate } from 'react-router-dom';
import reading from '../../assets/Reading a book_Monochromatic.svg';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/Ai';
import { useState } from 'react';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { swalWithBootstrapButtons } from '../../util/swalWithBootstrapButtons';
import { useLoginMutation } from '../../features/auth/authApi';

const Login = () => {
  const [firebaseError, setFirebaseError] = useState(null);
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';
  const [visible, setVisible] = useState(false);

  const [login, { data: resData, isLoading, error: responseError }] =
    useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    login(data);
    console.log(resData);
  };

  return (
    <section className='h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0'>
      <div className='md:w-1/3 max-w-sm'>
        <img
          src={reading}
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded'
            type='email'
            {...register('email', { required: true })}
            placeholder='Email Address'
          />
          <div className='flex justify-between items-center'>
            <input
              className='text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4'
              type={visible ? 'text' : 'password'}
              {...register('password', {
                required: true,
                minLength: 6,
                maxLength: 20,
                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
              })}
              placeholder='Password'
            />

            <input
              id='myCheckbox'
              type='checkbox'
              className='mr-auto -ml-7 -mb-5  hidden'
              onClick={() => setVisible((x) => !x)}
            />
            <label
              // onClick={() => setVisible((x) => !x)}
              htmlFor='myCheckbox'
              className='checkbox-label mr-auto -ml-7 -mb-5'>
              {visible ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </label>
          </div>

          <div className='mt-4 flex justify-between font-semibold text-sm'>
            <label className='flex text-slate-500 hover:text-slate-600 cursor-pointer'>
              <input
                className='mr-1'
                type='checkbox'
              />
              <span>Remember Me</span>
            </label>
            <a
              className='text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4'
              href='#'>
              Forgot Password?
            </a>
          </div>
          <div className='text-center md:text-left'>
            <button
              className='mt-4 bg-cyan-600  hover:bg-cyan-300 hover:text-cyan-700 text-cyan-200 px-4 py-2 font-semibold uppercase rounded text-xs tracking-wider'
              type='submit'>
              Login
            </button>
          </div>
        </form>
        <div className='mt-4 font-semibold text-sm text-slate-500 text-center md:text-left'>
          Do not have an account?{' '}
          <Link
            className='text-red-600 hover:underline hover:underline-offset-4'
            to='/signup'>
            Register
          </Link>
        </div>
        {errors.password?.type === 'required' && (
          <p className='text-red-600'>Password is required</p>
        )}
        {errors.password?.type === 'minLength' && (
          <p className='text-red-600'>Password must be 6 characters</p>
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

export default Login;
