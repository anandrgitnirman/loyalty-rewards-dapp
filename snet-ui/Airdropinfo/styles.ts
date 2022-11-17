import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  airDropInfoContainer: {
    paddingRight: 10,
    '& h1': {
      marginTop: 44,
      color: `${theme.palette.bgtext.main}`,
      fontFamily: 'MuliSemiBold',
      "@media (max-width:900px)": { marginTop: 0 },
    },
    '& h5': {
      margin: '50px 0 87px',
      fontWeight: 400,
      lineHeight: '29px',
      fontFamily: 'MuliRegular',
      color: `${theme.palette.textAdvanced.dark}`,
      '&:first-of-type': { marginBottom: 0 },
      "@media (max-width:900px)": { margin: '25px 0' },
    },
    '& button': {
      '@media(max-width: 900px)': { marginBottom: 25 },
    },
  },
}));

export default useStyles;
