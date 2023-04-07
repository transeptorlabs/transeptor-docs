import React from 'react';
import clsx from 'clsx';

import sharedStyles from '../component.module.css';
import styles from './styles.module.css';

export default function AboutpageHero(): JSX.Element {
  return (
    <section className={sharedStyles.section}>
    <div className="container">
      <div className="row">
        <div className="col">
          <h2 className={styles.quote}>"OpNode is more than just a bundler implementation - it's a vision for a more accessible and inclusive blockchain ecosystem".</h2>
        </div>
      </div>
    </div>
  </section>
  );
}
