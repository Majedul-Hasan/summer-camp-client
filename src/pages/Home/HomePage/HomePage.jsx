import { Helmet } from 'react-helmet-async';
import BannerSlider from '../BannerSlider/BannerSlider';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>summerCampLang | Home</title>
      </Helmet>
      <BannerSlider />
      <h2>home</h2>
    </>
  );
};

export default HomePage;
