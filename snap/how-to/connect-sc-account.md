---
sidebar_position: 5
description: Learn how connect a Smart account to a dapp

title: Connect to Smart account
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Invoke the `sc_account` JSON-RPC method to retrieve the users smart contract account. This method is only callable by websites.

**Parameters:**

This JSON-RPC method does not require any parameters.

**Returns:**

Returns an object that contains infomation about the smart account.

| Property Name  |    Type     |                         Description                         |
| :------------: | :---------: | :---------------------------------------------------------: |
|    initCode    |  `string`   |             The init code of the smart account              |
|    address     |  `string`   |              The address of the smart account               |
|    balance     | `BigNumber` |            The ETH balance of the smart account             |
|    deposit     | `BigNumber` | The ETH deposit that smart account has with the entry point |
|   entryPoint   |  `string`   |   The entry point address that the smart account is using   |
| factoryAddress |  `string`   | The address of the factory that deployed the smart account  |
|     index      | `BigNumber` |            The ETH balance of the smart account             |
|     nonce      | `BigNumber` |               The nonce of the smart account                |
| owner.address  |  `string`   |     The address of the EOA that owns the smart account      |
| owner.balance  |  `string`   |   The ETH balance of the EOA that owns the smart account    |

**Example**
<Tabs
  defaultValue="js"
  values={[
      { label: 'JavaScript', value: 'js', },
      { label: 'Result', value: 'js-result', },
  ]}
>
<TabItem value="js">

```javascript
const serializedResponse = await window.ethereum.request({
    method: 'wallet_invokeSnap',
    params: {
      snapId: 'npm:@transeptor-labs/smarthub-snap',
      request: {
        method: 'sc_account',
        params: [{ 'keyringAccountId' }],
      },
    },
});

// To unserialize the JSON-RPC response back into a JavaScript object.
const unserializedResponse = JSON.parse(serializedResponse); 

console.log(unserializedResponse);
```

</TabItem>
<TabItem value="js-result">

```javascript
{
    address: "0x76B446d851d32F032666770c62884a4b158de912",
    balance: {type: 'BigNumber', hex: '0x00'},
    deposit: {type: 'BigNumber', hex: '0x00'},
    entryPoint: "0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789",
    factoryAddress: "0x9406Cc6185a346906296840746125a0E44976454",
    index: {type: 'BigNumber', hex: '0x00'},
    nonce: {type: 'BigNumber', hex: '0x00'},
    ownerAddress: "0x427a3c8046c3192A4Ae614347e63a64a1d712E2e",
    userOpHashesPending: [],
    userOperationReceipts: [],
}
```

</TabItem>
</Tabs>
