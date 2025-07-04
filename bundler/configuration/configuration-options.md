---
sidebar_position: 2
description: Configuration options for Transeptor bundler 

title: Running Transeptor bundler
---

# Running Transeptor bundler

## Modes

It is recommended not to run Transeptor bundler with `--unsafe` in production. This flag is disabled by default and is only intended for experimental and development purposes. Running the bundler with `--unsafe` will disable all [ERC-7562: Account Abstraction Validation Rules](https://eips.ethereum.org/EIPS/eip-7562) that allow the bundler to enforce off-chain transaction validation rules that prevent denial-of-service attacks.

| Feature                                | Base Mode (ERC-7562 tracer)                               | Searcher Mode (ERC-7562 tracer)                                                                                 |
| -------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Mempool Support                        | Private mempool                                           | Private mempool                                                                                                 |
| EVM Networks                           | Ethereum and Sepolia                                      | Ethereum and Sepolia                                                                                            |
| Bundle Sending Strategy                | Uses eth_sendRawTransaction RPC                           | Uses [Flashbots](https://docs.flashbots.net/flashbots-auction/searchers/quick-start) eth_sendPrivateTransaction |
| MEV Protection                         | no                               | yes                                                                                       |
| Ethereum Network Provider              | accountabstraction/geth-with-erc7562-tracer               | accountabstraction/geth-with-erc7562-tracer                                                                     |
| Ethereum Network Provider Requirements | Must support debug_traceCall with 'erc7562Tracer'  tracer | Must support debug_traceCall with 'erc7562Tracer' tracer                                                        |
| EIP-7702 support                       | yes                                                       | yes                                                                                                             |  |

## Command line arguments

List of all command line arguments supported by the Transeptor bundler.

```bash
docker run -p 4337:4337 --env-file .env transeptorlabs/bundler:latest --help
```

```bash
Usage: cli [options]

Options:
  -V, --version                  output the version number
  --unsafe                       UNSAFE mode: Enable no storage or opcode checks during userOp simulation. SAFE mode(default).
  --network <string>             Ethereum network provider. (default: "http://localhost:8545")
  --httpApi <string>             ERC4337 rpc method namespaces to enable. (default: "web3,eth")
  --port <number>                Bundler node listening port. (default: "4337")
  --minBalance <string>          Minimum ETH balance needed for signer address. (default: "1")
  --minStake <string>            Minimum stake an entity has to have to pass the reputation system. (default: "1")
  --minUnstakeDelay <number>     Time paymaster has to wait to unlock the stake(seconds). (default: "0")
  --bundleSize <number>          Maximum number of pending mempool entities to start auto bundler. (default: "10")
  --maxBundleGas <number>        Max gas the bundler will use in transactions. (default: "5000000")
  --auto                         Automatic bundling. (default: false)
  --autoBundleInterval <number>  Auto bundler interval in (ms). (default: "12000")
  --txMode <string>              Bundler transaction mode (base, searcher).
          (base mode): Sends bundles using eth_sendRawTransaction RPC(does not protect against front running).
          (searcher mode): Sends bundles  using Flashbots Auction to protect the transaction against front running (only available on Mainnet) (default: "base")
  --metrics                      Bundler node metrics tracking enabled. (default: false)
  --influxdbUrl <string>         Url influxdb is running on (requires --metrics to be enabled). (default: "http://localhost:8086")
  --influxdbOrg <string>         Influxdb org (requires --metrics to be enabled). (default: "transeptor-labs")
  --influxdbBucket <string>      Influxdb bucket (requires --metrics to be enabled). (default: "transeptor_metrics")
  --p2p                          p2p mode enabled (default: false)
  --findPeers                    Search for peers when p2p is enabled. (default: false)
  --eip7702Support               On networks with EIP-7702 enabled, the eth_sendUserOperation method accepts an extra eip7702Auth
                                 parameter. (default: true)
  --auditTrail <boolean>         Enable audit trail. (default: false)
  -h, --help                     display help for command
```

## Environment variables

List of all environment variables supported by the node.

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