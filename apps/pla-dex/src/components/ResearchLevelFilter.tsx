import FormGroup from '@mui/material/FormGroup';
import ReserachLevelFilterCheckbox from './ReserachLevelFilterCheckbox';
import PokeballCaught from './icons/PokeballCaught';
import CompleteIcon from './icons/CompleteIcon';
import PerfectIcon from './icons/PerfectIcon';
import { FormControl, FormControlLabel, FormLabel } from '@mui/material';

export default function ResearchLevelFilter() {
  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">Research Level</FormLabel>
      <FormGroup>
        <FormControlLabel
          label="Incomplete"
          control={
            <ReserachLevelFilterCheckbox
              status="incomplete"
              icon={<PokeballCaught />}
            />
          }
        />
        <FormControlLabel
          label="Complete"
          control={
            <ReserachLevelFilterCheckbox
              status="complete"
              icon={<CompleteIcon />}
            />
          }
        />
        <FormControlLabel
          label="Perfect"
          control={
            <ReserachLevelFilterCheckbox
              status="perfect"
              icon={<PerfectIcon />}
            />
          }
        />
      </FormGroup>
    </FormControl>
  );
}
