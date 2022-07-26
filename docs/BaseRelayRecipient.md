# BaseRelayRecipient





A base contract to be inherited by any contract that want to receive relayed transactions A subclass must use &quot;_msgSender()&quot; instead of &quot;msg.sender&quot;



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

### trustedForwarder

```solidity
function trustedForwarder() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### versionRecipient

```solidity
function versionRecipient() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined




