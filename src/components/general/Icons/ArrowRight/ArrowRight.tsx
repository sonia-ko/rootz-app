import React from 'react';
import classes from '../Icons.module.scss';

interface ArrowRightProps {
  handleClick: () => void;
}
const ArrowRight: React.FC<ArrowRightProps> = ({ handleClick }) => {
  return (
    <button style={{ width: '3rem' }} onClick={handleClick}>
      <svg
        width='8'
        height='16'
        viewBox='0 0 8 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.7876 7.46465L1.25367 0.721429C0.966964 0.42619 0.502457 0.42619 0.215028 0.721429C-0.0716761 1.01667 -0.0716761 1.49621 0.215028 1.79145L6.23069 7.99963L0.215752 14.2078C-0.070952 14.503 -0.070952 14.9826 0.215752 15.2786C0.502457 15.5738 0.967688 15.5738 1.25439 15.2786L7.78832 8.53535C8.07068 8.24317 8.07068 7.75609 7.7876 7.46465Z'
          fill='#1E1A20'
        />
      </svg>
    </button>
  );
};

export default ArrowRight;
