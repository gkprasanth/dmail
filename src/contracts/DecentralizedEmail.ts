export const CONTRACT_ADDRESS = "0x6bEA73844D8F7E650383970d36c96980BbcF118a";

export const CONTRACT_ABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "subject",
        "type": "string"
      }
    ],
    "name": "EmailSent",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "receiver",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "subject",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "content",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "imageHash",
        "type": "string"
      }
    ],
    "name": "sendEmail",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getInbox",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "sender",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "subject",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "content",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "timestamp",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "imageHash",
            "type": "string"
          }
        ],
        "internalType": "struct DecentralizedEmail.Email[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];