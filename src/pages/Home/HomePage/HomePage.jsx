import { Helmet } from 'react-helmet-async';
import BannerSlider from '../BannerSlider/BannerSlider';
import NewsLetter from '../NewsLetter/NewsLetter';
import Testimonials from '../Testimonials/Testimonials';
import Events from '../Events/Events';
import PopularCourses from '../PopularCourses/PopularCourses';
// import { useLoaderData } from 'react-router-dom';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import LearningPath from '../LearningPath/LearningPath';
import LearningSolutions from '../LearningSolutions/LearningSolutions';
import BecomeStudent from '../BecomeStudent/BecomeStudent';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>summerCampLang | Home</title>
      </Helmet>
      <BannerSlider />
      <PopularCourses />
      <LearningPath />
      <LearningSolutions />
      <BecomeStudent />
      <PopularInstructors />
      <Events />
      <Testimonials />
      <NewsLetter />
    </>
  );
};

export default HomePage;
