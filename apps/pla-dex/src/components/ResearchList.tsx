import { List } from '@mui/material';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ResearchListItem from './ResearchListItem';

export default function ResearchList() {
  const records = useSelector((state: RootState) => state.monster.records);
  const listItems = useMemo(() => Object.keys(records), [records]);

  return (
    <List disablePadding>
      {listItems.map((dex) => (
        <ResearchListItem key={dex} dex={Number(dex)} />
      ))}
    </List>
  );
}
