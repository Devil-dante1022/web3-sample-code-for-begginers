import { useState , useEffect } from 'react';
import Card from '../../components/card/Card';
import {Box} from '@mui/material';
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers';
import config from '../../Config/config.json';
import SteakABI from '../../Contracts/Steak.json';
import CROSteakABI from '../../Contracts/CROSteak.json';
import { SecurityUpdateWarningRounded } from '@mui/icons-material';


let signer;

const Cro = () => {
  const [croPool,setCroPool] = useState<any>();
  const { library, account ,active  } = useWeb3React();
  // const provider = new ethers.providers.Web3Provider(window.ethereum);
  // const signer = provider.getSigner();
  // const accounts = window.ethereum.request({ method: 'eth_requestAccounts' });
  const [steak,setSteak] = useState<any>();
  const [reward,setReward] = useState<any>();
  useEffect(() => {
      console.log("account::",account);
      console.log("library::",library);
      if(!!account){
        signer = library?.getSigner();
      }
  },[account]);
  
  const fetch = async () => {
    let steakContract = new ethers.Contract(config.cro_steak_contract,CROSteakABI.abi,signer);
    if(!!account && steakContract){
        
        steakContract.getBalance().then( (balance: ethers.BigNumberish) => {
          setCroPool(ethers.utils.formatEther(balance));
        })
        steakContract.getMyMiners(account).then( (steakAmount: ethers.BigNumberish) => {
          setSteak(ethers.utils.formatUnits(steakAmount, 4));
          console.log("Mybalance",steak);
        })
        steakContract.beanRewards(account).then( (rewardAmount: ethers.BigNumberish) => {
          setReward(ethers.utils.formatEther(rewardAmount));
          console.log("reward",reward);
        })
    }
  }

  useEffect( () => {
    fetch()
  },[account]);

  const buyBeans = async (amount:number) => {
    try{
      const cost = amount;
      let  extra = {
        value: cost,
        gasPrice: ethers.utils.parseUnits('5000','gwei')
      };
      
      const userSigner = library.getSigner();
      let steakContract = new ethers.Contract(config.cro_steak_contract,CROSteakABI.abi,userSigner);
      const txHandle = await steakContract.grillSteak(account,extra);
      await txHandle.wait();
      fetch();
    }
    catch(err){
      console.log("Grillerror",err);
    }
  }

  
  const rebakeBeans = async () => {
    try{
      const extra = {
        gasPrice:ethers.utils.parseUnits('5000','gwei')
      };
      const userSigner = library.getSigner();
      let steakContract = new ethers.Contract(config.cro_steak_contract,CROSteakABI.abi,userSigner);
      let txHandle = await steakContract.reGrill(account,extra);
      await txHandle.wait();
      fetch();
    }
    catch(err){
      console.log("rebakeBeans_error::",err);
    }
  }


  const sellBeans = async () => {
		try {
			let extra = {
				gasPrice: ethers.utils.parseUnits('5000', 'gwei')
			};
      const userSigner = library.getSigner();
      let steakContract = new ethers.Contract(config.cro_steak_contract,CROSteakABI.abi,userSigner);
			let txHandle = await steakContract.eatSteak(extra);
			await txHandle.wait();
			fetch();
		} catch(err) {
			console.log("sellBeans_error",err);
		}
	}
  return(
    <>
      <Box sx={{background:theme => theme.palette.primary.main}}>
        <div style={{color:'white',fontSize:'40px'}}>{croPool}</div>
        <Card croPool={croPool} steak={steak} reward={reward} buyBeans={buyBeans} rebakeBeans={rebakeBeans} sellBeans={sellBeans} />
      </Box>
      
    </>
  );
}
export default Cro;

function steakAmount(steakAmount: any) {
  throw new Error('Function not implemented.');
}
