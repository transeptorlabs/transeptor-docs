import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { PopupButton } from '@typeform/embed-react'

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">Unlock the Full Potential of Account Abstraction</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <PopupButton id="fEY6nXV1" style={{ fontSize: 20 }} className="button button--secondary button--lg"
            onReady={() => {}}>
            Sign up for our waiting list ⏱️
          </PopupButton>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A modular Typescript ERC-4337 Open Source Bundler, designed with a strong emphasis on performance.">
        <meta name="twitter:title" content={`${siteConfig.title}`}/>
        <meta name="twitter:description" content="A modular Typescript ERC-4337 Open Source Bundler, designed with a strong emphasis on performance."/>
      {/* TODO: Add  og:image, twitter:image*/}
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
