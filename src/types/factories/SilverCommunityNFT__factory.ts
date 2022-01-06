/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { SilverCommunityNFT } from "../SilverCommunityNFT";

export class SilverCommunityNFT__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _baseURI_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SilverCommunityNFT> {
    return super.deploy(
      _baseURI_,
      overrides || {}
    ) as Promise<SilverCommunityNFT>;
  }
  getDeployTransaction(
    _baseURI_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_baseURI_, overrides || {});
  }
  attach(address: string): SilverCommunityNFT {
    return super.attach(address) as SilverCommunityNFT;
  }
  connect(signer: Signer): SilverCommunityNFT__factory {
    return super.connect(signer) as SilverCommunityNFT__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SilverCommunityNFT {
    return new Contract(address, _abi, signerOrProvider) as SilverCommunityNFT;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_baseURI_",
        type: "string",
      },
    ],
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
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OperatorAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OperatorRemoved",
    type: "event",
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
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "NAME",
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
    name: "SYMBOL",
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
        name: "account",
        type: "address",
      },
    ],
    name: "addOperator",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "baseURI",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isOperator",
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
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "removeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOperator",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "newURI",
        type: "string",
      },
    ],
    name: "setURI",
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
    name: "theBaseURI",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
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
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200213d3803806200213d833981016040819052620000349162000391565b6040518060400160405280601c81526020017f546f74656d20466f78204c616b6520436f6d6d756e697479204e465400000000815250604051806040016040528060078152602001661518d19613919560ca1b815250620000a46200009e6200011960201b60201c565b6200011d565b8151620000b9906001906020850190620002eb565b508051620000cf906002906020840190620002eb565b505050620000ec620000e66200011960201b60201c565b6200016d565b620000fc57620000fc3362000190565b805162000111906008906020840190620002eb565b5050620004ba565b3390565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006200018a826007620001e260201b62000cc81790919060201c565b92915050565b620001ab8160076200026b60201b62000d4b1790919060201c565b6040516001600160a01b038216907fac6fa858e9350a46cec16539926e0fde25b7629f84b5a72bffaae4df888ae86d90600090a250565b60006001600160a01b0382166200024b5760405162461bcd60e51b815260206004820152602260248201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604482015261737360f01b60648201526084015b60405180910390fd5b506001600160a01b03166000908152602091909152604090205460ff1690565b620002778282620001e2565b15620002c65760405162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c6500604482015260640162000242565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b828054620002f99062000467565b90600052602060002090601f0160209004810192826200031d576000855562000368565b82601f106200033857805160ff191683800117855562000368565b8280016001018555821562000368579182015b82811115620003685782518255916020019190600101906200034b565b50620003769291506200037a565b5090565b5b808211156200037657600081556001016200037b565b60006020808385031215620003a4578182fd5b82516001600160401b0380821115620003bb578384fd5b818501915085601f830112620003cf578384fd5b815181811115620003e457620003e4620004a4565b604051601f8201601f19908116603f011681019083821181831017156200040f576200040f620004a4565b81604052828152888684870101111562000427578687fd5b8693505b828410156200044a57848401860151818501870152928501926200042b565b828411156200045b57868684830101525b98975050505050505050565b600181811c908216806200047c57607f821691505b602082108114156200049e57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b611c7380620004ca6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806370a08231116100f9578063a3f4df7e11610097578063c87b56dd11610071578063c87b56dd14610392578063e985e9c5146103a5578063f2fde38b146103e1578063f76f8d78146103f4576101a9565b8063a3f4df7e14610330578063ac8a584a1461036c578063b88d4fde1461037f576101a9565b80638da5cb5b116100d35780638da5cb5b146102f157806395d89b41146103025780639870d7fe1461030a578063a22cb4651461031d576101a9565b806370a08231146102c0578063715018a6146102e157806377eebbdb146102e9576101a9565b80632ab6f8db1161016657806342966c681161014057806342966c681461027f5780636352211e146102925780636c0360eb146102a55780636d70f7ae146102ad576101a9565b80632ab6f8db1461025157806340c10f191461025957806342842e0e1461026c576101a9565b806301ffc9a7146101ae57806302fe5305146101d657806306fdde03146101eb578063081812fc14610200578063095ea7b31461022b57806323b872dd1461023e575b600080fd5b6101c16101bc3660046118e3565b61041a565b60405190151581526020015b60405180910390f35b6101e96101e436600461191b565b61046e565b005b6101f36104b8565b6040516101cd9190611a21565b61021361020e366004611961565b61054a565b6040516001600160a01b0390911681526020016101cd565b6101e96102393660046118ba565b6105df565b6101e961024c3660046117cc565b6106f5565b6101e9610727565b6101e96102673660046118ba565b610732565b6101e961027a3660046117cc565b6107ae565b6101e961028d366004611961565b6107c9565b6102136102a0366004611961565b6107fa565b6101f3610871565b6101c16102bb366004611780565b610880565b6102d36102ce366004611780565b61088d565b6040519081526020016101cd565b6101e9610914565b6101f3610948565b6000546001600160a01b0316610213565b6101f36109d6565b6101e9610318366004611780565b6109e5565b6101e961032b366004611880565b610a18565b6101f36040518060400160405280601c81526020017f546f74656d20466f78204c616b6520436f6d6d756e697479204e46540000000081525081565b6101e961037a366004611780565b610aea565b6101e961038d366004611807565b610b1d565b6101f36103a0366004611961565b610b55565b6101c16103b336600461179a565b6001600160a01b03918216600090815260066020908152604080832093909416825291909152205460ff1690565b6101e96103ef366004611780565b610c30565b6101f3604051806040016040528060078152602001661518d19613919560ca1b81525081565b60006001600160e01b031982166380ac58cd60e01b148061044b57506001600160e01b03198216635b5e139f60e01b145b8061046657506301ffc9a760e01b6001600160e01b03198316145b90505b919050565b6000546001600160a01b031633146104a15760405162461bcd60e51b815260040161049890611a86565b60405180910390fd5b80516104b490600890602084019061165a565b5050565b6060600180546104c790611b7b565b80601f01602080910402602001604051908101604052809291908181526020018280546104f390611b7b565b80156105405780601f1061051557610100808354040283529160200191610540565b820191906000526020600020905b81548152906001019060200180831161052357829003601f168201915b5050505050905090565b6000818152600360205260408120546001600160a01b03166105c35760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610498565b506000908152600560205260409020546001600160a01b031690565b60006105ea826107fa565b9050806001600160a01b0316836001600160a01b031614156106585760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610498565b336001600160a01b0382161480610674575061067481336103b3565b6106e65760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610498565b6106f08383610dc7565b505050565b610700335b82610e35565b61071c5760405162461bcd60e51b815260040161049890611abb565b6106f0838383610f2c565b610730336110cc565b565b61073b336102bb565b6107a45760405162461bcd60e51b815260206004820152603460248201527f4f70657261746f72526f6c653a2063616c6c657220646f6573206e6f74206861604482015273766520746865204f70657261746f7220726f6c6560601b6064820152608401610498565b6104b4828261110e565b6106f083838360405180602001604052806000815250610b1d565b6107d2336106fa565b6107ee5760405162461bcd60e51b815260040161049890611abb565b6107f781611250565b50565b6000818152600360205260408120546001600160a01b0316806104665760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610498565b6060600880546104c790611b7b565b6000610466600783610cc8565b60006001600160a01b0382166108f85760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610498565b506001600160a01b031660009081526004602052604090205490565b6000546001600160a01b0316331461093e5760405162461bcd60e51b815260040161049890611a86565b61073060006112eb565b6008805461095590611b7b565b80601f016020809104026020016040519081016040528092919081815260200182805461098190611b7b565b80156109ce5780601f106109a3576101008083540402835291602001916109ce565b820191906000526020600020905b8154815290600101906020018083116109b157829003601f168201915b505050505081565b6060600280546104c790611b7b565b6000546001600160a01b03163314610a0f5760405162461bcd60e51b815260040161049890611a86565b6107f78161133b565b6001600160a01b038216331415610a715760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610498565b3360008181526006602090815260408083206001600160a01b0387168085529252909120805460ff1916841515179055906001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c3183604051610ade911515815260200190565b60405180910390a35050565b6000546001600160a01b03163314610b145760405162461bcd60e51b815260040161049890611a86565b6107f7816110cc565b610b273383610e35565b610b435760405162461bcd60e51b815260040161049890611abb565b610b4f8484848461137d565b50505050565b6000818152600360205260409020546060906001600160a01b0316610bd45760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610498565b6000610bde610871565b90506000815111610bfe5760405180602001604052806000815250610c29565b80610c08846113b0565b604051602001610c199291906119a5565b6040516020818303038152906040525b9392505050565b6000546001600160a01b03163314610c5a5760405162461bcd60e51b815260040161049890611a86565b6001600160a01b038116610cbf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610498565b6107f7816112eb565b60006001600160a01b038216610d2b5760405162461bcd60e51b815260206004820152602260248201527f526f6c65733a206163636f756e7420697320746865207a65726f206164647265604482015261737360f01b6064820152608401610498565b506001600160a01b03166000908152602091909152604090205460ff1690565b610d558282610cc8565b15610da25760405162461bcd60e51b815260206004820152601f60248201527f526f6c65733a206163636f756e7420616c72656164792068617320726f6c65006044820152606401610498565b6001600160a01b0316600090815260209190915260409020805460ff19166001179055565b600081815260056020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610dfc826107fa565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600360205260408120546001600160a01b0316610eae5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610498565b6000610eb9836107fa565b9050806001600160a01b0316846001600160a01b03161480610ef45750836001600160a01b0316610ee98461054a565b6001600160a01b0316145b80610f2457506001600160a01b0380821660009081526006602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610f3f826107fa565b6001600160a01b031614610fa75760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610498565b6001600160a01b0382166110095760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610498565b611014600082610dc7565b6001600160a01b038316600090815260046020526040812080546001929061103d908490611b38565b90915550506001600160a01b038216600090815260046020526040812080546001929061106b908490611b0c565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6110d76007826114cb565b6040516001600160a01b038216907f80c0b871b97b595b16a7741c1b06fed0c6f6f558639f18ccbce50724325dc40d90600090a250565b6001600160a01b0382166111645760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610498565b6000818152600360205260409020546001600160a01b0316156111c95760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610498565b6001600160a01b03821660009081526004602052604081208054600192906111f2908490611b0c565b909155505060008181526003602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600061125b826107fa565b9050611268600083610dc7565b6001600160a01b0381166000908152600460205260408120805460019290611291908490611b38565b909155505060008281526003602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b611346600782610d4b565b6040516001600160a01b038216907fac6fa858e9350a46cec16539926e0fde25b7629f84b5a72bffaae4df888ae86d90600090a250565b611388848484610f2c565b6113948484848461154d565b610b4f5760405162461bcd60e51b815260040161049890611a34565b6060816113d557506040805180820190915260018152600360fc1b6020820152610469565b8160005b81156113ff57806113e981611bb6565b91506113f89050600a83611b24565b91506113d9565b60008167ffffffffffffffff81111561142857634e487b7160e01b600052604160045260246000fd5b6040519080825280601f01601f191660200182016040528015611452576020820181803683370190505b5090505b8415610f2457611467600183611b38565b9150611474600a86611bd1565b61147f906030611b0c565b60f81b8183815181106114a257634e487b7160e01b600052603260045260246000fd5b60200101906001600160f81b031916908160001a9053506114c4600a86611b24565b9450611456565b6114d58282610cc8565b61152b5760405162461bcd60e51b815260206004820152602160248201527f526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6044820152606560f81b6064820152608401610498565b6001600160a01b0316600090815260209190915260409020805460ff19169055565b60006001600160a01b0384163b1561164f57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906115919033908990889088906004016119e4565b602060405180830381600087803b1580156115ab57600080fd5b505af19250505080156115db575060408051601f3d908101601f191682019092526115d8918101906118ff565b60015b611635573d808015611609576040519150601f19603f3d011682016040523d82523d6000602084013e61160e565b606091505b50805161162d5760405162461bcd60e51b815260040161049890611a34565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610f24565b506001949350505050565b82805461166690611b7b565b90600052602060002090601f01602090048101928261168857600085556116ce565b82601f106116a157805160ff19168380011785556116ce565b828001600101855582156116ce579182015b828111156116ce5782518255916020019190600101906116b3565b506116da9291506116de565b5090565b5b808211156116da57600081556001016116df565b600067ffffffffffffffff8084111561170e5761170e611c11565b604051601f8501601f19908116603f0116810190828211818310171561173657611736611c11565b8160405280935085815286868601111561174f57600080fd5b858560208301376000602087830101525050509392505050565b80356001600160a01b038116811461046957600080fd5b600060208284031215611791578081fd5b610c2982611769565b600080604083850312156117ac578081fd5b6117b583611769565b91506117c360208401611769565b90509250929050565b6000806000606084860312156117e0578081fd5b6117e984611769565b92506117f760208501611769565b9150604084013590509250925092565b6000806000806080858703121561181c578081fd5b61182585611769565b935061183360208601611769565b925060408501359150606085013567ffffffffffffffff811115611855578182fd5b8501601f81018713611865578182fd5b611874878235602084016116f3565b91505092959194509250565b60008060408385031215611892578182fd5b61189b83611769565b9150602083013580151581146118af578182fd5b809150509250929050565b600080604083850312156118cc578182fd5b6118d583611769565b946020939093013593505050565b6000602082840312156118f4578081fd5b8135610c2981611c27565b600060208284031215611910578081fd5b8151610c2981611c27565b60006020828403121561192c578081fd5b813567ffffffffffffffff811115611942578182fd5b8201601f81018413611952578182fd5b610f24848235602084016116f3565b600060208284031215611972578081fd5b5035919050565b60008151808452611991816020860160208601611b4f565b601f01601f19169290920160200192915050565b600083516119b7818460208801611b4f565b8351908301906119cb818360208801611b4f565b64173539b7b760d91b9101908152600501949350505050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090611a1790830184611979565b9695505050505050565b600060208252610c296020830184611979565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b60008219821115611b1f57611b1f611be5565b500190565b600082611b3357611b33611bfb565b500490565b600082821015611b4a57611b4a611be5565b500390565b60005b83811015611b6a578181015183820152602001611b52565b83811115610b4f5750506000910152565b600181811c90821680611b8f57607f821691505b60208210811415611bb057634e487b7160e01b600052602260045260246000fd5b50919050565b6000600019821415611bca57611bca611be5565b5060010190565b600082611be057611be0611bfb565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160e01b0319811681146107f757600080fdfea26469706673582212208c246e8886957f9f039e7fefa209271bdf58b4fd47a45ef493486b822ceab9aa64736f6c63430008030033";
