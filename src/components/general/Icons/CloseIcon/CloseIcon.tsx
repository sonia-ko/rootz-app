import React from 'react';
import classes from '../Icons.module.scss';

interface CloseIconProps {
  handleClick: () => void;
}
const CloseIcon: React.FC<CloseIconProps> = ({ handleClick }) => {
  return (
    <svg
      className={classes.closeIcon}
      onClick={handleClick}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='20' cy='20.0001' r='20' />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M13 20.0001C13 19.4478 13.3482 19.0001 13.7778 19.0001L26.2222 19.0001C26.6518 19.0001 27 19.4478 27 20.0001C27 20.5524 26.6518 21.0001 26.2222 21.0001L13.7778 21.0001C13.3482 21.0001 13 20.5524 13 20.0001Z'
        fill='white'
      />
    </svg>
  );
};

export default CloseIcon;
