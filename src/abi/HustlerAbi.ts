export const HustlerAbi = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_components",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_swapmeet",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "part",
        "type": "uint8"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "len",
        "type": "uint256"
      }
    ],
    "name": "AddRles",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "MetadataUpdate",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "values",
        "type": "uint256[]"
      }
    ],
    "name": "TransferBatch",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "TransferSingle",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "value",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "URI",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "part",
        "type": "uint8"
      },
      {
        "internalType": "bytes[]",
        "name": "_rles",
        "type": "bytes[]"
      }
    ],
    "name": "addRles",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "hustlerId",
        "type": "uint256"
      }
    ],
    "name": "attributes",
    "outputs": [
      {
        "internalType": "bytes[]",
        "name": "",
        "type": "bytes[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "accounts",
        "type": "address[]"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      }
    ],
    "name": "balanceOfBatch",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint8",
        "name": "part",
        "type": "uint8"
      },
      {
        "internalType": "uint256",
        "name": "idx",
        "type": "uint256"
      }
    ],
    "name": "bodyRle",
    "outputs": [
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "hustlerId",
        "type": "uint256"
      }
    ],
    "name": "carParts",
    "outputs": [
      {
        "internalType": "bytes[]",
        "name": "",
        "type": "bytes[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "contractURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "enforcer",
    "outputs": [
      {
        "internalType": "contract IEnforcer",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "hustlerId",
        "type": "uint256"
      }
    ],
    "name": "hustlerParts",
    "outputs": [
      {
        "internalType": "bytes[]",
        "name": "",
        "type": "bytes[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "metadata",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "color",
        "type": "bytes4"
      },
      {
        "internalType": "bytes4",
        "name": "background",
        "type": "bytes4"
      },
      {
        "internalType": "bytes2",
        "name": "mask",
        "type": "bytes2"
      },
      {
        "internalType": "bytes2",
        "name": "options",
        "type": "bytes2"
      },
      {
        "internalType": "uint256",
        "name": "age",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "color",
            "type": "bytes4"
          },
          {
            "internalType": "bytes4",
            "name": "background",
            "type": "bytes4"
          },
          {
            "internalType": "bytes2",
            "name": "options",
            "type": "bytes2"
          },
          {
            "internalType": "uint8[4]",
            "name": "viewbox",
            "type": "uint8[4]"
          },
          {
            "internalType": "uint8[4]",
            "name": "body",
            "type": "uint8[4]"
          },
          {
            "internalType": "uint8[10]",
            "name": "order",
            "type": "uint8[10]"
          },
          {
            "internalType": "bytes2",
            "name": "mask",
            "type": "bytes2"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "internalType": "struct IHustlerActions.SetMetadata",
        "name": "m",
        "type": "tuple"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "mintOGTo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "mintTo",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "color",
            "type": "bytes4"
          },
          {
            "internalType": "bytes4",
            "name": "background",
            "type": "bytes4"
          },
          {
            "internalType": "bytes2",
            "name": "options",
            "type": "bytes2"
          },
          {
            "internalType": "uint8[4]",
            "name": "viewbox",
            "type": "uint8[4]"
          },
          {
            "internalType": "uint8[4]",
            "name": "body",
            "type": "uint8[4]"
          },
          {
            "internalType": "uint8[10]",
            "name": "order",
            "type": "uint8[10]"
          },
          {
            "internalType": "bytes2",
            "name": "mask",
            "type": "bytes2"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "internalType": "struct IHustlerActions.SetMetadata",
        "name": "m",
        "type": "tuple"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "mintTo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "values",
        "type": "uint256[]"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "onERC1155BatchReceived",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "onERC1155Received",
    "outputs": [
      {
        "internalType": "bytes4",
        "name": "",
        "type": "bytes4"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "title",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "subtitle",
        "type": "string"
      },
      {
        "internalType": "uint8",
        "name": "resolution",
        "type": "uint8"
      },
      {
        "internalType": "bytes4",
        "name": "background",
        "type": "bytes4"
      },
      {
        "internalType": "bytes4",
        "name": "color",
        "type": "bytes4"
      },
      {
        "internalType": "uint8[4]",
        "name": "viewbox",
        "type": "uint8[4]"
      },
      {
        "internalType": "bytes[]",
        "name": "parts",
        "type": "bytes[]"
      }
    ],
    "name": "render",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeBatchTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "operator",
        "type": "address"
      },
      {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
      }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "enforcer_",
        "type": "address"
      }
    ],
    "name": "setEnforcer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "hustlerId",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "bytes4",
            "name": "color",
            "type": "bytes4"
          },
          {
            "internalType": "bytes4",
            "name": "background",
            "type": "bytes4"
          },
          {
            "internalType": "bytes2",
            "name": "options",
            "type": "bytes2"
          },
          {
            "internalType": "uint8[4]",
            "name": "viewbox",
            "type": "uint8[4]"
          },
          {
            "internalType": "uint8[4]",
            "name": "body",
            "type": "uint8[4]"
          },
          {
            "internalType": "uint8[10]",
            "name": "order",
            "type": "uint8[10]"
          },
          {
            "internalType": "bytes2",
            "name": "mask",
            "type": "bytes2"
          },
          {
            "internalType": "string",
            "name": "name",
            "type": "string"
          }
        ],
        "internalType": "struct IHustlerActions.SetMetadata",
        "name": "m",
        "type": "tuple"
      }
    ],
    "name": "setMetadata",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "hustlerId",
        "type": "uint256"
      }
    ],
    "name": "tokenURI",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "hustlerId",
        "type": "uint256"
      },
      {
        "internalType": "uint8[]",
        "name": "slots",
        "type": "uint8[]"
      }
    ],
    "name": "unequip",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "uri",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] as const;