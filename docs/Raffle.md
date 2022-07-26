# Raffle









## Methods

### CURATOR_ROLE

```solidity
function CURATOR_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### DAOWallet

```solidity
function DAOWallet() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### DEFAULT_ADMIN_ROLE

```solidity
function DEFAULT_ADMIN_ROLE() external view returns (bytes32)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### REWARD_TOKEN

```solidity
function REWARD_TOKEN() external view returns (contract IERC20)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined

### USDC

```solidity
function USDC() external view returns (contract IERC20)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IERC20 | undefined

### cancelRaffle

```solidity
function cancelRaffle(uint256 raffleID) external nonpayable
```

cancels an existing raffle, refunds donors and sends NFT back to artist



#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID | uint256 | id of raffle

### claimTokenRewards

```solidity
function claimTokenRewards(uint256 raffleID, address donor) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID | uint256 | undefined
| donor | address | undefined

### createRaffle

```solidity
function createRaffle(Raffle.Raffle _raffle) external nonpayable returns (uint256)
```

creates a raffle



#### Parameters

| Name | Type | Description |
|---|---|---|
| _raffle | Raffle.Raffle | object contains parameters for raffle created

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### donate

```solidity
function donate(Raffle.Donation _donation) external nonpayable returns (uint256)
```

creates a donation on an raffle



#### Parameters

| Name | Type | Description |
|---|---|---|
| _donation | Raffle.Donation | object contains parameters for donation created

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### donationCount

```solidity
function donationCount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### donations

```solidity
function donations(uint256) external view returns (address donor, uint256 raffleID, uint256 amount, uint256 timestamp)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| donor | address | undefined
| raffleID | uint256 | undefined
| amount | uint256 | undefined
| timestamp | uint256 | undefined

### donorExistsInArray

```solidity
function donorExistsInArray(address) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### donorsArrayPerCycle

```solidity
function donorsArrayPerCycle(uint256, uint256) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined
| _1 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getDonation

```solidity
function getDonation(uint256 donationID) external view returns (struct Raffle.Donation)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| donationID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | Raffle.Donation | undefined

### getDonorsPerCycle

```solidity
function getDonorsPerCycle(uint256 raffleID) external view returns (address[])
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address[] | undefined

### getHighestDonationPerCycle

```solidity
function getHighestDonationPerCycle(uint256 raffleID) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getRaffle

```solidity
function getRaffle(uint256 raffleID) external view returns (struct Raffle.Raffle)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | Raffle.Raffle | undefined

### getRoleAdmin

```solidity
function getRoleAdmin(bytes32 role) external view returns (bytes32)
```



*Returns the admin role that controls `role`. See {grantRole} and {revokeRole}. To change a role&#39;s admin, use {_setRoleAdmin}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined

### getTokensInTheBufferEndOfCycle

```solidity
function getTokensInTheBufferEndOfCycle() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getTopDonor

```solidity
function getTopDonor(uint256 raffleID) external view returns (address)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### getTotalDonationPerAddressPerCycle

```solidity
function getTotalDonationPerAddressPerCycle(uint256 raffleID, address account) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID | uint256 | undefined
| account | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### getTotalDonationsPerCycle

```solidity
function getTotalDonationsPerCycle(uint256 raffleID) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### grantRole

```solidity
function grantRole(bytes32 role, address account) external nonpayable
```



*Grants `role` to `account`. If `account` had not been already granted `role`, emits a {RoleGranted} event. Requirements: - the caller must have ``role``&#39;s admin role.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined
| account | address | undefined

### hasRole

```solidity
function hasRole(bytes32 role, address account) external view returns (bool)
```



*Returns `true` if `account` has been granted `role`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined
| account | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

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

### nftAuthorWallet

```solidity
function nftAuthorWallet() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### onERC1155Received

```solidity
function onERC1155Received(address operator, address from, uint256 id, uint256 value, bytes data) external pure returns (bytes4)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| operator | address | undefined
| from | address | undefined
| id | uint256 | undefined
| value | uint256 | undefined
| data | bytes | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes4 | undefined

### owner

```solidity
function owner() external view returns (address)
```



*Returns the address of the current owner.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### raffleCount

```solidity
function raffleCount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### raffles

```solidity
function raffles(uint256) external view returns (address nftContract, address nftOwner, uint256 tokenID, uint256 startTime, uint256 endTime, uint256 minimumDonationAmount, address topDonor, uint256 topDonatedAmount, bool cancelled)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| nftContract | address | undefined
| nftOwner | address | undefined
| tokenID | uint256 | undefined
| startTime | uint256 | undefined
| endTime | uint256 | undefined
| minimumDonationAmount | uint256 | undefined
| topDonor | address | undefined
| topDonatedAmount | uint256 | undefined
| cancelled | bool | undefined

### renounceOwnership

```solidity
function renounceOwnership() external nonpayable
```



*Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.*


### renounceRole

```solidity
function renounceRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from the calling account. Roles are often managed via {grantRole} and {revokeRole}: this function&#39;s purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced). If the calling account had been revoked `role`, emits a {RoleRevoked} event. Requirements: - the caller must be `account`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined
| account | address | undefined

### revokeCuratorRole

```solidity
function revokeCuratorRole(address curator) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| curator | address | undefined

### revokeRole

```solidity
function revokeRole(bytes32 role, address account) external nonpayable
```



*Revokes `role` from `account`. If `account` had been granted `role`, emits a {RoleRevoked} event. Requirements: - the caller must have ``role``&#39;s admin role.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| role | bytes32 | undefined
| account | address | undefined

### sendNFTRewards

```solidity
function sendNFTRewards(uint256 raffleID) external nonpayable
```

distributes NFTs to winners at the end of a raffle cycle



#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID | uint256 | id of raffle

### setCuratorRole

```solidity
function setCuratorRole(address curator) external nonpayable
```

sets curator address for curator role



#### Parameters

| Name | Type | Description |
|---|---|---|
| curator | address | address of curator wallet

### setDAOWalletAddress

```solidity
function setDAOWalletAddress(address _DAOWallet) external nonpayable
```

sets DAO wallet address for transfering funds



#### Parameters

| Name | Type | Description |
|---|---|---|
| _DAOWallet | address | address of DAO wallet

### setNftAuthorWalletAddress

```solidity
function setNftAuthorWalletAddress(address _nftAuthorWallet) external nonpayable
```

sets NFT author wallet address for transfering NFT at the end of raffle cycle



#### Parameters

| Name | Type | Description |
|---|---|---|
| _nftAuthorWallet | address | address of NFT author wallet

### setTrustedForwarder

```solidity
function setTrustedForwarder(address _forwarder) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _forwarder | address | undefined

### supportsInterface

```solidity
function supportsInterface(bytes4 interfaceId) external view returns (bool)
```



*See {IERC165-supportsInterface}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| interfaceId | bytes4 | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined

### topUpRewardTokenBalance

```solidity
function topUpRewardTokenBalance(uint256 amount) external nonpayable
```

transfers reward tokens to the contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | amount of tokens to be transferred

### totalDonationPerAddressPerCycle

```solidity
function totalDonationPerAddressPerCycle(uint256, address) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined
| _1 | address | undefined

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined

### transferOwnership

```solidity
function transferOwnership(address newOwner) external nonpayable
```



*Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newOwner | address | undefined

### trustedForwarder

```solidity
function trustedForwarder() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined

### turnOnTokenRewards

```solidity
function turnOnTokenRewards(address _tokenRewardsModuleAddress) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _tokenRewardsModuleAddress | address | undefined

### versionRecipient

```solidity
function versionRecipient() external view returns (string)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined

### withdraw

```solidity
function withdraw(address account, uint256 amount) external nonpayable
```

function for withdrawing reward token from contract



#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | address to withdraw tokens to
| amount | uint256 | amount of tokens to be withdrawn



## Events

### DAOWalletAddressSet

```solidity
event DAOWalletAddressSet(address walletAddress)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| walletAddress  | address | undefined |

### DonationPlaced

```solidity
event DonationPlaced(address from, uint256 raffleId, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from  | address | undefined |
| raffleId  | uint256 | undefined |
| amount  | uint256 | undefined |

### NFTsentToWinner

```solidity
event NFTsentToWinner(uint256 raffleID, address winner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| raffleID  | uint256 | undefined |
| winner  | address | undefined |

### OwnershipTransferred

```solidity
event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousOwner `indexed` | address | undefined |
| newOwner `indexed` | address | undefined |

### RaffleCreated

```solidity
event RaffleCreated(address nftOwner, uint256 tokenID, uint256 startTime, uint256 endTime, uint256 minimumDonationAmount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| nftOwner  | address | undefined |
| tokenID  | uint256 | undefined |
| startTime  | uint256 | undefined |
| endTime  | uint256 | undefined |
| minimumDonationAmount  | uint256 | undefined |

### RewardTokenBalanceToppedUp

```solidity
event RewardTokenBalanceToppedUp(uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| amount  | uint256 | undefined |

### RoleAdminChanged

```solidity
event RoleAdminChanged(bytes32 indexed role, bytes32 indexed previousAdminRole, bytes32 indexed newAdminRole)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| previousAdminRole `indexed` | bytes32 | undefined |
| newAdminRole `indexed` | bytes32 | undefined |

### RoleGranted

```solidity
event RoleGranted(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

### RoleRevoked

```solidity
event RoleRevoked(bytes32 indexed role, address indexed account, address indexed sender)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| role `indexed` | bytes32 | undefined |
| account `indexed` | address | undefined |
| sender `indexed` | address | undefined |

### nftAuthorWalletAddressSet

```solidity
event nftAuthorWalletAddressSet(address nftAuthorWallet)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| nftAuthorWallet  | address | undefined |

### tokensWithdrawnFromContract

```solidity
event tokensWithdrawnFromContract(address account, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| account  | address | undefined |
| amount  | uint256 | undefined |



## Errors

### CannotClaimRewards

```solidity
error CannotClaimRewards()
```






### DonationTooLow

```solidity
error DonationTooLow()
```






### IncorrectTimesGiven

```solidity
error IncorrectTimesGiven()
```






### InsufficientAmount

```solidity
error InsufficientAmount()
```






### NoRewardsForRaffle

```solidity
error NoRewardsForRaffle()
```






### RaffleCancelled

```solidity
error RaffleCancelled()
```






### RaffleHasEnded

```solidity
error RaffleHasEnded()
```






### RaffleHasNotEnded

```solidity
error RaffleHasNotEnded()
```






### ZeroAddressNotAllowed

```solidity
error ZeroAddressNotAllowed()
```







