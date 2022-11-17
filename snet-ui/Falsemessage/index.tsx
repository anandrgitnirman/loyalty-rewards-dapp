import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import falseMessageStyles from './styles';

export default function Falsemessage() {
  const classes = falseMessageStyles();
  return (
    <Box className={classes.falseMsgContainer}>
      <Typography className={classes.message} variant="body2">
        Beware of false or phishing sites. Please double check the{' '}
        <a href="https://loyalty.singularitynet.io/" title="Loyalty Airdrop" target="_blank">
          URL
        </a>{' '}
        before you continue.
      </Typography>
    </Box>
  );
}
