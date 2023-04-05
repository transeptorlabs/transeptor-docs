---
sidebar_position: 5
id: rpc-method
description: Describe RPC method

title: RPC methods 
---

## `eth` namespace
*All RPC method listed here are rquired from our Bundler 100% compliant as an [EIP-4337](https://eips.ethereum.org/EIPS/eip-4337) bundler.*

<hr></hr>

### Send User Operation

This method is used to submit a User Operation object to the User Operation pool of clients. The reposonse payload will contain the calculated `userOpHash` if and only if the request passes all nessary checks, otherwise the reposonse payload will return an error code with failed message.


**Parameters:**

| **Name** | **Type** | **Description** |
|:--------:|:--------:|:---------------:|
|Test          |    Test      |       Test          |


**Returns**:

| **Name**      | **Type** | **Description** |
|:--------:|:--------:|:---------------:|
|   Test       |  Test        |      Test           |


Example Request: 
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_sendUserOperation",
  "params": [
    // UserOperation object
    {
      sender,
      nonce, 
      initCode,
      callData,
      callGasLimit,
      verificationGasLimit,
      preVerificationGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      paymasterAndData,
      signature
    },
    // MUST be one of the entry points supportedEntryPoints rpc call
    entryPoint
  ]
}
```

Example Response:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1234...5678"
}
```

<hr></hr>

### Estimate User Operation Gas

This method is used to estimate the gas values for a UserOperation. Given UserOperation optionally without gas limits and gas prices, return the needed gas limits. The signature field is ignored by the wallet, so that the operation will not require user’s approval. Still, it might require putting a “semi-valid” signature (e.g. a signature in the right length). `maxFeePerGas` and `maxPriorityFeePerGas` default to zero, so no payment is required by neither account nor paymaster.

Example Request:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_estimateUserOperationGas",
  "params": [
    // UserOperation object
    {
      sender,
      nonce, 
      initCode,
      callData,
      callGasLimit,
      verificationGasLimit,
      preVerificationGas,
      maxFeePerGas,
      maxPriorityFeePerGas,
      paymasterAndData,
      signature
    },
    // MUST be one of the entry points supportedEntryPoints rpc call
    entryPoint
  ]
}
```

Example Response:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  // The return values are in units of wei.
  "result": {
    preVerificationGas: "0x05",
    verificationGasLimit: "0x05",
    callGasLimit: "0x05"
  }
}
```

<hr></hr>

### Get User Operation By Hash

Return a UserOperation based on a hash (userOpHash) returned by eth_sendUserOperation

Example Request: 
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_getUserOperationByHash",
  "params": ["userOpHash"]
}
```

Example Response:

Returns null in case the UserOperation is not yet included in a block, or a full UserOperation, with the addition of `entryPoint`, `blockNumber`, `blockHash` and `transactionHash`


```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": null
}
```

or

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
   userOperation: {
      {
        sender,
        nonce, 
        initCode,
        callData,
        callGasLimit,
        verificationGasLimit,
        preVerificationGas,
        maxFeePerGas,
        maxPriorityFeePerGas,
        paymasterAndData,
        signature
      },
   },
   entryPoint,
   blockNumber,
   blockHash,
   transactionHash
  }
}
```

<hr></hr>

### Get User Operation Receipt
Return a UserOperation receipt based on a hash (userOpHash) returned by `eth_sendUserOperation`

Example Request: 
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_getUserOperationByHash",
  "params": ["userOpHash"]
}
```

Example Response:

Returns null in case the UserOperation is not yet included in a block.

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": null
}
```

or

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": {
    userOpHash,
    entryPoint,
    sender,
    nonce,
    paymaster,
    actualGasCost,
    actualGasUsed,
    success,
    reason,
    logs,
    receipt,
  }
}
```

<hr></hr>

### Supported Entry Points
Returns an array of the entryPoint addresses supported by the client. The first element of the array is the entryPoint addressed preferred by the client.

Example Request:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_supportedEntryPoints",
  "params": []
}
```

Example Response:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": [
    "0xcd01C8aa8995A59eB7B2627E69b40e0524B5ecf8",
    "0x7A0A0d159218E6a2f407B99173A2b12A6DDfC2a6"
  ]
}
```

<hr></hr>

### ChainId
Returns [EIP-155](https://eips.ethereum.org/EIPS/eip-155) Chain ID.

Example Request:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "eth_chainId",
  "params": []
}
```

Example Response:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "result": "0x1"
}
```

<hr></hr>

### Error Response Codes
Below are error codes for `eth_sendUserOperation` , `eth_estimateUserOperationGas` operations.

| Code        | Message                                                                      | Data                              |
| ----------- | -----------                                                                  |  -----------                      |
| 32602       | Invalid UserOperation struct/fields                                          |  None                            |
| 32500       | Transaction rejected by entryPoint’s simulateValidation, during wallet creation or validation                                                                                   |  None                             |
| 32501       | Transaction rejected by paymaster’s validatePaymasterUserOp                  |  Contain a paymaster value        |
| 32502       | Transaction rejected because of opcode validation                            |  None                            |
| 32503       | UserOperation out of time-range: either wallet or paymaster returned a time-range, and it is already expired (or will expire soon)                                          |  Contain the `validUntil` and `validAfter` values or a a paymaster value, if this error was triggered by the `paymaster` |
| 32504       | Transaction rejected because paymaster (or signature aggregator) is throttled/banned                                          |  Contain a paymaster or aggregator value, depending on the failed entity                            |
| 32505       | transaction rejected because paymaster (or signature aggregator) stake or unstake-delay is too low                                         |  contain a paymaster or aggregator value, depending on the failed entity or field SHOULD contain a minimumStake and minimumUnstakeDelay                           |
| 32506       | Transaction rejected because wallet specified unsupported signature aggregator                                          |  Contain an aggregator value                            |
| 32507       | Transaction rejected because of wallet signature check failed (or paymaster signature, if the paymaster uses its data as signature)                                          |  None                            |



Example failure responses:
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "message": "AA21 didn't pay prefund",
    "code": -32500
  }
}
```

```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "message": "paymaster stake too low",
    "data": {
      "paymaster": "0x123456789012345678901234567890123456790",
      "minimumStake": "0xde0b6b3a7640000",
      "minimumUnstakeDelay": "0x15180"
    },
    "code": -32504
  }
}
```

<hr></hr>

## `debug` namespace
*This api must only be available on testing mode and is required by the compatibility test suite. In production, any `debug_*` rpc calls should be blocked.*