---
sidebar_position: 3
description: Installation guide for Transeptor bundler - choose between Docker or building from source

title: Installation
---

# Installing Transeptor Bundler

Transeptor bundler can be installed in two ways: using Docker images (recommended for most users) or building from source (for developers and advanced users).

## Prerequisites

Before installing Transeptor bundler, ensure you have the following:

- **For Docker installation**: Docker and Docker Compose installed on your system
- **For source installation**: - [Node.js](https://nodejs.org/) (>= **v22.14.0**), [nvm](https://github.com/nvm-sh/nvm) and [yarn](https://classic.yarnpkg.com/lang/en/) (**v4.7.0**)
- A funded Ethereum account for the bundler signer
- Access to an Ethereum node (recommended: geth with ERC-7562 tracer)

## Environment Configuration

Both installation methods require the same environment configuration. Create a `.env` file with the following variables:

```bash
# Required for production
TRANSEPTOR_ENTRYPOINT_ADDRESS=0x4337084d9e255ff0702461cf8895ce9e3b5ff108
TRANSEPTOR_BENEFICIARY=<address_to_receive_funds>
TRANSEPTOR_MNEMONIC=<your-mnemonic>

# Optional
TRANSEPTOR_INFLUX_TOKEN=DEV_TOKEN
TRANSEPTOR_WHITE_LIST=<address_to_whitelist_SEPARATED_BY_COMMA>
TRANSEPTOR_BLACK_LIST=<address_to_blacklist_SEPARATED_BY_COMMA>
TRANSEPTOR_LOG_LEVEL=info
```

## Option 1: Docker Installation (Recommended)

Docker installation is the easiest and most reliable way to get started with Transeptor bundler.

### Pull the Docker Images

```bash
docker pull transeptorlabs/bundler:latest
docker pull accountabstraction/geth-with-erc7562-tracer
```

### Run with Docker

**Start up geth with ERC-7562 tracer**

```bash
docker run -d --name geth-native-tracer -p 8545:8545 accountabstraction/geth-with-erc7562-tracer \
  --verbosity 1 \
  --http.vhosts '*,localhost,host.docker.internal' \
  --http \
  --http.port 8545 \
  --http.api eth,net,web3,debug \
  --http.corsdomain '*' \
  --http.addr "0.0.0.0" \
  --networkid 1337 \
  --dev \
  --dev.period 0 \
  --allow-insecure-unlock \
  --rpc.allow-unprotected-txs \
  --dev.gaslimit 20000000
```

**Start Transeptor bundler**

```bash
docker run -d --name transeptor -p 4337:4337 --env-file .env transeptorlabs/bundler:latest \
  --httpApi web3,eth,debug \
  --txMode base \
  --port 4337 \
  --minBalance 0.01 \
  --network http://host.docker.internal:8545 \
  --auto
```

### Using Docker Compose

Create a `docker-compose.yml` file:

```yaml
version: "3"
services:
  geth:
    image: accountabstraction/geth-with-erc7562-tracer
    container_name: geth-native-tracer
    ports:
      - "8545:8545"
    command: >
      --verbosity 1
      --http.vhosts '*,localhost,host.docker.internal'
      --http
      --http.port 8545
      --http.api eth,net,web3,debug
      --http.corsdomain '*'
      --http.addr "0.0.0.0"
      --networkid 1337
      --dev
      --dev.period 0
      --allow-insecure-unlock
      --rpc.allow-unprotected-txs
      --dev.gaslimit 20000000
    restart: unless-stopped
    networks:
      - transeptor-network

  transeptor:
    image: transeptorlabs/bundler:latest
    container_name: transeptor
    ports:
      - "4337:4337"
    env_file:
      - .env
    command: >
      --port 4337
      --network http://host.docker.internal:8545
      --txMode base
      --httpApi web3,eth,debug
    restart: unless-stopped
    depends_on:
      - geth
    networks:
      - transeptor-network

networks:
  transeptor-network:
    driver: bridge
```

Run with:

```bash
docker-compose up -d
```

## Option 2: Building from Source

Building from source is recommended for developers who want to contribute to the project or need custom modifications.

### Clone the Repository

```bash
git clone https://github.com/transeptorlabs/transeptor-bundler.git
cd transeptor-bundler
```

### Use correct version of Node.js

```bash
nvm use
```

### Install Dependencies

```bash
yarn install
```

### Build the bundler

```bash
yarn build
```

The compiled files will be created in the `dist/` directory.

### Run the CLI

To see CLI options
```bash
chmod +x ./bin/transeptor
node ./bin/transeptor --help
```

To start the bundler
```bash
node ./bin/transeptor --httpApi web3,eth,debug --txMode base
```

## Verification

After installation, verify that Transeptor bundler is running correctly:

```bash
curl -X POST -H "Content-Type: application/json" \
  --data '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":67}' \
  http://localhost:4337/rpc
```

Expected response:

```json
{ "jsonrpc": "2.0", "id": 67, "result": "transeptor/0.13.0-alpha.0" }
```

## Next Steps

After successful installation:

1. **Configure your bundler**: See [Configuration Options](./configuration/configuration-options) for detailed configuration options
2. **Set up monitoring**: Follow the [Monitoring Guide](./monitoring/metrics) to set up metrics and dashboards

### Getting Help

If you encounter issues:

1. Check the [GitHub Issues](https://github.com/transeptorlabs/transeptor-bundler/issues)
2. Join our [Telegram Community](https://t.me/+eUGda3KIND4zMjRh)
3. Review the [Configuration Options](./configuration/configuration-options) for advanced settings
