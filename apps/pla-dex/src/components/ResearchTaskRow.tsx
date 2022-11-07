import Box from '@mui/material/Box';
import Rating, { IconContainerProps } from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useCallback, useMemo } from 'react';
import { StandardTask } from '../types';
import BoostIcon from './icons/BoostIcon';
import t from '../utils/t';
import { last } from 'lodash';
import { TextField } from '@mui/material';

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

export interface ResearchTaskRowProps extends StandardTask {
  onChange?: (value: number) => void;
  move?: string;
  request?: string;
}

export default function ResearchTaskRow({
  type,
  requirements: values,
  isDoubled = false,
  progress = 0,
  onChange = () => null,
  move,
  request,
}: ResearchTaskRowProps) {
  const ConnectedResearchTaskItem = useCallback(
    ({ value, ...props }: IconContainerProps) => {
      return <ResearchTaskItem value={values[value - 1]} {...props} />;
    },
    [values]
  );

  const currentValue = useMemo(() => {
    if (progress === 0) {
      return 0;
    }

    const lastItem = last(values) as number;
    if (progress >= lastItem) {
      return values.length;
    }

    return Math.max(
      0,
      values.findIndex((v) => v > progress)
    );
  }, [progress, values]);

  return (
    <Box
      display="flex"
      justifyContent="flex-end"
      alignItems="center"
      flexWrap="wrap"
    >
      <Box
        display="flex"
        alignItems="flex-start"
        sx={{ flexGrow: 1, width: { xs: '100%', sm: 'auto' } }}
      >
        <Box display="flex" alignItems="center">
          {isDoubled && (
            <Box
              display="inline-block"
              sx={{
                position: 'relative',
                overflow: 'hidden',
                height: '1.5rem',
                width: '1.5rem',
                mr: 2,
                '&::after': {
                  content: '" "',
                  position: 'absolute',
                  top: 4,
                  left: 4,
                  width: '1rem',
                  height: '1rem',
                  bgcolor: 'common.white',
                  zIndex: -1,
                },
              }}
            >
              <BoostIcon sx={{ mr: 2 }} color="error" />
            </Box>
          )}
          {!isDoubled && (
            <Box
              display="inline-block"
              bgcolor="background.default"
              width={24}
              height={24}
              sx={{
                verticalAlign: 'text-bottom',
                mr: 2,
                borderRadius: 1,
              }}
            />
          )}
        </Box>
        <Typography sx={{ flexGrow: 1 }}>
          {t(type, { move, request })}
        </Typography>
        <TextField
          type="number"
          variant="standard"
          value={progress}
          onChange={(e) => onChange(Number(e.target.value))}
          sx={{ width: 40 }}
          InputProps={{
            sx: { typography: 'h5', '& > input': { textAlign: 'center' } },
          }}
        />
      </Box>
      <Rating
        value={currentValue}
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
