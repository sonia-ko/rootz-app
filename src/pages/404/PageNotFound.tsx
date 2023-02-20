import React from 'react';
import Button from '../../components/general/Button/Button';
import classes from './PageNotFound.module.scss';

const PageNotFound: React.FC = () => {
  return (
    <section className={classes.container}>
      <h2>
        Whoops... <br /> This page cannot be found...
      </h2>
      <Button
        btnPath={'/'}
        isLink={true}
        btnStyle='orange'
        btnText='Go back home'
      />
    </section>
  );
};

export default PageNotFound;
