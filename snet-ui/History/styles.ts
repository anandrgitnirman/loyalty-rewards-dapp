import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  claimHistoryTable: {
    '& li': {
      marginBottom: 4,
      padding: 0,
      justifyContent: 'center',
      '& > div': {
        backgroundColor: theme.palette.bgHighlight.main,
        borderRadius: 2,
        padding: '17px 20px',
        '@media(max-width: 900px)': {
          maxWidth: '100%',
          flexBasis: '100%',
        },
        '& > div': {
          '@media(max-width: 600px)': {
            maxWidth: '100%',
            flexBasis: '100%',
            marginBottom: 10,
          },
        },
      },
    },
  },
}));

export default useStyles;
