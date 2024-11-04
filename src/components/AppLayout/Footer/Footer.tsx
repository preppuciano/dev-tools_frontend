import React from 'react';
import './Footer.scss';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
        <div className="footer__container__menu">
          <a href="https://github.com/preppuciano" target="_blank">
            <FooterButton>Contact</FooterButton>
          </a>
          <a href="https://github.com/preppuciano" target="_blank">
            <FooterButton>Contribute</FooterButton>
          </a>
        </div>
        <div className="footer__container__credits">
          <div>DevTools</div>
          <div>Website by <a href="https://github.com/preppuciano" target="_blank"><b>preppuciano</b></a></div>
        </div>
      </div>
    </div>
  );
}


interface FooterButtonProps {
  children: React.ReactNode;
}
function FooterButton(props: FooterButtonProps) {
  return (
    <div className='footer-button'>{props.children}</div>
  );
}