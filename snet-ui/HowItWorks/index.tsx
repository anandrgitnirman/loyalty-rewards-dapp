import Typography from '@mui/material/Typography';
import Box from '@mui/system/Box';
import SNETButton from 'snet-ui/SNETButton';
import React from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import howItWorksStyles from './styles';

type Step = {
  title: string;
  description: string;
};
type HowItWorksProps = {
  title: string;
  steps: Step[];
  blogLink?: string;
  ref?: string;
};

export default function HowItWorks({ title, steps, blogLink, ref }: HowItWorksProps) {
  const classes = howItWorksStyles();

  const onReadBlogClick = () => {
    window.open(blogLink, '_blank');
  };

  return (
    <Box className={classes.howItWorksContainer} ref={ref}>
      <Box className={classes.wrapper}>
        <Typography align="center" variant="h2">
          {title}
        </Typography>
        <ul className={classes.howItWorksContent}>
          {steps.map((step, index) => (
            <li key={step.title}>
              <Box className={classes.noContainer}>
                <Typography variant="caption">Step</Typography>
                <Typography variant="h3">{index + 1}</Typography>
              </Box>
              <Box className={classes.actualContent}>
                <Typography component="span">{step.title}</Typography>
                <Typography component="p">{step.description}</Typography>
              </Box>
            </li>
          ))}
        </ul>
        {blogLink ? (
          <Box className={classes.btnContainer}>
            <SNETButton name="Read Blog Post" onClick={onReadBlogClick} variant="outlined" icon={<OpenInNewIcon />} />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
