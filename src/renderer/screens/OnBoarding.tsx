import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

import '../index.css';

export default function OnBoarding() {
  return (
    <div className="screen spaced-components">
      <Carousel
        showThumbs={false}
        showStatus={false}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            marginTop: 40,
            marginLeft: 10,
            color: '#ccc',
            cursor: 'pointer',
            display: 'inline-block',
            fontSize: '2em',
          };
          const style = isSelected
            ? { ...defStyle, color: '#000' }
            : { ...defStyle };
          return (
            <div
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            >
              •
            </div>
          );
        }}
      >
        <div>
          <img src={require('../assets/onboarding/slider-img-1.jpg')} />
          <h2>Secured Forever</h2>
          <p style={{ marginBottom: 80 }}>
            Adipisicing Lorem laboris est in commodo pariatur labore incididunt
            qui aliqua.
          </p>
        </div>
        <div>
          <img src={require('../assets/onboarding/slider-img-2.jpg')} />
          <h2>Secured Forever</h2>
          <p style={{ marginBottom: 80 }}>
            Adipisicing Lorem laboris est in commodo pariatur labore incididunt
            qui aliqua.
          </p>
        </div>
        <div>
          <img src={require('../assets/onboarding/slider-img-2.jpg')} />
          <h2>Secured Forever</h2>
          <p style={{ marginBottom: 80 }}>
            Adipisicing Lorem laboris est in commodo pariatur labore incididunt
            qui aliqua.
          </p>
        </div>
      </Carousel>
      <div className="btn-link">
        <Link to="/signin" className="btn-link-text">
          GET STARTED
        </Link>
      </div>
    </div>
  );
}
