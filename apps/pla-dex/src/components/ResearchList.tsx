import { List } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import ResearchListItem from './ResearchListItem';

export default function ResearchList() {
  const listItems = useSelector((state: RootState) => state.monster.ids);

  return (
    <List disablePadding>
      {listItems.map((dex) => (
        <ResearchListItem key={dex} dex={Number(dex)} />
      ))}
    </List>
  );
}
