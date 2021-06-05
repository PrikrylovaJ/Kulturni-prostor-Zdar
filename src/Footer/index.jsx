import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__email__phone">
        <a href="mailto:hello@kpz.cz">hello@kpz.cz</a>
        <p>tel: +420 739 622 622</p>
      </div>
      <div className="footer__address">
        <p>U Vinohradského pivovaru 15</p>
        <p>101 00 Praha 10</p>
      </div>
    </div>
  );
};
