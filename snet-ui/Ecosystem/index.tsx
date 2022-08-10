import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import { Grid } from '@mui/material';
import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ecoSystemStyles from './styles';
import SNETButton from '../SNETButton';

type Props = {
  blogLink?: string;
};

export default function Ecosystem({ blogLink }: Props) {
  const classes = ecoSystemStyles();

  const onVistSnetClick = () => {
    window.open(blogLink, '_blank');
  };

  const onViewAirdropClick = () => {
    window.open('https://blog.singularitynet.io/', '_blank');
  };

  return (
    <Grid className={classes.ecoSystemContainer}>
      <Box className={classes.wrapper}>
        <Typography align="center" variant="h2">
          SingularityNET Ecosystem
        </Typography>
        <Typography>
          SingularityNET hosts an ecosystem of different technology projects in different areas with the common theme of
          accelerating to the future and to the Technological Singularity in a beneficial way under decentralized
          democratic control. Click here to read more about our other ecosystem projects, including Rejuve, Mindplex,
          SingularityDAO, and TrueAGI.
        </Typography>
        {blogLink ? (
          <Box className={classes.btnContainer}>
            <SNETButton
              name="Visit SingularityNet"
              onClick={onVistSnetClick}
              variant="container"
              icon={<OpenInNewIcon />}
            />
            <SNETButton
              name="View All Airdrops"
              onClick={onViewAirdropClick}
              variant="outlined"
              icon={<OpenInNewIcon />}
            />
          </Box>
        ) : null}
      </Box>
    </Grid>
  );
}
