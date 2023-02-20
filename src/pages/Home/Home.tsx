import React from 'react';
import HomeBanner from '../../components/home/HomeBanner/HomeBanner';
import TopTeam from '../../components/home/TopTeam/TopTeam';
import GetStartedForm from '../../components/home/GetStartedForm/GetStartedForm';
import GetStartedAccordion from '../../components/home/GetStartedAccordion/GetStartedAccordion';
import SliderSection from '../../components/home/Slider/SliderSection';

const Home: React.FC = () => {
  return (
    <section>
      <HomeBanner />
      <TopTeam />
      <GetStartedForm />
      <GetStartedAccordion />
      <SliderSection />
    </section>
  );
};

export default Home;
