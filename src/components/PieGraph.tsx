import { PieChart } from '@mui/x-charts/PieChart';
// @ts-ignore
import categoryOptions from '../constants/categoryOptions.js';

const data = [
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

const formatPieGraphData = (dataArr: Array<any>) => {
  let categorySums = {};
  categoryOptions.forEach((category, ind) => {
    categorySums = data.reduce((sums, item) => {
    // If this category doesn't exist in our sums object yet, initialize it to 0
      if (!sums[item.category]) {
        sums[item.category] = 0;
      }
    
      // Add the current item's price to the appropriate category sum
      sums[item.category] += item.price;
    
      return sums;
    }, {});
  })
  const formattedData = Object.entries(categorySums).map(([category, total], ind) => ({
    id: ind,
    label: category,
    value: total,
  }));
  return formattedData;
}

const valueFormatter = (item: { value: number }) => `$${item.value}`;

export default function PieGraph() {
  return (
    <PieChart
      series={[
        {
          data: formatPieGraphData(data),
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter,
        },
      ]}
      // width={400}
      // height={400}
    />
  );
}