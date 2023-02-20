import React from 'react';
import classes from './GetStartedAccordion.module.scss';
import { accordionQuestions } from '../../../static/websiteData';
import Button from '../../general/Button/Button';
import AccordionItem from '../../general/AccordionItem/AccordionItem';

const GetStartedAccordion: React.FC = () => {
  return (
    <section className={`container__inner`}>
      <div className={classes.container}>
        <div className={classes.container__textBlock}>
          <h3 className={classes.container__title}>Ready to Get started?</h3>
          <p className={classes.container__description}>
            When pattern is mentioned in interior design, it is easy to asso-
            ciate it with a geometric patterned wallpaper or colourful prints on
            interior fabrics.
          </p>
          <Button
            isLink={true}
            btnPath='/apply'
            btnStyle='orange'
            btnText='Contact us'
          />
        </div>
        <div className={classes.accordion}>
          {accordionQuestions.map((el) => (
            <AccordionItem
              key={el.question}
              answer={el.answer}
              question={el.question}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStartedAccordion;
