import { Helmet } from 'react-helmet-async';
import BannerSlider from '../BannerSlider/BannerSlider';
import NewsLetter from '../NewsLetter/NewsLetter';
import Testimonials from '../Testimonials/Testimonials';
import Events from '../Events/Events';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>summerCampLang | Home</title>
      </Helmet>
      <BannerSlider />
      <Events />
      <Testimonials />
      <NewsLetter />
    </>
  );
};

export default HomePage;
