import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridColDef, Toolbar, ToolbarButton } from '@mui/x-data-grid';
import '../styles/home.css'
// @ts-ignore
import categoryOptions from '../constants/categoryOptions.js';

interface ExpenseGridProps {
  index: number,
  value: number,
  rows: Array<any>,
}

const columns: GridColDef<(typeof rows)[number]>[] = [
  { 
    field: 'category',
    headerName: 'Category',
    type: 'singleSelect',
    valueOptions: categoryOptions,
    editable: true,
    width: 150,
  },
  {
    field: 'date',
    headerName: 'Purchase Date',
    type: 'date',
    width: 180,
    editable: true,
  },
  {
    field: 'expense',
    headerName: 'Expense',
    width: 150,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 150,
    editable: true,
    valueGetter: (value) => {
      // TO DO: fix formatting
      if (value){
          return `$${value}`
      } else {
          return `$0.00`
      }
    }
  },
  // TO DO: buttons for add, delete
];

export default function ExpenseGrid({
  index, 
  value,
  rows,
}: ExpenseGridProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
    >
      {value === index &&
        <Box sx={{ 
          // display: 'flex',
          // height: 910,
        }}>
          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            // initialState={{
            //   pagination: {
            //     paginationModel: {
            //       pageSize: 5,
            //     },
            //   },
            // }}
            // pageSizeOptions={[5]}
            // checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      }
    </div>
  );
}