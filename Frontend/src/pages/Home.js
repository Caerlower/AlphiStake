import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'; // CSS for styling the Home component

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <h1>Welcome to AlphiStake</h1>
        <p>Creating a user friendly experience in the process of staking.</p>
      </div>

        <div className="feature">
          <h3>Staking</h3>
          <p>Stake your tokens to earn rewards and support the decentralized economy of Alephium.</p>
          <Link to="/staking" className="btn btn-primary">Stake Now</Link>
        </div>

      </div>
  );
};

export default Home;
