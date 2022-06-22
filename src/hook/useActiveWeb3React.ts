// import { Web3Provider } from '@coinbase/wallet-sdk/dist/provider/Web3Provider';
// import { useWeb3React } from '@web3-react/core';
// import { Web3ReactContextInterface } from '@web3-react/core/dist/types';
// import { useState , useRef, useEffect } from 'react';
// // import {SUPPORTED_CHAINS} from '../components/WalletConnect/network';



// const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider> => {
//    const { library, chainId: connectedChainId, ...web3React } = useWeb3React()
//    const refEth = useRef(library)
//    const metamaskChainId = window.ethereum?.chainId
  
//    const [provider, setProvider] = useState(library)
//    const [chainId, setChainId] = useState<any>(DEFAULT_CHAIN_ID)
  
//    useEffect(() => {
//     if (library !== refEth.current) {
//      setProvider(library)
//      refEth.current = library
//     }
  
//     if (connectedChainId && SUPPORTED_CHAINS.includes(connectedChainId)) {
//      setChainId(connectedChainId)
//      localStorage.setItem('chainId', connectedChainId.toString())
//     }
  
//     if (!connectedChainId && chainId !== +metamaskChainId && SUPPORTED_CHAINS.includes(+metamaskChainId)) {
//      localStorage.setItem('chainId', metamaskChainId.toString())
//      setChainId(+metamaskChainId)
//      setProvider(simpleRpcProvider(+metamaskChainId))
//     }
//    }, [library, chainId, connectedChainId, metamaskChainId])
  
//    return {
//     library: provider,
//     chainId: chainId ?? DEFAULT_CHAIN_ID,
//     ...web3React
//    }
//   }

// function DEFAULT_CHAIN_ID<T>(DEFAULT_CHAIN_ID: any): [any, any] {
//   throw new Error('Function not implemented.');
// }
// function simpleRpcProvider(arg0: number): any {
//   throw new Error('Function not implemented.');
// }
// export default useActiveWeb3React;

export default function use(){
  return false;
}