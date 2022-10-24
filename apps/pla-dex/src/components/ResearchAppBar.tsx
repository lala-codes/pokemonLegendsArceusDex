import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GrassIcon from '@mui/icons-material/Grass';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import TerrainIcon from '@mui/icons-material/Terrain';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import { Radio, RadioGroup } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { clearRegionFilter, setRegionFilter } from '../slices/regionSlice';
import { RegionName } from '../types';

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
              icon={<GrassIcon />}
              checkedIcon={<GrassIcon />}
              value="field"
            />
            <Radio
              icon={<ThunderstormIcon />}
              checkedIcon={<ThunderstormIcon />}
              value="crimson"
            />
            <Radio
              icon={<WbSunnyIcon />}
              checkedIcon={<WbSunnyIcon />}
              value="coast"
            />
            <Radio
              icon={<TerrainIcon />}
              checkedIcon={<TerrainIcon />}
              value="highland"
            />
            <Radio
              icon={<AcUnitIcon />}
              checkedIcon={<AcUnitIcon />}
              value="ice"
            />
          </RadioGroup>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </Box>
  );
}
