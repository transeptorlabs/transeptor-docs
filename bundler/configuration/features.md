---
sidebar_position: 1
description: List of all features supported by Transeptor bundler

title: Features
---

# Features

## Entrypoint contract

Supports Entrypoint contract [releases/v0.8](https://github.com/eth-infinitism/account-abstraction/tree/releases/v0.8).

### Legacy Entrypoint support

> :warning: **If you are using an older version of the EntryPoint contract, please refer to the links below. We only provide support for the most recent release of our software. We strongly recommend updating your smart contract to use [Entrypoint releases/v0.8](https://github.com/eth-infinitism/account-abstraction/tree/releases/v0.8). For more information, see our [Security Policy](https://github.com/transeptorlabs/transeptor-bundler/security/policy).**

**Legacy Transeptor bundler releases:**

- Compatible with [Entrypoint releases/v0.7](https://github.com/eth-infinitism/account-abstraction/tree/releases/v0.7): [Transeptor v0.11.0-alpha.0](https://github.com/transeptorlabs/transeptor-bundler/tree/v0.11.0-alpha.0)
- Compatible with [Entrypoint releases/v0.6](https://github.com/eth-infinitism/account-abstraction/tree/releases/v0.6): [Transeptor v0.5.3-alpha.0](https://github.com/transeptorlabs/transeptor-bundler/tree/v0.5.3-alpha.0)

## Geth ERC-7562 Tracer

Supports native tracer to enforce [ERC-7562: Account Abstraction Validation Scope Rules](https://eips.ethereum.org/EIPS/eip-7562).

## EIP-7702 authorizations

On networks with [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702) enabled, the `eth_sendUserOperation` method accepts an extra `eip7702Auth` parameter. Transeptor bundler include all UserOperations that require `eip7702Auth` in a bundle to the `authorizationList` and executes the bundle using a transaction `type 4`.

## UserOp lifecycle audit trail

The bundler provides comprehensive audit trail logging to track UserOperations as they progress through the bundle lifecycle. The audit trail captures detailed logging for each stage: `userOpReceived`, `userOpRejected`, `userOpIncludedInMempool` and `userOpSubmittedOnChain`. Each stage includes timestamps, status changes, error conditions, enabling operators to monitor, debug, and analyze bundler behavior with full traceability. Sensitive data such as `signature`, `callData`, `factoryData`, and `eip7702Auth` are redacted as `0x_REDACTED` in logs to prevent revealing user operation on-chain intent and protect user privacy.

> The bundler is configured to disable audit trail by default and can be enabled via the `--auditTrail true` CLI flag.

## Metrics

Transeptor bundler can be configured to store metrics using a push(InfluxDB) metrics system. Grafana is used to visualize all the metrics. Use `--metrics` flag to enable. Checkout [metric](../monitoring/metrics) for more information on configuration.

## Entity Reputation System

The bundler can be pre-configured to [blacklist(computing)](<https://en.wikipedia.org/wiki/Blacklist_(computing)>) and [whitelist(computing)](https://en.wikipedia.org/wiki/Whitelist) entities on startup.

## MEV Protection

Transeptor bundler supports MEV (Maximal Extractable Value) protection through **searcher mode**, which sends bundles to [Flashbots](https://www.flashbots.net/) using `eth_sendPrivateTransaction`. This prevents front-running and sandwich attacks.

### Transaction Modes

- **Searcher Mode** (`--txMode searcher`): Bundles are sent to Flashbots for MEV protection
- **Base Mode** (`--txMode base`): Bundles are broadcast to the public mempool

:::warning MEV Exposure in Base Mode
Running the bundler in base mode will expose transactions to MEV as they are broadcast to the public mempool and can be front-run. For production deployments, it's recommended to use searcher mode for MEV protection.
:::

See more on the support modes on [Running Transeptor bundler](../configuration/configuration-options#modes).

## P2P Mempool

:::info Coming Soon
P2P mempool support is planned for future releases. This feature will enable decentralized UserOperation sharing between bundlers creating a [Unified ERC-4337 mempool](https://notes.ethereum.org/@yoav/unified-erc-4337-mempool).
:::
