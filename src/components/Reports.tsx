import { useState, useEffect } from "react";
import { Box, Tab, Tabs, Button } from "@mui/material";
import ExpenseGrid from "./ExpenseGrid";
import { useAppSelector, useAppDispatch } from "../reducers/hooks";
import ModalAddReport from "../views/ModalAddReport";
import { selectReport } from '../reducers/slices/reportSlice'

const Reports = () => {
  const { reports, selectedReport } = useAppSelector(state => state.reports);
  const [value, setValue] = useState<number>(0);
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (reports[value]?.id) {
      dispatch(selectReport(reports[value].id));
    }
  })

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    dispatch(selectReport(reports[newValue].id));
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
          {reports.map(report => {
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
        {selectedReport ? <ExpenseGrid /> : null}
      </Box>
      <ModalAddReport
        open={open}
        setOpen={setOpen}
      />
    </>
  )
}
 
export default Reports;