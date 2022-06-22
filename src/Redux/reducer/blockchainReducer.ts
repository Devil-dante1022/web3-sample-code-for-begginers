

let initialState = {
  loading:false,
  address:null,
  chainId:null,
  web3modal:false,
  correctChain:false,
}

const reducer = (state = initialState ,action:any) => {
  switch(action.type){
    case 'CONNECT_REQUEST':
      return{
        ...state, loading: true,
      }
    case 'CONNECT_CLICK':
      return{
        ...state, web3modal: true,
      }
    
    default:
      return state;
  }
}
export default reducer;

