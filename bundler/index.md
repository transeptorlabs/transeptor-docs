---
# sidebar_position: 1
# id: bundler-intro
# description: 5 minutes to learn the most important Transeptor concepts.

title: Introduction
---
import { PopupButton } from '@typeform/embed-react'

## Why is Transeptor Needed? 
More applications are being built on the Ethereum ecosystem, expanding its reach. But, this growth has made it more complex for users to manage their EOA (Externally Owned Accounts). A new proposal called ERC-4337 aims to simplify this process by allowing users to use smart contract wallets instead of EOAs.

One of the crucial components of the ERC-4337 is Bundlers, which are the infrastructure of Account Abstraction. The ERC-4337 Bundler ecosystem needs bundler diversity and the ability to allow any actor to take part in the bundling process. We are supporting the development of an ERC-4337 bundler to increase Bundler diversity in the ERC-4337 ecosystem.

## What is Transeptor?
Transeptor is a modular Typescript ERC-4337 Bundler, designed with a strong emphasis on performance. It offers a wide range of bundling mode to to fit your needs.

1. **Mempool support**: Determines the visibility of the UserOperations.
2. **EVM network**: The networks that the Bundler supports.
3. **Block building strategy**: The strategy used by the Bundler to send bundled UseOperations.
4. **Front-running protection**: Does the strategy to send bundles protect the UseOperations from front-running.

| Mode | Mempool support | EVM Networks | Block building strategy | Front-running protection |
| --- | --- | --- | --- | --- |
| **base | Private mempool of UserOperation | All EVM clients | Uses eth_sendRawTransaction RPC | no |
| **searcher | *p2p public mempool or private mempool | Ethereum and Goerli | Uses [Flashbots](https://docs.flashbots.net/flashbots-auction/searchers/quick-start) to send bundled UserOperations to block builders | yes |
| **conditional | *p2p public mempool or private mempool | EVM clients that support conditional transactions | Uses [eth_sendRawTransactionConditional](https://notes.ethereum.org/@yoav/SkaX2lS9j) RPC | yes |

*You can run with p2p enabled excluding private mode. Base mode should not run in production since it does not protect bundled transaction from front-running.

**active development

## Contact us
1. Open an issue of Transeptor [Github](https://github.com/transeptorlabs/transeptor-bundler)
2. Tweet us on [Twitter](https://twitter.com/transeptorlabs)
