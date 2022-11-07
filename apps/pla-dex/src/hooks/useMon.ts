import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { selectMonByDex } from '../slices/monSlice';
import { Dex, StringDex } from '../types';

export default function useMon(dex: StringDex | Dex) {
  return useSelector((state: RootState) => selectMonByDex(state.monster, dex));
}
