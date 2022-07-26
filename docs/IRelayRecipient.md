# IRelayRecipient





a contract must implement this interface in order to support relayed transaction. It is better to inherit the BaseRelayRecipient as its implementation.



## Methods

### isTrustedForwarder

```solidity
function isTrustedForwarder(address forwarder) external view returns (bool)
```

return if the forwarder is trusted to forward relayed transactions to us. the forwarder is required to verify the sender&#39;s signature, and verify the call is not a replay.



#### Parameters

| Name | Type | Description |
|---|---|---|
| forwarder | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### versionRecipient

```solidity
function versionRecipient() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined




