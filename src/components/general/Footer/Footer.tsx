import React from 'react';
import SocialIcon from '../Icons/SocialIcons/SocialIcon';
import { socialData } from '../../../static/websiteData';
import classes from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className='container__inner'>
      <div className={classes.footer}>
        <div className={classes.footer__contacts}>
          <h4 className={classes.footer__contactsTitle}>Contacts</h4>
          <p>2019 Rootz Foundation.</p>
          <p>All rights reserved</p>
        </div>
        <div>
          <h6>Headquarters</h6>
          <p>1234 Taliban </p>
          <p>Los Angeles, La 1234567</p>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <h6 className={classes.footer__social}>Social media</h6>
          <div className={classes.footer__icons}>
            {socialData.map((el) => (
              <SocialIcon
                key={el.service}
                service={el.service}
                link={el.link}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
