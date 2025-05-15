import { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import ExpenseGrid from "./ExpenseGrid";

const fakeReports =  [
  {
    id: '0', 
    name: "February", 
    purchases: [      
      {
        id: 0, 
        category: "Groceries", 
        expense: "QFC",
        // date: "2024-05-01T14:30:25Z", 
        price: 84.60, 
      },
      {
        id: 1, 
        category: "Housing", 
        expense: "February rent",
        // date: "2024-05-16T14:30:25Z", 
        price: 1600, 
      },
      {
        id: 2, 
        category: "Transit", 
        expense: "gas station",
        // date: "2024-05-17T14:30:25Z", 
        price: 26.42, 
      },
    ]
  },
  {
    id: '1', 
    name: "March", 
    purchases: [      
      {
        id: 0, 
        category: "Groceries", 
        expense: "Trader Joe’s",
        // date: "2024-05-01T14:30:25Z", 
        price: 32.45, 
      },
      {
        id: 1, 
        category: "Housing", 
        expense: "March rent",
        // date: "2024-05-16T14:30:25Z", 
        price: 1600, 
      },
      {
        id: 2, 
        category: "Transit", 
        expense: "gas station",
        // date: "2024-05-17T14:30:25Z", 
        price: 26.42, 
      },
    ]
  },
  {
    id: '2', 
    name: "April", 
    purchases: [      
      {
        id: 0, 
        category: "Groceries", 
        expense: "Trader Joe’s",
        // date: "2024-05-01T14:30:25Z", 
        price: 32.45, 
      },
      {
        id: 1, 
        category: "Housing", 
        expense: "April rent",
        // date: "2024-05-16T14:30:25Z", 
        price: 1600, 
      },
      {
        id: 2, 
        category: "Transit", 
        expense: "gas station",
        // date: "2024-05-17T14:30:25Z", 
        price: 26.42, 
      },
    ]
  },
  {
    id: '3', 
    name: "May", 
    purchases: [      
      {
        id: 0, 
        category: "Groceries", 
        expense: "Trader Joe’s",
        // date: "2024-05-01T14:30:25Z", 
        price: 32.45, 
      },
      {
        id: 1, 
        category: "Housing", 
        expense: "May rent",
        // date: "2024-05-16T14:30:25Z", 
        price: 1600, 
      },
      {
        id: 2, 
        category: "Transit", 
        expense: "gas station",
        // date: "2024-05-17T14:30:25Z", 
        price: 26.42, 
      },
    ]
  }
]

const Reports = () => {
  let reports = fakeReports; // TO DO
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{
        borderBottom: 2,
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
    }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        {reports.map(tab => {
          return (
            <Tab label={tab.name} />
          )
        })}
        <Tab icon={<AddIcon />} aria-label="add" />
      </Tabs>
      {reports.map((report, ind) => {
        return (
          <ExpenseGrid
            index={ind}
            value={value}
            rows={report.purchases}
          />
        )
      })}
    </Box>
  )
}
 
export default Reports;