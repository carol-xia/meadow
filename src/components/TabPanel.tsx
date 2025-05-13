import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

interface TabPanelProps {
  tabs: Array<any>;
}

/**
 * Take an array of expenses
 * @returns a row of tabs for each expense, 
 * and is scrollable (horizontally)
 */

interface CustomTabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel({
  children,
  index,
  value,
}: CustomTabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const TabPanel = ({
  tabs,
}: TabPanelProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange}>
        {tabs.map(tab => {
          return (
            <Tab label={tab.name} />
          )
        })}
      </Tabs>
      {tabs.map(tab => {
        return (
          <CustomTabPanel index={tab.id - 1} value={value}>
            {tab.name}
          </CustomTabPanel>
        )
      })}
    </Box>
  )
}
  
export default TabPanel;