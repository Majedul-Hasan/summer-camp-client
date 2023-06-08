import { Helmet } from 'react-helmet-async';
import BannerSlider from '../BannerSlider/BannerSlider';
import NewsLetter from '../NewsLetter/NewsLetter';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>summerCampLang | Home</title>
      </Helmet>
      <BannerSlider />
      <NewsLetter />
    </>
  );
};

export default HomePage;
