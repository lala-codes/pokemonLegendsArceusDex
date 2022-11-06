import { List } from '@mui/material';
// import union from 'lodash/union';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
// import { RegionName } from '../types';
import ResearchListItem from './ResearchListItem';

export default function ResearchList() {
  const listItems = useSelector((state: RootState) => {
    return Object.keys(state.monster.records);
  });

  return (
    <List disablePadding>
      {listItems.map((dex) => (
        <ResearchListItem key={dex} dex={Number(dex)} />
      ))}
    </List>
  );
}
