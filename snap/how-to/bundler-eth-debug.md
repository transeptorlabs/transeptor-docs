---
sidebar_position: 2
description: Learn how to relay eth and debug method to a bundler

title: Relay eth and debug method to a bundler
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Wraps all the eth and debug methods for [ERC-4337](https://eips.ethereum.org/EIPS/eip-4337).

Methods supported by the snap:

- eth_supportedEntryPoints
- eth_estimateUserOperationGas
- eth_getUserOperationByHash
- eth_getUserOperationReceipt
- web3_clientVersion
- debug_bundler_clearState
- debug_bundler_dumpMempool
- debug_bundler_sendBundleNow
- debug_bundler_setBundlingMode
- debug_bundler_setReputation
- debug_bundler_dumpReputation

**Parameters:**

This JSON-RPC method matches the parameters of the eth and debug methods for a ERC-4337.

**Returns:**

Returns result of the method called that matches the return type of the eth and debug methods for a ERC-4337.

**Example**

To invoke any of these methods use the `wallet_invokeSnap` RPC method.

This example shows how to invoke the `eth_supportedEntryPoints` method, but the same applies to all the other methods.

<Tabs
  defaultValue="js"
  values={[
      { label: 'JavaScript', value: 'js', },
      { label: 'Result', value: 'js-result', },
  ]}
>
<TabItem value="js">

```javascript
const result = await window.ethereum.request({
    method: 'wallet_invokeSnap',
    params: {
      snapId: 'npm:@transeptor-labs/smarthub-snap',
      request: {
        method: 'eth_supportedEntryPoints', // replace with your desired ERC-4337 method
        params: [], // add the required params for the method
      },
    },
});
```

</TabItem>
<TabItem value="js-result">

```javascript
['supportedEntryPoint1', 'supportedEntryPoint2', 'supportedEntryPoint3']
```

</TabItem>
</Tabs>
