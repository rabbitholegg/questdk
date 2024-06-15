export default [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
    ],
    name: 'cancelQuest',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AddressAlreadyMinted',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AddressNotSigned',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AddressZeroNotAllowed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AlreadyInitialized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'AuthOwnerDiscountToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ClaimFailed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Deprecated',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Erc20QuestAddressNotSet',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidMintFee',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MsgValueLessThanQuestNFTFee',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NewOwnerIsZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NoHandoverRequest',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OverMaxAllowedToMint',
    type: 'error',
  },
  {
    inputs: [],
    name: 'QuestAddressMismatch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'QuestEnded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'QuestFeeTooHigh',
    type: 'error',
  },
  {
    inputs: [],
    name: 'QuestIdUsed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'QuestNotQueued',
    type: 'error',
  },
  {
    inputs: [],
    name: 'QuestNotStarted',
    type: 'error',
  },
  {
    inputs: [],
    name: 'QuestTypeNotSupported',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Reentrancy',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ReferralFeeTooHigh',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Unauthorized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ZeroAddressNotAllowed',
    type: 'error',
  },
  {
    inputs: [],
    name: 'txOriginMismatch',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'ExtraMintFeeReturned',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint8',
        name: 'version',
        type: 'uint8',
      },
    ],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'questId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'rabbitHoleAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rabbitHoleAmountWei',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'questCreatorAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'questCreatorAmountWei',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'referrerAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'referrerAmountWei',
        type: 'uint256',
      },
    ],
    name: 'MintFeePaid',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'mintFee',
        type: 'uint256',
      },
    ],
    name: 'MintFeeSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'addresses',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'fees',
        type: 'uint256[]',
      },
    ],
    name: 'NftQuestFeeListSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint256',
        name: 'nftQuestFee',
        type: 'uint256',
      },
    ],
    name: 'NftQuestFeeSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'pendingOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipHandoverCanceled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'pendingOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipHandoverRequested',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'oldOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'questAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'questId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'rewardToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
    ],
    name: 'Quest1155Claimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'questAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'questId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'rewardToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rewardAmountInWeiOrTokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'referrer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'referralFee',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'mintFeeEthWei',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'tokenReferralFee',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'referralClaimAmount',
        type: 'uint256',
      },
    ],
    name: 'QuestClaimReferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'questAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'questId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'rewardToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rewardAmountInWei',
        type: 'uint256',
      },
    ],
    name: 'QuestClaimed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'questAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'extraData',
        type: 'string',
      },
    ],
    name: 'QuestClaimedData',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'questAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'questId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'rewardToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rewardAmountInWeiOrTokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'referrer',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'referralFee',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'mintFeeEthWei',
        type: 'uint256',
      },
    ],
    name: 'QuestClaimedReferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'creator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'contractAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'projectName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'questName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'questId',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'questType',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'actionType',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint32',
        name: 'chainId',
        type: 'uint32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'rewardToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'startTime',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'totalParticipants',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'rewardAmountOrTokenId',
        type: 'uint256',
      },
    ],
    name: 'QuestCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint16',
        name: 'percent',
        type: 'uint16',
      },
    ],
    name: 'ReferralFeeSet',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'roles',
        type: 'uint256',
      },
    ],
    name: 'RolesUpdated',
    type: 'event',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'txHash',
        type: 'bytes32',
      },
      {
        internalType: 'uint32',
        name: 'txHashChainId',
        type: 'uint32',
      },
      {
        internalType: 'string',
        name: 'actionType',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'buildJsonString',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'cancelOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'compressedData_',
        type: 'bytes',
      },
    ],
    name: 'claimCompressed',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'compressedData_',
        type: 'bytes',
      },
      {
        internalType: 'address',
        name: 'claimer',
        type: 'address',
      },
    ],
    name: 'claimCompressedRef',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'claimOptimized',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'claimSignerAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pendingOwner',
        type: 'address',
      },
    ],
    name: 'completeOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'rewardTokenAddress_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'endTime_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startTime_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalParticipants_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'create1155QuestAndQueue',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'txHashChainId_',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: 'rewardTokenAddress_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'endTime_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startTime_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalParticipants_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'actionType_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'questName_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'projectName_',
        type: 'string',
      },
    ],
    name: 'createERC1155Quest',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'rewardTokenAddress_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'endTime_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startTime_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalParticipants_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'tokenId_',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'actionType_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'questName_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'projectName_',
        type: 'string',
      },
    ],
    name: 'createERC1155Quest',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'rewardTokenAddress_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'endTime_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startTime_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalParticipants_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewardAmount_',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'actionType_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'questName_',
        type: 'string',
      },
    ],
    name: 'createERC20Quest',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint32',
        name: 'txHashChainId_',
        type: 'uint32',
      },
      {
        internalType: 'address',
        name: 'rewardTokenAddress_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'endTime_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startTime_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalParticipants_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewardAmount_',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'actionType_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'questName_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'projectName_',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'referralRewardFee_',
        type: 'uint256',
      },
    ],
    name: 'createERC20Quest',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'rewardTokenAddress_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'endTime_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'startTime_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'totalParticipants_',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'rewardAmount_',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'createQuestAndQueue',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'defaultMintFeeRecipient',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'erc1155QuestAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'erc20QuestAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'address_',
        type: 'address',
      },
    ],
    name: 'getAddressMinted',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
    ],
    name: 'getNumberMinted',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
    ],
    name: 'getQuestName',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'roles',
        type: 'uint256',
      },
    ],
    name: 'grantRoles',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'roles',
        type: 'uint256',
      },
    ],
    name: 'hasAllRoles',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'roles',
        type: 'uint256',
      },
    ],
    name: 'hasAnyRole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'claimSignerAddress_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'protocolFeeRecipient_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'erc20QuestAddress_',
        type: 'address',
      },
      {
        internalType: 'address payable',
        name: 'erc1155QuestAddress_',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'ownerAddress_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint16',
        name: 'referralFee_',
        type: 'uint16',
      },
      {
        internalType: 'uint256',
        name: 'mintFee_',
        type: 'uint256',
      },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'mintFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: 'result',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'pendingOwner',
        type: 'address',
      },
    ],
    name: 'ownershipHandoverExpiresAt',
    outputs: [
      {
        internalType: 'uint256',
        name: 'result',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'protocolFeeRecipient',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
    ],
    name: 'questData',
    outputs: [
      {
        components: [
          {
            internalType: 'address',
            name: 'questAddress',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'rewardToken',
            type: 'address',
          },
          {
            internalType: 'bool',
            name: 'queued',
            type: 'bool',
          },
          {
            internalType: 'uint16',
            name: 'questFee',
            type: 'uint16',
          },
          {
            internalType: 'uint256',
            name: 'startTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'endTime',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'totalParticipants',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'numberMinted',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'redeemedTokens',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'rewardAmountOrTokenId',
            type: 'uint256',
          },
          {
            internalType: 'bool',
            name: 'hasWithdrawn',
            type: 'bool',
          },
        ],
        internalType: 'struct IQuestFactory.QuestData',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'questFee',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
    ],
    name: 'questInfo',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
    ],
    name: 'questJsonData',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'actionType',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'questName',
            type: 'string',
          },
          {
            internalType: 'uint32',
            name: 'txHashChainId',
            type: 'uint32',
          },
        ],
        internalType: 'struct IQuestFactory.QuestJsonData',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    name: 'quests',
    outputs: [
      {
        internalType: 'address',
        name: 'questAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'totalParticipants',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'numberMinted',
        type: 'uint256',
      },
      {
        internalType: 'string',
        name: 'questType',
        type: 'string',
      },
      {
        internalType: 'uint40',
        name: 'durationTotal',
        type: 'uint40',
      },
      {
        internalType: 'address',
        name: 'questCreator',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'mintFeeRecipient',
        type: 'address',
      },
      {
        internalType: 'string',
        name: 'actionType',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'questName',
        type: 'string',
      },
      {
        internalType: 'uint32',
        name: 'txHashChainId',
        type: 'uint32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'hash_',
        type: 'bytes32',
      },
      {
        internalType: 'bytes',
        name: 'signature_',
        type: 'bytes',
      },
    ],
    name: 'recoverSigner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'referralFee',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'referralRewardTimestamp',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'roles',
        type: 'uint256',
      },
    ],
    name: 'renounceRoles',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'requestOwnershipHandover',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'roles',
        type: 'uint256',
      },
    ],
    name: 'revokeRoles',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
    ],
    name: 'rolesOf',
    outputs: [
      {
        internalType: 'uint256',
        name: 'roles',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'claimSignerAddress_',
        type: 'address',
      },
    ],
    name: 'setClaimSignerAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'mintFeeRecipient_',
        type: 'address',
      },
    ],
    name: 'setDefaultMintFeeRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'erc1155QuestAddress_',
        type: 'address',
      },
    ],
    name: 'setErc1155QuestAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'erc20QuestAddress_',
        type: 'address',
      },
    ],
    name: 'setErc20QuestAddress',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'mintFee_',
        type: 'uint256',
      },
    ],
    name: 'setMintFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'protocolFeeRecipient_',
        type: 'address',
      },
    ],
    name: 'setProtocolFeeRecipient',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'questFee_',
        type: 'uint16',
      },
    ],
    name: 'setQuestFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'referralFee_',
        type: 'uint16',
      },
    ],
    name: 'setReferralFee',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'timestamp_',
        type: 'uint256',
      },
    ],
    name: 'setReferralRewardTimestamp',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'questId_',
        type: 'string',
      },
      {
        internalType: 'address',
        name: 'protocolFeeRecipient_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'protocolPayout_',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'mintFeeRecipient_',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'mintPayout',
        type: 'uint256',
      },
    ],
    name: 'withdrawCallback',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
] as const;
