---
sidebar_position: 1
id: intro
description: 5 minutes to learn the most important Transeptor concepts.

title: 👋 Introduction
---
import { PopupButton } from '@typeform/embed-react'

*"Transeptor is more than just a ERC-4337 Bundler - a vision for a more accessible and inclusive blockchain ecosystem."*

## Why is Transeptor Needed?
The Ethereum ecosystem has grown significantly over the past few years, with more and more applications built on the network. However, this growth has also increased the complexity around users managing EOA. With the introduction of [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337), the Ethereum ecosystem aims to allow users to use smart contract wallets containing arbitrary verification logic instead of EOAs as their primary account. The use of smart contracts can greatly improve the blockchain user experience and lay the foundation for features such as social recovery and gasless transactions.

One of the crucial components of the ERC-4337 is bundlers, which are the infrastructure of Account Abstraction. The ERC-4337 Bundler ecosystem needs bundler diversity and the ability to allow any actor to participate effortlessly in the bundling process. The more bundlers nodes participating in the Bundler network, the more decentralized and censorship-resistant the account abstraction layer can be.

We are actively supporting the development of an ERC-4337 standalone bundler to address the challenges that face the ERC-4337 ecosystem. By taking advantage of the growing ecosystem around ERC-4337 and making an open-source bundler, we can support a decentralized, secure account abstraction layer, thus promoting the adoption of account abstraction for developers and users.
## What is Transeptor?
Transeptor is open-source and freely available for builders in the Ethereum ecosystem. It supports out-of-the-box modes catering to various use cases and preferences.

1. **Mempool support**: Determines the visibility of the UserOperations. The private mode will make visible to the Bundler that receives the UserOperation, while the public mode will allow the UserOperation to be propagated through the p2p network of Bundler nodes.
2. **EVM network**: The networks that the Bundler supports.
3. **Block building strategy**: The strategy used by the Bundler to send bundled UseOpersation on-chain while protecting them from front-running.

| Mode    | Mempool support                  | EVM Networks        | Block building strategy                                                    |
|---------|----------------------------------|---------------------|----------------------------------------------------------------------------|
| private | Private mempool of UserOperation | Ethereum and Goerli | Integrates with [flashbots](https://docs.flashbots.net/) to send bundled UserOperations to block builders |
| public  | p2p public mempool               | Ethereum and Goerli | Integrates with [flashbots](https://docs.flashbots.net/) to send bundled UserOperations to block builders |

## How can I use Transeptor?
Transeptor is easy to set up and use, with a simple Docker-based deployment process that requires minimal configuration. To use Transeptor, follow these steps:

1. Download the Transeptor docker image.
2. Run the Transeptor docker image in a docker container.
3. Start using Transeptor to bundle user operation.

<div className="button-left">
    <PopupButton id="fEY6nXV1" style={{ fontSize: 20 }} className="button button--primary button--lg"
        onReady={() => {
            console.log('form ready')
        }}>
        Sign up for our waiting list ⏱️
    </PopupButton>
</div>


## Contact us
1. Open an issue of Transeptor [Github](https://github.com/transeptorlabs/transeptor-bundler)
2. Tweet us on [Twitter](https://twitter.com/transeptorlabs)
