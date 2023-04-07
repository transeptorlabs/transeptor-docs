import React from 'react';
import clsx from 'clsx';

import sharedStyles from '../component.module.css';
import styles from './styles.module.css';

export default function AboutpageDetails(): JSX.Element {
  return (
    <section className={sharedStyles.section}>
        <div className="container">
          {/* Columns are always 50% wide, on mobile and desktop */}
          <div className="row">
            <div className="col col-6">
              <h2>Our driving force</h2>
              <p>At OpNode, we believe in a future where blockchain technology is accessible to everyone and can empower builders to create a better world.
                We achieve this by building wallet infrastructure that make it easy for developers and users to participate in the Ethereum network and create decentralized applications.
                Our goal is to make the Ethereum network more accessible and scalable, thereby helping to drive mass adoption of blockchain technology.</p>
              <p>Join us in building a more accessible, decentralized, and secure future for all!</p>
            </div>
            <div className="col col-6">
              <img src={require('@site/static/img/mission.jpg').default} alt="Group of people holding blocks" />
            </div>
          </div>
          
        </div>
    </section>
  );
}
