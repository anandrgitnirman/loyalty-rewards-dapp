import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from '@mui/material';

type ExtensionError = {
  title: string;
  walletName: string;
  link: string;
};
type NoWalletInstalledModalProps = {
  open: boolean;
  onClose: () => void;
  error: ExtensionError | null;
};

export default function NoWalletInstalledModal({ open, error, onClose }: NoWalletInstalledModalProps) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>
        <Typography color="primary.main" variant="h5">
          {error?.title}
        </Typography>
      </DialogTitle>
      <DialogContent dividers sx={{ py: 4 }}>
        <Typography color="text.primary" variant="priority">
          {'Please Install '}
          <Link component="a" href={error?.link} underline="always" target="_blank">
            {error?.walletName}
          </Link>
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
