---
sidebar_position: 3
description: Learn how add a Bundler url to your Smart account

title: Manage Bundler url to your Smart account
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Invoke the `add_bundler_url` JSON-RPC method to retrieve the users smart contract account. This method is only callable by websites.

**Parameters:**

**Note**: The order of the parameters is important. The `chainId` parameter must be the first parameter and the `url` parameter must be the second parameter.

| Property Name |     Type    |              Description             |
|:--------------:|:-----------:|:------------------------------------:|
| chainId        | `string`    | The address of the smart account     |
| url            | `string`    | The ETH balance of the smart account |

**Returns:**

Returns an boolean value with the result of the operation.

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
        request: { method: 'add_bundler_url', params: ["0x1", "https://my-bunder-url.io"] },
    },
});

// To unserialize the JSON-RPC response back into a JavaScript object.
const unserializedResponse = JSON.parse(serializedResponse); 

console.log(unserializedResponse);
```

</TabItem>
<TabItem value="js-result">

```javascript
true // or false
```

</TabItem>
</Tabs>
