import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy-to-use.svg').default,
    description: (
      <>
      OpNode is easy to set up and use, with a simple Docker-based deployment process that requires minimal configuration.
      </>
    ),
  },
  {
    title: 'ERC-4337 compliant',
    Svg: require('@site/static/img/compliant.svg').default,
    description: (
      <>
        OpNode's bundler is fully compliant with the ERC-4337. Plus, our bundler is highly performant, allowing for efficient and reliable transaction processing.
      </>
    ),
  },
  {
    title: 'Multi-client support',
    Svg: require('@site/static/img/multi-client-support.svg').default,
    description: (
      <>
        OpNode is compatible with multiple Ethereum clients, enabling greater bundler diversity and resilience.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
