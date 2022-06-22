
import {Button,getImageListItemBarUtilityClass,IconButton} from '@mui/material';
import Modal from '@mui/material/Modal';
import {styled} from '@mui/material/styles';
import { CoinbaseWallet , WalletConnect ,Injected} from './connector';
import { useState, useEffect, useMemo ,useRef } from 'react';
import { useWeb3React } from '@web3-react/core'
import { BigNumber, ethers } from 'ethers';
import config from '../../Config/config.json';
import SteakABI from '../../Contracts/Steak.json';
import CROSteakABI from '../../Contracts/CROSteak.json';
import LotterySteakABI from '../../Contracts/LotterySteak.json';
import MMFSteakABI from '../../Contracts/MMFSteak.json';
import ERC20ABI from '../../Contracts/ERC20.json';
import { ConnectedTvOutlined, SingleBedRounded } from '@mui/icons-material';

const ConnectButton  = styled(Button)(({theme}) => ({
  background:theme.palette.secondary.main,
  color:theme.palette.text.primary,
}))

const ModalBox  = styled('div')(({theme}) => ({
  background:theme.palette.primary.main,
  position:'absolute',
  left:'50%',
  top:'50%',
  transform: 'translate(-50%, -50%)',
  width:'500px',
  border:'2px solid',
  borderRadius:'5px',
  boxShadow:'30px',
  borderColor:theme.palette.secondary.main,
  display:'flex',
  justifyContent:'space-between',
  alignContent:'baseline',
  alignItems:'center',
  color:theme.palette.text.primary,
  padding:'30px'
}))



export default function WalletModal() {
  const [open, setOpen] = useState(false);
  const { library , activate, deactivate, account ,chainId  } = useWeb3React();
  const userAccount = account ? `${account.substring(0,2)}...${account.substring(account.length-4)}` : 'CONNECT';
  const [correctChain,setCorrectChain] = useState(false);

  const [switchVisible,setSwitchVisible] = useState(true);
  const switchNetwork = async () => {
    const cid = ethers.utils.hexValue(BigNumber.from(config.chain_id));
    try {

      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: cid }],
      });
      setSwitchVisible(false);
      setCorrectChain(true);
      console.log("visible::",switchVisible);
    } catch (switchError) {
      // 4902 error code indicates the chain is missing on the wallet
      if (switchError.code === 4902) {
        
        console.log("visible::",switchVisible);
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: cid,
                rpcUrls: [config.write_rpc],
                chainName: config.name,
                nativeCurrency: {
                  name: config.symbol,
                  symbol: config.symbol,
                  decimals: 18,
                },
                blockExplorerUrls: null,
              }
            ],
          });
        } catch (error) {
           console.error(error);
           window.location.reload();
        }
      }
    }
  };
  useEffect( () => {

    if(!!account && chainId === Number(config.chain_id)){
      setCorrectChain(true);
    }
    else if(!!account && chainId !== Number(config.chain_id)){
      setCorrectChain(false);
    }
  },[account])
  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => setOpen(false);
  return (
    <div>
      {
        !account && <ConnectButton onClick={handleOpen}>connect</ConnectButton>
      }
      {
        account && correctChain && (<ConnectButton onClick={deactivate}>disconnect</ConnectButton>)
      }
      {
         !!account && !correctChain && switchVisible && ( 
          <ConnectButton onClick={switchNetwork} >Switch Connect</ConnectButton>
         )
      
      }
      

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalBox>
            <IconButton onClick={() => { activate(CoinbaseWallet) }}>
              <img style={{width:'64px'}} src='./assets/walletIcon/coinbase.png'></img>
            </IconButton>
            <IconButton onClick={() => { activate(WalletConnect)}}>
              <img style={{width:'64px'}} src='./assets/walletIcon/walletConnect.png'></img>
            </IconButton>
            <IconButton onClick={() => { activate(Injected)}}>
              <img  src='./assets/walletIcon/MetaMask_Fox.svg.png'></img>
            </IconButton>
            <Button sx={{background:theme => theme.palette.secondary.main,color:theme => theme.palette.text.primary}} onClick={deactivate}>Disconnect</Button>
        </ModalBox>
      </Modal>
    </div>
  );
}
