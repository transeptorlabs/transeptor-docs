---
sidebar_position: 1
description: Learn how to install Transeptor bundler.

title: Install
---

Transeptor is easy to set up and use, with a simple Docker-based deployment process that requires minimal configuration. This page explains so of the basic requirements to run Transeptor along with the steps to get started.

:::important Transeptor is in Alpha
Please note that the current version of the software is classified as Alpha. While the software is fully functional, it is important to be aware that it may contain bugs, incomplete features, and undergo frequent updates.

We invite you to actively participate in the development of this software. You can contribute by providing feedback, reporting issues, or even submitting code changes. Visit our [GitHub repository](https://github.com/transeptorlabs/transeptor-bundler) to get involved.
:::

## Hardware requirements
- CPU: Minimum of 2 CPU cores
- RAM: 8GB

## Software requirements
- [Docker Engine](https://docs.docker.com/engine/install/) version 20.10.17 or higher
- [Docker Compose plugin](https://docs.docker.com/compose/install/linux/) version v2.10.2 or higher

Please ensure that your system meets these requirements.

## Pulling an image
```bash
docker pull transeptorlabs/bundler
```

- transeptorlabs/bundler:latest is the latest development version.
- transeptorlabs/bundler:{version} is the stable version at a specific version number

## Running with Docker containers
We will use docker-compose quickly to spin up the bundler alongside a geth node.
1. create `.env` file
```env
MNEMONIC=<your_bundler_signer_wallet_seed_phrase>
INFURA_API_KEY=<your-infura-api-key>
ALCHEMY_API_KEY=<your-alcemy-api-key>
BENEFICIARY=<address_to_receive_funds>
WHITE_LIST=<address_to_whitelist_SEPARATEDBY_COMMA>
BLACK_LIST=<address_to_blacklist_SEPARATEDBY_COMMA>
```
2. Create `docker-compose.yml`
```docker
version: "3"
services:
  geth:
    image: ethereum/client-go:v1.10.26
    ports:
      - "8545:8545"
    command: >
      --miner.gaslimit 12000000
      --dev.gaslimit 20000000
      --http 
      --http.api personal,eth,net,web3,debug
      --http.vhosts '*,localhost,host.docker.internal' 
      --http.addr "0.0.0.0"
      --ignore-legacy-receipts 
      --allow-insecure-unlock 
      --rpc.allow-unprotected-txs
      --dev
      --verbosity 2
      --nodiscover 
      --maxpeers 0 
      --mine 
      --miner.threads 1
      --networkid 1337

  transeptor:
    image: transeptorlabs/bundler:latest
    ports:
      - "3000:3000"
    env_file:
      - .env
    command: >
      --port 3000
      --network http://host.docker.internal:8545
      --txMode base
      --httpApi web3,eth,debug
```
3. Start geth - `docker-compose up geth`
4. Start bundler - `docker-compose up transeptor` **(Note: Ensure signer account is funded with ETH before starting bundler)**

The Bundler node will start on `http://localhost:3000/rpc`



