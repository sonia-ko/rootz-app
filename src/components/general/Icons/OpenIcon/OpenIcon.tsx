import React from 'react';
import classes from '../Icons.module.scss';

interface OpenIconProps {
  handleClick: () => void;
}
const OpenIcon: React.FC<OpenIconProps> = ({ handleClick }) => {
  return (
    <svg
      className={classes.openIcon}
      onClick={handleClick}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='20' cy='20' r='20' />
      <path
        d='M20.2007 14L20.2007 26M14 20.0165H26'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
      />
    </svg>
  );
};

export default OpenIcon;
