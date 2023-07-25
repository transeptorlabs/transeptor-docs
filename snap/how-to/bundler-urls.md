---
sidebar_position: 4
description: Learn to manage the Bundler Urls for your Smart account

title: Manage Bundler Urls
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Invoke the `sc_account` JSON-RPC method to retrieve the users smart contract account. This method is only callable by websites.

**Parameters:**

This JSON-RPC method does not require any parameters.

**Returns:**

Returns an object of type `{ [chainId: string]: string }`  that contains a list of all the Bundler Urls for the smart account.

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
const serializedResponse = await ethereum.request({
    method: 'wallet_invokeSnap',
    params: {
        snapId: 'npm:@transeptor/erc-4337-relayer',
        request: { method: 'get_bundler_urls', params: [] },
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
    0x1: "https://my-mainnet-bunder-url.io",
    0x539: "http://localhost:3000/rpc"
}
```

</TabItem>
</Tabs>
