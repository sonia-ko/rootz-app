import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import classes from './MobileMenu.module.scss';
import { websiteNavigation } from '../../../static/websiteData';
import { sideNavigation } from '../../../static/websiteData';
import Button from '../Button/Button';

interface MobileMenuProps {
  handleClick: () => void;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ handleClick }) => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className={classes.container}>
      <nav className={classes.navigationContainer}>
        <ul className={classes.navigation}>
          {websiteNavigation.map((el) => (
            <li key={el.title}>
              <Link
                onClick={handleClick}
                className={
                  location.pathname === el.path
                    ? classes.navigation__active
                    : classes.navigation__item
                }
                to={el.path}
              >
                {el.title}
              </Link>
            </li>
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
    </div>
  );
};

export default MobileMenu;
