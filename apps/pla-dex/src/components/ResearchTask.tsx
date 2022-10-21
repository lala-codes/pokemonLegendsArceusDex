import Box from '@mui/material/Box';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { capitalize } from '@mui/material';
import { PokemonResearchTask } from '../types';

function ResearchTaskItem({ value, children, ...props }: IconContainerProps) {
  return (
    <Box
      component="span"
      sx={{
        width: 50,
        height: 30,
        // background: 'currentColor',
        borderRadius: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      {...props}
    >
      {value}
    </Box>
  );
}

export interface ResearchTaskProps extends PokemonResearchTask {
  researchValue: number;
  onChange?: (value: number) => void;
}

export default function ResearchTask({
  task: name,
  requirements: values,
  researchValue,
  onChange = () => null,
}: ResearchTaskProps) {
  const ConnectedResearchTaskItem = useCallback(
    ({ value, ...props }: IconContainerProps) => {
      return <ResearchTaskItem value={values[value - 1]} {...props} />;
    },
    [values]
  );

  return (
    <Box>
      <Typography>{capitalize(name)}</Typography>
      <Rating
        value={values.indexOf(researchValue) + 1}
        max={values.length}
        sx={{
          '& .MuiRating-icon': { color: 'common.white' },
          '& .MuiRating-iconFilled': { color: 'primary.main' },
        }}
        IconContainerComponent={ConnectedResearchTaskItem}
        onChange={(_e, value) => onChange((value && values[value - 1]) || 0)}
      />
    </Box>
  );
}
