import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { TRANSACTION_TYPE } from 'utils/airdropWindows';
import { Link } from '@mui/material';
import useStyles from './styles';

type HistoryEvent = {
  window: string;
  reward: string;
  status: string;
  action_type: string;
  txn_hash: string;
};

type HistoryProps = {
  events: HistoryEvent[];
};
export default function History({ events }: HistoryProps) {
  const CardanoTransaction = process.env.NEXT_PUBLIC_CARDANO_TRANSACTION_DETAIL;
  const classes = useStyles();
  return (
    <List className={classes.claimHistoryTable}>
      {events.map((event) => (
        <ListItem key={event.window}>
          <Grid container xs={9}>
            <Grid item xs={5}>
              <Typography color="primary.main" fontSize={12} fontFamily="MuliSemiBold">
                Claim
              </Typography>
              <Typography color="textAdvanced.dark" fontFamily="MuliSemiBold" fontSize={14} lineHeight="24px">
                {event.window}
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography color="primary.main" fontSize={12} fontFamily="MuliSemiBold">
                {event.action_type === TRANSACTION_TYPE.ADA_TRANSFER ? 'ADA Received' : 'Reward'}
              </Typography>
              {event.action_type === TRANSACTION_TYPE.ADA_TRANSFER ? (
                <Typography color="textAdvanced.dark" fontFamily="MuliRegular" fontSize={14} lineHeight="24px">
                  {event.reward}
                </Typography>
              ) : (
                <Link component="a" href={`${CardanoTransaction}/${event.txn_hash}`} underline="always" target="_blank">
                  <Typography fontFamily="MuliRegular" fontSize={14} lineHeight="24px">
                    {event.reward}
                  </Typography>
                </Link>
              )}
            </Grid>
            <Grid item xs={3}>
              <Typography color="primary.main" fontSize={12} fontFamily="MuliSemiBold">
                Status
              </Typography>
              <Typography color="textAdvanced.dark" fontFamily="MuliRegular" fontSize={14} lineHeight="24px">
                {event.status}
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
      ))}
    </List>
  );
}
