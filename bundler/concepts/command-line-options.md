---
sidebar_position: 2
description: Learn about all command line arguments supported by the Transeptor.

title: Command line Options 
---

List of all command line arguments supported by the bundler.

|       **Option**       |  **Type** |                                                                                      **Description**                                                                                     | **Default Value**                                |
|:----------------------:|:---------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|--------------------------------------------|
| `--httpApi`            | `string`  | rpc method name spaces                                                                                                                                                                   | web3,eth                                   |
| `--network`            | `string`  | eth client url                                                                                                                                                                           | http://localhost:8545                      |
| `entryPoint`           | `number`  | supported entry point address                                                                                                                                                            | 0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789 |
| `--minBalance`         | `number`  | min ETH balance for signer account                                                                                                                                                       | 1                                          |
| `--maxBundleGas`       | `number`  | max gas the bundler will use in transactions                                                                                                                                             | 5000000                                    |
| `--auto`               | `boolean` | automatic bundling                                                                                                                                                                       | false                                      |
| `--autoBundleInterval` | `number`  | auto bundler interval in (ms)                                                                                                                                                            | 120000                                     |
| `--bundleSize`         | `number`  | maximum # of pending mempool entities                                                                                                                                                    | 10                                         |
| `--port`               | `number`  | server listening port                                                                                                                                                                    | 3000                                       |
| `--minUnstakeDelay`    | `number`  | time paymaster has to wait to unlock the stake(seconds)                                                                                                                                  | 0                                          |
| `--minStake`           | `number`  | minimum stake a entity has to have to pass reputation system(When staked, an entity is also allowed to use its own associated storage, in addition to senders associated storage as ETH) | 1                                          |
| `--txMode`             | `string`  | bundler transaction mode (base, conditional, searcher)                                                                                                                                   | base                                       |
| `--unsafe`             | `boolean` | UNSAFE mode: no storage or opcode checks (safe mode requires debug_traceCall support on eth node. Only base and conditional txMode are supported in safe mode)                           | false                                      |
| `--p2p`                | `boolean` | p2p mode enabled                                                                                                                                                                         | false                                      |
