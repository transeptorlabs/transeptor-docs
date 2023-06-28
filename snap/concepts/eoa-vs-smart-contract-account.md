---
sidebar_position: 2
# id: learn
description: Learn about Smart Contract Accounts vs EOAs.

title: EOAs vs Smart Accounts
---

*5 minutes to learn about Smart Contract Accounts and EOAs.*

## Externally Owned Accounts (EOAs):
An Externally Owned Account (EOA) is the most common type on the Ethereum network. It is a basic account owned and controlled by a user, and a public/private key pair identifies it. EOAs allow users to send and receive Ether and other tokens and interact with smart contracts.

EOAs have several limitations that make them less suitable for mass adoption, including:

- **Lack of programmability**: EOAs have limitations when it comes to executing custom code on the Ethereum network. This restricts their capability to automate tasks or perform complex operations.
- **Risk of loss or theft**: If someone loses or compromises the private key associated with an EOA , it puts the account at risk. This can result in lost of funds associated with the account.

## Smart Accounts (ERC-4337):
Smart Accounts are a new type of account introduced by the ERC-4337 standard. ERC-4337 is a higher-layer infrastructure for Ethereum to allow account abstraction. This will allows user to use a smart contract account to handle all network interactions. ERC-4337 introduces a new transaction called a UserOperation. Users will send signed UserOperations to a network of nodes called a Bundlers.

Smart Accounts offer several advantages over EOAs that make them more suitable for mass adoption, including:

- **Programmability**: Can execute code on the network and provide new functionality for complex DApps.

- **Improved security**: Smart contracts can create ECDSA [signatures](https://eips.ethereum.org/EIPS/eip-1271), enabling wallet providers to build wallet recovery mechanisms into contracts. This helps reduce the number of users affected by fund loss due to mismanagement of EOA private keys.

- **Improved user experience**: ERC-4337 supports sponsor transactions for other users by introducing an actor called Paymasters. Paymaster User can allow paymaster. With paymaster users have gasless transactions or pay gas fees with ERC-20 tokens.
