

import {Box, Typography ,Stack} from '@mui/material';
import {useState,useEffect} from 'react';
import {ethers} from 'ethers';
import config from '../../Config/config.json';
import abi from '../../Contracts/Steak.json';
import axios from 'axios';

const readProvider = new ethers.providers.JsonRpcProvider(config.read_rpc);


const Steak = () => {
  const [croPool,setCroPool] = useState<any>(0);
  const [mmfPool,setMmfPool] = useState<any>(0);
  const [svnPool,setSvnPool] = useState<any>(0);
  const [lotteryPool,setLotteryPool] = useState<any>(0);
  const [usdcPool,setUsdcPool] = useState<any>(0);
  const [tvlPool,setTvlPool] = useState<any>(0);

  const fetchPoolSize = async () => {
    try{
      let cro_steak = new ethers.Contract(config.cro_steak_contract,abi.abi,readProvider);
        cro_steak.getBalance().then( (balance: ethers.BigNumberish) => {
          setCroPool(ethers.utils.formatEther(balance));
        })
      let mmf_steak = new ethers.Contract(config.mmf_steak_contract ,abi.abi,readProvider);
        mmf_steak.getBalance().then( (balance: ethers.BigNumberish) => {
        setMmfPool(ethers.utils.formatEther(balance));
      })
      let svn_steak = new ethers.Contract(config.svn_steak_contract ,abi.abi,readProvider);
        svn_steak.getBalance().then( (balance: ethers.BigNumberish) => {
          setSvnPool(ethers.utils.formatEther(balance));
      })
      let lottery_steak = new ethers.Contract(config.lottery_steak_contract ,abi.abi,readProvider);
        lottery_steak.getBalance().then( (balance: ethers.BigNumberish) => {
          setLotteryPool(ethers.utils.formatEther(balance));
      })
      let usdc_steak = new ethers.Contract(config.usdc_steak_contract,abi.abi,readProvider);
        usdc_steak.getBalance().then( (balance:ethers.BigNumberish) => {
          setUsdcPool(ethers.utils.formatUnits(balance,6));
        })
    }
    catch(err){
      console.log('error',err);
    }
  }

  
  useEffect(() => {
    axios
      .get('https://api.coingecko.com/api/v3/simple/price?ids=mmfinance%2Csavanna%2Ccrypto-com-chain%2Cusd-coin&vs_currencies=usd')
      .then((res: { data: { [x: string]: { usd: any; }; }; }) => {
        console.log('prices: ', res.data);
        const croPrice = res.data["crypto-com-chain"].usd;
        const mmfPrice = res.data["mmfinance"].usd;
        const svnPrice = res.data["savanna"].usd;
        const usdPrice = res.data["usd-coin"].usd;
        let tvl = croPool * croPrice + usdcPool*usdPrice + mmfPrice * mmfPool + svnPrice * svnPool + croPrice * lotteryPool;
        setTvlPool(tvl);
      })
  }, [croPool, usdcPool, mmfPool, svnPool, lotteryPool]);

  useEffect( () => {
    fetchPoolSize()
  },[])

  return(
    <>
      <Box>
        <Stack direction='row' spacing={3}>
          <Typography>TVL</Typography>
          <Typography>{tvlPool}</Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{mt:5}}>
          <Typography>Cro</Typography>
          <Typography>{croPool}</Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{mt:5}}>
          <Typography>Mmf</Typography>
          <Typography>{mmfPool}</Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{mt:5}}>
          <Typography>Svn</Typography>
          <Typography>{svnPool}</Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{mt:5}}>
          <Typography>Lottery</Typography>
          <Typography>{lotteryPool}</Typography>
        </Stack>
        <Stack direction='row' spacing={3} sx={{mt:5}}>
          <Typography>Usdc</Typography>
          <Typography>{usdcPool}</Typography>
        </Stack>
      </Box>
    </>
  );
}
export default Steak;