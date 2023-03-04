import { useState } from 'react';
import { Link } from 'react-router-dom';

import '../index.css';
import '../components/components.css';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="screen spaced-components">
      <div>
        <img
          src={require('../assets/onboarding/slider-img-2.jpg')}
          className="signin-image"
        />
        <h2>Sign In</h2>
        <div>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="input-field"
            placeholder="Email"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="input-field"
            placeholder="********"
          />
        </div>
      </div>
      <div className="btn-link signin-btn">
        <Link to="/home" className="btn-link-text">
          Sign in
        </Link>
      </div>
    </div>
  );
}
