---
sidebar_position: 1
description: Introduction to Transeptor bundler

title: Introduction
---

:::important Transeptor bundler is in Alpha
Please note that while the software is fully functional, it is important to know that it may undergo frequent updates.

We invite you to actively participate in the development of this software. Visit our [GitHub repository](https://github.com/transeptorlabs/transeptor-bundler/issues) to get involved.
:::

## What is Transeptor bundler?

Transeptor bundler is a high-performance, modular ERC-4337 bundler designed to make smart accounts scalable and usable on Ethereum. Built in TypeScript with a functional programming foundation, it prioritizes security and developer experience. Transeptor helps abstract complexity so teams can build intuitive applications on top of Account Abstraction.

This project is maintained by **[Transeptor Labs](https://transeptorlabs.io/)**, an open-source collective building public-good infrastructure to support Ethereum's ERC-4337 ecosystem.

The projects long-term vision is > Run a node. Join the ecosystem. Help shape the future of account abstraction.
to:

- **Run it yourself** - Make it easy for anyone to run their own bundler node.
- **Promote bundler diversity and reduce centralization risks** — We are committed to decentralization by offering public bundlers anyone can use, and empowering developers to run and customize their own.
- **Bundler compatibility** - Maintain strict compatibility with [erc-4337/bundler-spec-test](https://www.erc4337.io/bundlers) to preserve the vision of a [Unified ERC-4337 mempool](https://notes.ethereum.org/@yoav/unified-erc-4337-mempool).
- **Embrace the Future** - Experiment safely with advanced features to push bundler UX and performance forward. Any system that can be written down can be realized.

By contributing to Transeptor bundler, you're helping build an open, composable infrastructure layer that strengthens Ethereum’s decentralization and usability without requiring any changes to the protocol.

## Why is Transeptor bundler needed?

ERC-4337 Bundlers are critical infrastructure for Ethereum’s Account Abstraction ecosystem. To ensure a healthy, decentralized bundler network, we need implementation diversity and lower the barrier to entry for anyone to run a bundler node.

That’s why we’re building and supporting an open source ERC-4337 bundler to expand bundler diversity and make it simple for new actors to participate in the network.

Having multiple bundler implementations improve the resilience, security, and decentralization of the Account Abstraction layer. If too many bundler operators rely on a single implementation, we create a central point of failure in terms of attack surface, bugs and vulnerabilities. Increasing the number of available implementations decreases the likelihood of network hauling and exploitation of userOps via censorship.

>Decentralized infra needs fault-tolerant systems and that starts with more than one bundler implementation.
