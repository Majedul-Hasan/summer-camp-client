import useAuth from '../../../hooks/useAuth';

const NewsLetter = () => {
  const { isDarkMode } = useAuth();
  return (
    <section className='flex py-10 my-8 gap-4 border-y-2 items-center dark:text-blue-200 '>
      <div className='flex-1'>
        <form className='relative'>
          <input
            type='text'
            placeholder='username@site.com'
            className='input input-bordered w-full pr-16'
          />
          <button className=' absolute right-0  dark:bg-blue-200 dark:text-blue-600  px-3 bg-slate-200  h-full rounded-l-none input-bordered'>
            Subscribe
          </button>
        </form>
      </div>
      <div className='flex-1'>
        <p>
          Subscribe now and receive weekly newsletter with educational
          materials, new courses, interesting posts, popular books and much
          more!
        </p>{' '}
      </div>
    </section>
  );
};

export default NewsLetter;
