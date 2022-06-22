import config from '../../Config/config.json';
import SteakABI from '../../Contracts/Steak.json';
import CROSteakABI from '../../Contracts/CROSteak.json';
import LotterySteakABI from '../../Contracts/LotterySteak.json';
import MMFSteakABI from '../../Contracts/MMFSteak.json';
import ERC20ABI from '../../Contracts/ERC20.json';



const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectClick = () => {
  return{
    type: "CONNECT_CLICK",
  }
}

const connectSuccess = (info:any) => {
  return{
    type: "CONNECT_SUCCESS",
    payload:info,
  }
}

export const connect = () => {
  return async (dispatch: (arg0: { type: string; }) => void) => {
    dispatch(connectClick());
    dispatch(connectRequest());
  }
}