import { Link } from 'react-router-dom';
import { Icon, Button, Typography } from '../../base';

import './Footer.scss';

export const Footer: React.FC = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="logo">Logo</div>
          <ul className="footer__list">
            <li className="footer__item">
              <a href="github.com" className="footer__link">
                <Typography
                  type="text"
                  size="sm"
                  weight="700"
                  className="footer__link"
                  textTransform="uppercase"
                >
                  Github
                </Typography>
              </a>
            </li>
            <li className="footer__item">
              <Link to="contacts" className="footer__link">
                <Typography
                  type="text"
                  size="sm"
                  weight="700"
                  className="footer__link"
                  textTransform="uppercase"
                >
                  Contacts
                </Typography>
              </Link>
            </li>
            <li className="footer__item">
              <Link to="right" className="footer__link">
                <Typography
                  type="text"
                  size="sm"
                  weight="700"
                  className="footer__link"
                  textTransform="uppercase"
                >
                  Rights
                </Typography>
              </Link>
            </li>
          </ul>
          <Button
            type="default"
            className="footer__button"
            onClickHandler={backToTop}
          >
            <Typography
              type="text"
              size="sm"
              weight="600"
              className="footer__button-label"
            >
              Back to the top
            </Typography>
            <Icon
              id="arrow-right"
              width={16}
              height={16}
              className="arrow__icon"
            />
          </Button>
        </div>
      </div>
    </footer>
  );
};