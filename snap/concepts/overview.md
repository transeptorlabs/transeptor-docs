---
sidebar_position: 1
# id: erc4337-overview
description: High level overview of ERC-4337.

title:  ERC-4337 Overview
---

## What is ERC-4337
ERC-4337 is a higher-layer infrastructure for Ethereum to allow account abstraction. This will allows user to use a smart contract account to handle all network interactions. ERC-4337 introduces a new transaction called a UserOperation. Users will send signed UserOperations to a network of nodes called a Bundlers. Bundlers, will send these transactions to Entrypoint smart contract to execute the UserOperations. ERC-4337 also introduces paymaster smart contracts to allow transaction sponsorship. With paymaster users have gasless transactions or pay gas fees with ERC-20 tokens.

### UserOperation Type
Users create a UserOperation for actions they want their account to perform.

|        **Field**       |  **Type** |                                                             **Description**                                                             |
|:----------------------:|:---------:|:---------------------------------------------------------------------------------------------------------------------------------------:|
| `sender`               | `address` | The account making the operation                                                                                                        |
| `nonce`                | `uint256` | Anti-replay parameter; also used as the salt for first-time account creation                                                            |
| `initCode`             | `bytes`   | The initCode of the account (needed if and only if the account is not yet on-chain and needs to be created)                             |
| `callData`             | `bytes`   | The data to pass to the `sender` during the main execution call                                                                         |
| `callGasLimit`         | `uint256` | The amount of gas to allocate the main execution call                                                                                   |
| `verificationGasLimit` | `uint256` | The amount of gas to allocate for the verification step                                                                                 |
| `preVerificationGas`   | `uint256` | The amount of gas to pay for to compensate the bundler for pre-verification execution and calldata                                      |
| `maxFeePerGas`         | `uint256` | Maximum fee per gas (similar to [EIP-1559](https://eips.ethereum.org/EIPS/eip-1559) `max_fee_per_gas`)                                  |
| `paymasterAndData`     | `bytes`   | Address of paymaster sponsoring the transaction, followed by extra data to send to the paymaster (empty for self-sponsored transaction) |
| `signature`            | `bytes`   | Data passed into the account along with the nonce during the verification step                                                          |


## How does ERC-4337 work 
![AA high level](./assets/aa-high-level.png)


There are five main components to ERC-4337: a `UserOperation`, `Bundler`, `EntryPoint Contract`, `Wallet(Account)`, and `Paymaster Contract`.

1. **Wallet(Account)**
    - Wallet contract - a contract representing a user smart contract account
    - Wallet Deployer - a contract(singleton) that creates a wallet contract
    - Wallet software - UX client app used to sign and send the UserOperation to the Bundler node.
2. **UserOperation** - Users create a UserOperation for actions they want their account to perform. Users will send signed UserOperations to a network of nodes called a Bundlers.
    - Like a transaction, it contains `sender`, `to`, `calldata`, `maxFeePerGas`, `maxPriorityFee`, `signature`, and `nonce`.
    - Unlike a transaction, it contains several other fields. 
3. **EntryPoint** - A smart contract that executes bundles of UserOperations as a standard transaction.
4. **Bundler** - A Bundler is a special type of node that works alongside Ethereum execution clients. It acts as a relayer, processing UserOperations. It performs simulations to ensure that the UserOperations are valid. Enforces storage access rules and opcode banning. Checks things like verifying signatures and handling gas fees. It then take valid UserOperations and package them together into a bundled transaction. Bundlers, will send this bundled transactions to Entrypoint smart contract for execution. It is important to note that not all block-builders on the network need to be bundlers. If a Bundler doesn't want to be a block-builder, it can use an API like [Flashbots](https://docs.flashbots.net/flashbots-auction/searchers/quick-start). Flashbots will allow the transaction to bypass the transaction mempool.
5. **Paymaster** - This contract can pay for transactions instead of the wallet itself. Wallet contracts can choose Paymaster to sponsor or pay transactions themselves.

