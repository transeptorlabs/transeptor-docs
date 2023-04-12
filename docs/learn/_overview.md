---
sidebar_position: 1
id: erc4337-overview
description: High level overview of ERC-4337.

title:  ERC-4337 Overview
---

## What is ERC-4337
ERC-4337 is a new protocol feature that changes the bottom-layer transaction type; this proposal introduces a higher-layer transaction object called a UserOperation. Users can broadcast signed UserOperation objects into a separate mempool where a decentralized network of actors named Bundlers relays their transactions to block builders via a singleton smart contract instance called an Entrypoint. ERC-4337  also allows users to have their transaction fees subsidized by application developers and enable users to pay fees with ERC-20 token.

### UserOperation Type
Users package up the action they want their account to take in an ABI-encoded struct called a UserOperation:
 
// image

## Main components
There are five main components to ERC-4337: a `UserOperation`, `Bundler`, `EntryPoint Contract`, `Wallet(Account)`, and `Paymaster Contract`.

1. **Wallet(Account)**
    - Wallet contract - a contract representing a user smart contract account
    - Wallet Deployer - a contract(singleton) that creates a wallet contract
    - Wallet software - UX client app used to sign and send the UserOperation to the Bundler node.
2. **UserOperation** - A structure that describes a transaction(new transaction type) sent on a user's behalf. Users send UserOperation objects to a dedicated user operation mempool where Bundlers can listen and create bundle transactions.
    - Like a transaction, it contains `sender`, `to`, `calldata`, `maxFeePerGas`, `maxPriorityFee`, `signature`, and `nonce`.
    - Unlike a transaction, it contains several other fields. 
    - Each account implementation defines the `nonce` and `signature` fields rather than defining them at the protocol level
3. **EntryPoint** - A singleton smart contract instance that executes bundles of UserOperations as a standard transaction.
4. **Bundler** - This network node (block builder) is responsible for that listening in on the user operation mempool and Runs simulations to ensure UserOperation is valid(verify sig/handle gas fee). The Bundler also takes on the responsibility of packaging multiple user operations into a bundled transaction and then relays bundlers to a supported Entrypoint contract via a transaction to the handleOps() function. 
   - Note that not all block-builders on the network are required to be bundlers.
5. Paymaster - This contract can pay for transactions instead of the wallet itself.

## How does ERC-4337 work 

###  Onchain Flow
// image

### Transaction flow with Account Abstraction in a Dapp
// image
