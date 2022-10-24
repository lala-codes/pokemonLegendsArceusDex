import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { clearRegionFilter, setRegionFilter } from '../slices/regionSlice';
import { RegionName } from '../types';
import AlabasterIcelands from './icons/AlabasterIcelands';
import CoronetHighlands from './icons/CoronetHighlands';
import CobaltCoastlands from './icons/CobaltCoastlands';
import CrimsonMirelands from './icons/CrimsonMirelands';
import ObsidianField from './icons/ObsidianField';
import ObsidianFieldFilled from './icons/ObsidianFieldFilled';
import CrimsonMirelandsFilled from './icons/CrimsonMirelandsFilled';
import CobaltCoastlandsFilled from './icons/CobaltCoastlandsFilled';
import CoronetHighlandsFilled from './icons/CoronetHighlandsFilled';
import AlabasterIcelandsFilled from './icons/AlabasterIcelandsFilled';

export default function ResearchAppBar() {
  const dispatch = useDispatch();
  const currentRegionFilter = useSelector(
    (state: RootState) => state.region.filter
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar color="primary">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Research
          </Typography>

          <RadioGroup
            row
            value={currentRegionFilter || 'all'}
            onChange={(e) => {
              if (e.target.value === 'all') {
                dispatch(clearRegionFilter());
              } else {
                dispatch(setRegionFilter(e.target.value as RegionName));
              }
            }}
          >
            <Radio
              icon={<CatchingPokemonIcon />}
              checkedIcon={<CatchingPokemonIcon />}
              value="all"
            />
            <Radio
              icon={<ObsidianField />}
              checkedIcon={<ObsidianFieldFilled />}
              value="field"
            />
            <Radio
              icon={<CrimsonMirelands />}
              checkedIcon={<CrimsonMirelandsFilled />}
              value="crimson"
            />
            <Radio
              icon={<CobaltCoastlands />}
              checkedIcon={<CobaltCoastlandsFilled />}
              value="coast"
            />
            <Radio
              icon={<CoronetHighlands />}
              checkedIcon={<CoronetHighlandsFilled />}
              value="highland"
            />
            <Radio
              icon={<AlabasterIcelands />}
              checkedIcon={<AlabasterIcelandsFilled />}
              value="ice"
            />
          </RadioGroup>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
