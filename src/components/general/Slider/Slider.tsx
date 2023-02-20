import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import SliderItem from './SliderItem';
import ArrowLeft from '../Icons/ArrowLeft/ArrowLeft';
import ArrowRight from '../Icons/ArrowRight/ArrowRight';
import classes from './Slider.module.scss';

interface Slide {
  image: string;
  title: string;
  description: string;
  index: number;
}

interface SliderProps {
  slides: Slide[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidesToView, setSlidesToView] = useState<Slide[]>([]);
  const slidesPerPage = 5;
  useEffect(() => {
    const centeredSlide = Math.floor(slidesPerPage / 2);
    let newSlides = slides.filter((el) => el.index === 0);
    newSlides = [
      ...slides.slice(-2).sort((a, b) => a.index - b.index),
      ...newSlides,
      ...slides.slice(1, 1 + centeredSlide),
    ];
    setSlidesToView(newSlides);
  }, []);

  const nextSlide = () => {
    if (activeSlide + 1 >= slides.length) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
    const newSlides: Slide[] = [...slidesToView];
    newSlides.push(newSlides.shift() as Slide);
    setSlidesToView(newSlides);
  };

  const previousSlide = () => {
    if (activeSlide <= 0) {
      setActiveSlide(slides.length - 1);
    } else {
      setActiveSlide(activeSlide - 1);
    }
    const newSlides: Slide[] = [...slidesToView];
    newSlides.unshift(newSlides.pop() as Slide);
    setSlidesToView(newSlides);
  };

  return (
    <div className={classes.container}>
      <div className={classes.container__slides}>
        {slidesToView.map((slide) => (
          <SliderItem
            key={slide.title}
            title={slide.title}
            image={slide.image}
            isActive={slide.index === activeSlide}
            description={slide.description}
          />
        ))}
      </div>
      <div className={classes.container__slidesInfo}>
        <ArrowLeft handleClick={previousSlide} />
        <span>
          {activeSlide + 1}{' '}
          <span className={classes.container__totalPages}>
            / {slides.length}
          </span>
        </span>
        <ArrowRight handleClick={nextSlide} />
      </div>
    </div>
  );
};

export default Slider;
