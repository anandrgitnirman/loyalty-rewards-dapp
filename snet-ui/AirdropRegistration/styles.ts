import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const airdropRegistrationStyles = makeStyles((Theme) => ({
  airdropClaimStartDateTime: {
    margin: 0,
    '& h4': { 
      fontFamily: 'MuliSemiBold',
      '@media(max-width: 480px)': { fontSize: 16 },
    },
  },
  viewBtnsContainer: {
    marginTop: 24,
    textAlign: 'center',
    '& button': {
      marginRight: 24,
      borderColor: Theme.palette.bgHighlight.main,
      color: Theme.palette.bgHighlight.main,
      '&:hover': {
        borderColor: Theme.palette.bgHighlight.main,
      },
      '&:last-of-type': { marginRight: 0 },
      '@media(max-width: 480px)': { margin: '0 0 10px 0' },
    },
    '@media(max-width: 480px)': {
      display: 'flex',
      flexDirection: 'column',
    },
  },
  claimedContainer: {
    width: '70%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 0 16px',
    margin: 40,
    border: '1px solid',
    borderLeft: 0,
    borderRight: 0,
    borderColor: Theme.palette.text.secondary,
    '@media(max-width: 900px)': {
      width: '100%',
      padding: '16px 10px',
      margin: '40px 0 16px',
    },
    '@media(max-width: 480px)': { flexDirection: 'column' },
  },
  claimOrMapBtnContainer: {
    '& button': {
      '@media(max-width: 600px)': { width: '100%' },
    },
  },
  mappedWalletDateTimeContainer: {
    backgroundColor: Theme.palette.bgHighlight.main,
    borderRadius: 2,
    padding: '15px 16px',
    display: 'flex',
    justifyContent: 'space-between',
    '@media(max-width: 900px)': {
      maxWidth: '100%',
      flexBasis: '100%',
    },
  },
}));

export default airdropRegistrationStyles;
