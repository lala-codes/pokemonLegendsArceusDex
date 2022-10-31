import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import AlabasterIcelands from './icons/AlabasterIcelands';
import CoronetHighlands from './icons/CoronetHighlands';
import CobaltCoastlands from './icons/CobaltCoastlands';
import CrimsonMirelands from './icons/CrimsonMirelands';
import ObsidianField from './icons/ObsidianField';
import RegionIcon from './icons/RegionIcon';
import { RegionFilterCheckbox } from './RegionFilterCheckbox';
import { clearRegionFilter } from '../slices/regionSlice';

export default function RegionFilter() {
  const dispatch = useDispatch();
  const regionFilters = useSelector((state: RootState) => state.region.filters);
  return (
    <FormGroup row>
      <Checkbox
        icon={<RegionIcon />}
        checkedIcon={<RegionIcon />}
        value="all"
        checked={regionFilters?.length === 0}
        onClick={() => dispatch(clearRegionFilter())}
      />
      <RegionFilterCheckbox name="field" icon={<ObsidianField />} />
      <RegionFilterCheckbox name="crimson" icon={<CrimsonMirelands />} />
      <RegionFilterCheckbox name="coast" icon={<CobaltCoastlands />} />
      <RegionFilterCheckbox name="highland" icon={<CoronetHighlands />} />
      <RegionFilterCheckbox name="ice" icon={<AlabasterIcelands />} />
    </FormGroup>
  );
}
