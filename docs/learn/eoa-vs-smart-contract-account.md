---
sidebar_position: 2
id: learn
description: Learn about Smart Contract Accounts vs EOAs.

title: EOAs vs Smart Accounts
---

*5 minutes to learn about Smart Contract Accounts and EOAs.*

## Externally Owned Accounts (EOAs):
An Externally Owned Account (EOA) is the most common type on the Ethereum network. It is a basic account owned and controlled by a user, and a public/private key pair identifies it. EOAs allow users to send and receive Ether and other tokens and to deploy and interact with smart contracts.

EOAs have several limitations that make them less suitable for mass adoption, including:

- **Limited functionality**: EOAs can only send and receive Ether or tokens on the Ethereum network. They cannot execute code, store data, or perform complex operations like smart contract accounts.
- **Lack of programmability**: EOAs cannot execute custom code, which limits their ability to automate tasks or perform complex operations on the Ethereum network.
- **Risk of loss or theft**: EOAs are vulnerable if the private key associated with the account is compromised or lost, resulting in the loss of all funds associated with the account.

## Smart Accounts (ERC-4337):

Smart Accounts are a new type of account introduced by the ERC-4337 standard. ERC-4337 is a new protocol feature that changes the bottom-layer transaction type; this proposal introduces a higher-layer transaction object called a UserOperation. Users can broadcast signed UserOperation objects into a separate mempool where a decentralized network of actors named Bundlers sends their transactions to block builders.

Smart Accounts offer several advantages over EOAs that make them more suitable for mass adoption, including:

- **Improved security**:Smart contracts can produce ECDSA [signatures](https://eips.ethereum.org/EIPS/eip-1271), allowing wallet providers to build wallet Recovery mechanisms into contracts, cutting down on the number of users effect by loss of funds from the mismanagement of EOA's private keys.
- **Improved user experience**:  ERC-4337 supports sponsor transactions for other users by introducing an actor called Paymasters. Paymasters can allow dapp developers to subsidize fees for their users, allowing users to pay fees with ERC-20 tokens on a monthly/yearly basis and many other use cases waiting for discovery.

## Honoring the Legacy of EOAs as Ethereum Evolves
Externally Owned Accounts (EOAs) have played a crucial role in developing the Ethereum ecosystem and have enabled users to participate in the network since its inception. EOAs have allowed for the easy transfer of Ether and other tokens on the Ethereum network and have allowed users to interact with decentralized applications (dApps) simply and intuitively. The ease of use and accessibility of EOAs has been instrumental in driving the initial growth of the Ethereum ecosystem and have helped to build a strong community around the technology.

However, as the Ethereum ecosystem has grown and matured, it has become clear that EOAs have some limitations that make it difficult to support the mass adoption of the technology. EOAs need more programmability and flexibility to make them well-suited for more complex use cases that require the execution of custom code or the management of more complex financial instruments.

As a result, the Ethereum ecosystem has begun to move away from EOAs and towards smart contract accounts, which are programmable accounts that can execute code on the Ethereum network. Smart contract accounts offer a wide range of functionality and flexibility, and can be used to build complex decentralized applications that can manage assets, execute code, and interact with other smart contracts on the network.

While the move towards smart contract accounts is necessary to support the growth of the Ethereum ecosystem and enable mass adoption of the technology, it is important to remember the important role that EOAs have played in developing the technology. EOAs have been instrumental in building the Ethereum community and enabled users to participate in the network from the beginning. While the focus has shifted towards smart contract accounts, EOAs will continue to play an important role in the Ethereum ecosystem and will remain an essential tool for interacting with the network.