---
sidebar_position: 1
description: List of all features supported by Transeptor bundler

title: Features
---

# Features

## Metrics

Transeptor bundler can be configured to store metrics using a push(InfluxDB) and pull(Prometheus) metrics system. Grafana is used to visualize all the metrics. Use `--metrics` flag to enable.

## Entity Reputation System

When staked(i.e., with an entrypoint contract), an entity can also use its own associated storage and senders' associated storage as ETH. The bundler can be pre-configured to [blacklist(computing)](https://en.wikipedia.org/wiki/Blacklist_(computing)) and [whitelist(computing)](https://en.wikipedia.org/wiki/Whitelist) entities on startup.

## Geth ERC-7562 Tracer

Supports native tracer to enforce [ERC-7562: Account Abstraction Validation Scope Rules](https://eips.ethereum.org/EIPS/eip-7562). [accountabstraction/geth-with-erc7562-tracer](https://hub.docker.com/r/accountabstraction/geth-with-erc7562-tracer) node.

## Entrypoint contract

Supports Entrypoint contract [releases/v0.8](https://github.com/eth-infinitism/account-abstraction/tree/releases/v0.8).

### Legacy Entrypoint support

> :warning: **If you are using an older version of EntryPoint, please refer to the links below. We only provide support for the most recent release of our software. We strongly recommend updating your smart contract to use [Entrypoint releases/v0.8](https://github.com/eth-infinitism/account-abstraction/tree/releases/v0.8). For more information, see our [Security Policy](https://github.com/transeptorlabs/transeptor-bundler/security/policy).**
>

**Legacy Transeptor bundler releases:**
- Compatible with [Entrypoint releases/v0.7](https://github.com/eth-infinitism/account-abstraction/tree/releases/v0.7): [Transeptor v0.11.0-alpha.0](https://github.com/transeptorlabs/transeptor-bundler/tree/v0.11.0-alpha.0)
- Compatible with [Entrypoint releases/v0.6](https://github.com/eth-infinitism/account-abstraction/tree/releases/v0.6): [Transeptor v0.5.3-alpha.0](https://github.com/transeptorlabs/transeptor-bundler/tree/v0.5.3-alpha.0)

## EIP-7702 authorizations

On networks with [EIP-7702](https://eips.ethereum.org/EIPS/eip-7702) enabled, the `eth_sendUserOperation` method accepts an extra `eip7702Auth` parameter. Transeptor bundler include all UserOperations that require `eip7702Auth` in a bundle to the `authorizationList` and execute the bundle using a transaction `type 4`.

## UserOp lifecycle audit trail

The bundler provides comprehensive audit trail logging to track UserOperations as they progress through the bundle lifecycle. The audit trail captures detailed logging for each stage: `userOpReceived`, `userOpValidationStarted`, `userOpValidated`, `userOpValidationFailed`, `userOpIncluded`, `userOpSubmittedOnChain`, `userOpOnChainReceipt`, and `userOpRejected`. Each stage includes timestamps, status changes, error conditions, enabling operators to monitor, debug, and analyze bundler behavior with full traceability. Sensitive data such as `signature`, `callData`, `factoryData`, and `eip7702Auth` are redacted as `0x_REDACTED` in logs to prevent revealing user operation on-chain intent and protect user privacy.

## p2p mempool

Coming soon.

To run Transeptor bundler with [ERC-7562: Account Abstraction Validation Rules](https://eips.ethereum.org/EIPS/eip-7562), a fully synced geth node node must be running alongside the bundler. Both options require the node to be enabled with `debug_traceCall`.
