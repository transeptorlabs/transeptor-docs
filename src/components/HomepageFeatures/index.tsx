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
      <>Transeptor is easy to set up and use, with a simple Docker-based runtime environnement that requires minimal configuration.</>
    ),
  },
  {
    title: 'Standalone Bundler',
    Svg: require('@site/static/img/multi-client-support.svg').default,
    description: (
      <>Transeptor is a standalone Bundler that does not require you to be a block builder to participate in the Bundler p2p network. Enabling any actor to participate promotes Decentralization.</>
    ),
  },
  {
    title: 'ERC-4337 compliant',
    Svg: require('@site/static/img/compliant.svg').default,
    description: (
      <>Transeptor's bundler is fully compliant with the ERC-4337. Our bundler is highly performant, allowing for efficient and reliable transaction processing.</>
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
      <h2 className="text--center">Features</h2>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
