import { useState, useEffect } from "react";
import { Box, Tab, Tabs, Button } from "@mui/material";
import ExpenseGrid from "./ExpenseGrid";
import { useAppSelector } from "../reducers/hooks";
import ModalAddReport from "../views/ModalAddReport";

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
        price: 1000, 
      },
      {
        id: 2, 
        category: "Transit", 
        expense: "gas station",
        // date: "2024-05-17T14:30:25Z", 
        price: 46.42, 
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
        price: 12.45, 
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
        price: 86.42, 
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
        price: 1400, 
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
        price: 2000, 
      },
      {
        id: 2, 
        category: "Transit", 
        expense: "gas station",
        // date: "2024-05-17T14:30:25Z", 
        price: 126.42, 
      },
    ]
  }
]

const Reports = () => {
  const reports = useAppSelector(state => state.reports);
  const [value, setValue] = useState<number>(0);
  const [open, setOpen] = useState(false);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log(`newValue=${newValue}`)
    setValue(newValue);

  };

  const onClickAdd = () => {
    setOpen(true);
  }

  return (
    <>
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
          {reports.reports.map(report => {
            return (
              <Tab label={report.name} />
            )
          })}
          <Button
            variant="outlined"
            onClick={onClickAdd}
            sx={{
              // height: '56px',
              px: 3,
              borderRadius: '8px',
              // border: '2px solid #000',
              color: '#000',
              backgroundColor: 'white',
              fontWeight: 'normal',
              '&:hover': {
                backgroundColor: '#f5f5f5',
                border: '2px solid #000',
              }
            }}
          >
            Add Report
          </Button>
        </Tabs>
        {reports.reports.map((report, ind) => {
          return (
            <ExpenseGrid
              index={ind}
              value={value}
              rows={report.purchases}
            />
          )
        })}
      </Box>
      <ModalAddReport
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}
 
export default Reports;