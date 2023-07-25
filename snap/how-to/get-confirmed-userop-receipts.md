---
sidebar_position: 2
description: Learn how get Confirmed User Operation Receipts

title: Get Confirmed User Operation Receipts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Invoke the `get_confirmed_userOperationReceipts` JSON-RPC method to retrieve the users smart contract account. This method is only callable by websites.

**Parameters:**

| Property Name |     Type    |              Description             |
|:--------------:|:-----------:|:------------------------------------:|
| index        | `string`    | The address of the smart account     |


**Returns:**

Returns an string array that contains all the confirmed user operation receipts made by the user.

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
        request: { method: 'get_confirmed_userOperationReceipts', params: ["0"], },
    },
});

// To unserialize the JSON-RPC response back into a JavaScript object.
const unserializedResponse = JSON.parse(serializedResponse); 

console.log(unserializedResponse);
```

</TabItem>
<TabItem value="js-result">

```javascript
[
    "0x974bf09dfb2585ecbb508397b46f194f3d3224b6c198ff34dd778491e0ed5d3c",
    "0x574bf09dfb2585ecbb508397b46f194f3d3224b6c198ff34dd778491e0ed5d3c"
]
```

</TabItem>
</Tabs>
