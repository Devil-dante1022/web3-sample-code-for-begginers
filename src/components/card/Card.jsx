import { useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './Card.css';

const MButton = styled(Button)({
	// backgroundColor: 'rgb(23, 33, 94)',
	boxShadow: 'rgb(0 0 0 / 59%) 6px 6px 20px 6px',
	fontWeight: 700,
	fontSize: '1.2rem',
	padding: '10px',
	minWidth: '138px',
	borderRadius: '8px',
	background:'#FDAB45',
	borderRadius:'12px',
	fontFamily: 'Inter',
	fontStyle: 'Medium',
	lineHeight: '24px',
	color:'white',
});

const ExGrid = styled(Grid)({
	width: '100%',
	justifyContent: 'space-between',
	alignItems: 'center',
	marginTop: '24px'
});

const ExLabel = styled(Typography)({
	fontSize: '20px',
	fontFamily: 'Montserrat'
});

const ExValue = styled(Typography)({
	fontSize: '24px',
	fontWeight: 500
})




export default function Card1(props:any){

	const { croPool , steak , reward , buyBeans ,rebakeBeans , sellBeans} = props;

  const [amount,setAmount] = useState(0);

	const handleChange = (e) => {
    setAmount(e.target.value);
	}
	
	return(
		<>
			<Card sx={{
				color: 'white',
				background: theme => theme.palette.primary.main ,
				width:'100%',
			}}>
					{/* {
						connectingWallet &&
						<LinearProgress color='secondary' />
					} */}
				<CardContent sx={{padding: '12px 24px'}}>
					<ExGrid container>
						<ExLabel variant='body1'>Locked pool</ExLabel>
						<ExValue variant='h5' >{croPool}</ExValue>
					</ExGrid>
					<ExGrid container>
						<ExLabel variant='body1'>Wallet</ExLabel>
						<ExValue variant='h5' >{steak}</ExValue>
					</ExGrid>
					<ExGrid container>
						<ExLabel variant='body1'>Your Steak</ExLabel>
						<ExValue variant='h5'>{steak} OZ Steak</ExValue>
					</ExGrid>
					{/* {!!chefs && <ExGrid container>
						<ExLabel variant='body1'>Total Chefs</ExLabel>
						<ExValue variant='h5'>{chefs} Chefs</ExValue>
					</ExGrid>} */}
					<Box sx={{paddingTop: '32px', paddingBottom: '24px',padding:'30px'}}>
						<Box>
							<Box sx={{position: 'relative'}}>
								<input type="number" min="0"  value={amount} onChange={handleChange} className="in"/>
								<Typography variant="body1" sx={{
									margin: '0px',
									fontFamily: 'Montserrat',
									lineHeight: 1.5,
									fontSize: '24px',
									position: 'absolute',
									top: '9px',
									right: '18px',
									fontWeight: 500,
									color: 'black'
								}} >CRO</Typography>
							</Box>
						</Box>
						<Box sx={{marginTop: '24px', marginBottom: '24px'}}>
							<MButton 
								onClick={() => buyBeans(amount)}
								width="100%" disabled={(amount == 0?true:false)}
								variant="contained" size='medium' color="primary" fullWidth
							>Grill Steak</MButton>
						</Box>
						<Divider />
						{/* <ExGrid container>
							<Typography variant='body1' sx={{fontWeight: 'bolder'}}>Time until dinner</Typography>
							<Typography variant='h5' sx={{fontWeight: 'bolder'}}> 6d 23h 59m</Typography>
						</ExGrid> */}
						<ExGrid container>
							<Typography variant='body1' sx={{fontWeight: 'bolder'}}>Your Rewards</Typography>
							<Typography variant='h5' sx={{fontWeight: 'bolder'}}>{reward} CRO</Typography>
						</ExGrid>
						<Grid container sx={{justifyContent: 'space-between', flexFlow: 'row wrap'}}>
							<Grid item sx={{margin: '24px 8px 0px 0px', flexGrow: 1}}>
								<MButton
									onClick={() => rebakeBeans()}
									variant="contained" size='medium'  fullWidth
								>Season</MButton>
							</Grid>
							<Grid item sx={{margin: '24px 0px 0px 8px', flexGrow: 1}}>
								<MButton
									onClick={() => sellBeans()}
									variant="contained" size='medium'  fullWidth
								>Serve dinner</MButton>
							</Grid>
						</Grid>
					</Box>
				</CardContent>
			</Card>
		</>

	);
}