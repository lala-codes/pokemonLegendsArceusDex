import FormGroup from '@mui/material/FormGroup';
import ReserachLevelFilterCheckbox from './ReserachLevelFilterCheckbox';
import PokeballCaught from './icons/PokeballCaught';
import CompleteIcon from './icons/CompleteIcon';
import PerfectIcon from './icons/PerfectIcon';

export default function ResearchLevelFilter() {
  return (
    <FormGroup row>
      <ReserachLevelFilterCheckbox
        status="incomplete"
        icon={<PokeballCaught />}
      />
      <ReserachLevelFilterCheckbox status="complete" icon={<CompleteIcon />} />
      <ReserachLevelFilterCheckbox status="perfect" icon={<PerfectIcon />} />
    </FormGroup>
  );
}
