import Button from '@mui/material/Button';
import PropTypes from 'prop-types';
import snetButtonStyles from './styles';

const SNETButton = ({ name, onClick, variant, disabled, icon, href }) => {
  const classes = snetButtonStyles();
  return (
    <Button href={href} endIcon={icon} disabled={disabled} onClick={onClick} variant={variant} id={`snet-button-${name}`} className={`${classes.snetBtn} ${variant === 'outlined' ? classes.transparentBg : classes.btnWithBg}`}>
      {name}
    </Button>
  );
};

SNETButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  variant: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  href: PropTypes.string,
};

SNETButton.defaultProps = {
  variant: 'contained',
  disabled: false,
  icon: null,
  href: null,
};

export default SNETButton;
