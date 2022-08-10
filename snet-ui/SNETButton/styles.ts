import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const snetButtonStyles = makeStyles((theme: Theme) => ({
  snetBtn: {
    minWidth: 170,
    padding: '7px 16px',
    color: `${theme.palette.alertMsg.pendingBorder}`,
    border: '1px solid',
    borderColor: `${theme.palette.alertMsg.pendingBorder}`,
    fontFamily: 'MuliSemiBold',
    fontSize: 14,
    lineHeight: '24px',
    textAlign: 'center',
  },
  btnWithBg: {
    color: `${theme.palette.text.secondary}`,
    background: `${theme.palette.alertMsg.pendingBorder}`,
    '&:hover': {
      borderColor: 'rgb(44, 93, 178)',
      backgroundColor: 'rgb(44, 93, 178)',
      boxShadow:
        'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px',
    },
  },
  transparentBg: {
    '&:hover': {
      border: '1px solid #4086FF',
      backgroundColor: 'rgba(64, 134, 255, 0.1)',
    },
  },
}));

export default snetButtonStyles;
