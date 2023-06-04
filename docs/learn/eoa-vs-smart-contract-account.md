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
