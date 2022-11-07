import { Drawer } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { viewMonList } from '../slices/monSlice';
import ResearchTaskContent from './ResearchTaskContent';

export default function ResearchTaskCard() {
  const dispatch = useDispatch();
  const viewId = useSelector((state: RootState) => state.monster.viewId);
  const [open, setOpen] = useState<boolean>(!!viewId);

  useEffect(() => {
    if (viewId) {
      setOpen(true);
    }
  }, [viewId]);

  return (
    <Drawer
      open={open}
      dir="left"
      onClose={() => setOpen(false)}
      PaperProps={{ sx: { width: '100%', p: 4 } }}
      SlideProps={{ onExited: () => dispatch(viewMonList()) }}
    >
      {viewId && (
        <ResearchTaskContent dex={viewId} onClose={() => setOpen(false)} />
      )}
    </Drawer>
  );
}
