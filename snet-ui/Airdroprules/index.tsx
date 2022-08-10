import React from 'react';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import { Box } from '@mui/system';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SNETButton from 'snet-ui/SNETButton';
import rulesStyles from './styles';

type Step = {
  title: string;
  description: string;
};

type Props = {
  title: string;
  steps: Step[];
  blogLink?: string;
};

function Airdroprules({ title, steps, blogLink }: Props, ref) {
  const classes = rulesStyles();

  const onReadBlogClick = () => {
    window.open(blogLink, '_blank');
  };

  if (!steps || !(steps.length > 0)) {
    return null;
  }

  return (
    <Grid className={classes.rulesContainer}>
      <Container>
        <Typography align="center" variant="h2">
          {title}
        </Typography>
        <Box className={classes.rulesContentContainer}>
          {steps.map((step, index) => (
            <Box className={classes.rulesContent}>
              <Box>
                <StarsOutlinedIcon />
                <Typography variant="h4">{step.title}</Typography>
              </Box>
              <Typography>{step.description}</Typography>
            </Box>
          ))}
        </Box>
        {blogLink ? (
          <Box className={classes.btnContainer}>
            <SNETButton name="Read Blog Post" onClick={onReadBlogClick} variant="outlined" icon={<OpenInNewIcon />} />
          </Box>
        ) : null}
      </Container>
    </Grid>
  );
}

export default React.forwardRef(Airdroprules);
