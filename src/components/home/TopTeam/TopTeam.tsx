import React from 'react';
import classes from './TopTeam.module.scss';

import dashedLines1 from '../../../assets/home/dashed-lines-1.png';
import dashedLines2 from '../../../assets/home/dashed-lines-2.png';
import employee1 from '../../../assets/home/employee-1.png';
import employee2 from '../../../assets/home/employee-2.png';
import employee3 from '../../../assets/home/employee-3.png';

const TopTeam: React.FC = () => {
  return (
    <div className={classes.team}>
      <div className='container__inner'>
        <h2>Our top team</h2>
        <p className={classes.team__paragraph}>
          Learn more about how you can save our planet's nature.
        </p>
        <div className={classes.members}>
          <div className={classes.members__pictures}>
            <img
              className={classes.members__first}
              src={employee1}
              alt='Employee 1'
            />
            <img
              className={classes.members__second}
              src={employee2}
              alt='Employee 2'
            />
            <img
              className={classes.members__third}
              src={employee3}
              alt='Employee 3'
            />
          </div>
          <img
            className={classes.members__dashesLeft}
            src={dashedLines1}
            alt='arrow from employee#1 to employee#2'
          />
          <img
            className={classes.members__dashesRight}
            src={dashedLines2}
            alt='arrow from employee#2 to employee#3'
          />
        </div>
      </div>
    </div>
  );
};

export default TopTeam;
