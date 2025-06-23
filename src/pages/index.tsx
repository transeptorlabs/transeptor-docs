import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import DocsDashboard from "../components/DocsDashboard";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="Transeptor Documentation" description={siteConfig.tagline}>
      <meta name="twitter:title" content={`${siteConfig.title} Documentation`} />
      <meta name="twitter:description" content={siteConfig.tagline} />
      <main>
        <DocsDashboard />
      </main>
    </Layout>
  );
}
