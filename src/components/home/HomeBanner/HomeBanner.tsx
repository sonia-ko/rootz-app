import React from 'react';
import classes from './HomeBanner.module.scss';

import Headline from '../../../assets/home/headline.png';
import Parrot from '../../../assets/home/parrot.png';
import GeolocationIcon from '../../general/Icons/GeoLocation/GeoLocation';
import Button from '../../general/Button/Button';
import CardImg from '../../../assets/home/card-img.png';
import HeadIcon from '../../../assets/home/head.png';
import { numberOfMembers } from '../../../static/websiteData';

const HomeBanner: React.FC = () => {
  return (
    <section className={classes.banner}>
      <div className={`${classes.banner__inner} container__inner`}>
        <div className={classes.banner__columnLeft}>
          <img
            className={classes.banner__headline}
            src={Headline}
            alt='Nature needs you'
          />
          <h1 className={classes.banner__h1}>Nature needs you</h1>
          <p className={classes.banner__paragraph}>
            The scale of the challenges facing our planet can seem daunting, but
            we can all do something.
          </p>
          <div className={classes.searchBox}>
            <GeolocationIcon />
            <input
              className={classes.searchBox__input}
              placeholder='Find the place to help'
              type='text'
            />
            <Button
              isLink={false}
              btnText='Search'
              btnStyle='orange'
              onClick={() => {}}
            ></Button>
          </div>
        </div>
        <div className={classes.banner__columnRight}>
          <img className={classes.banner__mainImg} src={Parrot} alt='Parrot' />
          <div className={classes.card}>
            <img className={classes.card__mainImg} src={CardImg} alt='card' />
            <img
              className={classes.card__headImg}
              src={HeadIcon}
              alt='head icon'
            />
            <p className={classes.card__title}>Members</p>
            <p className={classes.card__number}>{numberOfMembers}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
