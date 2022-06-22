// import { ChainId } from '@pancakeswap/sdk'

// export const SUPPORTED_CHAINS = [ChainId.ETHEREUM, ChainId.BSC_MAINNET, ChainId.POLYGON, ChainId.FANTOM]

// export const NETWORKS = {
//  [ChainId.ETHEREUM]: {
//   chainId: `0x${Number(ChainId.ETHEREUM).toString(16)}`,
//   chainName: 'Ethereum Mainnet',
//   nativeCurrency: {
//    name: 'ETH',
//    symbol: 'ETH',
//    decimals: 18,
//   },
//   rpcUrls: ['https://mainnet.infura.io/v3/'],
//   blockExplorerUrls: ['https://etherscan.io'],
//  },
//  [ChainId.BSC_MAINNET]: {
//   chainId: `0x${Number(ChainId.BSC_MAINNET).toString(16)}`,
//   chainName: 'BNB Smart Chain',
//   nativeCurrency: {
//    name: 'BNB',
//    symbol: 'BNB',
//    decimals: 18,
//   },
//   rpcUrls: [
//    'https://bsc-dataseed1.defibit.io',
//    'https://bsc-dataseed1.ninicoin.io',
//    'https://bsc-dataseed.binance.org',
//   ],
//   blockExplorerUrls: ['https://bscscan.com'],
//  },
//  [ChainId.BSC_TESTNET]: {
//   chainId: `0x${Number(ChainId.BSC_MAINNET).toString(16)}`,
//   chainName: 'BNB Smart Chain Testnet',
//   nativeCurrency: {
//    name: 'BNB',
//    symbol: 'BNB',
//    decimals: 18,
//   },
//   rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'],
//   blockExplorerUrls: ['https://testnet.bscscan.com'],
//  },
//  [ChainId.POLYGON]: {
//   chainId: `0x${Number(ChainId.POLYGON).toString(16)}`,
//   chainName: 'Polygon Mainnet',
//   nativeCurrency: {
//    name: 'Matic',
//    symbol: 'MATIC',
//    decimals: 18,
//   },
//   rpcUrls: ['https://polygon-rpc.com/'],
//   blockExplorerUrls: ['https://polygonscan.com'],
//  },
//  [ChainId.FANTOM]: {
//   chainId: `0x${Number(ChainId.FANTOM).toString(16)}`,
//   chainName: 'Fantom Opera Mainnet',
//   nativeCurrency: {
//    name: 'Fantom',
//    symbol: 'FTM',
//    decimals: 18,
//   },
//   rpcUrls: ['https://rpc.ftm.tools/'],
//   blockExplorerUrls: ['https://ftmscan.com'],
//  },
// }

// export const NETWORK_KEYS = {
//  [ChainId.ETHEREUM]: 'ethereum',
//  [ChainId.BSC_MAINNET]: 'smartchain',
//  [ChainId.BSC_TESTNET]: 'smartchain',
//  [ChainId.POLYGON]: 'polygon',
//  [ChainId.FANTOM]: 'fantom',
// }

// export const EXPLORER_NAMES = {
//  [ChainId.ETHEREUM]: 'Etherscan',
//  [ChainId.BSC_MAINNET]: 'BscScan',
//  [ChainId.BSC_TESTNET]: 'BscScan',
//  [ChainId.POLYGON]: 'Polygonscan',
//  [ChainId.FANTOM]: 'FTMScan',
// }

// const NETWORK_LABLES = {
//  [ChainId.ETHEREUM]: 'Ethereum',
//  [ChainId.BSC_MAINNET]: 'BNB Chain',
//  [ChainId.BSC_TESTNET]: 'BSC Testnet',
//  [ChainId.POLYGON]: 'Polygon',
//  [ChainId.FANTOM]: 'Fantom',
// }

// const NETWORK_ICONS = {
//  [ChainId.ETHEREUM]: '/images/chains/eth.svg',
//  [ChainId.BSC_MAINNET]: '/images/chains/bsc.png',
//  [ChainId.BSC_TESTNET]: '/images/chains/bsc.png',
//  [ChainId.POLYGON]: '/images/chains/polygon.svg',
//  [ChainId.FANTOM]: '/images/chains/ftm.svg',
// }

// export const NetworkOptions = SUPPORTED_CHAINS.map((chainId) => ({
//  label: NETWORK_LABLES[chainId],
//  value: chainId,
//  icon: NETWORK_ICONS[chainId],
// }))



export default function empty(){
  return false;
}