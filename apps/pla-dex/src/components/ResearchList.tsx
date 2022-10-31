import { List } from '@mui/material';
import union from 'lodash/union';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { RegionName } from '../types';
import calculateResearchLevel from '../utils/calculateResearchLevel';
import ResearchListItem from './ResearchListItem';

export default function ResearchList() {
  const listItems = useSelector((state: RootState) => {
    const availableMonstersByRegion =
      state.region?.filters?.reduce(
        (prev: number[], regionName: RegionName) =>
          union(state?.region?.regions?.[regionName]?.monsters || [], prev),
        []
      ) || [];

    return Object.keys(state.monster.records).filter((stringDex) => {
      const dex = Number(stringDex);
      const { researchTasks, progress } = state.researchTask.records[dex];
      const { status } = calculateResearchLevel({
        dex,
        tasks: researchTasks,
        progress,
      });

      return (
        // filter by available regions
        ((availableMonstersByRegion.length > 0 &&
          availableMonstersByRegion.includes(dex)) ||
          availableMonstersByRegion.length === 0) &&
        // filter by available research levels
        ((state.researchTask.filters.length > 0 &&
          state.researchTask.filters.includes(status)) ||
          state.researchTask.filters.length === 0)
      );
    });
  });

  return (
    <List disablePadding>
      {listItems.map((dex) => (
        <ResearchListItem key={dex} dex={Number(dex)} />
      ))}
    </List>
  );
}
