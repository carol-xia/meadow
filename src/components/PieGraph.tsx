import { PieChart } from '@mui/x-charts/PieChart';
import { useAppSelector, useAppDispatch } from '../reducers/hooks';
// @ts-ignore
import categoryOptions from '../constants/categoryOptions.js';

const formatPieGraphData = (dataArr: Array<any>) => {
  let categorySums = {};
  categoryOptions.forEach(category => {
    categorySums = dataArr.reduce((sums, item) => {
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
  const { selectedReport } = useAppSelector(state => state.reports);
  const { purchases } = useAppSelector(state => state.purchases);
  const filteredPurchases = purchases.filter(
    purchase => purchase.reportId === selectedReport
  );

  return (
    <PieChart
      series={[
        {
          data: formatPieGraphData(filteredPurchases),
          highlightScope: { fade: 'global', highlight: 'item' },
          faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
          valueFormatter,
        },
      ]}
    />
  );
}