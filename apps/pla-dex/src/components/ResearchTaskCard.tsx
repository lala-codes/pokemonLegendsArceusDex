import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { deselect } from '../slices/monsterSlice';
import { setTaskValue } from '../slices/researchTaskSlice';
import ResearchTask from './ResearchTask';

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

  return (
    <Dialog open={!!selected} onClose={() => dispatch(deselect())}>
      <DialogTitle>{name}</DialogTitle>
      <DialogContent>
        {researchTasks?.map(({ task, requirements }, index: number) => (
          <ResearchTask
            key={task}
            task={task}
            requirements={requirements}
            researchValue={tasksProgress[index]}
            onChange={(value) =>
              dispatch(setTaskValue({ dex: selected, task: index, value }))
            }
          />
        ))}
      </DialogContent>
    </Dialog>
  );
}
