import {
  Typography,
  Box,
  Divider,
  AppBar,
  Toolbar,
  Avatar,
  IconButton,
} from '@mui/material';
import ResearchTaskRow from './ResearchTaskRow';
import PerfectIcon from './icons/PerfectIcon';
import CompleteIcon from './icons/CompleteIcon';
import useMon from '../hooks/useMon';
import { StringDex, Dex } from '../types';
import { useResearchLevel, useResearchStatus } from '../hooks/useTasks';
import { useDispatch } from 'react-redux';
import { setTaskProgress } from '../slices/monSlice';
import { kebabCase } from 'lodash';
import CloseIcon from '@mui/icons-material/Close';

interface ResearchTaskContentProps {
  dex: Dex | StringDex;
  onClose?: () => void;
}

export default function ResearchTaskContent({
  dex,
  onClose,
}: ResearchTaskContentProps) {
  const dispatch = useDispatch();
  const mon = useMon(dex);
  const researchLevel = useResearchLevel(dex);
  const researchStatus = useResearchStatus(dex);

  if (!mon) {
    return null;
  }

  const { tasks } = mon;

  return (
    <>
      <AppBar>
        <Toolbar>
          <Avatar
            src={`/assets/normal/${kebabCase(mon.name)}.png`}
            imgProps={{ loading: 'lazy' }}
          >
            {dex}
          </Avatar>
          <Typography variant="h6" ml={4} sx={{ flexGrow: 1 }}>
            {mon.name}
          </Typography>
          <IconButton edge="end" sx={{ mr: 0 }} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar />

      {tasks.map(
        (
          { type, isDoubled, requirements, progress, ...rest },
          index: number
        ) => (
          <ResearchTaskRow
            key={type}
            type={type}
            requirements={requirements}
            isDoubled={isDoubled}
            onChange={(value) => dispatch(setTaskProgress(dex, index, value))}
            progress={progress}
            {...rest}
          />
        )
      )}
      <Divider sx={{ my: 4 }} />
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography component="span">Research Level</Typography>
        <Typography component="span" display="flex">
          {researchStatus === 'perfect' && (
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
              <PerfectIcon sx={{ mr: 2 }} /> Perfect!
            </Typography>
          )}
          {researchStatus === 'complete' && (
            <Typography
              component="span"
              sx={{ display: 'flex', alignItems: 'center' }}
            >
              <CompleteIcon sx={{ mr: 2 }} /> Complete!
            </Typography>
          )}
          <Typography
            ml={2}
            component="span"
            variant="h5"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {Math.min(10, researchLevel)}
            {researchLevel > 10 && (
              <Typography
                component="span"
                color="#ffee11"
                display="inline-block"
                ml={1}
              >
                ({researchLevel})
              </Typography>
            )}
          </Typography>
        </Typography>
      </Box>
    </>
  );
}
