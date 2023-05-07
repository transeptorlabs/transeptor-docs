---
sidebar_position: 1
id: intro
description: 5 minutes to learn the most important OpNode concepts.

title: 👋 Introduction
---
import { PopupButton } from '@typeform/embed-react'

*"OpNode is more than just a ERC-4337 Bundler - a vision for a more accessible and inclusive blockchain ecosystem."*

## Why is OpNode Needed?
The Ethereum ecosystem has grown significantly over the past few years, with more and more applications built on the network. However, this growth has also increased the complexity around users managing EOA. With the introduction of [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337), the Ethereum ecosystem aims to allow users to use smart contract wallets containing arbitrary verification logic instead of EOAs as their primary account. The use of smart contracts can greatly improve the blockchain user experience and lay the foundation for features such as social recovery and gasless transactions.

One of the key challenges facing the mass adoption of ERC-4337 is the need for Bundler diversity. ERC-4337 infrastructure must allow any Bundler to participate in including account-abstracted user operations to make the infrastructure decentralized. 

We have developed OpNode, a TypeScript Bundler implementation compatible with multiple Ethereum clients, to address this challenge. OpNode is fully compliant with ERC-4337 and highly performant, enabling greater bundler diversity for the Ethereum network. With OpNode, builders can benefit from a more resilient and decentralized account abstraction infrastructure, equipping them will tools to handle future challenges of mass adoption.

## What is OpNode?
OpNode is open-source and freely available for builders in the Ethereum ecosystem. It supports out-of-the-box modes catering to various use cases and preferences.

1. **Mempool support**: Determines the visibility of the UserOperations. The private mode will make visible to the Bundler that receives the UserOperation, while the public mode will allow the UserOperation to be propagated through the p2p network of Bundler nodes.
2. **EVM network**: The networks that the Bundler supports.
3. **Block building strategy**: The strategy used by the Bundler to send bundled UseOpersation on-chain while protecting them from front-running.

| Mode    | Mempool support                  | EVM Networks        | Block building strategy                                                    |
|---------|----------------------------------|---------------------|----------------------------------------------------------------------------|
| private | Private mempool of UserOperation | Ethereum and Goerli | Integrates with [flashbots](https://docs.flashbots.net/) to send bundled UserOperations to block builders |
| public  | p2p public mempool               | Ethereum and Goerli | Integrates with [flashbots](https://docs.flashbots.net/) to send bundled UserOperations to block builders |

## How can I use OpNode?
OpNode is easy to set up and use, with a simple Docker-based deployment process that requires minimal configuration. To use OpNode, follow these steps:

1. Download the OpNode docker image.
2. Run the OpNode docker image in a docker container.
3. Start using OpNode to bundle user operation.

<div className="button-left">
    <PopupButton id="fEY6nXV1" style={{ fontSize: 20 }} className="button button--primary button--lg"
        onReady={() => {
            console.log('form ready')
        }}>
        Sign up for our waiting list ⏱️
    </PopupButton>
</div>


## Contact us
1. Open an issue of OpNode [Github](https://github.com/opnode)
2. Tweet us on [Twitter](https://twitter.com/OpNode)
