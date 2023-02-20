import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Button.module.scss';

interface ButtonProps {
  btnText: string;
  isLink: boolean;
  onClick?: () => void;
  btnStyle: 'white' | 'green' | 'transparent' | 'orange';
  btnPath?: string;
}

const Button: React.FC<ButtonProps> = ({
  btnText,
  onClick = () => {
    return;
  },
  btnStyle,
  isLink,
  btnPath = '/',
}) => {
  return (
    <>
      {isLink && (
        <Link className={classes[btnStyle]} to={btnPath}>
          {btnText}
        </Link>
      )}
      {!isLink && (
        <button onClick={onClick} className={` ${classes[btnStyle]}`}>
          <span className={classes.btnText}>{btnText}</span>
        </button>
      )}
    </>
  );
};

export default Button;
