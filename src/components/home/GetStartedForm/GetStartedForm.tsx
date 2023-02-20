import React from 'react';
import classes from './GetStartedForm.module.scss';
import Button from '../../general/Button/Button';
import LeafBlue from '../../../assets/home/leaf-blue.png';
import LeafOrange from '../../../assets/home/leaf-orange.png';

const GetStartedForm: React.FC = () => {
  return (
    <section className={classes.container}>
      <div className={`${classes.container__inner} container__inner`}>
        <div className={classes.description}>
          <h2 className={classes.description__title}>Get started today!</h2>
          <p>
            Learn more about how you can save our planet's nature. From smart
            consumption to switching to renewable energy, each of us can do our
            part to save the planet.
          </p>
        </div>

        <form className={classes.form} action=''>
          <h3>Log in</h3>
          <input
            className={classes.form__input}
            placeholder='Name'
            type='text'
          />
          <input
            className={`${classes.form__input} ${classes.form__inputEmail}`}
            placeholder='Email'
            type='email'
          />
          <Button btnStyle='orange' btnText='Book a demo' isLink={false} />
          <img
            className={classes.form__leafOrange}
            src={LeafOrange}
            alt='Orange leaf'
          />
          <img
            className={classes.form__leafBlue}
            src={LeafBlue}
            alt='Blue leaf'
          />
        </form>
      </div>
    </section>
  );
};

export default GetStartedForm;
