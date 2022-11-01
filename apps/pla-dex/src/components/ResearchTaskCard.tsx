import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Box,
  Divider,
  IconButton,
} from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { deselect } from '../slices/monsterSlice';
import { setTaskValue } from '../slices/researchTaskSlice';
import ResearchTask from './ResearchTask';
import useResearchLevel from './useResearchLevel';
import PerfectIcon from './icons/PerfectIcon';
import CompleteIcon from './icons/CompleteIcon';
import CloseIcon from '@mui/icons-material/Close';

export default function ResearchTaskCard() {
  const dispatch = useDispatch();
  const selected = useSelector((state: RootState) => state.monster.selected);
  const name = useSelector(
    (state: RootState) => state.monster.records?.[selected]?.name
  );
  const researchTasks = useSelector(
    (state: RootState) => state.researchTask.records?.[selected]?.researchTasks
  );
  const tasksProgress = useSelector(
    (state: RootState) => state.researchTask.records?.[selected]?.progress
  );

  const { researchLevel, status } = useResearchLevel(selected);

  return (
    <Dialog
      open={!!selected}
      onClose={() => dispatch(deselect())}
      scroll="body"
    >
      <DialogTitle
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {name}
        <IconButton
          edge="end"
          sx={{ mt: -4, mr: -5 }}
          onClick={() => dispatch(deselect())}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        {researchTasks?.map(
          ({ task, isDoubled, requirements }, index: number) => (
            <ResearchTask
              key={task}
              task={task}
              requirements={requirements}
              isDoubled={isDoubled}
              researchValue={tasksProgress[index]}
              onChange={(value) =>
                dispatch(setTaskValue({ dex: selected, task: index, value }))
              }
            />
          )
        )}
        <Divider sx={{ my: 4 }} />
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography component="span">Research Level</Typography>
          <Typography component="span" display="flex">
            {status === 'perfect' && (
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                <PerfectIcon sx={{ mr: 2 }} /> Perfect!
              </Typography>
            )}
            {status === 'complete' && (
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
      </DialogContent>
    </Dialog>
  );
}
