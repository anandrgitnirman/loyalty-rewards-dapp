import React from 'react';
import Timeline from '@mui/lab/Timeline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SNETButton from 'snet-ui/SNETButton';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ScheduleEvent from './ScheduleEvent';
import scheduleStyles from './styles';

type Event = {
  time: Date;
  title: string;
  description: string;
};

type Props = {
  title: string;
  events: Event[];
  blogLink?: string;
};

export default function Schedule({ title, events, blogLink }: Props) {
  const classes = scheduleStyles();

  const onReadBlogClick = () => {
    window.open(blogLink, '_blank');
  };

  return (
    <Box className={classes.scheduleContainer}>
      <Typography align="center" variant="h2">
        {title}
      </Typography>
      <Timeline className={classes.timeLineContainer}>
        {events.map((event, index) => (
          <ScheduleEvent key={event.time.toString()} event={event} nextEventTime={events[index + 1]?.time} />
        ))}
      </Timeline>
      {blogLink ? (
        <Box className={classes.btnContainer}>
          <SNETButton name="Read Blog Post" onClick={onReadBlogClick} variant="outlined" icon={<OpenInNewIcon />} />
        </Box>
      ) : null}
    </Box>
  );
}
