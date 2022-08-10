import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { AIRDROP_TITLE_STRING, AIRDROP_DESCRIPTION_STRING } from 'utils/airdropWindows';
import SNETButton from 'snet-ui/SNETButton';
import useStyles from './styles';

type Props = {
  blogLink?: string;
};

export default function Airdropinfo({ blogLink }: Props) {
  const classes = useStyles();

  const onReadWhitepaperClick = () => {
    window.open(blogLink, '_blank');
  };

  return (
    <Box className={classes.airDropInfoContainer}>
      <Typography variant="h1">{AIRDROP_TITLE_STRING}</Typography>
      <Typography variant="h5">{AIRDROP_DESCRIPTION_STRING}</Typography>
      {blogLink ? (
        <SNETButton name="Read Whitepaper" onClick={onReadWhitepaperClick} variant="outlined" />
      ) : null}
    </Box>
  );
}
