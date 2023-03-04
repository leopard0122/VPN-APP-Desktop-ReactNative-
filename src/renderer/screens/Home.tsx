import { useState } from 'react';
import VpnButton from '../components/VpnButton';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import CountryButton from '../components/CountryButton';

export default function Home() {
  const [country, setCountry] = useState('New York,NY');
  return (
    <div className="screen spaced-components">
      <div className="header-bar">
        <div />
        <h4 className="vpn-text">VPN</h4>
        <Link to="/" className="logout-btn">
          <FontAwesomeIcon icon={faArrowRightFromBracket} color="#000" />
        </Link>
      </div>
      <div style={{ justifyContent: 'center', alignItems: 'center' }}>
        <VpnButton />
      </div>
      <div>
        <CountryButton country={country} setCountry={setCountry} />
      </div>
    </div>
  );
}
