import React from "react";
import Link from "@docusaurus/Link";
import styles from "./DocsDashboard.module.css";

export type ProductCard = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
  features: {
    title: string;
    link: string;
    description: string;
  }[];
};

const products: ProductCard[] = [
  {
    id: "bundler",
    title: "Bundler",
    description: "ERC-4337 Account Abstraction Bundler",
    icon: "📦",
    color: "#6366f1",
    link: "/bundler/get-started",
    features: [
      {
        title: "Installation",
        link: "/bundler/installation",
        description: "Install Transeptor bundler using Docker or build from source.",
      },
      {
        title: "Features",
        link: "/bundler/configuration/features",
        description: "List of all features supported by Transeptor bundler.",
      },
      {
        title:"Transaction modes",
        link: "/bundler/configuration/configuration-options#modes",
        description: "List of all transaction modes supported by Transeptor bundler.",
      },
      {
        title:"Network support",
        link: "/bundler/configuration/networks",
        description: "List of all networks supported by Transeptor bundler.",
      },
      {
        title: "Command line Options",
        link: "/bundler/configuration/configuration-options#command-line-arguments",
        description: "List of all CLI options supported by Transeptor bundler.",
      },
      {
        title: "Supported RPC methods",
        link: "/bundler/rpc-methods/eth-namespace",
        description: "List of all RPC methods supported by Transeptor bundler.",
      },
      {
        title: "Monitoring",
        link: "/bundler/monitoring/metrics",
        description: "Monitor your bundler performance and health.",
      },
    ],
  },
];

export default function DocsDashboard(): JSX.Element {
  return (
    <div className={styles.dashboard}>
      <div className="container">
        {/* Welcome Section */}
        <div className={styles.welcomeSection}>
          <h1 className={styles.welcomeTitle}>Welcome to Transeptor Docs</h1>
          <p className={styles.welcomeSubtitle}>
            Comprehensive documentation for Transeptor's ecosystem of Ethereum infrastructure tools
          </p>
        </div>

        {/* Products Grid */}
        <div className={styles.productsGrid}>
          {products.map((product) => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productHeader}>
                <div 
                  className={styles.productIcon}
                  style={{ backgroundColor: product.color }}
                >
                  {product.icon}
                </div>
                <div className={styles.productInfo}>
                  <h2 className={styles.productTitle}>{product.title}</h2>
                  <p className={styles.productDescription}>{product.description}</p>
                </div>
              </div>
              
              <div className={styles.productFeatures}>
                <h3 className={styles.featuresTitle}>Quick Links</h3>
                <div className={styles.featuresGrid}>
                  {product.features.map((feature, index) => (
                    <Link
                      key={index}
                      className={styles.featureCard}
                      to={feature.link}
                    >
                      <h4 className={styles.featureTitle}>{feature.title}</h4>
                      <p className={styles.featureDescription}>
                        {feature.description}
                      </p>
                    </Link>
                  ))}
                </div>
                <div className={styles.productActions}>
                  <Link
                    className={styles.viewAllButton}
                    to='/bundler'
                  >
                    View Bundler Documentation →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Getting Started Section */}
        <div className={styles.gettingStartedSection}>
          <h2 className={styles.sectionTitle}>Getting Started</h2>
          <div className={styles.gettingStartedGrid}>
            <div className={styles.gettingStartedCard}>
              <h3>Quick Start</h3>
              <p>Get up and running with Transeptor Bundler in minutes</p>
              <Link to="/bundler/get-started#quick-start" className={styles.actionLink}>
                Start Here →
              </Link>
            </div>
            <div className={styles.gettingStartedCard}>
              <h3>RPC Methods Reference</h3>
              <p>Explore the complete RPC methods documentation for Transeptor bundler</p>
              <Link to="/bundler/category/rpc-methods" className={styles.actionLink}>
                View RPC Methods →
              </Link>
            </div>
            <div className={styles.gettingStartedCard}>
              <h3>Configuration</h3>
              <p>Learn about configuration options and best practices</p>
              <Link to="/bundler/category/configuration" className={styles.actionLink}>
                Configure →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 