/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TokenRewards, TokenRewardsInterface } from "../TokenRewards";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_raffleContractAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "CannotCallThisFunction",
    type: "error",
  },
  {
    inputs: [],
    name: "CannotClaimRewards",
    type: "error",
  },
  {
    inputs: [],
    name: "RewardsClaimedForCycle",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroAddressNotAllowed",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "contractAddress",
        type: "address",
      },
    ],
    name: "RaffleContractAddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "RewardTokenAddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "walletAddress",
        type: "address",
      },
    ],
    name: "RewardWalletAddressSet",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "donor",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "raffleID",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RewardsClaimedPerCycle",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "donor",
        type: "address",
      },
    ],
    name: "getTotalRewardsClaimedPerUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "raffleContractAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardTokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardWalletAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "raffleID",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "donor",
        type: "address",
      },
    ],
    name: "sendRewardsToUser",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardTokenAddress",
        type: "address",
      },
    ],
    name: "setRewardTokenAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_rewardWalletAddress",
        type: "address",
      },
    ],
    name: "setRewardWalletAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_raffleId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_donor",
        type: "address",
      },
    ],
    name: "viewDonorClaimableRewards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040526103e860805234801561001657600080fd5b50604051610f7c380380610f7c833981016040819052610035916100b3565b61003e33610063565b600480546001600160a01b0319166001600160a01b03929092169190911790556100e3565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156100c557600080fd5b81516001600160a01b03811681146100dc57600080fd5b9392505050565b608051610e776101056000396000818161076d01526107b10152610e776000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c8063a5163c9211610081578063f2fde38b1161005b578063f2fde38b146101ba578063f7c618c1146101cd578063f8566967146101e057600080fd5b8063a5163c921461015d578063c615d16b14610170578063ee406acc146101a757600080fd5b8063715018a6116100b2578063715018a6146101315780638da5cb5b146101395780639a6acf201461014a57600080fd5b8063125f9e33146100d957806312b85c291461010957806351cf8fd51461011c575b600080fd5b6002546100ec906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6003546100ec906001600160a01b031681565b61012f61012a366004610b40565b6101f3565b005b61012f6102db565b6000546001600160a01b03166100ec565b61012f610158366004610b40565b610341565b61012f61016b366004610b64565b61041d565b61019961017e366004610b40565b6001600160a01b031660009081526006602052604090205490565b604051908152602001610100565b6101996101b5366004610b64565b61056c565b61012f6101c8366004610b40565b610583565b6001546100ec906001600160a01b031681565b6004546100ec906001600160a01b031681565b6000546001600160a01b031633146102525760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064015b60405180910390fd5b6001600160a01b038116610279576040516342bcdf7f60e11b815260040160405180910390fd5b6003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527f7bf5a4c7333afbd3aaf7af058634f5b6a7091a9fe13f1d37cc98741c90b0da9c906020015b60405180910390a150565b6000546001600160a01b031633146103355760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610249565b61033f6000610665565b565b6000546001600160a01b0316331461039b5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610249565b6001600160a01b0381166103c2576040516342bcdf7f60e11b815260040160405180910390fd5b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0383169081179091556040519081527f8f0027d0b2a35483f3f87c934e81b55ece66a97df9ae3173f9c0b6d8363edeb6906020016102d0565b6004546001600160a01b03163314610461576040517fa57d5bb300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008281526005602090815260408083206001600160a01b038516845290915290205460ff16156104be576040517ff384e7fd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006104ca83836106c2565b6002546003546040517f23b872dd0000000000000000000000000000000000000000000000000000000081526001600160a01b03918216600482015285821660248201526044810184905292935016906323b872dd906064016020604051808303816000875af1158015610542573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105669190610b94565b50505050565b60008061057984846106c2565b9150505b92915050565b6000546001600160a01b031633146105dd5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610249565b6001600160a01b0381166106595760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f64647265737300000000000000000000000000000000000000000000000000006064820152608401610249565b61066281610665565b50565b600080546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60048054604080517fb6d1b2dd000000000000000000000000000000000000000000000000000000008152905160009384936001600160a01b03169263b6d1b2dd92818301926020928290030181865afa158015610724573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107489190610bb6565b9050600061075685856107e2565b90506000610763866108b7565b90506000816107927f000000000000000000000000000000000000000000000000000000000000000085610be5565b61079c9190610c04565b905060006107aa8286610be5565b90506107d67f000000000000000000000000000000000000000000000000000000000000000082610c04565b98975050505050505050565b600480546040517f4c43adea00000000000000000000000000000000000000000000000000000000815260009283926001600160a01b031691634c43adea916108419188918891019182526001600160a01b0316602082015260400190565b602060405180830381865afa15801561085e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108829190610bb6565b9050600061088f856108b7565b9050600061089c83610a45565b905060006108a983610a45565b905060006107d68284610be5565b600480546040517fa8754ef100000000000000000000000000000000000000000000000000000000815291820183905260009182916001600160a01b03169063a8754ef190602401600060405180830381865afa15801561091c573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526109449190810190610c4c565b905060008060005b8351811015610a30576000610a0e600460009054906101000a90046001600160a01b03166001600160a01b0316634c43adea8988868151811061099157610991610d05565b60200260200101516040518363ffffffff1660e01b81526004016109c89291909182526001600160a01b0316602082015260400190565b602060405180830381865afa1580156109e5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a099190610bb6565b610a45565b9050610a1a8184610d1b565b9250508080610a2890610d33565b91505061094c565b50610a3c600282610e32565b95945050505050565b6001817001000000000000000000000000000000008110610a6b5760409190911b9060801c5b680100000000000000008110610a865760209190911b9060401c5b6401000000008110610a9d5760109190911b9060201c5b620100008110610ab25760089190911b9060101c5b6101008110610ac65760049190911b9060081c5b60108110610ad95760029190911b9060041c5b60088110610ae8578160011b91505b5080820401600190811c80830401811c80830401811c80830401811c80830401811c80830401811c80830401901c80820481811015610b25578091505b50919050565b6001600160a01b038116811461066257600080fd5b600060208284031215610b5257600080fd5b8135610b5d81610b2b565b9392505050565b60008060408385031215610b7757600080fd5b823591506020830135610b8981610b2b565b809150509250929050565b600060208284031215610ba657600080fd5b81518015158114610b5d57600080fd5b600060208284031215610bc857600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b6000816000190483118215151615610bff57610bff610bcf565b500290565b600082610c2157634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052604160045260246000fd5b8051610c4781610b2b565b919050565b60006020808385031215610c5f57600080fd5b825167ffffffffffffffff80821115610c7757600080fd5b818501915085601f830112610c8b57600080fd5b815181811115610c9d57610c9d610c26565b8060051b604051601f19603f83011681018181108582111715610cc257610cc2610c26565b604052918252848201925083810185019188831115610ce057600080fd5b938501935b828510156107d657610cf685610c3c565b84529385019392850192610ce5565b634e487b7160e01b600052603260045260246000fd5b60008219821115610d2e57610d2e610bcf565b500190565b6000600019821415610d4757610d47610bcf565b5060010190565b600181815b80851115610d89578160001904821115610d6f57610d6f610bcf565b80851615610d7c57918102915b93841c9390800290610d53565b509250929050565b600082610da05750600161057d565b81610dad5750600061057d565b8160018114610dc35760028114610dcd57610de9565b600191505061057d565b60ff841115610dde57610dde610bcf565b50506001821b61057d565b5060208310610133831016604e8410600b8410161715610e0c575081810a61057d565b610e168383610d4e565b8060001904821115610e2a57610e2a610bcf565b029392505050565b6000610b5d60ff841683610d9156fea2646970667358221220436b2d5d7810867390c8c32915b7b12959ac7e9a00374528fd952e4cc724255964736f6c634300080b0033";

type TokenRewardsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenRewardsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenRewards__factory extends ContractFactory {
  constructor(...args: TokenRewardsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "TokenRewards";
  }

  deploy(
    _raffleContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenRewards> {
    return super.deploy(
      _raffleContractAddress,
      overrides || {}
    ) as Promise<TokenRewards>;
  }
  getDeployTransaction(
    _raffleContractAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_raffleContractAddress, overrides || {});
  }
  attach(address: string): TokenRewards {
    return super.attach(address) as TokenRewards;
  }
  connect(signer: Signer): TokenRewards__factory {
    return super.connect(signer) as TokenRewards__factory;
  }
  static readonly contractName: "TokenRewards";
  public readonly contractName: "TokenRewards";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenRewardsInterface {
    return new utils.Interface(_abi) as TokenRewardsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenRewards {
    return new Contract(address, _abi, signerOrProvider) as TokenRewards;
  }
}
