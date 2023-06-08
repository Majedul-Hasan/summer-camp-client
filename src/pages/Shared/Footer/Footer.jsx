import { AiFillClockCircle, AiFillMail } from 'react-icons/Ai';
import { ImLocation2 } from 'react-icons/Im';
import { BsFillTelephoneFill } from 'react-icons/Bs';
import logo from '../../../assets/letnja-skola.png';
import logoDark from '../../../assets/letnja-skola-dark.png';

import useAuth from '../../../hooks/useAuth';

const Footer = () => {
  const { isDarkMode } = useAuth();

  return (
    <div className='dark:text-sky-200'>
      <div className='mt-10 pt-8 '>
        <footer className='footer grid-cols-1 md:grid-cols-6 '>
          <div className=' text-center col-span-2'>
            <div className='w-1/3 mx-auto'>
              <img
                src={isDarkMode ? logoDark : logo}
                alt=''
              />
            </div>

            <p className='w-4/5 mx-auto'>
              <span className='text-xl font-bold'>Summer school </span>
              <br />
              Learn language to communicate
            </p>
          </div>
          <div>
            <span className='footer-title'>Languages</span>
            <a className='link link-hover'>Chinese</a>
            <a className='link link-hover'>Spanish</a>
            <a className='link link-hover'>English</a>
            <a className='link link-hover'>Arabic</a>
            <a className='link link-hover'>Hindi</a>
            <a className='link link-hover'>Bengali</a>
            <a className='link link-hover'>Portuguese</a>
            {/* <a className='link link-hover'>Russian</a>
            <a className='link link-hover'>Japanese</a> */}
          </div>
          <div>
            <span className='footer-title'>School</span>
            <a className='link link-hover'>About us</a>
            <a className='link link-hover'>Contact</a>
            <a className='link link-hover'>Become instructor </a>
            <a
              href='https://summer-camp-server-majedul-hasan.vercel.app'
              className='link link-hover'>
              documentation
            </a>
            <a className='link link-hover'>Terms of use</a>
            <a className='link link-hover'>Privacy policy</a>
            <a className='link link-hover'>Cookie policy</a>
          </div>
          <div className='col-span-2'>
            <span className='footer-title'>Have a Question?</span>
            <p className='link link-hover flex gap-2 items-center '>
              <AiFillClockCircle />
              <span> Mon. - Fri.: 09:00 - 18:30</span>
            </p>
            <p className='link link-hover flex gap-2 items-center'>
              <ImLocation2 />
              <span> 164 7th Avenue, Seattle, WA 9801</span>
            </p>
            <p className='link link-hover flex gap-2 items-center'>
              <BsFillTelephoneFill />
              <span> +1.888.292.717</span>
            </p>
            <p className='link link-hover flex gap-2 items-center'>
              <AiFillMail />
              <span> info@summer.school</span>
            </p>
          </div>

          <div className=' '>
            <span className='footer-title'>Payment Options</span>
            <div className='w-40'>
              <img
                src='https://images.contentstack.io/v3/assets/bltee50a64aa85c8d90/blt1b4b0326d03391c3/615a92367e4c056146cb65fa/payment_methods.jpg'
                alt=''
              />
            </div>
          </div>
        </footer>
      </div>
      <div className='py-8 '>
        <div className='footer items-center p-4  text-black'>
          <div className='items-center grid-flow-col dark:text-sky-200'>
            <div></div>
            <p>Copyright © 2023 - All right reserved</p>
          </div>
          <div className='grid-flow-col gap-4 md:place-self-center md:justify-self-end dark:text-sky-200'>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current '>
                <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'>
                <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'>
                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
