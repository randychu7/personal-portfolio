import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/system';

const StyledTab = styled(Tab)(({ theme }) => ({
  '&.Mui-selected': {
    color: theme.palette.common.white,
  },
  '&.MuiTab-root': {
    // Light mode color
    backgroundColor: theme.palette.mode === 'light' ? '#5A48A9' : '#FCD34D',
    // Dark mode color
    color: theme.palette.mode === 'light' ? '#FFF' : '#000',
  },
}));

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} centered>
        <StyledTab label="All" />
        <StyledTab label="Web" />
        <StyledTab label="Full Stack" />
      </Tabs>
    </Box>
  );
}
