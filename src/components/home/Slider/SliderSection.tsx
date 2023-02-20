import React from 'react';
import classes from './SliderSection.module.scss';
import Slider from '../../general/Slider/Slider';
import energy from '../../../assets/home/slider/energy.png';
import forests from '../../../assets/home/slider/forests.png';
import plastik from '../../../assets/home/slider/plastik.png';
import trees from '../../../assets/home/slider/trees.png';
import water from '../../../assets/home/slider/save-water.png';

const slides = [
  {
    image: plastik,
    title: 'Avoid plastic',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  {
    image: trees,
    title: 'Choose organic',
    description:
      'Spot of come to ever hand as lady meet on. Delicate contempt received.',
  },
  {
    image: water,
    title: 'Save watter',
    description:
      'Taking on the issue of ensuring access to safe water requires worldwide.',
  },
  {
    image: forests,
    title: 'Plant trees',
    description:
      'Gentleman as belonging he commanded believing dejection in by. ',
  },
  {
    image: energy,
    title: 'Save energy',
    description: 'Its preserved sex enjoyment new way behaviour.',
  },
];
const SliderSection: React.FC = () => {
  return (
    <div className={classes.container}>
      <Slider
        slides={slides.map((el, i) => {
          return { ...el, index: i };
        })}
      />
    </div>
  );
};

export default SliderSection;
