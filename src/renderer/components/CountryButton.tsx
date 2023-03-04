import React, { useEffect, useState } from 'react';
import { faCheck, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './components.css';

type CountryButtonProps = {
  country: string;
  setCountry: (country: string) => void;
};

type CountryItemProps = {
  name: string;
  checked: boolean;
  image: string;
  setCountry: (text: string) => void;
};

function CountryItem({ name, checked, image, setCountry }: CountryItemProps) {
  return (
    <div className="country-item-container" onClick={() => setCountry(name)}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <img className="country-img" src={image} />
        <p style={{ fontSize: '12px', padding: '0px', margin: '0px' }}>
          {name}
        </p>
      </div>
      <div className={checked ? 'active-country' : ''}>
        <FontAwesomeIcon icon={faCheck} color="#fff" size="sm" />
      </div>
    </div>
  );
}

export default function CountryButton({
  country,
  setCountry,
}: CountryButtonProps) {
  const [countryModalActive, toggleCountryModal] = useState(false);
  const countries = [
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png',
      name: 'New York,NY',
      get checked() {
        return this.name === country;
      },
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png',
      name: 'London',
      get checked() {
        return this.name === country;
      },
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png',
      name: 'Moscow',
      get checked() {
        return this.name === country;
      },
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png',
      name: 'Japan',
      get checked() {
        return this.name === country;
      },
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png',
      name: 'United Kingdom',
      get checked() {
        return this.name === country;
      },
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png',
      name: 'Germany',
      get checked() {
        return this.name === country;
      },
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png',
      name: 'Netherlands',
      get checked() {
        return this.name === country;
      },
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png',
      name: 'Canada',
      get checked() {
        return this.name === country;
      },
    },
  ];

  function handleShowCountryModal() {
    if (countryModalActive) {
      setTimeout(function () {
        toggleCountryModal(false);
      }, 2000);
    } else {
      toggleCountryModal(true);
    }
  }

  useEffect(() => {
    if (countryModalActive) {
      setTimeout(function () {
        document
          .querySelector('.countries-list-wrapper')
          ?.classList.add('countries-list-wrapper-active');
      }, 0);
    } else {
      setTimeout(function () {
        document
          .querySelector('.countries-list-wrapper')
          ?.classList.remove('countries-list-wrapper-active');
      }, 0);
    }
  }, [countryModalActive, toggleCountryModal]);
  return (
    <div>
      <div className="country-field" onClick={handleShowCountryModal}>
        <img
          className="country-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/United-states_flag_icon_round.svg/2048px-United-states_flag_icon_round.svg.png"
        />
        <p className="country-name">{country}</p>
        <FontAwesomeIcon icon={faChevronDown} color="#000" size="sm" />
      </div>
      {countryModalActive && (
        <div className="countries-list-container">
          <div
            className="empty-section"
            onClick={() => toggleCountryModal(false)}
          />
          <div className="countries-list-wrapper">
            <p className="select-title">Pick your server</p>
            <div className="countries-list">
              {countries.map((item, index) => (
                <CountryItem {...item} key={index} setCountry={setCountry} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
