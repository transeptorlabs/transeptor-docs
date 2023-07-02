---
sidebar_position: 3
description: Learn about all bundling modes supported by the Transeptor.

title: Bundling modes
---

Transeptor offers a wide range of bundling modes to fit your needs. Use `--txMode` to send the bundling mode when starting the bundler.

1. **Mempool support**: Determines the visibility of the UserOperations.
2. **EVM network**: The networks that the Bundler supports.
3. **Block building strategy**: The strategy the Bundler uses to send bundled UseOperations.
4. **Front-running protection**: Does the strategy to send bundles to protect the UseOperations from front-running

| --txMode | Mempool support | EVM Networks | Block building strategy | Front-running protection |
| --- | --- | --- | --- | --- |
| base | Private mempool of UserOperation | All EVM clients | Uses eth_sendRawTransaction RPC | no |
| **searcher | p2p public mempool or private mempool | Ethereum and Goerli | Uses [Flashbots](https://docs.flashbots.net/flashbots-auction/searchers/quick-start) to send bundled UserOperations to block builders | yes |
| conditional | p2p public mempool or private mempool | EVM clients that support conditional transactions | Uses [eth_sendRawTransactionConditional](https://notes.ethereum.org/@yoav/SkaX2lS9j) RPC | yes |

**active development

**Note that p2p is not fully supported and is in active development; all modes will default using a private mempool.**