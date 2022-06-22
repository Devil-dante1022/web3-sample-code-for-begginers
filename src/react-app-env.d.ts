/// <reference types="react-scripts" />
interface Window {
  ethereum: any
}
// interface Window {
//    ethereum?: {
//     isMetaMask?: true
//     chainId?: any
//     request?: (...args: any[]) => Promise<void>
//     on?: (...args: any[]) => void
//     removeListener?: (...args: any[]) => void
//    }
//     BinanceChain?: {
//     bnbSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>
//    }
//   }
  
//   type SerializedBigNumber = string