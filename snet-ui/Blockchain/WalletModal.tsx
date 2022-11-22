import * as React from 'react';
import { SxProps, Theme } from '@mui/system';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { SUPPORTED_WALLETS } from './Wallet';
import { AbstractConnector } from '@web3-react/abstract-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { useEagerConnect } from './web3Hooks';
import Typography from '@mui/material/Typography';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import useStyles from './styles';
import { NoEthereumProviderError } from '@web3-react/injected-connector';
import { useAppDispatch } from 'utils/store/hooks';
import { setWalletExtensionError } from 'utils/store/features/walletSlice';
import { walletExtensions } from 'utils/constants/cardanoWallet';

const style: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const WalletButton = ({ wallet, handleConnect, imgSrc }) => (
  <ButtonBase onClick={() => handleConnect(SUPPORTED_WALLETS[wallet].connector)}>
    <Box>
      <img alt="" src={imgSrc} width="100" height="100" />
    </Box>
    <Typography variant="h5">{SUPPORTED_WALLETS[wallet].name}</Typography>
    <Typography variant="span">{SUPPORTED_WALLETS[wallet].description}</Typography>
  </ButtonBase>
);

export default function WalletModal({ open, setOpen }: Props) {
  const handleClose = () => setOpen(false);
  const classes = useStyles();
  const { active, account, connector, activate, error, setError, library } = useWeb3React();
  useEagerConnect();
  const dispatch = useAppDispatch();

  const handleConnect = async (connector: AbstractConnector | undefined) => {
    let name = '';
    Object.keys(SUPPORTED_WALLETS).map((key) => {
      if (connector === SUPPORTED_WALLETS[key].connector) {
        return (name = SUPPORTED_WALLETS[key].name);
      }
      return true;
    });

    // if the connector is walletconnect and the user has already tried to connect, manually reset the connector
    if (connector instanceof WalletConnectConnector && connector.walletConnectProvider?.wc?.uri) {
      connector.walletConnectProvider = undefined;
    }

    if (connector) {
      activate(connector, undefined, true)
        .then(() => {
          console.log('activate promise resolved');
          localStorage.removeItem('DISCONNECTED');
          setOpen(false);
        })
        .catch((error) => {
          if (error instanceof UnsupportedChainIdError) {
            activate(connector);
            // a little janky...can't use setError because the connector isn't set
          } else if (error instanceof NoEthereumProviderError) {
            dispatch(
              setWalletExtensionError({
                title: 'Ethereum browser extension not detected',
                walletName: 'MataMask',
                link: walletExtensions.Matamask,
              })
            );
          } else {
            console.log('connection error', error);
            setError(error);
            // setPendingError(true)
          }
        });
    }

    if (account) {
      console.log('account connected');
      localStorage.removeItem('DISCONNECTED');
      setOpen(false);
    }
  };

  const handleReadDoc = () => {
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} className={classes.connectWalletDialog}>
        <DialogTitle>
          <Typography color="primary.main" variant="h5">
            Connect Wallet
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers className={classes.connectWalletDialogContent}>
          <Box className={classes.connectWalletDialogConnectBody}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <WalletButton
                  wallet={SUPPORTED_WALLETS.METAMASK.id}
                  handleConnect={handleConnect}
                  imgSrc="/Metamask.png"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <WalletButton
                  wallet={SUPPORTED_WALLETS.WALLET_CONNECT.id}
                  handleConnect={handleConnect}
                  imgSrc="/Walletconnect.svg"
                />
              </Grid>
            </Grid>

            {/* <Typography className={classes.readDocText}>
              Need help connecting a wallet?
              <button onClick={handleReadDoc}> Read our documentation</button>
            </Typography> */}
          </Box>

          <Box className={classes.connectWalletFooter}>
            <Typography component="p">
              By connecting to the wallets, you agree to our
              <Typography
                component="a"
                href="https://public.singularitynet.io/terms_and_conditions.html"
                variant="link"
                target="_blank"
              >
                {' '}
                Terms and Conditions
              </Typography>
            </Typography>
          </Box>
          {/* <List sx={{ pt: 0 }}>
            {Object.entries(SUPPORTED_WALLETS).map(([walletKey, wallet]) => (
              <ListItem button key={wallet.name} onClick={() => handleConnect(wallet.connector)}>
                <ListItemAvatar>
                  <Avatar>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={wallet.name} />
              </ListItem>
            ))}
          </List> */}
        </DialogContent>
      </Dialog>
    </div>
  );
}
