import kebabCase from 'lodash/kebabCase';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import { Monster } from '../types';
import { ListItemButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { select } from '../slices/monsterSlice';
import { RootState } from '../app/store';
import useTaskProgress from './useTaskProgress';

type ResearchListItemProps = Pick<Monster, 'dex'>;

export default function ResearchListItem({ dex }: ResearchListItemProps) {
  const dispatch = useDispatch();
  const name = useSelector(
    (state: RootState) => state.monster.records[dex].name
  );
  const { totalTaskProgress, totalTasks } = useTaskProgress(dex);

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
        <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%' }}>
          <LinearProgress
            value={(totalTaskProgress / totalTasks) * 100}
            variant="determinate"
            color="success"
          />
        </Box>
      </ListItemButton>
    </ListItem>
  );
}
