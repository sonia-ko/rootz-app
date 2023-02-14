import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.scss';
import { websiteNavigation } from '../../../static/websiteData';
import { sideNavigation } from '../../../static/websiteData';
import Logo from '../Icons/Logo/Logo';
import Button from '../Button/Button';

const Header: React.FC = () => {
  return (
    <header className={classes.container}>
      <div className={`${classes.innerContainer} container`}>
        <Link className={classes.logo} to='/'>
          <Logo />
        </Link>

        <nav className={classes.navigationContainer}>
          <ul className={classes.navigation}>
            {websiteNavigation.map((el) => (
              <Link key={el.title} to={el.path}>
                {el.title}
              </Link>
            ))}
          </ul>
        </nav>

        <div>
          {sideNavigation.map((el) => (
            <Button
              btnText={el.title}
              btnStyle='white'
              isLink={true}
              btnPath={el.path}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
