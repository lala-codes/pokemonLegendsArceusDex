import kebabCase from 'lodash/kebabCase';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Mon } from '../types';
import { ListItemButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { select } from '../slices/monSlice';
import { RootState } from '../app/store';
import PerfectIcon from './icons/PerfectIcon';
import CompleteIcon from './icons/CompleteIcon';
import React from 'react';

type ResearchListItemProps = Pick<Mon, 'dex'>;

function ResearchListItem({ dex }: ResearchListItemProps) {
  const dispatch = useDispatch();
  const name = useSelector(
    (state: RootState) => state.monster.records[dex].name
  );
  // (totalTaskProgress / totalTasks) * 100
  const researchLevel = useSelector(
    (state: RootState) =>
      (state.researchTask.records[dex].totalProgress /
        state.researchTask.records[dex].totalTasks) *
      100
  );
  const status = useSelector(
    (state: RootState) => state.researchTask.records[dex].status
  );

  return (
    <ListItem disablePadding>
      <ListItemButton
        sx={{ pb: 3 }}
        disableRipple
        onClick={() => dispatch(select(dex))}
      >
        <ListItemAvatar>
          <Avatar
            src={`/assets/normal/${kebabCase(name)}.png`}
            imgProps={{ loading: 'lazy' }}
          >
            {dex}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={name} />
        {status === 'perfect' && <PerfectIcon />}
        {status === 'complete' && <CompleteIcon />}
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
          <LinearProgress
            value={researchLevel}
            variant="determinate"
            color="success"
          />
        </Box>
      </ListItemButton>
    </ListItem>
  );
}

export default React.memo(ResearchListItem);
