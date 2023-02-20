import React from 'react';
import { Link } from 'react-router-dom';
import { websiteNavigation } from '../../../static/websiteData';
import { sideNavigation } from '../../../static/websiteData';
import Logo from '../Icons/Logo/Logo';
import HamburgerIcon from '../Icons/HamburgerIcon/HamburgerIcon';
import Button from '../Button/Button';
import classes from './Header.module.scss';

interface HeaderProps {
  menuMobileOpen: boolean;
  onMenuClick: () => void;
}
const Header: React.FC<HeaderProps> = ({ onMenuClick, menuMobileOpen }) => {
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

        <div className={classes.sideNavigation}>
          {sideNavigation.map((el) => (
            <Button
              btnText={el.title}
              btnStyle='white'
              isLink={true}
              btnPath={el.path}
              key={el.title}
            />
          ))}
        </div>

        <div className={classes.mobileMenuIcon}>
          <HamburgerIcon menuOpen={menuMobileOpen} handleClick={onMenuClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
