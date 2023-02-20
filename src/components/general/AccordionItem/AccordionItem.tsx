import React from 'react';
import { useState } from 'react';
import CloseIcon from '../Icons/CloseIcon/CloseIcon';
import OpenIcon from '../Icons/OpenIcon/OpenIcon';
import classes from './AccordionItem.module.scss';

interface AccordionItemProps {
  question: string;
  answer: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={classes.container}>
      <div className={classes.container__question}>
        <h4 className={classes.container__title}> {question}</h4>
        {isOpen ? (
          <CloseIcon handleClick={toggleOpen} />
        ) : (
          <OpenIcon handleClick={toggleOpen} />
        )}
      </div>
      {isOpen ? <p className={classes.container__answer}>{answer}</p> : null}
    </div>
  );
};

export default AccordionItem;
