import { Helmet } from 'react-helmet-async';
import BannerSlider from '../BannerSlider/BannerSlider';
import NewsLetter from '../NewsLetter/NewsLetter';
import Testimonials from '../Testimonials/Testimonials';
import Events from '../Events/Events';
import PopularCourses from '../PopularCourses/PopularCourses';
import { useLoaderData } from 'react-router-dom';

const HomePage = () => {
  const popularCourses = useLoaderData() || [];
  return (
    <>
      <Helmet>
        <title>summerCampLang | Home</title>
      </Helmet>
      <BannerSlider />
      <PopularCourses popularCourses={popularCourses} />
      <Events />
      <Testimonials />
      <NewsLetter />
    </>
  );
};

export default HomePage;
