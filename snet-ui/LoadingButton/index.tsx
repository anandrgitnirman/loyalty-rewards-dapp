import { LoadingButton as MuiLoadingButton, LoadingButtonProps } from '@mui/lab';
import { alpha, styled } from '@mui/system';

const LoadingButton = styled(MuiLoadingButton)<LoadingButtonProps>(({ theme, color }) => ({
  minWidth: 170,
  padding: '8px 16px !important',
  borderRadius: '4px !important',
  backgroundColor: `${color ? theme.palette[color].light : theme.palette.primary.main} !important`,
  color: '#fff',
  fontFamily: 'MuliSemiBold',
  fontSize: 14,
  fontWeight: 600,
  lineHeight: '24px',
  ':disabled': {
    backgroundColor: `${alpha(color ? theme.palette[color].main : theme.palette.primary.main, 0.5)} !important`,
    color: '#999',
    padding: '6px 16px !important',
  },
  ':hover': {
    backgroundColor: `${color ? 'rgb(44, 93, 178)' : theme.palette.primary.main} !important`,
    boxShadow: 'rgb(0 0 0 / 20%) 0px 2px 4px -1px, rgb(0 0 0 / 14%) 0px 4px 5px 0px, rgb(0 0 0 / 12%) 0px 1px 10px 0px',
  },
}));

export default LoadingButton;
