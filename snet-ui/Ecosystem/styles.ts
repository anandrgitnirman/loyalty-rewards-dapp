import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const ecoSystemStyles = makeStyles((theme: Theme) => ({
  ecoSystemContainer: {
    padding: '67px 0 65px',
    background: `${theme.palette.bgGradient.purple}`,
    '& h2': {
      marginBottom: 45,
      color: `${theme.palette.text.secondary}`,
      fontFamily: 'MuliBold',
    },
    '& p': {
      color: `${theme.palette.text.secondary}`,
      fontFamily: 'MuliRegular',
      fontSize: 18,
      lineHeight: '29px',
    },
  },
  wrapper: {
    width: 963,
    margin: '0 auto',
    '@media(max-width: 970px)': { width: '90%' },
  },
  btnContainer: {
    marginTop: 40,
    textAlign: 'center',
    '& button': {
      marginRight: 13,
      '&:last-of-type': {
        borderColor: '#fff',
        color: `${theme.palette.text.secondary}`,
        margin: 0,
      },
    },
  },
}));

export default ecoSystemStyles;
