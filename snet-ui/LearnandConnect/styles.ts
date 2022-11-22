import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  learnConnectContainer: {
    padding: '63px 0',
    backgroundColor: `${theme.palette.bgHighlight.main}`,
    '& h2': {
      marginBottom: 41,
      color: `${theme.palette.info.main}`,
      fontFamily: 'MuliBold',
    },
  },
  wrapper: {
    width: 1160,
    margin: '0 auto',
    '@media(max-width:1200px)': { padding: '0 20px' },
  },
  learnConnectContentContainer: {
    padding: 0,
    margin: 0,
    display: 'flex',
    justifyContent: 'center',
    '@media(max-width:900px)': { flexDirection: 'column' },
  },
  learnConnectCard: {
    width: '33%',
    borderRadius: 6,
    marginRight: 50,
    backgroundColor: `${theme.palette.common.white}`,
    boxShadow: '0 1px 3px 0 rgba(0,0,0,0.2)',
    listStyle: 'none',
    textAlign: 'center',
    '& a': {
      padding: '32px 27px 32px 21px',
      display: 'inline-block',
      '& img': { width: 98 },
      '&:hover': {
        '& span': { color: `${theme.palette.alertMsg.pendingBorder}`},
      }
    },
    '& span': {
      padding: '24px 0 16px',
      display: 'block',
      color: `${theme.palette.bgtext.main}`,
      fontFamily: 'MuliSemiBold',
      fontSize: 18,
      lineHeight: '24px',
    },
    '& p': {
      color: `${theme.palette.textAdvanced.dark}`,
      fontFamily: 'MuliRegular',
      fontSize: 14,
      lineHeight: '24px',
    },
    '&:last-of-type': { margin: 0 },
    '@media(max-width:900px)': {
      width: '100%',
      margin: '0 0 24px 0',
    },
  },
}));

export default useStyles;
