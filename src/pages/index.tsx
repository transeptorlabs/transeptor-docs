import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";

import styles from './index.module.css';
import BundlerFeatures from '../components/bundler-features';
import SnapFeatures from '../components/snap-features';
import LearnFeatures from '../components/learn-features';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Transeptor Labs builder documentation</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <Link className="button button--secondary button--lg" to="/bundler">
          Get started
        </Link>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Transeptor Labs builder documentation">
        <meta name="twitter:title" content={`${siteConfig.title}`}/>
        <meta name="twitter:description" content="Transeptor Labs builder documentation"/>
      {/* TODO: Add  og:image, twitter:image*/}
      <HomepageHeader />
      <main>
        <BundlerFeatures />
        <SnapFeatures />
        <LearnFeatures />
      </main>
    </Layout>
  );
}
