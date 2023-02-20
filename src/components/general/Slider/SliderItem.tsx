import React from 'react';
import classes from './Slider.module.scss';
import bg from '../../../assets/home/slider/bg.png';

interface SliderItemProps {
  title: string;
  isActive: boolean;
  image: string;
  description: string;
}

const SliderItem: React.FC<SliderItemProps> = ({
  title,
  isActive,
  image,
  description,
}) => {
  return (
    <>
      {!isActive && (
        <div
          style={{ backgroundImage: `url(${image})` }}
          className={classes.item}
        >
          <h5 className={classes.item__title}>{title}</h5>
        </div>
      )}
      {isActive && (
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className={classes.itemActive}
        >
          <h5 className={classes.itemActive__title}>{title}</h5>
          <p className={classes.itemActive__paragraph}>{description}</p>
          <img className={classes.itemActive__image} src={image} alt={title} />
        </div>
      )}
    </>
  );
};

export default SliderItem;
