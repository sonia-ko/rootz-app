import React from 'react';
import classes from '../Icons.module.scss';

interface ArrowLeftProps {
  handleClick: () => void;
}
const ArrowLeft: React.FC<ArrowLeftProps> = ({ handleClick }) => {
  console.log('arrow  rendered');
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
          d='M0.212403 7.46465L6.74633 0.721429C7.03304 0.42619 7.49754 0.42619 7.78497 0.721429C8.07168 1.01667 8.07168 1.49621 7.78497 1.79145L1.76931 7.99963L7.78425 14.2078C8.07095 14.503 8.07095 14.9826 7.78425 15.2786C7.49754 15.5738 7.03231 15.5738 6.74561 15.2786L0.211679 8.53535C-0.0706816 8.24317 -0.0706811 7.75609 0.212403 7.46465Z'
          fill='#1E1A20'
        />
      </svg>
    </button>
  );
};

export default ArrowLeft;
