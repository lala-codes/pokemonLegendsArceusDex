import FormGroup from '@mui/material/FormGroup';
import AlabasterIcelands from './icons/AlabasterIcelands';
import CoronetHighlands from './icons/CoronetHighlands';
import CobaltCoastlands from './icons/CobaltCoastlands';
import CrimsonMirelands from './icons/CrimsonMirelands';
import ObsidianField from './icons/ObsidianField';
import { RegionFilterCheckbox } from './RegionFilterCheckbox';
import { FormControl, FormControlLabel, FormLabel } from '@mui/material';

export default function RegionFilter() {
  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Region Filter</FormLabel>
      <FormGroup>
        <FormControlLabel
          label="Obsidian Field"
          control={
            <RegionFilterCheckbox name="field" icon={<ObsidianField />} />
          }
        />
        <FormControlLabel
          label="Crimson Mirelands"
          control={
            <RegionFilterCheckbox name="crimson" icon={<CrimsonMirelands />} />
          }
        />
        <FormControlLabel
          label="Cobalt Coastlands"
          control={
            <RegionFilterCheckbox name="coast" icon={<CobaltCoastlands />} />
          }
        />
        <FormControlLabel
          label="Coronet Highlands"
          control={
            <RegionFilterCheckbox name="highland" icon={<CoronetHighlands />} />
          }
        />
        <FormControlLabel
          label="Alabaster Icelands"
          control={
            <RegionFilterCheckbox name="ice" icon={<AlabasterIcelands />} />
          }
        />
      </FormGroup>
    </FormControl>
  );
}
