import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { useState } from 'react';
import RegionFilter from './RegionFilter';
import ResearchLevelFilter from './ResearchLevelFilter';

export default function ResearchAppBar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar color="primary">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Research
            </Typography>
            <Button
              color="inherit"
              endIcon={<ExpandMore />}
              onClick={() => setOpen(!open)}
            >
              Filters
            </Button>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        PaperProps={{ sx: { p: 4 } }}
      >
        <ResearchLevelFilter />
        <RegionFilter />
      </SwipeableDrawer>
    </>
  );
}
