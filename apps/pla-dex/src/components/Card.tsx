import kebabCase from 'lodash/kebabCase';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useMemo, useReducer, useState } from 'react';
import { Pokemon } from '../types';
import ResearchTask from './ResearchTask';

type CardState = Record<string, number>;

interface CardAction {
  type: string;

  payload: {
    task: string;
    value: number;
  };
}

function reducer(state: CardState, action: CardAction): CardState {
  if (action.type === 'setTaskResearch') {
    return { ...state, [action.payload.task]: action.payload.value };
  }

  return state;
}

type CardProps = Pokemon;

export default function Card({ name, dex, researchTasks }: CardProps) {
  const [expanded, setExpanded] = useState<boolean>(false);
  const [state, dispatch] = useReducer(
    reducer,
    researchTasks.reduce((prevValue, currentValue) => {
      return { ...prevValue, [currentValue.task]: 0 };
    }, {})
  );

  const totalProgress = useMemo(() => {
    const totalTasks = researchTasks.reduce((prevValue, currentValue) => {
      return currentValue.requirements.length + prevValue;
    }, 0);

    const numCompleteTasks = researchTasks.reduce((prevValue, currentValue) => {
      return (
        currentValue.requirements.indexOf(state?.[currentValue.task]) +
        1 +
        prevValue
      );
    }, 0);

    if (totalTasks === 0) {
      return 0;
    }

    return (numCompleteTasks / totalTasks) * 100;
  }, [researchTasks, state]);

  return (
    <Box>
      <Accordion
        expanded={expanded}
        onChange={() => setExpanded(!expanded)}
        TransitionProps={{ unmountOnExit: true }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            '& .MuiAccordionSummary-content': { flexDirection: 'column' },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
            <Avatar
              src={`/assets/normal/${dex}-${kebabCase(name)}.png`}
              imgProps={{ loading: 'lazy' }}
            >
              {dex}
            </Avatar>
            <Typography variant="h6" sx={{ ml: 3 }}>
              {name}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {researchTasks.map(({ task, requirements }) => (
            <ResearchTask
              key={task}
              task={task}
              requirements={requirements}
              researchValue={state[task]}
              onChange={(value) =>
                dispatch({ type: 'setTaskResearch', payload: { task, value } })
              }
            />
          ))}
        </AccordionDetails>
      </Accordion>
      <Box sx={{ width: '100%', mb: expanded ? 4 : 0 }}>
        <LinearProgress
          value={totalProgress}
          variant="determinate"
          color="success"
        />
      </Box>
    </Box>
  );
}
