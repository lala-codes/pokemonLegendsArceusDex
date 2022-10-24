import { List } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ResearchListItem from './ResearchListItem';

export default function ResearchList() {
  const currentRegionFilter = useSelector(
    (state: RootState) =>
      state.region.filter && state.region.regions[state.region.filter]
  );
  const records = useSelector((state: RootState) => state.monster.records);
  const listItems = useMemo(
    () =>
      Object.keys(records).filter(
        (dex) =>
          !currentRegionFilter ||
          currentRegionFilter.monsters.includes(Number(dex))
      ),
    [records, currentRegionFilter]
  );

  return (
    <List disablePadding>
      {listItems.map((dex) => (
        <ResearchListItem key={dex} dex={Number(dex)} />
      ))}
    </List>
  );
}
