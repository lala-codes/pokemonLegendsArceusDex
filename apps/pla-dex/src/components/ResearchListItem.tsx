import React from 'react';
import kebabCase from 'lodash/kebabCase';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { ListItemButton } from '@mui/material';
import PerfectIcon from './icons/PerfectIcon';
import CompleteIcon from './icons/CompleteIcon';
import { Mon } from '../types';
import useMon from '../hooks/useMon';
import {
  useNumTasks,
  useNumTasksCompleted,
  useResearchStatus,
} from '../hooks/useTasks';
import { viewMon } from '../slices/monSlice';
import { useDispatch } from 'react-redux';

type ResearchListItemProps = Pick<Mon, 'dex'>;

function ResearchListItem({ dex }: ResearchListItemProps) {
  const dispatch = useDispatch();
  const mon = useMon(dex);
  const researchStatus = useResearchStatus(dex);
  const numTasks = useNumTasks(dex);
  const numTasksCompleted = useNumTasksCompleted(dex);

  if (!mon) {
    return null;
  }

  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={{ pb: 3 }}
        disableRipple
        onClick={() => dispatch(viewMon(dex))}
      >
        <ListItemAvatar>
          <Avatar
            src={`/assets/normal/${kebabCase(mon.name)}.png`}
            imgProps={{ loading: 'lazy' }}
          >
            {dex}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={mon.name} />
        {researchStatus === 'perfect' && <PerfectIcon />}
        {researchStatus === 'complete' && <CompleteIcon />}
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
          <LinearProgress
            value={(numTasksCompleted / numTasks) * 100}
            variant="determinate"
            color="success"
          />
        </Box>
      </ListItemButton>
    </ListItem>
  );
}

export default React.memo(ResearchListItem);
