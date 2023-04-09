---
sidebar_position: 1
id: intro
description: 5 minutes to learn the most important OpNode concepts.

title: 👋 Introduction
---
import { PopupButton } from '@typeform/embed-react'

*"OpNode is more than just a ERC-4337 Bundler - a vision for a more accessible and inclusive blockchain ecosystem."*

## Why is OpNode Needed?
The Ethereum ecosystem has grown significantly over the past few years, with more and more applications built on the network. However, this growth has also increased the complexity around users managing EOA. With the introduction of [EIP-4337](https://eips.ethereum.org/EIPS/eip-4337), the Ethereum ecosystem aims to allow users to use smart contract wallets containing arbitrary verification logic instead of EOAs as their primary account. The use of smart contracts can greatly improve the blockchain user experience and lay the foundation for features such as social recovery and gasless transactions.

One of the key challenges facing the mass adoption of EIP4347 is the need for Bundler diversity. EIP4347 infrastructure must allow any Bundler to participate in including account-abstracted user operations to make the infrastructure decentralized. 

We have developed OpNode, a TypeScript Bundler implementation compatible with multiple Ethereum clients, to address this challenge. OpNode is fully compliant with ERC-4337 and highly performant, enabling greater bundler diversity for the Ethereum network. With OpNode, builders can benefit from a more resilient and decentralized account abstraction infrastructure, equipping them will tools to handle future challenges of mass adoption.

## What is OpNode?
OpNode is a bundler implementation for the Ethereum client in TypeScript. OpNode supports a range of features and functionalities, including:

- **User Operation bundling**: OpNode allows any builder (think: block builder) to participate in the process of including account-abstracted user operations. Work with all activity happening over a public mempool.
- **Multi-client support**: OpNode is compatible with multiple Ethereum clients, enabling greater bundler diversity and resilience.
- **ERC-4337 compliant**: OpNode's bundler fully complies with the ERC-4337. Our bundler is highly performant, allowing for efficient and reliable transaction processing.

OpNode is open-source and freely available for builders in the Ethereum ecosystem. OpNode has the potential to significantly improve the Account abstraction infrastructure for the Ethereum network and enable greater innovation and growth in the ecosystem.

## How can I use OpNode?
OpNode is easy to set up and use, with a simple Docker-based deployment process that requires minimal configuration. To use OpNode, follow these steps:

1. Download and install the Ethereum client.
2. Download the OpNode docker image.
3. Run the OpNode docker image alongside your Ethereum client.
4. Start using OpNode to bundle your transactions and improve the efficiency and security of your Ethereum transactions.

OpNode is compatible with multiple Ethereum clients, making integrating with your existing infrastructure easy.

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
