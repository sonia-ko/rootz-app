import React from 'react';
import Button from '../Button/Button';
import classes from './WillBeSoon.module.scss';

interface WillBeSoonProps {
  pageName: string;
}

const WillBeSoon: React.FC<WillBeSoonProps> = ({ pageName }) => {
  return (
    <section className={classes.container}>
      <h2>The {pageName} page will be there soon</h2>
      <Button
        btnPath={'/'}
        isLink={true}
        btnStyle='orange'
        btnText='Go back home'
      />
    </section>
  );
};

export default WillBeSoon;
