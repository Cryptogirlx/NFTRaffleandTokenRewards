/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockERC20, MockERC20Interface } from "../MockERC20";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferWithPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "transferWithPermit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101606040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610140523480156200003757600080fd5b506040518060400160405280600c81526020016b2a32b9ba34b733aa37b5b2b760a11b81525080604051806040016040528060018152602001603160f81b8152506040518060400160405280600d81526020016c2a32b9ba34b733902a37b5b2b760991b81525060405180604001604052806004815260200163151154d560e21b81525081818160039080519060200190620000d59291906200018e565b508051620000eb9060049060208401906200018e565b505060016005555050825160208085019190912083518483012060e08290526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f81880181905281830187905260608201869052608082019490945230818401528151808203909301835260c0019052805194019390932091935091906080523060c0526101205250620002719350505050565b8280546200019c9062000234565b90600052602060002090601f016020900481019282620001c057600085556200020b565b82601f10620001db57805160ff19168380011785556200020b565b828001600101855582156200020b579182015b828111156200020b578251825591602001919060010190620001ee565b50620002199291506200021d565b5090565b5b808211156200021957600081556001016200021e565b600181811c908216806200024957607f821691505b602082108114156200026b57634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e051610100516101205161014051611b68620002cc600039600061087a01526000610e7b01526000610eca01526000610ea501526000610dfe01526000610e2801526000610e520152611b686000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806370a08231116100e3578063a457c2d71161008c578063d505accf11610066578063d505accf14610340578063dd62ed3e14610353578063eb7955491461038c57600080fd5b8063a457c2d714610307578063a9059cbb1461031a578063b88d4fde1461032d57600080fd5b806395d89b41116100bd57806395d89b41146102d95780639dc29fac146102e1578063a1448194146102f457600080fd5b806370a082311461028a5780637ecebe00146102b357806387a41476146102c657600080fd5b80633644e51511610145578063423f6cef1161011f578063423f6cef1461025157806342842e0e14610264578063605629d61461027757600080fd5b80633644e51514610221578063395093511461022957806340c10f191461023c57600080fd5b806318160ddd1161017657806318160ddd146101ed57806323b872dd146101ff578063313ce5671461021257600080fd5b806301ffc9a71461019d57806306fdde03146101c5578063095ea7b3146101da575b600080fd5b6101b06101ab366004611689565b61039f565b60405190151581526020015b60405180910390f35b6101cd610408565b6040516101bc91906116f3565b6101b06101e8366004611722565b61049a565b6002545b6040519081526020016101bc565b6101b061020d36600461174c565b6104b2565b604051601281526020016101bc565b6101f16104d6565b6101b0610237366004611722565b6104e5565b61024f61024a366004611722565b610524565b005b6101b061025f366004611722565b610532565b6101b061027236600461174c565b610555565b61024f610285366004611799565b61057a565b6101f1610298366004611803565b6001600160a01b031660009081526020819052604090205490565b6101f16102c1366004611803565b6105ee565b61024f6102d43660046118c1565b61060c565b6101cd61067d565b61024f6102ef366004611722565b61068c565b61024f610302366004611722565b610696565b6101b0610315366004611722565b6106fd565b6101b0610328366004611722565b6107a7565b6101b061033b366004611957565b6107b5565b61024f61034e366004611799565b610826565b6101f16103613660046119bf565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6101b061039a3660046119f2565b61098a565b60006001600160e01b031982167f01ffc9a700000000000000000000000000000000000000000000000000000000148061040257506001600160e01b031982167f52b091d100000000000000000000000000000000000000000000000000000000145b92915050565b60606003805461041790611a49565b80601f016020809104026020016040519081016040528092919081815260200182805461044390611a49565b80156104905780601f1061046557610100808354040283529160200191610490565b820191906000526020600020905b81548152906001019060200180831161047357829003601f168201915b5050505050905090565b6000336104a88185856109ef565b5060019392505050565b6000336104c0858285610b48565b6104cb858585610bda565b506001949350505050565b60006104e0610df1565b905090565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906104a8908290869061051f908790611a94565b6109ef565b61052e8282610f18565b5050565b600061054e83836040518060200160405280600081525061098a565b9392505050565b6000610572848484604051806020016040528060008152506107b5565b949350505050565b61058987338787878787610826565b6105948787876104b2565b6105e55760405162461bcd60e51b815260206004820152601360248201527f7472616e7366657246726f6d206661696c65640000000000000000000000000060448201526064015b60405180910390fd5b50505050505050565b6001600160a01b038116600090815260066020526040812054610402565b61061b88338888888888610826565b610627888888846107b5565b6106735760405162461bcd60e51b815260206004820152601360248201527f736166655472616e73666572206661696c65640000000000000000000000000060448201526064016105dc565b5050505050505050565b60606004805461041790611a49565b61052e8282610ff7565b6106b133838360405180602001604052806000815250611174565b6105245760405162461bcd60e51b815260206004820152601860248201527f45524332303a206e6f6e2045524332305265636569766572000000000000000060448201526064016105dc565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091908381101561079a5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084016105dc565b6104cb82868684036109ef565b6000336104a8818585610bda565b60006107c385858585611174565b61080f5760405162461bcd60e51b815260206004820152601860248201527f45524332303a206e6f6e2045524332305265636569766572000000000000000060448201526064016105dc565b61081a8585856104b2565b50600195945050505050565b834211156108765760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016105dc565b60007f00000000000000000000000000000000000000000000000000000000000000008888886108a58c61130f565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061090082611337565b90506000610910828787876113a0565b9050896001600160a01b0316816001600160a01b0316146109735760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016105dc565b61097e8a8a8a6109ef565b50505050505050505050565b600061099833858585611174565b6109e45760405162461bcd60e51b815260206004820152601860248201527f45524332303a206e6f6e2045524332305265636569766572000000000000000060448201526064016105dc565b6104a8338585610bda565b6001600160a01b038316610a6a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f726573730000000000000000000000000000000000000000000000000000000060648201526084016105dc565b6001600160a01b038216610ae65760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f737300000000000000000000000000000000000000000000000000000000000060648201526084016105dc565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610bd45781811015610bc75760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016105dc565b610bd484848484036109ef565b50505050565b6001600160a01b038316610c565760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f647265737300000000000000000000000000000000000000000000000000000060648201526084016105dc565b6001600160a01b038216610cd25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f657373000000000000000000000000000000000000000000000000000000000060648201526084016105dc565b6001600160a01b03831660009081526020819052604090205481811015610d615760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e6365000000000000000000000000000000000000000000000000000060648201526084016105dc565b6001600160a01b03808516600090815260208190526040808220858503905591851681529081208054849290610d98908490611a94565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610de491815260200190565b60405180910390a3610bd4565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016148015610e4a57507f000000000000000000000000000000000000000000000000000000000000000046145b15610e7457507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b6001600160a01b038216610f6e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105dc565b8060026000828254610f809190611a94565b90915550506001600160a01b03821660009081526020819052604081208054839290610fad908490611a94565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b6001600160a01b0382166110735760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f2061646472657360448201527f730000000000000000000000000000000000000000000000000000000000000060648201526084016105dc565b6001600160a01b038216600090815260208190526040902054818110156111025760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e60448201527f636500000000000000000000000000000000000000000000000000000000000060648201526084016105dc565b6001600160a01b0383166000908152602081905260408120838303905560028054849290611131908490611aac565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610b3b565b6000600260055414156111c95760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016105dc565b60026005556001600160a01b0384163b156112fe57604051634fc3585960e01b81526001600160a01b03851690634fc3585990611210903390899088908890600401611ac3565b602060405180830381600087803b15801561122a57600080fd5b505af192505050801561125a575060408051601f3d908101601f1916820190925261125791810190611aff565b60015b6112e4573d808015611288576040519150601f19603f3d011682016040523d82523d6000602084013e61128d565b606091505b5080516112dc5760405162461bcd60e51b815260206004820152601860248201527f45524332303a206e6f6e2045524332305265636569766572000000000000000060448201526064016105dc565b805181602001fd5b6001600160e01b031916634fc3585960e01b149050611302565b5060015b6001600555949350505050565b6001600160a01b03811660009081526006602052604090208054600181018255905b50919050565b6000610402611344610df1565b836040517f19010000000000000000000000000000000000000000000000000000000000006020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006113b1878787876113c8565b915091506113be816114b5565b5095945050505050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156113ff57506000905060036114ac565b8460ff16601b1415801561141757508460ff16601c14155b1561142857506000905060046114ac565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa15801561147c573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166114a5576000600192509250506114ac565b9150600090505b94509492505050565b60008160048111156114c9576114c9611b1c565b14156114d25750565b60018160048111156114e6576114e6611b1c565b14156115345760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105dc565b600281600481111561154857611548611b1c565b14156115965760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105dc565b60038160048111156115aa576115aa611b1c565b14156116035760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016105dc565b600481600481111561161757611617611b1c565b14156116705760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016105dc565b50565b6001600160e01b03198116811461167057600080fd5b60006020828403121561169b57600080fd5b813561054e81611673565b6000815180845260005b818110156116cc576020818501810151868301820152016116b0565b818111156116de576000602083870101525b50601f01601f19169290920160200192915050565b60208152600061054e60208301846116a6565b80356001600160a01b038116811461171d57600080fd5b919050565b6000806040838503121561173557600080fd5b61173e83611706565b946020939093013593505050565b60008060006060848603121561176157600080fd5b61176a84611706565b925061177860208501611706565b9150604084013590509250925092565b803560ff8116811461171d57600080fd5b600080600080600080600060e0888a0312156117b457600080fd5b6117bd88611706565b96506117cb60208901611706565b955060408801359450606088013593506117e760808901611788565b925060a0880135915060c0880135905092959891949750929550565b60006020828403121561181557600080fd5b61054e82611706565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261184557600080fd5b813567ffffffffffffffff808211156118605761186061181e565b604051601f8301601f19908116603f011681019082821181831017156118885761188861181e565b816040528381528660208588010111156118a157600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080600080600080610100898b0312156118de57600080fd5b6118e789611706565b97506118f560208a01611706565b9650604089013595506060890135945061191160808a01611788565b935060a0890135925060c0890135915060e089013567ffffffffffffffff81111561193b57600080fd5b6119478b828c01611834565b9150509295985092959890939650565b6000806000806080858703121561196d57600080fd5b61197685611706565b935061198460208601611706565b925060408501359150606085013567ffffffffffffffff8111156119a757600080fd5b6119b387828801611834565b91505092959194509250565b600080604083850312156119d257600080fd5b6119db83611706565b91506119e960208401611706565b90509250929050565b600080600060608486031215611a0757600080fd5b611a1084611706565b925060208401359150604084013567ffffffffffffffff811115611a3357600080fd5b611a3f86828701611834565b9150509250925092565b600181811c90821680611a5d57607f821691505b6020821081141561133157634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008219821115611aa757611aa7611a7e565b500190565b600082821015611abe57611abe611a7e565b500390565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611af560808301846116a6565b9695505050505050565b600060208284031215611b1157600080fd5b815161054e81611673565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220c00f25883fd30536d367c0b513802456c9784bb234c6151b4bcfa14473e6eda664736f6c63430008090033";

type MockERC20ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockERC20ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockERC20__factory extends ContractFactory {
  constructor(...args: MockERC20ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockERC20";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockERC20> {
    return super.deploy(overrides || {}) as Promise<MockERC20>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockERC20 {
    return super.attach(address) as MockERC20;
  }
  connect(signer: Signer): MockERC20__factory {
    return super.connect(signer) as MockERC20__factory;
  }
  static readonly contractName: "MockERC20";
  public readonly contractName: "MockERC20";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockERC20Interface {
    return new utils.Interface(_abi) as MockERC20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockERC20 {
    return new Contract(address, _abi, signerOrProvider) as MockERC20;
  }
}
