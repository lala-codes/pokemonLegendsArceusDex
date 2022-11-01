import Checkbox from '@mui/material/Checkbox';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { removeRegionFilter, addRegionFilter } from '../slices/regionSlice';
import { RegionName } from '../types';

interface RegionFilterCheckboxProps {
  name: RegionName;
}

export function RegionFilterCheckbox({ name }: RegionFilterCheckboxProps) {
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
      value={name}
      onChange={handleChange}
      checked={!!regionFilters?.includes?.(name)}
    />
  );
}
