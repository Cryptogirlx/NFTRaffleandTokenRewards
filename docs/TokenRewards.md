# TokenRewards









## Methods

### getTotalRewardsClaimedPerUser

```solidity
function getTotalRewardsClaimedPerUser(address donor) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| donor | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### raffleContractAddress

```solidity
function raffleContractAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### rewardToken

```solidity
function rewardToken() external view returns (contract IERC20)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined

### rewardTokenAddress

```solidity
function rewardTokenAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### rewardWalletAddress

```solidity
function rewardWalletAddress() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### sendRewardsToUser

```solidity
function sendRewardsToUser(uint256 raffleID, address donor) external nonpayable
```

external function for sending out rewards, to be called by the Raffle contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID | uint256 | ID of the raffle cycle
| donor | address | address of donor

### setRewardTokenAddress

```solidity
function setRewardTokenAddress(address _rewardTokenAddress) external nonpayable
```

sets the address of the reward token contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| _rewardTokenAddress | address | address of contract

### setRewardWalletAddress

```solidity
function setRewardWalletAddress(address _rewardWalletAddress) external nonpayable
```

sets the address of the wallet holding reward tokens



#### Parameters

| Name | Type | Description |
|---|---|---|
| _rewardWalletAddress | address | address of wallet

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined

### viewDonorClaimableRewards

```solidity
function viewDonorClaimableRewards(uint256 _raffleId, address _donor) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _raffleId | uint256 | undefined
| _donor | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined



## Events

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### RaffleContractAddressSet

```solidity
event RaffleContractAddressSet(address contractAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| contractAddress  | address | undefined |

### RewardTokenAddressSet

```solidity
event RewardTokenAddressSet(address tokenAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| tokenAddress  | address | undefined |

### RewardWalletAddressSet

```solidity
event RewardWalletAddressSet(address walletAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| walletAddress  | address | undefined |

### RewardsClaimedPerCycle

```solidity
event RewardsClaimedPerCycle(address donor, uint256 raffleID, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| donor  | address | undefined |
| raffleID  | uint256 | undefined |
| amount  | uint256 | undefined |



## Errors

### CannotCallThisFunction

```solidity
error CannotCallThisFunction()
```






### CannotClaimRewards

```solidity
error CannotClaimRewards()
```






### RewardsClaimedForCycle

```solidity
error RewardsClaimedForCycle()
```






### ZeroAddressNotAllowed

```solidity
error ZeroAddressNotAllowed()
```







