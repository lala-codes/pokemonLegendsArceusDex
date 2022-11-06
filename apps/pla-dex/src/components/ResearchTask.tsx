import Box from '@mui/material/Box';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useCallback } from 'react';
import { capitalize } from '@mui/material';
import { BaseTask } from '../types';
import BoostIcon from './icons/BoostIcon';

function ResearchTaskItem({ value, children, ...props }: IconContainerProps) {
  return (
    <Box
      component="span"
      sx={{
        width: 50,
        height: 30,
        borderRadius: 1,
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

export interface ResearchTaskProps extends BaseTask {
  researchValue: number;
  onChange?: (value: number) => void;
}

export default function ResearchTask({
  type: name,
  requirements: values,
  researchValue,
  isDoubled = false,
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
      <Typography>
        {isDoubled && <BoostIcon sx={{ mr: 2, verticalAlign: 'middle' }} />}
        {capitalize(name)}
      </Typography>
      <Rating
        value={values.indexOf(researchValue) + 1}
        max={values.length}
        sx={{
          marginLeft: -1,
          marginRight: -1,
          '& .MuiRating-icon': {
            margin: 1,
            backgroundColor: 'background.default',
            color: 'primary.contrastText',
          },
          '& .MuiRating-iconFilled': {
            backgroundColor: 'success.main',
            color: 'primary.contrastText',
          },
        }}
        IconContainerComponent={ConnectedResearchTaskItem}
        onChange={(_e, value) => onChange((value && values[value - 1]) || 0)}
      />
    </Box>
  );
}
