/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../common";
import type {
  MyNFT,
  MyNFTInterface,
} from "../../../contracts/cross-chain-nft-minter/MyNFT";

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
        indexed: false,
        internalType: "uint256",
        name: "_fromTokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_toTokenId",
        type: "uint256",
      },
    ],
    name: "BatchMetadataUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "MetadataUpdate",
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
        name: "to",
        type: "address",
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
        name: "data",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600581526020017f4d794e46540000000000000000000000000000000000000000000000000000008152506040518060400160405280600481526020017f4d4e46540000000000000000000000000000000000000000000000000000000081525081600090816200008f919062000412565b508060019081620000a1919062000412565b505050620000c4620000b8620000ca60201b60201c565b620000d260201b60201c565b620004f9565b600033905090565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200021a57607f821691505b60208210810362000230576200022f620001d2565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026200029a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826200025b565b620002a686836200025b565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620002f3620002ed620002e784620002be565b620002c8565b620002be565b9050919050565b6000819050919050565b6200030f83620002d2565b620003276200031e82620002fa565b84845462000268565b825550505050565b600090565b6200033e6200032f565b6200034b81848462000304565b505050565b5b8181101562000373576200036760008262000334565b60018101905062000351565b5050565b601f821115620003c2576200038c8162000236565b62000397846200024b565b81016020851015620003a7578190505b620003bf620003b6856200024b565b83018262000350565b50505b505050565b600082821c905092915050565b6000620003e760001984600802620003c7565b1980831691505092915050565b6000620004028383620003d4565b9150826002028217905092915050565b6200041d8262000198565b67ffffffffffffffff811115620004395762000438620001a3565b5b62000445825462000201565b6200045282828562000377565b600060209050601f8311600181146200048a576000841562000475578287015190505b620004818582620003f4565b865550620004f1565b601f1984166200049a8662000236565b60005b82811015620004c4578489015182556001820191506020850194506020810190506200049d565b86831015620004e45784890151620004e0601f891682620003d4565b8355505b6001600288020188555050505b505050505050565b612df580620005096000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb465146102a4578063b88d4fde146102c0578063c87b56dd146102dc578063e985e9c51461030c578063f2fde38b1461033c5761010b565b806370a082311461022e578063715018a61461025e5780638da5cb5b1461026857806395d89b41146102865761010b565b806323b872dd116100de57806323b872dd146101aa57806342842e0e146101c65780636352211e146101e25780636a627842146102125761010b565b806301ffc9a71461011057806306fdde0314610140578063081812fc1461015e578063095ea7b31461018e575b600080fd5b61012a60048036038101906101259190611c8f565b610358565b6040516101379190611cd7565b60405180910390f35b6101486103b9565b6040516101559190611d82565b60405180910390f35b61017860048036038101906101739190611dda565b61044b565b6040516101859190611e48565b60405180910390f35b6101a860048036038101906101a39190611e8f565b610491565b005b6101c460048036038101906101bf9190611ecf565b6105a8565b005b6101e060048036038101906101db9190611ecf565b610608565b005b6101fc60048036038101906101f79190611dda565b610628565b6040516102099190611e48565b60405180910390f35b61022c60048036038101906102279190611f22565b6106ae565b005b61024860048036038101906102439190611f22565b6106fb565b6040516102559190611f5e565b60405180910390f35b6102666107b2565b005b6102706107c6565b60405161027d9190611e48565b60405180910390f35b61028e6107f0565b60405161029b9190611d82565b60405180910390f35b6102be60048036038101906102b99190611fa5565b610882565b005b6102da60048036038101906102d5919061211a565b610898565b005b6102f660048036038101906102f19190611dda565b6108fa565b6040516103039190611d82565b60405180910390f35b6103266004803603810190610321919061219d565b610a0c565b6040516103339190611cd7565b60405180910390f35b61035660048036038101906103519190611f22565b610aa0565b005b6000634906490660e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806103b257506103b182610b23565b5b9050919050565b6060600080546103c89061220c565b80601f01602080910402602001604051908101604052809291908181526020018280546103f49061220c565b80156104415780601f1061041657610100808354040283529160200191610441565b820191906000526020600020905b81548152906001019060200180831161042457829003601f168201915b5050505050905090565b600061045682610c05565b6004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600061049c82610628565b90508073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff160361050c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610503906122af565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1661052b610c50565b73ffffffffffffffffffffffffffffffffffffffff16148061055a575061055981610554610c50565b610a0c565b5b610599576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161059090612341565b60405180910390fd5b6105a38383610c58565b505050565b6105b96105b3610c50565b82610d11565b6105f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105ef906123d3565b60405180910390fd5b610603838383610da6565b505050565b61062383838360405180602001604052806000815250610898565b505050565b6000806106348361109f565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161069c9061243f565b60405180910390fd5b80915050919050565b6106b66110dc565b6106c28160085461115a565b6106e6600854604051806080016040528060548152602001612d6c60549139611178565b60086000815480929190600101919050555050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff160361076b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610762906124d1565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6107ba6110dc565b6107c4600061121c565b565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600180546107ff9061220c565b80601f016020809104026020016040519081016040528092919081815260200182805461082b9061220c565b80156108785780601f1061084d57610100808354040283529160200191610878565b820191906000526020600020905b81548152906001019060200180831161085b57829003601f168201915b5050505050905090565b61089461088d610c50565b83836112e2565b5050565b6108a96108a3610c50565b83610d11565b6108e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108df906123d3565b60405180910390fd5b6108f48484848461144e565b50505050565b606061090582610c05565b60006006600084815260200190815260200160002080546109259061220c565b80601f01602080910402602001604051908101604052809291908181526020018280546109519061220c565b801561099e5780601f106109735761010080835404028352916020019161099e565b820191906000526020600020905b81548152906001019060200180831161098157829003601f168201915b5050505050905060006109af6114aa565b905060008151036109c4578192505050610a07565b6000825111156109f95780826040516020016109e192919061252d565b60405160208183030381529060405292505050610a07565b610a02846114c1565b925050505b919050565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610aa86110dc565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610b17576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b0e906125c3565b60405180910390fd5b610b208161121c565b50565b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610bee57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b80610bfe5750610bfd82611529565b5b9050919050565b610c0e81611593565b610c4d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c449061243f565b60405180910390fd5b50565b600033905090565b816004600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16610ccb83610628565b73ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600080610d1d83610628565b90508073ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480610d5f5750610d5e8185610a0c565b5b80610d9d57508373ffffffffffffffffffffffffffffffffffffffff16610d858461044b565b73ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b8273ffffffffffffffffffffffffffffffffffffffff16610dc682610628565b73ffffffffffffffffffffffffffffffffffffffff1614610e1c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e1390612655565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610e8b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e82906126e7565b60405180910390fd5b610e9883838360016115d4565b8273ffffffffffffffffffffffffffffffffffffffff16610eb882610628565b73ffffffffffffffffffffffffffffffffffffffff1614610f0e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f0590612655565b60405180910390fd5b6004600082815260200190815260200160002060006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556001600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055506001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a461109a83838360016115da565b505050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b6110e4610c50565b73ffffffffffffffffffffffffffffffffffffffff166111026107c6565b73ffffffffffffffffffffffffffffffffffffffff1614611158576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161114f90612753565b60405180910390fd5b565b6111748282604051806020016040528060008152506115e0565b5050565b61118182611593565b6111c0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111b7906127e5565b60405180910390fd5b806006600084815260200190815260200160002090816111e091906129b1565b507ff8e1a15aba9398e019f0b49df1a4fde98ee17ae345cb5f6b5e2c27f5033e8ce7826040516112109190611f5e565b60405180910390a15050565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611350576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161134790612acf565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114419190611cd7565b60405180910390a3505050565b611459848484610da6565b6114658484848461163b565b6114a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161149b90612b61565b60405180910390fd5b50505050565b606060405180602001604052806000815250905090565b60606114cc82610c05565b60006114d66114aa565b905060008151116114f65760405180602001604052806000815250611521565b80611500846117c2565b60405160200161151192919061252d565b6040516020818303038152906040525b915050919050565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b60008073ffffffffffffffffffffffffffffffffffffffff166115b58361109f565b73ffffffffffffffffffffffffffffffffffffffff1614159050919050565b50505050565b50505050565b6115ea8383611890565b6115f7600084848461163b565b611636576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161162d90612b61565b60405180910390fd5b505050565b600061165c8473ffffffffffffffffffffffffffffffffffffffff16611aad565b156117b5578373ffffffffffffffffffffffffffffffffffffffff1663150b7a02611685610c50565b8786866040518563ffffffff1660e01b81526004016116a79493929190612bd6565b6020604051808303816000875af19250505080156116e357506040513d601f19601f820116820180604052508101906116e09190612c37565b60015b611765573d8060008114611713576040519150601f19603f3d011682016040523d82523d6000602084013e611718565b606091505b50600081510361175d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161175490612b61565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149150506117ba565b600190505b949350505050565b6060600060016117d184611ad0565b01905060008167ffffffffffffffff8111156117f0576117ef611fef565b5b6040519080825280601f01601f1916602001820160405280156118225781602001600182028036833780820191505090505b509050600082602001820190505b600115611885578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161187957611878612c64565b5b04945060008503611830575b819350505050919050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036118ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016118f690612cdf565b60405180910390fd5b61190881611593565b15611948576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161193f90612d4b565b60405180910390fd5b6119566000838360016115d4565b61195f81611593565b1561199f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161199690612d4b565b60405180910390fd5b6001600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282540192505081905550816002600083815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4611aa96000838360016115da565b5050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611b2e577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611b2457611b23612c64565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611b6b576d04ee2d6d415b85acef81000000008381611b6157611b60612c64565b5b0492506020810190505b662386f26fc100008310611b9a57662386f26fc100008381611b9057611b8f612c64565b5b0492506010810190505b6305f5e1008310611bc3576305f5e1008381611bb957611bb8612c64565b5b0492506008810190505b6127108310611be8576127108381611bde57611bdd612c64565b5b0492506004810190505b60648310611c0b5760648381611c0157611c00612c64565b5b0492506002810190505b600a8310611c1a576001810190505b80915050919050565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611c6c81611c37565b8114611c7757600080fd5b50565b600081359050611c8981611c63565b92915050565b600060208284031215611ca557611ca4611c2d565b5b6000611cb384828501611c7a565b91505092915050565b60008115159050919050565b611cd181611cbc565b82525050565b6000602082019050611cec6000830184611cc8565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611d2c578082015181840152602081019050611d11565b60008484015250505050565b6000601f19601f8301169050919050565b6000611d5482611cf2565b611d5e8185611cfd565b9350611d6e818560208601611d0e565b611d7781611d38565b840191505092915050565b60006020820190508181036000830152611d9c8184611d49565b905092915050565b6000819050919050565b611db781611da4565b8114611dc257600080fd5b50565b600081359050611dd481611dae565b92915050565b600060208284031215611df057611def611c2d565b5b6000611dfe84828501611dc5565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611e3282611e07565b9050919050565b611e4281611e27565b82525050565b6000602082019050611e5d6000830184611e39565b92915050565b611e6c81611e27565b8114611e7757600080fd5b50565b600081359050611e8981611e63565b92915050565b60008060408385031215611ea657611ea5611c2d565b5b6000611eb485828601611e7a565b9250506020611ec585828601611dc5565b9150509250929050565b600080600060608486031215611ee857611ee7611c2d565b5b6000611ef686828701611e7a565b9350506020611f0786828701611e7a565b9250506040611f1886828701611dc5565b9150509250925092565b600060208284031215611f3857611f37611c2d565b5b6000611f4684828501611e7a565b91505092915050565b611f5881611da4565b82525050565b6000602082019050611f736000830184611f4f565b92915050565b611f8281611cbc565b8114611f8d57600080fd5b50565b600081359050611f9f81611f79565b92915050565b60008060408385031215611fbc57611fbb611c2d565b5b6000611fca85828601611e7a565b9250506020611fdb85828601611f90565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61202782611d38565b810181811067ffffffffffffffff8211171561204657612045611fef565b5b80604052505050565b6000612059611c23565b9050612065828261201e565b919050565b600067ffffffffffffffff82111561208557612084611fef565b5b61208e82611d38565b9050602081019050919050565b82818337600083830152505050565b60006120bd6120b88461206a565b61204f565b9050828152602081018484840111156120d9576120d8611fea565b5b6120e484828561209b565b509392505050565b600082601f83011261210157612100611fe5565b5b81356121118482602086016120aa565b91505092915050565b6000806000806080858703121561213457612133611c2d565b5b600061214287828801611e7a565b945050602061215387828801611e7a565b935050604061216487828801611dc5565b925050606085013567ffffffffffffffff81111561218557612184611c32565b5b612191878288016120ec565b91505092959194509250565b600080604083850312156121b4576121b3611c2d565b5b60006121c285828601611e7a565b92505060206121d385828601611e7a565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061222457607f821691505b602082108103612237576122366121dd565b5b50919050565b7f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560008201527f7200000000000000000000000000000000000000000000000000000000000000602082015250565b6000612299602183611cfd565b91506122a48261223d565b604082019050919050565b600060208201905081810360008301526122c88161228c565b9050919050565b7f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60008201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000602082015250565b600061232b603d83611cfd565b9150612336826122cf565b604082019050919050565b6000602082019050818103600083015261235a8161231e565b9050919050565b7f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560008201527f72206f7220617070726f76656400000000000000000000000000000000000000602082015250565b60006123bd602d83611cfd565b91506123c882612361565b604082019050919050565b600060208201905081810360008301526123ec816123b0565b9050919050565b7f4552433732313a20696e76616c696420746f6b656e2049440000000000000000600082015250565b6000612429601883611cfd565b9150612434826123f3565b602082019050919050565b600060208201905081810360008301526124588161241c565b9050919050565b7f4552433732313a2061646472657373207a65726f206973206e6f74206120766160008201527f6c6964206f776e65720000000000000000000000000000000000000000000000602082015250565b60006124bb602983611cfd565b91506124c68261245f565b604082019050919050565b600060208201905081810360008301526124ea816124ae565b9050919050565b600081905092915050565b600061250782611cf2565b61251181856124f1565b9350612521818560208601611d0e565b80840191505092915050565b600061253982856124fc565b915061254582846124fc565b91508190509392505050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006125ad602683611cfd565b91506125b882612551565b604082019050919050565b600060208201905081810360008301526125dc816125a0565b9050919050565b7f4552433732313a207472616e736665722066726f6d20696e636f72726563742060008201527f6f776e6572000000000000000000000000000000000000000000000000000000602082015250565b600061263f602583611cfd565b915061264a826125e3565b604082019050919050565b6000602082019050818103600083015261266e81612632565b9050919050565b7f4552433732313a207472616e7366657220746f20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006126d1602483611cfd565b91506126dc82612675565b604082019050919050565b60006020820190508181036000830152612700816126c4565b9050919050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061273d602083611cfd565b915061274882612707565b602082019050919050565b6000602082019050818103600083015261276c81612730565b9050919050565b7f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60008201527f6578697374656e7420746f6b656e000000000000000000000000000000000000602082015250565b60006127cf602e83611cfd565b91506127da82612773565b604082019050919050565b600060208201905081810360008301526127fe816127c2565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026128677fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8261282a565b612871868361282a565b95508019841693508086168417925050509392505050565b6000819050919050565b60006128ae6128a96128a484611da4565b612889565b611da4565b9050919050565b6000819050919050565b6128c883612893565b6128dc6128d4826128b5565b848454612837565b825550505050565b600090565b6128f16128e4565b6128fc8184846128bf565b505050565b5b81811015612920576129156000826128e9565b600181019050612902565b5050565b601f8211156129655761293681612805565b61293f8461281a565b8101602085101561294e578190505b61296261295a8561281a565b830182612901565b50505b505050565b600082821c905092915050565b60006129886000198460080261296a565b1980831691505092915050565b60006129a18383612977565b9150826002028217905092915050565b6129ba82611cf2565b67ffffffffffffffff8111156129d3576129d2611fef565b5b6129dd825461220c565b6129e8828285612924565b600060209050601f831160018114612a1b5760008415612a09578287015190505b612a138582612995565b865550612a7b565b601f198416612a2986612805565b60005b82811015612a5157848901518255600182019150602085019450602081019050612a2c565b86831015612a6e5784890151612a6a601f891682612977565b8355505b6001600288020188555050505b505050505050565b7f4552433732313a20617070726f766520746f2063616c6c657200000000000000600082015250565b6000612ab9601983611cfd565b9150612ac482612a83565b602082019050919050565b60006020820190508181036000830152612ae881612aac565b9050919050565b7f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560008201527f63656976657220696d706c656d656e7465720000000000000000000000000000602082015250565b6000612b4b603283611cfd565b9150612b5682612aef565b604082019050919050565b60006020820190508181036000830152612b7a81612b3e565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000612ba882612b81565b612bb28185612b8c565b9350612bc2818560208601611d0e565b612bcb81611d38565b840191505092915050565b6000608082019050612beb6000830187611e39565b612bf86020830186611e39565b612c056040830185611f4f565b8181036060830152612c178184612b9d565b905095945050505050565b600081519050612c3181611c63565b92915050565b600060208284031215612c4d57612c4c611c2d565b5b6000612c5b84828501612c22565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f4552433732313a206d696e7420746f20746865207a65726f2061646472657373600082015250565b6000612cc9602083611cfd565b9150612cd482612c93565b602082019050919050565b60006020820190508181036000830152612cf881612cbc565b9050919050565b7f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000600082015250565b6000612d35601c83611cfd565b9150612d4082612cff565b602082019050919050565b60006020820190508181036000830152612d6481612d28565b905091905056fe68747470733a2f2f697066732e696f2f697066732f516d59754b593435417138374c654c315235646862316871484c70365a46624a614350386a78714b4d314d5836792f626162655f727574685f312e6a736f6ea2646970667358221220f6f823d9be2ae813d3c95f0a7503251c821a61f9e82a754878b95d996c2523dc64736f6c63430008130033";

type MyNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyNFT__factory extends ContractFactory {
  constructor(...args: MyNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      MyNFT & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MyNFT__factory {
    return super.connect(runner) as MyNFT__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyNFTInterface {
    return new Interface(_abi) as MyNFTInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MyNFT {
    return new Contract(address, _abi, runner) as unknown as MyNFT;
  }
}
