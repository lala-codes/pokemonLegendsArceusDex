import Checkbox from '@mui/material/Checkbox';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { removeRegionFilter, addRegionFilter } from '../slices/regionSlice';
import { RegionName } from '../types';

interface RegionFilterCheckboxProps {
  name: RegionName;
  icon: React.ReactNode;
}

export function RegionFilterCheckbox({
  name,
  icon,
}: RegionFilterCheckboxProps) {
  const dispatch = useDispatch();
  const regionFilters = useSelector((state: RootState) => state.region.filters);
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(
        e.target.checked ? addRegionFilter(name) : removeRegionFilter(name)
      );
    },
    [dispatch, name]
  );

  return (
    <Checkbox
      icon={icon}
      checkedIcon={icon}
      value={name}
      onChange={handleChange}
      checked={!!regionFilters?.includes?.(name)}
    />
  );
}
