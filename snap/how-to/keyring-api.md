---
sidebar_position: 1
description: Learn how to interact with the keyring API

title: Keyring API
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

We use MetaMask keyring to create and manage accounts that are natively supported within the extension, appearing in MetaMask's UI, and can be used with dapps. Dapps can invoke these methods using the `KeyringSnapRpcClient` instance.

## Create Account

Creates a new ERC-4337 smart account and adds it to the keyring. Returns the new account's address.

```ts
import { KeyringSnapRpcClient } from '@metamask/keyring-api';

const client: KeyringSnapRpcClient = new KeyringSnapRpcClient('npm:@transeptor-labs/smarthub-snap', window.ethereum);

const newAccount = await client.createAccount({
    name: 'my new account',
});
```

## Delete Account

Deletes the smart account with the given ID from the keyring.

```ts
import { KeyringSnapRpcClient } from '@metamask/keyring-api';

const client: KeyringSnapRpcClient = new KeyringSnapRpcClient('npm:@transeptor-labs/smarthub-snap', window.ethereum);
await client.deleteAccount(keyringAccountId);
```

## List Accounts

Returns a list of all the smart accounts in the keyring.

```ts
import { KeyringSnapRpcClient } from '@metamask/keyring-api';

const client: KeyringSnapRpcClient = new KeyringSnapRpcClient('npm:@transeptor-labs/smarthub-snap', window.ethereum);
const accounts = await client.listAccounts();
```

## List Request

Returns a list of all the smart account pending requests in the keyring.

```ts
import { KeyringSnapRpcClient } from '@metamask/keyring-api';

const client: KeyringSnapRpcClient = new KeyringSnapRpcClient('npm:@transeptor-labs/smarthub-snap', window.ethereum);
const pendingRequests = await client.listRequests();
```

## Approve Request

Approves a smart account pending request in the keyring.

```ts
import { KeyringSnapRpcClient } from '@metamask/keyring-api';

const client: KeyringSnapRpcClient = new KeyringSnapRpcClient('npm:@transeptor-labs/smarthub-snap', window.ethereum);

await client.approveRequest('requestId');
```

## Reject Request

Rejects a smart account pending request in the keyring.

```ts
import { KeyringSnapRpcClient } from '@metamask/keyring-api';

const client: KeyringSnapRpcClient = new KeyringSnapRpcClient('npm:@transeptor-labs/smarthub-snap', window.ethereum);

await client.rejectRequest(requestId);
```

## Send Request Async

Sends a request to the keyring that will be handled asynchronously waiting for the user to approve or reject it.

```ts
import { KeyringSnapRpcClient } from '@metamask/keyring-api';

const client: KeyringSnapRpcClient = new KeyringSnapRpcClient('npm:@transeptor-labs/smarthub-snap', window.ethereum);

const result = await snapRpcClient.submitRequest({
    id: '0',
    account: 'youKeyringAccountId',
    scope: 'async',
    request: {
    method: 'personal_sign',
    params: [],
    },
});
```

## Send Request Sync

Sends a request to the keyring that will be handled synchronously(immediately) returning the result of the request.

```ts
import { KeyringSnapRpcClient } from '@metamask/keyring-api';

const client: KeyringSnapRpcClient = new KeyringSnapRpcClient('npm:@transeptor-labs/smarthub-snap', window.ethereum);

const result: = await snapRpcClient.submitRequest({
    id: '0',
    account: 'youKeyringAccountId',
    scope: 'sync',
    request: {
    method: 'personal_sign',
    params: [],
    },
});
```

