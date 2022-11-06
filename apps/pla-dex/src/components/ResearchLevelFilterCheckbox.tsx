// import Checkbox from '@mui/material/Checkbox';
// import { useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../app/store';
// import {
//   addReserachLevelFilter,
//   removeResearchLevelFilter,
// } from '../slices/researchTaskSlice';
// import { ResearchStatus } from '../types';

// interface ResearchLevelFilterCheckboxProps {
//   status: ResearchStatus;
// }

// export default function ResearchLevelFilterCheckbox({
//   status,
// }: ResearchLevelFilterCheckboxProps) {
//   const dispatch = useDispatch();
//   const filters = useSelector((state: RootState) => state.researchTask.filters);
//   const handleChange = useCallback(
//     (e: React.ChangeEvent<HTMLInputElement>) => {
//       dispatch(
//         e.target.checked
//           ? addReserachLevelFilter(status)
//           : removeResearchLevelFilter(status)
//       );
//     },
//     [dispatch, status]
//   );

//   return (
//     <Checkbox
//       value={status}
//       onChange={handleChange}
//       checked={!!filters?.includes?.(status)}
//     />
//   );
// }
